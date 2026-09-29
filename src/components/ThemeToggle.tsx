"use client";

import { useEffect, useState } from "react";

export const THEME_KEY = "eung:theme";

/** 페이지가 그려지기 전에 저장된 테마를 적용하는 스크립트 (깜빡임 방지, layout 의 <head> 에서 실행) */
export const themeInitScript = `try{if(localStorage.getItem("${THEME_KEY}")==="light")document.documentElement.dataset.theme="light"}catch(e){}`;

/** 🌙 다크 ↔ ☀️ 라이트 전환. 지금 모드를 아이콘으로 보여준다 */
export default function ThemeToggle() {
  const [light, setLight] = useState(false);

  useEffect(() => {
    // 서버 렌더에선 테마를 몰라서 마운트 후에 읽는다
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setLight(document.documentElement.dataset.theme === "light");
  }, []);

  const toggle = () => {
    const next = !light;
    setLight(next);
    if (next) document.documentElement.dataset.theme = "light";
    else delete document.documentElement.dataset.theme;
    try {
      localStorage.setItem(THEME_KEY, next ? "light" : "dark");
    } catch {}
  };

  return (
    <button
      onClick={toggle}
      className="flex h-8 w-8 items-center justify-center rounded-full border border-card-border text-base hover:bg-card"
      title={light ? "라이트 모드 (누르면 다크)" : "다크 모드 (누르면 라이트)"}
      aria-label={light ? "다크 모드로 바꾸기" : "라이트 모드로 바꾸기"}
    >
      {light ? "☀️" : "🌙"}
    </button>
  );
}
