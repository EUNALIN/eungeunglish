import type { GrammarTopic } from "@/lib/types";

const topic: GrammarTopic = {
  id: "present-progressive",
  order: 5,
  title: "현재진행형",
  titleEn: "Present progressive",
  emoji: "🏃",
  level: 1,
  summary: "지금 뭐 해? → 숨 쉬는 중ing… 영어로 실시간 중계하는 법ㅋ",
  concept: [
    {
      heading: "be동사 + 동사-ing = ~하는 중",
      body:
        "**지금 이 순간 하고 있는 일**은 **am/are/is + 동사ing**!\nI eat. (평소에 먹음) vs **I'm eating.** (지금 먹는 중)\nbe동사는 주어에 맞춰서: I'm / You're / She's …",
      examples: [
        { en: "I'm eating.", ko: "나 밥 먹는 중이야." },
        { en: "She's sleeping.", ko: "그녀는 자고 있어." },
        { en: "They're watching a movie.", ko: "걔네 영화 보는 중이야." },
      ],
      eunga: "응응! 나는 지금 끄덕이는 중(nodding)이야. I'm nodding!",
    },
    {
      heading: "-ing 붙이는 규칙",
      body:
        "대부분: **+ing** (eat → eating, study → studying)\n-e로 끝나면: **e 빼고 +ing** (make → making, come → coming)\n단모음+단자음 1음절: **자음 한 번 더** (run → running, sit → sitting, swim → swimming)\n-ie로 끝나면: **ie → ying** (lie → lying, die → dying)",
      examples: [
        { en: "He's running.", ko: "그는 뛰고 있어." },
        { en: "I'm making dinner.", ko: "나 저녁 만드는 중이야." },
        { en: "She's lying on the sofa.", ko: "그녀는 소파에 누워 있어." },
      ],
    },
    {
      heading: "부정문·의문문은 be동사 규칙 그대로",
      body:
        "부정: be동사 뒤에 **not** → I'm **not** working.\n의문: be동사를 **앞으로** → **Are you** listening?\n의문사도 OK → **What are you doing?**",
      examples: [
        { en: "I'm not working today.", ko: "나 오늘 일 안 해." },
        { en: "Are you listening?", ko: "너 듣고 있어?" },
        { en: "What are you doing?", ko: "너 뭐 해?" },
      ],
      eunga: "What are you doing? 은 영어권 '뭐해?' 국민 인사임. 응응!",
    },
    {
      heading: "진행형으로 잘 안 쓰는 동사",
      body:
        "상태·감정·소유를 나타내는 동사는 보통 진행형으로 안 써!\n**know, like, love, want, need, have(소유), believe** 등\n❌ I'm knowing him. ✅ I know him.\n❌ I'm wanting pizza. ✅ I want pizza.\n(단, have가 '먹다/보내다' 뜻이면 OK: I'm having lunch.)",
      examples: [
        { en: "I know him.", ko: "나 걔 알아." },
        { en: "I'm having lunch.", ko: "나 점심 먹는 중이야." },
      ],
    },
    {
      heading: "한국인이 자주 하는 실수",
      body:
        "❌ **I eating.** → be동사 빠짐! ✅ I'm eating.\n❌ **She is cook now.** → -ing 빠짐! ✅ She's cooking now.\n❌ **He's runing.** → n 하나 더! ✅ He's running.\n❌ **I'm makeing.** → e 빼기! ✅ I'm making.",
      examples: [
        { en: "She's cooking now.", ko: "그녀는 지금 요리하고 있어." },
        { en: "It's raining.", ko: "비 오고 있어." },
      ],
      eunga: "be동사랑 -ing는 세트 메뉴야. 하나만 시키면 안 팔아 ㅋ",
    },
  ],
  exercises: [
    {
      id: "present-progressive-01",
      ko: "나 (지금) 밥 먹는 중이야.",
      answers: ["I'm eating.", "I'm eating now.", "I'm having a meal."],
      hint: "am + eat-ing.",
    },
    {
      id: "present-progressive-02",
      ko: "(그녀가) 지금 요리하고 있어.",
      answers: ["She's cooking now.", "She's cooking right now."],
      hint: "She's + cooking.",
    },
    {
      id: "present-progressive-03",
      ko: "비 오고 있어.",
      answers: ["It's raining."],
      hint: "날씨는 It! rain → raining.",
    },
    {
      id: "present-progressive-04",
      ko: "너 뭐 해? (지금)",
      answers: ["What are you doing?", "What are you doing now?", "What are you doing right now?"],
      hint: "What + are you + doing?",
    },
    {
      id: "present-progressive-05",
      ko: "애들이 공원에서 뛰고 있어.",
      answers: ["The kids are running in the park.", "The children are running in the park.", "Kids are running in the park."],
      hint: "run → running (n 하나 더!).",
    },
    {
      id: "present-progressive-06",
      ko: "나 너 기다리고 있어.",
      answers: ["I'm waiting for you."],
      hint: "~를 기다리다 = wait for.",
    },
    {
      id: "present-progressive-07",
      ko: "그는 지금 샤워하는 중이야.",
      answers: ["He's taking a shower now.", "He's showering now.", "He's in the shower now.", "He's taking a shower right now.", "He's showering right now."],
      hint: "샤워하다 = take a shower.",
    },
    {
      id: "present-progressive-08",
      ko: "너 내 말 듣고 있어?",
      answers: ["Are you listening to me?", "Are you listening?"],
      hint: "Are you + listening to ~?",
    },
    {
      id: "present-progressive-09",
      ko: "나 지금 운전 중이야.",
      answers: ["I'm driving now.", "I'm driving right now.", "I'm driving."],
      hint: "drive → driving (e 빼고 ing).",
    },
    {
      id: "present-progressive-10",
      ko: "우리 지금 일 안 하고 있어.",
      answers: ["We're not working now.", "We aren't working now.", "We're not working right now.", "We aren't working right now."],
      hint: "be동사 뒤에 not + working.",
    },
    {
      id: "present-progressive-11",
      ko: "그녀는 소파에 누워 있어.",
      answers: ["She's lying on the sofa.", "She's lying on the couch."],
      hint: "lie → lying (ie → y).",
    },
    {
      id: "present-progressive-12",
      ko: "걔네(그들) 지금 무슨 얘기 하고 있어?",
      answers: ["What are they talking about?", "What are they talking about now?", "What are they talking about right now?"],
      hint: "What + are they + talking about?",
    },
  ],
};

export default topic;
