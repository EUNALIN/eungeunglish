"use client";

import Link from "next/link";
import { useState } from "react";
import WritingQuiz from "@/components/WritingQuiz";
import { sundayExercises, sundayExpressions, sundayFixes, sundayPatterns } from "@/data/sunday";
import { speak } from "@/lib/speech";
import { useProgress, type Result } from "@/lib/progress";
import type { SundayExercise, SundayPattern } from "@/lib/types";

/** 한 번에 푸는 문제 수 */
const ROUND = 10;

type Mode = "pattern" | "fix" | "expr" | "mix";
type View = { kind: "menu" } | { kind: "cards" } | { kind: "quiz"; title: string; items: SundayExercise[] } | { kind: "done"; title: string; results: Result[] };

const MODES: { id: Mode; emoji: string; title: string; desc: string; pool: () => SundayExercise[] }[] = [
  { id: "pattern", emoji: "✍️", title: "패턴 영작", desc: "수업 패턴으로 한국어 → 영어", pool: () => sundayExercises },
  { id: "fix", emoji: "🔧", title: "내 문장 고치기", desc: "피드백 받은 문장 다시 고쳐 쓰기", pool: () => sundayFixes },
  { id: "expr", emoji: "💬", title: "표현 퀴즈", desc: "put off, end up… 표현 꺼내 쓰기", pool: () => sundayExpressions },
  {
    id: "mix",
    emoji: "🎲",
    title: "전부 섞어서",
    desc: "셋 다 랜덤으로 섞기",
    pool: () => [...sundayExercises, ...sundayFixes, ...sundayExpressions],
  },
];

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

/** 아직 정복 못 한 문제부터 랜덤으로 */
function pick(pool: SundayExercise[], cleared: string[], n: number) {
  const done = new Set(cleared);
  return [...shuffle(pool.filter((e) => !done.has(e.id))), ...shuffle(pool.filter((e) => done.has(e.id)))].slice(0, n);
}

export default function SundayPage() {
  const { progress } = useProgress();
  const [view, setView] = useState<View>({ kind: "menu" });
  const [round, setRound] = useState(0);

  const start = (title: string, items: SundayExercise[]) => {
    setRound((r) => r + 1);
    setView({ kind: "quiz", title, items });
  };
  const startMode = (m: (typeof MODES)[number]) => start(m.title, pick(m.pool(), progress.cleared, ROUND));

  const cleared = new Set(progress.cleared);
  const count = (pool: SundayExercise[]) => pool.filter((e) => cleared.has(e.id)).length;

  return (
    <div className="mx-auto w-full max-w-3xl px-4 pb-16 pt-6">
      <div className="flex items-center justify-between text-sm text-dim">
        {view.kind === "menu" ? (
          <Link href="/" className="hover:text-milk">
            ← 메인
          </Link>
        ) : (
          <button onClick={() => setView({ kind: "menu" })} className="hover:text-milk">
            ← Sunday Review
          </button>
        )}
        {view.kind === "quiz" && <span>{view.title}</span>}
      </div>

      {view.kind === "menu" && (
        <>
          <div className="mt-4 text-center">
            <h1 className="font-display text-4xl" style={{ color: "var(--pink)" }}>
              Sunday Review
            </h1>
            <p className="mt-2 text-dim">일요 스터디에서 배운 패턴과 피드백, 전부 다시 꺼내 쓰기 ✨</p>
          </div>

          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {MODES.map((m) => {
              const pool = m.pool();
              return (
                <button
                  key={m.id}
                  onClick={() => startMode(m)}
                  className="glass rounded-3xl p-5 text-left transition hover:-translate-y-0.5 hover:border-star/60"
                >
                  <span className="text-3xl">{m.emoji}</span>
                  <p className="font-display mt-2 text-xl">{m.title}</p>
                  <p className="text-sm text-dim">{m.desc}</p>
                  <p className="mt-3 text-xs text-dim">
                    정복 <span className="text-star">{count(pool)}</span> / {pool.length} · 랜덤 {ROUND}문제
                  </p>
                </button>
              );
            })}
          </div>

          <button
            onClick={() => setView({ kind: "cards" })}
            className="glass mt-3 flex w-full items-center gap-4 rounded-3xl p-5 text-left transition hover:border-star/60"
          >
            <span className="text-3xl">🃏</span>
            <span className="flex-1">
              <span className="font-display block text-xl">패턴 카드</span>
              <span className="text-sm text-dim">패턴 뜻·포인트·예문을 랜덤으로 넘겨보기 (총 {sundayPatterns.length}개)</span>
            </span>
            <span className="text-dim">→</span>
          </button>

          <Link href="/study/blackhole" className="mt-3 block text-center text-sm text-dim hover:text-milk">
            🕳️ 틀린 문제는 블랙홀에 모여요 →
          </Link>
        </>
      )}

      {view.kind === "cards" && (
        <PatternCards
          onPractice={(p) =>
            start(
              p.pattern,
              sundayExercises.filter((e) => e.id.startsWith(`${p.id}-`)),
            )
          }
        />
      )}

      {view.kind === "quiz" && (
        <div className="mt-6">
          <WritingQuiz
            key={round}
            items={view.items}
            source="sunday"
            onFinish={(results) => setView({ kind: "done", title: view.title, results })}
          />
        </div>
      )}

      {view.kind === "done" && (
        <Done
          results={view.results}
          onAgain={() => {
            const m = MODES.find((x) => x.title === view.title);
            if (m) startMode(m);
            else setView({ kind: "cards" });
          }}
          onMenu={() => setView({ kind: "menu" })}
        />
      )}
    </div>
  );
}

