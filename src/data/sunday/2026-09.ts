import type { SundayExercise, SundayPattern } from "@/lib/types";

const W1 = "미래 계획과 목표 말하기";
const W2 = "헷갈리는 기본 동사 바로잡기";
const W3 = "의견 말하고 정중하게 반대하기";

export const patterns: SundayPattern[] = [
  // ───────── Week 1 ─────────
  {
    id: "sun-09-w1-p1",
    month: "2026-09",
    week: 1,
    topic: W1,
    pattern: "I'm planning to ___.",
    meaning: "나는 ~할 계획이야.",
    points: [
      "앞으로 하려고 하는 일을 말할 때 써. **plan to + 동사원형**",
      "x I'm planning to traveling. → o I'm planning to travel.",
      "비슷한 표현: **plan on + -ing** (I plan on studying abroad.), **intend to** (~할 의도이다), **aim to** (~을 목표로 하다)",
      "약속·일정 자체는 명사 plans: I have plans this weekend. (이번 주말에 약속 있어)",
    ],
    examples: [
      { en: "I'm planning to move to a new apartment.", ko: "나 새 아파트로 이사할 계획이야." },
      { en: "I'm planning to start a new job next month.", ko: "나 다음 달에 새 일을 시작할 계획이야." },
      { en: "I'm planning to travel abroad this summer.", ko: "나 이번 여름에 해외여행 갈 계획이야." },
    ],
  },
  {
    id: "sun-09-w1-p2",
    month: "2026-09",
    week: 1,
    topic: W1,
    pattern: "I expect ___ to be ___.",
    meaning: "나는 ~이 …할 거라고 예상해.",
    points: [
      "미래 상황에 대한 예상을 말할 때 써. **expect + 대상 + to be + 형용사**",
      "x I expect this project be challenging. → o I expect this project to be challenging.",
      "expect는 '예상'에 가까운 기대. 그 순간을 '고대'할 땐 **look forward to + -ing** (I look forward to meeting you.)",
    ],
    examples: [
      { en: "I expect the meeting to be short.", ko: "회의가 짧을 거라고 예상해." },
      { en: "I expect this project to be challenging.", ko: "이 프로젝트가 힘들 거라고 예상해." },
      { en: "I expect traffic to be heavy tonight.", ko: "오늘 밤에 차가 많이 막힐 것 같아." },
    ],
  },
  {
    id: "sun-09-w1-p3",
    month: "2026-09",
    week: 1,
    topic: W1,
    pattern: "I've been thinking about ___.",
    meaning: "나 요즘 ~을 고민하고 있어.",
    points: [
      "최근 계속 고민 중인 결정이나 변화를 말할 때 써. **have been + -ing** (현재완료 진행)",
      "about 뒤에는 명사나 **동명사(-ing)**: thinking about changing ~",
      "x I've been think about it. → o I've been thinking about it.",
      "I'm thinking about it. = 지금 생각 중 / I've been thinking about it. = 한동안 계속 고민 중",
    ],
    examples: [
      { en: "I've been thinking about changing my career.", ko: "나 요즘 진로를 바꿀까 고민하고 있어." },
      { en: "I've been thinking about moving to another city.", ko: "나 요즘 다른 도시로 이사 갈까 고민 중이야." },
      { en: "I've been thinking about going back to school.", ko: "나 요즘 다시 학교 다닐까 고민하고 있어." },
    ],
  },
  {
    id: "sun-09-w1-p4",
    month: "2026-09",
    week: 1,
    topic: W1,
    pattern: "I'm not really planning on ___ing.",
    meaning: "나는 ~할 계획은 별로 없어.",
    points: [
      "당장은 할 생각이 없는 일을 부드럽게 말할 때 써. **plan on + 명사/동명사(-ing)**",
      "x I'm not really planning buy a car. → o I'm not really planning on buying a car.",
      "x I'm planning on to stay. → o I'm planning on staying.",
      "반대로 말할 땐: I'm actually planning on ___. (사실 나 ~할 계획이야)",
    ],
    examples: [
      { en: "I'm not really planning on buying a new car.", ko: "새 차 살 계획은 별로 없어." },
      { en: "I'm not really planning on moving anytime soon.", ko: "당분간 이사할 계획은 별로 없어." },
      { en: "I'm not really planning on changing jobs this year.", ko: "올해 직장 옮길 계획은 별로 없어." },
    ],
  },
  {
    id: "sun-09-w1-p5",
    month: "2026-09",
    week: 1,
    topic: W1,
    pattern: "I used to plan to ___, but now I've decided to ___.",
    meaning: "예전엔 ~하려고 했는데, 지금은 ~하기로 했어.",
    points: [
      "시간이 지나며 바뀐 계획을 말할 때 써. used to = 예전엔 ~했다",
      "**decide to + 동사원형**: x I decided staying. → o I decided to stay.",
      "x I used to plan retire early. → o I used to plan to retire early.",
      "plan on을 써도 돼: I used to plan on retiring early, but ~",
    ],
    examples: [
      { en: "I used to plan to retire early, but now I've decided to keep working.", ko: "예전엔 일찍 은퇴하려고 했는데, 지금은 계속 일하기로 했어." },
      { en: "I used to plan to buy a house, but now I've decided to rent.", ko: "예전엔 집을 사려고 했는데, 지금은 월세로 살기로 했어." },
      { en: "I used to plan to travel alone, but now I've decided to travel with friends.", ko: "예전엔 혼자 여행하려고 했는데, 지금은 친구들이랑 가기로 했어." },
    ],
  },

  // ───────── Week 2 ─────────
  {
    id: "sun-09-w2-p1",
    month: "2026-09",
    week: 2,
    topic: W2,
    pattern: "say ___ / tell (someone) ___",
    meaning: "say = (내용을) 말하다 / tell = (누구에게) 말해주다",
    points: [
      "**say**는 말하는 내용에 초점. 사람 목적어를 바로 안 붙여: say hello, say sorry, say yes/no",
      "**tell**은 듣는 사람을 꼭 써: tell me, tell him about ~. 덩어리: tell a story, tell a lie, tell the truth",
      "x She said me she was tired. → o She told me she was tired. / She said she was tired.",
      "x Tell sorry to her. → o Say sorry to her.",
      "참고: talk = 대화 중심 (talk to my friend), speak = 말하는 행위·언어·격식 (speak louder)",
    ],
    examples: [
      { en: "He didn't say anything.", ko: "그는 아무 말도 안 했어." },
      { en: "Tell me what happened.", ko: "무슨 일 있었는지 말해줘." },
      { en: "She told me a story.", ko: "그녀가 나한테 이야기를 해줬어." },
      { en: "I forgot to say sorry.", ko: "미안하다고 말하는 걸 깜빡했어." },
    ],
  },
  {
    id: "sun-09-w2-p2",
    month: "2026-09",
    week: 2,
    topic: W2,
    pattern: "hear ___ / listen to ___",
    meaning: "hear = (저절로) 들리다, 소식을 듣다 / listen to = (집중해서) 듣다",
    points: [
      "**hear**: 의도 없이 들리는 소리, 전해 들은 소식 (I heard you got a new job.) 뒤에 to 없음",
      "**listen to**: 일부러 집중해서 듣기. 대상 앞에 **to**가 꼭 필요",
      "x I heard to music on the bus. → o I listened to music on the bus.",
      "x Did you listen that noise? → o Did you hear that noise?",
    ],
    examples: [
      { en: "I heard a strange noise.", ko: "이상한 소리가 들렸어." },
      { en: "I listen to music every morning.", ko: "나는 매일 아침 음악을 들어." },
      { en: "I hear music from next door.", ko: "옆집에서 음악 소리가 들려." },
      { en: "Listen to me carefully.", ko: "내 말 잘 들어." },
    ],
  },
  {
    id: "sun-09-w2-p3",
    month: "2026-09",
    week: 2,
    topic: W2,
    pattern: "borrow ___ (from someone) / lend (someone) ___",
    meaning: "borrow = 빌리다(받는 쪽) / lend = 빌려주다(주는 쪽)",
    points: [
      "**borrow** (과거 borrowed): 내가 받아오는 입장. Can I borrow your pen?",
      "**lend** (과거 **lent**): 내가 주는 입장. lend + 사람 + 물건 / lend 물건 to 사람",
      "x Can you borrow me some money? → o Can you lend me some money?",
      "x I lent his pen. (내가 빌린 거라면) → o I borrowed his pen.",
    ],
    examples: [
      { en: "Can I borrow your pen?", ko: "펜 좀 빌려도 돼?" },
      { en: "She borrowed a book from the library.", ko: "그녀는 도서관에서 책을 빌렸어." },
      { en: "Can you lend me some money?", ko: "돈 좀 빌려줄 수 있어?" },
      { en: "She lent me her umbrella.", ko: "그녀가 나한테 우산을 빌려줬어." },
    ],
  },

  // ───────── Week 3 ─────────
  {
    id: "sun-09-w3-p1",
    month: "2026-09",
    week: 3,
    topic: W3,
    pattern: "In my opinion, ___.",
    meaning: "내 생각에는 ~",
    points: [
      "자기 의견을 꺼낼 때 문장 맨 앞에 붙여. 뒤에는 **완전한 문장**",
      "x In my opinion is that we should stop. → o In my opinion, we should stop.",
      "비슷한 표현: The way I see it, ~ (내가 봤을 때) / Personally, I think ~ / From my perspective, ~",
      "캐주얼하게: Honestly, ~ / Not gonna lie, ~ (ngl)",
    ],
    examples: [
      { en: "In my opinion, this plan needs more time.", ko: "내 생각엔 이 계획은 시간이 더 필요해." },
      { en: "In my opinion, honesty is the most important thing.", ko: "내 생각엔 정직이 제일 중요해." },
      { en: "The way I see it, we should wait.", ko: "내가 보기엔 우리 기다려야 해." },
    ],
  },
  {
    id: "sun-09-w3-p2",
    month: "2026-09",
    week: 3,
    topic: W3,
    pattern: "I totally agree that ___.",
    meaning: "~라는 거 완전 동의해.",
    points: [
      "agree **that + 문장** / agree **with + 사람·명사** — 둘을 섞지 마",
      "x I totally agree with that we need more time. → o I totally agree that we need more time.",
      "맞장구: That's exactly how I feel. / Tell me about it. (내 말이!) / Same here. / So do I.",
      "You're absolutely right about that. (그건 네 말이 완전 맞아)",
    ],
    examples: [
      { en: "I totally agree that we need a break.", ko: "우리 좀 쉬어야 한다는 거 완전 동의해." },
      { en: "I totally agree that the price is too high.", ko: "가격이 너무 비싸다는 거 완전 동의해." },
      { en: "That's exactly how I feel.", ko: "내 말이 그 말이야." },
    ],
  },
  {
    id: "sun-09-w3-p3",
    month: "2026-09",
    week: 3,
    topic: W3,
    pattern: "I see your point, but ___.",
    meaning: "무슨 말인지 알겠는데, ~ (부드러운 반대)",
    points: [
      "상대 말을 먼저 인정하고 반대 의견을 말하는 부드러운 표현",
      "비슷한 표현: I understand what you're saying, but ~ / That makes sense, however ~",
      "I see. 만 쓰면 '그렇구나, 알겠어' (받아들이는 느낌)",
    ],
    examples: [
      { en: "I see your point, but I think we should wait.", ko: "무슨 말인지 알겠는데, 난 기다려야 한다고 생각해." },
      { en: "I see your point, but I'm not fully convinced.", ko: "무슨 말인지 알겠는데, 완전히 납득되진 않아." },
      { en: "That makes sense, however I still have concerns.", ko: "일리는 있는데, 그래도 아직 걱정돼." },
    ],
  },
  {
    id: "sun-09-w3-p4",
    month: "2026-09",
    week: 3,
    topic: W3,
    pattern: "I'm not so sure about ___.",
    meaning: "~은 잘 모르겠어 / 확신이 안 서.",
    points: [
      "대놓고 반대하지 않고 의심·망설임을 보여주는 표현",
      "about 뒤에는 명사 (this idea, the new schedule)",
      "비슷한 표현: I have some doubts about ___. (~에 좀 의문이 있어)",
    ],
    examples: [
      { en: "I'm not so sure about this idea.", ko: "이 아이디어는 잘 모르겠어." },
      { en: "I'm not so sure about the new schedule.", ko: "새 일정은 확신이 안 서." },
      { en: "I have some doubts about the plan.", ko: "그 계획에 좀 의문이 있어." },
    ],
  },
  {
    id: "sun-09-w3-p5",
    month: "2026-09",
    week: 3,
    topic: W3,
    pattern: "I'd have to disagree with ___.",
    meaning: "~에는 동의하기 어려울 것 같아.",
    points: [
      "I'd = I would. '반대할 수밖에 없겠다'는 정중한 반대",
      "disagree **with** + 사람/의견: x I'd have to disagree about your approach. → o I'd have to disagree with your approach.",
      "비슷한 표현: I don't quite agree with ___.",
      "서로 의견 차이를 인정할 땐: Let's agree to disagree.",
    ],
    examples: [
      { en: "I'd have to disagree with that decision.", ko: "그 결정에는 동의하기 어려울 것 같아." },
      { en: "I'd have to disagree with your approach here.", ko: "이 부분은 네 방식에 동의하기 어려울 것 같아." },
      { en: "I don't quite agree with that.", ko: "그건 잘 동의가 안 돼." },
    ],
  },
];

