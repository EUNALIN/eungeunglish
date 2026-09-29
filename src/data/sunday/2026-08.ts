import type { SundayExercise, SundayPattern } from "@/lib/types";

const W1 = "나의 성향과 일상 말하기";
const W2 = "헷갈리는 기본 동사 바로잡기";
const W3 = "못 알아들었을 때 & 오해 풀기";
const W4 = "복습 & 더 자연스럽게 말하기";

export const patterns: SundayPattern[] = [
  // ───────── Week 1 ─────────
  {
    id: "sun-08-w1-p1",
    month: "2026-08",
    week: 1,
    topic: W1,
    pattern: "I tend to ___.",
    meaning: "나는 ~하는 편이야 / ~하는 경향이 있어",
    points: [
      "평소 자주 하는 행동·습관을 말할 때 써",
      "**tend to + 동사원형**: x I tend to eating late → o I tend to eat late",
      "주어가 3인칭이면 tends: She tends to speak quickly.",
      "'When I'm stressed, I tend to ___.'처럼 상황을 붙이면 더 자연스러워",
    ],
    examples: [
      { en: "I tend to worry too much.", ko: "나는 걱정을 너무 많이 하는 편이야." },
      { en: "I tend to stay up late.", ko: "나는 늦게까지 안 자는 편이야." },
      { en: "I tend to get quiet around new people.", ko: "나는 처음 보는 사람들 앞에서 말수가 적어지는 편이야." },
      { en: "She tends to speak quickly.", ko: "걔는 말을 빨리 하는 편이야." },
    ],
  },
  {
    id: "sun-08-w1-p2",
    month: "2026-08",
    week: 1,
    topic: W1,
    pattern: "I find it easy/difficult to ___.",
    meaning: "나는 ~하는 게 쉽다/어렵다고 느껴",
    points: [
      "'내가 개인적으로 느끼기에' 쉽거나 어려운 일을 말할 때 써",
      "**find it + 형용사 + to 동사원형**: it을 빼면 안 돼! x I find difficult to wake up early → o I find it difficult to wake up early",
      "It's difficult to ___. 는 일반적인 사실, I find it difficult to ___. 는 내 느낌",
      "과거 경험이면 found: I found it hard to say no.",
    ],
    examples: [
      { en: "I find it difficult to wake up early.", ko: "나는 일찍 일어나는 게 어려워." },
      { en: "I find it hard to say no.", ko: "나는 거절하는 게 어려워." },
      { en: "I find it easy to talk to strangers.", ko: "나는 낯선 사람이랑 얘기하는 게 쉬워." },
    ],
  },
  {
    id: "sun-08-w1-p3",
    month: "2026-08",
    week: 1,
    topic: W1,
    pattern: "I've been trying to ___.",
    meaning: "나 요즘 계속 ~하려고 노력하고 있어",
    points: [
      "최근에 시작해서 계속 노력 중인 일을 말할 때 써",
      "**have been trying to + 동사원형**: x I've been trying exercise more → o I've been trying to exercise more",
      "I'm trying to ___ = 지금 노력 중 / I've been trying to ___ = 한동안 계속 노력해 왔음",
      "lately, these days를 붙이면 '요즘' 느낌이 더 살아",
    ],
    examples: [
      { en: "I've been trying to exercise more.", ko: "나 요즘 운동을 더 하려고 노력하고 있어." },
      { en: "I've been trying to save money.", ko: "나 요즘 돈을 아끼려고 노력하고 있어." },
      { en: "I've been trying to spend less time on my phone.", ko: "나 요즘 휴대폰 보는 시간을 줄이려고 노력 중이야." },
    ],
  },
  {
    id: "sun-08-w1-p4",
    month: "2026-08",
    week: 1,
    topic: W1,
    pattern: "I'm still working on ___.",
    meaning: "나 아직 ~을 개선하려고 노력 중이야",
    points: [
      "아직 완벽하진 않지만 꾸준히 연습하고 고치는 중인 걸 말할 때 써",
      "**work on + 명사 / -ing**: x I'm working on to speak clearly → o I'm working on speaking clearly",
      "식당에서 점원이 접시를 치우려 할 때 I'm still working on it. = 아직 먹고 있어요",
    ],
    examples: [
      { en: "I'm still working on my English.", ko: "나 영어는 아직 연습 중이야." },
      { en: "I'm still working on my confidence.", ko: "나 아직 자신감 키우는 중이야." },
      { en: "I'm still working on managing my time better.", ko: "나 아직 시간 관리 더 잘하려고 노력 중이야." },
    ],
  },
  {
    id: "sun-08-w1-p5",
    month: "2026-08",
    week: 1,
    topic: W1,
    pattern: "I used to ___, but now ___.",
    meaning: "예전에는 ~했는데, 지금은 ~해",
    points: [
      "과거 습관·상태가 지금은 달라졌다는 걸 말할 때 써",
      "**used to + 동사원형**: x I used to drank a lot of coffee → o I used to drink a lot of coffee",
      "used to 자체에 '예전에'가 들어 있어서 before를 굳이 안 붙여도 돼",
      "but now 뒤엔 완전한 문장! x but now not → o but now I'm more outgoing",
      "질문은 Did you use to ___? (use, d 없음)",
    ],
    examples: [
      { en: "I used to be shy, but now I'm more outgoing.", ko: "예전엔 낯을 가렸는데 지금은 더 외향적이야." },
      { en: "I used to hate cooking, but now I enjoy it.", ko: "예전엔 요리를 싫어했는데 지금은 즐겨." },
      { en: "I used to work out every day, but now I'm too busy.", ko: "예전엔 매일 운동했는데 지금은 너무 바빠." },
    ],
  },

  // ───────── Week 2 ─────────
  {
    id: "sun-08-w2-p1",
    month: "2026-08",
    week: 2,
    topic: W2,
    pattern: "make a ___ (mistake / decision / plans)",
    meaning: "(무언가를 만들어 내다) 실수하다, 결정하다, 계획을 세우다",
    points: [
      "make = 뭔가를 만들거나 새로운 결과를 만들어 낼 때",
      "자주 쓰는 조합: make a mistake / a decision / plans / money / an appointment / an excuse / coffee",
      "x I did a mistake → o I made a mistake",
      "예약도 make: make a reservation, make an appointment",
    ],
    examples: [
      { en: "I made a mistake at work.", ko: "나 회사에서 실수했어." },
      { en: "We need to make a decision.", ko: "우리 결정을 내려야 해." },
      { en: "I need to make an appointment.", ko: "나 예약 잡아야 해." },
      { en: "I made dinner last night.", ko: "나 어젯밤에 저녁 만들었어." },
    ],
  },
  {
    id: "sun-08-w2-p2",
    month: "2026-08",
    week: 2,
    topic: W2,
    pattern: "do the ___ (dishes / laundry / homework)",
    meaning: "(일·과제·집안일을) 하다",
    points: [
      "do = 이미 정해진 일·과제·활동을 수행할 때 (자잘한 할 일)",
      "자주 쓰는 조합: do homework / housework / the dishes / the laundry / my best / my hair / some work",
      "x I made my homework → o I did my homework",
      "x I make the laundry → o I do the laundry",
    ],
    examples: [
      { en: "I did the dishes after dinner.", ko: "나 저녁 먹고 설거지했어." },
      { en: "I have to do the laundry.", ko: "나 빨래해야 해." },
      { en: "I'll do my best.", ko: "최선을 다할게." },
      { en: "I have some work to do.", ko: "나 할 일이 좀 있어." },
    ],
  },
  {
    id: "sun-08-w2-p3",
    month: "2026-08",
    week: 2,
    topic: W2,
    pattern: "I spend ___ on ___ / ___ing.",
    meaning: "나는 (시간·돈을) ~에 써",
    points: [
      "spend는 **사람이 주어**!",
      "돈: 사람 + spend + 돈 + **on + 명사** (I spend a lot of money on food.)",
      "시간: 사람 + spend + 시간 + **-ing** (I spend two hours commuting.)",
      "x I spent 30 minutes to get to work → spend 뒤엔 to 동사원형 X",
      "x I take two hours watching TV → o I spend two hours watching TV",
    ],
    examples: [
      { en: "I spend a lot of money on food.", ko: "나는 음식에 돈을 많이 써." },
      { en: "I spent all day cleaning.", ko: "나 하루 종일 청소했어." },
      { en: "She spends a lot of time watching YouTube.", ko: "걔는 유튜브 보는 데 시간을 많이 써." },
    ],
  },
  {
    id: "sun-08-w2-p4",
    month: "2026-08",
    week: 2,
    topic: W2,
    pattern: "It takes me ___ to ___.",
    meaning: "나는 ~하는 데 (시간이) ~ 걸려",
    points: [
      "take는 **It이 주어**: It takes + 사람 + 시간 + to 동사원형",
      "x It spends 30 minutes → o It takes 30 minutes",
      "x I spent 30 minutes to get to work → o It took me 30 minutes to get to work",
      "질문: How long does it take (you) to ___?",
      "같은 뜻 spend 버전: I spend one hour exercising. = It takes me one hour to exercise.",
    ],
    examples: [
      { en: "It takes me 30 minutes to get to work.", ko: "나는 출근하는 데 30분 걸려." },
      { en: "It took us two hours to get there.", ko: "우리 거기 가는 데 두 시간 걸렸어." },
      { en: "How long does it take you to get ready?", ko: "너는 준비하는 데 얼마나 걸려?" },
    ],
  },
  {
    id: "sun-08-w2-p5",
    month: "2026-08",
    week: 2,
    topic: W2,
    pattern: "Can you bring ___?",
    meaning: "~ 좀 가져와 줄래? (bring = 이쪽으로 가져오다)",
    points: [
      "bring = 말하는 사람 쪽이나 목적지(상대가 올 곳)로 물건을 가져오다",
      "Bring it here. = 이쪽으로 가져와.",
      "x Can you take your laptop here tomorrow? → o Can you bring your laptop tomorrow?",
      "파티에 초대받아서 '간식 가져갈게'도 목적지(파티) 기준이라 bring: I'll bring some snacks to the party.",
    ],
    examples: [
      { en: "Can you bring me some water?", ko: "물 좀 갖다줄래?" },
      { en: "Please bring your ID.", ko: "신분증 가져오세요." },
      { en: "I'll bring some snacks to the party.", ko: "파티에 간식 좀 가져갈게." },
    ],
  },
  {
    id: "sun-08-w2-p6",
    month: "2026-08",
    week: 2,
    topic: W2,
    pattern: "Don't forget to take ___ (with you).",
    meaning: "~ 가져가는 거 잊지 마 (take = 여기서 다른 곳으로 가져가다)",
    points: [
      "take = 지금 있는 곳에서 다른 곳으로 가져가다",
      "Take it there. = 저쪽으로 가져가.",
      "take ___ with me/you = ~을 챙겨 가다",
      "헷갈리면: 이쪽으로 오면 bring, 저쪽으로 나가면 take",
    ],
    examples: [
      { en: "Don't forget to take your umbrella.", ko: "우산 챙겨 가는 거 잊지 마." },
      { en: "I'll take this bag home.", ko: "이 가방은 집에 가져갈게." },
      { en: "You can take the rest with you.", ko: "남은 건 가져가도 돼." },
    ],
  },

  // ───────── Week 3 ─────────
  {
    id: "sun-08-w3-p1",
    month: "2026-08",
    week: 3,
    topic: W3,
    pattern: "Sorry, I didn't catch that.",
    meaning: "죄송한데 잘 못 들었어요",
    points: [
      "catch = (말을) 알아듣다, 캐치하다",
      "발음: didn't → '디른'처럼 부드럽게",
      "못 들은 부분을 콕 집어서: I didn't catch the last part / your name.",
      "짧게 Sorry? / Pardon? 도 OK. Excuse me? 는 억양에 따라 '뭐라고요?!' 하고 따지는 느낌이 될 수 있어",
    ],
    examples: [
      { en: "Sorry, I didn't catch that.", ko: "죄송한데 잘 못 들었어요." },
      { en: "I didn't catch the last part.", ko: "마지막 부분을 못 들었어." },
      { en: "Sorry, I didn't catch your name.", ko: "미안, 이름을 못 들었어." },
    ],
  },
  {
    id: "sun-08-w3-p2",
    month: "2026-08",
    week: 3,
    topic: W3,
    pattern: "Could you say that again?",
    meaning: "다시 말씀해 주실 수 있나요?",
    points: [
      "x Can you say again? → that을 빼면 안 돼! o Could you say that again?",
      "Could가 Can보다 더 공손해",
      "비슷한 표현: Could you repeat that? / One more time, please.",
      "발음: '쿠쥬 세이 대러겐'처럼 이어서",
    ],
    examples: [
      { en: "Could you say that again?", ko: "다시 말씀해 주시겠어요?" },
      { en: "Could you repeat that?", ko: "다시 한번 말해 주실래요?" },
      { en: "Could you say the last part again?", ko: "마지막 부분 다시 말해 줄 수 있어?" },
    ],
  },
  {
    id: "sun-08-w3-p3",
    month: "2026-08",
    week: 3,
    topic: W3,
    pattern: "Could you speak a little more slowly?",
    meaning: "조금만 더 천천히 말씀해 주시겠어요?",
    points: [
      "speak를 꾸미니까 부사 slowly! (x speak more slow)",
      "비슷한 표현: Could you slow down a little?",
      "상황 설명: You're speaking a little fast. (말이 좀 빨라요)",
      "speak 대신 explain, say 등으로 바꿔서도 써: Could you explain that a little more slowly?",
    ],
    examples: [
      { en: "Could you speak a little more slowly?", ko: "조금만 더 천천히 말씀해 주시겠어요?" },
      { en: "Could you slow down a little?", ko: "조금만 천천히 해 주실래요?" },
      { en: "You're speaking a little fast.", ko: "말씀이 조금 빨라요." },
    ],
  },
  {
    id: "sun-08-w3-p4",
    month: "2026-08",
    week: 3,
    topic: W3,
    pattern: "Do you mean ___?",
    meaning: "~라는 뜻이에요? / ~ 말하는 거예요?",
    points: [
      "내가 제대로 이해했는지 확인할 때 써",
      "뒤에 명사도, 문장도 올 수 있어: Do you mean tomorrow? / Do you mean I need to pay now?",
      "캐주얼하게 Do를 빼고 You mean ___? 도 많이 써",
      "단어 뜻 물을 땐: x What means this word? → o What does this word mean?",
    ],
    examples: [
      { en: "Do you mean tomorrow?", ko: "내일 말하는 거예요?" },
      { en: "Do you mean I need to pay now?", ko: "제가 지금 돈을 내야 한다는 뜻인가요?" },
      { en: "You mean this bus?", ko: "이 버스 말하는 거야?" },
    ],
  },
  {
    id: "sun-08-w3-p5",
    month: "2026-08",
    week: 3,
    topic: W3,
    pattern: "That's not what I meant. (What I meant was ___.)",
    meaning: "제 말은 그런 뜻이 아니었어요 (제 말은 ~라는 거였어요)",
    points: [
      "x That's not my meaning. → o That's not what I meant.",
      "발음: t/d + 모음은 'ㄹ'처럼 → '댓츠낫 와라이 멘t'",
      "바로 이어서 What I meant was ___. 로 다시 설명하면 완벽",
      "지금 하는 말을 정리할 땐 현재형 What I mean is ___.",
      "Let me explain. (설명할게) 도 같이 쓰면 좋아",
    ],
    examples: [
      { en: "That's not what I meant.", ko: "그런 뜻이 아니었어." },
      { en: "What I meant was we should leave early.", ko: "내 말은 우리가 일찍 출발해야 한다는 거였어." },
      { en: "That's not what I meant. Let me explain.", ko: "그런 뜻이 아니야. 설명할게." },
    ],
  },

  // ───────── Week 4 (Level Up) ─────────
  {
    id: "sun-08-w4-p1",
    month: "2026-08",
    week: 4,
    topic: W4,
    pattern: "I find myself ___ing.",
    meaning: "나도 모르게 ~하게 돼 / 어느새 ~하고 있더라",
    points: [
      "I tend to ___ 의 레벨업 버전: '정신 차려 보면 내가 ~하고 있더라'",
      "**find myself + -ing**: x I find myself to check my phone → o I find myself checking my phone",
      "usually, always를 넣어도 자연스러워: I usually find myself eating more when I'm stressed.",
    ],
    examples: [
      { en: "I usually find myself eating more when I'm stressed.", ko: "스트레스 받으면 나도 모르게 더 먹게 되더라." },
      { en: "I find myself checking my phone all the time.", ko: "나도 모르게 계속 핸드폰을 확인해." },
      { en: "I find myself staying up late.", ko: "나도 모르게 늦게까지 안 자게 돼." },
    ],
  },
  {
    id: "sun-08-w4-p2",
    month: "2026-08",
    week: 4,
    topic: W4,
    pattern: "Most of my ___ goes to ___.",
    meaning: "내 ~의 대부분은 ~에 들어가",
    points: [
      "go to = 돈·시간 등이 ~에 들어가다, 쓰이다",
      "I spend a lot of money on food. → Most of my money goes to food.",
      "money, time은 셀 수 없는 명사라 goes (단수 동사)",
      "뒤에 명사 또는 -ing: Most of my free time goes to watching YouTube.",
    ],
    examples: [
      { en: "Most of my money goes to food.", ko: "내 돈 대부분이 먹는 데 들어가." },
      { en: "Most of my free time goes to watching YouTube.", ko: "내 여가 시간 대부분은 유튜브 보는 데 써." },
      { en: "Most of my salary goes to rent.", ko: "내 월급 대부분은 월세로 나가." },
    ],
  },
  {
    id: "sun-08-w4-p3",
    month: "2026-08",
    week: 4,
    topic: W4,
    pattern: "You lost me (at ___).",
    meaning: "나 (~부터) 이해 못 했어 / 못 따라갔어",
    points: [
      "상대 설명을 따라가다가 중간부터 이해가 안 될 때 쓰는 캐주얼한 표현",
      "어디서 놓쳤는지: You lost me at the last part.",
      "I didn't catch that. = 말을 못 들음 / You lost me. = 내용을 못 따라감",
      "주어가 You라서 '네가 나를 잃었다'가 아니라 '(설명하다가) 나를 놓쳤다'는 느낌",
    ],
    examples: [
      { en: "You lost me.", ko: "나 거기서부터 이해 못 했어." },
      { en: "You lost me at the last part.", ko: "마지막 부분부터 이해 못 했어." },
      { en: "Wait, you lost me. Could you explain that again?", ko: "잠깐, 이해 못 했어. 다시 설명해 줄래?" },
    ],
  },
];

