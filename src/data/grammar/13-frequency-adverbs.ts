import type { GrammarTopic } from "@/lib/types";

const topic: GrammarTopic = {
  id: "frequency-adverbs",
  order: 13,
  title: "빈도부사 always ~ never",
  titleEn: "Adverbs of Frequency",
  emoji: "🔁",
  level: 2,
  summary: "always 100%부터 never 0%까지! 자리만 잘 잡으면 끝ㅋ",
  concept: [
    {
      heading: "얼마나 자주? 빈도 온도계 🌡️",
      body:
        "**always** (항상, 100%)\n**usually** (보통, 약 90%)\n**often** (자주, 약 70%)\n**sometimes** (가끔, 약 50%)\n**rarely / seldom** (거의 안, 약 10%)\n**never** (절대 안, 0%)",
      examples: [
        { en: "I always drink coffee.", ko: "나는 항상 커피를 마셔." },
        { en: "I sometimes cook.", ko: "나는 가끔 요리해." },
        { en: "I never eat breakfast.", ko: "나는 아침을 절대 안 먹어." },
      ],
      eunga: "응아는 always 끄덕여요. 자면서도 끄덕임. 100% 확정.",
    },
    {
      heading: "자리 규칙: 일반동사 앞, be동사·조동사 뒤",
      body:
        "① **일반동사 앞**: I **usually** walk to school.\n② **be동사 뒤**: She **is always** late.\n③ **조동사(can, will...) 뒤**: I **can never** remember his name.\n질문은 **Do you often ~?** / **Are you always ~?** 처럼 주어 뒤에!",
      examples: [
        { en: "He often plays games.", ko: "그는 자주 게임을 해." },
        { en: "She is always late.", ko: "그녀는 항상 늦어." },
        { en: "I'm never bored.", ko: "나는 절대 심심하지 않아." },
        { en: "Do you often eat out?", ko: "너 자주 외식해?" },
      ],
      eunga: "be동사는 형님이라 빈도부사가 뒤에 서요. 일반동사는 앞에서 호위받음 응응.",
    },
    {
      heading: "never는 그 자체로 부정!",
      body:
        "**never** 안에 이미 'not'이 들어있어서 **don't랑 같이 쓰면 안 돼요**.\n❌ I don't never eat meat. → ✅ I **never** eat meat.\n그리고 never 뒤 동사도 3인칭이면 -s 그대로: He **never drinks**.\n**sometimes**는 문장 맨 앞에 와도 자연스러워요: Sometimes I cry.",
      examples: [
        { en: "He never drinks.", ko: "그는 술을 전혀 안 마셔." },
        { en: "Sometimes I feel lonely.", ko: "가끔 나는 외로워." },
      ],
      eunga: "don't never = 부정 두 번 = 응아 머리 두 번 박음. 쿵쿵.",
    },
    {
      heading: "한국인이 자주 하는 실수",
      body:
        "❌ I go always to the gym. → ✅ I **always go** to the gym.\n❌ She always is busy. → ✅ She **is always** busy.\n❌ He usually go ~ → ✅ He usually **goes** ~ (빈도부사 있어도 -s 챙기기!)\n❌ I don't never ~ → ✅ I never ~",
      examples: [
        { en: "My mom is usually busy.", ko: "우리 엄마는 보통 바빠." },
        { en: "He usually goes to bed early.", ko: "그는 보통 일찍 자." },
      ],
      eunga: "빈도부사가 끼어들어도 3인칭 -s는 절대 도망 안 가요. 응!",
    },
  ],
  exercises: [
    {
      id: "frequency-adverbs-01",
      ko: "나는 항상 커피를 마셔.",
      answers: ["I always drink coffee."],
      hint: "일반동사 앞에 always",
    },
    {
      id: "frequency-adverbs-02",
      ko: "나는 가끔 요리해.",
      answers: ["I sometimes cook.", "Sometimes I cook.", "I cook sometimes."],
      hint: "sometimes",
    },
    {
      id: "frequency-adverbs-03",
      ko: "그녀는 항상 늦어.",
      answers: ["She is always late."],
      hint: "be동사 뒤에 always",
    },
    {
      id: "frequency-adverbs-04",
      ko: "나는 아침을 절대 안 먹어.",
      answers: ["I never eat breakfast.", "I never have breakfast."],
      hint: "never = 이미 부정",
    },
    {
      id: "frequency-adverbs-05",
      ko: "그는 자주 게임을 해.",
      answers: ["He often plays games.", "He often plays video games."],
      hint: "often + plays (-s 챙기기)",
    },
    {
      id: "frequency-adverbs-06",
      ko: "나는 보통 걸어서 학교에 가.",
      answers: ["I usually walk to school.", "I usually go to school on foot."],
      hint: "usually + walk to school",
    },
    {
      id: "frequency-adverbs-07",
      ko: "너 자주 외식해?",
      answers: ["Do you often eat out?"],
      hint: "Do you often ~?",
    },
    {
      id: "frequency-adverbs-08",
      ko: "우리 엄마는 보통 바빠.",
      answers: ["My mom is usually busy.", "My mother is usually busy."],
      hint: "is usually",
    },
    {
      id: "frequency-adverbs-09",
      ko: "그는 술을 전혀 안 마셔.",
      answers: ["He never drinks.", "He never drinks alcohol."],
      hint: "never + drinks",
    },
    {
      id: "frequency-adverbs-10",
      ko: "나는 절대 심심하지 않아.",
      answers: ["I'm never bored."],
      hint: "be동사 뒤에 never",
    },
    {
      id: "frequency-adverbs-11",
      ko: "그는 보통 11시에 자.",
      answers: ["He usually goes to bed at 11.", "He usually goes to sleep at 11.", "He usually sleeps at 11.", "He usually goes to bed at eleven."],
      hint: "usually + goes to bed",
    },
    {
      id: "frequency-adverbs-12",
      ko: "나는 그의 이름이 절대 기억이 안 나. (can 사용)",
      answers: ["I can never remember his name."],
      hint: "조동사 뒤에 never",
    },
  ],
};

export default topic;
