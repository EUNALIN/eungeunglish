"use client";

import { useEffect, useState } from "react";

type Dot = { x: number; y: number; r: number; dur: number; delay: number };

/** 배경에 반짝이는 별들. 서버/브라우저 결과가 달라지지 않게 마운트 후에 생성 */
export default function StarField({ count = 120 }: { count?: number }) {
  const [dots, setDots] = useState<Dot[]>([]);

  useEffect(() => {
    // 랜덤 배치는 브라우저에서만 만든다 (hydration 불일치 방지)
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setDots(
      Array.from({ length: count }, () => ({
        x: Math.random() * 100,
        y: Math.random() * 100,
        r: Math.random() < 0.85 ? Math.random() * 1.2 + 0.4 : Math.random() * 1.6 + 1.2,
        dur: Math.random() * 3 + 2,
        delay: Math.random() * 4,
      })),
    );
  }, [count]);

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {dots.map((d, i) => (
        <span
          key={i}
          className="twinkle absolute rounded-full bg-dot"
          style={
            {
              left: `${d.x}%`,
              top: `${d.y}%`,
              width: d.r * 2,
              height: d.r * 2,
              boxShadow: d.r > 1.2 ? "0 0 6px var(--dot)" : undefined,
              "--tw-dur": `${d.dur}s`,
              "--tw-delay": `${d.delay}s`,
            } as React.CSSProperties
          }
        />
      ))}
    </div>
  );
}
