import type { GrammarTopic } from "@/lib/types";

const topic: GrammarTopic = {
  id: "should-must",
  order: 10,
  title: "should / must / have to",
  titleEn: "Should, Must & Have to",
  emoji: "☝️",
  level: 2,
  summary: "should는 잔소리, must는 명령, don't have to는 '안 해도 됨' 개꿀ㅋ",
  concept: [
    {
      heading: "should = ~하는 게 좋겠어 (충고)",
      body:
        "**should + 동사원형** 은 '~하는 게 좋아 / ~해야지'라는 **충고·조언**이에요. 강제는 아님!\n부정 **shouldn't** = '~하지 않는 게 좋아'.\n질문 **Should I ~?** = '내가 ~해야 할까?'",
      examples: [
        { en: "You should see a doctor.", ko: "너 병원 가 보는 게 좋겠어." },
        { en: "You shouldn't eat too much.", ko: "너무 많이 먹지 않는 게 좋아." },
        { en: "Should I call her?", ko: "내가 그녀한테 전화해야 할까?" },
      ],
      eunga: "응아의 충고: You should sleep. 지금 새벽 3시잖아 응응.",
    },
    {
      heading: "must / have to = 반드시 ~해야 해 (의무)",
      body:
        "**must + 동사원형**, **have to + 동사원형** 둘 다 '꼭 ~해야 한다'.\n주어가 he/she/it이면 **has to**! (must는 모양 안 변함)\n일상 회화에선 **have to**가 훨씬 자주 쓰여요. must는 규칙·강한 느낌.\n과거는 must 대신 **had to** (~해야 했다).",
      examples: [
        { en: "I have to go now.", ko: "나 이제 가야 돼." },
        { en: "She has to work tomorrow.", ko: "그녀는 내일 일해야 해." },
        { en: "You must wear a seatbelt.", ko: "안전벨트를 반드시 매야 합니다." },
        { en: "I had to wait for an hour.", ko: "나 한 시간이나 기다려야 했어." },
      ],
      eunga: "월요일 아침엔 I have to get up... 응아도 눈물 흘리며 끄덕끄덕.",
    },
    {
      heading: "⚠️ mustn't ≠ don't have to",
      body:
        "긍정은 비슷한데 부정은 **뜻이 완전 달라요!**\n**mustn't (must not)** = '~하면 안 돼' (금지 🚫)\n**don't have to** = '~안 해도 돼' (필요 없음 😌)\n질문은 **Do I have to ~?** = '나 ~해야 돼?'",
      examples: [
        { en: "You mustn't smoke here.", ko: "여기서 담배 피우면 안 돼." },
        { en: "You don't have to come.", ko: "너 안 와도 돼." },
        { en: "He doesn't have to pay.", ko: "그는 돈 안 내도 돼." },
        { en: "Do I have to go?", ko: "나 가야 돼?" },
      ],
      eunga: "don't have to 는 천사의 말, mustn't 는 경비아저씨의 말. 응응!",
    },
    {
      heading: "한국인이 자주 하는 실수",
      body:
        "❌ You should to go. → ✅ You **should go**. (should·must 뒤에 to ❌)\n❌ She have to go. → ✅ She **has to** go.\n❌ I must went. → ✅ I **had to** go. (must에는 과거형이 없음)\n❌ You don't must ~ → ✅ You **mustn't** ~ / You **don't have to** ~ (뜻 구분!)",
      examples: [
        { en: "You should try this.", ko: "너 이거 먹어 봐야 해. (추천)" },
        { en: "He has to study.", ko: "그는 공부해야 해." },
      ],
      eunga: "have to 는 to까지 한 세트, should는 혼자서도 잘해요. 응!",
    },
  ],
  exercises: [
    {
      id: "should-must-01",
      ko: "너 좀 쉬는 게 좋겠어.",
      answers: ["You should rest.", "You should take a rest.", "You should get some rest.", "You should take a break."],
      hint: "충고 = should + 동사원형",
    },
    {
      id: "should-must-02",
      ko: "나 이제 가야 돼.",
      answers: ["I have to go now.", "I have to go.", "I must go now.", "I've got to go now."],
      hint: "have to + go",
    },
    {
      id: "should-must-03",
      ko: "너 병원 가 보는 게 좋겠어.",
      answers: ["You should see a doctor.", "You should go to the doctor.", "You should go to the hospital."],
      hint: "see a doctor = 진료받다",
    },
    {
      id: "should-must-04",
      ko: "그녀는 내일 일해야 해.",
      answers: ["She has to work tomorrow."],
      hint: "she → has to",
    },
    {
      id: "should-must-05",
      ko: "너 안 와도 돼.",
      answers: ["You don't have to come."],
      hint: "~안 해도 돼 = don't have to",
    },
    {
      id: "should-must-06",
      ko: "여기서 담배 피우면 안 돼.",
      answers: ["You mustn't smoke here.", "You can't smoke here.", "You shouldn't smoke here."],
      hint: "금지 = mustn't",
    },
    {
      id: "should-must-07",
      ko: "내가 그녀한테 전화해야 할까?",
      answers: ["Should I call her?"],
      hint: "Should I ~?",
    },
    {
      id: "should-must-08",
      ko: "너무 많이 먹지 않는 게 좋아.",
      answers: ["You shouldn't eat too much."],
      hint: "shouldn't + 동사원형",
    },
    {
      id: "should-must-09",
      ko: "나 내일 일찍 일어나야 돼.",
      answers: ["I have to get up early tomorrow.", "I have to wake up early tomorrow.", "I need to get up early tomorrow.", "I need to wake up early tomorrow."],
      hint: "get up early",
    },
    {
      id: "should-must-10",
      ko: "그는 돈 안 내도 돼.",
      answers: ["He doesn't have to pay."],
      hint: "he → doesn't have to",
    },
    {
      id: "should-must-11",
      ko: "나 한 시간이나 기다려야 했어.",
      answers: ["I had to wait for an hour.", "I had to wait an hour.", "I had to wait for one hour."],
      hint: "과거 = had to",
    },
    {
      id: "should-must-12",
      ko: "나 내일 학교 가야 돼? (의무인지 물어보기)",
      answers: ["Do I have to go to school tomorrow?"],
      hint: "Do I have to ~?",
    },
  ],
};

export default topic;
