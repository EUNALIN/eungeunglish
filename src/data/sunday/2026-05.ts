import type { SundayExercise, SundayPattern } from "@/lib/types";

const T1 = "서운함·섭섭함 차분하게 말하기";
const T2 = "예시·디테일 붙여서 말 길게 하기";
const T3 = "경험 공유하기 (해본 적 있어?)";
const T4 = "나만의 기준·선호 말하기";

export const patterns: SundayPattern[] = [
  // ───────── Week 1 ─────────
  {
    id: "sun-05-w1-p1",
    month: "2026-05",
    week: 1,
    topic: T1,
    pattern: "I feel a little hurt (that/because ___).",
    meaning: "나 좀 서운해 / 상처받았어 (부드러운 톤)",
    points: [
      "**feel + 형용사**로 감정을 말해요. hurt는 여기서 '상처받은'이라는 형용사처럼 쓰여요.",
      "**a little**을 넣으면 공격적이지 않고 부드럽게 들려요.",
      "몸이 아플 때도 hurt: My wrist hurts. (손목이 아파) / I hurt my wrist. (손목을 다쳤어)",
      "이유는 뒤에 that/because + 문장으로 붙여요: I feel a little hurt that you forgot.",
    ],
    examples: [
      { en: "I feel a little hurt.", ko: "나 좀 서운해." },
      { en: "I feel a little hurt that you didn't call me.", ko: "네가 전화 안 해서 좀 서운해." },
      { en: "I felt a little hurt when you ignored my message.", ko: "네가 내 메시지 무시했을 때 좀 서운했어." },
    ],
  },
  {
    id: "sun-05-w1-p2",
    month: "2026-05",
    week: 1,
    topic: T1,
    pattern: "I was kind of disappointed (with ___).",
    meaning: "좀 실망했어",
    points: [
      "**kind of** = 약간, 좀 (톤 완화). 빠르게 말하면 '카이너v'처럼 들려요.",
      "실망한 대상: disappointed **with** + 사람/것 (by, in도 가능)",
      "x I was kind of disappointing → o I was kind of disappointed (내가 실망한 거면 -ed)",
      "The movie was disappointing. = 영화가 실망스러웠어 (대상이 주어면 -ing)",
    ],
    examples: [
      { en: "I was kind of disappointed.", ko: "좀 실망했어." },
      { en: "I was kind of disappointed with my friend.", ko: "친구한테 좀 실망했어." },
      { en: "They're disappointed with the service.", ko: "그 사람들 서비스에 실망했어." },
    ],
  },
  {
    id: "sun-05-w1-p3",
    month: "2026-05",
    week: 1,
    topic: T1,
    pattern: "It bothered me (that ___).",
    meaning: "그게 좀 신경 쓰였어 / 마음에 걸렸어",
    points: [
      "**bother** = 신경 쓰이게 하다, 거슬리게 하다 (부정적인 느낌)",
      "신경 쓰인 이유는 that + 문장: It bothered me that you were late.",
      "현재형: It bothers me. / 질문: Does it bother you?",
      "비슷한 표현: It's annoying. (짜증나) / It sucks. (진짜 별로야, 캐주얼)",
    ],
    examples: [
      { en: "It bothered me.", ko: "그게 좀 신경 쓰였어." },
      { en: "It bothered me that you didn't tell me.", ko: "네가 나한테 말 안 한 게 마음에 걸렸어." },
      { en: "What bothers you more, tone or being late?", ko: "뭐가 더 신경 쓰여, 말투야 아니면 늦는 거야?" },
    ],
  },
  {
    id: "sun-05-w1-p4",
    month: "2026-05",
    week: 1,
    topic: T1,
    pattern: "I felt left out (when ___).",
    meaning: "소외된 느낌이었어 / 나만 빠진 느낌이었어",
    points: [
      "**left out** = 제외된, 소외된 (= excluded)",
      "상황은 when + 문장: I felt left out when you didn't invite me.",
      "leave ~ out = ~를 빼다: Why are you leaving me out? (왜 나만 빼?) / Don't leave me out.",
    ],
    examples: [
      { en: "I felt left out at the party.", ko: "파티에서 소외된 느낌이었어." },
      { en: "I felt left out when you didn't invite me.", ko: "네가 날 초대 안 했을 때 소외된 느낌이었어." },
      { en: "Why are you leaving me out of the plan?", ko: "왜 계획에서 나만 빼는 거야?" },
    ],
  },
  {
    id: "sun-05-w1-p5",
    month: "2026-05",
    week: 1,
    topic: T1,
    pattern: "I just wanted you to ___.",
    meaning: "난 그냥 네가 ___ 해줬으면 했어",
    points: [
      "**want + 사람 + to + 동사원형** = (사람)이 ~하길 원하다",
      "x I just wanted that you tell me → o I just wanted you to tell me",
      "**just**가 들어가서 요구를 공격적이지 않게, 서운한 마음으로 전달해요.",
    ],
    examples: [
      { en: "I just wanted you to tell me.", ko: "난 그냥 네가 말해줬으면 했어." },
      { en: "I just wanted you to text me.", ko: "난 그냥 네가 문자 해줬으면 했어." },
      { en: "I just wanted you to check in.", ko: "난 그냥 네가 연락 한 번 해줬으면 했어." },
    ],
  },

  // ───────── Week 2 ─────────
  {
    id: "sun-05-w2-p1",
    month: "2026-05",
    week: 2,
    topic: T2,
    pattern: "For example, ___.",
    meaning: "예를 들면 ___",
    points: [
      "말한 내용 뒤에 구체적인 예시를 붙여서 대화를 길게 만들어요.",
      "뒤에는 완전한 문장이 와요: For example, I wake up late on weekends.",
      "짜증 포인트를 말할 때: One of my pet peeves is ~. For example, ~.",
    ],
    examples: [
      { en: "For example, I wake up late on weekends.", ko: "예를 들면, 난 주말에 늦게 일어나." },
      { en: "I have some healthy habits. For example, I walk every day.", ko: "나 건강한 습관이 좀 있어. 예를 들면, 매일 걸어." },
      { en: "For example, it's annoying when people are late.", ko: "예를 들면, 사람들이 늦으면 짜증나." },
    ],
  },
  {
    id: "sun-05-w2-p2",
    month: "2026-05",
    week: 2,
    topic: T2,
    pattern: "Like ___.",
    meaning: "예를 들어 ___ / ~ 같은 거 (더 캐주얼)",
    points: [
      "For example보다 가볍고 캐주얼해요. 주로 명사나 짧은 말을 붙여요.",
      "문장 끝에 콤마 + like ~: I like warm drinks, like coffee or tea.",
      "for example 뒤엔 보통 문장, like 뒤엔 명사/짧은 구가 자연스러워요.",
    ],
    examples: [
      { en: "Like coffee or tea.", ko: "커피나 차 같은 거." },
      { en: "I like quiet places, like libraries.", ko: "나 조용한 데 좋아해, 도서관 같은 데." },
      { en: "I'm craving something sweet, like chocolate.", ko: "단 거 땡겨, 초콜릿 같은 거." },
    ],
  },
  {
    id: "sun-05-w2-p3",
    month: "2026-05",
    week: 2,
    topic: T2,
    pattern: "Especially ___.",
    meaning: "특히 ___",
    points: [
      "**Especially + 시간/상황**: especially on weekends / these days / at night",
      "앞 문장 끝에 콤마로 붙이면 자연스러워요: I'm tired, especially at night.",
      "전치사 주의: on weekends, at night, in the morning",
    ],
    examples: [
      { en: "Especially on weekends.", ko: "특히 주말에." },
      { en: "I'm so tired these days, especially at night.", ko: "요즘 너무 피곤해, 특히 밤에." },
      { en: "I love coffee, especially in the morning.", ko: "나 커피 좋아해, 특히 아침에." },
    ],
  },
  {
    id: "sun-05-w2-p4",
    month: "2026-05",
    week: 2,
    topic: T2,
    pattern: "One time, ___.",
    meaning: "한 번은 ___ (짧은 에피소드 시작)",
    points: [
      "과거 이야기라서 뒤 문장은 **과거형**: One time, I missed the last train.",
      "**one time** = 한 번 있었던 짧은 경험 / **one day** = 어느 날(긴 일화), 또는 미래의 '언젠가'",
      "I want to get married one day. (언젠가, 미래)",
      "notice = 새로 눈치채다 / recognize = 이미 아는 걸 알아보다",
    ],
    examples: [
      { en: "One time, I missed the last train.", ko: "한 번은 막차를 놓쳤어." },
      { en: "One time, I got carsick on the bus.", ko: "한 번은 버스에서 멀미했어." },
      { en: "One time, I recognized an old friend on the street.", ko: "한 번은 길에서 옛 친구를 알아봤어." },
    ],
  },
  {
    id: "sun-05-w2-p5",
    month: "2026-05",
    week: 2,
    topic: T2,
    pattern: "That's why ___.",
    meaning: "그래서 ___야 (앞에서 이유를 설명한 뒤 결과)",
    points: [
      "앞에 이유를 말하고, **That's why + 결과 문장**으로 마무리해요.",
      "x That's why because I stayed home → o That's why I stayed home",
      "이유를 먼저 말하려면 That's because ~ (그건 ~ 때문이야)",
    ],
    examples: [
      { en: "That's why I don't go out on weekdays.", ko: "그래서 나 평일엔 안 나가." },
      { en: "That's why I stayed home.", ko: "그래서 집에 있었어." },
      { en: "Coffee keeps me up. That's why I don't drink it at night.", ko: "커피 마시면 잠이 안 와. 그래서 밤엔 안 마셔." },
    ],
  },

  // ───────── Week 3 ─────────
  {
    id: "sun-05-w3-p1",
    month: "2026-05",
    week: 3,
    topic: T3,
    pattern: "Have you ever ___?",
    meaning: "___ 해본 적 있어?",
    points: [
      "**Have you ever + p.p.?** = 경험을 물어요.",
      "Have you done your homework? (했어? 경험/완료) vs Did you do your homework? (했어? 팩트 체크)",
      "가본 적 있어? = Have you ever **been** to ~? (gone 아님)",
      "x Have you ever try it? → o Have you ever tried it?",
    ],
    examples: [
      { en: "Have you ever changed jobs?", ko: "이직해 본 적 있어?" },
      { en: "Have you ever been to Japan?", ko: "일본 가본 적 있어?" },
      { en: "Have you ever taken a class online?", ko: "온라인으로 수업 들어본 적 있어?" },
    ],
  },
  {
    id: "sun-05-w3-p2",
    month: "2026-05",
    week: 3,
    topic: T3,
    pattern: "I've never ___.",
    meaning: "난 한 번도 ___ 안 해봤어",
    points: [
      "**I've never + p.p.** = 경험이 한 번도 없다",
      "never 자체가 부정이라 not을 또 붙이지 않아요: x I haven't never → o I've never",
      "뒤에 but I want to를 붙이면 대화가 이어져요: I've never tried it, but I want to.",
    ],
    examples: [
      { en: "I've never tried solo travel.", ko: "난 혼자 여행 한 번도 안 해봤어." },
      { en: "I've never been to Europe.", ko: "난 유럽에 한 번도 안 가봤어." },
      { en: "I've never changed jobs, but I want to.", ko: "이직은 한 번도 안 해봤는데, 해보고 싶어." },
    ],
  },
  {
    id: "sun-05-w3-p3",
    month: "2026-05",
    week: 3,
    topic: T3,
    pattern: "I've done/tried it once.",
    meaning: "한 번 해봤어",
    points: [
      "**once** = 한 번 (twice = 두 번, three times = 세 번)",
      "'딱 한 번만'은 only once: I've only been there once.",
      "음식은 tried(먹어봤다), 활동은 done/tried 둘 다 OK",
    ],
    examples: [
      { en: "I've done it once.", ko: "한 번 해봤어." },
      { en: "I've tried it once.", ko: "한 번 먹어봤어 / 해봤어." },
      { en: "I've only been camping once.", ko: "캠핑은 딱 한 번 가봤어." },
    ],
  },
  {
    id: "sun-05-w3-p4",
    month: "2026-05",
    week: 3,
    topic: T3,
    pattern: "I used to ___.",
    meaning: "예전엔 ___했어 (지금은 안 함)",
    points: [
      "**used to + 동사원형** = 과거의 습관/상태, 지금은 아니라는 뜻이 들어있어요.",
      "x I used to working late → o I used to work late",
      "질문: What did you **use** to do? (did 뒤엔 use)",
      "be used to + -ing(~에 익숙하다)와 헷갈리지 않기",
    ],
    examples: [
      { en: "I used to work late.", ko: "예전엔 늦게까지 일했어." },
      { en: "I used to smoke.", ko: "예전엔 담배 폈어." },
      { en: "What did you use to do a lot?", ko: "예전에 뭐 많이 했어?" },
    ],
  },
  {
    id: "sun-05-w3-p5",
    month: "2026-05",
    week: 3,
    topic: T3,
    pattern: "Not anymore.",
    meaning: "이제는 안 해 / 이제는 아니야",
    points: [
      "used to와 세트로 쓰면 좋아요: I used to ~, but not anymore.",
      "짧게 대답할 때도 OK: Do you still smoke? / Not anymore.",
      "문장으로: I don't ~ anymore. / I'm not ~ anymore. (anymore는 부정문에서 문장 끝)",
    ],
    examples: [
      { en: "I used to drink every weekend, but not anymore.", ko: "예전엔 주말마다 술 마셨는데, 이제는 안 해." },
      { en: "Do you still live there? Not anymore.", ko: "아직 거기 살아? 이제는 아니야." },
      { en: "I don't eat fast food anymore.", ko: "나 이제 패스트푸드 안 먹어." },
    ],
  },

  // ───────── Week 4 ─────────
  {
    id: "sun-05-w4-p1",
    month: "2026-05",
    week: 4,
    topic: T4,
    pattern: "My rule is ___.",
    meaning: "내 규칙은 ___야",
    points: [
      "뒤에는 짧은 명사구(no phone in bed, one coffee a day)나 to + 동사원형이 와요.",
      "My rule is to go to bed before midnight. (to 부정사)",
      "안 하는 규칙은 no + 명사: My rule is no phone in bed.",
    ],
    examples: [
      { en: "My rule is one coffee a day.", ko: "내 규칙은 하루 커피 한 잔이야." },
      { en: "My rule is no phone in bed.", ko: "내 규칙은 침대에서 폰 금지야." },
      { en: "My rule is to go to bed before midnight.", ko: "내 규칙은 자정 전에 자는 거야." },
    ],
  },
  {
    id: "sun-05-w4-p2",
    month: "2026-05",
    week: 4,
    topic: T4,
    pattern: "I try not to ___.",
    meaning: "___ 안 하려고 해",
    points: [
      "**try not to + 동사원형** = ~하지 않으려고 노력하다",
      "not의 위치 주의: x I don't try to overthink (시도를 안 함) → o I try not to overthink",
      "하려고 하는 건 I try to ~: I try to sleep early.",
    ],
    examples: [
      { en: "I try not to overthink.", ko: "너무 생각 많이 안 하려고 해." },
      { en: "I try not to eat late at night.", ko: "밤늦게 안 먹으려고 해." },
      { en: "I try not to check my phone in bed.", ko: "침대에서 폰 안 보려고 해." },
    ],
  },
  {
    id: "sun-05-w4-p3",
    month: "2026-05",
    week: 4,
    topic: T4,
    pattern: "I'm okay with ___.",
    meaning: "___ 괜찮아 (받아들일 수 있어)",
    points: [
      "**be okay with + 명사/-ing**: I'm okay with waiting. / I'm okay with small talk.",
      "x I'm okay with wait → o I'm okay with waiting (동사는 -ing로)",
      "남들은 싫어해도 난 괜찮은 것을 말할 때 딱 좋아요.",
    ],
    examples: [
      { en: "I'm okay with waiting.", ko: "난 기다리는 거 괜찮아." },
      { en: "I'm okay with being alone.", ko: "난 혼자 있는 거 괜찮아." },
      { en: "I'm okay with small talk.", ko: "난 스몰토크 괜찮아." },
    ],
  },
  {
    id: "sun-05-w4-p4",
    month: "2026-05",
    week: 4,
    topic: T4,
    pattern: "I'm not okay with ___.",
    meaning: "___는 싫어 / 못 받아들여",
    points: [
      "**be not okay with + 명사/-ing** = 그건 받아들일 수 없어 (단호하지만 차분한 톤)",
      "x I'm not okay with lie → o I'm not okay with lying",
      "더 강하게: That's a dealbreaker for me.",
    ],
    examples: [
      { en: "I'm not okay with lying.", ko: "거짓말은 못 받아들여." },
      { en: "I'm not okay with being ignored.", ko: "무시당하는 건 싫어." },
      { en: "I'm not okay with breaking promises.", ko: "약속 어기는 건 싫어." },
    ],
  },
  {
    id: "sun-05-w4-p5",
    month: "2026-05",
    week: 4,
    topic: T4,
    pattern: "That's a dealbreaker (for me).",
    meaning: "그건 절대 못 참아 / 바로 아웃",
    points: [
      "**dealbreaker** = 그것 하나로 관계/거래를 끝낼 만큼 절대 못 받아들이는 것",
      "~ is a dealbreaker for me. (주어 자리에 구체적인 행동)",
      "질문: What's a dealbreaker for you? / What's your dealbreaker?",
    ],
    examples: [
      { en: "That's a dealbreaker for me.", ko: "그건 나한테 절대 안 돼." },
      { en: "Lying is a dealbreaker for me.", ko: "거짓말은 나한테 바로 아웃이야." },
      { en: "What's a dealbreaker in friendship?", ko: "친구 관계에서 절대 못 참는 건 뭐야?" },
    ],
  },
];

