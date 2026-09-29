"use client";

import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import { streak, today, useProgress } from "@/lib/progress";

export default function TopBar() {
  const { ready, user, progress, sync, logout } = useProgress();
  const syncIcon = { local: "", loading: "⏳", saving: "⏳", saved: "☁️", error: "⚠️" }[sync];
  const syncTitle = {
    local: "",
    loading: "기록 불러오는 중…",
    saving: "저장 중…",
    saved: "클라우드에 저장됨 (다른 기기에서도 이어져요)",
    error: "클라우드 저장 실패 — 이 브라우저에는 저장돼 있어요",
  }[sync];
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
            {user && (
              <button
                onClick={() => {
                  if (confirm(`${user.nickname} 님, 우주선에서 내릴까요? (로그아웃)`)) logout();
                }}
                className="max-w-[9rem] truncate rounded-full border border-card-border px-2.5 py-1 hover:bg-card sm:max-w-none sm:px-3"
                title="로그아웃"
              >
                🌌 {user.nickname} {syncIcon && <span title={syncTitle}>{syncIcon}</span>}
              </button>
            )}
          </div>
        )}
      </div>

    </header>
  );
}
