import type { GrammarTopic } from "@/lib/types";

const topic: GrammarTopic = {
  id: "can-could",
  order: 9,
  title: "조동사 can / could",
  titleEn: "Can & Could",
  emoji: "💪",
  level: 2,
  summary: "할 수 있다! can! 근데 부탁할 땐 could가 더 공손함ㅋ",
  concept: [
    {
      heading: "can = ~할 수 있다 (능력)",
      body:
        "**can + 동사원형** 으로 '~할 수 있다'를 말해요.\n주어가 he/she여도 **cans ❌**, 뒤 동사에 -s도 ❌! can은 모양이 절대 안 변해요.\n부정은 **can't (cannot)**, 질문은 **Can + 주어 + 동사원형?**",
      examples: [
        { en: "I can swim.", ko: "나는 수영할 수 있어." },
        { en: "She can speak Chinese.", ko: "그녀는 중국어를 할 수 있어." },
        { en: "I can't cook.", ko: "나 요리 못 해." },
        { en: "Can you drive?", ko: "너 운전할 줄 알아?" },
      ],
      eunga: "응응! 나는 끄덕이기를 can 해! 세계 최고 수준임.",
    },
    {
      heading: "could = can의 과거 (~할 수 있었다)",
      body:
        "과거에 할 수 있었던 능력은 **could + 동사원형**.\n부정은 **couldn't** = '~할 수 없었다'.\n주로 **when I was young** 같은 과거 표현이랑 같이 잘 나와요.",
      examples: [
        { en: "I could run fast when I was young.", ko: "어렸을 때 나는 빨리 달릴 수 있었어." },
        { en: "I couldn't sleep last night.", ko: "어젯밤에 잠을 못 잤어." },
        { en: "He couldn't find his phone.", ko: "그는 휴대폰을 못 찾았어." },
      ],
      eunga: "어제 응아는 잠을 couldn't sleep... 너무 끄덕여서 목이 아팠거든.",
    },
    {
      heading: "허락 & 부탁: Can I ~? / Could you ~?",
      body:
        "**Can I ~?** = '~해도 돼?' (허락 구하기)\n**Can you ~?** = '~해줄래?' (부탁)\n**Could I / Could you ~?** 는 같은 뜻인데 **더 공손**해요! 여기서 could는 과거 뜻이 아니에요.\n대답은 보통 Sure! / Of course! / Sorry, I can't.",
      examples: [
        { en: "Can I sit here?", ko: "여기 앉아도 돼?" },
        { en: "Can you help me?", ko: "나 좀 도와줄래?" },
        { en: "Could you open the window?", ko: "창문 좀 열어 주시겠어요?" },
        { en: "Could I use your pen?", ko: "펜 좀 써도 될까요?" },
      ],
      eunga: "편의점 알바한테는 can, 사장님한테는 could! 눈치 영어 응응!",
    },
    {
      heading: "한국인이 자주 하는 실수",
      body:
        "❌ He cans swim. → ✅ He **can swim**.\n❌ She can speaks English. → ✅ She **can speak** English. (뒤는 무조건 동사원형!)\n❌ I can to go. → ✅ I **can go**. (to 넣지 마세요)\n❌ Do you can help me? → ✅ **Can you** help me? (do랑 같이 안 씀)",
      examples: [
        { en: "My dad can fix cars.", ko: "우리 아빠는 차를 고칠 수 있어." },
        { en: "Can you hear me?", ko: "내 말 들려?" },
      ],
      eunga: "can 뒤에 to 붙이면 응아가 고개를 가로저어요. 응아 인생 최초의 '아니아니'.",
    },
  ],
  exercises: [
    {
      id: "can-could-01",
      ko: "나는 수영할 수 있어.",
      answers: ["I can swim."],
      hint: "can + 동사원형",
    },
    {
      id: "can-could-02",
      ko: "나는 요리 못 해.",
      answers: ["I can't cook."],
      hint: "can의 부정 = can't",
    },
    {
      id: "can-could-03",
      ko: "그녀는 영어를 할 수 있어.",
      answers: ["She can speak English."],
      hint: "can 뒤는 speaks ❌ speak ⭕",
    },
    {
      id: "can-could-04",
      ko: "너 운전할 줄 알아?",
      answers: ["Can you drive?"],
      hint: "Can + 주어 + 동사원형?",
    },
    {
      id: "can-could-05",
      ko: "여기 앉아도 돼?",
      answers: ["Can I sit here?", "Could I sit here?", "May I sit here?"],
      hint: "허락 구하기: Can I ~?",
    },
    {
      id: "can-could-06",
      ko: "나 좀 도와줄래?",
      answers: ["Can you help me?", "Could you help me?"],
      hint: "부탁: Can you ~?",
    },
    {
      id: "can-could-07",
      ko: "어젯밤에 잠을 못 잤어.",
      answers: ["I couldn't sleep last night."],
      hint: "과거의 '못 했다' = couldn't",
    },
    {
      id: "can-could-08",
      ko: "창문 좀 열어 주시겠어요? (공손하게)",
      answers: ["Could you open the window?", "Could you please open the window?", "Could you open the window, please?"],
      hint: "공손한 부탁은 Could you ~?",
    },
    {
      id: "can-could-09",
      ko: "내 말 들려?",
      answers: ["Can you hear me?"],
      hint: "hear = 들리다",
    },
    {
      id: "can-could-10",
      ko: "그는 휴대폰을 못 찾았어.",
      answers: ["He couldn't find his phone."],
      hint: "couldn't + find",
    },
    {
      id: "can-could-11",
      ko: "어렸을 때 나는 빨리 달릴 수 있었어.",
      answers: [
        "I could run fast when I was young.",
        "When I was young, I could run fast.",
        "I could run fast when I was a kid.",
        "When I was a kid, I could run fast.",
      ],
      hint: "could + run / when I was young",
    },
    {
      id: "can-could-12",
      ko: "펜 좀 빌려주실 수 있어요? (공손하게 부탁)",
      answers: [
        "Could you lend me your pen?",
        "Could you lend me a pen?",
        "Could I borrow your pen?",
        "Could I borrow a pen?",
      ],
      hint: "lend me (빌려주다) / borrow (빌리다)",
    },
  ],
};

export default topic;
