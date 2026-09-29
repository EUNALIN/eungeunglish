"use client";

import type { Constellation } from "@/data/constellations";
import type { Result } from "@/lib/progress";

/**
 * 별자리 그림. results[i] 가 있으면 i번째 별이 켜진다.
 * full = 꽉 찬 별, half = 흐린 별, miss = 꺼진 별.
 */
export default function ConstellationView({
  constellation,
  results,
  current,
  size = 280,
  allLit = false,
}: {
  constellation: Constellation;
  results?: (Result | undefined)[];
  current?: number;
  size?: number;
  allLit?: boolean;
}) {
  const { points, lines } = constellation;
  const lit = (i: number) => allLit || (results?.[i] !== undefined && results[i] !== "miss");

  return (
    <svg viewBox="-8 -8 116 116" width={size} height={size} className="max-w-full overflow-visible">
      {lines.map(([a, b], i) => {
        const on = lit(a) && lit(b);
        const [x1, y1] = points[a];
        const [x2, y2] = points[b];
        const len = Math.hypot(x2 - x1, y2 - y1);
        return on ? (
          <line
            key={`on-${i}`}
            x1={x1}
            y1={y1}
            x2={x2}
            y2={y2}
            stroke="var(--line)"
            strokeWidth="1.2"
            strokeLinecap="round"
            className={allLit ? undefined : "draw-line"}
            style={{ "--len": len } as React.CSSProperties}
          />
        ) : (
          <line
            key={`off-${i}`}
            x1={x1}
            y1={y1}
            x2={x2}
            y2={y2}
            stroke="rgba(255,255,255,0.18)"
            strokeWidth="0.8"
            strokeDasharray="2 3"
          />
        );
      })}
      {points.map(([x, y], i) => {
        const r = results?.[i];
        const on = lit(i);
        const half = !allLit && r === "half";
        return (
          <g key={i}>
            {current === i && (
              <circle cx={x} cy={y} r="6" fill="none" stroke="var(--star)" strokeWidth="0.8" className="twinkle" />
            )}
            <circle
              key={`${i}-${r ?? "none"}`}
              cx={x}
              cy={y}
              r={on ? 3.2 : 2.2}
              fill={on ? (half ? "#d9c27a" : "var(--star-glow)") : r === "miss" ? "#4a4470" : "rgba(255,255,255,0.55)"}
              opacity={half ? 0.75 : 1}
              className={on && !allLit ? "star-light" : undefined}
              style={on ? { filter: "drop-shadow(0 0 3px #ffd966)" } : undefined}
            />
          </g>
        );
      })}
    </svg>
  );
}
