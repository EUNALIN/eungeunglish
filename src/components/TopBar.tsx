"use client";

import Link from "next/link";
import { useState } from "react";
import Modal from "./Modal";
import ThemeToggle from "./ThemeToggle";
import { streak, today, useProgress } from "@/lib/progress";

export default function TopBar() {
  const { ready, user, progress, sync, login, logout } = useProgress();
  const syncIcon = { local: "", loading: "⏳", saving: "⏳", saved: "☁️", error: "⚠️" }[sync];
  const syncTitle = {
    local: "",
    loading: "기록 불러오는 중…",
    saving: "저장 중…",
    saved: "클라우드에 저장됨 (다른 기기에서도 이어져요)",
    error: "클라우드 저장 실패 — 이 브라우저에는 저장돼 있어요",
  }[sync];
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
    <header className="sticky top-0 z-40 border-b border-card-border bg-surface-deep/70 backdrop-blur-md">
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-2 px-4 py-2.5">
        <Link href="/" className="font-display flex shrink-0 items-center gap-1.5 whitespace-nowrap text-base text-star sm:text-lg">
          <span aria-hidden>✦</span> 응응글리쉬
        </Link>
        {ready && (
          <div className="flex items-center gap-1.5 whitespace-nowrap text-xs sm:gap-3 sm:text-sm">
            <span className="text-milk" title="오늘 푼 문장 (맞힘 + 정답 보기)">
              ✍️ <span className="hidden sm:inline">오늘 </span><span className="font-bold text-star">{progress.studied[today()] ?? 0}</span>문장
            </span>
            <span className="hidden text-dim sm:inline" title="연속 관측일">
              🔭 {days}일째
            </span>
            <span className="text-star" title="모은 별">
              ★ {progress.stars % 1 ? progress.stars.toFixed(1) : progress.stars}
            </span>
            <ThemeToggle />
            {user ? (
              <button
                onClick={logout}
                className="max-w-[9rem] truncate rounded-full border border-card-border px-2.5 py-1 hover:bg-card sm:max-w-none sm:px-3"
                title="로그아웃"
              >
                🌌 {user.nickname} {syncIcon && <span title={syncTitle}>{syncIcon}</span>}
              </button>
            ) : (
              <button
                onClick={() => setOpen(true)}
                className="rounded-full bg-star px-2.5 py-1 font-bold text-on-star hover:brightness-110 sm:px-3"
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
            placeholder="ex) 은하수"
            maxLength={12}
            className="rounded-xl border border-card-border bg-surface-deep px-3 py-2 outline-none focus:border-star"
          />
          <label className="mt-1 text-xs text-dim">코드 (숫자 4자리)</label>
          <input
            value={code}
            onChange={(e) => setCode(e.target.value.replace(/\D/g, "").slice(0, 4))}
            placeholder="ex) 0000"
            inputMode="numeric"
            className="rounded-xl border border-card-border bg-surface-deep px-3 py-2 font-mono tracking-[0.4em] outline-none placeholder:font-sans placeholder:tracking-normal focus:border-star"
          />
          {error && <p className="text-sm text-bad">{error}</p>}
          <button className="mt-2 rounded-xl bg-star py-2 font-bold text-on-star hover:brightness-110">응! 출발</button>
          <p className="text-center text-xs text-dim">
            같은 닉네임 + 코드로 들어오면 폰·PC 어디서든 기록이 이어져요. 코드는 꼭 기억해 두세요!
          </p>
        </form>
      </Modal>
    </header>
  );
}