/** 패턴 영작: 패턴당 5문장 */
export const exercises: SundayExercise[] = [
  // ───────── Week 1 · p1 I'm planning to ─────────
  {
    id: "sun-09-w1-p1-01",
    ko: "나 이번 달에 이사할 계획이야.",
    answers: ["I'm planning to move this month.", "I plan to move this month.", "I'm planning on moving this month."],
    hint: "I'm planning to ___",
  },
  {
    id: "sun-09-w1-p1-02",
    ko: "나 올해 돈을 더 모을 계획이야.",
    answers: ["I'm planning to save more money this year.", "I plan to save more money this year.", "I'm planning on saving more money this year."],
    hint: "I'm planning to ___",
  },
  {
    id: "sun-09-w1-p1-03",
    ko: "나 이번 여름에 해외여행 갈 계획이야.",
    answers: [
      "I'm planning to travel abroad this summer.",
      "I'm planning to go abroad this summer.",
      "I'm planning to travel overseas this summer.",
      "I plan to travel abroad this summer.",
    ],
    hint: "I'm planning to ___",
  },
  {
    id: "sun-09-w1-p1-04",
    ko: "나 이번 주말엔 좀 쉴 계획이야.",
    answers: [
      "I'm planning to get some rest this weekend.",
      "I'm planning to rest this weekend.",
      "I'm planning to relax this weekend.",
      "I plan to get some rest this weekend.",
    ],
    hint: "I'm planning to ___",
  },
  {
    id: "sun-09-w1-p1-05",
    ko: "나 이번 주에 머리 염색할 계획이야.",
    answers: [
      "I'm planning to dye my hair this week.",
      "I'm planning to get my hair dyed this week.",
      "I plan to dye my hair this week.",
    ],
    hint: "I'm planning to ___",
  },

  // ───────── Week 1 · p2 I expect ___ to be ___ ─────────
  {
    id: "sun-09-w1-p2-01",
    ko: "나는 이 시험이 어려울 거라고 예상해.",
    answers: ["I expect this exam to be difficult.", "I expect this exam to be hard.", "I expect this test to be difficult.", "I expect this test to be hard."],
    hint: "I expect ___ to be ___",
  },
  {
    id: "sun-09-w1-p2-02",
    ko: "오늘 밤에 차가 많이 막힐 거라고 예상해.",
    answers: ["I expect traffic to be heavy tonight.", "I expect the traffic to be heavy tonight.", "I expect traffic to be bad tonight.", "I expect the traffic to be bad tonight."],
    hint: "I expect ___ to be ___",
  },
  {
    id: "sun-09-w1-p2-03",
    ko: "회의가 짧을 거라고 예상해.",
    answers: ["I expect the meeting to be short."],
    hint: "I expect ___ to be ___",
  },
  {
    id: "sun-09-w1-p2-04",
    ko: "내일 날씨가 꽤 추울 거라고 예상해.",
    answers: [
      "I expect the weather to be pretty cold tomorrow.",
      "I expect the weather to be quite cold tomorrow.",
      "I expect it to be pretty cold tomorrow.",
      "I expect it to be quite cold tomorrow.",
    ],
    hint: "I expect ___ to be ___",
  },
  {
    id: "sun-09-w1-p2-05",
    ko: "나는 새 직장이 재밌을 거라고 예상해.",
    answers: ["I expect my new job to be fun.", "I expect my new job to be interesting.", "I expect the new job to be fun."],
    hint: "I expect ___ to be ___",
  },

  // ───────── Week 1 · p3 I've been thinking about ─────────
  {
    id: "sun-09-w1-p3-01",
    ko: "나 요즘 새로운 일 시작하는 거 고민하고 있어.",
    answers: [
      "I've been thinking about starting a new job lately.",
      "I've been thinking about starting a new job.",
      "Lately, I've been thinking about starting a new job.",
      "I've been thinking about starting a new job these days.",
    ],
    hint: "I've been thinking about ___",
  },
  {
    id: "sun-09-w1-p3-02",
    ko: "나 요즘 다른 도시로 이사 갈까 고민 중이야.",
    answers: [
      "I've been thinking about moving to another city lately.",
      "I've been thinking about moving to another city.",
      "I've been thinking about moving to a different city.",
      "Lately, I've been thinking about moving to another city.",
    ],
    hint: "I've been thinking about ___",
  },
  {
    id: "sun-09-w1-p3-03",
    ko: "나 요즘 다시 학교 다닐까 고민하고 있어.",
    answers: [
      "I've been thinking about going back to school lately.",
      "I've been thinking about going back to school.",
      "Lately, I've been thinking about going back to school.",
    ],
    hint: "I've been thinking about ___",
  },
  {
    id: "sun-09-w1-p3-04",
    ko: "나 요즘 운동 시작할까 고민 중이야.",
    answers: [
      "I've been thinking about starting to exercise lately.",
      "I've been thinking about starting to exercise.",
      "I've been thinking about starting to work out.",
      "I've been thinking about working out.",
      "I've been thinking about exercising.",
      "Lately, I've been thinking about starting to exercise.",
    ],
    hint: "I've been thinking about ___",
  },
  {
    id: "sun-09-w1-p3-05",
    ko: "나 요즘 새 차 살까 고민하고 있어.",
    answers: [
      "I've been thinking about buying a new car lately.",
      "I've been thinking about buying a new car.",
      "Lately, I've been thinking about buying a new car.",
      "I've been thinking about getting a new car.",
    ],
    hint: "I've been thinking about ___",
  },

  // ───────── Week 1 · p4 I'm not really planning on ─────────
  {
    id: "sun-09-w1-p4-01",
    ko: "나 당분간 직장 옮길 계획은 별로 없어.",
    answers: [
      "I'm not really planning on changing jobs anytime soon.",
      "I'm not really planning on changing my job anytime soon.",
      "I'm not really planning on changing jobs soon.",
      "I'm not really planning to change jobs anytime soon.",
    ],
    hint: "I'm not really planning on ___ing",
  },
  {
    id: "sun-09-w1-p4-02",
    ko: "나 새 차 살 계획은 별로 없어.",
    answers: [
      "I'm not really planning on buying a new car.",
      "I'm not really planning on getting a new car.",
      "I'm not really planning to buy a new car.",
    ],
    hint: "I'm not really planning on ___ing",
  },
  {
    id: "sun-09-w1-p4-03",
    ko: "나 올해 여행 갈 계획은 별로 없어.",
    answers: [
      "I'm not really planning on traveling this year.",
      "I'm not really planning on travelling this year.",
      "I'm not really planning on going on a trip this year.",
      "I'm not really planning to travel this year.",
    ],
    hint: "I'm not really planning on ___ing",
  },
  {
    id: "sun-09-w1-p4-04",
    ko: "나 당분간 이사할 계획은 별로 없어.",
    answers: [
      "I'm not really planning on moving anytime soon.",
      "I'm not really planning on moving soon.",
      "I'm not really planning to move anytime soon.",
    ],
    hint: "I'm not really planning on ___ing",
  },
  {
    id: "sun-09-w1-p4-05",
    ko: "나 이번 주말엔 밖에 나갈 계획은 별로 없어.",
    answers: [
      "I'm not really planning on going out this weekend.",
      "I'm not really planning to go out this weekend.",
    ],
    hint: "I'm not really planning on ___ing",
  },

  // ───────── Week 1 · p5 I used to plan to ~, but now I've decided to ~ ─────────
  {
    id: "sun-09-w1-p5-01",
    ko: "예전엔 일찍 은퇴하려고 했는데, 지금은 계속 일하기로 했어.",
    answers: [
      "I used to plan to retire early, but now I've decided to keep working.",
      "I used to plan on retiring early, but now I've decided to keep working.",
      "I used to plan to retire early, but now I've decided to continue working.",
      "I used to plan to retire early, but now I decided to keep working.",
    ],
    hint: "I used to plan to ___, but now I've decided to ___",
  },
  {
    id: "sun-09-w1-p5-02",
    ko: "예전엔 집을 사려고 했는데, 지금은 월세로 살기로 했어.",
    answers: [
      "I used to plan to buy a house, but now I've decided to rent.",
      "I used to plan on buying a house, but now I've decided to rent.",
      "I used to plan to buy a house, but now I've decided to rent a place.",
      "I used to plan to buy a house, but now I decided to rent.",
    ],
    hint: "I used to plan to ___, but now I've decided to ___",
  },
  {
    id: "sun-09-w1-p5-03",
    ko: "예전엔 해외에서 살려고 했는데, 지금은 여기 있기로 했어.",
    answers: [
      "I used to plan to live abroad, but now I've decided to stay here.",
      "I used to plan on living abroad, but now I've decided to stay here.",
      "I used to plan to live overseas, but now I've decided to stay here.",
      "I used to plan to live abroad, but now I decided to stay here.",
    ],
    hint: "I used to plan to ___, but now I've decided to ___",
  },
  {
    id: "sun-09-w1-p5-04",
    ko: "예전엔 혼자 여행하려고 했는데, 지금은 친구들이랑 가기로 했어.",
    answers: [
      "I used to plan to travel alone, but now I've decided to travel with friends.",
      "I used to plan to travel alone, but now I've decided to travel with my friends.",
      "I used to plan to travel alone, but now I've decided to go with friends.",
      "I used to plan to travel alone, but now I've decided to go with my friends.",
      "I used to plan on traveling alone, but now I've decided to travel with friends.",
    ],
    hint: "I used to plan to ___, but now I've decided to ___",
  },
  {
    id: "sun-09-w1-p5-05",
    ko: "예전엔 대학원에 가려고 했는데, 지금은 일을 시작하기로 했어.",
    answers: [
      "I used to plan to go to grad school, but now I've decided to start working.",
      "I used to plan to go to graduate school, but now I've decided to start working.",
      "I used to plan to go to grad school, but now I've decided to get a job.",
      "I used to plan on going to grad school, but now I've decided to start working.",
    ],
    hint: "I used to plan to ___, but now I've decided to ___",
  },

  // ───────── Week 2 · p1 say / tell ─────────
  {
    id: "sun-09-w2-p1-01",
    ko: "나한테 솔직하게 말해줘.",
    answers: ["Tell me honestly.", "Please tell me honestly.", "Be honest with me.", "Tell me the truth."],
    hint: "say ___ / tell (someone) ___",
  },
  {
    id: "sun-09-w2-p1-02",
    ko: "그녀는 바쁘다고 말했어.",
    answers: ["She said she was busy.", "She said that she was busy."],
    hint: "say ___ / tell (someone) ___",
  },
  {
    id: "sun-09-w2-p1-03",
    ko: "그는 아무 말도 안 했어.",
    answers: ["He didn't say anything.", "He said nothing.", "He didn't say a word."],
    hint: "say ___ / tell (someone) ___",
  },
  {
    id: "sun-09-w2-p1-04",
    ko: "그녀가 나한테 진실을 말해줬어.",
    answers: ["She told me the truth.", "She told the truth to me."],
    hint: "say ___ / tell (someone) ___",
  },
  {
    id: "sun-09-w2-p1-05",
    ko: "나 그 사람한테 미안하다고 말하는 걸 깜빡했어. (그 사람 = 여자)",
    answers: ["I forgot to say sorry to her.", "I forgot to tell her I was sorry.", "I forgot to tell her I'm sorry.", "I forgot to apologize to her."],
    hint: "say ___ / tell (someone) ___",
  },

  // ───────── Week 2 · p2 hear / listen to ─────────
  {
    id: "sun-09-w2-p2-01",
    ko: "나 어젯밤에 이상한 소리를 들었어.",
    answers: ["I heard a strange noise last night.", "I heard a strange sound last night.", "I heard a weird noise last night.", "I heard a weird sound last night."],
    hint: "hear ___ / listen to ___",
  },
  {
    id: "sun-09-w2-p2-02",
    ko: "나는 매일 아침 팟캐스트를 들어.",
    answers: ["I listen to podcasts every morning.", "I listen to a podcast every morning."],
    hint: "hear ___ / listen to ___",
  },
  {
    id: "sun-09-w2-p2-03",
    ko: "나는 라디오를 들어.",
    answers: ["I listen to the radio."],
    hint: "hear ___ / listen to ___",
  },
  {
    id: "sun-09-w2-p2-04",
    ko: "너 새 직장 구했다며? (그렇게 들었어)",
    answers: ["I heard you got a new job.", "I heard that you got a new job.", "I heard you found a new job."],
    hint: "hear ___ / listen to ___",
  },
  {
    id: "sun-09-w2-p2-05",
    ko: "내 말 잘 들어.",
    answers: ["Listen to me carefully.", "Listen carefully to me.", "Listen to me."],
    hint: "hear ___ / listen to ___",
  },

  // ───────── Week 2 · p3 borrow / lend ─────────
  {
    id: "sun-09-w2-p3-01",
    ko: "네 충전기 좀 빌려도 될까?",
    answers: ["Can I borrow your charger?", "Could I borrow your charger?", "May I borrow your charger?"],
    hint: "borrow ___ / lend (someone) ___",
  },
  {
    id: "sun-09-w2-p3-02",
    ko: "나 돈 좀 빌려줄 수 있어?",
    answers: ["Can you lend me some money?", "Could you lend me some money?", "Can I borrow some money?", "Could I borrow some money?"],
    hint: "borrow ___ / lend (someone) ___",
  },
  {
    id: "sun-09-w2-p3-03",
    ko: "우산 좀 빌려도 될까?",
    answers: ["Could I borrow your umbrella?", "Can I borrow your umbrella?", "May I borrow your umbrella?"],
    hint: "borrow ___ / lend (someone) ___",
  },
  {
    id: "sun-09-w2-p3-04",
    ko: "나 도서관에서 이 책 빌렸어.",
    answers: ["I borrowed this book from the library."],
    hint: "borrow ___ / lend (someone) ___",
  },
  {
    id: "sun-09-w2-p3-05",
    ko: "나 주말 동안 친구한테 차를 빌려줬어.",
    answers: [
      "I lent my friend my car for the weekend.",
      "I lent my car to my friend for the weekend.",
      "I lent my friend my car over the weekend.",
      "I lent my car to a friend for the weekend.",
    ],
    hint: "borrow ___ / lend (someone) ___",
  },

  // ───────── Week 3 · p1 In my opinion ─────────
  {
    id: "sun-09-w3-p1-01",
    ko: "내 생각엔 이 계획은 시간이 더 필요해.",
    answers: ["In my opinion, this plan needs more time.", "Personally, I think this plan needs more time.", "The way I see it, this plan needs more time.", "I think this plan needs more time."],
    hint: "In my opinion, ___",
  },
  {
    id: "sun-09-w3-p1-02",
    ko: "내 생각엔 정직이 제일 중요해.",
    answers: [
      "In my opinion, honesty is the most important thing.",
      "In my opinion, honesty is the most important.",
      "In my opinion, honesty is most important.",
      "Personally, I think honesty is the most important thing.",
    ],
    hint: "In my opinion, ___",
  },
  {
    id: "sun-09-w3-p1-03",
    ko: "내 생각엔 우리 이제 그만해야 해.",
    answers: ["In my opinion, we should stop now.", "In my opinion, we should stop.", "The way I see it, we should stop now."],
    hint: "In my opinion, ___",
  },
  {
    id: "sun-09-w3-p1-04",
    ko: "내 생각엔 그 영화 너무 길었어.",
    answers: ["In my opinion, the movie was too long.", "In my opinion, that movie was too long.", "Personally, I think the movie was too long."],
    hint: "In my opinion, ___",
  },
  {
    id: "sun-09-w3-p1-05",
    ko: "내 생각엔 아침 먹는 게 중요해.",
    answers: [
      "In my opinion, eating breakfast is important.",
      "In my opinion, having breakfast is important.",
      "In my opinion, it's important to eat breakfast.",
      "In my opinion, breakfast is important.",
    ],
    hint: "In my opinion, ___",
  },

  // ───────── Week 3 · p2 I totally agree that ─────────
  {
    id: "sun-09-w3-p2-01",
    ko: "우리 좀 쉬어야 한다는 거 완전 동의해.",
    answers: ["I totally agree that we need a break.", "I totally agree that we need to take a break.", "I completely agree that we need a break.", "I totally agree we need a break."],
    hint: "I totally agree that ___",
  },
  {
    id: "sun-09-w3-p2-02",
    ko: "가격이 너무 비싸다는 거 완전 동의해.",
    answers: ["I totally agree that the price is too high.", "I totally agree that it's too expensive.", "I completely agree that the price is too high.", "I totally agree the price is too high."],
    hint: "I totally agree that ___",
  },
  {
    id: "sun-09-w3-p2-03",
    ko: "우리 시간이 더 필요하다는 거 완전 동의해.",
    answers: ["I totally agree that we need more time.", "I completely agree that we need more time.", "I totally agree we need more time."],
    hint: "I totally agree that ___",
  },
  {
    id: "sun-09-w3-p2-04",
    ko: "그 영화 너무 길었다는 거 완전 동의해.",
    answers: ["I totally agree that the movie was too long.", "I totally agree that that movie was too long.", "I completely agree that the movie was too long.", "I totally agree the movie was too long."],
    hint: "I totally agree that ___",
  },
  {
    id: "sun-09-w3-p2-05",
    ko: "운동이 건강에 좋다는 거 완전 동의해.",
    answers: [
      "I totally agree that exercise is good for your health.",
      "I totally agree that exercise is good for health.",
      "I totally agree that exercise is good for you.",
      "I totally agree that exercising is good for your health.",
      "I completely agree that exercise is good for your health.",
    ],
    hint: "I totally agree that ___",
  },

  // ───────── Week 3 · p3 I see your point, but ─────────
  {
    id: "sun-09-w3-p3-01",
    ko: "무슨 말인지 알겠는데, 난 우리가 기다려야 한다고 생각해.",
    answers: ["I see your point, but I think we should wait.", "I see your point, but I think we need to wait.", "I understand what you're saying, but I think we should wait."],
    hint: "I see your point, but ___",
  },
  {
    id: "sun-09-w3-p3-02",
    ko: "무슨 말인지 알겠는데, 완전히 납득되진 않아.",
    answers: ["I see your point, but I'm not fully convinced.", "I see your point, but I'm not completely convinced.", "I see your point, but I'm not totally convinced."],
    hint: "I see your point, but ___",
  },
  {
    id: "sun-09-w3-p3-03",
    ko: "무슨 말인지 알겠는데, 그건 너무 비싸.",
    answers: ["I see your point, but it's too expensive.", "I see your point, but that's too expensive."],
    hint: "I see your point, but ___",
  },
  {
    id: "sun-09-w3-p3-04",
    ko: "무슨 말인지 알겠는데, 난 아직 걱정돼.",
    answers: ["I see your point, but I'm still worried.", "I see your point, but I still have concerns.", "I see your point, but I'm still concerned."],
    hint: "I see your point, but ___",
  },
  {
    id: "sun-09-w3-p3-05",
    ko: "무슨 말인지 알겠는데, 난 생각이 좀 달라.",
    answers: [
      "I see your point, but I think differently.",
      "I see your point, but I see it differently.",
      "I see your point, but I feel differently.",
      "I see your point, but I have a different opinion.",
      "I see your point, but I think a little differently.",
    ],
    hint: "I see your point, but ___",
  },

  // ───────── Week 3 · p4 I'm not so sure about ─────────
  {
    id: "sun-09-w3-p4-01",
    ko: "이 아이디어는 잘 모르겠어.",
    answers: ["I'm not so sure about this idea."],
    hint: "I'm not so sure about ___",
  },
  {
    id: "sun-09-w3-p4-02",
    ko: "새 일정은 확신이 안 서.",
    answers: ["I'm not so sure about the new schedule.", "I'm not so sure about this new schedule."],
    hint: "I'm not so sure about ___",
  },
  {
    id: "sun-09-w3-p4-03",
    ko: "그 계획은 잘 모르겠어.",
    answers: ["I'm not so sure about that plan.", "I'm not so sure about the plan."],
    hint: "I'm not so sure about ___",
  },
  {
    id: "sun-09-w3-p4-04",
    ko: "(친구가 추천한) 그 식당은 잘 모르겠어.",
    answers: ["I'm not so sure about that restaurant.", "I'm not so sure about the restaurant."],
    hint: "I'm not so sure about ___",
  },
  {
    id: "sun-09-w3-p4-05",
    ko: "이번 여행 계획은 확신이 안 서.",
    answers: ["I'm not so sure about this trip plan.", "I'm not so sure about this travel plan.", "I'm not so sure about the travel plan.", "I'm not so sure about this trip."],
    hint: "I'm not so sure about ___",
  },

  // ───────── Week 3 · p5 I'd have to disagree with ─────────
  {
    id: "sun-09-w3-p5-01",
    ko: "그 결정에는 동의하기 어려울 것 같아.",
    answers: ["I'd have to disagree with that decision.", "I'd have to disagree with the decision."],
    hint: "I'd have to disagree with ___",
  },
  {
    id: "sun-09-w3-p5-02",
    ko: "네 방식에는 동의하기 어려울 것 같아.",
    answers: ["I'd have to disagree with your approach.", "I'd have to disagree with your way.", "I'd have to disagree with your method."],
    hint: "I'd have to disagree with ___",
  },
  {
    id: "sun-09-w3-p5-03",
    ko: "그 의견에는 동의하기 어려울 것 같아.",
    answers: ["I'd have to disagree with that opinion.", "I'd have to disagree with that view.", "I'd have to disagree with that."],
    hint: "I'd have to disagree with ___",
  },
  {
    id: "sun-09-w3-p5-04",
    ko: "(정중하게) 너한테는 동의하기 어려울 것 같아.",
    answers: ["I'd have to disagree with you."],
    hint: "I'd have to disagree with ___",
  },
  {
    id: "sun-09-w3-p5-05",
    ko: "그 새 규칙에는 동의하기 어려울 것 같아.",
    answers: ["I'd have to disagree with that new rule.", "I'd have to disagree with the new rule."],
    hint: "I'd have to disagree with ___",
  },
];

