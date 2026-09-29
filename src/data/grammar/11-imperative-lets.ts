import type { GrammarTopic } from "@/lib/types";

const topic: GrammarTopic = {
  id: "imperative-lets",
  order: 11,
  title: "명령문 & Let's",
  titleEn: "Imperatives & Let's",
  emoji: "📢",
  level: 2,
  summary: "주어 빼고 동사부터 뙇! Let's 붙이면 갑자기 친구됨ㅋ",
  concept: [
    {
      heading: "명령문 = 동사원형으로 시작!",
      body:
        "'~해'라고 시킬 때는 주어(you)를 빼고 **동사원형**으로 바로 시작해요.\nbe동사도 **Be**로 시작! (Be quiet. / Be careful.)\n끝이나 앞에 **please**를 붙이면 훨씬 부드러워져요.",
      examples: [
        { en: "Sit down.", ko: "앉아." },
        { en: "Be careful.", ko: "조심해." },
        { en: "Please wait here.", ko: "여기서 기다려 주세요." },
        { en: "Close the door, please.", ko: "문 좀 닫아 줘." },
      ],
      eunga: "Nod! 응아한테 제일 쉬운 명령문. 응응응응!",
    },
    {
      heading: "부정 명령문 = Don't + 동사원형",
      body:
        "'~하지 마'는 **Don't + 동사원형**.\nbe동사도 **Don't be ~** 예요. (Be not ❌)\n강하게 '절대 ~하지 마'는 **Never + 동사원형**.",
      examples: [
        { en: "Don't worry.", ko: "걱정하지 마." },
        { en: "Don't be late.", ko: "늦지 마." },
        { en: "Don't touch it.", ko: "그거 만지지 마." },
        { en: "Never give up.", ko: "절대 포기하지 마." },
      ],
      eunga: "Don't be sad. 응아가 옆에서 끄덕여 줄게.",
    },
    {
      heading: "Let's = 우리 ~하자",
      body:
        "**Let's + 동사원형** = '(우리) ~하자' 제안하기.\n부정은 **Let's not + 동사원형** = '~하지 말자'.\nLet's는 Let us의 줄임말이지만 제안할 땐 거의 항상 Let's로 써요.",
      examples: [
        { en: "Let's go!", ko: "가자!" },
        { en: "Let's eat out tonight.", ko: "오늘 밤에 외식하자." },
        { en: "Let's take a break.", ko: "좀 쉬자." },
        { en: "Let's not fight.", ko: "싸우지 말자." },
      ],
      eunga: "Let's nod together! 같이 끄덕이면 두 배로 행복 응응.",
    },
    {
      heading: "한국인이 자주 하는 실수",
      body:
        "❌ Don't be worry. → ✅ **Don't worry.** (worry는 동사라 be 필요 없음)\n❌ Be not late. → ✅ **Don't be late.**\n❌ Let's going. / Let's to go. → ✅ **Let's go.**\n❌ Let's don't ~ → ✅ **Let's not** ~\n❌ You sit down. (명령) → ✅ **Sit down.** (주어 빼기)",
      examples: [
        { en: "Don't be shy.", ko: "부끄러워하지 마." },
        { en: "Let's not go.", ko: "가지 말자." },
      ],
      eunga: "Don't be worry라고 하면 응아가 조용히 be를 먹어버림. 냠.",
    },
  ],
  exercises: [
    {
      id: "imperative-lets-01",
      ko: "앉아.",
      answers: ["Sit down.", "Have a seat.", "Take a seat."],
      hint: "동사원형으로 시작",
    },
    {
      id: "imperative-lets-02",
      ko: "걱정하지 마.",
      answers: ["Don't worry."],
      hint: "Don't + 동사원형",
    },
    {
      id: "imperative-lets-03",
      ko: "가자!",
      answers: ["Let's go!"],
      hint: "Let's + 동사원형",
    },
    {
      id: "imperative-lets-04",
      ko: "조심해.",
      answers: ["Be careful."],
      hint: "be동사 명령문은 Be로 시작",
    },
    {
      id: "imperative-lets-05",
      ko: "늦지 마.",
      answers: ["Don't be late."],
      hint: "Don't be + 형용사",
    },
    {
      id: "imperative-lets-06",
      ko: "여기서 기다려 주세요.",
      answers: ["Please wait here.", "Wait here, please."],
      hint: "please + 동사원형",
    },
    {
      id: "imperative-lets-07",
      ko: "좀 쉬자.",
      answers: ["Let's take a break.", "Let's take a rest.", "Let's rest.", "Let's get some rest."],
      hint: "take a break",
    },
    {
      id: "imperative-lets-08",
      ko: "그거 만지지 마.",
      answers: ["Don't touch it.", "Don't touch that."],
      hint: "touch = 만지다",
    },
    {
      id: "imperative-lets-09",
      ko: "싸우지 말자.",
      answers: ["Let's not fight."],
      hint: "Let's not + 동사원형",
    },
    {
      id: "imperative-lets-10",
      ko: "절대 포기하지 마.",
      answers: ["Never give up.", "Don't ever give up."],
      hint: "Never + 동사원형",
    },
    {
      id: "imperative-lets-11",
      ko: "오늘 밤에 외식하자.",
      answers: ["Let's eat out tonight.", "Tonight, let's eat out.", "Let's go out to eat tonight.", "Let's go out for dinner tonight."],
      hint: "eat out = 외식하다",
    },
    {
      id: "imperative-lets-12",
      ko: "제발 나한테 소리 지르지 마.",
      answers: ["Please don't yell at me.", "Don't yell at me, please.", "Please don't shout at me.", "Don't shout at me, please."],
      hint: "Please don't + yell at (~에게 소리 지르다)",
    },
  ],
};

export default topic;
