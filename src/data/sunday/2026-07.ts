import type { SundayExercise, SundayPattern } from "@/lib/types";

const M = "2026-07";
const T1 = "맛집 탐방";
const T2 = "쇼핑 & 환불";
const T3 = "친구 초대 & 일정 조율";
const T4 = "컨디션 & 자기관리";

export const patterns: SundayPattern[] = [
  // ───────── Week 1. 맛집 탐방 ─────────
  {
    id: "sun-07-w1-p1",
    month: M,
    week: 1,
    topic: T1,
    pattern: "I'm craving ___.",
    meaning: "~가 땡겨 / 너무 먹고 싶어",
    points: [
      "crave 뒤에는 바로 **명사**: x I'm craving to eat pizza → o I'm craving pizza",
      "요즘 계속 땡긴다면 **I've been craving ~** (예: I've been craving ice cream all week.)",
      "뭔지 딱 정해지지 않았으면 **something + 형용사**: something spicy / something sweet",
      "비슷한 표현: I'm in the mood for ~ (~가 당기는 기분) / I have cravings for ~ (~가 자꾸 땡겨)",
    ],
    examples: [
      { en: "I'm craving something spicy.", ko: "매운 거 땡겨." },
      { en: "I've been craving ice cream all week.", ko: "이번 주 내내 아이스크림이 땡겨." },
      { en: "I'm in the mood for dessert.", ko: "디저트가 당기네." },
    ],
  },
  {
    id: "sun-07-w1-p2",
    month: M,
    week: 1,
    topic: T1,
    pattern: "It hits the spot.",
    meaning: "(딱) 원하던 거였어 / 제대로 만족했어",
    points: [
      "관용 표현이라 꼭 **the spot**: x It hit a spot → o It hit the spot",
      "먹고 난 후기는 과거로! hit의 과거형도 **hit** (That really hit the spot.)",
      "음식뿐 아니라 낮잠, 샤워처럼 **딱 필요했던 경험**에도 써",
      "비슷한 표현: It was exactly what I needed.",
    ],
    examples: [
      { en: "That cold noodle soup really hit the spot.", ko: "그 냉면 완전 딱이었어." },
      { en: "A cold drink really hits the spot on a hot day.", ko: "더운 날엔 시원한 음료가 딱이지." },
      { en: "That nap really hit the spot.", ko: "그 낮잠 진짜 딱이었어." },
    ],
  },
  {
    id: "sun-07-w1-p3",
    month: M,
    week: 1,
    topic: T1,
    pattern: "I'm all about ___. / ___ doesn't do it for me.",
    meaning: "요즘 ~에 꽂혔어 / ~는 나한텐 별로 안 끌려",
    points: [
      "**be all about + 명사/-ing** = ~에 완전 빠져 있다 (I'm all about trying new places.)",
      "**~ doesn't do it for me** = 싫다고 딱 잘라 말하지 않는 부드러운 비선호",
      "주어가 복수면 **don't**: Super sweet desserts don't do it for me.",
      "비슷한 표현: Not my thing. / Not my cup of tea. (내 스타일 아님)",
    ],
    examples: [
      { en: "I'm all about dumplings these days.", ko: "나 요즘 만두에 완전 꽂혔어." },
      { en: "Super sweet desserts don't do it for me.", ko: "엄청 단 디저트는 나한텐 별로야." },
      { en: "I'm all about simple meals these days.", ko: "요즘은 간단한 식사가 최고야." },
      { en: "Camping is not my thing.", ko: "캠핑은 내 스타일이 아니야." },
    ],
  },
  {
    id: "sun-07-w1-p4",
    month: M,
    week: 1,
    topic: T1,
    pattern: "It was way too ___ for me.",
    meaning: "나한텐 너무 ~했어 (솔직 후기)",
    points: [
      "**way** = too를 더 세게 강조 (훨씬, 너무너무)",
      "먹고 난 후기는 과거가 자연스러워: x It tastes salty → o It was salty",
      "**for me**를 붙이면 '내 입맛엔'이라는 느낌이라 덜 공격적",
      "맛 형용사: salty(짠) / sweet(단) / spicy(매운) / greasy(기름진) / bland(싱거운) / bitter(쓴) / fishy(비린) / garlicky(마늘 맛 강한)",
    ],
    examples: [
      { en: "It was way too salty for me.", ko: "나한텐 너무 짰어." },
      { en: "The pasta was way too garlicky for me.", ko: "그 파스타 나한텐 마늘 맛이 너무 강했어." },
      { en: "The coffee was way too bitter for me.", ko: "그 커피 나한텐 너무 썼어." },
    ],
  },
  {
    id: "sun-07-w1-p5",
    month: M,
    week: 1,
    topic: T1,
    pattern: "If I had to pick, I'd go with ___.",
    meaning: "굳이 고르라면 ~로 할래",
    points: [
      "**had to**는 과거형이지만 과거 얘기가 아니라 **가정** (굳이 골라야 한다면)",
      "뒤에는 **I'd (= I would) + 동사원형**",
      "**go with** = ~로 하다(선택). 주문할 땐 I'll go with the pasta. / I'm gonna go with ~",
      "choose는 좀 더 딱딱한 말, pick / go with가 일상 대화에서 자연스러워",
    ],
    examples: [
      { en: "If I had to pick, I'd go with the dumplings.", ko: "굳이 고르라면 만두로 할래." },
      { en: "It's a tough choice, but if I had to pick, I'd go with ramen.", ko: "어려운 선택인데, 굳이 고르라면 라멘으로 할래." },
      { en: "I'll go with the original flavor.", ko: "오리지널 맛으로 할게요." },
    ],
  },

  // ───────── Week 2. 쇼핑 & 환불 ─────────
  {
    id: "sun-07-w2-p1",
    month: M,
    week: 2,
    topic: T2,
    pattern: "I'm looking for ___.",
    meaning: "~ 찾고 있어요",
    points: [
      "매장에서 물건 찾을 땐 **look for**: x I'm finding a shirt → o I'm looking for a shirt",
      "find는 '찾아내다(결과)', look for는 '찾는 중(과정)'",
      "용도를 덧붙이면 더 좋아: **Something I can wear when it's hot.** (더울 때도 입을 수 있는 거요)",
    ],
    examples: [
      { en: "I'm looking for a lightweight jacket.", ko: "가벼운 재킷 찾고 있어요." },
      { en: "I'm looking for a gift for my friend.", ko: "친구 선물 찾고 있어요." },
      { en: "Something light. Something I can wear even when it's hot.", ko: "가벼운 걸로요. 더운 날에도 입을 수 있는 걸로요." },
    ],
  },
  {
    id: "sun-07-w2-p2",
    month: M,
    week: 2,
    topic: T2,
    pattern: "Do you have this in a different ___?",
    meaning: "이거 다른 사이즈/색 있어요?",
    points: [
      "x Do you have other size? → o Do you have this in a different size?",
      "**in + 색/사이즈**로 바로 말해도 돼: in black / in blue / in a large / in a bigger size",
      "재고 관련: Is it in stock? (재고 있어요?) / It's sold out. (품절이에요)",
    ],
    examples: [
      { en: "Do you have this in a different color?", ko: "이거 다른 색 있어요?" },
      { en: "Do you have this in black?", ko: "이거 검정색 있어요?" },
      { en: "Let me check the stock for you.", ko: "재고 확인해 드릴게요." },
    ],
  },
  {
    id: "sun-07-w2-p3",
    month: M,
    week: 2,
    topic: T2,
    pattern: "I'll take it. / I'll pass.",
    meaning: "이걸로 할게요 / (이번엔) 패스할게요",
    points: [
      "매장에서 '살게요'는 buy보다 **I'll take it**이 자연스러워 (여러 개면 I'll take them)",
      "여러 개 중 하나면 **I'll take this one.**",
      "안 살 땐 **I'll pass** / I think I'll pass this time. (공손하고 부드러움)",
      "같이 쓰는 말: on sale (세일 중) / a good deal (좋은 딜, 가성비)",
    ],
    examples: [
      { en: "I'll take it. Thanks!", ko: "이걸로 할게요. 감사합니다!" },
      { en: "That's a good deal. I'll take it.", ko: "좋은 가격이네요. 이걸로 할게요." },
      { en: "I think I'll pass this time.", ko: "이번엔 그냥 패스할게요." },
    ],
  },
  {
    id: "sun-07-w2-p4",
    month: M,
    week: 2,
    topic: T2,
    pattern: "I'd like to return/exchange this.",
    meaning: "이거 반품(환불)/교환하고 싶어요",
    points: [
      "want/would like 뒤엔 **to + 동사원형**: x I want return this → o I want to return this / I'd like to return this",
      "**return** = 반품하다(동사), **refund** = 환불(주로 명사): Can I get a refund? / I want a refund.",
      "**exchange A for B** = A를 B로 교환하다 (exchange this for a different size)",
      "receipt(영수증)는 p 소리 없이 '뤼씨-트'",
    ],
    examples: [
      { en: "I'd like to return this, please.", ko: "이거 반품하고 싶어요." },
      { en: "I'd like to exchange this for a different size.", ko: "이거 다른 사이즈로 교환하고 싶어요." },
      { en: "Can I get a refund?", ko: "환불 받을 수 있을까요?" },
    ],
  },
  {
    id: "sun-07-w2-p5",
    month: M,
    week: 2,
    topic: T2,
    pattern: "It doesn't fit the way I expected.",
    meaning: "생각했던 핏이 아니에요 (부드럽게 이유 말하기)",
    points: [
      "**the way + 주어 + 동사** = ~한 방식대로 (the way I expected = 내가 기대한 대로)",
      "fit = (몸에) 맞다. 이유를 덧붙이면 좋아: It's too tight. (꽉 껴요) / It's too loose. (헐렁해요)",
      "**not as ~ as I expected** = 기대만큼 ~하지 않다: It's not as comfortable as I expected.",
      "주어가 복수(pants, shoes)면 **don't fit**",
    ],
    examples: [
      { en: "It doesn't fit the way I expected.", ko: "생각했던 핏이 아니에요." },
      { en: "It's a little too tight.", ko: "좀 너무 꽉 껴요." },
      { en: "It wasn't as comfortable as I expected.", ko: "생각만큼 편하지 않았어요." },
    ],
  },

  // ───────── Week 3. 친구 초대 & 일정 조율 ─────────
  {
    id: "sun-07-w3-p1",
    month: M,
    week: 3,
    topic: T3,
    pattern: "Are you down to ___?",
    meaning: "~할래? (캐주얼한 초대)",
    points: [
      "**be down to + 동사원형**: x Are you down with go? → o Are you down to go?",
      "명사가 오면 **down for**: Are you down for pizza?",
      "**grab** = 가볍게 ~하다: grab coffee / grab lunch / grab a drink",
      "대답: I'm down! (좋아!) / Sure, when?",
    ],
    examples: [
      { en: "Are you down to grab coffee after work?", ko: "퇴근하고 커피 한 잔 할래?" },
      { en: "Are you down to go for a walk this weekend?", ko: "이번 주말에 산책할래?" },
      { en: "I'm down to go.", ko: "나 갈래." },
    ],
  },
  {
    id: "sun-07-w3-p2",
    month: M,
    week: 3,
    topic: T3,
    pattern: "I'm free on ___. / I'm not available on ___.",
    meaning: "~에 시간 돼 / ~엔 안 돼",
    points: [
      "요일·날짜 앞은 **on**: x I'm free in Friday → o I'm free on Friday",
      "시각 앞은 **at**: I'm available at 7.",
      "캐주얼하게: I can do Saturday. / I can't do Friday.",
      "**~ works for me** = 난 ~ 괜찮아 (Friday works for me.)",
    ],
    examples: [
      { en: "I'm free on Saturday afternoon.", ko: "나 토요일 오후에 시간 돼." },
      { en: "I'm not available on Friday.", ko: "나 금요일은 안 돼." },
      { en: "Friday works for me.", ko: "난 금요일 괜찮아." },
    ],
  },
  {
    id: "sun-07-w3-p3",
    month: M,
    week: 3,
    topic: T3,
    pattern: "How about ___ instead?",
    meaning: "대신 ~는 어때?",
    points: [
      "**instead**는 보통 문장 끝에",
      "How about 뒤엔 **명사** 또는 **-ing**: How about meeting at 7 instead?",
      "그냥 '안 돼'로 끝내지 말고 바로 대안을 던지면 대화가 이어져",
      "일정 자체를 바꿀 땐: Can we reschedule?",
    ],
    examples: [
      { en: "How about 7 pm instead?", ko: "대신 저녁 7시는 어때?" },
      { en: "I'm not sure about 5. How about 7 instead?", ko: "5시는 좀 애매해. 대신 7시 어때?" },
      { en: "Can we reschedule?", ko: "일정 바꿀 수 있을까?" },
    ],
  },
  {
    id: "sun-07-w3-p4",
    month: M,
    week: 3,
    topic: T3,
    pattern: "I might be able to ___.",
    meaning: "아마 ~할 수 있을지도 몰라 (확답 X, 반반)",
    points: [
      "조동사 두 개는 연속으로 못 써: x I will can → o I will be able to / I might be able to",
      "**might + 동사원형** = 확실하진 않은 가능성",
      "**make it** = (약속에) 갈 수 있다 / 시간 맞춰 가다. 못 갈 땐 Sorry, I don't think I can make it.",
      "상황 봐야 할 땐: It depends on work. (일 봐서)",
    ],
    examples: [
      { en: "I might be able to make it.", ko: "아마 갈 수 있을 것 같아." },
      { en: "I'm not sure when I get off work, but I might be able to go.", ko: "몇 시에 퇴근할지 모르겠는데, 갈 수 있을지도 몰라." },
      { en: "I might be able to join later.", ko: "나중에 합류할 수 있을지도 몰라." },
    ],
  },
  {
    id: "sun-07-w3-p5",
    month: M,
    week: 3,
    topic: T3,
    pattern: "Let's play it by ear.",
    meaning: "상황 봐서 결정하자 (유동적으로)",
    points: [
      "**it** 빠뜨리지 않기: x Let's play by ear → o Let's play it by ear",
      "계획을 미리 딱 정하지 않고 그때 상황 보고 정하자는 뜻",
      "비슷한 표현: Let's see how it goes. / It depends on the weather.",
    ],
    examples: [
      { en: "If it rains, let's play it by ear.", ko: "비 오면 상황 봐서 하자." },
      { en: "We don't have to decide now. Let's play it by ear.", ko: "지금 안 정해도 돼. 상황 봐서 하자." },
      { en: "Let's talk again tomorrow morning.", ko: "내일 아침에 다시 얘기하자." },
    ],
  },

  // ───────── Week 4. 컨디션 & 자기관리 ─────────
  {
    id: "sun-07-w4-p1",
    month: M,
    week: 4,
    topic: T4,
    pattern: "I've been feeling ___.",
    meaning: "요즘 (계속) ~해 (최근 컨디션)",
    points: [
      "**have been + -ing** = 얼마 전부터 지금까지 계속 (x I'm feel tired → o I feel tired / I've been feeling tired)",
      "부정은 **I haven't been feeling ~** 이 자연스러워 (I haven't been feeling great lately.)",
      "**lately** = 요즘 (계속) / **recently** = 최근에 (한 번 있었던 일)",
      "피곤 단계: tired < exhausted / worn out(몸이 녹초) / drained(기 빨린) / beat(캐주얼: 피곤해 죽겠어)",
    ],
    examples: [
      { en: "I've been feeling a bit tired lately.", ko: "요즘 좀 피곤해." },
      { en: "I've been feeling worn out.", ko: "요즘 완전 녹초야." },
      { en: "I haven't been feeling great lately.", ko: "요즘 컨디션이 별로야." },
    ],
  },
  {
    id: "sun-07-w4-p2",
    month: M,
    week: 4,
    topic: T4,
    pattern: "I need to get back into ___.",
    meaning: "~을 다시 시작해야 해 / 루틴으로 돌아가야 해",
    points: [
      "**get back into + 명사/-ing**: x get back into work out → o get back into working out",
      "한동안 쉬었던 걸 다시 익숙하게 하는 느낌",
      "비슷한 표현: **get back on track** (제자리로 돌아오다, 본론으로 돌아가다)",
      "**stay on top of things** = 상황을 잘 챙기다/놓치지 않다",
    ],
    examples: [
      { en: "I need to get back into working out.", ko: "운동 다시 시작해야 해." },
      { en: "My routine is messed up. I need to get back into it.", ko: "루틴이 엉망이야. 다시 돌아가야 해." },
      { en: "Let's get back on track.", ko: "다시 본론으로 돌아가자." },
    ],
  },
  {
    id: "sun-07-w4-p3",
    month: M,
    week: 4,
    topic: T4,
    pattern: "I'm trying to cut back on ___.",
    meaning: "~을 줄이려고 해",
    points: [
      "**on** 빠뜨리지 않기: x cut back sugar → o cut back on sugar",
      "뒤에는 **명사/-ing**: cut back on drinking coffee",
      "**cut down on** = 좀 더 확 줄이기 (주로 나쁜 습관)",
      "음식뿐 아니라 돈·소비에도: cut back on spending",
    ],
    examples: [
      { en: "I'm trying to cut back on sugar.", ko: "설탕 줄이려고 해." },
      { en: "I'm trying to cut back on carbs.", ko: "탄수화물 줄이는 중이야." },
      { en: "I'm trying to cut back on drinking coffee.", ko: "커피 마시는 거 줄이려고 해." },
    ],
  },
  {
    id: "sun-07-w4-p4",
    month: M,
    week: 4,
    topic: T4,
    pattern: "I've been staying up late, so ___.",
    meaning: "요즘 늦게 자서 ~해 (원인 → 결과)",
    points: [
      "원인(I've been -ing, 요즘 계속) + **so** + 결과(지금 상태)",
      "**stay up late** = 늦게까지 안 자다",
      "밤새다: **stay up all night** / **pull an all-nighter**",
      "졸다: **nod off** (꾸벅 졸다) / **doze off** (깜빡 잠들다)",
    ],
    examples: [
      { en: "I've been staying up late, so I'm sleepy all day.", ko: "요즘 늦게 자서 하루 종일 졸려." },
      { en: "I've been staying up late, so I keep nodding off at work.", ko: "요즘 늦게 자서 회사에서 자꾸 꾸벅 졸아." },
      { en: "I pulled an all-nighter last night.", ko: "나 어젯밤에 밤샜어." },
    ],
  },
  {
    id: "sun-07-w4-p5",
    month: M,
    week: 4,
    topic: T4,
    pattern: "I'm going to take it easy ___.",
    meaning: "(이번 주말엔) 좀 쉬려고 해 / 무리 안 하려고",
    points: [
      "**it** 꼭 넣기: x I'm going to easy → o I'm going to take it easy",
      "take it easy = 무리하지 않고 쉬엄쉬엄 하다. 헤어질 때 'Take it easy!'(잘 가, 무리하지 마)로도 써",
      "**recharge** = 재충전하다 (take it easy and recharge)",
      "캐주얼하게: I'm gonna chill this weekend.",
    ],
    examples: [
      { en: "I'm going to take it easy this weekend.", ko: "이번 주말엔 좀 쉬려고 해." },
      { en: "I'm going to take it easy and recharge.", ko: "좀 쉬면서 재충전하려고." },
      { en: "Take it easy!", ko: "무리하지 마! / 잘 가!" },
    ],
  },
];

