import type { GrammarTopic } from "@/lib/types";

const topic: GrammarTopic = {
  id: "future",
  order: 7,
  title: "미래 표현",
  titleEn: "Will vs be going to",
  emoji: "🔮",
  level: 1,
  summary: "will은 즉흥파, be going to는 계획파… 너는 어느 쪽?ㅋ",
  concept: [
    {
      heading: "will + 동사원형: 즉석 결정·약속·예측",
      body:
        "**will + 동사원형**은 말하는 **그 순간 결정한 일**, **약속**, **예측**에 잘 써.\n(전화 벨 울림) **I'll get it!** (내가 받을게!)\n**I'll call you later.** (나중에 전화할게 - 약속)\n주어가 뭐든 will은 그대로, 줄이면 **I'll, you'll, she'll…**",
      examples: [
        { en: "I'll help you.", ko: "내가 도와줄게." },
        { en: "I'll call you later.", ko: "나중에 전화할게." },
        { en: "It'll be fine.", ko: "괜찮을 거야." },
      ],
      eunga: "응응! '~할게!'가 떠오르면 will이 딱이야.",
    },
    {
      heading: "be going to + 동사원형: 이미 정한 계획",
      body:
        "**am/are/is going to + 동사원형**은 **미리 정해둔 계획**이나 **눈앞의 증거가 있는 예측**에 써.\n**I'm going to visit my grandma this weekend.** (이미 계획함)\n(먹구름 보면서) **It's going to rain.** (비 오겠다)\n구어에서는 **gonna**라고도 하지만, 쓸 때는 going to로!",
      examples: [
        { en: "I'm going to study abroad.", ko: "나 유학 갈 거야." },
        { en: "We're going to move next month.", ko: "우리 다음 달에 이사 가." },
        { en: "Look! It's going to rain.", ko: "봐! 비 오겠다." },
      ],
    },
    {
      heading: "부정문·의문문",
      body:
        "will: **won't**(= will not) + 원형 / **Will you** ~?\nbe going to: **I'm not going to** ~ / **Are you going to** ~?\n**Will you** ~? 는 '~해 줄래?' 부탁으로도 자주 써.",
      examples: [
        { en: "I won't tell anyone.", ko: "아무한테도 말 안 할게." },
        { en: "Are you going to come?", ko: "너 올 거야?" },
        { en: "Will you marry me?", ko: "나랑 결혼해 줄래?" },
      ],
      eunga: "won't는 want 아님! '안 할 거야'임. 발음도 '워운트'. 응응!",
    },
    {
      heading: "헷갈리면 이렇게!",
      body:
        "'~할게' (지금 결정, 약속) → **will**\n'~할 거야, ~하기로 했어' (이미 계획) → **be going to**\n단순 예측(내일 날씨 등)은 둘 다 자연스러울 때가 많아.\n사실 일상 대화에서는 둘 다 통하는 경우도 많으니 너무 쫄지 마!",
      examples: [
        { en: "I'm hungry. — I'll make you a sandwich.", ko: "배고파. — 샌드위치 만들어 줄게. (즉석)" },
        { en: "I'm going to make pasta tonight.", ko: "오늘 저녁 파스타 만들 거야. (계획)" },
      ],
    },
    {
      heading: "한국인이 자주 하는 실수",
      body:
        "❌ **I will going to go.** → 둘 중 하나만! ✅ I will go. / I'm going to go.\n❌ **She will goes.** → will 뒤는 원형! ✅ She will go.\n❌ **I going to eat.** → be동사 빠짐! ✅ I'm going to eat.\n❌ **I'll to call you.** → to 금지! ✅ I'll call you.",
      examples: [
        { en: "She will go.", ko: "그녀는 갈 거야." },
        { en: "I'm going to eat.", ko: "나 먹을 거야." },
      ],
      eunga: "will이랑 going to를 한 문장에 같이 쓰면 미래가 두 번 와서 시공간 뒤틀림 ㅋ",
    },
  ],
  exercises: [
    {
      id: "future-01",
      ko: "내가 도와줄게.",
      answers: ["I'll help you."],
      hint: "지금 결정한 '~할게' → will.",
    },
    {
      id: "future-02",
      ko: "나중에 전화할게.",
      answers: ["I'll call you later."],
      hint: "약속 → I'll + 원형.",
    },
    {
      id: "future-03",
      ko: "괜찮을 거야.",
      answers: ["It'll be okay.", "It'll be fine.", "It'll be all right.", "It'll be alright.", "It's going to be okay.", "It's going to be fine.", "Everything will be okay.", "Everything will be fine.", "Everything's going to be okay."],
      hint: "It will + be okay.",
    },
    {
      id: "future-04",
      ko: "(이미 계획했어) 나 이번 주말에 할머니 댁 갈 거야.",
      answers: ["I'm going to visit my grandma this weekend.", "I'm going to visit my grandmother this weekend.", "I'm going to go to my grandma's this weekend.", "I'm going to go to my grandma's house this weekend.", "I'm going to see my grandma this weekend."],
      hint: "이미 정한 계획 → be going to + 원형.",
    },
    {
      id: "future-05",
      ko: "(먹구름을 보며) 비 오겠다.",
      answers: ["It's going to rain."],
      hint: "눈앞의 증거가 있는 예측 → be going to.",
    },
    {
      id: "future-06",
      ko: "아무한테도 말 안 할게.",
      answers: ["I won't tell anyone.", "I won't tell anybody."],
      hint: "will not = won't.",
    },
    {
      id: "future-07",
      ko: "너 파티에 올 거야?",
      answers: ["Are you going to come to the party?", "Will you come to the party?", "Are you coming to the party?"],
      hint: "Are you going to + 원형 ~?",
    },
    {
      id: "future-08",
      ko: "(계획) 우리 다음 달에 이사 갈 거야.",
      answers: ["We're going to move next month.", "We're moving next month."],
      hint: "계획이니까 be going to + move.",
    },
    {
      id: "future-09",
      ko: "(지금 결정) 난 커피로 할게.",
      answers: ["I'll have coffee.", "I'll have a coffee.", "I'll get coffee.", "I'll get a coffee.", "I'll take coffee.", "I'll take a coffee."],
      hint: "주문할 때 즉석 결정 → I'll have ~.",
    },
    {
      id: "future-10",
      ko: "(계획) 그녀는 내년에 유학 갈 거야.",
      answers: ["She's going to study abroad next year."],
      hint: "She's going to + study abroad.",
    },
    {
      id: "future-11",
      ko: "창문 좀 열어 줄래?",
      answers: ["Will you open the window?", "Can you open the window?", "Could you open the window?", "Will you open the window, please?"],
      hint: "부탁 = Will you ~?",
    },
    {
      id: "future-12",
      ko: "(계획) 나 오늘 밤엔 나가지 않을 거야.",
      answers: ["I'm not going to go out tonight.", "I won't go out tonight.", "I'm not going out tonight."],
      hint: "be going to 부정 → I'm not going to + 원형.",
    },
  ],
};

export default topic;
