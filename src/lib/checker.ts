/**
 * 영작 채점기.
 * - 대소문자, 끝 문장부호, 공백, 둥근 따옴표는 무시
 * - 축약형과 풀어쓴 형태는 같은 것으로 취급 (I'm = I am)
 */

/** 화면에 고정으로 보여주고 입력은 안 받는 문장부호 */
const FIXED_PUNCT = /[.,!?;:"“”—–…]/;

const CONTRACTIONS: [RegExp, string][] = [
  [/\bok\b/g, "okay"],
  [/\bgonna\b/g, "going to"],
  [/\bwanna\b/g, "want to"],
  [/\bgotta\b/g, "got to"],
  [/\bwon't\b/g, "will not"],
  [/\bcan't\b/g, "can not"],
  [/\bcannot\b/g, "can not"],
  [/\bshan't\b/g, "shall not"],
  [/\bain't\b/g, "is not"],
  [/\blet's\b/g, "let us"],
  [/n't\b/g, " not"],
  [/'re\b/g, " are"],
  [/'ve\b/g, " have"],
  [/'ll\b/g, " will"],
  [/'m\b/g, " am"],
  [/'d\b/g, " would"],
  // 's 는 소유격과 헷갈리므로 대명사·의문사 뒤에서만 is 로 푼다
  [/\b(it|he|she|that|this|what|where|who|how|there|here|when|why|everything|everyone|nothing|someone|somebody)'s\b/g, "$1 is"],
];

const NUMBERS: Record<string, number> = {
  zero: 0, one: 1, two: 2, three: 3, four: 4, five: 5, six: 6, seven: 7, eight: 8, nine: 9, ten: 10,
  eleven: 11, twelve: 12, thirteen: 13, fourteen: 14, fifteen: 15, sixteen: 16, seventeen: 17,
  eighteen: 18, nineteen: 19, twenty: 20, thirty: 30, forty: 40, fifty: 50, sixty: 60, seventy: 70,
  eighty: 80, ninety: 90,
};
const NUMBER_RE = new RegExp(`\\b(${Object.keys(NUMBERS).join("|")})\\b`, "g");

/**
 * 비교용으로 정리한 문장. alt=true 면 's → has, 'd → had 로 푼다
 * ('s 는 is/has, 'd 는 would/had 둘 다 될 수 있어서 두 가지를 다 만들어 비교)
 */
export function normalize(text: string, alt = false): string {
  let s = text
    .normalize("NFD")
    .replace(/\p{M}/gu, "") // café → cafe (악센트 제거)
    .toLowerCase()
    .replace(/[‘’`´]/g, "'")
    .replace(/[“”]/g, '"')
    .replace(/[.,!?;:"—–…]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
  if (alt) s = s.replace(/'s(?![a-z])/g, " has").replace(/'d(?![a-z])/g, " had");
  for (const [re, rep] of CONTRACTIONS) s = s.replace(re, rep);
  // 숫자 단어는 숫자로 (ten = 10). 입력·정답 양쪽에 똑같이 적용되므로 안전
  s = s.replace(NUMBER_RE, (w) => String(NUMBERS[w]));
  return s.replace(/\s+/g, " ").trim();
}

/** 띄어쓰기·하이픈 차이는 봐준다 (Wi-Fi = wifi = wi fi, p.m. = pm) */
const squash = (s: string) => s.replace(/[\s-]/g, "");

const forms = (text: string) => {
  const a = normalize(text);
  const b = normalize(text, true);
  return [a, b, squash(a), squash(b)];
};

export function isCorrect(input: string, answers: string[]): boolean {
  if (!normalize(input)) return false;
  const mine = new Set(forms(input));
  return answers.some((a) => forms(a).some((f) => mine.has(f)));
}

/** 축약형을 풀어쓴 형태 (She's a teacher. → She is a teacher.) */
function expanded(answer: string, alt = false): string {
  let s = answer.replace(/[‘’]/g, "'");
  if (alt) s = s.replace(/'s(?![a-z])/gi, " has").replace(/'d(?![a-z])/gi, " had");
  for (const [re, rep] of CONTRACTIONS) s = s.replace(new RegExp(re.source, "gi"), rep);
  return s.replace(/\s+/g, " ");
}

/** 입력과 가장 앞부분이 많이 겹치는 정답 (밑줄 표시 기준). 풀어쓴 형태도 후보 */
export function closestAnswer(input: string, answers: string[]): string {
  const raw = input.toLowerCase().replace(/[‘’]/g, "'");
  let best = answers[0];
  let bestScore = -1;
  const candidates = [...new Set(answers.flatMap((a) => [a, expanded(a), expanded(a, true)]))];
  for (const a of candidates) {
    const target = a.toLowerCase().replace(/[‘’]/g, "'");
    // 문장부호를 뺀 글자 단위 앞부분 일치 길이
    const t = [...target].filter((c) => !FIXED_PUNCT.test(c)).join("");
    let i = 0;
    while (i < raw.length && i < t.length && raw[i] === t[i]) i++;
    if (i > bestScore) {
      bestScore = i;
      best = a;
    }
  }
  return best;
}

export type Slot =
  | { kind: "char"; expected: string; typed?: string; ok?: boolean; cursor?: boolean }
  | { kind: "punct"; char: string };

/** extra: 정답 단어보다 더 친 글자, cursorEnd: 커서가 단어 끝(다음 칸 없음)에 있음 */
export type SlotWord = { slots: Slot[]; extra: string; cursorEnd?: boolean };

/**
 * 정답을 글자 칸(밑줄)으로 쪼개고, 입력한 글자를 채워 넣는다.
 * 단어는 공백 기준으로 맞춰서, 한 단어를 틀려도 뒤 단어 칸이 밀리지 않게 한다.
 * 정답보다 단어를 더 치면 마지막에 빨간 extra 단어로 붙는다.
 */
export function buildSlots(target: string, input: string): SlotWord[] {
  const targetWords = target.split(/\s+/).filter(Boolean);
  const inputWords = input
    .replace(/[‘’]/g, "'")
    .split(" ")
    .map((w) => [...w].filter((c) => !FIXED_PUNCT.test(c)).join(""));
  // 연속 공백으로 생긴 빈 단어는 무시하되, 끝에 입력 중인 빈 단어는 유지
  const words = inputWords.filter((w, i) => w !== "" || i === inputWords.length - 1);
  const curWord = words.length - 1;
  const curChar = words[curWord]?.length ?? 0;

  const out: SlotWord[] = targetWords.map((tw, wi) => {
    const typedWord = words[wi] ?? "";
    const slots: Slot[] = [];
    let ci = 0;
    for (const ch of tw) {
      if (FIXED_PUNCT.test(ch)) {
        slots.push({ kind: "punct", char: ch });
        continue;
      }
      const typed = typedWord[ci];
      const cursor = wi === curWord && ci === curChar;
      slots.push(
        typed === undefined
          ? { kind: "char", expected: ch, cursor }
          : { kind: "char", expected: ch, typed, ok: typed.toLowerCase() === ch.toLowerCase() },
      );
      ci++;
    }
    return { slots, extra: typedWord.slice(ci), cursorEnd: wi === curWord && curChar >= ci };
  });

  if (words.length > targetWords.length) {
    const rest = words.slice(targetWords.length).join(" ");
    out.push({ slots: [], extra: rest || " ", cursorEnd: true });
  }
  return out;
}

/** SOS 힌트 1단계: 단어 첫 글자만 공개 (I_ h_____) */
export function firstLetterHint(answer: string): string {
  return answer
    .split(" ")
    .map((w) =>
      [...w]
        .map((c, i) => (i === 0 || FIXED_PUNCT.test(c) || c === "'" ? c : "_"))
        .join(""),
    )
    .join(" ");
}

/** SOS 힌트 2단계: 단어 블록 섞기 */
export function shuffledWords(answer: string): string[] {
  const words = answer.replace(/[.,!?;:"]/g, "").split(/\s+/).filter(Boolean);
  const out = [...words];
  for (let i = out.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [out[i], out[j]] = [out[j], out[i]];
  }
  // 우연히 원래 순서면 한 번 뒤집기
  if (out.join(" ") === words.join(" ") && out.length > 1) out.reverse();
  return out;
}

/** 비교용 단어: 소문자, 문장부호 제거 */
const wordKey = (w: string) =>
  w
    .toLowerCase()
    .replace(/[‘’]/g, "'")
    .replace(/[.,!?;:"“”—–…]/g, "");

/**
 * 정답 문장의 단어마다 내가 쓴 문장에 (순서대로) 들어 있었는지 표시한다.
 * 가장 긴 공통 부분(LCS)으로 맞추므로 중간에 한 단어 틀려도 뒤는 초록으로 남는다.
 */
export function diffWords(answer: string, input: string): { text: string; ok: boolean }[] {
  const a = answer.split(/\s+/).filter(Boolean);
  const b = input.split(/\s+/).map(wordKey).filter(Boolean);
  const ak = a.map(wordKey);
  const dp = Array.from({ length: a.length + 1 }, () => new Array<number>(b.length + 1).fill(0));
  for (let i = a.length - 1; i >= 0; i--)
    for (let j = b.length - 1; j >= 0; j--)
      dp[i][j] = ak[i] === b[j] ? dp[i + 1][j + 1] + 1 : Math.max(dp[i + 1][j], dp[i][j + 1]);
  const ok = new Array<boolean>(a.length).fill(false);
  for (let i = 0, j = 0; i < a.length && j < b.length; ) {
    if (ak[i] === b[j]) {
      ok[i] = true;
      i++;
      j++;
    } else if (dp[i + 1][j] >= dp[i][j + 1]) i++;
    else j++;
  }
  return a.map((text, i) => ({ text, ok: ok[i] }));
}
