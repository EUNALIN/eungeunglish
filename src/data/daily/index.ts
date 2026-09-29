import type { DailySentence } from "@/lib/types";
import { setA } from "./set-a";
import { setB } from "./set-b";
import { setC } from "./set-c";
import { setD } from "./set-d";

/** Draw a star (영어 해보자) 카테고리 */
export const DAILY_CATEGORIES = [
  { id: "morning", label: "아침·출근", emoji: "⏰" },
  { id: "home", label: "집·살림", emoji: "🏠" },
  { id: "health", label: "몸·건강", emoji: "💪" },
  { id: "food", label: "음식·카페", emoji: "🧋" },
  { id: "shopping", label: "쇼핑·돈", emoji: "🛍️" },
  { id: "friends", label: "친구·약속", emoji: "🤝" },
  { id: "feeling", label: "감정·생각", emoji: "💭" },
  { id: "work", label: "일·공부", emoji: "💼" },
  { id: "travel", label: "이동·여행", emoji: "✈️" },
  { id: "hobby", label: "취미·SNS", emoji: "📱" },
  { id: "weather", label: "날씨·계절", emoji: "🌦️" },
] as const;

/** 실생활 영작 문장 전체. 새 세트를 만들면 여기에 추가 */
export const dailySentences: DailySentence[] = [...setA, ...setB, ...setC, ...setD];
