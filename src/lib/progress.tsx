"use client";

/**
 * 로그인(닉네임 + 4자리 코드)과 학습 기록.
 * 브라우저(localStorage)에 바로 저장하고, 로그인하면 Supabase 에도 저장해서 기기 간에 이어진다.
 */

import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState } from "react";
import { cloudEnabled, fetchProgress, pushProgress, userKey } from "./cloud";

export type Result = "full" | "half" | "miss";
export type Source = "grammar" | "daily" | "sunday";

export type BlackholeItem = { source: Source; id: string; at: string };

export type Progress = {
  /** 모은 별 (반쪽 별은 0.5) */
  stars: number;
  /** 완성한 별자리 id */
  constellations: string[];
  /** 문법 주제별 최고 점수 (0~1) */
  topics: Record<string, { best: number; at: string }>;
  /** 틀린 문제 = 블랙홀 */
  blackhole: BlackholeItem[];
  /** 공부한 날짜 YYYY-MM-DD */
  days: string[];
  /** 찾은 이스터에그 */
  eggs: string[];
  /** 힌트 없이 맞힌 문장 id (정복한 문장) */
  cleared: string[];
  /** 날짜별로 푼 문장 수 { "2026-09-29": 12 } */
  studied: Record<string, number>;
  /** 마지막으로 바뀐 시각 (ms). 기기 간에 더 최신 기록을 고를 때 쓴다 */
  updatedAt: number;
};

export type User = { nickname: string; code: string };

const SESSION_KEY = "eung:session";
const progressKey = (u: User | null) => `eung:progress:${u ? `${u.nickname}#${u.code}` : "guest"}`;

const emptyProgress = (): Progress => ({
  stars: 0,
  constellations: [],
  topics: {},
  blackhole: [],
  days: [],
  eggs: [],
  cleared: [],
  studied: {},
  updatedAt: 0,
});

function read<T>(key: string): T | null {
  try {
    const v = localStorage.getItem(key);
    return v ? (JSON.parse(v) as T) : null;
  } catch {
    return null;
  }
}

function write(key: string, value: unknown) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch {
    /* 저장 불가 환경(시크릿 모드 등)은 조용히 무시 */
  }
}

function loadProgress(u: User | null): Progress {
  return { ...emptyProgress(), ...read<Progress>(progressKey(u)) };
}

function saveProgress(u: User | null, p: Progress) {
  write(progressKey(u), p);
}

export function today(): string {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
}

/** 오늘(또는 어제)까지 이어진 연속 공부일 */
export function streak(days: string[]): number {
  const set = new Set(days);
  const d = new Date();
  if (!set.has(today())) d.setDate(d.getDate() - 1);
  let n = 0;
  for (;;) {
    const key = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
    if (!set.has(key)) return n;
    n++;
    d.setDate(d.getDate() - 1);
  }
}

export type Sync = "local" | "loading" | "saving" | "saved" | "error";

type Ctx = {
  ready: boolean;
  user: User | null;
  progress: Progress;
  /** 클라우드 동기화 상태 (로그인 안 했거나 키가 없으면 local) */
  sync: Sync;
  login: (u: User) => void;
  logout: () => void;
  record: (source: Source, id: string, result: Result) => void;
  finishTopic: (topicId: string, score: number) => void;
  finishConstellation: (id: string) => void;
  findEgg: (id: string) => boolean;
  removeFromBlackhole: (source: Source, id: string) => void;
};

const ProgressContext = createContext<Ctx | null>(null);

/** 기록이 하나라도 있는지 (빈 기록으로 클라우드를 덮어쓰지 않으려고) */
const hasData = (p: Progress) => p.updatedAt > 0 || p.stars > 0 || p.days.length > 0;

