import type { GrammarTopic } from "@/lib/types";

const topic: GrammarTopic = {
  id: "to-infinitive",
  order: 15,
  title: "to부정사",
  titleEn: "To-Infinitives",
  emoji: "🎯",
  level: 2,
  summary: "to + 동사원형 = 하고 싶고, 해야 하고, 하려고 함. 욕망 덩어리ㅋ",
  concept: [
    {
      heading: "want to / need to / like to",
      body:
        "**to + 동사원형** 은 '~하는 것'이라는 뜻으로 동사 뒤에 붙어요.\n**want to** ~하고 싶다 / **need to** ~해야 한다 / **like to** ~하는 걸 좋아하다\n**plan to, hope to, decide to, try to** 도 같은 패턴!\n주어가 he/she면 앞 동사에 -s: She **wants to** go.",
      examples: [
        { en: "I want to sleep.", ko: "나 자고 싶어." },
        { en: "I need to study.", ko: "나 공부해야 돼." },
        { en: "She wants to be a singer.", ko: "그녀는 가수가 되고 싶어 해." },
        { en: "I decided to quit.", ko: "나 그만두기로 했어." },
      ],
      eunga: "I want to nod forever. 응아의 인생 목표 응응.",
    },
    {
      heading: "부정 & 질문",
      body:
        "부정: **don't want to** (~하기 싫어), **don't need to** (~안 해도 돼)\n질문: **Do you want to ~?** (~할래?) — 친구한테 제안할 때 완전 자주 씀!\n회화에서는 want to를 **wanna**라고 발음하기도 해요 (글로 쓸 땐 want to).",
      examples: [
        { en: "I don't want to go.", ko: "나 가기 싫어." },
        { en: "Do you want to eat something?", ko: "뭐 좀 먹을래?" },
        { en: "You don't need to worry.", ko: "너 걱정 안 해도 돼." },
      ],
      eunga: "월요일에 I don't want to go 외치는 거 응아도 공감 100%.",
    },
    {
      heading: "목적의 to = ~하려고, ~하러",
      body:
        "문장 끝에 **to + 동사원형** 을 붙이면 '**~하려고 / ~하러**' (목적)!\nI went to the store **to buy** milk. (우유 사러 가게에 갔어)\n'for + 동사' ❌ → 목적은 **to + 동사원형** ⭕",
      examples: [
        { en: "I went to the store to buy milk.", ko: "우유 사러 가게에 갔어." },
        { en: "I study English to travel.", ko: "나는 여행하려고 영어 공부해." },
        { en: "I got up early to exercise.", ko: "운동하려고 일찍 일어났어." },
      ],
      eunga: "응아는 칭찬받으려고 끄덕여요. I nod to get praise!",
    },
    {
      heading: "한국인이 자주 하는 실수",
      body:
        "❌ I want go. → ✅ I want **to go**. (to 빼먹기 금지)\n❌ I want to going. / to went → ✅ **to + 동사원형**만!\n❌ She want to ~ → ✅ She **wants** to ~\n❌ I came here for study. → ✅ I came here **to study**.\n⚠️ can, should, must 뒤엔 to ❌ (그건 조동사니까!)",
      examples: [
        { en: "He came here to see you.", ko: "그는 너 보러 여기 왔어." },
        { en: "I want to go home.", ko: "집에 가고 싶어." },
      ],
      eunga: "want 뒤에 to 빠지면 응아가 to 들고 쫓아감. 기다려~!",
    },
  ],
  exercises: [
    {
      id: "to-infinitive-01",
      ko: "나 자고 싶어.",
      answers: ["I want to sleep.", "I want to go to sleep.", "I want to go to bed."],
      hint: "want to + 동사원형",
    },
    {
      id: "to-infinitive-02",
      ko: "나 공부해야 돼.",
      answers: ["I need to study.", "I have to study."],
      hint: "need to",
    },
    {
      id: "to-infinitive-03",
      ko: "나 집에 가고 싶어.",
      answers: ["I want to go home."],
      hint: "go home (to 없이)",
    },
    {
      id: "to-infinitive-04",
      ko: "나 가기 싫어.",
      answers: ["I don't want to go."],
      hint: "don't want to",
    },
    {
      id: "to-infinitive-05",
      ko: "뭐 좀 먹을래?",
      answers: ["Do you want to eat something?", "Do you want something to eat?", "Do you want to eat anything?", "Want to eat something?"],
      hint: "Do you want to ~?",
    },
    {
      id: "to-infinitive-06",
      ko: "그녀는 가수가 되고 싶어 해.",
      answers: ["She wants to be a singer.", "She wants to become a singer."],
      hint: "wants to be",
    },
    {
      id: "to-infinitive-07",
      ko: "나 그만두기로 했어.",
      answers: ["I decided to quit."],
      hint: "decide to + 동사원형",
    },
    {
      id: "to-infinitive-08",
      ko: "우유 사러 가게에 갔어.",
      answers: ["I went to the store to buy milk.", "I went to the store to get milk.", "I went to the store to buy some milk.", "I went to the store to get some milk."],
      hint: "목적 = to + 동사원형",
    },
    {
      id: "to-infinitive-09",
      ko: "너 걱정 안 해도 돼.",
      answers: ["You don't need to worry.", "You don't have to worry."],
      hint: "don't need to",
    },
    {
      id: "to-infinitive-10",
      ko: "운동하려고 일찍 일어났어.",
      answers: ["I got up early to exercise.", "I woke up early to exercise.", "I got up early to work out.", "I woke up early to work out."],
      hint: "got up early + to exercise",
    },
    {
      id: "to-infinitive-11",
      ko: "그는 너 보러 여기 왔어.",
      answers: ["He came here to see you."],
      hint: "came here to see",
    },
    {
      id: "to-infinitive-12",
      ko: "나는 해외여행 하려고 영어 공부해.",
      answers: ["I study English to travel abroad.", "I'm studying English to travel abroad.", "I study English to travel overseas.", "I'm studying English to travel overseas."],
      hint: "study English + to travel abroad",
    },
  ],
};

export default topic;
