"use client";

import Link from "next/link";
import { useState } from "react";
import Modal from "./Modal";
import { streak, today, useProgress } from "@/lib/progress";

export default function TopBar() {
  const { ready, user, progress, login, logout } = useProgress();
  const [open, setOpen] = useState(false);
  const [nickname, setNickname] = useState("");
  const [code, setCode] = useState("");
  const [error, setError] = useState("");

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const nick = nickname.trim();
    if (!nick) return setError("닉네임을 적어줘요!");
    if (!/^\d{4}$/.test(code)) return setError("코드는 숫자 4자리예요 (예: 2261)");
    login({ nickname: nick, code });
    setOpen(false);
    setError("");
  };

  const days = streak(progress.days);

  return (
    <header className="sticky top-0 z-40 border-b border-card-border bg-space-deep/70 backdrop-blur-md">
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-3 px-4 py-2.5">
        <Link href="/" className="font-display flex items-center gap-1.5 text-lg text-star">
          <span aria-hidden>✦</span> 응응글리쉬
        </Link>
        {ready && (
          <div className="flex items-center gap-2 text-sm sm:gap-3">
            <span className="text-milk" title="오늘 푼 문장 (맞힘 + 정답 보기)">
              ✍️ 오늘 <span className="font-bold text-star">{progress.studied[today()] ?? 0}</span>문장
            </span>
            <span className="hidden text-dim sm:inline" title="연속 관측일">
              🔭 {days}일째
            </span>
            <span className="text-star" title="모은 별">
              ★ {progress.stars % 1 ? progress.stars.toFixed(1) : progress.stars}
            </span>
            {user ? (
              <button
                onClick={logout}
                className="rounded-full border border-card-border px-3 py-1 hover:bg-card"
                title="로그아웃"
              >
                🌌 {user.nickname}
              </button>
            ) : (
              <button
                onClick={() => setOpen(true)}
                className="rounded-full bg-star px-3 py-1 font-bold text-space hover:brightness-110"
              >
                탑승하기
              </button>
            )}
          </div>
        )}
      </div>

      <Modal open={open} onClose={() => setOpen(false)}>
        <h2 className="font-display text-2xl text-star">우주선 탑승 🚀</h2>
        <p className="mt-1 text-sm text-dim">닉네임과 나만의 4자리 코드를 적어줘요.<br />처음이면 자동으로 새 우주가 만들어져요!</p>
        <form onSubmit={submit} className="mt-4 flex flex-col gap-2 text-left">
          <label className="text-xs text-dim">닉네임</label>
          <input
            value={nickname}
            onChange={(e) => setNickname(e.target.value)}
            placeholder="은하수"
            maxLength={12}
            className="rounded-xl border border-card-border bg-space-deep px-3 py-2 outline-none focus:border-star"
          />
          <label className="mt-1 text-xs text-dim">코드 (숫자 4자리)</label>
          <input
            value={code}
            onChange={(e) => setCode(e.target.value.replace(/\D/g, "").slice(0, 4))}
            placeholder="2261"
            inputMode="numeric"
            className="rounded-xl border border-card-border bg-space-deep px-3 py-2 font-mono tracking-[0.4em] outline-none focus:border-star"
          />
          {error && <p className="text-sm text-bad">{error}</p>}
          <button className="mt-2 rounded-xl bg-star py-2 font-bold text-space hover:brightness-110">응! 출발</button>
          <p className="text-center text-xs text-dim">
            지금은 이 브라우저에 기록이 저장돼요. (다른 기기 연동은 곧!)
          </p>
        </form>
      </Modal>
    </header>
  );
}
