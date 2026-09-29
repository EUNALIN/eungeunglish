/** 영작 문제 하나 */
export type Exercise = {
  id: string;
  /** 한국어 문장 (이걸 보고 영작) */
  ko: string;
  /**
   * 정답 목록. 첫 번째가 대표 정답(밑줄·듣기 기준).
   * 대소문자, 끝 문장부호, 축약형(I'm ↔ I am)은 채점기가 알아서 처리하므로
   * 단어 선택이 다른 진짜 대안만 추가한다.
   */
  answers: string[];
  /** 막혔을 때 보여줄 한국어 힌트 (선택) */
  hint?: string;
};

export type Example = { en: string; ko: string };

/** 개념 설명 카드 한 장 */
export type ConceptCard = {
  heading: string;
  /** 줄바꿈(\n) 허용. **굵게** 표시 가능 */
  body: string;
  examples?: Example[];
  /** 응아의 한마디 (병맛 코멘트) */
  eunga?: string;
};

/** Study with eung! 의 문법 주제 */
export type GrammarTopic = {
  id: string;
  order: number;
  title: string;
  titleEn: string;
  emoji: string;
  level: 1 | 2 | 3;
  /** 목록에 보이는 한 줄 요약 (병맛 톤) */
  summary: string;
  concept: ConceptCard[];
  exercises: Exercise[];
};

/** Draw a star 의 일상 문장 */
export type DailySentence = Exercise & {
  category: string;
};

/** Sunday Review: 일요 스터디 수업 패턴 (개념 카드) */
export type SundayPattern = {
  id: string;
  /** "2026-05" */
  month: string;
  week: number;
  /** 수업 주제 (예: "미래 계획과 목표 말하기") */
  topic: string;
  /** 패턴 (예: "I'm planning to ___.") */
  pattern: string;
  /** 한국어 뜻 */
  meaning: string;
  /** Key Point, 헷갈리는 점, 비슷한 표현 등 (줄마다 하나, **굵게** 가능) */
  points: string[];
  examples: Example[];
};

/** Sunday Review 문제 하나. WritingQuiz 가 그대로 쓴다 */
export type SundayExercise = Exercise & {
  /** fix = 틀린 문장 고치기 (ko 자리에 틀린 영어 문장) */
  kind?: "fix";
  /** 정답 공개 후 보여줄 설명 (선생님 코멘트 등) */
  note?: string;
};