/** 패턴 영작: 패턴당 5문장 */
export const exercises: SundayExercise[] = [
  // ───────── Week 1 · p1 I feel a little hurt ─────────
  {
    id: "sun-05-w1-p1-01",
    ko: "나 좀 서운해.",
    answers: ["I feel a little hurt.", "I'm a little hurt.", "I feel kind of hurt."],
    hint: "I feel a little hurt",
  },
  {
    id: "sun-05-w1-p1-02",
    ko: "네가 내 생일 잊어버려서 좀 서운해.",
    answers: [
      "I feel a little hurt that you forgot my birthday.",
      "I feel a little hurt because you forgot my birthday.",
      "I feel a little hurt you forgot my birthday.",
    ],
    hint: "I feel a little hurt ___",
  },
  {
    id: "sun-05-w1-p1-03",
    ko: "솔직히 말하면, 나 좀 서운해.",
    answers: [
      "To be honest, I feel a little hurt.",
      "Honestly, I feel a little hurt.",
      "To be honest, I'm a little hurt.",
      "Honestly, I'm a little hurt.",
    ],
    hint: "I feel a little hurt",
  },
  {
    id: "sun-05-w1-p1-04",
    ko: "네가 답장을 안 해서 좀 서운했어.",
    answers: [
      "I felt a little hurt because you didn't reply.",
      "I felt a little hurt that you didn't reply.",
      "I felt a little hurt because you didn't text me back.",
      "I felt a little hurt that you didn't text me back.",
      "I felt a little hurt because you didn't answer.",
      "I felt a little hurt because you didn't reply to me.",
    ],
    hint: "I felt a little hurt ___ (과거)",
  },
  {
    id: "sun-05-w1-p1-05",
    ko: "그 말 들으니까 좀 서운하다.",
    answers: [
      "I feel a little hurt hearing that.",
      "Hearing that, I feel a little hurt.",
      "I feel a little hurt by that.",
      "That makes me feel a little hurt.",
      "I feel a little hurt to hear that.",
    ],
    hint: "I feel a little hurt ___",
  },

  // ───────── Week 1 · p2 I was kind of disappointed ─────────
  {
    id: "sun-05-w1-p2-01",
    ko: "좀 실망했어.",
    answers: ["I was kind of disappointed.", "I was kinda disappointed.", "I was a little disappointed."],
    hint: "I was kind of disappointed",
  },
  {
    id: "sun-05-w1-p2-02",
    ko: "친구한테 좀 실망했어.",
    answers: [
      "I was kind of disappointed with my friend.",
      "I was kind of disappointed in my friend.",
      "I was kinda disappointed with my friend.",
      "I was a little disappointed with my friend.",
      "I was a little disappointed in my friend.",
    ],
    hint: "I was kind of disappointed ___",
  },
  {
    id: "sun-05-w1-p2-03",
    ko: "그 영화 좀 실망스러웠어. (내가 실망함)",
    answers: [
      "I was kind of disappointed with the movie.",
      "I was kind of disappointed by the movie.",
      "I was kind of disappointed in the movie.",
      "I was kinda disappointed with the movie.",
      "I was a little disappointed with the movie.",
    ],
    hint: "I was kind of disappointed ___",
  },
  {
    id: "sun-05-w1-p2-04",
    ko: "그 식당 서비스에 좀 실망했어.",
    answers: [
      "I was kind of disappointed with the service at the restaurant.",
      "I was kind of disappointed with the service at that restaurant.",
      "I was kind of disappointed with the restaurant's service.",
      "I was kind of disappointed by the service at the restaurant.",
      "I was kind of disappointed with that restaurant's service.",
    ],
    hint: "I was kind of disappointed with ___",
  },
  {
    id: "sun-05-w1-p2-05",
    ko: "솔직히 결과에 좀 실망했어.",
    answers: [
      "Honestly, I was kind of disappointed with the result.",
      "Honestly, I was kind of disappointed with the results.",
      "Honestly, I was kind of disappointed by the result.",
      "Honestly, I was kind of disappointed about the result.",
      "To be honest, I was kind of disappointed with the result.",
      "Honestly, I was a little disappointed with the result.",
    ],
    hint: "I was kind of disappointed ___",
  },

  // ───────── Week 1 · p3 It bothered me ─────────
  {
    id: "sun-05-w1-p3-01",
    ko: "그게 좀 신경 쓰였어.",
    answers: ["It bothered me.", "It kind of bothered me.", "It bothered me a little.", "That bothered me."],
    hint: "It bothered me",
  },
  {
    id: "sun-05-w1-p3-02",
    ko: "그 사람이 늦은 게 신경 쓰였어.",
    answers: [
      "It bothered me that he was late.",
      "It bothered me that she was late.",
      "It bothered me when he was late.",
      "It bothered me when she was late.",
    ],
    hint: "It bothered me that ___",
  },
  {
    id: "sun-05-w1-p3-03",
    ko: "네가 약속 안 지킨 게 마음에 걸렸어.",
    answers: [
      "It bothered me that you broke your promise.",
      "It bothered me that you didn't keep your promise.",
      "It bothered me when you broke your promise.",
      "It bothered me that you broke the promise.",
    ],
    hint: "It bothered me that ___",
  },
  {
    id: "sun-05-w1-p3-04",
    ko: "솔직히 그 사람 말투가 좀 거슬렸어.",
    answers: [
      "Honestly, his tone bothered me a little.",
      "Honestly, her tone bothered me a little.",
      "Honestly, his tone kind of bothered me.",
      "Honestly, her tone kind of bothered me.",
      "Honestly, his tone bothered me.",
      "Honestly, her tone bothered me.",
    ],
    hint: "___ bothered me",
  },
  {
    id: "sun-05-w1-p3-05",
    ko: "그거 아직도 신경 쓰여?",
    answers: ["Does it still bother you?", "Is it still bothering you?", "Does that still bother you?"],
    hint: "Does it ___ bother you?",
  },

  // ───────── Week 1 · p4 I felt left out ─────────
  {
    id: "sun-05-w1-p4-01",
    ko: "소외된 느낌이었어.",
    answers: ["I felt left out.", "I felt excluded."],
    hint: "I felt left out",
  },
  {
    id: "sun-05-w1-p4-02",
    ko: "파티에서 나만 빠진 느낌이었어.",
    answers: ["I felt left out at the party.", "I felt excluded at the party."],
    hint: "I felt left out ___",
  },
  {
    id: "sun-05-w1-p4-03",
    ko: "네가 날 초대 안 했을 때 소외된 느낌이었어.",
    answers: [
      "I felt left out when you didn't invite me.",
      "I felt excluded when you didn't invite me.",
      "I felt left out because you didn't invite me.",
    ],
    hint: "I felt left out when ___",
  },
  {
    id: "sun-05-w1-p4-04",
    ko: "동료들이 나 없이 점심 먹었을 때 소외감 느꼈어.",
    answers: [
      "I felt left out when my coworkers ate lunch without me.",
      "I felt left out when my coworkers had lunch without me.",
      "I felt left out when my colleagues ate lunch without me.",
      "I felt left out when my colleagues had lunch without me.",
    ],
    hint: "I felt left out when ___",
  },
  {
    id: "sun-05-w1-p4-05",
    ko: "단톡방에 나만 없어서 소외감 들었어.",
    answers: [
      "I felt left out because I wasn't in the group chat.",
      "I felt left out because I was the only one not in the group chat.",
      "I felt left out since I wasn't in the group chat.",
      "I felt left out because I wasn't in the group chat room.",
    ],
    hint: "I felt left out because ___",
  },

  // ───────── Week 1 · p5 I just wanted you to ___ ─────────
  {
    id: "sun-05-w1-p5-01",
    ko: "난 그냥 네가 말해줬으면 했어.",
    answers: ["I just wanted you to tell me.", "I just wanted you to let me know."],
    hint: "I just wanted you to ___",
  },
  {
    id: "sun-05-w1-p5-02",
    ko: "난 그냥 네가 설명해줬으면 했어.",
    answers: [
      "I just wanted you to explain.",
      "I just wanted you to explain it.",
      "I just wanted you to explain it to me.",
    ],
    hint: "I just wanted you to ___",
  },
  {
    id: "sun-05-w1-p5-03",
    ko: "난 그냥 네가 문자 해줬으면 했어.",
    answers: [
      "I just wanted you to text me.",
      "I just wanted you to send me a text.",
      "I just wanted you to message me.",
    ],
    hint: "I just wanted you to ___",
  },
  {
    id: "sun-05-w1-p5-04",
    ko: "난 그냥 네가 (잘 지내는지) 연락 한 번 해줬으면 했어.",
    answers: [
      "I just wanted you to check in.",
      "I just wanted you to check in with me.",
      "I just wanted you to check on me.",
    ],
    hint: "I just wanted you to ___ (check in)",
  },
  {
    id: "sun-05-w1-p5-05",
    ko: "난 그냥 네가 내 말 들어줬으면 했어.",
    answers: ["I just wanted you to listen to me.", "I just wanted you to listen."],
    hint: "I just wanted you to ___",
  },

  // ───────── Week 2 · p1 For example ─────────
  {
    id: "sun-05-w2-p1-01",
    ko: "예를 들면, 난 주말에 늦게 일어나.",
    answers: [
      "For example, I wake up late on weekends.",
      "For example, I get up late on weekends.",
      "For example, I wake up late on the weekends.",
      "For example, I wake up late on the weekend.",
    ],
    hint: "For example, ___",
  },
  {
    id: "sun-05-w2-p1-02",
    ko: "예를 들면, 난 매일 아침 커피 마셔.",
    answers: [
      "For example, I drink coffee every morning.",
      "For example, I have coffee every morning.",
      "For example, I have a coffee every morning.",
    ],
    hint: "For example, ___",
  },
  {
    id: "sun-05-w2-p1-03",
    ko: "예를 들면, 나 매일 30분씩 걸어.",
    answers: [
      "For example, I walk for 30 minutes every day.",
      "For example, I walk 30 minutes every day.",
      "For example, I walk for 30 minutes a day.",
      "For example, I walk 30 minutes a day.",
    ],
    hint: "For example, ___",
  },
  {
    id: "sun-05-w2-p1-04",
    ko: "예를 들면, 나 요즘 요리 배우고 있어.",
    answers: [
      "For example, I'm learning to cook these days.",
      "For example, I'm learning how to cook these days.",
      "For example, these days I'm learning to cook.",
      "For example, these days I'm learning how to cook.",
      "For example, I'm learning to cook lately.",
    ],
    hint: "For example, ___ (these days)",
  },
  {
    id: "sun-05-w2-p1-05",
    ko: "예를 들면, 사람들이 (약속에) 늦으면 짜증나.",
    answers: [
      "For example, it's annoying when people are late.",
      "For example, I get annoyed when people are late.",
      "For example, it annoys me when people are late.",
      "For example, it bothers me when people are late.",
    ],
    hint: "For example, ___",
  },

  // ───────── Week 2 · p2 Like ___ ─────────
  {
    id: "sun-05-w2-p2-01",
    ko: "나 따뜻한 음료 좋아해, 커피나 차 같은 거.",
    answers: [
      "I like warm drinks, like coffee or tea.",
      "I like hot drinks, like coffee or tea.",
      "I love warm drinks, like coffee or tea.",
      "I like warm drinks, like coffee and tea.",
    ],
    hint: "___, like ___",
  },
  {
    id: "sun-05-w2-p2-02",
    ko: "나 단 거 땡겨, 초콜릿 같은 거.",
    answers: [
      "I'm craving something sweet, like chocolate.",
      "I want something sweet, like chocolate.",
      "I'm craving sweets, like chocolate.",
    ],
    hint: "___, like ___ (crave)",
  },
  {
    id: "sun-05-w2-p2-03",
    ko: "나 운동 좋아해, 요가나 수영 같은 거.",
    answers: [
      "I like exercise, like yoga or swimming.",
      "I like working out, like yoga or swimming.",
      "I like exercising, like yoga or swimming.",
      "I like sports, like yoga or swimming.",
      "I like exercise, like yoga and swimming.",
    ],
    hint: "___, like ___",
  },
  {
    id: "sun-05-w2-p2-04",
    ko: "나 조용한 곳 좋아해, 도서관 같은 데.",
    answers: [
      "I like quiet places, like libraries.",
      "I like quiet places, like a library.",
      "I like quiet places, like the library.",
      "I love quiet places, like libraries.",
    ],
    hint: "___, like ___",
  },
  {
    id: "sun-05-w2-p2-05",
    ko: "주말엔 그냥 쉬어, 영화 보는 거 같은 거.",
    answers: [
      "On weekends, I just relax, like watching movies.",
      "I just relax on weekends, like watching movies.",
      "On weekends, I just rest, like watching movies.",
      "I just rest on weekends, like watching movies.",
      "On the weekend, I just relax, like watching movies.",
    ],
    hint: "___, like ___",
  },

  // ───────── Week 2 · p3 Especially ___ ─────────
  {
    id: "sun-05-w2-p3-01",
    ko: "특히 주말에.",
    answers: ["Especially on weekends.", "Especially on the weekend.", "Especially on the weekends."],
    hint: "Especially ___",
  },
  {
    id: "sun-05-w2-p3-02",
    ko: "요즘 너무 피곤해, 특히 밤에.",
    answers: [
      "I'm so tired these days, especially at night.",
      "I'm really tired these days, especially at night.",
      "I'm so tired lately, especially at night.",
      "I'm really tired lately, especially at night.",
      "These days I'm so tired, especially at night.",
    ],
    hint: "___, especially ___",
  },
  {
    id: "sun-05-w2-p3-03",
    ko: "나 커피 좋아해, 특히 아침에.",
    answers: [
      "I like coffee, especially in the morning.",
      "I love coffee, especially in the morning.",
      "I like coffee, especially in the mornings.",
      "I love coffee, especially in the mornings.",
    ],
    hint: "___, especially ___",
  },
  {
    id: "sun-05-w2-p3-04",
    ko: "요즘 바빠, 특히 월요일에.",
    answers: [
      "I'm busy these days, especially on Mondays.",
      "I'm busy lately, especially on Mondays.",
      "These days I'm busy, especially on Mondays.",
      "I've been busy lately, especially on Mondays.",
    ],
    hint: "___, especially ___",
  },
  {
    id: "sun-05-w2-p3-05",
    ko: "나 매운 음식 좋아해, 특히 떡볶이.",
    answers: [
      "I like spicy food, especially tteokbokki.",
      "I love spicy food, especially tteokbokki.",
      "I like spicy food, especially ddeokbokki.",
      "I love spicy food, especially ddeokbokki.",
    ],
    hint: "___, especially ___",
  },

  // ───────── Week 2 · p4 One time, ___ ─────────
  {
    id: "sun-05-w2-p4-01",
    ko: "한 번은 막차를 놓쳤어.",
    answers: [
      "One time, I missed the last train.",
      "One time, I missed the last bus.",
      "One time, I missed the last subway.",
    ],
    hint: "One time, ___ (과거형)",
  },
  {
    id: "sun-05-w2-p4-02",
    ko: "한 번은 버스에서 멀미했어.",
    answers: [
      "One time, I got carsick on the bus.",
      "One time, I got motion sickness on the bus.",
      "One time, I got sick on the bus.",
      "One time, I got carsick on a bus.",
    ],
    hint: "One time, ___ (get carsick)",
  },
  {
    id: "sun-05-w2-p4-03",
    ko: "한 번은 휴대폰을 택시에 두고 내렸어.",
    answers: [
      "One time, I left my phone in a taxi.",
      "One time, I left my phone in the taxi.",
      "One time, I left my phone in a cab.",
      "One time, I left my phone in the cab.",
    ],
    hint: "One time, ___",
  },
  {
    id: "sun-05-w2-p4-04",
    ko: "한 번은 길에서 옛 친구를 알아봤어.",
    answers: [
      "One time, I recognized an old friend on the street.",
      "One time, I recognized an old friend in the street.",
      "One time, I recognized an old friend of mine on the street.",
    ],
    hint: "One time, ___ (recognize)",
  },
  {
    id: "sun-05-w2-p4-05",
    ko: "한 번은 수업에 엄청 늦었어.",
    answers: [
      "One time, I was really late for class.",
      "One time, I was super late for class.",
      "One time, I was very late for class.",
      "One time, I was really late to class.",
      "One time, I was so late for class.",
    ],
    hint: "One time, ___",
  },

  // ───────── Week 2 · p5 That's why ___ ─────────
  {
    id: "sun-05-w2-p5-01",
    ko: "그래서 나 평일엔 안 나가.",
    answers: [
      "That's why I don't go out on weekdays.",
      "That's why I don't go out during the week.",
      "That's why I don't go out on weeknights.",
    ],
    hint: "That's why ___",
  },
  {
    id: "sun-05-w2-p5-02",
    ko: "그래서 집에 있었어.",
    answers: ["That's why I stayed home.", "That's why I stayed at home."],
    hint: "That's why ___",
  },
  {
    id: "sun-05-w2-p5-03",
    ko: "(커피 마시면 잠을 못 자서) 그래서 오후엔 커피 안 마셔.",
    answers: [
      "That's why I don't drink coffee in the afternoon.",
      "That's why I don't have coffee in the afternoon.",
      "That's why I don't drink coffee in the afternoons.",
    ],
    hint: "That's why ___",
  },
  {
    id: "sun-05-w2-p5-04",
    ko: "그래서 내가 매일 영어 공부하는 거야.",
    answers: ["That's why I study English every day.", "That's why I'm studying English every day."],
    hint: "That's why ___",
  },
  {
    id: "sun-05-w2-p5-05",
    ko: "(버스를 놓쳤어.) 그래서 늦었어.",
    answers: ["That's why I was late.", "That's why I'm late."],
    hint: "That's why ___",
  },

  // ───────── Week 3 · p1 Have you ever ___? ─────────
  {
    id: "sun-05-w3-p1-01",
    ko: "이직해 본 적 있어?",
    answers: ["Have you ever changed jobs?"],
    hint: "Have you ever ___?",
  },
  {
    id: "sun-05-w3-p1-02",
    ko: "혼자 여행해 본 적 있어?",
    answers: [
      "Have you ever tried solo travel?",
      "Have you ever traveled alone?",
      "Have you ever travelled alone?",
      "Have you ever traveled by yourself?",
      "Have you ever gone on a solo trip?",
      "Have you ever been on a solo trip?",
    ],
    hint: "Have you ever ___?",
  },
  {
    id: "sun-05-w3-p1-03",
    ko: "일본 가본 적 있어?",
    answers: ["Have you ever been to Japan?"],
    hint: "Have you ever ___? (been to)",
  },
  {
    id: "sun-05-w3-p1-04",
    ko: "요리 수업 들어본 적 있어?",
    answers: ["Have you ever taken a cooking class?", "Have you ever taken cooking classes?"],
    hint: "Have you ever ___? (take a class)",
  },
  {
    id: "sun-05-w3-p1-05",
    ko: "배 멀미 해본 적 있어?",
    answers: [
      "Have you ever gotten seasick?",
      "Have you ever got seasick?",
      "Have you ever been seasick?",
    ],
    hint: "Have you ever ___? (get seasick)",
  },

  // ───────── Week 3 · p2 I've never ___ ─────────
  {
    id: "sun-05-w3-p2-01",
    ko: "난 혼자 여행 한 번도 안 해봤어.",
    answers: [
      "I've never tried solo travel.",
      "I've never traveled alone.",
      "I've never travelled alone.",
      "I've never traveled by myself.",
      "I've never gone on a solo trip.",
      "I've never been on a solo trip.",
    ],
    hint: "I've never ___",
  },
  {
    id: "sun-05-w3-p2-02",
    ko: "난 이직 한 번도 안 해봤어.",
    answers: ["I've never changed jobs."],
    hint: "I've never ___",
  },
  {
    id: "sun-05-w3-p2-03",
    ko: "난 유럽에 한 번도 안 가봤어.",
    answers: ["I've never been to Europe."],
    hint: "I've never ___ (been to)",
  },
  {
    id: "sun-05-w3-p2-04",
    ko: "난 초밥 한 번도 안 먹어봤어.",
    answers: ["I've never tried sushi.", "I've never eaten sushi.", "I've never had sushi."],
    hint: "I've never ___",
  },
  {
    id: "sun-05-w3-p2-05",
    ko: "난 한 번도 수업 빠진 적 없어.",
    answers: ["I've never missed a class.", "I've never missed class.", "I've never skipped a class.", "I've never skipped class."],
    hint: "I've never ___",
  },

  // ───────── Week 3 · p3 I've done/tried it once ─────────
  {
    id: "sun-05-w3-p3-01",
    ko: "한 번 해봤어.",
    answers: ["I've done it once.", "I've tried it once.", "I did it once."],
    hint: "I've done it ___",
  },
  {
    id: "sun-05-w3-p3-02",
    ko: "(그 음식) 한 번 먹어봤어.",
    answers: ["I've tried it once.", "I've had it once.", "I've eaten it once.", "I tried it once."],
    hint: "I've tried it ___",
  },
  {
    id: "sun-05-w3-p3-03",
    ko: "번지점프 한 번 해봤어.",
    answers: [
      "I've done bungee jumping once.",
      "I've tried bungee jumping once.",
      "I've gone bungee jumping once.",
      "I've been bungee jumping once.",
      "I went bungee jumping once.",
    ],
    hint: "I've done/tried ___ once",
  },
  {
    id: "sun-05-w3-p3-04",
    ko: "캠핑은 딱 한 번 가봤어.",
    answers: [
      "I've only been camping once.",
      "I've only gone camping once.",
      "I've been camping only once.",
      "I've gone camping only once.",
      "I've been camping just once.",
      "I only went camping once.",
    ],
    hint: "I've only ___ once",
  },
  {
    id: "sun-05-w3-p3-05",
    ko: "한 번 해봤는데, 다시는 안 할 거야.",
    answers: [
      "I've tried it once, and I'll never do it again.",
      "I've tried it once, but I'll never do it again.",
      "I've done it once, and I'll never do it again.",
      "I've done it once, but I won't do it again.",
      "I've tried it once, but I won't do it again.",
      "I tried it once, but I'll never do it again.",
    ],
    hint: "I've tried it once, ___",
  },

  // ───────── Week 3 · p4 I used to ___ ─────────
  {
    id: "sun-05-w3-p4-01",
    ko: "예전엔 늦게까지 일했어.",
    answers: ["I used to work late."],
    hint: "I used to ___",
  },
  {
    id: "sun-05-w3-p4-02",
    ko: "예전엔 매일 아침 달리기 했어.",
    answers: [
      "I used to run every morning.",
      "I used to go running every morning.",
      "I used to jog every morning.",
      "I used to go jogging every morning.",
    ],
    hint: "I used to ___",
  },
  {
    id: "sun-05-w3-p4-03",
    ko: "예전엔 담배 폈어.",
    answers: ["I used to smoke."],
    hint: "I used to ___",
  },
  {
    id: "sun-05-w3-p4-04",
    ko: "예전엔 채소 싫어했어.",
    answers: [
      "I used to hate vegetables.",
      "I used to dislike vegetables.",
      "I didn't use to like vegetables.",
      "I used to not like vegetables.",
    ],
    hint: "I used to ___",
  },
  {
    id: "sun-05-w3-p4-05",
    ko: "예전엔 자기 전에 습관적으로 폰 봤어.",
    answers: [
      "I used to habitually check my phone before bed.",
      "I used to check my phone before bed.",
      "I used to check my phone before going to bed.",
      "I used to look at my phone before bed.",
      "I used to habitually check my phone before going to bed.",
    ],
    hint: "I used to ___ (habitually)",
  },

  // ───────── Week 3 · p5 Not anymore ─────────
  {
    id: "sun-05-w3-p5-01",
    ko: "예전엔 주말마다 술 마셨는데, 이제는 안 해.",
    answers: [
      "I used to drink every weekend, but not anymore.",
      "I used to drink every weekend. Not anymore.",
      "I used to drink every weekend, but I don't anymore.",
    ],
    hint: "I used to ___, but not anymore.",
  },
  {
    id: "sun-05-w3-p5-02",
    ko: "예전엔 그 가수 좋아했는데, 이제는 아니야.",
    answers: [
      "I used to like that singer, but not anymore.",
      "I used to like that singer. Not anymore.",
      "I used to like that singer, but I don't anymore.",
    ],
    hint: "I used to ___, but not anymore.",
  },
  {
    id: "sun-05-w3-p5-03",
    ko: "(아직 거기서 일하냐는 질문에) 아니, 이제는 안 해.",
    answers: ["No, not anymore.", "Not anymore.", "No, I don't anymore."],
    hint: "Not ___",
  },
  {
    id: "sun-05-w3-p5-04",
    ko: "예전엔 커피 많이 마셨는데, 이제는 안 마셔.",
    answers: [
      "I used to drink a lot of coffee, but not anymore.",
      "I used to drink lots of coffee, but not anymore.",
      "I used to drink a lot of coffee. Not anymore.",
      "I used to drink a lot of coffee, but I don't anymore.",
    ],
    hint: "I used to ___, but not anymore.",
  },
  {
    id: "sun-05-w3-p5-05",
    ko: "나 이제 그거 안 무서워.",
    answers: [
      "I'm not scared of it anymore.",
      "I'm not afraid of it anymore.",
      "I'm not scared anymore.",
      "I'm not afraid anymore.",
    ],
    hint: "I'm not ___ anymore.",
  },

  // ───────── Week 4 · p1 My rule is ___ ─────────
  {
    id: "sun-05-w4-p1-01",
    ko: "내 규칙은 하루 커피 한 잔이야.",
    answers: ["My rule is one coffee a day.", "My rule is one cup of coffee a day."],
    hint: "My rule is ___",
  },
  {
    id: "sun-05-w4-p1-02",
    ko: "내 규칙은 침대에서 폰 금지야.",
    answers: ["My rule is no phone in bed.", "My rule is no phones in bed."],
    hint: "My rule is no ___",
  },
  {
    id: "sun-05-w4-p1-03",
    ko: "내 규칙은 자정 전에 자는 거야.",
    answers: [
      "My rule is to go to bed before midnight.",
      "My rule is to sleep before midnight.",
      "My rule is going to bed before midnight.",
      "My rule is to go to sleep before midnight.",
    ],
    hint: "My rule is to ___",
  },
  {
    id: "sun-05-w4-p1-04",
    ko: "내 규칙은 밥 먹을 때 폰 안 보기야.",
    answers: [
      "My rule is no phone during meals.",
      "My rule is no phones during meals.",
      "My rule is no phone while eating.",
      "My rule is not to look at my phone during meals.",
      "My rule is not to look at my phone while eating.",
      "My rule is no phone at the table.",
    ],
    hint: "My rule is no ___",
  },
  {
    id: "sun-05-w4-p1-05",
    ko: "내 규칙은 주말엔 일 얘기 안 하기야.",
    answers: [
      "My rule is no work talk on weekends.",
      "My rule is not to talk about work on weekends.",
      "My rule is no talking about work on weekends.",
      "My rule is no work talk on the weekend.",
    ],
    hint: "My rule is ___",
  },

  // ───────── Week 4 · p2 I try not to ___ ─────────
  {
    id: "sun-05-w4-p2-01",
    ko: "너무 생각 많이 안 하려고 해.",
    answers: ["I try not to overthink.", "I try not to overthink things."],
    hint: "I try not to ___",
  },
  {
    id: "sun-05-w4-p2-02",
    ko: "밤늦게는 안 먹으려고 해.",
    answers: ["I try not to eat late at night.", "I try not to eat late."],
    hint: "I try not to ___",
  },
  {
    id: "sun-05-w4-p2-03",
    ko: "나 자신한테 너무 답답해하지 않으려고 해.",
    answers: [
      "I try not to be too frustrated with myself.",
      "I try not to get too frustrated with myself.",
      "I try not to be so frustrated with myself.",
    ],
    hint: "I try not to ___ (frustrated with)",
  },
  {
    id: "sun-05-w4-p2-04",
    ko: "감정을 꾹 참지 않으려고 해.",
    answers: [
      "I try not to hold it in.",
      "I try not to hold my feelings in.",
      "I try not to hold in my feelings.",
      "I try not to hold my emotions in.",
      "I try not to hold in my emotions.",
    ],
    hint: "I try not to ___ (hold ~ in)",
  },
  {
    id: "sun-05-w4-p2-05",
    ko: "사람들을 섣불리 판단하지 않으려고 해.",
    answers: [
      "I try not to judge people too quickly.",
      "I try not to label people.",
      "I try not to judge people.",
      "I try not to judge people too fast.",
    ],
    hint: "I try not to ___",
  },

  // ───────── Week 4 · p3 I'm okay with ___ ─────────
  {
    id: "sun-05-w4-p3-01",
    ko: "난 기다리는 거 괜찮아.",
    answers: ["I'm okay with waiting.", "I'm OK with waiting.", "I'm fine with waiting."],
    hint: "I'm okay with ___ (-ing)",
  },
  {
    id: "sun-05-w4-p3-02",
    ko: "난 혼자 있는 거 괜찮아.",
    answers: ["I'm okay with being alone.", "I'm OK with being alone.", "I'm fine with being alone."],
    hint: "I'm okay with ___ (-ing)",
  },
  {
    id: "sun-05-w4-p3-03",
    ko: "난 스몰토크 괜찮아.",
    answers: ["I'm okay with small talk.", "I'm OK with small talk.", "I'm fine with small talk."],
    hint: "I'm okay with ___",
  },
  {
    id: "sun-05-w4-p3-04",
    ko: "난 매운 음식 괜찮아.",
    answers: ["I'm okay with spicy food.", "I'm OK with spicy food.", "I'm fine with spicy food."],
    hint: "I'm okay with ___",
  },
  {
    id: "sun-05-w4-p3-05",
    ko: "나 그 계획 괜찮아.",
    answers: [
      "I'm okay with that plan.",
      "I'm okay with the plan.",
      "I'm OK with that plan.",
      "I'm OK with the plan.",
      "I'm fine with that plan.",
      "I'm fine with the plan.",
    ],
    hint: "I'm okay with ___",
  },

  // ───────── Week 4 · p4 I'm not okay with ___ ─────────
  {
    id: "sun-05-w4-p4-01",
    ko: "거짓말은 못 받아들여.",
    answers: ["I'm not okay with lying.", "I'm not OK with lying.", "I'm not okay with lies."],
    hint: "I'm not okay with ___ (-ing)",
  },
  {
    id: "sun-05-w4-p4-02",
    ko: "약속 어기는 건 싫어.",
    answers: [
      "I'm not okay with breaking promises.",
      "I'm not OK with breaking promises.",
      "I'm not okay with people breaking promises.",
    ],
    hint: "I'm not okay with ___ (-ing)",
  },
  {
    id: "sun-05-w4-p4-03",
    ko: "무시당하는 건 못 참아.",
    answers: ["I'm not okay with being ignored.", "I'm not OK with being ignored."],
    hint: "I'm not okay with being ___",
  },
  {
    id: "sun-05-w4-p4-04",
    ko: "선 넘는 농담은 싫어.",
    answers: [
      "I'm not okay with jokes that cross the line.",
      "I'm not OK with jokes that cross the line.",
      "I'm not okay with jokes that go too far.",
    ],
    hint: "I'm not okay with ___ (cross the line)",
  },
  {
    id: "sun-05-w4-p4-05",
    ko: "뒷담화하는 건 싫어.",
    answers: [
      "I'm not okay with talking behind people's backs.",
      "I'm not okay with talking behind someone's back.",
      "I'm not okay with gossiping.",
      "I'm not okay with gossip.",
      "I'm not OK with talking behind people's backs.",
      "I'm not OK with gossiping.",
    ],
    hint: "I'm not okay with ___",
  },

  // ───────── Week 4 · p5 That's a dealbreaker ─────────
  {
    id: "sun-05-w4-p5-01",
    ko: "그건 나한테 절대 안 돼.",
    answers: ["That's a dealbreaker for me.", "That's a deal breaker for me."],
    hint: "That's a dealbreaker ___",
  },
  {
    id: "sun-05-w4-p5-02",
    ko: "거짓말은 나한테 바로 아웃이야.",
    answers: ["Lying is a dealbreaker for me.", "Lies are a dealbreaker for me."],
    hint: "___ is a dealbreaker for me.",
  },
  {
    id: "sun-05-w4-p5-03",
    ko: "담배 피우는 건 나한테 절대 안 돼.",
    answers: ["Smoking is a dealbreaker for me."],
    hint: "___ is a dealbreaker for me.",
  },
  {
    id: "sun-05-w4-p5-04",
    ko: "너한테 절대 못 참는 건 뭐야?",
    answers: ["What's a dealbreaker for you?", "What's your dealbreaker?", "What are your dealbreakers?"],
    hint: "What's a dealbreaker ___?",
  },
  {
    id: "sun-05-w4-p5-05",
    ko: "늦는 건 괜찮은데, 거짓말은 절대 안 돼.",
    answers: [
      "I'm okay with being late, but lying is a dealbreaker.",
      "I'm okay with being late, but lying is a dealbreaker for me.",
      "I'm OK with being late, but lying is a dealbreaker.",
      "Being late is okay, but lying is a dealbreaker.",
      "Being late is okay, but lying is a dealbreaker for me.",
    ],
    hint: "I'm okay with ___, but ___ is a dealbreaker.",
  },
];