/** 패턴 영작: 패턴당 5문장 */
export const exercises: SundayExercise[] = [
  // W1 P1 — I tend to ___.
  {
    id: "sun-08-w1-p1-01",
    ko: "나는 스트레스 받으면 과식하는 편이야.",
    answers: [
      "I tend to overeat when I'm stressed.",
      "I tend to overeat when I get stressed.",
      "When I'm stressed, I tend to overeat.",
      "When I get stressed, I tend to overeat.",
      "I tend to eat too much when I'm stressed.",
      "I tend to eat too much when I get stressed.",
    ],
    hint: "I tend to ___",
  },
  {
    id: "sun-08-w1-p1-02",
    ko: "나는 늦게까지 안 자는 편이야.",
    answers: ["I tend to stay up late.", "I tend to go to bed late.", "I tend to sleep late."],
    hint: "I tend to ___",
  },
  {
    id: "sun-08-w1-p1-03",
    ko: "나는 식당에서 늘 같은 메뉴를 시키는 편이야.",
    answers: [
      "I tend to order the same thing at restaurants.",
      "I tend to order the same food at restaurants.",
      "I tend to order the same thing every time at restaurants.",
      "At restaurants, I tend to order the same thing.",
      "I tend to always order the same thing at restaurants.",
    ],
    hint: "I tend to ___",
  },
  {
    id: "sun-08-w1-p1-04",
    ko: "나는 (약속에) 일찍 도착하는 편이야.",
    answers: [
      "I tend to arrive early.",
      "I tend to get there early.",
      "I tend to come early.",
      "I tend to arrive early for appointments.",
    ],
    hint: "I tend to ___",
  },
  {
    id: "sun-08-w1-p1-05",
    ko: "나는 처음 보는 사람들 앞에서 말수가 적어지는 편이야.",
    answers: [
      "I tend to get quiet around new people.",
      "I tend to get quiet around strangers.",
      "I tend to get quiet around people I don't know.",
      "I tend to become quiet around new people.",
      "I tend to be quiet around new people.",
    ],
    hint: "I tend to ___",
  },

  // W1 P2 — I find it easy/difficult to ___.
  {
    id: "sun-08-w1-p2-01",
    ko: "나는 거절하는 게 어려워.",
    answers: ["I find it hard to say no.", "I find it difficult to say no."],
    hint: "I find it easy/difficult to ___",
  },
  {
    id: "sun-08-w1-p2-02",
    ko: "나는 일찍 일어나는 게 힘들어.",
    answers: [
      "I find it hard to wake up early.",
      "I find it difficult to wake up early.",
      "I find it hard to get up early.",
      "I find it difficult to get up early.",
    ],
    hint: "I find it easy/difficult to ___",
  },
  {
    id: "sun-08-w1-p2-03",
    ko: "나는 낯선 사람이랑 얘기하는 게 쉬워.",
    answers: ["I find it easy to talk to strangers.", "I find it easy to talk with strangers."],
    hint: "I find it easy/difficult to ___",
  },
  {
    id: "sun-08-w1-p2-04",
    ko: "나는 집중을 유지하는 게 어려워.",
    answers: [
      "I find it difficult to stay focused.",
      "I find it hard to stay focused.",
      "I find it difficult to focus.",
      "I find it hard to focus.",
    ],
    hint: "I find it easy/difficult to ___",
  },
  {
    id: "sun-08-w1-p2-05",
    ko: "나는 내 감정을 표현하는 게 어려워.",
    answers: [
      "I find it hard to express my feelings.",
      "I find it difficult to express my feelings.",
      "I find it hard to express my emotions.",
      "I find it difficult to express my emotions.",
    ],
    hint: "I find it easy/difficult to ___",
  },

  // W1 P3 — I've been trying to ___.
  {
    id: "sun-08-w1-p3-01",
    ko: "나 요즘 돈을 아끼려고 노력하고 있어.",
    answers: [
      "I've been trying to save money.",
      "I've been trying to save money lately.",
      "Lately, I've been trying to save money.",
      "I've been trying to save money these days.",
    ],
    hint: "I've been trying to ___",
  },
  {
    id: "sun-08-w1-p3-02",
    ko: "나 요즘 운동을 더 하려고 노력하고 있어.",
    answers: [
      "I've been trying to exercise more.",
      "I've been trying to work out more.",
      "I've been trying to exercise more lately.",
      "I've been trying to work out more lately.",
      "Lately, I've been trying to exercise more.",
    ],
    hint: "I've been trying to ___",
  },
  {
    id: "sun-08-w1-p3-03",
    ko: "나 요즘 더 건강하게 먹으려고 노력 중이야.",
    answers: [
      "I've been trying to eat healthier.",
      "I've been trying to eat more healthily.",
      "I've been trying to eat healthier lately.",
      "Lately, I've been trying to eat healthier.",
    ],
    hint: "I've been trying to ___",
  },
  {
    id: "sun-08-w1-p3-04",
    ko: "나 요즘 휴대폰 보는 시간을 줄이려고 노력하고 있어.",
    answers: [
      "I've been trying to spend less time on my phone.",
      "I've been trying to use my phone less.",
      "I've been trying to cut back on my phone time.",
      "I've been trying to spend less time on my phone lately.",
    ],
    hint: "I've been trying to ___",
  },
  {
    id: "sun-08-w1-p3-05",
    ko: "나 요즘 커피를 줄이려고 노력하고 있어. (cut back)",
    answers: [
      "I've been trying to cut back on coffee.",
      "I've been trying to cut down on coffee.",
      "I've been trying to drink less coffee.",
      "I've been trying to cut back on coffee lately.",
    ],
    hint: "I've been trying to ___",
  },

  // W1 P4 — I'm still working on ___.
  {
    id: "sun-08-w1-p4-01",
    ko: "나 아직 시간 관리를 개선하는 중이야.",
    answers: [
      "I'm still working on managing my time.",
      "I'm still working on managing my time better.",
      "I'm still working on my time management.",
      "I'm still working on time management.",
    ],
    hint: "I'm still working on ___",
  },
  {
    id: "sun-08-w1-p4-02",
    ko: "나 영어는 아직 연습 중이야.",
    answers: ["I'm still working on my English.", "I'm still working on English."],
    hint: "I'm still working on ___",
  },
  {
    id: "sun-08-w1-p4-03",
    ko: "나는 아직 발음을 연습 중이야.",
    answers: [
      "I'm still working on my pronunciation.",
      "I'm still practicing my pronunciation.",
      "I'm still working on pronunciation.",
    ],
    hint: "I'm still working on ___",
  },
  {
    id: "sun-08-w1-p4-04",
    ko: "나 아직 자신감 키우는 중이야.",
    answers: [
      "I'm still working on my confidence.",
      "I'm still working on building my confidence.",
      "I'm still working on being more confident.",
      "I'm still working on building confidence.",
    ],
    hint: "I'm still working on ___",
  },
  {
    id: "sun-08-w1-p4-05",
    ko: "(식당에서 점원이 접시를 치우려 할 때) 아직 먹고 있어요.",
    answers: ["I'm still working on it.", "I'm still working on this.", "Sorry, I'm still working on it."],
    hint: "I'm still working on ___",
  },

  // W1 P5 — I used to ___, but now ___.
  {
    id: "sun-08-w1-p5-01",
    ko: "예전에는 낯을 많이 가렸지만 지금은 좀 더 외향적이야.",
    answers: [
      "I used to be shy, but now I'm more outgoing.",
      "I used to be very shy, but now I'm more outgoing.",
      "I used to be shy, but now I'm more extroverted.",
      "I used to be very shy, but now I'm more extroverted.",
      "I used to be really shy, but now I'm more outgoing.",
    ],
    hint: "I used to ___, but now ___",
  },
  {
    id: "sun-08-w1-p5-02",
    ko: "예전엔 커피를 많이 마셨는데 지금은 하루에 한 잔만 마셔.",
    answers: [
      "I used to drink a lot of coffee, but now I only drink one cup a day.",
      "I used to drink a lot of coffee, but now I drink only one cup a day.",
      "I used to drink a lot of coffee, but now I just drink one cup a day.",
      "I used to drink a lot of coffee, but now I only have one cup a day.",
    ],
    hint: "I used to ___, but now ___",
  },
  {
    id: "sun-08-w1-p5-03",
    ko: "예전엔 요리하는 걸 싫어했는데 지금은 즐겨.",
    answers: [
      "I used to hate cooking, but now I enjoy it.",
      "I used to hate cooking, but now I like it.",
      "I used to dislike cooking, but now I enjoy it.",
      "I used to hate cooking, but now I enjoy cooking.",
    ],
    hint: "I used to ___, but now ___",
  },
  {
    id: "sun-08-w1-p5-04",
    ko: "나는 예전에는 낯을 엄청 가렸어. (지금은 아니고)",
    answers: [
      "I used to be very shy.",
      "I used to be really shy.",
      "I used to be so shy.",
      "I used to be very shy before.",
    ],
    hint: "I used to ___, but now ___",
  },
  {
    id: "sun-08-w1-p5-05",
    ko: "예전엔 담배를 많이 피웠는데 지금은 끊었어.",
    answers: [
      "I used to smoke a lot, but now I've quit.",
      "I used to smoke a lot, but I quit.",
      "I used to smoke a lot, but now I quit.",
      "I used to smoke a lot, but now I don't smoke anymore.",
      "I used to smoke a lot, but I've quit now.",
    ],
    hint: "I used to ___, but now ___",
  },

  // W2 P1 — make
  {
    id: "sun-08-w2-p1-01",
    ko: "나 어제 큰 실수를 했어.",
    answers: ["I made a big mistake yesterday.", "Yesterday I made a big mistake."],
    hint: "make a ___ (mistake / decision / plans)",
  },
  {
    id: "sun-08-w2-p1-02",
    ko: "나는 결정을 내리는 게 어려워.",
    answers: [
      "It's difficult for me to make a decision.",
      "It's difficult for me to make decisions.",
      "It's hard for me to make decisions.",
      "It's hard for me to make a decision.",
      "I find it difficult to make decisions.",
      "I find it hard to make decisions.",
    ],
    hint: "make a ___ (mistake / decision / plans)",
  },
  {
    id: "sun-08-w2-p1-03",
    ko: "너 미용실 예약했어?",
    answers: [
      "Did you make an appointment at the hair salon?",
      "Did you make an appointment at the salon?",
      "Did you make a reservation at the hair salon?",
      "Did you make a hair appointment?",
      "Did you make a reservation at the salon?",
    ],
    hint: "make a ___ (mistake / decision / plans)",
  },
  {
    id: "sun-08-w2-p1-04",
    ko: "나 오늘 결정을 내려야 해.",
    answers: ["I need to make a decision today.", "I have to make a decision today."],
    hint: "make a ___ (mistake / decision / plans)",
  },
  {
    id: "sun-08-w2-p1-05",
    ko: "너 주말 계획 세웠어?",
    answers: [
      "Did you make plans for the weekend?",
      "Did you make any plans for the weekend?",
      "Have you made plans for the weekend?",
      "Have you made any plans for the weekend?",
    ],
    hint: "make a ___ (mistake / decision / plans)",
  },

  // W2 P2 — do
  {
    id: "sun-08-w2-p2-01",
    ko: "나 오늘 밤에 빨래해야 해.",
    answers: ["I have to do the laundry tonight.", "I need to do the laundry tonight."],
    hint: "do the ___ (dishes / laundry / homework)",
  },
  {
    id: "sun-08-w2-p2-02",
    ko: "나 저녁 먹고 설거지했어.",
    answers: ["I did the dishes after dinner."],
    hint: "do the ___ (dishes / laundry / homework)",
  },
  {
    id: "sun-08-w2-p2-03",
    ko: "나는 주말마다 집안일을 해.",
    answers: [
      "I do housework every weekend.",
      "I do the housework every weekend.",
      "I do housework on weekends.",
      "I do chores every weekend.",
      "I do the chores every weekend.",
    ],
    hint: "do the ___ (dishes / laundry / homework)",
  },
  {
    id: "sun-08-w2-p2-04",
    ko: "나 집에 가면 숙제할 거야.",
    answers: [
      "I'll do my homework when I get home.",
      "I'm going to do my homework when I get home.",
      "I'll do homework when I get home.",
      "I'm going to do homework when I get home.",
    ],
    hint: "do the ___ (dishes / laundry / homework)",
  },
  {
    id: "sun-08-w2-p2-05",
    ko: "최선을 다할게.",
    answers: ["I'll do my best.", "I will do my best."],
    hint: "do the ___ (dishes / laundry / homework)",
  },

  // W2 P3 — spend
  {
    id: "sun-08-w2-p3-01",
    ko: "나는 음식에 돈을 많이 써.",
    answers: ["I spend a lot of money on food."],
    hint: "I spend ___ on ___ / ___ing",
  },
  {
    id: "sun-08-w2-p3-02",
    ko: "나 어제 세 시간 동안 청소했어. (spend)",
    answers: [
      "I spent three hours cleaning yesterday.",
      "Yesterday I spent three hours cleaning.",
      "I spent three hours cleaning my room yesterday.",
    ],
    hint: "I spend ___ on ___ / ___ing",
  },
  {
    id: "sun-08-w2-p3-03",
    ko: "나는 배달 음식에 돈을 너무 많이 써.",
    answers: ["I spend too much money on delivery food.", "I spend too much on delivery food."],
    hint: "I spend ___ on ___ / ___ing",
  },
  {
    id: "sun-08-w2-p3-04",
    ko: "나는 하루에 두 시간을 출퇴근하는 데 써.",
    answers: [
      "I spend two hours a day commuting.",
      "I spend two hours commuting every day.",
      "I spend two hours commuting a day.",
      "I spend two hours a day on commuting.",
    ],
    hint: "I spend ___ on ___ / ___ing",
  },
  {
    id: "sun-08-w2-p3-05",
    ko: "걔(여자)는 유튜브 보는 데 시간을 많이 써.",
    answers: [
      "She spends a lot of time watching YouTube.",
      "She spends a lot of time on YouTube.",
    ],
    hint: "I spend ___ on ___ / ___ing",
  },

  // W2 P4 — It takes me ___ to ___.
  {
    id: "sun-08-w2-p4-01",
    ko: "나는 출근하는 데 40분이 걸려.",
    answers: [
      "It takes me 40 minutes to get to work.",
      "It takes me 40 minutes to go to work.",
      "It takes me 40 minutes to commute.",
      "It takes 40 minutes to get to work.",
      "It takes 40 minutes to commute.",
    ],
    hint: "It takes me ___ to ___",
  },
  {
    id: "sun-08-w2-p4-02",
    ko: "나는 준비하는 데 한 시간 정도 걸려.",
    answers: [
      "It takes me about an hour to get ready.",
      "It takes me around an hour to get ready.",
      "It takes me an hour to get ready.",
    ],
    hint: "It takes me ___ to ___",
  },
  {
    id: "sun-08-w2-p4-03",
    ko: "거기 가는 데 얼마나 걸려?",
    answers: [
      "How long does it take to get there?",
      "How long does it take you to get there?",
      "How long does it take to go there?",
    ],
    hint: "It takes me ___ to ___",
  },
  {
    id: "sun-08-w2-p4-04",
    ko: "우리 거기 도착하는 데 두 시간 걸렸어.",
    answers: ["It took us two hours to get there.", "It took us two hours to arrive there."],
    hint: "It takes me ___ to ___",
  },
  {
    id: "sun-08-w2-p4-05",
    ko: "너는 준비하는 데 얼마나 걸려?",
    answers: ["How long does it take you to get ready?"],
    hint: "It takes me ___ to ___",
  },

  // W2 P5 — bring
  {
    id: "sun-08-w2-p5-01",
    ko: "내일 신분증 가져와 줘.",
    answers: [
      "Please bring your ID tomorrow.",
      "Bring your ID tomorrow, please.",
      "Can you bring your ID tomorrow?",
      "Could you bring your ID tomorrow?",
    ],
    hint: "Can you bring ___?",
  },
  {
    id: "sun-08-w2-p5-02",
    ko: "물 좀 갖다줄래?",
    answers: ["Can you bring me some water?", "Could you bring me some water?"],
    hint: "Can you bring ___?",
  },
  {
    id: "sun-08-w2-p5-03",
    ko: "(파티에 초대받고) 내가 파티에 간식 좀 가져갈게.",
    answers: ["I'll bring some snacks to the party.", "I'll bring snacks to the party."],
    hint: "Can you bring ___?",
  },
  {
    id: "sun-08-w2-p5-04",
    ko: "내일 노트북 가져오는 거 잊지 마.",
    answers: ["Don't forget to bring your laptop tomorrow."],
    hint: "Can you bring ___?",
  },
  {
    id: "sun-08-w2-p5-05",
    ko: "(선생님이 학생에게) 다음 수업에 교과서 가져오세요.",
    answers: [
      "Please bring your textbook to the next class.",
      "Please bring your textbook next class.",
      "Bring your textbook to the next class.",
      "Please bring your textbook to next class.",
    ],
    hint: "Can you bring ___?",
  },

  // W2 P6 — take
  {
    id: "sun-08-w2-p6-01",
    ko: "우산 가져가는 거 잊지 마.",
    answers: ["Don't forget to take your umbrella.", "Don't forget to take your umbrella with you."],
    hint: "Don't forget to take ___ (with you)",
  },
  {
    id: "sun-08-w2-p6-02",
    ko: "나 이 가방 집에 가져갈게.",
    answers: ["I'll take this bag home.", "I'll take this bag home with me."],
    hint: "Don't forget to take ___ (with you)",
  },
  {
    id: "sun-08-w2-p6-03",
    ko: "남은 건 가져가도 돼.",
    answers: ["You can take the rest with you.", "You can take the rest.", "You can take the rest home."],
    hint: "Don't forget to take ___ (with you)",
  },
  {
    id: "sun-08-w2-p6-04",
    ko: "나 회사에 노트북 가져가야 해.",
    answers: ["I need to take my laptop to work.", "I have to take my laptop to work."],
    hint: "Don't forget to take ___ (with you)",
  },
  {
    id: "sun-08-w2-p6-05",
    ko: "여권 챙겨 가는 거 잊지 마.",
    answers: ["Don't forget to take your passport with you.", "Don't forget to take your passport."],
    hint: "Don't forget to take ___ (with you)",
  },

  // W3 P1 — Sorry, I didn't catch that.
  {
    id: "sun-08-w3-p1-01",
    ko: "죄송한데 잘 못 들었어요.",
    answers: ["Sorry, I didn't catch that."],
    hint: "Sorry, I didn't catch that.",
  },
  {
    id: "sun-08-w3-p1-02",
    ko: "마지막 부분을 잘 못 들었어.",
    answers: ["I didn't catch the last part.", "Sorry, I didn't catch the last part."],
    hint: "Sorry, I didn't catch that.",
  },
  {
    id: "sun-08-w3-p1-03",
    ko: "미안, 네 이름을 못 들었어.",
    answers: ["Sorry, I didn't catch your name."],
    hint: "Sorry, I didn't catch that.",
  },
  {
    id: "sun-08-w3-p1-04",
    ko: "(가게에서) 죄송한데 가격을 못 들었어요.",
    answers: ["Sorry, I didn't catch the price."],
    hint: "Sorry, I didn't catch that.",
  },
  {
    id: "sun-08-w3-p1-05",
    ko: "미안, 방금 뭐라고 했는지 못 들었어.",
    answers: [
      "Sorry, I didn't catch what you just said.",
      "Sorry, I didn't catch what you said.",
    ],
    hint: "Sorry, I didn't catch that.",
  },

  // W3 P2 — Could you say that again?
  {
    id: "sun-08-w3-p2-01",
    ko: "다시 말씀해 주시겠어요?",
    answers: ["Could you say that again?", "Could you repeat that?", "Can you say that again?"],
    hint: "Could you say that again?",
  },
  {
    id: "sun-08-w3-p2-02",
    ko: "죄송한데 한 번만 더 말씀해 주시겠어요?",
    answers: [
      "Sorry, could you say that again?",
      "Sorry, could you say that one more time?",
      "Sorry, could you repeat that?",
      "Sorry, can you say that again?",
    ],
    hint: "Could you say that again?",
  },
  {
    id: "sun-08-w3-p2-03",
    ko: "그 주소 다시 말해 줄 수 있어?",
    answers: [
      "Could you say the address again?",
      "Can you say the address again?",
      "Could you repeat the address?",
      "Can you repeat the address?",
    ],
    hint: "Could you say that again?",
  },
  {
    id: "sun-08-w3-p2-04",
    ko: "마지막 부분 다시 말해 줄 수 있어?",
    answers: [
      "Could you say the last part again?",
      "Can you say the last part again?",
      "Could you repeat the last part?",
      "Can you repeat the last part?",
    ],
    hint: "Could you say that again?",
  },
  {
    id: "sun-08-w3-p2-05",
    ko: "(카페 직원이 손님에게) 죄송한데, 주문 다시 말씀해 주시겠어요?",
    answers: [
      "Sorry, could you say your order again?",
      "Sorry, could you repeat your order?",
      "Sorry, can you say your order again?",
    ],
    hint: "Could you say that again?",
  },

  // W3 P3 — Could you speak a little more slowly?
  {
    id: "sun-08-w3-p3-01",
    ko: "조금만 더 천천히 말씀해 주시겠어요?",
    answers: [
      "Could you speak a little more slowly?",
      "Could you speak a bit more slowly?",
      "Can you speak a little more slowly?",
      "Could you slow down a little?",
    ],
    hint: "Could you speak a little more slowly?",
  },
  {
    id: "sun-08-w3-p3-02",
    ko: "죄송한데, 조금만 더 천천히 말해 주실래요? 제가 아직 영어를 배우는 중이라서요.",
    answers: [
      "Sorry, could you speak a little more slowly? I'm still learning English.",
      "Sorry, could you speak a bit more slowly? I'm still learning English.",
      "Sorry, could you speak a little more slowly? I'm still working on my English.",
      "Sorry, can you speak a little more slowly? I'm still learning English.",
    ],
    hint: "Could you speak a little more slowly?",
  },
  {
    id: "sun-08-w3-p3-03",
    ko: "말씀이 조금 빨라요. 조금만 더 천천히 말씀해 주시겠어요?",
    answers: [
      "You're speaking a little fast. Could you speak a little more slowly?",
      "You're speaking a bit fast. Could you speak a little more slowly?",
      "You're speaking a little fast. Could you slow down a little?",
      "You're talking a little fast. Could you speak a little more slowly?",
    ],
    hint: "Could you speak a little more slowly?",
  },
  {
    id: "sun-08-w3-p3-04",
    ko: "(은행에서) 죄송한데 조금만 더 천천히 설명해 주시겠어요?",
    answers: [
      "Sorry, could you explain that a little more slowly?",
      "Sorry, could you explain it a little more slowly?",
      "Sorry, could you explain a little more slowly?",
      "Sorry, could you explain that a bit more slowly?",
    ],
    hint: "Could you speak a little more slowly?",
  },
  {
    id: "sun-08-w3-p3-05",
    ko: "(전화로) 조금만 더 천천히 말씀해 주시겠어요? 받아 적는 중이라서요.",
    answers: [
      "Could you speak a little more slowly? I'm writing it down.",
      "Could you speak a little more slowly? I'm taking notes.",
      "Could you speak a bit more slowly? I'm writing it down.",
      "Could you speak a little more slowly? I'm writing this down.",
    ],
    hint: "Could you speak a little more slowly?",
  },

  // W3 P4 — Do you mean ___?
  {
    id: "sun-08-w3-p4-01",
    ko: "내일 말하는 거예요?",
    answers: ["Do you mean tomorrow?", "You mean tomorrow?"],
    hint: "Do you mean ___?",
  },
  {
    id: "sun-08-w3-p4-02",
    ko: "제가 지금 돈을 내야 한다는 뜻인가요?",
    answers: [
      "Do you mean I need to pay now?",
      "Do you mean I have to pay now?",
      "You mean I need to pay now?",
      "You mean I have to pay now?",
    ],
    hint: "Do you mean ___?",
  },
  {
    id: "sun-08-w3-p4-03",
    ko: "이 버스 말하는 거야?",
    answers: ["Do you mean this bus?", "You mean this bus?"],
    hint: "Do you mean ___?",
  },
  {
    id: "sun-08-w3-p4-04",
    ko: "우리 약속 취소하자는 뜻이야?",
    answers: [
      "Do you mean we should cancel our plans?",
      "Do you mean you want to cancel our plans?",
      "Do you mean we should cancel?",
      "You mean we should cancel our plans?",
      "Do you mean we should cancel our plan?",
    ],
    hint: "Do you mean ___?",
  },
  {
    id: "sun-08-w3-p4-05",
    ko: "(약국에서) 이 약을 매일 먹어야 한다는 뜻인가요?",
    answers: [
      "Do you mean I need to take this medicine every day?",
      "Do you mean I have to take this medicine every day?",
      "Do you mean I should take this medicine every day?",
      "You mean I need to take this medicine every day?",
    ],
    hint: "Do you mean ___?",
  },

  // W3 P5 — That's not what I meant.
  {
    id: "sun-08-w3-p5-01",
    ko: "제가 말하려던 뜻은 그게 아니에요.",
    answers: ["That's not what I meant."],
    hint: "That's not what I meant. (What I meant was ___.)",
  },
  {
    id: "sun-08-w3-p5-02",
    ko: "그런 뜻이 아니었어. 내 말은 우리가 일찍 출발해야 한다는 거였어.",
    answers: [
      "That's not what I meant. What I meant was we should leave early.",
      "That's not what I meant. What I meant was that we should leave early.",
      "That's not what I meant. I meant we should leave early.",
      "That's not what I meant. What I meant was we should head out early.",
    ],
    hint: "That's not what I meant. (What I meant was ___.)",
  },
  {
    id: "sun-08-w3-p5-03",
    ko: "그런 뜻이 아니야. 설명할게.",
    answers: [
      "That's not what I meant. Let me explain.",
      "That's not what I meant. Let me explain it.",
    ],
    hint: "That's not what I meant. (What I meant was ___.)",
  },
  {
    id: "sun-08-w3-p5-04",
    ko: "내 말은 시간이 좀 더 필요하다는 거였어.",
    answers: [
      "What I meant was I needed more time.",
      "What I meant was that I needed more time.",
      "What I meant was I need more time.",
      "What I meant was I needed a little more time.",
      "I meant I needed more time.",
    ],
    hint: "That's not what I meant. (What I meant was ___.)",
  },
  {
    id: "sun-08-w3-p5-05",
    ko: "아, 그런 뜻이 아니었어. 내 말은 네 아이디어가 좋다는 거였어.",
    answers: [
      "Oh, that's not what I meant. What I meant was I like your idea.",
      "Oh, that's not what I meant. What I meant was I liked your idea.",
      "Oh, that's not what I meant. What I meant was your idea is good.",
      "Oh, that's not what I meant. I meant I like your idea.",
      "Oh, that's not what I meant. I meant your idea is good.",
    ],
    hint: "That's not what I meant. (What I meant was ___.)",
  },

  // W4 P1 — I find myself ___ing.
  {
    id: "sun-08-w4-p1-01",
    ko: "스트레스 받으면 나도 모르게 더 먹게 되더라.",
    answers: [
      "I usually find myself eating more when I'm stressed.",
      "I find myself eating more when I'm stressed.",
      "I find myself eating more when I get stressed.",
      "When I'm stressed, I find myself eating more.",
      "I usually find myself eating more when I get stressed.",
    ],
    hint: "I find myself ___ing",
  },
  {
    id: "sun-08-w4-p1-02",
    ko: "나도 모르게 계속 핸드폰을 확인해.",
    answers: [
      "I find myself checking my phone all the time.",
      "I find myself checking my phone constantly.",
      "I always find myself checking my phone.",
    ],
    hint: "I find myself ___ing",
  },
  {
    id: "sun-08-w4-p1-03",
    ko: "나도 모르게 늦게까지 안 자게 돼.",
    answers: ["I find myself staying up late.", "I always find myself staying up late."],
    hint: "I find myself ___ing",
  },
  {
    id: "sun-08-w4-p1-04",
    ko: "나도 모르게 혼잣말을 하게 돼.",
    answers: ["I find myself talking to myself."],
    hint: "I find myself ___ing",
  },
  {
    id: "sun-08-w4-p1-05",
    ko: "나도 모르게 늘 같은 메뉴를 시키게 돼.",
    answers: [
      "I find myself ordering the same thing every time.",
      "I always find myself ordering the same thing.",
      "I find myself always ordering the same thing.",
      "I find myself ordering the same food every time.",
    ],
    hint: "I find myself ___ing",
  },

  // W4 P2 — Most of my ___ goes to ___.
  {
    id: "sun-08-w4-p2-01",
    ko: "내 돈 대부분이 먹는 데 들어가.",
    answers: ["Most of my money goes to food.", "Most of my money goes to eating."],
    hint: "Most of my ___ goes to ___",
  },
  {
    id: "sun-08-w4-p2-02",
    ko: "내 여가 시간 대부분은 유튜브 보는 데 들어가.",
    answers: [
      "Most of my free time goes to watching YouTube.",
      "Most of my free time goes to YouTube.",
    ],
    hint: "Most of my ___ goes to ___",
  },
  {
    id: "sun-08-w4-p2-03",
    ko: "내 월급 대부분은 월세로 나가.",
    answers: [
      "Most of my salary goes to rent.",
      "Most of my paycheck goes to rent.",
      "Most of my salary goes to my rent.",
    ],
    hint: "Most of my ___ goes to ___",
  },
  {
    id: "sun-08-w4-p2-04",
    ko: "내 돈 대부분은 커피에 들어가.",
    answers: ["Most of my money goes to coffee."],
    hint: "Most of my ___ goes to ___",
  },
  {
    id: "sun-08-w4-p2-05",
    ko: "내 주말 시간 대부분은 집안일 하는 데 들어가.",
    answers: [
      "Most of my weekend goes to doing housework.",
      "Most of my weekend goes to housework.",
      "Most of my weekend time goes to housework.",
      "Most of my weekend time goes to doing housework.",
      "Most of my weekend goes to doing chores.",
      "Most of my weekends go to housework.",
    ],
    hint: "Most of my ___ goes to ___",
  },

  // W4 P3 — You lost me.
  {
    id: "sun-08-w4-p3-01",
    ko: "나 거기서부터 이해 못 했어.",
    answers: ["You lost me.", "You lost me there."],
    hint: "You lost me (at ___)",
  },
  {
    id: "sun-08-w4-p3-02",
    ko: "마지막 부분부터 이해 못 했어.",
    answers: ["You lost me at the last part."],
    hint: "You lost me (at ___)",
  },
  {
    id: "sun-08-w4-p3-03",
    ko: "미안, 두 번째 단계부터 못 따라갔어.",
    answers: [
      "Sorry, you lost me at the second step.",
      "Sorry, you lost me at step two.",
      "Sorry, you lost me at the second part.",
    ],
    hint: "You lost me (at ___)",
  },
  {
    id: "sun-08-w4-p3-04",
    ko: "잠깐, 이해 못 했어. 다시 설명해 줄래?",
    answers: [
      "Wait, you lost me. Could you explain that again?",
      "Wait, you lost me. Can you explain that again?",
      "Wait, you lost me. Could you explain it again?",
      "Wait, you lost me. Can you explain it again?",
    ],
    hint: "You lost me (at ___)",
  },
  {
    id: "sun-08-w4-p3-05",
    ko: "규칙 얘기하는 부분부터 이해 못 했어.",
    answers: [
      "You lost me at the part about the rules.",
      "You lost me when you talked about the rules.",
      "You lost me when you started talking about the rules.",
    ],
    hint: "You lost me (at ___)",
  },
];

