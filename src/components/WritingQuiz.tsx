"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import type { SundayExercise } from "@/lib/types";
import { buildSlots, closestAnswer, diffWords, firstLetterHint, isCorrect, shuffledWords } from "@/lib/checker";
import { canSpeak, speak } from "@/lib/speech";
import { useProgress, type Result, type Source } from "@/lib/progress";

const PRAISE = ["응응! 완벽해!", "오 좀 치는데?", "별 하나 켜졌다 ⭐", "네이티브인 줄 ㅋ", "응! 물론이지 글리쉬"];
const HALF = ["응… 반만 응 🌗", "힌트 찬스 썼지만 인정!", "반쪽 별도 별이야 ✨"];
const OOPS = ["앗, 빨간 곳 봐봐…", "거의 다 왔는데…!", "응? 응…? 다시!"];
const pick = (arr: string[]) => arr[Math.floor(Math.random() * arr.length)];

/**
 * hint 에서 "영어 = 한국어" 짝을 뽑아 표현 정리로 보여준다 (예: "go off = (알람이) 울리다").
 * "=" 가 없는 힌트는 표현 정리에서 뺀다.
 */
function expressionsOf(hint?: string): { en: string; ko: string }[] {
  if (!hint) return [];
  return hint
    // " / ", ";", 그리고 뒤에 또 "=" 가 오는 쉼표에서 나눈다 ("보면 알겠지만, 보다시피" 는 안 나뉨)
    .split(/\s+\/\s+|;\s*|,\s*(?=[^,]*=)/)
    .filter((part) => part.includes("="))
    .map((part) => {
      const [a, ...rest] = part.split("=");
      const left = a.trim();
      const right = rest.join("=").trim();
      // 영어가 있는 쪽을 앞으로
      return /[a-z]/i.test(left) ? { en: left, ko: right } : { en: right, ko: left };
    })
    .filter((e) => e.en && e.ko);
}

type Phase = "typing" | "correct" | "revealed";

