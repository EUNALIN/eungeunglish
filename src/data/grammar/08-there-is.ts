import type { GrammarTopic } from "@/lib/types";

const topic: GrammarTopic = {
  id: "there-is",
  order: 8,
  title: "There is / There are",
  titleEn: "There is / There are",
  emoji: "📍",
  level: 1,
  summary: "거기(there) 아님 주의! '~가 있다' 치트키ㅋ",
  concept: [
    {
      heading: "There is / are = ~가 있다",
      body:
        "'**(어디에) ~가 있어**'라고 존재를 알릴 때 쓰는 표현이야.\n여기서 there는 '거기'라는 뜻이 **아니야!** 그냥 문장을 여는 말.\n**There is + 단수명사** / **There are + 복수명사**\n줄여서 **There's**라고 많이 말해.",
      examples: [
        { en: "There's a cat on the roof.", ko: "지붕 위에 고양이가 있어." },
        { en: "There are two banks near here.", ko: "이 근처에 은행이 두 개 있어." },
        { en: "There's a problem.", ko: "문제가 있어." },
      ],
      eunga: "응응! there가 '거기'가 아니라니… 응아도 처음엔 배신감 느낌.",
    },
    {
      heading: "is냐 are냐는 뒤에 오는 명사가 결정",
      body:
        "동사 뒤에 오는 명사가 **진짜 주인공**이야.\n단수 / 셀 수 없는 명사 → **is** (There is **some water**.)\n복수 → **are** (There are **many people**.)",
      examples: [
        { en: "There's some milk in the fridge.", ko: "냉장고에 우유 좀 있어." },
        { en: "There are a lot of people here.", ko: "여기 사람 진짜 많다." },
        { en: "There's no time.", ko: "시간이 없어." },
      ],
    },
    {
      heading: "부정문·의문문·과거",
      body:
        "부정: **There isn't / There aren't** (또는 There's **no** ~)\n의문: **Is there** ~? / **Are there** ~?\n과거: **There was / There were**\n'몇 개 있어?' → **How many** ~ **are there**?",
      examples: [
        { en: "Is there a bathroom here?", ko: "여기 화장실 있어요?" },
        { en: "There aren't any chairs.", ko: "의자가 하나도 없어." },
        { en: "There was an accident.", ko: "사고가 있었어." },
      ],
      eunga: "Is there~? 이거 하나면 해외여행 생존 가능. 화장실 찾기 필수템!",
    },
    {
      heading: "have랑 헷갈리지 말기",
      body:
        "한국어 '있다'는 두 가지야!\n**소유** (내가 가지고 있음) → **have**: I have a dog.\n**존재** (어디에 있음) → **there is**: There's a dog in the yard.\n'우리 집에 개 있어'는 둘 다 가능: I have a dog. / There's a dog in my house.",
      examples: [
        { en: "I have a question.", ko: "나 질문 있어. (소유)" },
        { en: "There's a question on the board.", ko: "칠판에 문제가 있어. (존재)" },
      ],
    },
    {
      heading: "한국인이 자주 하는 실수",
      body:
        "❌ **There is many people.** → 복수니까 are! ✅ There are many people.\n❌ **In my room has a bed.** → 한국어 직역 금지! ✅ There's a bed in my room.\n❌ **There have a problem.** ✅ There's a problem.\n❌ **Is there any chairs?** ✅ Are there any chairs?",
      examples: [
        { en: "There's a bed in my room.", ko: "내 방에 침대가 있어." },
        { en: "Are there any questions?", ko: "질문 있나요?" },
      ],
      eunga: "'~에 ~가 있다'가 보이면 There부터 던지고 시작! 응응!",
    },
  ],
  exercises: [
    {
      id: "there-is-01",
      ko: "문제가 있어.",
      answers: ["There's a problem.", "We have a problem."],
      hint: "단수 → There is + a problem.",
    },
    {
      id: "there-is-02",
      ko: "내 방에 침대가 있어.",
      answers: ["There's a bed in my room."],
      hint: "There is + a bed + in my room.",
    },
    {
      id: "there-is-03",
      ko: "이 근처에 은행이 두 개 있어.",
      answers: ["There are two banks near here.", "There are two banks nearby.", "There are two banks around here."],
      hint: "복수 → There are.",
    },
    {
      id: "there-is-04",
      ko: "냉장고에 우유 좀 있어.",
      answers: ["There's some milk in the fridge.", "There's milk in the fridge.", "There's some milk in the refrigerator.", "There's milk in the refrigerator."],
      hint: "milk는 셀 수 없는 명사 → is.",
    },
    {
      id: "there-is-05",
      ko: "여기 사람 진짜 많다.",
      answers: ["There are so many people here.", "There are a lot of people here.", "There are lots of people here.", "There are many people here.", "There are too many people here."],
      hint: "people은 복수 → are.",
    },
    {
      id: "there-is-06",
      ko: "시간이 없어.",
      answers: ["There's no time.", "We don't have time.", "I don't have time.", "There isn't any time.", "There isn't time."],
      hint: "There's no + 명사 = ~가 없다.",
    },
    {
      id: "there-is-07",
      ko: "여기 근처에 화장실 있어요?",
      answers: ["Is there a bathroom near here?", "Is there a restroom near here?", "Is there a toilet near here?", "Is there a bathroom nearby?", "Is there a restroom nearby?", "Is there a toilet nearby?", "Is there a bathroom around here?", "Is there a restroom around here?"],
      hint: "Is there + a ~?",
    },
    {
      id: "there-is-08",
      ko: "질문 있나요? (여러분)",
      answers: ["Are there any questions?", "Do you have any questions?", "Any questions?"],
      hint: "복수 질문 → Are there any ~?",
    },
    {
      id: "there-is-09",
      ko: "의자가 하나도 없어.",
      answers: ["There aren't any chairs.", "There are no chairs."],
      hint: "There aren't any + 복수명사.",
    },
    {
      id: "there-is-10",
      ko: "어젯밤에 사고가 있었어.",
      answers: ["There was an accident last night."],
      hint: "과거 단수 → There was.",
    },
    {
      id: "there-is-11",
      ko: "너희 반에 학생 몇 명 있어?",
      answers: ["How many students are there in your class?", "How many students are in your class?"],
      hint: "How many + 복수명사 + are there ~?",
    },
    {
      id: "there-is-12",
      ko: "파티에 사람이 많지 않았어.",
      answers: ["There weren't many people at the party.", "There weren't a lot of people at the party."],
      hint: "과거 복수 부정 → There weren't.",
    },
  ],
};

export default topic;
