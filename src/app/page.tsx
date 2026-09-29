"use client";

import Link from "next/link";
import { useState } from "react";
import Modal from "@/components/Modal";
import StarIcon from "@/components/StarIcon";
import { secretConstellation } from "@/data/constellations";
import { useProgress } from "@/lib/progress";

// 메뉴 별 위치 (%)
const MENU = {
  draw: { x: 32, y: 42 },
  study: { x: 72, y: 10 },
  sunday: { x: 78, y: 40 },
  content: { x: 72, y: 70 },
};

export default function Home() {
  const [comingSoon, setComingSoon] = useState(false);

  return (
    <div className="relative mx-auto flex w-full max-w-5xl flex-1 flex-col items-center px-4 pb-16 pt-10 sm:pt-14">
      <SecretConstellation />

      <p className="text-xs tracking-[0.3em] text-dim">EUNGEUNGLISH GALAXY</p>
      <h1 className="font-display mt-3 text-center text-3xl leading-tight sm:text-5xl">
        영어로 물어보면?
        <br />
        <span className="text-star">응응!</span>
      </h1>
      <p className="mt-4 text-center text-dim">너 영어 할 수 있어? 응! 물론이지 글리쉬</p>

      {/* 메뉴 별자리: 영어 해보자가 메인, 문법은 작은 위성 별 */}
      <nav className="relative mt-4 h-[360px] w-full max-w-2xl" aria-label="메뉴">
        <svg className="absolute inset-0 h-full w-full" aria-hidden>
          {[
            [MENU.draw, MENU.content],
            [MENU.draw, MENU.study],
            [MENU.study, MENU.sunday],
            [MENU.sunday, MENU.content],
          ].map(([a, b], i) => (
            <line
              key={i}
              x1={`${a.x}%`}
              y1={`${a.y}%`}
              x2={`${b.x}%`}
              y2={`${b.y}%`}
              stroke="var(--menu-line)"
              strokeWidth="1.5"
              strokeDasharray="4 6"
            />
          ))}
        </svg>

        <MenuStar
          pos={MENU.draw}
          href="/draw"
          title="영어 해보자"
          desc="Draw a star ✨ 실생활 문장 영작"
          color="#ffd966"
          size="lg"
        />
        <MenuStar
          pos={MENU.content}
          onClick={() => setComingSoon(true)}
          title="영어 콘텐츠"
          desc="준비 중…?"
          dim
        />
        <MenuStar
          pos={MENU.sunday}
          href="/sunday"
          title="Sunday Review"
          desc="📅 일요 스터디 복습"
          color="#ffb3d9"
        />
        <MenuStar
          pos={MENU.study}
          href="/study"
          title="Study with eung!"
          desc="📘 문법 필요할 때"
          color="#9fd8ff"
          size="sm"
        />
      </nav>

      <Modal open={comingSoon} onClose={() => setComingSoon(false)}>
        <div className="text-6xl">🛸</div>
        <h2 className="font-display mt-3 text-2xl text-star">외계인이 잠깐 빌려갔어요…</h2>
        <p className="mt-2 text-dim">곧 돌아오겠습니다! 👽💫</p>
        <button
          onClick={() => setComingSoon(false)}
          className="mt-4 rounded-xl bg-star px-5 py-2 font-bold text-on-star hover:brightness-110"
        >
          응… 기다릴게
        </button>
      </Modal>
    </div>
  );
}

function MenuStar({
  pos,
  href,
  onClick,
  title,
  desc,
  color,
  dim,
  size = "md",
}: {
  pos: { x: number; y: number };
  href?: string;
  onClick?: () => void;
  title: string;
  desc: string;
  color?: string;
  dim?: boolean;
  size?: "sm" | "md" | "lg";
}) {
  const px = { sm: 36, md: 56, lg: 104 }[size];
  const inner = (
    <>
      <span className="transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12">
        <StarIcon size={px} color={color} dim={dim} />
      </span>
      <span
        className={`font-display mt-1 whitespace-nowrap ${
          size === "lg" ? "text-2xl text-star sm:text-3xl" : size === "sm" ? "text-sm" : "text-lg"
        }`}
      >
        {title}
      </span>
      <span className="whitespace-nowrap text-xs text-dim">{desc}</span>
    </>
  );
  const cls =
    "group absolute flex w-36 -translate-x-1/2 -translate-y-1/2 flex-col items-center text-center focus:outline-none";
  const style = { left: `${pos.x}%`, top: `${pos.y}%` };
  return href ? (
    <Link href={href} className={cls} style={style}>
      {inner}
    </Link>
  ) : (
    <button onClick={onClick} className={cls} style={style}>
      {inner}
    </button>
  );
}

/** 🥚 숨은 별자리: 흐릿한 별 5개를 오각별 순서로 누르면 응아자리 완성 */
function SecretConstellation() {
  const { findEgg } = useProgress();
  const [lit, setLit] = useState(0);
  const [found, setFound] = useState(false);
  const { points, lines } = secretConstellation;
  const done = lit === points.length;

  const click = (i: number) => {
    if (done) return;
    if (i === lit) {
      const next = lit + 1;
      setLit(next);
      if (next === points.length) {
        findEgg(secretConstellation.id);
        setTimeout(() => setFound(true), 900);
      }
    } else {
      setLit(i === 0 ? 1 : 0);
    }
  };

  return (
    <>
      <div className="absolute right-[4%] top-24 h-28 w-28 sm:right-[8%] sm:h-36 sm:w-36" aria-hidden>
        <svg viewBox="-6 -6 112 112" className="h-full w-full overflow-visible">
          {lines.map(([a, b], i) =>
            i < lit - 1 || (done && i === lines.length - 1) ? (
              <line
                key={i}
                x1={points[a][0]}
                y1={points[a][1]}
                x2={points[b][0]}
                y2={points[b][1]}
                stroke="var(--line)"
                strokeWidth="1.5"
                className="draw-line"
                style={{ "--len": 120 } as React.CSSProperties}
              />
            ) : null,
          )}
          {points.map(([x, y], i) => (
            <g key={i} onClick={() => click(i)} className="cursor-pointer">
              <circle cx={x} cy={y} r="9" fill="transparent" />
              <circle
                cx={x}
                cy={y}
                r={i < lit ? 3.2 : 1.8}
                fill={i < lit ? "var(--star-glow)" : "var(--unlit)"}
                className={i < lit ? "star-light" : "twinkle"}
                style={i < lit ? { filter: "drop-shadow(0 0 4px #ffd966)" } : undefined}
              />
            </g>
          ))}
        </svg>
      </div>
      <Modal open={found} onClose={() => setFound(false)}>
        <div className="text-5xl">⭐</div>
        <h2 className="font-display mt-2 text-2xl text-star">{secretConstellation.name} 발견!</h2>
        <p className="mt-2 text-dim">{secretConstellation.story}</p>
      </Modal>
    </>
  );
}
