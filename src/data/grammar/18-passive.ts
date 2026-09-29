import type { GrammarTopic } from "@/lib/types";

const topic: GrammarTopic = {
  id: "passive",
  order: 18,
  title: "수동태",
  titleEn: "Passive Voice",
  emoji: "🫳",
  level: 3,
  summary: "내가 한 게 아니라 당한 거야… 억울함을 문법으로 표현하는 be + p.p. 😤",
  concept: [
    {
      heading: "수동태 기본: be + p.p.",
      body: "능동태: 주어가 **~한다** (행동하는 쪽이 주인공)\n수동태: 주어가 **~된다 / ~당한다** (당하는 쪽이 주인공)\n\n형태: **be동사 + 과거분사(p.p.)** (+ by 행위자)\n\n만드는 법:\n1. 능동태의 목적어를 주어로\n2. 동사를 be + p.p.로 (시제는 be동사가 담당)\n3. 원래 주어는 by + 목적격으로 (필요하면)",
      examples: [
        { en: "My dad cleaned the car. → The car was cleaned by my dad.", ko: "아빠가 차를 닦았다 → 차가 아빠에 의해 닦였다" },
        { en: "This song is loved by everyone.", ko: "이 노래는 모두에게 사랑받아." },
        { en: "The window was broken.", ko: "창문이 깨졌어." },
      ],
      eunga: "응응! 나도 매일 사람들한테 끄덕여지고 있어. I am nodded… 아 이건 아닌가 🤔",
    },
    {
      heading: "by는 생략하는 게 더 흔해요",
      body: "수동태를 쓰는 진짜 이유는 **누가 했는지 모르거나, 중요하지 않거나, 뻔할 때**예요.\n그래서 실제 대화에서는 **by ~를 빼는 경우가 훨씬 많아요.**\n\n• My bike was stolen. (누가 훔쳤는지 모름)\n• English is spoken in many countries. (사람들이 말하지, 뻔함)\n\n구어체에선 be 대신 **get + p.p.**도 자주 써요: I got fired. (나 잘렸어)",
      examples: [
        { en: "My wallet was stolen.", ko: "내 지갑 도둑맞았어." },
        { en: "The meeting was canceled.", ko: "회의 취소됐어." },
        { en: "He got hurt while playing soccer.", ko: "그는 축구하다가 다쳤어." },
      ],
      eunga: "응응! 범인을 모를 땐 수동태로 은근슬쩍 넘어가는 거야 🕵️",
    },
    {
      heading: "시제·조동사와 합체하기",
      body: "be동사 부분만 바꾸면 시제가 바뀌어요.\n\n• 현재: is/am/are + p.p.\n• 과거: was/were + p.p.\n• 미래: **will be** + p.p.\n• 진행: is/was **being** + p.p. (~되는 중)\n• 완료: has/have **been** + p.p.\n• 조동사: **can/must/should be** + p.p.",
      examples: [
        { en: "The package will be delivered tomorrow.", ko: "택배는 내일 배달될 거야." },
        { en: "The road is being repaired.", ko: "도로가 수리되는 중이야." },
        { en: "This room has been cleaned.", ko: "이 방은 청소가 되어 있어." },
        { en: "Phones must be turned off.", ko: "휴대폰은 꺼져 있어야 합니다." },
      ],
      eunga: "응응! be being been… 비비비 비트박스 같지? 🎤",
    },
    {
      heading: "by 말고 다른 전치사를 쓰는 표현",
      body: "통째로 외워 두면 편한 수동태 표현들!\n\n• be interested **in** ~에 관심 있다\n• be known **for** ~로 유명하다 / be known **to** ~에게 알려져 있다\n• be made **of** (재료 그대로) / be made **from** (재료가 변함)\n• be covered **with** ~로 덮여 있다\n• be surprised **at/by** ~에 놀라다\n• be filled **with** ~로 가득 차 있다",
      examples: [
        { en: "I'm interested in K-pop.", ko: "나 케이팝에 관심 있어." },
        { en: "This table is made of wood.", ko: "이 테이블은 나무로 만들어졌어." },
        { en: "The mountain is covered with snow.", ko: "산이 눈으로 덮여 있어." },
      ],
      eunga: "응응! 나는 반짝임으로 made of 되어 있어 ✨",
    },
    {
      heading: "한국인이 자주 하는 실수 🚨",
      body: "1. **be동사 빼먹기** ❌ My phone broken. → ⭕ My phone is broken.\n\n2. **목적어 없는 동사(자동사)를 수동태로** ❌\n   happen, arrive, disappear, die는 수동태 불가!\n   ❌ The accident was happened. → ⭕ The accident happened.\n\n3. **감정 동사 헷갈리기**\n   I'm interest**ed** (내가 흥미를 느낌) vs It's interest**ing** (그게 흥미를 줌)\n   ❌ I'm boring. (나는 지루한 사람이야 😱) → ⭕ I'm bored.\n\n4. **p.p. 대신 과거형 쓰기** ❌ It was wrote. → ⭕ It was written.",
      examples: [
        { en: "What happened?", ko: "무슨 일이야? (was happened ❌)" },
        { en: "I was so bored.", ko: "나 너무 지루했어." },
        { en: "This letter was written in 1990.", ko: "이 편지는 1990년에 쓰였어." },
      ],
      eunga: "응응! I'm boring이라고 하면 소개팅 끝이야. 조심해 💔",
    },
  ],
  exercises: [
    {
      id: "passive-01",
      ko: "내 자전거 도둑맞았어.",
      answers: [
        "My bike was stolen.",
        "My bicycle was stolen.",
        "My bike has been stolen.",
        "My bicycle has been stolen.",
        "My bike got stolen.",
      ],
      hint: "steal의 p.p.는 stolen",
    },
    {
      id: "passive-02",
      ko: "이 책은 영어로 쓰여 있어.",
      answers: ["This book is written in English.", "This book was written in English."],
      hint: "write의 p.p.는 written, '~로(언어)'는 in",
    },
    {
      id: "passive-03",
      ko: "나 그 파티에 초대받았어.",
      answers: [
        "I was invited to the party.",
        "I got invited to the party.",
        "I have been invited to the party.",
      ],
      hint: "초대받다 = be invited to",
    },
    {
      id: "passive-04",
      ko: "회의가 취소됐어.",
      answers: [
        "The meeting was canceled.",
        "The meeting was cancelled.",
        "The meeting has been canceled.",
        "The meeting has been cancelled.",
        "The meeting got canceled.",
        "The meeting got cancelled.",
      ],
      hint: "cancel → canceled(미국식) / cancelled(영국식) 둘 다 OK",
    },
    {
      id: "passive-05",
      ko: "그 가게는 일요일마다 문을 닫아. (닫혀 있어)",
      answers: [
        "The store is closed on Sundays.",
        "The shop is closed on Sundays.",
        "The store is closed on Sunday.",
        "The shop is closed on Sunday.",
      ],
      hint: "닫혀 있는 상태 = be closed",
    },
    {
      id: "passive-06",
      ko: "이 사진은 우리 아빠가 찍었어. (수동태로)",
      answers: [
        "This picture was taken by my dad.",
        "This photo was taken by my dad.",
        "This picture was taken by my father.",
        "This photo was taken by my father.",
      ],
      hint: "사진을 찍다 = take a picture → was taken by ~",
    },
    {
      id: "passive-07",
      ko: "영어는 전 세계에서 쓰여.",
      answers: [
        "English is spoken all over the world.",
        "English is spoken around the world.",
        "English is spoken worldwide.",
        "English is used all over the world.",
        "English is used around the world.",
      ],
      hint: "speak의 p.p.는 spoken",
    },
    {
      id: "passive-08",
      ko: "이 다리는 100년 전에 지어졌어.",
      answers: [
        "This bridge was built 100 years ago.",
        "This bridge was built a hundred years ago.",
        "This bridge was built one hundred years ago.",
      ],
      hint: "build의 p.p.는 built, ago가 있으니 과거!",
    },
    {
      id: "passive-09",
      ko: "그 방은 매일 청소돼.",
      answers: ["The room is cleaned every day.", "That room is cleaned every day.", "The room gets cleaned every day."],
      hint: "현재 습관적인 수동 = is + p.p.",
    },
    {
      id: "passive-10",
      ko: "내 차 지금 수리되는 중이야.",
      answers: [
        "My car is being repaired now.",
        "My car is being repaired right now.",
        "My car is being fixed now.",
        "My car is being fixed right now.",
        "My car is being repaired.",
      ],
      hint: "진행 수동태 = is being + p.p.",
    },
    {
      id: "passive-11",
      ko: "그 보고서는 금요일까지 제출되어야 해.",
      answers: [
        "The report must be submitted by Friday.",
        "The report has to be submitted by Friday.",
        "The report should be submitted by Friday.",
        "The report needs to be submitted by Friday.",
      ],
      hint: "조동사 + be + p.p., '~까지'는 by",
    },
    {
      id: "passive-12",
      ko: "그 가수는 전 세계에 알려져 있어.",
      answers: [
        "That singer is known all over the world.",
        "The singer is known all over the world.",
        "That singer is known around the world.",
        "The singer is known around the world.",
        "That singer is known worldwide.",
      ],
      hint: "알려져 있다 = be known",
    },
  ],
};

export default topic;
