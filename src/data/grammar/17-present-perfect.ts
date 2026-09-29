import type { GrammarTopic } from "@/lib/types";

const topic: GrammarTopic = {
  id: "present-perfect",
  order: 17,
  title: "현재완료",
  titleEn: "Present Perfect",
  emoji: "⏳",
  level: 3,
  summary: "과거에 한 일이 아직도 현재에 질척거릴 때 쓰는 시제. have + p.p. 로 과거와 현재를 이어붙인다 🔗",
  concept: [
    {
      heading: "현재완료 = 과거와 현재를 잇는 다리",
      body: "형태는 **have/has + 과거분사(p.p.)**.\n과거에 일어난 일이 **지금까지 영향을 주고 있을 때** 써요.\n\n• 과거시제: 그때 그랬다 (끝! 지금은 몰라)\n• 현재완료: 그때부터 지금까지 / 그 결과 지금 ~하다\n\n3인칭 단수(he, she, it)는 **has**, 나머지는 **have**.\n부정은 have not(haven't), 의문문은 Have you ~?",
      examples: [
        { en: "I lost my key.", ko: "나 열쇠 잃어버렸었어. (지금 찾았는지는 모름)" },
        { en: "I have lost my key.", ko: "나 열쇠 잃어버렸어. (그래서 지금 없어)" },
        { en: "She has finished her work.", ko: "그녀는 일을 끝냈어. (지금 끝난 상태)" },
      ],
      eunga: "응응! 과거는 쿨하게 끝난 전 애인, 현재완료는 아직 연락하는 전 애인이야 📱",
    },
    {
      heading: "① 경험: ~해 본 적 있다",
      body: "**ever**(한 번이라도), **never**(한 번도 안), **before**(전에), **once/twice/~times** 와 자주 붙어요.\n\n특히 **have been to** = ~에 가 본 적 있다 (갔다가 돌아옴)\n반면 **have gone to** = ~에 가 버렸다 (그래서 지금 여기 없음)\n→ 'I have gone to Japan.'은 '나 일본 가버렸어'라서 말하는 사람이 여기 있으면 이상해요!",
      examples: [
        { en: "Have you ever been to Jeju?", ko: "너 제주도 가 본 적 있어?" },
        { en: "I have never eaten durian.", ko: "나 두리안 한 번도 안 먹어 봤어." },
        { en: "He has gone to Busan.", ko: "그는 부산에 가 버렸어. (지금 여기 없음)" },
      ],
      eunga: "응응! 나는 우주에 have been to 했어. 별이니까 ⭐",
    },
    {
      heading: "② 완료·결과: 막 ~했다 / 벌써 ~했다",
      body: "**just**(방금), **already**(벌써, 이미) → 긍정문, have와 p.p. 사이에 쏙\n**yet** → 부정문(아직 안), 의문문(벌써?)에서 문장 맨 끝에\n\n결과를 강조할 때도 써요: I have lost my phone. = 폰 잃어버려서 지금 없음 😭",
      examples: [
        { en: "I have just woken up.", ko: "나 방금 일어났어." },
        { en: "She has already left.", ko: "그녀는 벌써 떠났어." },
        { en: "Have you eaten yet?", ko: "너 벌써 밥 먹었어?" },
        { en: "I haven't decided yet.", ko: "나 아직 결정 안 했어." },
      ],
      eunga: "응응! 나는 방금 아무것도 안 했어. I have just done nothing 😎",
    },
    {
      heading: "③ 계속: (지금까지) 쭉 ~해 왔다",
      body: "과거에 시작해서 **지금도 계속되는 상태**.\n\n• **for + 기간**: for three years, for a long time\n• **since + 시작 시점**: since 2020, since last Monday, since I was a kid\n• 기간을 물을 땐: **How long have you ~?**\n\n동작이 계속 진행 중이면 **have been + -ing**(현재완료진행)도 자주 써요.",
      examples: [
        { en: "I have lived here for five years.", ko: "나 여기 5년째 살고 있어." },
        { en: "We have known each other since high school.", ko: "우리는 고등학교 때부터 알고 지냈어." },
        { en: "How long have you been waiting?", ko: "너 얼마나 기다렸어?" },
      ],
      eunga: "응응! 나는 since 태초 부터 끄덕이고 있어. 목이 좀 아파 🙂‍↕️",
    },
    {
      heading: "한국인이 자주 하는 실수 🚨",
      body: "1. **명확한 과거 시점과 같이 쓰기** ❌\n   yesterday, last year, ~ago, in 2019, When ~? 은 과거시제만!\n   ❌ I have seen him yesterday. → ⭕ I saw him yesterday.\n   ❌ When have you arrived? → ⭕ When did you arrive?\n\n2. **for와 since 헷갈리기**\n   ❌ since three years → ⭕ for three years\n\n3. **been to vs gone to 헷갈리기**\n   '가 본 적 있다'는 무조건 **been to**!\n\n4. **'~년째 살아'를 현재시제로** ❌ I live here for 3 years. → ⭕ I have lived here for 3 years.",
      examples: [
        { en: "I saw that movie last week.", ko: "나 그 영화 지난주에 봤어. (시점 O → 과거)" },
        { en: "I have seen that movie twice.", ko: "나 그 영화 두 번 봤어. (경험 → 현재완료)" },
        { en: "I have worked here for two years.", ko: "나 여기서 2년째 일하고 있어." },
      ],
      eunga: "응응! yesterday랑 현재완료를 같이 쓰면 시간여행 금지법 위반이야 🚓",
    },
  ],
  exercises: [
    {
      id: "present-perfect-01",
      ko: "나 그 영화 본 적 있어.",
      answers: [
        "I have seen that movie.",
        "I have seen the movie.",
        "I have watched that movie.",
        "I have watched the movie.",
        "I have seen that movie before.",
      ],
      hint: "경험 → have + see의 p.p.(seen)",
    },
    {
      id: "present-perfect-02",
      ko: "나 방금 점심 먹었어.",
      answers: [
        "I have just had lunch.",
        "I have just eaten lunch.",
        "I have just had my lunch.",
        "I have just eaten my lunch.",
      ],
      hint: "just는 have와 p.p. 사이에!",
    },
    {
      id: "present-perfect-03",
      ko: "너 일본 가 본 적 있어?",
      answers: ["Have you ever been to Japan?", "Have you been to Japan?", "Have you been to Japan before?"],
      hint: "가 본 적 = have been to, '한 번이라도'는 ever",
    },
    {
      id: "present-perfect-04",
      ko: "나 아직 숙제 안 끝냈어.",
      answers: [
        "I haven't finished my homework yet.",
        "I haven't done my homework yet.",
        "I haven't finished my homework.",
      ],
      hint: "부정문 끝에 yet",
    },
    {
      id: "present-perfect-05",
      ko: "그녀는 벌써 집에 갔어. (그래서 지금 여기 없어)",
      answers: ["She has already gone home.", "She has gone home already.", "She has already left."],
      hint: "go의 p.p.는 gone, already는 has와 p.p. 사이",
    },
    {
      id: "present-perfect-06",
      ko: "나 스시 한 번도 안 먹어 봤어.",
      answers: ["I have never eaten sushi.", "I have never had sushi.", "I have never tried sushi."],
      hint: "한 번도 안 ~ = have never + p.p.",
    },
    {
      id: "present-perfect-07",
      ko: "나 여기서 3년째 살고 있어.",
      answers: [
        "I have lived here for three years.",
        "I have lived here for 3 years.",
        "I have been living here for three years.",
        "I have been living here for 3 years.",
      ],
      hint: "기간은 for + 기간",
    },
    {
      id: "present-perfect-08",
      ko: "우리는 2020년부터 친구야.",
      answers: ["We have been friends since 2020."],
      hint: "시작 시점은 since, be동사의 p.p.는 been",
    },
    {
      id: "present-perfect-09",
      ko: "나 휴대폰 잃어버렸어. (그래서 지금 없어)",
      answers: ["I have lost my phone.", "I have lost my cell phone.", "I have lost my cellphone."],
      hint: "결과 → have + lose의 p.p.(lost)",
    },
    {
      id: "present-perfect-10",
      ko: "그는 서울에 가 버렸어. (그래서 지금 여기 없어)",
      answers: ["He has gone to Seoul."],
      hint: "가 본 적(been to) 말고, 가 버림(gone to)!",
    },
    {
      id: "present-perfect-11",
      ko: "너 여기서 얼마나 오래 일했어? (지금도 일하는 중)",
      answers: ["How long have you worked here?", "How long have you been working here?"],
      hint: "기간 질문 = How long have you + p.p. ~?",
    },
    {
      id: "present-perfect-12",
      ko: "나는 어렸을 때부터 그를 알고 지냈어.",
      answers: [
        "I have known him since I was a kid.",
        "I have known him since I was a child.",
        "I have known him since I was young.",
        "I have known him since I was little.",
      ],
      hint: "know의 p.p.는 known, since 뒤에 문장(I was ~)도 OK",
    },
  ],
};

export default topic;
