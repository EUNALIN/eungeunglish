"use client";

import Link from "next/link";
import { useState } from "react";
import WritingQuiz from "@/components/WritingQuiz";
import { findExercise } from "@/data";
import { useProgress, type Result, type Source } from "@/lib/progress";
import type { SundayExercise } from "@/lib/types";

type Item = SundayExercise & { from: string; source: Source };

export default function BlackholePage() {
  const { ready, progress } = useProgress();
  // 퀴즈를 시작한 순간의 목록을 고정 (풀면서 블랙홀에서 빠져도 문제가 사라지지 않게)
  const [session, setSession] = useState<Item[] | null>(null);
  const [done, setDone] = useState<Result[] | null>(null);

  const items: Item[] = progress.blackhole
    .map((b) => {
      const e = findExercise(b.source, b.id);
      return e && { ...e, source: b.source };
    })
    .filter((x): x is Item => !!x)
    .reverse();

  const start = () => {
    setDone(null);
    setSession(items.slice(0, 10));
  };

  if (!ready) return null;

  return (
    <div className="mx-auto w-full max-w-3xl px-4 pb-16 pt-6">
      <Link href="/study" className="text-sm text-dim hover:text-milk">
        ← Study with eung!
      </Link>

      {session && !done ? (
        <div className="mt-6">
          <WritingQuiz items={session} source="grammar" onFinish={setDone} />
        </div>
      ) : (
        <div className="mt-8 flex flex-col items-center text-center">
          <span className="spin-slow inline-block text-7xl">🕳️</span>
          <h1 className="font-display mt-4 text-4xl">블랙홀</h1>
          {done ? (
            <p className="mt-2 text-dim">
              {done.filter((r) => r === "full").length}개 구출 성공! 힌트 없이 맞힌 문장만 블랙홀을 탈출해요.
            </p>
          ) : (
            <p className="mt-2 text-dim">틀린 문장이 빨려 들어오는 곳. 힌트 없이 맞히면 구출!</p>
          )}

          {items.length === 0 ? (
            <p className="mt-8 text-lg">블랙홀이 텅 비었다! 응응 👏</p>
          ) : (
            <>
              <button onClick={start} className="mt-6 rounded-xl bg-star px-6 py-2.5 font-bold text-on-star">
                구출 작전 시작 ({Math.min(items.length, 10)}문장)
              </button>
              <ul className="mt-8 w-full space-y-2 text-left">
                {items.map((it) => (
                  <li key={`${it.source}-${it.id}`} className="glass rounded-xl px-4 py-2.5">
                    <p>{it.ko}</p>
                    <p className="text-xs text-dim">{it.from}</p>
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>
      )}
    </div>
  );
}