/** 표현 퀴즈 */
export const expressions: SundayExercise[] = [
  {
    id: "sun-09-x01",
    ko: "나 올해 영어 공부 계속할 생각이야. (intend ~)",
    answers: ["I intend to keep studying English this year.", "I intend to continue studying English this year.", "I intend to study English this year."],
    hint: "intend to = ~할 의도이다",
    note: "I intend to finish this by Friday.",
  },
  {
    id: "sun-09-x02",
    ko: "나 내년에 유학 갈 계획이야. (plan on ~)",
    answers: ["I plan on studying abroad next year.", "I'm planning on studying abroad next year."],
    hint: "plan on + -ing = ~할 계획이다",
    note: "I plan on staying home tonight.",
  },
  {
    id: "sun-09-x03",
    ko: "나 아직 결정 못 내렸어. (make ~)",
    answers: ["I haven't made a decision yet.", "I didn't make a decision yet.", "I haven't made a decision."],
    hint: "make a decision = 결정을 내리다",
    note: "You need to make a decision soon.",
  },
  {
    id: "sun-09-x04",
    ko: "나 마음 바꿨어. (change ~)",
    answers: ["I changed my mind.", "I've changed my mind."],
    hint: "change one's mind = 마음을 바꾸다",
    note: "She changed her mind at the last minute.",
  },
  {
    id: "sun-09-x05",
    ko: "우리 커피 마시면서 근황 얘기했어. (catch ~)",
    answers: ["We caught up over coffee.", "We caught up while having coffee.", "We caught up while drinking coffee.", "We caught up over a coffee."],
    hint: "catch up = 서로 근황을 나누다 (과거 caught up)",
    note: "Let's catch up sometime!",
  },
  {
    id: "sun-09-x06",
    ko: "너 좀 쉬어야 해. (get ~)",
    answers: ["You need to get some rest.", "You should get some rest."],
    hint: "get some rest = 좀 쉬다",
    note: "Go home and get some rest.",
  },
  {
    id: "sun-09-x07",
    ko: "그 영화 알고 보니 진짜 재밌었어. (turn ~)",
    answers: ["The movie turned out to be really fun.", "The movie turned out to be really good.", "The movie turned out to be really interesting.", "That movie turned out to be really good."],
    hint: "turn out = (예상과 달리) 결과가 ~로 드러나다",
    note: "The test turned out to be easy.",
  },
  {
    id: "sun-09-x08",
    ko: "비가 오기 시작해서 우리는 결국 집에 돌아갔어. (end ~)",
    answers: [
      "It started raining, so we ended up going back home.",
      "It started raining, so we ended up going home.",
      "It started to rain, so we ended up going back home.",
      "It started to rain, so we ended up going home.",
      "We ended up going home because it started raining.",
    ],
    hint: "end up + -ing = 결국 ~하게 되다",
    note: "We ended up staying up all night.",
  },
  {
    id: "sun-09-x09",
    ko: "모든 게 순조롭게 진행됐어. (go ~)",
    answers: ["Everything went smoothly."],
    hint: "go smoothly = 순조롭게 진행되다",
    note: "I hope the meeting goes smoothly.",
  },
  {
    id: "sun-09-x10",
    ko: "그녀는 눈이 높아. (standards)",
    answers: ["She has high standards.", "She has really high standards.", "She has very high standards."],
    hint: "have high standards = 기준이 높다, 눈이 높다",
    note: "My boss has really high standards.",
  },
  {
    id: "sun-09-x11",
    ko: "내 룸메이트는 성격이 무던해. (easy~)",
    answers: ["My roommate is easygoing.", "My roommate is very easygoing.", "My roommate is really easygoing."],
    hint: "easygoing = 느긋하고 둥글둥글한",
    note: "He's so easygoing that nothing bothers him.",
  },
  {
    id: "sun-09-x12",
    ko: "너 이상형이 뭐야? (type)",
    answers: ["What's your type?", "What's your ideal type?"],
    hint: "type = 이상형",
    note: "Honestly, he's not really my type.",
  },
  {
    id: "sun-09-x13",
    ko: "나 그거 계속 미루고 있어. (put ~)",
    answers: ["I keep putting it off.", "I've been putting it off."],
    hint: "put off = (일부러) 미루다",
    note: "Stop putting off your homework!",
  },
  {
    id: "sun-09-x14",
    ko: "나 장단점을 따져보고 있어. (weigh ~)",
    answers: ["I'm weighing the pros and cons.", "I've been weighing the pros and cons."],
    hint: "weigh the pros and cons = 장단점을 따지다",
    note: "Let's weigh the pros and cons before we decide.",
  },
  {
    id: "sun-09-x15",
    ko: "나 당분간은 이사 안 할 거야. (anytime ~)",
    answers: ["I'm not moving anytime soon.", "I won't move anytime soon.", "I'm not going to move anytime soon.", "I won't be moving anytime soon."],
    hint: "not ~ anytime soon = 당분간은 ~ 안 하다",
    note: "The rain won't stop anytime soon.",
  },
  {
    id: "sun-09-x16",
    ko: "나 선의의 거짓말 했어. (white ~)",
    answers: ["I told a white lie."],
    hint: "tell a white lie = 선의의 거짓말을 하다",
    note: "I told a white lie so she wouldn't feel bad.",
  },
  {
    id: "sun-09-x17",
    ko: "나 거짓말하다 들켰어. (get ~)",
    answers: ["I got caught lying.", "I got caught telling a lie."],
    hint: "get caught = 들키다",
    note: "He got caught sleeping in class.",
  },
  {
    id: "sun-09-x18",
    ko: "결국 나 솔직하게 털어놨어. (come ~)",
    answers: ["I finally came clean.", "In the end, I came clean.", "I came clean in the end.", "I eventually came clean."],
    hint: "come clean = 솔직히 털어놓다",
    note: "You should just come clean and tell her.",
  },
  {
    id: "sun-09-x19",
    ko: "나 원래 오늘 운동하기로 되어 있었어. (supposed ~)",
    answers: ["I was supposed to work out today.", "I was supposed to exercise today.", "I was supposed to go to the gym today."],
    hint: "be supposed to = 원래 ~하기로 되어 있다",
    note: "We were supposed to meet at 7.",
  },
  {
    id: "sun-09-x20",
    ko: "그냥 하기 싫었어. (feel ~)",
    answers: ["I just didn't feel like it.", "I didn't feel like it."],
    hint: "feel like (it / -ing) = ~하고 싶다",
    note: "I don't feel like cooking tonight.",
  },
  {
    id: "sun-09-x21",
    ko: "이게 내가 제일 자주 듣는 노래야. (go-to)",
    answers: ["This is my go-to song.", "This is my go-to song to listen to."],
    hint: "go-to = 늘 찾는, 단골의",
    note: "Pizza is my go-to comfort food.",
  },
  {
    id: "sun-09-x22",
    ko: "나 배경 소음은 그냥 신경 안 써. (tune ~)",
    answers: ["I just tune out the background noise.", "I just tune out background noise.", "I tune out the background noise.", "I tune out background noise."],
    hint: "tune out = 신경 끄다, 흘려듣다",
    note: "I put on music to tune out the noise.",
  },
  {
    id: "sun-09-x23",
    ko: "그 색 너한테 잘 어울려. (suit)",
    answers: ["That color suits you.", "That color really suits you.", "That color suits you well.", "That colour suits you."],
    hint: "suit (사람) = ~에게 어울리다",
    note: "Short hair really suits you.",
  },
  {
    id: "sun-09-x24",
    ko: "좀 더 크게 말해줄래? (speak)",
    answers: ["Can you speak louder?", "Could you speak louder?", "Can you speak up?", "Could you speak up?", "Can you speak a little louder?"],
    hint: "speak = 말하다 (발화 행위, 격식)",
    note: "I need to speak to your manager.",
  },
  {
    id: "sun-09-x25",
    ko: "내가 보기엔 우리가 먼저 사과해야 해. (The way ~)",
    answers: ["The way I see it, we should apologize first.", "The way I see it, we should say sorry first.", "The way I see it, we need to apologize first."],
    hint: "The way I see it, ~ = 내가 봤을 때",
    note: "The way I see it, it's nobody's fault.",
  },
  {
    id: "sun-09-x26",
    ko: "A: 월요일 너무 싫어. B: 내 말이! (Tell ~)",
    answers: ["Tell me about it!", "Tell me about it."],
    hint: "Tell me about it. = 내 말이! (강한 공감)",
    note: "A: It's so hot today. B: Tell me about it.",
  },
  {
    id: "sun-09-x27",
    ko: "우리 그냥 서로 생각이 다르다는 걸 인정하자. (agree ~)",
    answers: ["Let's just agree to disagree.", "Let's agree to disagree."],
    hint: "agree to disagree = 의견 차이를 인정하다",
    note: "We never agree on politics, so we agree to disagree.",
  },
  {
    id: "sun-09-x28",
    ko: "우리는 그 문제에 대해 의견이 안 맞아. (see ~)",
    answers: ["We don't see eye to eye on that.", "We don't see eye to eye on that issue.", "We don't see eye to eye on this.", "We don't see eye to eye on that problem."],
    hint: "see eye to eye = 의견이 일치하다",
    note: "My sister and I don't always see eye to eye.",
  },
  {
    id: "sun-09-x29",
    ko: "나는 무례한 건 절대 못 참아. (zero ~)",
    answers: ["I have zero tolerance for rudeness.", "I have zero tolerance for rude people.", "I have zero tolerance for rude behavior."],
    hint: "have zero tolerance for = ~을 전혀 용납 못하다",
    note: "I have zero tolerance for loud chewing.",
  },
  {
    id: "sun-09-x30",
    ko: "나 그 일자리 붙길 간절히 바라고 있어. (fingers ~)",
    answers: ["I'm keeping my fingers crossed that I get the job.", "I'm keeping my fingers crossed for the job.", "I'm keeping my fingers crossed that I'll get the job."],
    hint: "keep one's fingers crossed = 간절히 바라다, 행운을 빌다",
    note: "I'm keeping my fingers crossed that it doesn't rain tomorrow.",
  },
];