/** 패턴 영작: 패턴당 5문장 */
export const exercises: SundayExercise[] = [
  // W1 P1 I'm craving ___.
  {
    id: "sun-07-w1-p1-01",
    ko: "나 매운 거 땡겨.",
    answers: ["I'm craving something spicy.", "I'm craving spicy food.", "I'm really craving something spicy."],
    hint: "I'm craving ___.",
  },
  {
    id: "sun-07-w1-p1-02",
    ko: "나 지금 피자 너무 먹고 싶어.",
    answers: ["I'm craving pizza right now.", "I'm really craving pizza right now.", "I'm craving pizza now.", "I'm so craving pizza right now."],
    hint: "I'm craving ___.",
  },
  {
    id: "sun-07-w1-p1-03",
    ko: "요즘 계속 초콜릿이 땡겨.",
    answers: ["I've been craving chocolate lately.", "I've been craving chocolate these days.", "I'm craving chocolate these days.", "Lately, I've been craving chocolate."],
    hint: "I'm craving ___.",
  },
  {
    id: "sun-07-w1-p1-04",
    ko: "비 오니까 따뜻한 국물이 땡기네.",
    answers: [
      "It's raining, so I'm craving warm soup.",
      "I'm craving warm soup because it's raining.",
      "It's raining, so I'm craving hot soup.",
      "I'm craving hot soup because it's raining.",
      "It's raining, so I'm craving something warm.",
      "Since it's raining, I'm craving warm soup.",
    ],
    hint: "I'm craving ___.",
  },
  {
    id: "sun-07-w1-p1-05",
    ko: "나 달달한 거 땡겨.",
    answers: ["I'm craving something sweet.", "I'm craving sweets.", "I'm craving something sugary."],
    hint: "I'm craving ___.",
  },

  // W1 P2 It hits the spot.
  {
    id: "sun-07-w1-p2-01",
    ko: "그 냉면 완전 딱이었어.",
    answers: [
      "That naengmyeon really hit the spot.",
      "That cold noodle soup really hit the spot.",
      "The naengmyeon really hit the spot.",
      "That naengmyeon hit the spot.",
      "Those cold noodles really hit the spot.",
    ],
    hint: "It hits the spot.",
  },
  {
    id: "sun-07-w1-p2-02",
    ko: "더운 날엔 시원한 음료가 딱이야.",
    answers: [
      "A cold drink really hits the spot on a hot day.",
      "A cold drink hits the spot on a hot day.",
      "On a hot day, a cold drink really hits the spot.",
      "On a hot day, a cold drink hits the spot.",
    ],
    hint: "It hits the spot.",
  },
  {
    id: "sun-07-w1-p2-03",
    ko: "운동 끝나고 먹은 그 샌드위치 진짜 딱이었어.",
    answers: [
      "That sandwich after my workout really hit the spot.",
      "The sandwich I had after my workout really hit the spot.",
      "The sandwich I ate after my workout really hit the spot.",
      "The sandwich I had after working out really hit the spot.",
      "That sandwich after working out really hit the spot.",
    ],
    hint: "It hits the spot.",
  },
  {
    id: "sun-07-w1-p2-04",
    ko: "이 따뜻한 국물 완전 딱이다. (지금 먹는 중)",
    answers: ["This warm soup really hits the spot.", "This hot soup really hits the spot.", "This warm broth really hits the spot.", "This warm soup hits the spot."],
    hint: "It hits the spot.",
  },
  {
    id: "sun-07-w1-p2-05",
    ko: "그 낮잠 진짜 딱이었어.",
    answers: ["That nap really hit the spot.", "That nap hit the spot.", "The nap really hit the spot."],
    hint: "It hits the spot.",
  },

  // W1 P3 I'm all about ___. / ___ doesn't do it for me.
  {
    id: "sun-07-w1-p3-01",
    ko: "나 요즘 만두에 완전 꽂혔어.",
    answers: ["I'm all about dumplings these days.", "I'm all about dumplings lately.", "These days, I'm all about dumplings.", "I'm all about dumplings right now."],
    hint: "I'm all about ___.",
  },
  {
    id: "sun-07-w1-p3-02",
    ko: "엄청 단 디저트는 나한텐 별로야.",
    answers: [
      "Super sweet desserts don't do it for me.",
      "Really sweet desserts don't do it for me.",
      "Very sweet desserts don't do it for me.",
      "Super sweet desserts just don't do it for me.",
    ],
    hint: "___ doesn't do it for me.",
  },
  {
    id: "sun-07-w1-p3-03",
    ko: "요즘 나는 새로운 맛집 가보는 거에 꽂혔어.",
    answers: [
      "I'm all about trying new places these days.",
      "I'm all about trying new restaurants these days.",
      "These days, I'm all about trying new places.",
      "These days, I'm all about trying new restaurants.",
      "I'm all about trying new places lately.",
    ],
    hint: "I'm all about ___.",
  },
  {
    id: "sun-07-w1-p3-04",
    ko: "그 카페는 나한텐 별로 안 끌려.",
    answers: ["That café doesn't do it for me.", "That café just doesn't do it for me.", "That café doesn't really do it for me.", "The café doesn't do it for me."],
    hint: "___ doesn't do it for me.",
  },
  {
    id: "sun-07-w1-p3-05",
    ko: "요즘은 간단하게 먹는 게 최고야. (all about)",
    answers: [
      "I'm all about simple meals these days.",
      "I'm all about eating simple meals these days.",
      "These days, I'm all about simple meals.",
      "I'm all about simple food these days.",
      "I'm all about eating simple these days.",
    ],
    hint: "I'm all about ___.",
  },

  // W1 P4 It was way too ___ for me.
  {
    id: "sun-07-w1-p4-01",
    ko: "그거 나한텐 너무 짰어.",
    answers: ["It was way too salty for me.", "It was much too salty for me.", "It was far too salty for me.", "It was too salty for me."],
    hint: "It was way too ___ for me.",
  },
  {
    id: "sun-07-w1-p4-02",
    ko: "그 버거 나한텐 너무 느끼했어.",
    answers: ["The burger was way too greasy for me.", "That burger was way too greasy for me.", "The burger was way too oily for me.", "That burger was way too oily for me."],
    hint: "It was way too ___ for me.",
  },
  {
    id: "sun-07-w1-p4-03",
    ko: "그 떡볶이 나한텐 너무 달았어.",
    answers: ["That tteokbokki was way too sweet for me.", "The tteokbokki was way too sweet for me.", "It was way too sweet for me."],
    hint: "It was way too ___ for me.",
  },
  {
    id: "sun-07-w1-p4-04",
    ko: "그 파스타 나한텐 마늘 맛이 너무 강했어.",
    answers: ["The pasta was way too garlicky for me.", "That pasta was way too garlicky for me.", "The pasta had way too much garlic for me."],
    hint: "It was way too ___ for me.",
  },
  {
    id: "sun-07-w1-p4-05",
    ko: "그 커피 나한텐 너무 썼어.",
    answers: ["The coffee was way too bitter for me.", "That coffee was way too bitter for me.", "The coffee was much too bitter for me."],
    hint: "It was way too ___ for me.",
  },

  // W1 P5 If I had to pick, I'd go with ___.
  {
    id: "sun-07-w1-p5-01",
    ko: "굳이 고르라면 나는 만두로 할래.",
    answers: [
      "If I had to pick, I'd go with the dumplings.",
      "If I had to pick, I'd go with dumplings.",
      "If I had to choose, I'd go with the dumplings.",
      "If I had to choose, I'd go with dumplings.",
    ],
    hint: "If I had to pick, I'd go with ___.",
  },
  {
    id: "sun-07-w1-p5-02",
    ko: "굳이 고르라면 라멘으로 할래.",
    answers: [
      "If I had to pick, I'd go with ramen.",
      "If I had to pick, I'd go with the ramen.",
      "If I had to choose, I'd go with ramen.",
      "If I had to pick, I'd pick ramen.",
    ],
    hint: "If I had to pick, I'd go with ___.",
  },
  {
    id: "sun-07-w1-p5-03",
    ko: "굳이 고르라면 오리지널 맛으로 할래.",
    answers: [
      "If I had to pick, I'd go with the original flavor.",
      "If I had to pick, I'd go with the original.",
      "If I had to pick, I'd go with the original one.",
      "If I had to choose, I'd go with the original flavor.",
    ],
    hint: "If I had to pick, I'd go with ___.",
  },
  {
    id: "sun-07-w1-p5-04",
    ko: "둘 다 좋은데, 굳이 고르라면 피자로 할래.",
    answers: [
      "They're both good, but if I had to pick, I'd go with pizza.",
      "Both are good, but if I had to pick, I'd go with pizza.",
      "I like both, but if I had to pick, I'd go with pizza.",
      "They're both good, but if I had to pick, I'd go with the pizza.",
      "Both are good, but if I had to choose, I'd go with pizza.",
    ],
    hint: "If I had to pick, I'd go with ___.",
  },
  {
    id: "sun-07-w1-p5-05",
    ko: "굳이 고르라면 나는 겨울로 할래. (여름 vs 겨울)",
    answers: ["If I had to pick, I'd go with winter.", "If I had to choose, I'd go with winter.", "If I had to pick, I'd pick winter."],
    hint: "If I had to pick, I'd go with ___.",
  },

  // W2 P1 I'm looking for ___.
  {
    id: "sun-07-w2-p1-01",
    ko: "가벼운 재킷 찾고 있어요.",
    answers: ["I'm looking for a lightweight jacket.", "I'm looking for a light jacket."],
    hint: "I'm looking for ___.",
  },
  {
    id: "sun-07-w2-p1-02",
    ko: "셔츠 찾고 있어요.",
    answers: ["I'm looking for a shirt.", "I'm looking for shirts."],
    hint: "I'm looking for ___.",
  },
  {
    id: "sun-07-w2-p1-03",
    ko: "친구 선물 찾고 있어요.",
    answers: ["I'm looking for a gift for my friend.", "I'm looking for a present for my friend.", "I'm looking for a gift for a friend."],
    hint: "I'm looking for ___.",
  },
  {
    id: "sun-07-w2-p1-04",
    ko: "여행 가서 입을 얇은 가디건 찾고 있어요.",
    answers: [
      "I'm looking for a thin cardigan for my trip.",
      "I'm looking for a light cardigan for my trip.",
      "I'm looking for a thin cardigan to wear on my trip.",
      "I'm looking for a light cardigan to wear on my trip.",
      "I'm looking for a lightweight cardigan for my trip.",
    ],
    hint: "I'm looking for ___.",
  },
  {
    id: "sun-07-w2-p1-05",
    ko: "회사에 입고 갈 슬랙스 찾고 있어요.",
    answers: [
      "I'm looking for trousers to wear to work.",
      "I'm looking for slacks to wear to work.",
      "I'm looking for some trousers to wear to work.",
      "I'm looking for trousers for work.",
      "I'm looking for slacks for work.",
      "I'm looking for dress pants for work.",
    ],
    hint: "I'm looking for ___.",
  },

  // W2 P2 Do you have this in a different ___?
  {
    id: "sun-07-w2-p2-01",
    ko: "이거 다른 색 있어요?",
    answers: ["Do you have this in a different color?", "Do you have this in another color?", "Do you have this in other colors?"],
    hint: "Do you have this in a different ___?",
  },
  {
    id: "sun-07-w2-p2-02",
    ko: "이거 다른 사이즈 있어요?",
    answers: ["Do you have this in a different size?", "Do you have this in another size?", "Do you have this in other sizes?"],
    hint: "Do you have this in a different ___?",
  },
  {
    id: "sun-07-w2-p2-03",
    ko: "이거 검정색 있어요?",
    answers: ["Do you have this in black?", "Do you have this one in black?", "Do you have it in black?"],
    hint: "Do you have this in ___?",
  },
  {
    id: "sun-07-w2-p2-04",
    ko: "이거 L 사이즈 있어요?",
    answers: ["Do you have this in a large?", "Do you have this in large?", "Do you have this in size L?", "Do you have this in an L?", "Do you have this in a size large?"],
    hint: "Do you have this in ___?",
  },
  {
    id: "sun-07-w2-p2-05",
    ko: "이거 한 사이즈 큰 거 있어요?",
    answers: [
      "Do you have this in a bigger size?",
      "Do you have this in a larger size?",
      "Do you have this one size up?",
      "Do you have this in one size up?",
      "Do you have this in one size bigger?",
    ],
    hint: "Do you have this in a different ___?",
  },

  // W2 P3 I'll take it. / I'll pass.
  {
    id: "sun-07-w2-p3-01",
    ko: "이걸로 할게요. 감사합니다!",
    answers: ["I'll take it. Thanks!", "I'll take it. Thank you!", "I'll take this one. Thanks!", "I'll take this one. Thank you!"],
    hint: "I'll take it. / I'll pass.",
  },
  {
    id: "sun-07-w2-p3-02",
    ko: "이번엔 패스할게요.",
    answers: ["I'll pass this time.", "I think I'll pass this time.", "I'll pass on it this time.", "I'll pass for now."],
    hint: "I'll take it. / I'll pass.",
  },
  {
    id: "sun-07-w2-p3-03",
    ko: "세일 중이면 이걸로 할게요.",
    answers: ["If it's on sale, I'll take it.", "I'll take it if it's on sale.", "If it's on sale, I'll take this one."],
    hint: "I'll take it. / I'll pass.",
  },
  {
    id: "sun-07-w2-p3-04",
    ko: "좋은 가격이네요. 이걸로 할게요.",
    answers: ["That's a good deal. I'll take it.", "It's a good deal. I'll take it.", "That's a great deal. I'll take it.", "That's a good price. I'll take it."],
    hint: "I'll take it. / I'll pass.",
  },
  {
    id: "sun-07-w2-p3-05",
    ko: "예쁘긴 한데 너무 비싸서 패스할게요.",
    answers: [
      "It's pretty, but it's too expensive, so I'll pass.",
      "It's pretty but too expensive, so I'll pass.",
      "It's pretty, but it's too expensive. I'll pass.",
      "It's nice, but it's too expensive, so I'll pass.",
      "It's pretty, but it's too pricey, so I'll pass.",
    ],
    hint: "I'll take it. / I'll pass.",
  },

  // W2 P4 I'd like to return/exchange this.
  {
    id: "sun-07-w2-p4-01",
    ko: "이거 반품하고 싶어요.",
    answers: ["I'd like to return this.", "I'd like to return this, please.", "I'd like to return this item.", "I want to return this."],
    hint: "I'd like to return/exchange this.",
  },
  {
    id: "sun-07-w2-p4-02",
    ko: "이거 교환하고 싶어요.",
    answers: ["I'd like to exchange this.", "I'd like to exchange this, please.", "I want to exchange this."],
    hint: "I'd like to return/exchange this.",
  },
  {
    id: "sun-07-w2-p4-03",
    ko: "이거 다른 사이즈로 교환하고 싶어요.",
    answers: ["I'd like to exchange this for a different size.", "I'd like to exchange this for another size.", "I'd like to exchange it for a different size."],
    hint: "I'd like to return/exchange this.",
  },
  {
    id: "sun-07-w2-p4-04",
    ko: "이거 반품하고 싶어요. 영수증 여기 있어요.",
    answers: [
      "I'd like to return this. Here's the receipt.",
      "I'd like to return this. Here's my receipt.",
      "I'd like to return this. Here is the receipt.",
      "I'd like to return this. Here's the receipt, please.",
    ],
    hint: "I'd like to return/exchange this.",
  },
  {
    id: "sun-07-w2-p4-05",
    ko: "이거 다른 색으로 교환하고 싶어요.",
    answers: ["I'd like to exchange this for a different color.", "I'd like to exchange this for another color.", "I'd like to exchange it for a different color."],
    hint: "I'd like to return/exchange this.",
  },

  // W2 P5 It doesn't fit the way I expected.
  {
    id: "sun-07-w2-p5-01",
    ko: "생각했던 핏이 아니에요.",
    answers: ["It doesn't fit the way I expected.", "It doesn't fit the way I thought it would."],
    hint: "It doesn't fit the way I expected.",
  },
  {
    id: "sun-07-w2-p5-02",
    ko: "생각했던 핏이 아니에요. 좀 너무 꽉 껴요.",
    answers: [
      "It doesn't fit the way I expected. It's a little too tight.",
      "It doesn't fit the way I expected. It's a bit too tight.",
      "It doesn't fit the way I expected. It's too tight.",
      "It doesn't fit the way I expected. It's kind of too tight.",
    ],
    hint: "It doesn't fit the way I expected.",
  },
  {
    id: "sun-07-w2-p5-03",
    ko: "생각했던 핏이 아니에요. 너무 헐렁해요.",
    answers: [
      "It doesn't fit the way I expected. It's too loose.",
      "It doesn't fit the way I expected. It's way too loose.",
      "It doesn't fit the way I expected. It's too baggy.",
    ],
    hint: "It doesn't fit the way I expected.",
  },
  {
    id: "sun-07-w2-p5-04",
    ko: "이 바지 생각했던 핏이 아니에요.",
    answers: ["These pants don't fit the way I expected.", "These trousers don't fit the way I expected.", "These pants don't fit the way I thought they would."],
    hint: "It doesn't fit the way I expected.",
  },
  {
    id: "sun-07-w2-p5-05",
    ko: "그 셔츠 생각했던 핏이 아니었어. (과거)",
    answers: ["The shirt didn't fit the way I expected.", "That shirt didn't fit the way I expected.", "The shirt didn't fit the way I thought it would."],
    hint: "It doesn't fit the way I expected.",
  },

  // W3 P1 Are you down to ___?
  {
    id: "sun-07-w3-p1-01",
    ko: "퇴근하고 커피 한 잔 할래?",
    answers: [
      "Are you down to grab coffee after work?",
      "Are you down to grab a coffee after work?",
      "Are you down to get coffee after work?",
      "Are you down to grab some coffee after work?",
    ],
    hint: "Are you down to ___?",
  },
  {
    id: "sun-07-w3-p1-02",
    ko: "이번 주말에 산책할래?",
    answers: ["Are you down to go for a walk this weekend?", "Are you down to take a walk this weekend?", "Are you down to go on a walk this weekend?"],
    hint: "Are you down to ___?",
  },
  {
    id: "sun-07-w3-p1-03",
    ko: "점심 간단히 먹을래?",
    answers: ["Are you down to grab lunch?", "Are you down to grab some lunch?", "Are you down to grab a quick lunch?"],
    hint: "Are you down to ___?",
  },
  {
    id: "sun-07-w3-p1-04",
    ko: "오늘 밤에 영화 볼래?",
    answers: ["Are you down to watch a movie tonight?", "Are you down to see a movie tonight?", "Are you down to go to the movies tonight?", "Are you down to catch a movie tonight?"],
    hint: "Are you down to ___?",
  },
  {
    id: "sun-07-w3-p1-05",
    ko: "금요일에 가볍게 한잔할래?",
    answers: [
      "Are you down to grab a drink on Friday?",
      "Are you down to grab drinks on Friday?",
      "Are you down to get a drink on Friday?",
      "Are you down to have a drink on Friday?",
      "Are you down to grab a drink Friday?",
    ],
    hint: "Are you down to ___?",
  },

  // W3 P2 I'm free on ___. / I'm not available on ___.
  {
    id: "sun-07-w3-p2-01",
    ko: "나 토요일 오후에 시간 돼.",
    answers: ["I'm free on Saturday afternoon.", "I'm free Saturday afternoon."],
    hint: "I'm free on ___. / I'm not available on ___.",
  },
  {
    id: "sun-07-w3-p2-02",
    ko: "나 금요일은 안 돼.",
    answers: ["I'm not available on Friday.", "I'm not free on Friday.", "I can't do Friday.", "I'm not available Friday."],
    hint: "I'm free on ___. / I'm not available on ___.",
  },
  {
    id: "sun-07-w3-p2-03",
    ko: "나 일요일엔 시간 되는데, 월요일은 안 돼.",
    answers: [
      "I'm free on Sunday, but I'm not available on Monday.",
      "I'm free on Sunday, but I'm not free on Monday.",
      "I'm free on Sunday, but not on Monday.",
      "I'm free on Sunday, but I can't do Monday.",
    ],
    hint: "I'm free on ___. / I'm not available on ___.",
  },
  {
    id: "sun-07-w3-p2-04",
    ko: "나 이번 주 수요일 저녁에 시간 돼.",
    answers: ["I'm free on Wednesday evening this week.", "I'm free this Wednesday evening.", "I'm free on Wednesday night this week.", "I'm free this Wednesday night."],
    hint: "I'm free on ___. / I'm not available on ___.",
  },
  {
    id: "sun-07-w3-p2-05",
    ko: "미안, 나 주말엔 안 돼.",
    answers: [
      "Sorry, I'm not available on the weekend.",
      "Sorry, I'm not available on weekends.",
      "Sorry, I'm not free on the weekend.",
      "Sorry, I'm not available this weekend.",
      "Sorry, I'm not available on the weekends.",
    ],
    hint: "I'm free on ___. / I'm not available on ___.",
  },

  // W3 P3 How about ___ instead?
  {
    id: "sun-07-w3-p3-01",
    ko: "대신 7시는 어때?",
    answers: ["How about 7 instead?", "How about 7 pm instead?", "How about 7 o'clock instead?"],
    hint: "How about ___ instead?",
  },
  {
    id: "sun-07-w3-p3-02",
    ko: "5시는 좀 애매해. 대신 6시 어때?",
    answers: [
      "I'm not sure about 5. How about 6 instead?",
      "5 doesn't really work for me. How about 6 instead?",
      "5 is a bit tricky for me. How about 6 instead?",
      "5 is a little tricky. How about 6 instead?",
    ],
    hint: "How about ___ instead?",
  },
  {
    id: "sun-07-w3-p3-03",
    ko: "대신 토요일은 어때?",
    answers: ["How about Saturday instead?"],
    hint: "How about ___ instead?",
  },
  {
    id: "sun-07-w3-p3-04",
    ko: "대신 우리 집 근처 카페는 어때?",
    answers: [
      "How about a café near my place instead?",
      "How about a café near my house instead?",
      "How about the café near my place instead?",
      "How about the café near my house instead?",
      "How about a café near my home instead?",
    ],
    hint: "How about ___ instead?",
  },
  {
    id: "sun-07-w3-p3-05",
    ko: "대신 점심 먹는 건 어때?",
    answers: ["How about lunch instead?", "How about having lunch instead?", "How about grabbing lunch instead?", "How about getting lunch instead?"],
    hint: "How about ___ instead?",
  },

  // W3 P4 I might be able to ___.
  {
    id: "sun-07-w3-p4-01",
    ko: "아마 갈 수 있을 것 같아. (확실하진 않아)",
    answers: ["I might be able to make it.", "I might be able to go.", "I might be able to come."],
    hint: "I might be able to ___.",
  },
  {
    id: "sun-07-w3-p4-02",
    ko: "나중에 합류할 수 있을지도 몰라.",
    answers: ["I might be able to join later.", "I might be able to join you later.", "I might be able to join you guys later."],
    hint: "I might be able to ___.",
  },
  {
    id: "sun-07-w3-p4-03",
    ko: "일 일찍 끝나면 갈 수 있을지도 몰라.",
    answers: [
      "If I get off work early, I might be able to make it.",
      "I might be able to make it if I get off work early.",
      "If I get off work early, I might be able to go.",
      "If I finish work early, I might be able to make it.",
      "I might be able to go if I get off work early.",
      "If I finish work early, I might be able to go.",
    ],
    hint: "I might be able to ___.",
  },
  {
    id: "sun-07-w3-p4-04",
    ko: "이번 주말에 너 도와줄 수 있을지도 몰라.",
    answers: ["I might be able to help you this weekend.", "I might be able to help you out this weekend.", "I might be able to help this weekend."],
    hint: "I might be able to ___.",
  },
  {
    id: "sun-07-w3-p4-05",
    ko: "다음 주엔 돈 갚을 수 있을지도 몰라.",
    answers: ["I might be able to pay you back next week.", "I might be able to pay you next week.", "I might be able to pay you back by next week."],
    hint: "I might be able to ___.",
  },

  // W3 P5 Let's play it by ear.
  {
    id: "sun-07-w3-p5-01",
    ko: "비 오면 상황 봐서 하자.",
    answers: ["If it rains, let's play it by ear.", "Let's play it by ear if it rains."],
    hint: "Let's play it by ear.",
  },
  {
    id: "sun-07-w3-p5-02",
    ko: "지금 안 정해도 돼. 상황 봐서 하자.",
    answers: [
      "We don't have to decide now. Let's play it by ear.",
      "We don't need to decide now. Let's play it by ear.",
      "We don't have to decide right now. Let's play it by ear.",
      "We don't need to decide right now. Let's play it by ear.",
    ],
    hint: "Let's play it by ear.",
  },
  {
    id: "sun-07-w3-p5-03",
    ko: "날씨 보고 상황 봐서 하자.",
    answers: [
      "Let's check the weather and play it by ear.",
      "Let's play it by ear depending on the weather.",
      "Let's see the weather and play it by ear.",
      "Let's see how the weather is and play it by ear.",
    ],
    hint: "Let's play it by ear.",
  },
  {
    id: "sun-07-w3-p5-04",
    ko: "나 몇 시에 끝날지 몰라서, 상황 봐서 하자.",
    answers: [
      "I don't know when I'll finish, so let's play it by ear.",
      "I'm not sure when I'll finish, so let's play it by ear.",
      "I don't know what time I'll finish, so let's play it by ear.",
      "I'm not sure what time I'll finish, so let's play it by ear.",
      "I don't know when I'll be done, so let's play it by ear.",
    ],
    hint: "Let's play it by ear.",
  },
  {
    id: "sun-07-w3-p5-05",
    ko: "그냥 상황 봐서 하자.",
    answers: ["Let's just play it by ear.", "Let's play it by ear."],
    hint: "Let's play it by ear.",
  },

  // W4 P1 I've been feeling ___.
  {
    id: "sun-07-w4-p1-01",
    ko: "요즘 좀 피곤해.",
    answers: [
      "I've been feeling a bit tired lately.",
      "I've been feeling a little tired lately.",
      "I've been feeling kind of tired lately.",
      "I've been feeling a bit tired these days.",
      "I've been feeling tired lately.",
    ],
    hint: "I've been feeling ___.",
  },
  {
    id: "sun-07-w4-p1-02",
    ko: "요즘 스트레스 받아.",
    answers: ["I've been feeling stressed lately.", "I've been feeling stressed out lately.", "I've been feeling stressed these days.", "I've been feeling stressed out these days."],
    hint: "I've been feeling ___.",
  },
  {
    id: "sun-07-w4-p1-03",
    ko: "요즘 몸이 완전 녹초야.",
    answers: ["I've been feeling worn out lately.", "I've been feeling so worn out lately.", "I've been feeling really worn out lately.", "I've been feeling exhausted lately.", "I've been feeling worn out these days."],
    hint: "I've been feeling ___.",
  },
  {
    id: "sun-07-w4-p1-04",
    ko: "요즘 컨디션이 별로야.",
    answers: [
      "I haven't been feeling great lately.",
      "I haven't been feeling well lately.",
      "I haven't been feeling good lately.",
      "I haven't been feeling great these days.",
      "I haven't been feeling my best lately.",
    ],
    hint: "I've been feeling ___. (부정: I haven't been feeling ~)",
  },
  {
    id: "sun-07-w4-p1-05",
    ko: "요즘 좀 기 빨린 느낌이야.",
    answers: ["I've been feeling a bit drained lately.", "I've been feeling a little drained lately.", "I've been feeling drained lately.", "I've been feeling kind of drained lately."],
    hint: "I've been feeling ___.",
  },

  // W4 P2 I need to get back into ___.
  {
    id: "sun-07-w4-p2-01",
    ko: "나 운동 다시 시작해야 해.",
    answers: ["I need to get back into working out.", "I need to get back into exercising.", "I need to get back into exercise."],
    hint: "I need to get back into ___.",
  },
  {
    id: "sun-07-w4-p2-02",
    ko: "나 원래 루틴으로 다시 돌아가야 해.",
    answers: ["I need to get back into my routine.", "I need to get back into my old routine.", "I need to get back into my usual routine."],
    hint: "I need to get back into ___.",
  },
  {
    id: "sun-07-w4-p2-03",
    ko: "나 영어 공부 다시 시작해야 해.",
    answers: ["I need to get back into studying English.", "I need to get back into English."],
    hint: "I need to get back into ___.",
  },
  {
    id: "sun-07-w4-p2-04",
    ko: "휴가 끝났으니까 다시 일 모드로 돌아가야 해.",
    answers: [
      "My vacation is over, so I need to get back into work mode.",
      "The vacation is over, so I need to get back into work mode.",
      "Vacation is over, so I need to get back into work mode.",
      "My vacation's over, so I need to get back into work mode.",
      "Now that my vacation is over, I need to get back into work mode.",
    ],
    hint: "I need to get back into ___.",
  },
  {
    id: "sun-07-w4-p2-05",
    ko: "나 책 읽는 습관 다시 들여야 해.",
    answers: ["I need to get back into reading.", "I need to get back into the habit of reading.", "I need to get back into reading books."],
    hint: "I need to get back into ___.",
  },

  // W4 P3 I'm trying to cut back on ___.
  {
    id: "sun-07-w4-p3-01",
    ko: "나 설탕 줄이려고 해.",
    answers: ["I'm trying to cut back on sugar.", "I'm trying to cut down on sugar."],
    hint: "I'm trying to cut back on ___.",
  },
  {
    id: "sun-07-w4-p3-02",
    ko: "탄수화물 줄이려고 하는 중이야.",
    answers: ["I'm trying to cut back on carbs.", "I'm trying to cut down on carbs.", "I'm trying to cut back on carbohydrates."],
    hint: "I'm trying to cut back on ___.",
  },
  {
    id: "sun-07-w4-p3-03",
    ko: "커피 마시는 거 줄이려고 해.",
    answers: [
      "I'm trying to cut back on drinking coffee.",
      "I'm trying to cut back on coffee.",
      "I'm trying to cut down on drinking coffee.",
      "I'm trying to cut down on coffee.",
    ],
    hint: "I'm trying to cut back on ___.",
  },
  {
    id: "sun-07-w4-p3-04",
    ko: "요즘 간식 줄이려고 해.",
    answers: [
      "I'm trying to cut back on snacks these days.",
      "I'm trying to cut back on snacks lately.",
      "I'm trying to cut down on snacks these days.",
      "These days, I'm trying to cut back on snacks.",
      "I'm trying to cut back on snacking these days.",
    ],
    hint: "I'm trying to cut back on ___.",
  },
  {
    id: "sun-07-w4-p3-05",
    ko: "돈 아끼려고 쇼핑 줄이는 중이야.",
    answers: [
      "I'm trying to cut back on shopping to save money.",
      "I'm trying to cut back on shopping so I can save money.",
      "I'm trying to cut down on shopping to save money.",
      "I'm trying to cut back on spending to save money.",
    ],
    hint: "I'm trying to cut back on ___.",
  },

  // W4 P4 I've been staying up late, so ___.
  {
    id: "sun-07-w4-p4-01",
    ko: "요즘 늦게 자서 하루 종일 졸려.",
    answers: [
      "I've been staying up late, so I'm sleepy all day.",
      "I've been staying up late, so I'm sleepy all day long.",
      "I've been staying up late lately, so I'm sleepy all day.",
      "I've been staying up late, so I feel sleepy all day.",
    ],
    hint: "I've been staying up late, so ___.",
  },
  {
    id: "sun-07-w4-p4-02",
    ko: "요즘 늦게 자서 너무 피곤해.",
    answers: [
      "I've been staying up late, so I'm really tired.",
      "I've been staying up late, so I'm so tired.",
      "I've been staying up late, so I'm very tired.",
      "I've been staying up late, so I've been really tired.",
      "I've been staying up late, so I feel really tired.",
    ],
    hint: "I've been staying up late, so ___.",
  },
  {
    id: "sun-07-w4-p4-03",
    ko: "요즘 늦게 자서 회사에서 자꾸 꾸벅 졸아.",
    answers: [
      "I've been staying up late, so I keep nodding off at work.",
      "I've been staying up late, so I keep dozing off at work.",
      "I've been staying up late, so I keep falling asleep at work.",
    ],
    hint: "I've been staying up late, so ___.",
  },
  {
    id: "sun-07-w4-p4-04",
    ko: "요즘 늦게 자서 아침에 일어나기 힘들어.",
    answers: [
      "I've been staying up late, so it's hard to get up in the morning.",
      "I've been staying up late, so it's hard to wake up in the morning.",
      "I've been staying up late, so I have a hard time getting up in the morning.",
      "I've been staying up late, so I have a hard time waking up in the morning.",
      "I've been staying up late, so it's hard for me to get up in the morning.",
    ],
    hint: "I've been staying up late, so ___.",
  },
  {
    id: "sun-07-w4-p4-05",
    ko: "요즘 늦게 자서 커피를 너무 많이 마셔.",
    answers: [
      "I've been staying up late, so I'm drinking too much coffee.",
      "I've been staying up late, so I drink too much coffee.",
      "I've been staying up late, so I've been drinking too much coffee.",
    ],
    hint: "I've been staying up late, so ___.",
  },

  // W4 P5 I'm going to take it easy ___.
  {
    id: "sun-07-w4-p5-01",
    ko: "이번 주말엔 좀 쉬려고 해.",
    answers: ["I'm going to take it easy this weekend.", "This weekend, I'm going to take it easy.", "I'm just going to take it easy this weekend."],
    hint: "I'm going to take it easy ___.",
  },
  {
    id: "sun-07-w4-p5-02",
    ko: "이번 주말엔 쉬면서 재충전하려고.",
    answers: [
      "I'm going to take it easy and recharge this weekend.",
      "This weekend, I'm going to take it easy and recharge.",
      "I'm going to take it easy this weekend and recharge.",
    ],
    hint: "I'm going to take it easy ___.",
  },
  {
    id: "sun-07-w4-p5-03",
    ko: "오늘은 집에서 좀 쉬려고.",
    answers: ["I'm going to take it easy at home today.", "I'm going to take it easy today at home.", "Today, I'm going to take it easy at home.", "I'm just going to take it easy at home today."],
    hint: "I'm going to take it easy ___.",
  },
  {
    id: "sun-07-w4-p5-04",
    ko: "이번 주 너무 바빴어서 주말엔 좀 쉬려고.",
    answers: [
      "I've been so busy this week, so I'm going to take it easy this weekend.",
      "This week was so busy, so I'm going to take it easy this weekend.",
      "I was so busy this week, so I'm going to take it easy this weekend.",
      "I was really busy this week, so I'm going to take it easy this weekend.",
      "I've been really busy this week, so I'm going to take it easy this weekend.",
      "It was a busy week, so I'm going to take it easy this weekend.",
    ],
    hint: "I'm going to take it easy ___.",
  },
  {
    id: "sun-07-w4-p5-05",
    ko: "내일은 무리 안 하고 쉬엄쉬엄 하려고.",
    answers: ["I'm going to take it easy tomorrow.", "Tomorrow, I'm going to take it easy.", "I'm just going to take it easy tomorrow."],
    hint: "I'm going to take it easy ___.",
  },
];

