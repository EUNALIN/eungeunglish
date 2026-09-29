"use client";

import Link from "next/link";
import { useState } from "react";
import WritingQuiz from "@/components/WritingQuiz";
import { speak } from "@/lib/speech";
import { useProgress, type Result } from "@/lib/progress";
import type { GrammarTopic } from "@/lib/types";

type Step = "concept" | "quiz" | "done";

/** **굵게** 표시와 줄바꿈 처리 */
function Rich({ text }: { text: string }) {
  return (
    <>
      {text.split("\n").map((line, i) => (
        <p key={i} className="min-h-[0.5em]">
          {line.split(/(\*\*[^*]+\*\*)/g).map((part, j) =>
            part.startsWith("**") && part.endsWith("**") ? (
              <strong key={j} className="text-star">
                {part.slice(2, -2)}
              </strong>
            ) : (
              <span key={j}>{part}</span>
            ),
          )}
        </p>
      ))}
    </>
  );
}

export default function TopicRunner({ topic }: { topic: GrammarTopic }) {
  const { finishTopic } = useProgress();
  const [step, setStep] = useState<Step>("concept");
  const [card, setCard] = useState(0);
  const [results, setResults] = useState<Result[]>([]);
  const [round, setRound] = useState(0);

  const c = topic.concept[card];
  const lastCard = card === topic.concept.length - 1;

  const onFinish = (r: Result[]) => {
    const score = r.reduce((s, x) => s + (x === "full" ? 1 : x === "half" ? 0.5 : 0), 0) / r.length;
    finishTopic(topic.id, score);
    setResults(r);
    setStep("done");
  };

  return (
    <div className="mx-auto w-full max-w-3xl px-4 pb-16 pt-6">
      <div className="flex items-center justify-between text-sm text-dim">
        <Link href="/study" className="hover:text-milk">
          ← 목록
        </Link>
        <span>
          {topic.emoji} {topic.title}
        </span>
      </div>

      {step === "concept" && (
        <div className="mt-6">
          <div className="flex justify-center gap-1.5">
            {topic.concept.map((_, i) => (
              <button
                key={i}
                onClick={() => setCard(i)}
                className={`h-2 rounded-full transition-all ${i === card ? "w-6 bg-star" : "w-2 bg-ink/20"}`}
                aria-label={`${i + 1}번 카드`}
              />
            ))}
          </div>

          <article key={card} className="glass pop-in mt-5 rounded-3xl p-6 sm:p-8">
            <p className="text-xs tracking-widest text-dim">
              CONCEPT {card + 1} / {topic.concept.length}
            </p>
            <h2 className="font-display mt-2 text-2xl sm:text-3xl">{c.heading}</h2>
            <div className="mt-4 space-y-1 leading-relaxed text-milk/90">
              <Rich text={c.body} />
            </div>
            {c.examples && (
              <ul className="mt-5 space-y-2">
                {c.examples.map((ex, i) => (
                  <li key={i}>
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
            )}
            {c.eunga && (
              <p className="mt-6 rounded-2xl border-l-4 border-star bg-star/10 px-4 py-2 text-sm">💡 {c.eunga}</p>
            )}
          </article>

          <div className="mt-5 flex justify-between gap-3">
            <button
              onClick={() => setCard((i) => i - 1)}
              disabled={card === 0}
              className="rounded-xl border border-card-border px-4 py-2 disabled:opacity-30"
            >
              ← 이전
            </button>
            {lastCard ? (
              <button onClick={() => setStep("quiz")} className="rounded-xl bg-star px-6 py-2 font-bold text-on-star">
                영작하러 가기 ✍️
              </button>
            ) : (
              <button onClick={() => setCard((i) => i + 1)} className="rounded-xl bg-star px-6 py-2 font-bold text-on-star">
                다음 →
              </button>
            )}
          </div>
          <button onClick={() => setStep("quiz")} className="mt-3 w-full text-center text-sm text-dim hover:text-milk">
            개념은 알아! 바로 영작할래 →
          </button>
        </div>
      )}

      {step === "quiz" && (
        <div className="mt-6">
          <WritingQuiz key={round} items={topic.exercises} source="grammar" onFinish={onFinish} />
        </div>
      )}

      {step === "done" && (
        <Done
          results={results}
          onRetry={() => {
            setRound((r) => r + 1);
            setStep("quiz");
          }}
          onConcept={() => {
            setCard(0);
            setStep("concept");
          }}
        />
      )}
    </div>
  );
}

function Done({ results, onRetry, onConcept }: { results: Result[]; onRetry: () => void; onConcept: () => void }) {
  const full = results.filter((r) => r === "full").length;
  const half = results.filter((r) => r === "half").length;
  const miss = results.filter((r) => r === "miss").length;
  const score = (full + half * 0.5) / results.length;
  const msg =
    score >= 0.9 ? "응응응!!! 이 주제 마스터 👑" : score >= 0.6 ? "오 꽤 하는데? 조금만 더!" : "괜찮아, 별은 원래 천천히 떠 🌙";

  return (
    <div className="pop-in mt-10 flex flex-col items-center text-center">
      <p className="text-lg">{msg}</p>
      <p className="font-display mt-4 text-5xl text-star">{Math.round(score * 100)}%</p>
      <div className="mt-4 flex gap-6 text-sm">
        <span>⭐ 완벽 {full}</span>
        <span>🌗 반쪽 {half}</span>
        <span>🕳️ 블랙홀 {miss}</span>
      </div>
      <div className="mt-8 flex flex-wrap justify-center gap-2">
        <button onClick={onRetry} className="rounded-xl bg-star px-5 py-2 font-bold text-on-star">
          다시 도전
        </button>
        <button onClick={onConcept} className="rounded-xl border border-card-border px-5 py-2">
          개념 다시 보기
        </button>
        {miss > 0 && (
          <Link href="/study/blackhole" className="rounded-xl border border-card-border px-5 py-2">
            블랙홀 구출하기
          </Link>
        )}
        <Link href="/study" className="rounded-xl border border-card-border px-5 py-2">
          목록으로
        </Link>
      </div>
    </div>
  );
}
