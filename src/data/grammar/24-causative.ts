import type { GrammarTopic } from "@/lib/types";

const topic: GrammarTopic = {
  id: "causative",
  order: 24,
  title: "사역동사·지각동사",
  titleEn: "Causative & Perception Verbs",
  emoji: "🎬",
  level: 3,
  summary: "남을 시키고(make), 허락하고(let), 부탁하고(have), 구경하는(see) 동사들. to는 촬영장 출입 금지 🚫",
  concept: [
    {
      heading: "사역동사 = 누군가에게 ~하게 하다",
      body: "**make / let / have + 목적어 + 동사원형**\n뒤에 **to 없이 동사원형**이 오는 게 핵심!\n\n• **make** = (억지로) ~하게 만들다 / 시키다\n• **let** = ~하게 해 주다, 허락하다\n• **have** = (부탁·일로) ~하게 하다, 시키다\n\n강도: make(강제) > have(당연한 부탁) > let(허락)",
      examples: [
        { en: "My mom made me clean my room.", ko: "엄마가 나한테 방 청소를 시켰어." },
        { en: "Let me help you.", ko: "내가 도와줄게. (도와주게 해 줘)" },
        { en: "I had him fix my bike.", ko: "나 그 사람한테 자전거 고치게 했어." },
      ],
      eunga: "응응! 사역동사 뒤에서 to는 대기실에 있어. 출연 금지야 🎭",
    },
    {
      heading: "① make: 억지로 / 감정을 만들다",
      body: "**make + 사람 + 동사원형** = ~가 ~하게 만들다\n억지로 시킬 때도, **감정·반응을 일으킬 때**도 써요.\n\n• That movie **made me cry**. (그 영화 때문에 울었어)\n• You **make me laugh**. (너 때문에 웃겨)\n\n참고: make + 사람 + **형용사**도 가능 → It made me happy.",
      examples: [
        { en: "That movie made me cry.", ko: "그 영화 보고 울었어. (영화가 나를 울게 했어)" },
        { en: "You always make me laugh.", ko: "너는 항상 나를 웃게 해." },
        { en: "The teacher made us wait.", ko: "선생님이 우리를 기다리게 했어." },
      ],
      eunga: "응응! 양파는 나를 cry 하게 make 해. 양파 나빠 🧅😭",
    },
    {
      heading: "② let / have (+ help, get)",
      body: "**let + 사람 + 동사원형** = ~하게 해 주다 (허락)\n• **Let me know.** = 알려 줘 (국민 표현!)\n• My parents let me go. = 부모님이 가게 해 주셨어\n\n**have + 사람 + 동사원형** = (당연히 해야 할 일을) 시키다\n• I'll have him call you. = 그 사람한테 전화하라고 할게요\n\n보너스 🎁\n• **help** + 사람 + 동사원형/to부정사 (둘 다 OK)\n• **get** + 사람 + **to부정사** (get만 to가 필요!)",
      examples: [
        { en: "Let me know when you arrive.", ko: "도착하면 알려 줘." },
        { en: "My dad let me use his car.", ko: "아빠가 차 쓰게 해 주셨어." },
        { en: "I'll have her call you back.", ko: "그녀한테 다시 전화하라고 할게요." },
        { en: "Can you help me carry this?", ko: "이거 옮기는 거 도와줄래?" },
      ],
      eunga: "응응! Let me sleep. 이건 명령이 아니라 간절한 부탁이야 😴",
    },
    {
      heading: "③ 지각동사: see / hear / watch / feel",
      body: "**see / watch / hear / feel + 목적어 + 동사원형 또는 -ing**\n= ~가 ~하는 걸 보다/듣다/느끼다\n\n• **동사원형**: 처음부터 끝까지 전부 봄/들음\n  I saw him **cross** the street. (건너는 걸 다 봄)\n• **-ing**: 진행 중인 한 장면을 봄/들음\n  I saw him **crossing** the street. (건너는 중이었음)\n\n일상 회화에선 둘 다 자연스럽게 섞여 써요.",
      examples: [
        { en: "I heard someone call my name.", ko: "누가 내 이름 부르는 거 들었어." },
        { en: "I saw her dancing in the rain.", ko: "나 그녀가 빗속에서 춤추고 있는 거 봤어." },
        { en: "I felt the ground shake.", ko: "땅이 흔들리는 걸 느꼈어." },
      ],
      eunga: "응응! 나는 네가 영작하는 거 watch 하고 있어. 지켜보고 있다 👀",
    },
    {
      heading: "한국인이 자주 하는 실수 🚨",
      body: "1. **to 붙이기** ❌\n   ❌ She made me to clean. → ⭕ She made me clean.\n   ❌ Let me to go. → ⭕ Let me go.\n\n2. **목적어 뒤에 과거형** ❌\n   ❌ I saw him left. → ⭕ I saw him leave.\n   (시제는 앞 동사 saw가 이미 담당!)\n\n3. **-s 붙이기** ❌\n   ❌ Mom makes me cleans. → ⭕ Mom makes me clean.\n\n4. **get은 예외** → get + 사람 + **to** 동사원형\n   I got him to help me.",
      examples: [
        { en: "She made me clean the kitchen.", ko: "그녀가 나한테 부엌 청소를 시켰어." },
        { en: "I saw him leave.", ko: "나 그가 떠나는 거 봤어." },
        { en: "I got my brother to help me.", ko: "나 동생한테 도와 달라고 했어." },
      ],
      eunga: "응응! make 뒤에 to 쓰면 to가 해고당해. 오늘도 to는 실직 중 📦",
    },
  ],
  exercises: [
    {
      id: "causative-01",
      ko: "제가 도와드릴게요.",
      answers: ["Let me help you.", "Let me help."],
      hint: "Let me + 동사원형",
    },
    {
      id: "causative-02",
      ko: "도착하면 알려 줘.",
      answers: ["Let me know when you arrive.", "Let me know when you get there.", "Let me know when you get here."],
      hint: "Let me know + when ~",
    },
    {
      id: "causative-03",
      ko: "그 영화 때문에 울었어. (영화가 나를 울게 했어)",
      answers: ["That movie made me cry.", "The movie made me cry."],
      hint: "make + 나 + cry",
    },
    {
      id: "causative-04",
      ko: "너는 항상 나를 웃게 해.",
      answers: ["You always make me laugh.", "You always make me smile."],
      hint: "make + me + 동사원형",
    },
    {
      id: "causative-05",
      ko: "엄마가 나한테 방 청소를 시켰어.",
      answers: [
        "My mom made me clean my room.",
        "My mom had me clean my room.",
        "Mom made me clean my room.",
        "My mom made me clean the room.",
      ],
      hint: "made + me + clean (to 없음!)",
    },
    {
      id: "causative-06",
      ko: "누가 내 이름 부르는 거 들었어.",
      answers: [
        "I heard someone call my name.",
        "I heard someone calling my name.",
        "I heard somebody call my name.",
        "I heard somebody calling my name.",
      ],
      hint: "hear + 사람 + 동사원형/-ing",
    },
    {
      id: "causative-07",
      ko: "부모님이 나 파티에 가게 해 주셨어.",
      answers: ["My parents let me go to the party."],
      hint: "let의 과거형도 let",
    },
    {
      id: "causative-08",
      ko: "나 그녀가 노래하는 거 봤어.",
      answers: ["I saw her sing.", "I saw her singing."],
      hint: "see + 사람 + 동사원형/-ing",
    },
    {
      id: "causative-09",
      ko: "선생님이 우리를 30분 동안 기다리게 했어.",
      answers: [
        "The teacher made us wait for 30 minutes.",
        "The teacher made us wait for thirty minutes.",
        "The teacher made us wait 30 minutes.",
        "The teacher made us wait thirty minutes.",
      ],
      hint: "make + us + wait",
    },
    {
      id: "causative-10",
      ko: "제가 그 사람한테 다시 전화하라고 할게요. (비서가 손님에게)",
      answers: ["I will have him call you back.", "I will have her call you back."],
      hint: "have + 사람 + call back",
    },
    {
      id: "causative-11",
      ko: "나 누군가 문 두드리는 소리 들었어.",
      answers: [
        "I heard someone knocking on the door.",
        "I heard someone knock on the door.",
        "I heard somebody knocking on the door.",
        "I heard somebody knock on the door.",
      ],
      hint: "hear + someone + knock/knocking on the door",
    },
    {
      id: "causative-12",
      ko: "아빠가 차를 쓰게 해 주셨는데, 나한테 세차를 시키셨어.",
      answers: [
        "My dad let me use his car, but he made me wash it.",
        "My dad let me use his car, but he made me wash it first.",
        "My dad let me use the car, but he made me wash it.",
        "Dad let me use his car, but he made me wash it.",
      ],
      hint: "let me use ~, made me wash ~",
    },
  ],
};

export default topic;
