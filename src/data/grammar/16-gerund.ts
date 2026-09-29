import type { GrammarTopic } from "@/lib/types";

const topic: GrammarTopic = {
  id: "gerund",
  order: 16,
  title: "동명사 (-ing)",
  titleEn: "Gerunds",
  emoji: "🏃",
  level: 2,
  summary: "동사에 -ing 붙이면 명사로 변신! enjoy는 to를 싫어하는 까탈쟁이ㅋ",
  concept: [
    {
      heading: "동명사 = 동사 + ing = '~하는 것'",
      body:
        "동사에 **-ing**를 붙이면 '**~하는 것, ~하기**'라는 명사가 돼요.\n**주어**로 쓸 수 있어요: **Swimming** is fun. (수영하는 건 재밌어)\n동명사 주어는 **단수 취급** → 동사는 **is / -s**!",
      examples: [
        { en: "Swimming is fun.", ko: "수영하는 건 재밌어." },
        { en: "Reading books is good for you.", ko: "책 읽는 건 너한테 좋아." },
        { en: "Learning English is not easy.", ko: "영어 배우는 건 쉽지 않아." },
      ],
      eunga: "Nodding is my life. 끄덕이는 것이 곧 응아의 인생.",
    },
    {
      heading: "-ing만 좋아하는 동사들",
      body:
        "아래 동사 뒤에는 **to ❌, -ing ⭕**!\n**enjoy** (즐기다), **finish** (끝내다), **stop** (그만두다), **mind** (꺼리다), **keep** (계속하다), **give up** (포기하다), **avoid** (피하다)\n외우는 팁: '즐기고, 끝내고, 멈추고, 계속하고' → 다 **-ing**!",
      examples: [
        { en: "I enjoy cooking.", ko: "나는 요리하는 걸 즐겨." },
        { en: "Did you finish eating?", ko: "너 다 먹었어?" },
        { en: "Stop talking!", ko: "그만 말해!" },
        { en: "Do you mind opening the window?", ko: "창문 좀 열어도 괜찮을까요? (열어 주실래요?)" },
      ],
      eunga: "enjoy to ~ 하면 enjoy가 삐져요. -ing로 달래주세요 응응.",
    },
    {
      heading: "like / love / hate / start 는 둘 다 OK",
      body:
        "**like, love, hate, start, begin** 뒤에는 **to부정사, 동명사 둘 다** 거의 같은 뜻으로 써요.\nI like **swimming**. = I like **to swim**.\nIt started **raining**. = It started **to rain**.\n그리고 **전치사 뒤**에는 무조건 **-ing**: good **at cooking**, thank you **for helping**.",
      examples: [
        { en: "I love dancing.", ko: "나 춤추는 거 엄청 좋아해." },
        { en: "It started raining.", ko: "비가 오기 시작했어." },
        { en: "I'm good at drawing.", ko: "나 그림 잘 그려." },
      ],
      eunga: "like는 성격 좋은 친구. to도 -ing도 다 받아줌 응!",
    },
    {
      heading: "한국인이 자주 하는 실수",
      body:
        "❌ I enjoy to cook. → ✅ I enjoy **cooking**.\n❌ I finished to work. → ✅ I finished **working**.\n❌ Swim is fun. → ✅ **Swimming** is fun.\n❌ Watching movies are fun. → ✅ Watching movies **is** fun.\n⚠️ **stop to ~**는 뜻이 달라요! stop smoking(담배를 끊다) vs stop to smoke(담배 피우려고 멈추다)",
      examples: [
        { en: "He stopped smoking.", ko: "그는 담배를 끊었어." },
        { en: "Thank you for helping me.", ko: "도와줘서 고마워." },
      ],
      eunga: "stop to smoke 하면 담배 피우러 멈춘 거예요. 응아가 기침함. 콜록.",
    },
  ],
  exercises: [
    {
      id: "gerund-01",
      ko: "수영하는 건 재밌어.",
      answers: ["Swimming is fun."],
      hint: "주어 = Swimming",
    },
    {
      id: "gerund-02",
      ko: "나는 요리하는 걸 즐겨.",
      answers: ["I enjoy cooking."],
      hint: "enjoy + -ing",
    },
    {
      id: "gerund-03",
      ko: "그만 말해!",
      answers: ["Stop talking!"],
      hint: "stop + -ing",
    },
    {
      id: "gerund-04",
      ko: "나 춤추는 거 엄청 좋아해.",
      answers: ["I love dancing.", "I love to dance.", "I really like dancing.", "I really like to dance."],
      hint: "love + -ing",
    },
    {
      id: "gerund-05",
      ko: "너 다 먹었어?",
      answers: ["Did you finish eating?", "Have you finished eating?"],
      hint: "finish + eating",
    },
    {
      id: "gerund-06",
      ko: "비가 오기 시작했어.",
      answers: ["It started raining.", "It started to rain.", "It began raining.", "It began to rain."],
      hint: "start + -ing (to도 OK)",
    },
    {
      id: "gerund-07",
      ko: "그는 담배를 끊었어.",
      answers: ["He stopped smoking.", "He quit smoking."],
      hint: "stop + smoking",
    },
    {
      id: "gerund-08",
      ko: "도와줘서 고마워.",
      answers: ["Thank you for helping me.", "Thanks for helping me.", "Thank you for your help.", "Thanks for your help."],
      hint: "전치사 for + -ing",
    },
    {
      id: "gerund-09",
      ko: "나 그림 잘 그려. (be good at 사용)",
      answers: ["I'm good at drawing.", "I'm good at painting."],
      hint: "be good at + -ing",
    },
    {
      id: "gerund-10",
      ko: "영어 배우는 건 쉽지 않아.",
      answers: ["Learning English isn't easy.", "Learning English is hard."],
      hint: "Learning English + is",
    },
    {
      id: "gerund-11",
      ko: "그녀는 계속 웃었어.",
      answers: ["She kept laughing.", "She kept smiling.", "She kept on laughing.", "She kept on smiling."],
      hint: "keep + -ing",
    },
    {
      id: "gerund-12",
      ko: "나는 주말에 영화 보는 걸 즐겨.",
      answers: [
        "I enjoy watching movies on weekends.",
        "I enjoy watching movies on the weekend.",
        "I enjoy watching movies on the weekends.",
        "On weekends, I enjoy watching movies.",
      ],
      hint: "enjoy watching movies + on weekends",
    },
  ],
};

export default topic;
