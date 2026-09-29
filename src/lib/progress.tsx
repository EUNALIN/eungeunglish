"use client";

/**
 * 로그인(닉네임 + 4자리 코드)과 학습 기록.
 * 지금은 브라우저(localStorage)에 저장한다.
 * 나중에 Supabase 로 옮길 때는 loadProgress / saveProgress 만 바꾸면 된다.
 */

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";

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

type Ctx = {
  ready: boolean;
  user: User | null;
  progress: Progress;
  login: (u: User) => void;
  logout: () => void;
  record: (source: Source, id: string, result: Result) => void;
  finishTopic: (topicId: string, score: number) => void;
  finishConstellation: (id: string) => void;
  findEgg: (id: string) => boolean;
  removeFromBlackhole: (source: Source, id: string) => void;
};

const ProgressContext = createContext<Ctx | null>(null);

export function ProgressProvider({ children }: { children: React.ReactNode }) {
  const [ready, setReady] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const [progress, setProgress] = useState<Progress>(emptyProgress);

  useEffect(() => {
    const u = read<User>(SESSION_KEY);
    // localStorage 는 브라우저에서만 읽을 수 있어서 마운트 후에 불러온다
    /* eslint-disable react-hooks/set-state-in-effect */
    setUser(u);
    setProgress(loadProgress(u));
    setReady(true);
    /* eslint-enable react-hooks/set-state-in-effect */
  }, []);

  const update = useCallback(
    (fn: (p: Progress) => Progress) => {
      setProgress((prev) => {
        const next = fn(prev);
        saveProgress(user, next);
        return next;
      });
    },
    [user],
  );

  const login = useCallback((u: User) => {
    write(SESSION_KEY, u);
    setUser(u);
    setProgress(loadProgress(u));
  }, []);

  const logout = useCallback(() => {
    try {
      localStorage.removeItem(SESSION_KEY);
    } catch {}
    setUser(null);
    setProgress(loadProgress(null));
  }, []);

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
    () => ({ ready, user, progress, login, logout, record, finishTopic, finishConstellation, findEgg, removeFromBlackhole }),
    [ready, user, progress, login, logout, record, finishTopic, finishConstellation, findEgg, removeFromBlackhole],
  );

  return <ProgressContext.Provider value={value}>{children}</ProgressContext.Provider>;
}

export function useProgress(): Ctx {
  const ctx = useContext(ProgressContext);
  if (!ctx) throw new Error("useProgress 는 ProgressProvider 안에서만 쓸 수 있어요");
  return ctx;
}
