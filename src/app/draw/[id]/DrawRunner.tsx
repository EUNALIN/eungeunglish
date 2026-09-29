"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import ConstellationView from "@/components/ConstellationView";
import WritingQuiz from "@/components/WritingQuiz";
import { constellations, type Constellation } from "@/data/constellations";
import { dailySentences } from "@/data/daily";
import { useProgress, type Result } from "@/lib/progress";
import type { DailySentence } from "@/lib/types";

/** 별의 80% 이상을 켜면 별자리 완성 */
const PASS = 0.8;

/** 아직 정복 못 한 문장부터 랜덤으로 뽑는다 */
function pickSentences(n: number, cleared: string[]): DailySentence[] {
  const shuffle = <T,>(arr: T[]) => {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  };
  const done = new Set(cleared);
  const fresh = shuffle(dailySentences.filter((s) => !done.has(s.id)));
  const old = shuffle(dailySentences.filter((s) => done.has(s.id)));
  return [...fresh, ...old].slice(0, n);
}

export default function DrawRunner({ constellation }: { constellation: Constellation }) {
  const { finishConstellation, progress, ready } = useProgress();
  const [items, setItems] = useState<DailySentence[] | null>(null);
  const [results, setResults] = useState<(Result | undefined)[]>([]);
  const [finished, setFinished] = useState(false);
  const [round, setRound] = useState(0);
  const n = constellation.points.length;

  useEffect(() => {
    if (!ready) return;
    // 랜덤 출제는 브라우저에서만 (hydration 불일치 방지). 라운드가 바뀔 때만 새로 뽑는다
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setItems(pickSentences(n, progress.cleared));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [n, round, ready]);

  const lit = results.filter((r) => r && r !== "miss").length;
  const passed = lit / n >= PASS;
  const idx = constellations.findIndex((c) => c.id === constellation.id);
  const nextC = constellations[idx + 1];

  const onFinish = () => {
    if (passed) finishConstellation(constellation.id);
    setFinished(true);
  };

  const retry = () => {
    setResults([]);
    setFinished(false);
    setItems(null);
    setRound((r) => r + 1);
  };

  return (
    <div className="mx-auto w-full max-w-5xl px-4 pb-16 pt-6">
      <div className="flex items-center justify-between text-sm text-dim">
        <Link href="/draw" className="hover:text-milk">
          ← 별자리 도감
        </Link>
        <span>
          ✨ {constellation.name} · {lit}/{n}
        </span>
      </div>

      <div className="mt-4 grid items-start gap-6 md:grid-cols-[300px_1fr]">
        <div className="flex flex-col items-center md:sticky md:top-20">
          {/* 모바일에선 작게 해서 문제가 화면 안에 들어오게 */}
          <div className={`${finished ? "w-[260px]" : "w-[130px]"} md:w-[260px] [&>svg]:h-auto [&>svg]:w-full`}>
            <ConstellationView
              constellation={constellation}
              results={results}
              current={finished ? undefined : results.length}
              size={260}
            />
          </div>
          <p className="font-display mt-2 text-lg">{constellation.name}</p>
          <p className="text-xs text-dim">{constellation.nameEn}</p>
        </div>

        <div>
          {finished ? (
            <div className="pop-in flex flex-col items-center pt-6 text-center">
              {passed ? (
                <>
                  <p className="text-5xl">🎉</p>
                  <h2 className="font-display mt-3 text-3xl text-star">{constellation.name} 완성!</h2>
                  <p className="mt-2 max-w-sm text-dim">{constellation.story}</p>
                </>
              ) : (
                <>
                  <p className="text-dim">별이 좀 모자라… 다시 그려보자!</p>
                  <h2 className="font-display mt-2 text-3xl">
                    {lit} / {n} 개 켜짐
                  </h2>
                  <p className="mt-2 text-dim">별을 {Math.ceil(n * PASS)}개 이상 켜면 별자리가 완성돼요.</p>
                </>
              )}
              <div className="mt-8 flex flex-wrap justify-center gap-2">
                {passed && nextC && (
                  <Link href={`/draw/${nextC.id}`} className="rounded-xl bg-star px-5 py-2 font-bold text-space">
                    다음 별자리: {nextC.name} →
                  </Link>
                )}
                <button
                  onClick={retry}
                  className={
                    passed
                      ? "rounded-xl border border-card-border px-5 py-2"
                      : "rounded-xl bg-star px-5 py-2 font-bold text-space"
                  }
                >
                  새 문장으로 다시 그리기
                </button>
                <Link href="/draw" className="rounded-xl border border-card-border px-5 py-2">
                  도감으로
                </Link>
              </div>
            </div>
          ) : items ? (
            <WritingQuiz
              key={round}
              items={items}
              source="daily"
              onAnswer={(i, r) =>
                setResults((prev) => {
                  const next = [...prev];
                  next[i] = r;
                  return next;
                })
              }
              onFinish={onFinish}
            />
          ) : null}
        </div>
      </div>
    </div>
  );
}
