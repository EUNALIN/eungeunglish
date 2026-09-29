"use client";

import { useEffect, useState } from "react";
import { useProgress } from "@/lib/progress";

const SECRET = "eungeung";

type Shot = { id: number; top: number; left: number; delay: number };

/** 전역 이스터에그: 'eungeung' 입력 시 별똥별 비, 밤 11시 이후 한마디 */
export default function EasterEggs() {
  const { findEgg } = useProgress();
  const [shots, setShots] = useState<Shot[]>([]);
  const [toast, setToast] = useState<string | null>(null);

  useEffect(() => {
    let buffer = "";
    const onKey = (e: KeyboardEvent) => {
      if (e.key.length !== 1) return;
      buffer = (buffer + e.key.toLowerCase()).slice(-SECRET.length);
      if (buffer === SECRET) {
        buffer = "";
        const base = Date.now();
        setShots(
          Array.from({ length: 14 }, (_, i) => ({
            id: base + i,
            top: Math.random() * 40,
            left: 50 + Math.random() * 60,
            delay: Math.random() * 1.5,
          })),
        );
        if (findEgg("meteor-shower")) setToast("🌠 비밀 주문 발견! 별똥별이 쏟아진다 응응!");
        setTimeout(() => setShots([]), 3500);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [findEgg]);

  useEffect(() => {
    const h = new Date().getHours();
    if (h >= 23 || h < 4) {
      const t = setTimeout(() => setToast("🌙 이 시간에 영어를…? 당신이 진짜 별이다 🌟"), 1200);
      return () => clearTimeout(t);
    }
  }, []);

  useEffect(() => {
    if (!toast) return;
    const t = setTimeout(() => setToast(null), 4000);
    return () => clearTimeout(t);
  }, [toast]);

  return (
    <>
      {shots.map((s) => (
        <span
          key={s.id}
          className="shooting-star"
          style={{ top: `${s.top}vh`, left: `${s.left}vw`, animationDelay: `${s.delay}s`, opacity: 0 }}
        />
      ))}
      {toast && (
        <div className="pop-in fixed bottom-6 left-1/2 z-50 w-[calc(100%-32px)] max-w-md -translate-x-1/2 rounded-2xl border border-card-border bg-space px-4 py-3 text-center shadow-2xl">
          {toast}
        </div>
      )}
    </>
  );
}
