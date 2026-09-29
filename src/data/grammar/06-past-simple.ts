import type { GrammarTopic } from "@/lib/types";

const topic: GrammarTopic = {
  id: "past-simple",
  order: 6,
  title: "과거시제",
  titleEn: "Past simple",
  emoji: "⏪",
  level: 1,
  summary: "어제의 나는 -ed였다… 근데 불규칙 동사는 지 맘대로임ㅋ",
  concept: [
    {
      heading: "과거형 = 이미 끝난 일",
      body:
        "어제, 지난주, 아까처럼 **이미 끝난 일**은 과거형!\n좋은 소식: 과거형은 **주어가 뭐든 모양이 같아.** (3인칭 -s 걱정 끝!)\nI played / She played / They played",
      examples: [
        { en: "I played games yesterday.", ko: "나 어제 게임했어." },
        { en: "She called me last night.", ko: "그녀가 어젯밤에 나한테 전화했어." },
        { en: "We watched a movie.", ko: "우리 영화 봤어." },
      ],
      eunga: "응응! 과거형은 평등주의자야. 주어 차별 안 함.",
    },
    {
      heading: "규칙 동사: -ed 붙이기",
      body:
        "대부분: **+ed** (walk → walked, watch → watched)\n-e로 끝나면: **+d** (like → liked, move → moved)\n자음 + y: **y → ied** (study → studied, cry → cried)\n단모음+단자음 1음절: **자음 한 번 더** (stop → stopped, plan → planned)",
      examples: [
        { en: "I studied all night.", ko: "나 밤새 공부했어." },
        { en: "The bus stopped.", ko: "버스가 멈췄어." },
      ],
    },
    {
      heading: "불규칙 동사: 그냥 외우자",
      body:
        "자주 쓰는 동사일수록 불규칙이 많아 😭\ngo → **went** / eat → **ate** / see → **saw** / have → **had**\nbuy → **bought** / get → **got** / make → **made** / take → **took**\ncome → **came** / say → **said** / meet → **met** / sleep → **slept**\nbe동사 과거: I/he/she/it → **was**, you/we/they → **were**",
      examples: [
        { en: "I went to Busan last week.", ko: "나 지난주에 부산 갔어." },
        { en: "He bought a new phone.", ko: "그는 새 폰 샀어." },
        { en: "I was so tired.", ko: "나 진짜 피곤했어." },
      ],
      eunga: "go의 과거가 went인 건… 그냥 받아들여. 응아도 이해 못 함 ㅋ",
    },
    {
      heading: "부정문·의문문: did가 과거를 가져감",
      body:
        "부정: **didn't + 동사원형** → I **didn't go**.\n의문: **Did + 주어 + 동사원형 ~?** → **Did you eat**?\ndid가 이미 과거니까 뒤 동사는 **원형**! (주어 상관없이 did)\n단, be동사는 did 없이: I **wasn't** there. / **Were** you busy?",
      examples: [
        { en: "I didn't sleep well.", ko: "나 잠 잘 못 잤어." },
        { en: "Did you eat lunch?", ko: "점심 먹었어?" },
        { en: "Where did you go?", ko: "너 어디 갔었어?" },
      ],
    },
    {
      heading: "한국인이 자주 하는 실수",
      body:
        "❌ **I didn't went.** → 과거 두 번! ✅ I didn't go.\n❌ **Did you ate?** ✅ Did you eat?\n❌ **I goed.** → 불규칙! ✅ I went.\n❌ **I was go there.** → be동사 + 일반동사 금지. ✅ I went there.\n❌ **Yesterday I go to school.** → 시간이 과거면 동사도 과거! ✅ Yesterday I went to school.",
      examples: [
        { en: "I didn't go.", ko: "나 안 갔어." },
        { en: "Did you eat?", ko: "밥 먹었어?" },
      ],
      eunga: "did가 나오면 뒤 동사는 원형으로 리셋! 과거 표시는 한 번만. 응응!",
    },
  ],
  exercises: [
    {
      id: "past-simple-01",
      ko: "나 어제 영화 봤어.",
      answers: ["I watched a movie yesterday.", "I saw a movie yesterday.", "Yesterday I watched a movie.", "Yesterday I saw a movie.", "I watched a film yesterday.", "I saw a film yesterday."],
      hint: "watch → watched (규칙) / see → saw (불규칙).",
    },
    {
      id: "past-simple-02",
      ko: "그녀가 어젯밤에 나한테 전화했어.",
      answers: ["She called me last night."],
      hint: "call + ed. 어젯밤 = last night.",
    },
    {
      id: "past-simple-03",
      ko: "나 지난주에 부산 갔어.",
      answers: ["I went to Busan last week.", "Last week I went to Busan."],
      hint: "go의 과거는 went!",
    },
    {
      id: "past-simple-04",
      ko: "우리 밤새 공부했어.",
      answers: ["We studied all night."],
      hint: "study → studied.",
    },
    {
      id: "past-simple-05",
      ko: "나 진짜 피곤했어.",
      answers: ["I was so tired.", "I was really tired.", "I was very tired."],
      hint: "be동사 과거: I → was.",
    },
    {
      id: "past-simple-06",
      ko: "점심 먹었어?",
      answers: ["Did you eat lunch?", "Did you have lunch?"],
      hint: "Did + you + 원형 ~?",
    },
    {
      id: "past-simple-07",
      ko: "나 어젯밤에 잠 잘 못 잤어.",
      answers: ["I didn't sleep well last night."],
      hint: "didn't + sleep(원형) + well.",
    },
    {
      id: "past-simple-08",
      ko: "그는 새 폰을 샀어.",
      answers: ["He bought a new phone."],
      hint: "buy → bought (불규칙).",
    },
    {
      id: "past-simple-09",
      ko: "너 어제 어디 갔었어?",
      answers: ["Where did you go yesterday?"],
      hint: "Where + did you + go(원형)?",
    },
    {
      id: "past-simple-10",
      ko: "우리 카페에서 만났어.",
      answers: ["We met at a cafe.", "We met at a café.", "We met at the cafe.", "We met at the café.", "We met in a cafe.", "We met at a coffee shop."],
      hint: "meet → met.",
    },
    {
      id: "past-simple-11",
      ko: "걔네(그들) 파티에 안 왔어.",
      answers: ["They didn't come to the party."],
      hint: "didn't + come(원형).",
    },
    {
      id: "past-simple-12",
      ko: "너 숙제 끝냈어?",
      answers: ["Did you finish your homework?", "Did you finish the homework?", "Did you do your homework?"],
      hint: "Did you + finish ~?",
    },
  ],
};

export default topic;
