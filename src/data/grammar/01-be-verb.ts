import type { GrammarTopic } from "@/lib/types";

const topic: GrammarTopic = {
  id: "be-verb",
  order: 1,
  title: "be동사",
  titleEn: "Be verbs",
  emoji: "🙋",
  level: 1,
  summary: "am, are, is… 얘네만 알아도 자기소개 끝남ㅋ",
  concept: [
    {
      heading: "be동사는 '~이다 / ~에 있다 / ~한 상태다'",
      body:
        "be동사는 주어와 뒤의 말을 **=(이퀄)** 로 이어주는 동사야.\n뜻은 크게 세 가지!\n1) **~이다** (I am a student.)\n2) **~하다(상태)** (I am tired.)\n3) **~에 있다** (I am at home.)\n한국어로 '배고파'처럼 동사 없이 말하는 것도, 영어에선 **I am hungry.** 처럼 be동사가 꼭 필요해.",
      examples: [
        { en: "I'm a student.", ko: "나는 학생이야." },
        { en: "She's tired.", ko: "그녀는 피곤해." },
        { en: "We're at home.", ko: "우리 집에 있어." },
      ],
      eunga: "응응! 형용사 앞엔 be동사가 경호원처럼 붙어 다녀!",
    },
    {
      heading: "주어에 따라 옷을 갈아입는 be동사",
      body:
        "**I → am**\n**You / We / They / 복수 → are**\n**He / She / It / 단수 → is**\n말할 때는 거의 줄여서 써: I'm, you're, he's, she's, it's, we're, they're.",
      examples: [
        { en: "You're so funny.", ko: "너 진짜 웃기다." },
        { en: "They're my friends.", ko: "걔네는 내 친구들이야." },
        { en: "My mom is a nurse.", ko: "우리 엄마는 간호사야." },
        { en: "It's cold today.", ko: "오늘 춥다." },
      ],
      eunga: "I는 am이랑만 사귐. 바람 절대 안 피움. 응응!",
    },
    {
      heading: "부정문: be동사 뒤에 not",
      body:
        "'~아니야 / ~안 해'는 be동사 **뒤에 not**만 붙이면 끝!\nis not → **isn't**, are not → **aren't**\n(am not은 amn't가 없어서 **I'm not**으로 말해.)",
      examples: [
        { en: "I'm not hungry.", ko: "나 배 안 고파." },
        { en: "He isn't here.", ko: "그는 여기 없어." },
        { en: "We aren't ready.", ko: "우리 준비 안 됐어." },
      ],
      eunga: "amn't는 없는 단어야… 쓰면 원어민이 고개 갸웃함 ㅋ",
    },
    {
      heading: "의문문: be동사를 맨 앞으로",
      body:
        "질문할 땐 주어랑 be동사 자리만 바꿔!\nYou are busy. → **Are you** busy?\nShe is okay. → **Is she** okay?\n대답은 Yes, I am. / No, I'm not. 처럼 짧게.",
      examples: [
        { en: "Are you okay?", ko: "너 괜찮아?" },
        { en: "Is it expensive?", ko: "그거 비싸?" },
        { en: "Are they students?", ko: "걔네 학생이야?" },
      ],
      eunga: "be동사가 맨 앞으로 튀어나오면 질문이다! 응?응?",
    },
    {
      heading: "한국인이 자주 하는 실수",
      body:
        "❌ **I hungry.** → be동사 빠뜨림! ✅ I'm hungry.\n❌ **I am go to school.** → be동사랑 일반동사를 같이 쓰면 안 돼. ✅ I go to school.\n❌ **He are tall.** → He는 is! ✅ He is tall.\n❌ **I'm agree.** → agree는 동사라 be동사 필요 없음. ✅ I agree.",
      examples: [
        { en: "I'm hungry.", ko: "나 배고파." },
        { en: "I agree.", ko: "동의해." },
        { en: "He is tall.", ko: "그는 키가 커." },
      ],
      eunga: "be동사랑 일반동사는 한 문장에 동시 출연 금지! (진행형·수동태 특별출연 빼고) 응응!",
    },
  ],
  exercises: [
    {
      id: "be-verb-01",
      ko: "나 배고파.",
      answers: ["I'm hungry."],
      hint: "형용사 앞에 be동사 필수! I 다음엔 am.",
    },
    {
      id: "be-verb-02",
      ko: "그녀는 선생님이야.",
      answers: ["She's a teacher."],
      hint: "She는 is. 직업 앞엔 a!",
    },
    {
      id: "be-verb-03",
      ko: "우리는 친구야.",
      answers: ["We're friends."],
      hint: "We는 are. friends는 복수니까 a 없음.",
    },
    {
      id: "be-verb-04",
      ko: "오늘 너무 더워.",
      answers: ["It's so hot today.", "It's very hot today.", "It's really hot today.", "It's too hot today.", "Today is so hot.", "Today is very hot."],
      hint: "날씨는 주어 It으로!",
    },
    {
      id: "be-verb-05",
      ko: "나 피곤하지 않아.",
      answers: ["I'm not tired."],
      hint: "be동사 뒤에 not.",
    },
    {
      id: "be-verb-06",
      ko: "너 괜찮아?",
      answers: ["Are you okay?", "Are you ok?", "Are you all right?", "Are you alright?"],
      hint: "의문문은 be동사를 맨 앞으로!",
    },
    {
      id: "be-verb-07",
      ko: "그는 지금 집에 있어.",
      answers: ["He's at home now.", "He's home now.", "He's at home right now.", "He's home right now."],
      hint: "'~에 있다'도 be동사! He는 is.",
    },
    {
      id: "be-verb-08",
      ko: "내 여동생은 키가 커.",
      answers: ["My sister is tall.", "My little sister is tall.", "My younger sister is tall."],
      hint: "My sister는 3인칭 단수 → is.",
    },
    {
      id: "be-verb-09",
      ko: "그 영화는 재미없어.",
      answers: ["The movie isn't fun.", "The movie isn't interesting.", "The movie isn't good.", "The film isn't fun.", "The film isn't interesting.", "The movie is boring.", "The film is boring."],
      hint: "The movie는 단수 → is + not.",
    },
    {
      id: "be-verb-10",
      ko: "걔네(그들) 지금 바빠?",
      answers: ["Are they busy now?", "Are they busy right now?"],
      hint: "They는 are. 질문이니까 Are를 앞으로!",
    },
    {
      id: "be-verb-11",
      ko: "이 가방 네 거야?",
      answers: ["Is this bag yours?", "Is this your bag?"],
      hint: "'네 거' = yours. this bag은 단수 → Is.",
    },
    {
      id: "be-verb-12",
      ko: "우리 부모님은 지금 한국에 안 계셔.",
      answers: ["My parents aren't in Korea now.", "My parents aren't in Korea right now.", "My parents are not in Korea at the moment."],
      hint: "My parents는 복수 → are + not. '~에 있다' = be in.",
    },
  ],
};

export default topic;
