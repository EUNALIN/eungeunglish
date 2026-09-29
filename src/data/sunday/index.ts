import type { SundayExercise, SundayPattern } from "@/lib/types";
import * as m05 from "./2026-05";
import * as m06 from "./2026-06";
import * as m07 from "./2026-07";
import * as m08 from "./2026-08";
import * as m09 from "./2026-09";
import { feedbackExpressions, fixes } from "./feedback";

/**
 * Sunday Review (일요 스터디 복습)
 * 새 달 자료가 생기면 src/data/sunday/YYYY-MM.ts 를 만들고 여기 MONTHS 에 추가
 */
const MONTHS = [m05, m06, m07, m08, m09];

export const sundayPatterns: SundayPattern[] = MONTHS.flatMap((m) => m.patterns);
export const sundayExercises: SundayExercise[] = MONTHS.flatMap((m) => m.exercises);
export const sundayExpressions: SundayExercise[] = [...MONTHS.flatMap((m) => m.expressions), ...feedbackExpressions];
export const sundayFixes: SundayExercise[] = fixes;

const all = () => [...sundayExercises, ...sundayExpressions, ...sundayFixes];

export function findSundayExercise(id: string): SundayExercise | undefined {
  return all().find((e) => e.id === id);
}
