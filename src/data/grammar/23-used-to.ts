import type { GrammarTopic } from "@/lib/types";

const topic: GrammarTopic = {
  id: "used-to",
  order: 23,
  title: "used to / be used to / get used to",
  titleEn: "Used To",
  emoji: "🔁",
  level: 3,
  summary: "예전엔 그랬지(라떼는)… vs 이제 익숙해 vs 익숙해지는 중. 생긴 건 쌍둥이, 성격은 삼남매 👨‍👩‍👦",
  concept: [
    {
      heading: "① used to + 동사원형 = (예전엔) ~하곤 했다",
      body: "**과거에 규칙적으로 했거나 그랬던 상태**인데 **지금은 아닌 것**.\n\n• I **used to** play the piano. (지금은 안 침)\n• There **used to** be a bakery here. (지금은 없음)\n\n부정: **didn't use to** + 동사원형\n의문: **Did you use to** + 동사원형?\n(did가 있으면 used → **use** 로! 과거 표시가 겹치면 안 돼요.)",
      examples: [
        { en: "I used to live in Busan.", ko: "나 예전에 부산에 살았어. (지금은 아님)" },
        { en: "He used to be shy.", ko: "그는 예전엔 수줍음이 많았어." },
        { en: "Did you use to have long hair?", ko: "너 예전에 머리 길었어?" },
      ],
      eunga: "응응! 나도 used to be 평범한 돌멩이였어. 지금은 별이지 ⭐",
    },
    {
      heading: "② be used to + 명사/-ing = ~에 익숙하다",
      body: "**지금 이미 익숙한 상태**.\n여기서 **to는 전치사**라서 뒤에 **명사나 -ing** 가 와요! (동사원형 ❌)\n\n• I **am used to** spicy food.\n• I **am used to waking** up early.\n\n부정: I'm not used to ~ (~에 익숙하지 않다)",
      examples: [
        { en: "I am used to the cold.", ko: "나 추위에 익숙해." },
        { en: "She is used to working at night.", ko: "그녀는 밤에 일하는 거에 익숙해." },
        { en: "I'm not used to this keyboard.", ko: "나 이 키보드 아직 익숙하지 않아." },
      ],
      eunga: "응응! 나는 끄덕이는 거에 익숙해. I am used to nodding 🙂‍↕️",
    },
    {
      heading: "③ get used to + 명사/-ing = ~에 익숙해지다",
      body: "**익숙하지 않던 상태 → 익숙한 상태로 변하는 과정**.\n마찬가지로 to 뒤에 **명사나 -ing**!\n\n• I'm **getting used to** my new job. (익숙해지는 중)\n• You'll **get used to** it. (곧 익숙해질 거야 — 위로 단골 멘트)\n• I **got used to** living alone. (익숙해졌어)",
      examples: [
        { en: "You will get used to it.", ko: "너 곧 익숙해질 거야." },
        { en: "I'm getting used to my new school.", ko: "나 새 학교에 익숙해지는 중이야." },
        { en: "It took time to get used to the noise.", ko: "소음에 익숙해지는 데 시간이 걸렸어." },
      ],
      eunga: "응응! 월요일에는 아무리 해도 get used to 가 안 돼 😵",
    },
    {
      heading: "한 장 정리 + 한국인이 자주 하는 실수 🚨",
      body: "• **used to + 동사원형** → 예전엔 ~했다 (과거 습관)\n• **be used to + 명사/-ing** → ~에 익숙하다 (상태)\n• **get used to + 명사/-ing** → ~에 익숙해지다 (변화)\n\n1. ❌ I am used to wake up early. → ⭕ I am used to waking up early.\n2. ❌ I used to playing soccer. → ⭕ I used to play soccer.\n3. ❌ Did you used to ~? → ⭕ Did you use to ~?\n4. ❌ I use to go there. (현재 습관엔 안 씀) → ⭕ I usually go there.",
      examples: [
        { en: "I used to drink coffee.", ko: "나 예전엔 커피 마셨어." },
        { en: "I am used to drinking coffee.", ko: "나 커피 마시는 거 익숙해." },
        { en: "I got used to drinking coffee.", ko: "나 커피 마시는 거에 익숙해졌어." },
      ],
      eunga: "응응! be가 있으면 -ing, 없으면 동사원형. be는 -ing 마니아야 🎧",
    },
  ],
  exercises: [
    {
      id: "used-to-01",
      ko: "나 예전에 피아노 쳤어. (지금은 안 침)",
      answers: ["I used to play the piano.", "I used to play piano."],
      hint: "used to + 동사원형",
    },
    {
      id: "used-to-02",
      ko: "너 곧 익숙해질 거야.",
      answers: ["You will get used to it.", "You will get used to it soon.", "You will soon get used to it."],
      hint: "익숙해지다 = get used to",
    },
    {
      id: "used-to-03",
      ko: "나 매운 음식에 익숙해.",
      answers: ["I am used to spicy food."],
      hint: "익숙하다(상태) = be used to + 명사",
    },
    {
      id: "used-to-04",
      ko: "그는 예전엔 수줍음이 많았어.",
      answers: ["He used to be shy.", "He used to be very shy.", "He used to be really shy."],
      hint: "used to + be",
    },
    {
      id: "used-to-05",
      ko: "여기에 빵집이 있었어. (지금은 없어)",
      answers: ["There used to be a bakery here."],
      hint: "There used to be ~",
    },
    {
      id: "used-to-06",
      ko: "나 일찍 일어나는 거에 익숙해.",
      answers: ["I am used to waking up early.", "I am used to getting up early."],
      hint: "be used to 뒤에는 -ing!",
    },
    {
      id: "used-to-07",
      ko: "나 아직 이 추위에 익숙하지 않아.",
      answers: [
        "I am not used to this cold yet.",
        "I am still not used to this cold.",
        "I am not used to this cold weather yet.",
        "I am still not used to this cold weather.",
      ],
      hint: "be not used to + 명사, 아직 = yet/still",
    },
    {
      id: "used-to-08",
      ko: "너 예전에 안경 썼어?",
      answers: ["Did you use to wear glasses?"],
      hint: "Did you use to ~? (did 있으면 use!)",
    },
    {
      id: "used-to-09",
      ko: "나 새 직장에 익숙해지는 중이야.",
      answers: ["I am getting used to my new job.", "I am getting used to my new workplace."],
      hint: "익숙해지는 중 = be getting used to",
    },
    {
      id: "used-to-10",
      ko: "우리는 예전엔 매주 주말에 축구를 했어.",
      answers: [
        "We used to play soccer every weekend.",
        "We used to play football every weekend.",
        "We used to play soccer on weekends.",
      ],
      hint: "used to + play",
    },
    {
      id: "used-to-11",
      ko: "나 혼자 사는 거에 익숙해졌어.",
      answers: ["I got used to living alone.", "I have gotten used to living alone.", "I have got used to living alone."],
      hint: "익숙해졌다 = got used to + -ing",
    },
    {
      id: "used-to-12",
      ko: "나 예전엔 커피를 안 마셨는데, 지금은 커피 마시는 거에 익숙해.",
      answers: [
        "I didn't use to drink coffee, but now I am used to drinking it.",
        "I didn't use to drink coffee, but now I am used to drinking coffee.",
        "I never used to drink coffee, but now I am used to drinking it.",
        "I never used to drink coffee, but now I am used to drinking coffee.",
      ],
      hint: "didn't use to + 원형 / be used to + -ing",
    },
  ],
};

export default topic;
