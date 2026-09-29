"use client";

import { useState } from "react";
import { useProgress } from "@/lib/progress";
import ThemeToggle from "./ThemeToggle";

/**
 * 첫 화면 = 우주선 탑승.
 * 닉네임 + 4자리 코드를 입력해야만 사이트에 들어갈 수 있다 (기록 저장을 깜빡하지 않게).
 */
export default function BoardingGate({ children }: { children: React.ReactNode }) {
  const { ready, user } = useProgress();

  // 브라우저 저장소를 읽기 전에는 아무것도 안 보여줘서 화면이 번쩍이지 않게
  if (!ready) return null;
  if (user) return <>{children}</>;
  return <BoardingScreen />;
}

function BoardingScreen() {
  const { login } = useProgress();
  const [nickname, setNickname] = useState("");
  const [code, setCode] = useState("");
  const [error, setError] = useState("");

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const nick = nickname.trim();
    if (!nick) return setError("닉네임을 적어주세요!");
    if (!/^\d{4}$/.test(code)) return setError("코드는 숫자 4자리예요 (예: 0000)");
    setError("");
    login({ nickname: nick, code });
  };

  return (
    <main className="relative flex min-h-dvh flex-1 flex-col items-center justify-center px-4 py-10">
      <div className="absolute right-4 top-3">
        <ThemeToggle />
      </div>
      <p className="text-xs tracking-[0.3em] text-dim">EUNGEUNGLISH GALAXY</p>
      <h1 className="font-display mt-3 text-center text-3xl leading-tight sm:text-5xl">
        너 영어 할 수 있어?
        <br />
        <span className="text-star">응응!</span>
      </h1>

      <form
        onSubmit={submit}
        className="pop-in mt-8 w-full max-w-sm rounded-3xl border border-card-border bg-surface p-6 text-center shadow-2xl"
      >
        <h2 className="font-display text-2xl text-star">우주선 탑승 🚀</h2>
        <p className="mt-2 text-sm text-dim">
          닉네임과 나만의 4자리 코드를 적어주셔야
          <br />
          우주선이 출발합니다.
        </p>

        <div className="mt-5 flex flex-col gap-2 text-left">
          <label htmlFor="nickname" className="text-xs text-dim">
            닉네임
          </label>
          <input
            id="nickname"
            value={nickname}
            onChange={(e) => setNickname(e.target.value)}
            placeholder="ex) 김은하수"
            maxLength={12}
            autoFocus
            autoComplete="nickname"
            className="rounded-xl border border-card-border bg-surface-deep px-3 py-2 outline-none focus:border-star"
          />
          <label htmlFor="code" className="mt-1 text-xs text-dim">
            코드 (숫자 4자리)
          </label>
          <input
            id="code"
            value={code}
            onChange={(e) => setCode(e.target.value.replace(/\D/g, "").slice(0, 4))}
            placeholder="ex) 0000"
            inputMode="numeric"
            autoComplete="off"
            className="rounded-xl border border-card-border bg-surface-deep px-3 py-2 font-mono tracking-[0.4em] outline-none placeholder:font-sans placeholder:tracking-normal focus:border-star"
          />
          {error && <p className="text-sm text-bad">{error}</p>}
          <button className="mt-3 rounded-xl bg-star py-2.5 font-bold text-on-star hover:brightness-110">
            응! 출발
          </button>
        </div>

        <p className="mt-4 text-xs text-dim">
          처음이면 자동으로 새 우주가 만들어져요.
          <br />
          같은 닉네임 + 코드로 들어오면 폰·PC 어디서든 기록이 이어져요.
          <br />
          코드는 꼭 기억해 두세요!
        </p>
      </form>
    </main>
  );
}