export default function WritingQuiz({
  items,
  source,
  onAnswer,
  onFinish,
}: {
  /** 문제마다 source 가 다르면(블랙홀) item.source 가 우선 */
  items: (SundayExercise & { source?: Source })[];
  source: Source;
  onAnswer?: (index: number, result: Result) => void;
  onFinish: (results: Result[]) => void;
}) {
  const { record } = useProgress();
  const [idx, setIdx] = useState(0);
  const [input, setInput] = useState("");
  const [phase, setPhase] = useState<Phase>("typing");
  const [hintLevel, setHintLevel] = useState(0);
  const [listened, setListened] = useState(false);
  const [wrongs, setWrongs] = useState(0);
  const [shake, setShake] = useState(0);
  const [say, setSay] = useState("");
  const [slow, setSlow] = useState(false);
  const [focused, setFocused] = useState(false);
  const [results, setResults] = useState<Result[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  const item = items[idx];
  const blocks = useMemo(() => shuffledWords(item.answers[0]), [item]);
  // 정답을 본 뒤에도 내가 쓴 글자는 밑줄에 그대로 남겨 둔다
  const target = closestAnswer(input, item.answers);
  const slots = buildSlots(target, input);
  const showCaret = phase === "typing" && focused;

  useEffect(() => {
    inputRef.current?.focus();
  }, [idx, phase]);

  const rate = slow ? 0.65 : 0.9;

  const listen = () => {
    speak(item.answers[0], rate);
    if (phase === "typing") setListened(true);
    inputRef.current?.focus();
  };

  const finishItem = (result: Result) => {
    record(item.source ?? source, item.id, result);
    onAnswer?.(idx, result);
    setResults((r) => [...r, result]);
  };

  const check = () => {
    if (!input.trim()) return;
    if (isCorrect(input, item.answers)) {
      const result: Result = hintLevel > 0 || listened || wrongs >= 2 ? "half" : "full";
      setPhase("correct");
      setSay(result === "full" ? pick(PRAISE) : pick(HALF));
      speak(item.answers[0], rate);
      finishItem(result);
    } else {
      setWrongs((w) => w + 1);
      setShake((s) => s + 1);
      setSay(pick(OOPS));
    }
  };

  const reveal = () => {
    setPhase("revealed");
    setSay("블랙홀로 슝~ 🕳️ 다음엔 꼭 맞히자…");
    speak(item.answers[0], rate);
    finishItem("miss");
  };

  const next = () => {
    if (idx + 1 >= items.length) {
      onFinish(results);
      return;
    }
    setIdx(idx + 1);
    setInput("");
    setPhase("typing");
    setHintLevel(0);
    setListened(false);
    setWrongs(0);
    setSay("");
  };

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key !== "Enter" || e.nativeEvent.isComposing) return;
    e.preventDefault();
    if (phase === "typing") check();
    else next();
  };

  return (
    <div className="font-plain mx-auto flex w-full max-w-2xl flex-col">
      {/* 문제 푸는 동안은 반짝이 배경을 가리고 단색으로 (텍스트에만 집중) */}
      <div aria-hidden className="fixed inset-0 -z-[5] bg-quiz" />

      {/* 진행 상황 */}
      <div className="flex w-full items-center gap-3">
        <div className="h-1 flex-1 overflow-hidden rounded-full bg-ink/10">
          <div
            className="h-full rounded-full bg-ink/60 transition-all duration-500"
            style={{ width: `${((idx + (phase === "typing" ? 0 : 1)) / items.length) * 100}%` }}
          />
        </div>
        <span className="text-sm text-ink/50">
          {idx + 1} / {items.length}
        </span>
      </div>

      {/* 문제 */}
      {item.kind === "fix" ? (
        <div className="mt-8">
          <p className="text-sm text-ink/50">이 문장을 고쳐서 써 보세요.</p>
          <p className="mt-2 text-xl font-bold leading-relaxed text-bad">
            {idx + 1}. {item.ko}
          </p>
        </div>
      ) : (
        <p className="mt-8 text-xl font-bold leading-relaxed text-ink sm:text-2xl">
          {idx + 1}. {item.ko}
        </p>
      )}

      {/* 밑줄 위에 바로 타이핑: 투명 input 이 밑줄 영역을 덮고 있다 */}
      <div className="relative mt-6 w-full cursor-text py-2" onClick={() => inputRef.current?.focus()}>
        <div
          key={shake}
          className={`flex flex-wrap gap-x-3 gap-y-3 font-mono text-lg sm:text-xl ${shake ? "shake" : ""}`}
          aria-hidden
        >
          {slots.map((w, wi) => (
            <span key={wi} className="inline-flex items-end">
              {w.slots.map((s, si) =>
                s.kind === "punct" ? (
                  <span key={si} className="px-[1px] text-ink/50">
                    {s.char}
                  </span>
                ) : (
                  <span
                    key={si}
                    className={`relative mx-[1px] inline-block w-[0.66em] border-b-2 text-center font-bold leading-tight ${
                      s.typed === undefined
                        ? showCaret && s.cursor
                          ? "border-ink text-transparent"
                          : "border-ink/35 text-transparent"
                        : s.ok
                          ? "border-ok text-ok"
                          : "border-bad text-bad"
                    }`}
                  >
                    {s.typed ?? "·"}
                    {showCaret && s.cursor && (
                      <span className="caret absolute bottom-1 left-0 top-0.5 w-[2px] bg-ink" />
                    )}
                  </span>
                ),
              )}
              {w.extra.trim() && <span className="text-bad line-through">{w.extra}</span>}
              {showCaret && w.cursorEnd && <span className="caret ml-[1px] inline-block h-[1.1em] w-[2px] bg-ink" />}
            </span>
          ))}
        </div>

        {!input && phase === "typing" && !focused && (
          <p className="pointer-events-none mt-3 text-sm text-ink/40">밑줄을 눌러서 바로 입력하세요</p>
        )}

        <input
          ref={inputRef}
          value={input}
          onChange={(e) => phase === "typing" && setInput(e.target.value)}
          onKeyDown={onKeyDown}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          readOnly={phase !== "typing"}
          aria-label="영어로 입력"
          autoComplete="off"
          autoCorrect="off"
          autoCapitalize="off"
          spellCheck={false}
          // 투명하지만 탭·클릭은 받는다. 16px 이상이어야 iOS 가 확대하지 않음
          className="absolute inset-0 h-full w-full cursor-text opacity-0"
          style={{ fontSize: 16, caretColor: "transparent" }}
        />
      </div>

      {/* 틀렸을 때 한 줄 */}
      {phase === "typing" && say && (
        <p key={shake} className="mt-2 text-sm text-bad">
          {say}
        </p>
      )}

      {/* 힌트 */}
      {phase === "typing" && hintLevel > 0 && (
        <div className="mt-4 w-full border-l-2 border-ink/20 pl-3 text-sm text-ink/70">
          {item.hint && <p>{item.hint}</p>}
          {hintLevel >= 1 && (
            <p className="mt-1 font-mono text-base tracking-wider text-ink">{firstLetterHint(item.answers[0])}</p>
          )}
          {hintLevel >= 2 && (
            <div className="mt-2 flex flex-wrap gap-1.5">
              {blocks.map((b, i) => (
                <span key={i} className="rounded bg-ink/10 px-2 py-0.5 font-mono text-ink">
                  {b}
                </span>
              ))}
            </div>
          )}
        </div>
      )}

      {/* 네이티브 영어 (정답) */}
      {phase !== "typing" && <AnswerPanel item={item} input={input} correct={phase === "correct"} rate={rate} />}

      {/* 버튼 */}
      <div className="mt-8 flex w-full flex-wrap items-center gap-2 text-sm">
        {phase === "typing" ? (
          <>
            <button onClick={check} className="rounded-lg bg-ink px-5 py-2 font-bold text-ink-inverse hover:bg-ink/90">
              확인 ⏎
            </button>
            {canSpeak() && (
              <button
                onClick={listen}
                className="rounded-lg border border-ink/20 px-3 py-2 text-ink/80 hover:bg-ink/10"
                title="듣기 (쓰면 반쪽 별)"
              >
                🔊 듣기
              </button>
            )}
            <button
              onClick={() => {
                setHintLevel((h) => Math.min(h + 1, 2));
                inputRef.current?.focus();
              }}
              disabled={hintLevel >= 2}
              className="rounded-lg border border-ink/20 px-3 py-2 text-ink/80 hover:bg-ink/10 disabled:opacity-40"
            >
              힌트 {hintLevel > 0 && `(${hintLevel}/2)`}
            </button>
            <button onClick={reveal} className="rounded-lg border border-ink/20 px-3 py-2 text-ink/60 hover:bg-ink/10">
              정답 보기
            </button>
            {canSpeak() && (
              <button onClick={() => setSlow((x) => !x)} className={`ml-auto text-xs ${slow ? "text-ink" : "text-ink/40"}`}>
                🐢 천천히 {slow ? "ON" : "OFF"}
              </button>
            )}
          </>
        ) : (
          <button onClick={next} className="rounded-lg bg-ink px-6 py-2 font-bold text-ink-inverse hover:bg-ink/90">
            {idx + 1 >= items.length ? "결과 보기" : "다음 ⏎"}
          </button>
        )}
      </div>
      <p className="mt-3 text-xs text-ink/35">힌트나 듣기를 쓰고 맞히면 반쪽 별 · 정답 보기는 블랙홀(오답노트)로</p>
    </div>
  );
}