/** 표현 퀴즈 */
export const expressions: SundayExercise[] = [
  {
    id: "sun-07-x01",
    ko: "나 밤에 매운 음식이 자꾸 땡겨 (cravings)",
    answers: ["I have cravings for spicy food at night.", "I get cravings for spicy food at night.", "I have cravings for spicy food at night time."],
    hint: "have cravings for ~ = ~이 계속 땡기다",
    note: "I've been having cravings for chocolate lately.",
  },
  {
    id: "sun-07-x02",
    ko: "나 디저트 먹고 싶은 기분이야 (mood)",
    answers: ["I'm in the mood for dessert.", "I'm in the mood for some dessert.", "I'm in the mood for something sweet."],
    hint: "be in the mood for ~ = ~가 당기는 기분이다",
    note: "I'm not in the mood for anything heavy.",
  },
  {
    id: "sun-07-x03",
    ko: "피자는 나의 소울푸드야 (comfort)",
    answers: ["Pizza is my comfort food.", "Pizza is my go-to comfort food."],
    hint: "comfort food = 위로가 되는 음식, 소울푸드",
    note: "Ramen is my go-to comfort food.",
  },
  {
    id: "sun-07-x04",
    ko: "나 매운 거 잘 못 먹어 (handle)",
    answers: ["I can't handle spicy food.", "I can't really handle spicy food.", "I can't handle spicy things."],
    hint: "can't handle ~ = ~을 잘 못 견디다/못 하다",
    note: "I can't handle horror movies.",
  },
  {
    id: "sun-07-x05",
    ko: "오늘 입맛이 별로 없어 (appetite)",
    answers: ["I don't really have an appetite today.", "I don't have much of an appetite today.", "I don't have an appetite today."],
    hint: "have an appetite = 식욕이 있다",
    note: "I worked out, so I have a huge appetite.",
  },
  {
    id: "sun-07-x06",
    ko: "그거 완전 공감해 (relate)",
    answers: ["I can totally relate.", "I can relate.", "I can totally relate to that.", "I can relate to that."],
    hint: "I can relate. = 공감해, 나도 그래",
    note: "I can relate. I crave noodles at night too.",
  },
  {
    id: "sun-07-x07",
    ko: "이 국물 먹으니까 할머니가 해 주던 수프가 생각났어 (remind)",
    answers: [
      "This broth reminded me of my grandma's soup.",
      "This soup reminded me of my grandma's soup.",
      "This broth reminded me of my grandmother's soup.",
      "This soup reminded me of my grandmother's soup.",
    ],
    hint: "A reminded me of B = A 때문에 B가 떠올랐다",
    note: "The smell reminded me of my trip to Japan.",
  },
  {
    id: "sun-07-x08",
    ko: "우리 회사 근처에 유명한 만두집 있어 (place)",
    answers: [
      "There's a famous dumpling place near my office.",
      "There's a famous dumpling place near my work.",
      "There's a famous dumpling place near my company.",
    ],
    hint: "~ place = ~집 (식당/가게)",
    note: "I know a really good cold noodle place.",
  },
  {
    id: "sun-07-x09",
    ko: "이 샐러드 생각보다 든든하다 (filling)",
    answers: [
      "This salad is surprisingly filling.",
      "This salad is more filling than I thought.",
      "This salad is more filling than I expected.",
    ],
    hint: "filling = 든든한 (배가 차는)",
    note: "It was super filling.",
  },
  {
    id: "sun-07-x10",
    ko: "충전기 좀 빌려줄 수 있어? (lend)",
    answers: ["Can you lend me your charger?", "Could you lend me your charger?", "Can you lend me a charger?"],
    hint: "lend = 빌려주다 (과거 lent)",
    note: "I lent my friend my umbrella yesterday.",
  },
  {
    id: "sun-07-x11",
    ko: "펜 좀 빌려도 돼? (borrow)",
    answers: ["Can I borrow your pen?", "Could I borrow your pen?", "Can I borrow a pen?", "May I borrow your pen?"],
    hint: "borrow = (내가) 빌리다",
    note: "I borrowed a book from the library.",
  },
  {
    id: "sun-07-x12",
    ko: "캠핑은 내 스타일 아니야 (thing)",
    answers: ["Camping is not my thing.", "Camping isn't really my thing.", "Camping's not my thing.", "Camping isn't my thing."],
    hint: "not my thing = 내 스타일 아님",
    note: "Horror movies are not my thing.",
  },
  {
    id: "sun-07-x13",
    ko: "나 그 식당 혼자 갔어 (own)",
    answers: [
      "I went to the restaurant on my own.",
      "I went to that restaurant on my own.",
      "I went to the restaurant by myself.",
      "I went to that restaurant by myself.",
    ],
    hint: "on my own = 혼자, 스스로",
    note: "I want to figure it out on my own.",
  },
  {
    id: "sun-07-x14",
    ko: "출퇴근하는 데 한 시간 정도 걸려 (commute)",
    answers: ["My commute takes about an hour.", "My commute is about an hour.", "It takes about an hour to commute.", "My commute takes around an hour."],
    hint: "commute = 통근(하다)",
    note: "I commute to work by subway.",
  },
  {
    id: "sun-07-x15",
    ko: "가격 치고는 꽤 괜찮았어 (for)",
    answers: ["For the price, it was pretty good.", "It was pretty good for the price.", "For the price, it was really good."],
    hint: "for ~ = ~치고는",
    note: "For a chain restaurant, it was pretty good.",
  },
  {
    id: "sun-07-x16",
    ko: "이거 재고 있어요? (stock)",
    answers: ["Is it in stock?", "Is this in stock?", "Do you have this in stock?", "Do you have it in stock?"],
    hint: "in stock = 재고가 있는",
    note: "Let me check the stock for you.",
  },
  {
    id: "sun-07-x17",
    ko: "그거 품절이에요 (sold)",
    answers: ["It's sold out.", "That's sold out.", "It's sold out right now."],
    hint: "sold out = 품절된",
    note: "Sorry, that size is sold out.",
  },
  {
    id: "sun-07-x18",
    ko: "그거 진짜 좋은 딜이다 (deal)",
    answers: ["That's a really good deal.", "That's a great deal.", "It's a really good deal.", "That's such a good deal."],
    hint: "a good deal = 좋은 가격, 가성비 좋은 거래",
    note: "It's on sale. That's a good deal.",
  },
  {
    id: "sun-07-x19",
    ko: "환불받는 거 너무 귀찮아 (hassle)",
    answers: [
      "Getting a refund is such a hassle.",
      "It's such a hassle to get a refund.",
      "Getting a refund is a hassle.",
      "Getting a refund is a real hassle.",
    ],
    hint: "a hassle = 귀찮은 일, 성가신 일",
    note: "Returning things online is such a hassle.",
  },
  {
    id: "sun-07-x20",
    ko: "이건 서비스예요. (가게에서 공짜로 줄 때) (house)",
    answers: ["It's on the house.", "This is on the house.", "This one's on the house.", "This one is on the house."],
    hint: "on the house = (가게가) 무료로 주는, 서비스",
    note: "The dessert is on the house. (= complimentary)",
  },
  {
    id: "sun-07-x21",
    ko: "친구가 나 바람맞혔어 (bail)",
    answers: ["My friend bailed on me.", "My friend bailed on me today."],
    hint: "bail on (someone) = ~와의 약속을 막판에 깨다",
    note: "He bailed on me at the last minute.",
  },
  {
    id: "sun-07-x22",
    ko: "우리 원래 오늘 만나기로 했었잖아 (supposed)",
    answers: ["We were supposed to meet today.", "We were supposed to meet up today."],
    hint: "be supposed to ~ = 원래 ~하기로 되어 있다",
    note: "I was supposed to finish this yesterday.",
  },
  {
    id: "sun-07-x23",
    ko: "미안, 나 못 갈 것 같아 (make)",
    answers: ["Sorry, I don't think I can make it.", "Sorry, I don't think I'll make it.", "Sorry, I don't think I'll be able to make it.", "Sorry, I can't make it."],
    hint: "make it = (약속에) 가다, 시간 맞춰 가다",
    note: "I might be able to make it after work.",
  },
  {
    id: "sun-07-x24",
    ko: "그건 사람마다 달라 (depends)",
    answers: ["It depends on the person.", "That depends on the person."],
    hint: "It depends on ~ = ~에 따라 달라 (케바케, 사바사)",
    note: "It depends on work.",
  },
  {
    id: "sun-07-x25",
    ko: "나 요즘 할 일이 너무 많아 (plate)",
    answers: [
      "I have a lot on my plate these days.",
      "I've got a lot on my plate these days.",
      "I have so much on my plate these days.",
      "I have a lot on my plate lately.",
      "I have a lot on my plate right now.",
    ],
    hint: "have a lot on my plate = 할 일이 산더미다",
    note: "I can't take on more work. I have a lot on my plate.",
  },
  {
    id: "sun-07-x26",
    ko: "그거 차근차근 설명해 줄래? (walk)",
    answers: ["Can you walk me through it?", "Could you walk me through it?", "Can you walk me through that?", "Could you walk me through that?"],
    hint: "walk (someone) through ~ = 차근차근 설명해 주다",
    note: "Can you walk me through the process?",
  },
  {
    id: "sun-07-x27",
    ko: "다시 본론으로 돌아가자 (track)",
    answers: ["Let's get back on track.", "Let's get back on track, okay?"],
    hint: "get back on track = 제자리로(본론으로) 돌아오다",
    note: "Let's get back on track and talk about next year's plan.",
  },
  {
    id: "sun-07-x28",
    ko: "나 어젯밤에 밤샜어 (all-nighter)",
    answers: ["I pulled an all-nighter last night.", "I pulled an all-nighter yesterday.", "I stayed up all night last night."],
    hint: "pull an all-nighter = 밤새다 (= stay up all night)",
    note: "I had to pull an all-nighter for the exam.",
  },
  {
    id: "sun-07-x29",
    ko: "나 수업 중에 깜빡 졸았어 (doze)",
    answers: ["I dozed off in class.", "I dozed off during class.", "I nodded off in class.", "I nodded off during class."],
    hint: "doze off / nod off = 깜빡 졸다",
    note: "I almost nodded off on the bus.",
  },
  {
    id: "sun-07-x30",
    ko: "옆으로 좀만 가 줄래? (앉은 자리에서) (scooch)",
    answers: ["Can you scooch over?", "Can you scooch over, please?", "Could you scooch over?", "Could you scooch over, please?"],
    hint: "scooch over = (앉은 채로) 옆으로 살짝 비키다",
    note: "Scooch over a little so I can sit down.",
  },
];
