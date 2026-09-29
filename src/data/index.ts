import type { DailySentence, GrammarTopic, SundayExercise } from "@/lib/types";
import type { Source } from "@/lib/progress";
import { dailySentences } from "./daily";
import { studyTopics } from "./study";
import { findSundayExercise } from "./sunday";
import t1 from "./grammar/01-be-verb";
import t2 from "./grammar/02-present-simple";
import t3 from "./grammar/03-do-does";
import t4 from "./grammar/04-wh-questions";
import t5 from "./grammar/05-present-progressive";
import t6 from "./grammar/06-past-simple";
import t7 from "./grammar/07-future";
import t8 from "./grammar/08-there-is";
import t9 from "./grammar/09-can-could";
import t10 from "./grammar/10-should-must";
import t11 from "./grammar/11-imperative-lets";
import t12 from "./grammar/12-prepositions";
import t13 from "./grammar/13-frequency-adverbs";
import t14 from "./grammar/14-comparatives";
import t15 from "./grammar/15-to-infinitive";
import t16 from "./grammar/16-gerund";
import t17 from "./grammar/17-present-perfect";
import t18 from "./grammar/18-passive";
import t19 from "./grammar/19-relative-pronouns";
import t20 from "./grammar/20-conjunctions";
import t21 from "./grammar/21-conditionals";
import t22 from "./grammar/22-indirect-questions";
import t23 from "./grammar/23-used-to";
import t24 from "./grammar/24-causative";

/** Study with eung! 문법 주제 (순서대로) */
export const grammarTopics: GrammarTopic[] = [
  t1, t2, t3, t4, t5, t6, t7, t8, 
  t9, t10, t11, t12, t13, t14, t15, t16, 
  t17, t18, t19, t20, t21, t22, t23, t24, 
  
].sort((a, b) => a.order - b.order);

export const LEVELS: Record<GrammarTopic["level"], { label: string; desc: string }> = {
  1: { label: "Lv.1 지구 근처", desc: "영어의 뼈대, 이것만 알아도 말문 트임" },
  2: { label: "Lv.2 달 궤도", desc: "문장에 양념 치기" },
  3: { label: "Lv.3 은하 탐사", desc: "원어민 느낌 한 스푼" },
};

const allTopics = () => [...grammarTopics, ...studyTopics];

export function findTopic(id: string): GrammarTopic | undefined {
  return allTopics().find((t) => t.id === id);
}

/** 블랙홀에서 문제를 다시 꺼낼 때 쓰는 id → 문제 조회 */
export function findExercise(source: Source, id: string): (SundayExercise & { from: string }) | undefined {
  if (source === "daily") {
    const s: DailySentence | undefined = dailySentences.find((d) => d.id === id);
    return s && { ...s, from: "영어 해보자" };
  }
  if (source === "sunday") {
    const s = findSundayExercise(id);
    return s && { ...s, from: "Sunday Review" };
  }
  for (const t of allTopics()) {
    const e = t.exercises.find((x) => x.id === id);
    if (e) return { ...e, from: t.title };
  }
  return undefined;
}
