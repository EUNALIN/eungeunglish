import type { GrammarTopic } from "@/lib/types";

const topic: GrammarTopic = {
  id: "conjunctions",
  order: 20,
  title: "접속사 when / if / because / although / so",
  titleEn: "Conjunctions",
  emoji: "🔗",
  level: 3,
  summary: "문장과 문장을 이어 주는 중매쟁이들. 잘못 이으면 because랑 so가 동시에 등장하는 대참사 💥",
  concept: [
    {
      heading: "when (~할 때) & if (만약 ~하면)",
      body: "**when + 주어 + 동사**: ~할 때 (반드시 일어나는 일)\n**if + 주어 + 동사**: 만약 ~하면 (일어날지 모르는 일)\n\n⚠️ 중요 규칙: 시간·조건을 나타내는 when/if 절에서는 **미래 일이라도 현재시제**!\n❌ If it will rain tomorrow → ⭕ If it rains tomorrow\n❌ when I will get home → ⭕ when I get home\n\n접속사 절이 앞에 오면 콤마(,)를 찍어요.",
      examples: [
        { en: "Call me when you get home.", ko: "집에 도착하면 전화해." },
        { en: "If it rains tomorrow, we will stay home.", ko: "내일 비 오면 우리 집에 있을 거야." },
        { en: "When I was a kid, I loved cartoons.", ko: "어렸을 때 나 만화 엄청 좋아했어." },
      ],
      eunga: "응응! if절에 will 넣으면 미래에서 온 터미네이터가 잡으러 와 🤖",
    },
    {
      heading: "because (왜냐하면) & so (그래서)",
      body: "**because + 이유**: ~ 때문에\n**so + 결과**: 그래서 ~\n\nI stayed home **because** I was sick. (이유 쪽에 because)\nI was sick, **so** I stayed home. (결과 쪽에 so)\n\n⚠️ **because of + 명사**: because of the rain (비 때문에)\n→ 뒤에 문장이면 because, 명사면 because of!",
      examples: [
        { en: "I'm tired because I didn't sleep.", ko: "나 못 자서 피곤해." },
        { en: "It was expensive, so I didn't buy it.", ko: "비싸서 안 샀어." },
        { en: "The game was canceled because of the rain.", ko: "비 때문에 경기가 취소됐어." },
      ],
      eunga: "응응! because는 원인 담당, so는 결과 담당. 둘이 한 문장에 같이 있으면 싸워 🥊",
    },
    {
      heading: "although (비록 ~지만)",
      body: "**although + 주어 + 동사**: 비록 ~이지만 (예상과 반대되는 결과)\n**though**, **even though**(더 강조)도 같은 뜻이에요.\n\nAlthough it was cold, we went swimming.\n= It was cold, **but** we went swimming.\n\n뜻은 but이랑 비슷하지만 **although와 but을 한 문장에 같이 쓰면 안 돼요!**",
      examples: [
        { en: "Although he is rich, he isn't happy.", ko: "그는 부자지만 행복하지 않아." },
        { en: "I went to work even though I was sick.", ko: "아팠는데도 출근했어." },
        { en: "Though it was late, she called me.", ko: "늦었지만 그녀가 전화했어." },
      ],
      eunga: "응응! although = 월요일이지만 출근한다. 인생 그 자체야 🥲",
    },
    {
      heading: "한국인이 자주 하는 실수 🚨",
      body: "1. **because와 so 같이 쓰기** ❌\n   ❌ Because I was hungry, so I ate. (한국어 '배고파서 그래서'의 함정)\n   ⭕ Because I was hungry, I ate. / ⭕ I was hungry, so I ate.\n\n2. **although와 but 같이 쓰기** ❌\n   ❌ Although it rained, but we played.\n\n3. **when/if 절에 will** ❌ When I will finish, I'll call you.\n\n4. **Because 절만 달랑 쓰기** (글에서)\n   ❌ Because I was tired. ← 반쪽짜리 문장! 주절이 필요해요.\n   (대화에서 Why? 에 대한 대답으로는 OK)",
      examples: [
        { en: "I was hungry, so I ate ramen.", ko: "배고파서 라면 먹었어." },
        { en: "Although it rained, we played soccer.", ko: "비가 왔지만 우리는 축구했어." },
        { en: "I'll call you when I finish.", ko: "끝나면 전화할게." },
      ],
      eunga: "응응! 접속사는 한 문장에 한 명만! 중매쟁이 둘이면 소개팅 망해 💘",
    },
  ],
  exercises: [
    {
      id: "conjunctions-01",
      ko: "나는 피곤할 때 커피를 마셔.",
      answers: ["I drink coffee when I'm tired.", "When I'm tired, I drink coffee."],
      hint: "~할 때 = when + 주어 + 동사",
    },
    {
      id: "conjunctions-02",
      ko: "배고파서 라면 먹었어. (because 사용)",
      answers: [
        "I ate ramen because I was hungry.",
        "Because I was hungry, I ate ramen.",
        "I ate ramyeon because I was hungry.",
        "I ate instant noodles because I was hungry.",
      ],
      hint: "because 뒤에 이유 (I was hungry)",
    },
    {
      id: "conjunctions-03",
      ko: "늦어서 택시 탔어. (so 사용)",
      answers: [
        "I was late, so I took a taxi.",
        "I was late, so I took a cab.",
        "I was running late, so I took a taxi.",
        "I was running late, so I took a cab.",
      ],
      hint: "so 뒤에 결과 (I took a taxi)",
    },
    {
      id: "conjunctions-04",
      ko: "비 오면 우리 집에 있을 거야.",
      answers: [
        "If it rains, we will stay home.",
        "We will stay home if it rains.",
        "If it rains, we will stay at home.",
        "We will stay at home if it rains.",
      ],
      hint: "if절은 미래라도 현재시제 (rains)",
    },
    {
      id: "conjunctions-05",
      ko: "집에 도착하면 전화해 줘.",
      answers: [
        "Call me when you get home.",
        "When you get home, call me.",
        "Please call me when you get home.",
        "Call me when you arrive home.",
      ],
      hint: "when you get home — will 넣지 마!",
    },
    {
      id: "conjunctions-06",
      ko: "어렸을 때 나 키가 작았어.",
      answers: [
        "When I was a kid, I was short.",
        "I was short when I was a kid.",
        "When I was young, I was short.",
        "I was short when I was young.",
        "When I was little, I was short.",
        "When I was a child, I was short.",
      ],
      hint: "When I was a kid, ~",
    },
    {
      id: "conjunctions-07",
      ko: "추워서 창문 닫았어. (so 사용)",
      answers: [
        "It was cold, so I closed the window.",
        "It was cold, so I shut the window.",
        "It was cold, so I closed the windows.",
      ],
      hint: "날씨 주어는 It, so 뒤에 결과",
    },
    {
      id: "conjunctions-08",
      ko: "비가 왔지만 우리는 축구를 했어. (although 사용)",
      answers: [
        "Although it rained, we played soccer.",
        "We played soccer although it rained.",
        "Although it was raining, we played soccer.",
        "We played soccer although it was raining.",
        "Although it rained, we played football.",
      ],
      hint: "although 쓰면 but은 빼기!",
    },
    {
      id: "conjunctions-09",
      ko: "시간 있으면 나 좀 도와줄 수 있어?",
      answers: [
        "Can you help me if you have time?",
        "If you have time, can you help me?",
        "Could you help me if you have time?",
        "If you have time, could you help me?",
      ],
      hint: "if you have time + 부탁 표현",
    },
    {
      id: "conjunctions-10",
      ko: "그는 부자지만 행복하지 않아. (although 사용)",
      answers: [
        "Although he is rich, he is not happy.",
        "He is not happy although he is rich.",
        "Although he is rich, he is unhappy.",
      ],
      hint: "Although + 주어 + 동사, 주절",
    },
    {
      id: "conjunctions-11",
      ko: "내일 날씨 좋으면 우리 소풍 갈 거야.",
      answers: [
        "If the weather is nice tomorrow, we will go on a picnic.",
        "We will go on a picnic if the weather is nice tomorrow.",
        "If the weather is good tomorrow, we will go on a picnic.",
        "We will go on a picnic if the weather is good tomorrow.",
      ],
      hint: "소풍 가다 = go on a picnic, if절은 현재시제",
    },
    {
      id: "conjunctions-12",
      ko: "피곤했지만 나는 계속 공부했어. (although 사용)",
      answers: [
        "Although I was tired, I kept studying.",
        "I kept studying although I was tired.",
        "Although I was tired, I kept on studying.",
        "Although I was tired, I continued studying.",
        "Although I was tired, I continued to study.",
      ],
      hint: "계속 ~하다 = keep + -ing",
    },
  ],
};

export default topic;