function PatternCards({ onPractice }: { onPractice: (p: SundayPattern) => void }) {
  const [order] = useState(() => shuffle(sundayPatterns));
  const [i, setI] = useState(0);
  const p = order[i % order.length];
  if (!p) return <p className="mt-10 text-center text-dim">아직 패턴이 없어요.</p>;

  return (
    <div className="mt-6">
      <article key={p.id} className="glass pop-in rounded-3xl p-6 sm:p-8">
        <p className="text-xs text-dim">
          {p.month.replace("-", "년 ")}월 Week {p.week} · {p.topic}
        </p>
        <h2 className="mt-2 font-mono text-2xl text-star sm:text-3xl">{p.pattern}</h2>
        <p className="mt-1 text-lg">{p.meaning}</p>
        <ul className="mt-4 space-y-1.5 text-sm text-milk/90">
          {p.points.map((pt, k) => (
            <li key={k}>
              •{" "}
              {pt.split(/(\*\*[^*]+\*\*)/g).map((part, j) =>
                part.startsWith("**") ? (
                  <strong key={j} className="text-star">
                    {part.slice(2, -2)}
                  </strong>
                ) : (
                  <span key={j}>{part}</span>
                ),
              )}
            </li>
          ))}
        </ul>
        <ul className="mt-5 space-y-2">
          {p.examples.map((ex, k) => (
            <li key={k}>
              <button
                onClick={() => speak(ex.en)}
                className="flex w-full items-baseline gap-3 rounded-xl bg-surface-deep/60 px-4 py-2.5 text-left hover:bg-surface-deep"
              >
                <span className="text-sm">🔊</span>
                <span className="flex-1">
                  <span className="font-mono text-[15px]">{ex.en}</span>
                  <span className="block text-sm text-dim">{ex.ko}</span>
                </span>
              </button>
            </li>
          ))}
        </ul>
      </article>

      <div className="mt-5 flex flex-wrap justify-center gap-2">
        <button onClick={() => setI((x) => x + 1)} className="rounded-xl border border-card-border px-5 py-2">
          다음 카드 🔀
        </button>
        <button onClick={() => onPractice(p)} className="rounded-xl bg-star px-5 py-2 font-bold text-on-star">
          이 패턴으로 영작 ✍️
        </button>
      </div>
      <p className="mt-3 text-center text-xs text-dim">
        {(i % order.length) + 1} / {order.length}
      </p>
    </div>
  );
}

function Done({ results, onAgain, onMenu }: { results: Result[]; onAgain: () => void; onMenu: () => void }) {
  const full = results.filter((r) => r === "full").length;
  const half = results.filter((r) => r === "half").length;
  const miss = results.filter((r) => r === "miss").length;
  const score = results.length ? (full + half * 0.5) / results.length : 0;
  return (
    <div className="pop-in mt-12 flex flex-col items-center text-center">
      <p className="text-lg">
        {score >= 0.9 ? "응응응!!! 일요일 수업 완벽 복습 👑" : score >= 0.6 ? "오 꽤 하는데? 한 판 더!" : "괜찮아, 복습은 원래 두 번 세 번 하는 거야 🌙"}
      </p>
      <p className="font-display mt-3 text-5xl text-star">{Math.round(score * 100)}%</p>
      <div className="mt-4 flex gap-6 text-sm">
        <span>⭐ 완벽 {full}</span>
        <span>🌗 반쪽 {half}</span>
        <span>🕳️ 블랙홀 {miss}</span>
      </div>
      <div className="mt-8 flex flex-wrap justify-center gap-2">
        <button onClick={onAgain} className="rounded-xl bg-star px-5 py-2 font-bold text-on-star">
          한 판 더 (새 문제)
        </button>
        <button onClick={onMenu} className="rounded-xl border border-card-border px-5 py-2">
          Sunday Review 메뉴
        </button>
      </div>
    </div>
  );
}