function AnswerPanel({
  item,
  input,
  correct,
  rate,
}: {
  item: SundayExercise;
  input: string;
  correct: boolean;
  rate: number;
}) {
  // 내가 쓰려던 정답(가장 비슷한 것)과 단어별로 비교해서 초록/빨강
  const shown = input.trim() ? closestAnswer(input, item.answers) : item.answers[0];
  const words = diffWords(shown, input);
  const others = item.answers.filter((a) => a !== shown);
  const exprs = expressionsOf(item.hint);

  return (
    <details open className="group mt-6 w-full">
      <summary className="flex cursor-pointer list-none items-center gap-2">
        <span className="text-xs text-ink/60 transition-transform group-open:rotate-90">▶</span>
        <span className="rounded bg-[#5b3fa0] px-2 py-0.5 text-sm font-bold text-ink">네이티브 영어</span>
      </summary>

      <p className="mt-3 text-sm text-note">
        {correct
          ? "잘했어요! 정답 문장을 확인해 보세요. 👇"
          : input.trim()
            ? "아쉬워요. 정답 문장을 확인해 보세요. 👇"
            : "정답 문장을 확인해 보세요. 👇"}
      </p>

      <div className="mt-3 flex items-start gap-3">
        <button
          onClick={() => speak(shown, rate)}
          className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-ink/10 text-sm hover:bg-ink/20"
          aria-label="듣기"
        >
          🔊
        </button>
        <p className="pt-0.5 text-lg font-bold leading-relaxed">
          {words.map((w, i) => (
            <span key={i} className={w.ok ? "text-ok" : "text-bad"}>
              {w.text}{" "}
            </span>
          ))}
        </p>
      </div>

      {/* 표현 정리 (있는 경우만) */}
      {exprs.length > 0 && (
        <ul className="mt-2 space-y-0.5 text-[15px] text-ink/85">
          {exprs.map((e, i) => (
            <li key={i}>
              {e.en}: {e.ko}
            </li>
          ))}
        </ul>
      )}

      {/* 선생님 코멘트 (있는 경우만) */}
      {item.note && <p className="mt-3 text-[15px] text-ink/85">💬 {item.note}</p>}

      {/* 다른 표현은 접어두기 */}
      {others.length > 0 && (
        <details className="group/o mt-4">
          <summary className="flex cursor-pointer list-none items-center gap-2 text-sm text-ink/60 hover:text-ink">
            <span className="text-xs transition-transform group-open/o:rotate-90">▶</span>
            이렇게도 말해요 ({others.length})
          </summary>
          <ul className="mt-2 space-y-1 pl-5">
            {others.map((a, i) => (
              <li key={i}>
                <button onClick={() => speak(a, rate)} className="text-left text-[15px] text-ink/85 hover:text-ink">
                  {a}
                </button>
              </li>
            ))}
          </ul>
        </details>
      )}
    </details>
  );
}