export function ProgressProvider({ children }: { children: React.ReactNode }) {
  const [ready, setReady] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const [progress, setProgress] = useState<Progress>(emptyProgress);
  const [sync, setSync] = useState<Sync>("local");
  /** 현재 로그인한 사람의 클라우드 key (해시) */
  const keyRef = useRef<string | null>(null);
  /** 내가 바꾼 기록이 아직 클라우드에 안 올라갔는지 */
  const dirty = useRef(false);
  const latest = useRef(progress);
  useEffect(() => {
    latest.current = progress;
  }, [progress]);

  /** 클라우드에서 불러와서 더 최신인 쪽을 쓴다. 클라우드가 비었으면 local 을 올린다 */
  const pull = useCallback(async (u: User, local: Progress) => {
    if (!cloudEnabled) return;
    setSync("loading");
    try {
      const key = await userKey(u.nickname, u.code);
      keyRef.current = key;
      const remote = await fetchProgress<Progress>(key);
      if (remote && (remote.updatedAt ?? 0) >= local.updatedAt) {
        const merged = { ...emptyProgress(), ...remote };
        write(progressKey(u), merged);
        setProgress(merged);
      } else if (hasData(local)) {
        await pushProgress(key, local);
      }
      setSync("saved");
    } catch {
      setSync("error");
    }
  }, []);

  useEffect(() => {
    const u = read<User>(SESSION_KEY);
    const local = loadProgress(u);
    // localStorage 는 브라우저에서만 읽을 수 있어서 마운트 후에 불러온다
    /* eslint-disable react-hooks/set-state-in-effect */
    setUser(u);
    setProgress(local);
    setReady(true);
    /* eslint-enable react-hooks/set-state-in-effect */
    if (u) void pull(u, local);
  }, [pull]);

  /** 바뀐 기록을 클라우드에 올린다 (1초 모아서) */
  const push = useCallback(async () => {
    const key = keyRef.current;
    if (!cloudEnabled || !key || !dirty.current) return;
    dirty.current = false;
    setSync("saving");
    try {
      await pushProgress(key, latest.current);
      setSync("saved");
    } catch {
      dirty.current = true;
      setSync("error");
    }
  }, []);

  useEffect(() => {
    if (!dirty.current) return;
    const t = setTimeout(() => void push(), 1000);
    return () => clearTimeout(t);
  }, [progress, push]);

  // 탭을 닫거나 다른 앱으로 갈 때 남은 기록을 바로 올린다
  useEffect(() => {
    const flush = () => document.visibilityState === "hidden" && void push();
    document.addEventListener("visibilitychange", flush);
    return () => document.removeEventListener("visibilitychange", flush);
  }, [push]);

  const update = useCallback(
    (fn: (p: Progress) => Progress) => {
      setProgress((prev) => {
        const next = { ...fn(prev), updatedAt: Date.now() };
        saveProgress(user, next);
        return next;
      });
      if (user) dirty.current = true;
    },
    [user],
  );

  const login = useCallback(
    (u: User) => {
      write(SESSION_KEY, u);
      // 이 닉네임으로 처음 들어오면 지금까지의 게스트 기록을 이어받는다
      const own = read<Progress>(progressKey(u));
      const local = own ? loadProgress(u) : loadProgress(null);
      if (!own) write(progressKey(u), local);
      dirty.current = false;
      setUser(u);
      setProgress(local);
      void pull(u, local);
    },
    [pull],
  );

  const logout = useCallback(() => {
    void push();
    try {
      localStorage.removeItem(SESSION_KEY);
    } catch {}
    keyRef.current = null;
    dirty.current = false;
    setUser(null);
    setSync("local");
    setProgress(loadProgress(null));
  }, [push]);

  const record = useCallback(
    (source: Source, id: string, result: Result) =>
      update((p) => {
        const days = p.days.includes(today()) ? p.days : [...p.days, today()];
        const rest = p.blackhole.filter((b) => !(b.source === source && b.id === id));
        return {
          ...p,
          days,
          stars: p.stars + (result === "full" ? 1 : result === "half" ? 0.5 : 0),
          cleared: result === "full" && !p.cleared.includes(id) ? [...p.cleared, id] : p.cleared,
          studied: { ...p.studied, [today()]: (p.studied[today()] ?? 0) + 1 },
          // 틀리면 블랙홀로, 힌트 없이 맞히면 블랙홀에서 탈출
          blackhole:
            result === "miss"
              ? [...rest, { source, id, at: new Date().toISOString() }]
              : result === "full"
                ? rest
                : p.blackhole,
        };
      }),
    [update],
  );

  const finishTopic = useCallback(
    (topicId: string, score: number) =>
      update((p) => {
        const prev = p.topics[topicId]?.best ?? 0;
        return {
          ...p,
          topics: { ...p.topics, [topicId]: { best: Math.max(prev, score), at: new Date().toISOString() } },
        };
      }),
    [update],
  );

  const finishConstellation = useCallback(
    (id: string) =>
      update((p) => (p.constellations.includes(id) ? p : { ...p, constellations: [...p.constellations, id] })),
    [update],
  );

  const findEgg = useCallback(
    (id: string) => {
      const isNew = !progress.eggs.includes(id);
      if (isNew) update((p) => (p.eggs.includes(id) ? p : { ...p, eggs: [...p.eggs, id] }));
      return isNew;
    },
    [progress.eggs, update],
  );

  const removeFromBlackhole = useCallback(
    (source: Source, id: string) =>
      update((p) => ({ ...p, blackhole: p.blackhole.filter((b) => !(b.source === source && b.id === id)) })),
    [update],
  );

  const value = useMemo(
    () => ({ ready, user, progress, sync, login, logout, record, finishTopic, finishConstellation, findEgg, removeFromBlackhole }),
    [ready, user, progress, sync, login, logout, record, finishTopic, finishConstellation, findEgg, removeFromBlackhole],
  );

  return <ProgressContext.Provider value={value}>{children}</ProgressContext.Provider>;
}

export function useProgress(): Ctx {
  const ctx = useContext(ProgressContext);
  if (!ctx) throw new Error("useProgress 는 ProgressProvider 안에서만 쓸 수 있어요");
  return ctx;
}