/** 표현 퀴즈 */
export const expressions: SundayExercise[] = [
  {
    id: "sun-08-x01",
    ko: "나 친구한테 좀 털어놨어. (vent)",
    answers: ["I vented to my friend.", "I vented to a friend."],
    hint: "vent (to someone) = 하소연하다, 털어놓다",
    note: "When I'm stressed, I vent to my sister.",
  },
  {
    id: "sun-08-x02",
    ko: "나 주말 내내 그 드라마 정주행했어. (binge-~)",
    answers: [
      "I binge-watched the show all weekend.",
      "I binge-watched that show all weekend.",
      "I binge-watched the drama all weekend.",
      "I binge-watched that drama all weekend.",
      "I binge-watched the series all weekend.",
    ],
    hint: "binge-watch = 정주행하다",
    note: "I tend to binge-watch shows when I'm stressed.",
  },
  {
    id: "sun-08-x03",
    ko: "나 일 생각 좀 안 하려고 노력 중이야. (take my mind ~)",
    answers: ["I'm trying to take my mind off work.", "I've been trying to take my mind off work."],
    hint: "take my mind off ~ = ~ 생각을 잊다, 머리를 비우다",
    note: "Music helps me take my mind off things.",
  },
  {
    id: "sun-08-x04",
    ko: "머리 좀 식히려고 산책했어. (clear ~ head)",
    answers: ["I went for a walk to clear my head.", "I took a walk to clear my head."],
    hint: "clear my head = 머리를 식히다, 생각을 비우다",
    note: "I need some fresh air to clear my head.",
  },
  {
    id: "sun-08-x05",
    ko: "나는 생각이 너무 많은 편이야. (over-)",
    answers: ["I tend to overthink.", "I tend to overthink things.", "I overthink things.", "I overthink."],
    hint: "overthink = 지나치게 깊이 생각하다",
    note: "Don't overthink it. Just try.",
  },
  {
    id: "sun-08-x06",
    ko: "네 기분 상하게 하려던 건 아니었어. (hurt ~)",
    answers: ["I didn't mean to hurt your feelings."],
    hint: "hurt someone's feelings = ~의 기분을 상하게 하다",
    note: "I find it hard to say no because I don't want to hurt anyone's feelings.",
  },
  {
    id: "sun-08-x07",
    ko: "나 요즘 설탕 줄이는 중이야. (cut ~)",
    answers: [
      "I'm cutting back on sugar.",
      "I've been cutting back on sugar.",
      "I'm trying to cut back on sugar.",
      "I've been trying to cut back on sugar.",
      "I'm cutting down on sugar.",
    ],
    hint: "cut back on ~ = ~을 줄이다",
    note: "I'm trying to cut back on coffee.",
  },
  {
    id: "sun-08-x08",
    ko: "나 좋은 습관 하나 만들려고 노력 중이야. (build ~)",
    answers: [
      "I'm trying to build a good habit.",
      "I've been trying to build a good habit.",
    ],
    hint: "build a habit = 습관을 만들다",
    note: "It takes time to build a new habit.",
  },
  {
    id: "sun-08-x09",
    ko: "걔(남자)는 자기 실수를 인정했어. (own ~)",
    answers: ["He owned up to his mistake.", "He owned up to it."],
    hint: "own up to ~ = (잘못을) 인정하다, 책임지다",
    note: "Even though I made a mistake, I owned up to it.",
  },
  {
    id: "sun-08-x10",
    ko: "핑계 대지 마. (make ~)",
    answers: ["Don't make excuses.", "Stop making excuses.", "Don't make an excuse."],
    hint: "make an excuse = 핑계를 대다",
    note: "He always makes excuses when he's late.",
  },
  {
    id: "sun-08-x11",
    ko: "걔(남자)는 유튜브로 돈을 벌어. (make ~)",
    answers: [
      "He makes money on YouTube.",
      "He makes money from YouTube.",
      "He makes money with YouTube.",
      "He makes money through YouTube.",
    ],
    hint: "make money = 돈을 벌다",
    note: "I want to make more money this year.",
  },
  {
    id: "sun-08-x12",
    ko: "나 아직 머리 손질하는 중이야. (do ~)",
    answers: ["I'm still doing my hair."],
    hint: "do my hair = 머리를 손질하다",
    note: "It takes me 20 minutes to do my hair.",
  },
  {
    id: "sun-08-x13",
    ko: "나 요즘 너무 잘 까먹어. (forget-)",
    answers: [
      "I've been so forgetful lately.",
      "I've been really forgetful lately.",
      "I'm so forgetful these days.",
      "I'm really forgetful these days.",
      "I'm so forgetful lately.",
    ],
    hint: "forgetful = 잘 까먹는, 건망증 있는",
    note: "I'm so forgetful. I left my umbrella on the bus again.",
  },
  {
    id: "sun-08-x14",
    ko: "그 일로 교훈을 얻었어. (lesson)",
    answers: ["I learned a lesson from that.", "I learned a lesson from it.", "I learned my lesson."],
    hint: "learn a lesson = 교훈을 얻다",
    note: "I lost my bag once, and I learned my lesson.",
  },
  {
    id: "sun-08-x15",
    ko: "이거 충동구매였어. (impulse ~)",
    answers: ["This was an impulse buy.", "It was an impulse buy.", "That was an impulse buy."],
    hint: "impulse buy = 충동구매",
    note: "I tend to make impulse buys when I'm stressed.",
  },
  {
    id: "sun-08-x16",
    ko: "그 배우는 나이 들수록 멋있어져. (age like ~)",
    answers: [
      "That actor ages like fine wine.",
      "That actor is aging like fine wine.",
      "The actor ages like fine wine.",
      "He ages like fine wine.",
    ],
    hint: "age like fine wine = 나이 들수록 멋있어지다",
    note: "Some people really age like fine wine.",
  },
  {
    id: "sun-08-x17",
    ko: "너 엿듣고 있었어? (eaves-)",
    answers: ["Were you eavesdropping?", "Were you eavesdropping on us?", "Were you eavesdropping on me?"],
    hint: "eavesdrop = 엿듣다",
    note: "Sorry, I didn't mean to eavesdrop.",
  },
  {
    id: "sun-08-x18",
    ko: "저기 갓길에 차 좀 세워 줘. (pull ~)",
    answers: ["Pull over there.", "Please pull over there.", "Can you pull over there?", "Could you pull over there?"],
    hint: "pull over = (차를) 길가에 세우다",
    note: "The police told me to pull over.",
  },
  {
    id: "sun-08-x19",
    ko: "내 말 좀 끝까지 들어 봐. (hear ~)",
    answers: ["Hear me out.", "Just hear me out.", "Please hear me out."],
    hint: "hear me out = 내 말 끝까지 들어 봐",
    note: "I know it sounds strange, but just hear me out.",
  },
  {
    id: "sun-08-x20",
    ko: "발표할 때 머리가 하얘졌어. (mind ~)",
    answers: [
      "My mind went blank during the presentation.",
      "My mind went blank during my presentation.",
      "My mind went blank when I was giving the presentation.",
    ],
    hint: "my mind went blank = 머리가 하얘졌다",
    note: "I was so nervous that my mind went blank.",
  },
  {
    id: "sun-08-x21",
    ko: "나 아직 이거 익숙해지는 중이야. (hang)",
    answers: ["I'm still getting the hang of it.", "I'm still getting the hang of this."],
    hint: "get the hang of ~ = ~에 익숙해지다, 요령을 터득하다",
    note: "I'm still getting the hang of my new job.",
  },
  {
    id: "sun-08-x22",
    ko: "나 오늘 몸이 좀 안 좋아. (under ~)",
    answers: [
      "I'm feeling a little under the weather today.",
      "I'm feeling a bit under the weather today.",
      "I'm feeling under the weather today.",
      "I feel a little under the weather today.",
      "I feel under the weather today.",
      "I'm a little under the weather today.",
    ],
    hint: "under the weather = 컨디션이 안 좋은",
    note: "I can't come today. I'm feeling under the weather.",
  },
  {
    id: "sun-08-x23",
    ko: "그건 완전 시간 낭비였어. (waste)",
    answers: [
      "That was such a waste of time.",
      "It was such a waste of time.",
      "That was a total waste of time.",
      "That was a complete waste of time.",
    ],
    hint: "a waste of time = 시간 낭비",
    note: "Scrolling on my phone all night is such a waste of time.",
  },
  {
    id: "sun-08-x24",
    ko: "그 가게 좀 수상해 보여. (sketch-)",
    answers: [
      "That store looks a little sketchy.",
      "That store looks sketchy.",
      "That shop looks sketchy.",
      "That shop looks a little sketchy.",
      "That store looks a bit sketchy.",
      "That store seems sketchy.",
    ],
    hint: "sketchy = 수상한, 찝찝한",
    note: "That website looks sketchy. Don't buy anything there.",
  },
  {
    id: "sun-08-x25",
    ko: "나 좀 단정해 보여? (present-)",
    answers: ["Do I look presentable?"],
    hint: "presentable = (남 앞에 나설 만큼) 단정한",
    note: "I need ten minutes to look presentable.",
  },
  {
    id: "sun-08-x26",
    ko: "나는 여행에 돈 쓰는 건 안 아까워. (mind)",
    answers: [
      "I don't mind spending money on travel.",
      "I don't mind spending money on traveling.",
      "I don't mind spending money on trips.",
    ],
    hint: "don't mind + -ing = ~하는 거 괜찮다, 아깝지 않다",
    note: "I don't mind spending money on good food.",
  },
  {
    id: "sun-08-x27",
    ko: "일이 내 시간을 거의 다 차지해. (take ~)",
    answers: ["Work takes up most of my time.", "My work takes up most of my time."],
    hint: "take up = (시간·공간을) 차지하다",
    note: "Commuting takes up a lot of my time.",
  },
  {
    id: "sun-08-x28",
    ko: "나 이제 커피 안 마셔. (anymore)",
    answers: ["I don't drink coffee anymore."],
    hint: "not ~ anymore = 더 이상 ~ 안 하다",
    note: "I used to eat a lot of fast food, but not anymore.",
  },
];
