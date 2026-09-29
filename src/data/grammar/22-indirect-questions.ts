import type { GrammarTopic } from "@/lib/types";

const topic: GrammarTopic = {
  id: "indirect-questions",
  order: 22,
  title: "간접의문문",
  titleEn: "Indirect Questions",
  emoji: "🕵️",
  level: 3,
  summary: "질문을 문장 속에 숨겨서 슬쩍 물어보는 기술. 숨기는 순간 어순이 얌전해진다 🤫",
  concept: [
    {
      heading: "간접의문문 = 문장 안에 들어간 질문",
      body: "Where is the station? (직접 질문)\n→ Do you know **where the station is**? (간접 질문)\n\n질문이 다른 문장 안에 쏙 들어가면 **평서문 어순(주어 + 동사)** 으로 바뀌어요!\n\n**의문사 + 주어 + 동사**\n\n더 공손하고 부드럽게 들려서 길 묻기, 부탁할 때 아주 많이 써요.",
      examples: [
        { en: "Where is the bathroom?", ko: "화장실 어디예요? (직접)" },
        { en: "Do you know where the bathroom is?", ko: "화장실 어딘지 아세요? (간접, 더 공손)" },
        { en: "I don't know what his name is.", ko: "나 그 사람 이름이 뭔지 몰라." },
      ],
      eunga: "응응! 질문이 문장 안에 들어가면 부끄러워서 줄을 똑바로 서 🧍",
    },
    {
      heading: "① do/does/did는 사라진다!",
      body: "직접 질문에 있던 **do/does/did** 는 간접의문문에서 **없어지고**, 그 시제·인칭이 동사로 옮겨가요.\n\n• What **does** she **want**? → I don't know what she **wants**.\n• Where **did** he **go**? → Do you know where he **went**?\n• What time **does** it **start**? → Can you tell me what time it **starts**?",
      examples: [
        { en: "Do you know what she wants?", ko: "그녀가 뭘 원하는지 알아?" },
        { en: "I don't know where he went.", ko: "그가 어디 갔는지 모르겠어." },
        { en: "Can you tell me what time it starts?", ko: "몇 시에 시작하는지 알려 줄래요?" },
      ],
      eunga: "응응! do는 투명 망토를 쓰고 사라졌어. 대신 -s랑 -ed를 두고 갔지 🧥",
    },
    {
      heading: "② 의문사가 없으면 if / whether",
      body: "Yes/No 질문(Is he ~? Do you ~?)을 넣을 땐 **if** 나 **whether** 로 연결해요.\n= ~인지 (아닌지)\n\n• Is he coming? → I don't know **if he is coming**.\n• Does she like it? → I wonder **whether she likes it**.\n\n참고: **I wonder ~** (~인지 궁금하다)도 단골 표현!",
      examples: [
        { en: "I don't know if he is coming.", ko: "그가 오는지 모르겠어." },
        { en: "Do you know if the store is open?", ko: "가게 열었는지 알아?" },
        { en: "I wonder whether she likes it.", ko: "그녀가 그걸 좋아하는지 궁금해." },
      ],
      eunga: "응응! if는 가정법에서도 일하고 여기서도 일해. 투잡러야 💼",
    },
    {
      heading: "③ 의문사가 주어일 때는 그대로",
      body: "**who, what** 이 문장의 주어면 이미 '의문사 + 동사' 순서라서 **그대로** 쓰면 돼요.\n\n• Who ate my cake? → Do you know **who ate my cake**?\n• What happened? → I don't know **what happened**.\n\n자주 쓰는 틀:\n**Do you know ~? / Can you tell me ~? / I don't know ~ / I'm not sure ~ / I wonder ~**",
      examples: [
        { en: "Do you know who ate my cake?", ko: "누가 내 케이크 먹었는지 알아?" },
        { en: "I don't know what happened.", ko: "무슨 일이 있었는지 모르겠어." },
        { en: "I'm not sure how much it costs.", ko: "그게 얼마인지 잘 모르겠어." },
      ],
      eunga: "응응! 내 케이크 먹은 범인은 간접의문문으로 잡을 거야 🍰🔍",
    },
    {
      heading: "한국인이 자주 하는 실수 🚨",
      body: "1. **질문 어순 그대로 넣기** ❌\n   ❌ Do you know where is the station?\n   ⭕ Do you know where the station is?\n\n2. **do/does/did 남겨 두기** ❌\n   ❌ I don't know what does she want.\n   ⭕ I don't know what she wants.\n\n3. **Yes/No 질문에 if 빼먹기** ❌\n   ❌ I don't know he is coming.\n   ⭕ I don't know if he is coming.\n\n4. **문장 끝 물음표**: 전체가 Do you know ~? 면 ?, I don't know ~ 면 . 이에요.",
      examples: [
        { en: "Do you know where the station is?", ko: "역이 어딘지 아세요?" },
        { en: "I don't know what time it is.", ko: "지금 몇 시인지 모르겠어." },
        { en: "Can you tell me if this seat is taken?", ko: "이 자리 주인 있는지 알려 줄래요?" },
      ],
      eunga: "응응! where is the station 을 넣으면 역이 두 번 도망가 🚉💨",
    },
  ],
  exercises: [
    {
      id: "indirect-questions-01",
      ko: "화장실이 어딘지 아세요?",
      answers: ["Do you know where the bathroom is?", "Do you know where the restroom is?", "Do you know where the toilet is?"],
      hint: "Do you know + where + 주어 + 동사",
    },
    {
      id: "indirect-questions-02",
      ko: "나 그 사람 이름이 뭔지 몰라.",
      answers: ["I don't know what his name is.", "I don't know his name.", "I don't know what her name is."],
      hint: "what + his name + is",
    },
    {
      id: "indirect-questions-03",
      ko: "지금 몇 시인지 아세요?",
      answers: ["Do you know what time it is?"],
      hint: "what time + it + is",
    },
    {
      id: "indirect-questions-04",
      ko: "그가 어디 사는지 모르겠어.",
      answers: ["I don't know where he lives."],
      hint: "does는 빠지고 live에 -s!",
    },
    {
      id: "indirect-questions-05",
      ko: "무슨 일이 있었는지 모르겠어.",
      answers: ["I don't know what happened."],
      hint: "what이 주어 → 어순 그대로",
    },
    {
      id: "indirect-questions-06",
      ko: "그녀가 오는지 모르겠어.",
      answers: [
        "I don't know if she is coming.",
        "I don't know whether she is coming.",
        "I don't know if she will come.",
        "I don't know whether she will come.",
      ],
      hint: "Yes/No 질문 → if / whether",
    },
    {
      id: "indirect-questions-07",
      ko: "영화가 몇 시에 시작하는지 알려 줄래요?",
      answers: [
        "Can you tell me what time the movie starts?",
        "Could you tell me what time the movie starts?",
        "Can you tell me when the movie starts?",
        "Could you tell me when the movie starts?",
      ],
      hint: "Can you tell me + what time + 주어 + 동사",
    },
    {
      id: "indirect-questions-08",
      ko: "누가 내 케이크 먹었는지 알아?",
      answers: ["Do you know who ate my cake?"],
      hint: "who가 주어 → who + ate",
    },
    {
      id: "indirect-questions-09",
      ko: "그게 얼마인지 잘 모르겠어.",
      answers: [
        "I'm not sure how much it costs.",
        "I'm not sure how much it is.",
        "I don't know how much it costs.",
        "I don't know how much it is.",
      ],
      hint: "잘 모르겠다 = I'm not sure, how much + 주어 + 동사",
    },
    {
      id: "indirect-questions-10",
      ko: "그가 어제 어디 갔는지 알아?",
      answers: ["Do you know where he went yesterday?"],
      hint: "did는 빠지고 go → went",
    },
    {
      id: "indirect-questions-11",
      ko: "가게가 열었는지 궁금해.",
      answers: [
        "I wonder if the store is open.",
        "I wonder whether the store is open.",
        "I wonder if the shop is open.",
        "I wonder whether the shop is open.",
      ],
      hint: "궁금하다 = I wonder + if",
    },
    {
      id: "indirect-questions-12",
      ko: "역에 어떻게 가는지 알려 주실 수 있나요?",
      answers: [
        "Could you tell me how to get to the station?",
        "Can you tell me how to get to the station?",
        "Could you tell me how I can get to the station?",
        "Can you tell me how I can get to the station?",
      ],
      hint: "Could you tell me + how to get to ~ (how + 주어 + 동사도 OK)",
    },
  ],
};

export default topic;
