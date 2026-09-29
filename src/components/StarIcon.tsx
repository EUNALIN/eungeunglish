const STAR =
  "M50,6 L62.5,36 L94,38.5 L70,59 L77.5,90 L50,73.5 L22.5,90 L30,59 L6,38.5 L37.5,36 Z";

/** 메뉴용 반짝이는 큰 별 */
export default function StarIcon({
  size = 72,
  color = "#ffd966",
  dim = false,
}: {
  size?: number;
  color?: string;
  dim?: boolean;
}) {
  const fill = dim ? "#8a8fb5" : color;
  return (
    <svg
      viewBox="0 0 100 100"
      width={size}
      height={size}
      aria-hidden
      // 빛은 svg 바깥(HTML)에 줘야 네모나게 잘리지 않는다
      style={{ overflow: "visible", filter: `drop-shadow(0 0 ${dim ? 4 : 12}px ${dim ? "rgba(160,165,210,0.4)" : color})` }}
    >
      <path d={STAR} fill={fill} stroke={fill} strokeWidth="6" strokeLinejoin="round" />
    </svg>
  );
}