/** 표현 퀴즈 */
export const expressions: SundayExercise[] = [
  {
    id: "sun-05-x01",
    ko: "나 직설적인 피드백 좋아해. (straight~)",
    answers: ["I like straightforward feedback.", "I love straightforward feedback."],
    hint: "straightforward = 직설적인, 솔직한",
    note: "Let me be straightforward with you. (솔직하게 말할게.)",
  },
  {
    id: "sun-05-x02",
    ko: "이 수업이 내 자신감을 정말 높여줬어. (boost ~)",
    answers: ["This class really boosted my confidence.", "This class boosted my confidence a lot."],
    hint: "boost confidence = 자신감을 높여주다",
    note: "Compliments can boost your confidence.",
  },
  {
    id: "sun-05-x03",
    ko: "가끔 내 영어에 자신이 없어. (insecure)",
    answers: [
      "I feel insecure about my English sometimes.",
      "Sometimes I feel insecure about my English.",
      "I sometimes feel insecure about my English.",
    ],
    hint: "feel insecure = 불안하다, 자신감이 없다",
    note: "They felt insecure after the mistake.",
  },
  {
    id: "sun-05-x04",
    ko: "주말이 기대돼. (look ~)",
    answers: ["I'm looking forward to the weekend.", "I look forward to the weekend."],
    hint: "look forward to = ~을 기대하다",
    note: "I look forward to seeing you again. (to 뒤엔 명사/-ing)",
  },
  {
    id: "sun-05-x05",
    ko: "그 색 너한테 잘 어울린다. (suit)",
    answers: ["That color suits you.", "That color really suits you.", "That color suits you well.", "That colour suits you."],
    hint: "suit = ~에게 어울리다",
    note: "This job doesn't suit me. (이 일은 나랑 안 맞아.)",
  },
  {
    id: "sun-05-x06",
    ko: "너한테 상처 줄 의도는 없었어. (intention)",
    answers: ["My intention wasn't to hurt you.", "It wasn't my intention to hurt you."],
    hint: "intention = 의도",
    note: "I did it with good intentions.",
  },
  {
    id: "sun-05-x07",
    ko: "그 드라마가 왜 그렇게 화제인지 모르겠어. (hype)",
    answers: [
      "I don't get the hype around that show.",
      "I don't get the hype about that show.",
      "I don't understand the hype around that show.",
      "I don't understand the hype about that show.",
      "I don't get the hype around that drama.",
      "I don't understand the hype about that drama.",
    ],
    hint: "hype = (과도한) 인기, 화제",
    note: "The new cafe has so much hype.",
  },
  {
    id: "sun-05-x08",
    ko: "뭐라고 해야 할지 전혀 모르겠어. (idea)",
    answers: ["I have no idea what to say."],
    hint: "I have no idea = 전혀 모르겠어",
    note: "I have no idea where it is.",
  },
  {
    id: "sun-05-x09",
    ko: "나한테 화내지 마. (mad)",
    answers: ["Don't be mad at me."],
    hint: "be mad at + 사람 = ~에게 화나다",
    note: "She was mad at her coworker.",
  },
  {
    id: "sun-05-x10",
    ko: "우유 다 떨어졌어. (run ~)",
    answers: ["We ran out of milk.", "We've run out of milk.", "I ran out of milk.", "We're out of milk."],
    hint: "run out of = ~이 다 떨어지다",
    note: "I ran out of time. (시간이 다 됐어.)",
  },
  {
    id: "sun-05-x11",
    ko: "지금 그 단어가 생각이 안 나. (think)",
    answers: ["I can't think of the word right now.", "I can't think of the word now."],
    hint: "can't think of = ~이 생각이 안 나다",
    note: "I can't think of a good answer.",
  },
  {
    id: "sun-05-x12",
    ko: "힘들겠다. 괜찮아? (tough)",
    answers: ["That's tough. Are you okay?", "That's tough. Are you OK?", "That's tough. Are you all right?"],
    hint: "that's tough = 힘들겠다, 쉽지 않겠다",
    note: "That's tough, but you'll get through it.",
  },
  {
    id: "sun-05-x13",
    ko: "나 6시에 퇴근해. (get ~)",
    answers: ["I get off work at 6.", "I get off work at 6 o'clock.", "I get off at 6."],
    hint: "get off work = 퇴근하다",
    note: "I got off work late yesterday.",
  },
  {
    id: "sun-05-x14",
    ko: "사람들이 말 끊으면 짜증나. (annoying)",
    answers: [
      "It's annoying when people interrupt.",
      "It's annoying when people interrupt me.",
    ],
    hint: "annoying = 짜증나는, 거슬리는",
    note: "The noise is annoying.",
  },
  {
    id: "sun-05-x15",
    ko: "나 라면 땡겨. (crave)",
    answers: ["I'm craving ramen.", "I'm craving ramyeon.", "I have a craving for ramen."],
    hint: "crave / craving = 땡기다 / 땡김",
    note: "I'm craving something sweet.",
  },
  {
    id: "sun-05-x16",
    ko: "나 영어 유창하게 하고 싶어. (fluent)",
    answers: ["I want to be fluent in English.", "I want to become fluent in English."],
    hint: "be fluent in = ~에 유창하다",
    note: "They're fluent in English.",
  },
  {
    id: "sun-05-x17",
    ko: "내가 진짜 싫어하는 것 중 하나는 늦는 사람이야. (pet peeve)",
    answers: [
      "One of my pet peeves is people being late.",
      "One of my pet peeves is when people are late.",
      "One of my pet peeves is being late.",
      "One of my pet peeves is late people.",
    ],
    hint: "pet peeve = (나만의) 짜증 포인트",
    note: "My biggest pet peeve is loud chewing.",
  },
  {
    id: "sun-05-x18",
    ko: "좀 비쌌는데 그만한 가치가 있었어. (worth)",
    answers: [
      "It was a little expensive, but it was worth it.",
      "It was kind of expensive, but it was worth it.",
      "It was a bit expensive, but it was worth it.",
      "It was a little pricey, but it was worth it.",
    ],
    hint: "worth it = 그만한 가치가 있는",
    note: "The trip was long, but totally worth it.",
  },
  {
    id: "sun-05-x19",
    ko: "가야 할 것 같은 의무감이 들었어. (obligated)",
    answers: ["I felt obligated to go."],
    hint: "feel obligated to = ~해야 할 것 같은 의무감이 들다",
    note: "Don't feel obligated to come.",
  },
  {
    id: "sun-05-x20",
    ko: "아, 아쉽다! (bummer)",
    answers: ["What a bummer!", "That's a bummer.", "Bummer."],
    hint: "bummer = 아쉬운 일, 실망스러운 일",
    note: "It's a bummer that the concert got canceled.",
  },
  {
    id: "sun-05-x21",
    ko: "모든 일엔 다 이유가 있어. (reason)",
    answers: ["Everything happens for a reason."],
    hint: "everything happens for a reason = 모든 일에는 이유가 있다",
    note: "I don't know why it happened, but everything happens for a reason.",
  },
  {
    id: "sun-05-x22",
    ko: "오늘 발표 잘하고 와! (leg)",
    answers: ["Break a leg at your presentation today!", "Break a leg today!", "Break a leg!"],
    hint: "break a leg = 잘하고 와! (공연, 발표, 면접 전에)",
    note: "You'll do great. Break a leg!",
  },
  {
    id: "sun-05-x23",
    ko: "너 할 수 있어! (got)",
    answers: ["You got this!", "You've got this!"],
    hint: "you got this = 너 할 수 있어, 잘 해낼 거야",
    note: "It's hard, but you got this.",
  },
  {
    id: "sun-05-x24",
    ko: "응원하고 있어! (root)",
    answers: ["I'm rooting for you!"],
    hint: "root for = ~를 응원하다",
    note: "I'm rooting for you, no matter what happens.",
  },
  {
    id: "sun-05-x25",
    ko: "너무 속이 안 좋아서 토할 뻔했어. (throw ~)",
    answers: ["I felt so sick that I almost threw up.", "I felt so sick I almost threw up."],
    hint: "throw up = 토하다",
    note: "She threw up after the roller coaster.",
  },
  {
    id: "sun-05-x26",
    ko: "그 말은 진짜 선 넘었어. (cross)",
    answers: [
      "That comment really crossed the line.",
      "That really crossed the line.",
      "That comment crossed the line.",
    ],
    hint: "cross the line = 선을 넘다",
    note: "I can't accept that. You crossed the line.",
  },
  {
    id: "sun-05-x27",
    ko: "너 스트레스 많이 받았겠다. (must ~)",
    answers: [
      "You must've been stressed.",
      "You must've been really stressed.",
      "You must've been so stressed.",
      "You must've been very stressed.",
    ],
    hint: "must've + p.p. = ~였겠다 (추측)",
    note: "She must've forgotten about the meeting.",
  },
  {
    id: "sun-05-x28",
    ko: "참지 말고 나한테 얘기해. (hold ~)",
    answers: ["Don't hold it in. Talk to me.", "Don't hold it in, talk to me."],
    hint: "hold it in = (감정, 눈물 등을) 참다, 억누르다",
    note: "I tried to hold it in, but I started crying.",
  },
  {
    id: "sun-05-x29",
    ko: "그 노래 이제 질렸어. (tired)",
    answers: [
      "I got tired of that song.",
      "I'm tired of that song now.",
      "I've gotten tired of that song.",
      "I'm tired of that song.",
      "I've got tired of that song.",
    ],
    hint: "get tired of = ~에 질리다",
    note: "I never get tired of this movie.",
  },
  {
    id: "sun-05-x30",
    ko: "나 매운 음식 별로 안 좋아해. (care)",
    answers: ["I don't care for spicy food."],
    hint: "I don't care for ~ = ~ 별로 안 좋아해",
    note: "I don't really care for horror movies.",
  },
];
