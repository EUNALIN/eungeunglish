import type { GrammarTopic } from "@/lib/types";

const topic: GrammarTopic = {
  id: "comparatives",
  order: 14,
  title: "비교급·최상급",
  titleEn: "Comparatives & Superlatives",
  emoji: "🏆",
  level: 2,
  summary: "더 크다 bigger, 제일 크다 the biggest! 비교는 인생의 도둑이지만 영어에선 필수ㅋ",
  concept: [
    {
      heading: "비교급 = 더 ~한 (-er than)",
      body:
        "짧은 형용사: **-er + than** (tall → taller than)\n-e로 끝나면 **-r**만 (nice → nicer)\n단모음+단자음이면 **자음 하나 더** (big → bigger, hot → hotter)\n-y로 끝나면 **y → ier** (easy → easier, happy → happier)",
      examples: [
        { en: "I'm taller than my brother.", ko: "나는 우리 형보다 키가 커." },
        { en: "Today is hotter than yesterday.", ko: "오늘이 어제보다 더 더워." },
        { en: "This is easier than that.", ko: "이게 저거보다 더 쉬워." },
      ],
      eunga: "응아는 어제보다 오늘 더 끄덕여요. nod-er! (이건 진짜 단어 아님 응응)",
    },
    {
      heading: "긴 형용사는 more / most",
      body:
        "2음절 이상 긴 단어(대부분)는 앞에 **more**를 붙여요.\nexpensive → **more expensive**, interesting → **more interesting**\n최상급은 **the most**: the most expensive\n⚠️ 둘 중 하나만! **more bigger ❌**",
      examples: [
        { en: "This bag is more expensive.", ko: "이 가방이 더 비싸." },
        { en: "Math is more difficult than English.", ko: "수학이 영어보다 더 어려워." },
        { en: "It's the most beautiful place.", ko: "거기가 제일 아름다운 곳이야." },
      ],
      eunga: "more랑 -er 동시에 쓰면 이중과금. 응아 지갑 텅텅.",
    },
    {
      heading: "최상급 = 제일 ~한 (the -est)",
      body:
        "**the + -est**: tall → the tallest, big → the biggest\n범위는 **in + 장소/집단** (in my class, in the world) 또는 **of + 복수** (of all)\n불규칙 꼭 암기!\n**good → better → the best**\n**bad → worse → the worst**\n**many/much → more → the most**",
      examples: [
        { en: "He is the tallest in my class.", ko: "그는 우리 반에서 제일 키가 커." },
        { en: "This is the best pizza ever.", ko: "이거 역대 최고의 피자야." },
        { en: "Today was the worst day.", ko: "오늘 최악의 날이었어." },
      ],
      eunga: "응아는 세상에서 the cutest 별. 반박 시 끄덕임 공격.",
    },
    {
      heading: "한국인이 자주 하는 실수",
      body:
        "❌ more bigger → ✅ **bigger**\n❌ gooder / more good → ✅ **better**\n❌ He is tallest. → ✅ He is **the** tallest. (최상급 앞 the!)\n❌ taller then → ✅ taller **than** (then은 '그때')\n'훨씬 더'는 **much**: much bigger (very bigger ❌)",
      examples: [
        { en: "This one is much better.", ko: "이게 훨씬 나아." },
        { en: "My phone is older than yours.", ko: "내 폰이 네 거보다 더 오래됐어." },
      ],
      eunga: "very bigger 쓰면 응아가 much much 외치며 달려옴.",
    },
  ],
  exercises: [
    {
      id: "comparatives-01",
      ko: "나는 우리 형보다 키가 커.",
      answers: ["I'm taller than my brother.", "I'm taller than my older brother.", "I'm taller than my big brother."],
      hint: "taller than",
    },
    {
      id: "comparatives-02",
      ko: "오늘이 어제보다 더 더워.",
      answers: ["Today is hotter than yesterday.", "It's hotter today than yesterday.", "It's hotter today than it was yesterday."],
      hint: "hot → hotter (t 하나 더)",
    },
    {
      id: "comparatives-03",
      ko: "이 가방이 더 비싸.",
      answers: ["This bag is more expensive."],
      hint: "긴 단어는 more",
    },
    {
      id: "comparatives-04",
      ko: "이게 훨씬 나아.",
      answers: ["This is much better.", "This one is much better.", "This is a lot better.", "This one is a lot better.", "This is way better."],
      hint: "good의 비교급 + much",
    },
    {
      id: "comparatives-05",
      ko: "이거 역대 최고의 피자야.",
      answers: ["This is the best pizza ever.", "It's the best pizza ever.", "This is the best pizza I've ever had."],
      hint: "the best ~ ever",
    },
    {
      id: "comparatives-06",
      ko: "수학이 영어보다 더 어려워.",
      answers: ["Math is more difficult than English.", "Math is harder than English."],
      hint: "more difficult than",
    },
    {
      id: "comparatives-07",
      ko: "그는 우리 반에서 제일 키가 커.",
      answers: ["He is the tallest in my class.", "He's the tallest in our class.", "He's the tallest student in my class.", "He's the tallest student in our class."],
      hint: "the tallest in ~",
    },
    {
      id: "comparatives-08",
      ko: "오늘 최악의 날이었어.",
      answers: ["Today was the worst day.", "Today was the worst day ever.", "It was the worst day."],
      hint: "bad → worse → the worst",
    },
    {
      id: "comparatives-09",
      ko: "내 폰이 네 거보다 더 오래됐어.",
      answers: ["My phone is older than yours."],
      hint: "older than yours",
    },
    {
      id: "comparatives-10",
      ko: "이 문제가 저 문제보다 더 쉬워.",
      answers: ["This question is easier than that one.", "This problem is easier than that one.", "This question is easier than that question.", "This problem is easier than that problem."],
      hint: "easy → easier",
    },
    {
      id: "comparatives-11",
      ko: "거기가 서울에서 제일 비싼 식당이야.",
      answers: ["It's the most expensive restaurant in Seoul.", "That's the most expensive restaurant in Seoul."],
      hint: "the most expensive ~ in Seoul",
    },
    {
      id: "comparatives-12",
      ko: "너 어제보다 훨씬 행복해 보여.",
      answers: ["You look much happier than yesterday.", "You look a lot happier than yesterday.", "You look much happier than you did yesterday.", "You look way happier than yesterday."],
      hint: "look + much happier",
    },
  ],
};

export default topic;
