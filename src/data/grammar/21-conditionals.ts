import type { GrammarTopic } from "@/lib/types";

const topic: GrammarTopic = {
  id: "conditionals",
  order: 21,
  title: "가정법",
  titleEn: "Conditionals",
  emoji: "🦄",
  level: 3,
  summary: "현실은 월요일이지만 상상 속에선 로또 1등. 시제를 한 칸 뒤로 밀어서 망상하는 문법 🌈",
  concept: [
    {
      heading: "가정법 = 현실이 아닌 상상 모드",
      body: "그냥 조건(If it rains, I'll stay home.)은 **진짜 일어날 수 있는 일**이에요.\n가정법은 **지금 현실과 반대이거나 거의 불가능한 일**을 상상할 때 써요.\n\n핵심 비밀: **시제를 한 칸 과거로 민다!**\n• 현재 상황을 상상 → 동사는 **과거형**\n• 과거 상황을 상상 → 동사는 **had + p.p.**\n\n과거형이지만 뜻은 '현재'라는 게 포인트예요.",
      examples: [
        { en: "If it rains, I will stay home.", ko: "비 오면 집에 있을게. (진짜 올 수도 있음)" },
        { en: "If I had wings, I would fly to you.", ko: "나한테 날개가 있다면 너한테 날아갈 텐데. (날개 없음)" },
        { en: "If I knew the answer, I would tell you.", ko: "내가 답을 알면 말해 줄 텐데. (지금 모름)" },
      ],
      eunga: "응응! 과거형인데 현재 얘기라니, 영어도 현실 도피를 하는구나 🏖️",
    },
    {
      heading: "① 현재 반대: If + 과거형, would + 동사원형",
      body: "**If + 주어 + 과거형, 주어 + would/could/might + 동사원형**\n= (지금) ~라면 ~할 텐데\n\nbe동사는 주어가 뭐든 **were** 가 원칙!\n**If I were you, ~** = 내가 너라면 ~ (조언할 때 국민 표현)\n(일상 회화에선 If I was ~도 들리지만, 시험·글에선 were가 안전해요.)",
      examples: [
        { en: "If I were you, I would take a break.", ko: "내가 너라면 좀 쉬겠어." },
        { en: "If I had more time, I could learn guitar.", ko: "시간이 더 있으면 기타를 배울 수 있을 텐데." },
        { en: "If she were here, she would laugh.", ko: "그녀가 여기 있다면 웃을 텐데." },
      ],
      eunga: "응응! If I were you, 나는 지금 간식을 먹겠어 🍪",
    },
    {
      heading: "② 과거 반대: If + had p.p., would have p.p.",
      body: "이미 지나간 일을 뒤집어 상상할 때.\n**If + 주어 + had + p.p., 주어 + would/could + have + p.p.**\n= (그때) ~했더라면 ~했을 텐데\n\n후회, 아쉬움, '만약에…' 할 때 딱이에요.",
      examples: [
        { en: "If I had known, I would have helped you.", ko: "내가 알았더라면 너를 도와줬을 텐데." },
        { en: "If we had left earlier, we could have caught the bus.", ko: "우리가 더 일찍 나왔으면 버스를 탈 수 있었을 텐데." },
        { en: "If you had told me, I wouldn't have worried.", ko: "네가 말해 줬으면 걱정 안 했을 텐데." },
      ],
      eunga: "응응! If I had studied, 나는 지금 이걸 안 배우고 있었겠지… 🥲",
    },
    {
      heading: "③ I wish: ~라면 좋을 텐데",
      body: "현실이 아쉬울 때 **I wish** 뒤도 가정법이에요.\n\n• **I wish + 과거형** = 지금 ~라면 좋을 텐데\n  I wish I were taller. (지금 키 작음 😢)\n• **I wish + had p.p.** = 그때 ~했더라면 좋았을 텐데\n  I wish I had gone. (그때 안 감)\n• **I wish + could + 동사원형** = ~할 수 있으면 좋을 텐데",
      examples: [
        { en: "I wish I had a dog.", ko: "강아지가 있으면 좋겠다." },
        { en: "I wish I could sleep more.", ko: "잠을 더 잘 수 있으면 좋겠다." },
        { en: "I wish I had listened to you.", ko: "네 말을 들었더라면 좋았을 텐데." },
      ],
      eunga: "응응! I wish it were Friday. 매일 소원 빌어도 아직 수요일이야 📅",
    },
    {
      heading: "한국인이 자주 하는 실수 🚨",
      body: "1. **if절에 would 넣기** ❌\n   ❌ If I would have money, ~ → ⭕ If I had money, ~\n   would는 **결과절(뒤쪽)** 에만!\n\n2. **현재형 그대로 쓰기** ❌\n   ❌ If I am you, I will ~ → ⭕ If I were you, I would ~\n\n3. **I wish 뒤에 현재형** ❌\n   ❌ I wish I have a car. → ⭕ I wish I had a car.\n\n4. **과거 가정에서 have 빼먹기** ❌\n   ❌ I would helped you. → ⭕ I would have helped you.",
      examples: [
        { en: "If I had a car, I would drive you home.", ko: "차가 있으면 집에 태워 줄 텐데." },
        { en: "I wish I lived near the beach.", ko: "바닷가 근처에 살면 좋겠다." },
        { en: "I would have called you.", ko: "너한테 전화했을 텐데." },
      ],
      eunga: "응응! if절에 would 넣으면 상상을 두 번 해서 머리가 터져 🤯",
    },
  ],
  exercises: [
    {
      id: "conditionals-01",
      ko: "내가 너라면 그거 살 거야.",
      answers: ["If I were you, I would buy it.", "If I were you, I would buy that.", "I would buy it if I were you."],
      hint: "If I were you, I would + 동사원형",
    },
    {
      id: "conditionals-02",
      ko: "강아지가 있으면 좋겠다. (지금 없음)",
      answers: ["I wish I had a dog.", "I wish I had a puppy."],
      hint: "I wish + 과거형",
    },
    {
      id: "conditionals-03",
      ko: "돈이 있으면 새 폰을 살 텐데.",
      answers: [
        "If I had money, I would buy a new phone.",
        "If I had the money, I would buy a new phone.",
        "I would buy a new phone if I had money.",
        "I would buy a new phone if I had the money.",
      ],
      hint: "If + had, would + 동사원형",
    },
    {
      id: "conditionals-04",
      ko: "내가 더 키가 크면 좋을 텐데.",
      answers: ["I wish I were taller.", "I wish I was taller."],
      hint: "I wish + were + 비교급",
    },
    {
      id: "conditionals-05",
      ko: "내가 답을 알면 너한테 말해 줄 텐데. (지금 모름)",
      answers: [
        "If I knew the answer, I would tell you.",
        "I would tell you if I knew the answer.",
      ],
      hint: "know의 과거형은 knew",
    },
    {
      id: "conditionals-06",
      ko: "오늘이 금요일이면 좋겠다.",
      answers: ["I wish it were Friday.", "I wish it was Friday.", "I wish today were Friday.", "I wish today was Friday."],
      hint: "요일 말할 땐 주어 it, I wish + were",
    },
    {
      id: "conditionals-07",
      ko: "시간이 더 있으면 너를 도와줄 수 있을 텐데.",
      answers: [
        "If I had more time, I could help you.",
        "I could help you if I had more time.",
        "If I had more time, I would help you.",
      ],
      hint: "~할 수 있을 텐데 = could + 동사원형",
    },
    {
      id: "conditionals-08",
      ko: "잠을 더 잘 수 있으면 좋겠다.",
      answers: ["I wish I could sleep more.", "I wish I could get more sleep."],
      hint: "I wish I could + 동사원형",
    },
    {
      id: "conditionals-09",
      ko: "그가 여기 있다면 기뻐할 텐데.",
      answers: [
        "If he were here, he would be happy.",
        "If he was here, he would be happy.",
        "He would be happy if he were here.",
        "He would be happy if he was here.",
      ],
      hint: "be동사는 were, 결과는 would be",
    },
    {
      id: "conditionals-10",
      ko: "내가 알았더라면 너를 도와줬을 텐데.",
      answers: [
        "If I had known, I would have helped you.",
        "I would have helped you if I had known.",
      ],
      hint: "과거 반대 → If + had p.p., would have p.p.",
    },
    {
      id: "conditionals-11",
      ko: "그때 네 말을 들었더라면 좋았을 텐데.",
      answers: ["I wish I had listened to you.", "I wish I had listened to you then."],
      hint: "과거 후회 → I wish + had p.p.",
    },
    {
      id: "conditionals-12",
      ko: "우리가 더 일찍 떠났더라면 버스를 탈 수 있었을 텐데.",
      answers: [
        "If we had left earlier, we could have caught the bus.",
        "We could have caught the bus if we had left earlier.",
        "If we had left earlier, we could have taken the bus.",
        "If we had left earlier, we would have caught the bus.",
      ],
      hint: "If + had p.p., could have + p.p. (catch → caught)",
    },
  ],
};

export default topic;
