import type { GrammarTopic } from "@/lib/types";

const topic: GrammarTopic = {
  id: "prepositions",
  order: 12,
  title: "전치사 in / on / at",
  titleEn: "Prepositions: In, On, At",
  emoji: "📍",
  level: 2,
  summary: "in은 큰 통, on은 위에 척, at은 콕 찍기! 전치사 삼형제 등장ㅋ",
  concept: [
    {
      heading: "시간: at < on < in (좁은 것 → 넓은 것)",
      body:
        "**at** = 콕 찍은 **시각** (at 7, at noon, at night)\n**on** = **요일·날짜** (on Monday, on May 5th, on my birthday)\n**in** = **월·연도·계절·하루의 일부** (in July, in 2025, in winter, in the morning)\n⚠️ 예외: in the morning / in the evening 인데 **at night**!",
      examples: [
        { en: "I get up at 7.", ko: "나는 7시에 일어나." },
        { en: "See you on Friday.", ko: "금요일에 봐." },
        { en: "My birthday is in July.", ko: "내 생일은 7월이야." },
        { en: "I study in the morning.", ko: "나는 아침에 공부해." },
      ],
      eunga: "at은 점, on은 하루, in은 긴 기간! 응아는 at midnight에 제일 쌩쌩함.",
    },
    {
      heading: "장소: in / on / at",
      body:
        "**in** = **~안에** (in the box, in my room, in Seoul, in Korea)\n**on** = **~위에 (표면에 붙어서)** (on the table, on the wall, on the floor)\n**at** = **특정 지점·장소** (at the door, at the bus stop, at school, at home, at work)",
      examples: [
        { en: "The keys are in my bag.", ko: "열쇠는 내 가방 안에 있어." },
        { en: "Your phone is on the table.", ko: "네 폰 탁자 위에 있어." },
        { en: "I'm at the bus stop.", ko: "나 버스 정류장이야." },
        { en: "He lives in Busan.", ko: "그는 부산에 살아." },
      ],
      eunga: "벽에 붙은 포스터 = on the wall. 응아도 벽에 붙어서 끄덕끄덕.",
    },
    {
      heading: "통째로 외우는 단골 표현",
      body:
        "**at home / at work / at school** (집에 / 회사에 / 학교에)\n**on the bus / on the train / on the plane** (탈것 '안'이지만 on!)\n**in a car / in a taxi** (작은 차는 in)\n**on the weekend** (미국식) / **at the weekend** (영국식)",
      examples: [
        { en: "I'm at home.", ko: "나 집에 있어." },
        { en: "I'm on the bus.", ko: "나 버스 안이야." },
        { en: "She's in a taxi.", ko: "그녀는 택시 안이야." },
      ],
      eunga: "버스는 on, 택시는 in. 서서 걸어다닐 수 있으면 on이라고 외우면 편해요 응응!",
    },
    {
      heading: "한국인이 자주 하는 실수",
      body:
        "❌ in Monday → ✅ **on** Monday\n❌ at the morning → ✅ **in** the morning\n❌ in night → ✅ **at** night\n❌ go to home → ✅ go **home** (home 앞에 to ❌)\n❌ on next week / in last year → ✅ **next week**, **last year** (next·last·this·every 앞엔 전치사 ❌)",
      examples: [
        { en: "I'll see you next week.", ko: "다음 주에 봐." },
        { en: "I went home early.", ko: "나 일찍 집에 갔어." },
      ],
      eunga: "next week 앞에 전치사 붙이면 응아가 '응?' 하고 멈춤.",
    },
  ],
  exercises: [
    {
      id: "prepositions-01",
      ko: "나는 7시에 일어나.",
      answers: ["I get up at 7.", "I wake up at 7.", "I get up at seven.", "I wake up at seven.", "I get up at 7 o'clock.", "I wake up at 7 o'clock."],
      hint: "시각 = at",
    },
    {
      id: "prepositions-02",
      ko: "금요일에 봐.",
      answers: ["See you on Friday."],
      hint: "요일 = on",
    },
    {
      id: "prepositions-03",
      ko: "나 집에 있어.",
      answers: ["I'm at home.", "I'm home."],
      hint: "at home",
    },
    {
      id: "prepositions-04",
      ko: "내 생일은 7월이야.",
      answers: ["My birthday is in July."],
      hint: "월 = in",
    },
    {
      id: "prepositions-05",
      ko: "네 폰 탁자 위에 있어.",
      answers: ["Your phone is on the table."],
      hint: "표면 위 = on",
    },
    {
      id: "prepositions-06",
      ko: "열쇠는 내 가방 안에 있어.",
      answers: ["The keys are in my bag.", "My keys are in my bag.", "The key is in my bag.", "My key is in my bag."],
      hint: "안에 = in",
    },
    {
      id: "prepositions-07",
      ko: "나는 아침에 공부해.",
      answers: ["I study in the morning."],
      hint: "in the morning",
    },
    {
      id: "prepositions-08",
      ko: "나 버스 정류장이야.",
      answers: ["I'm at the bus stop."],
      hint: "특정 지점 = at",
    },
    {
      id: "prepositions-09",
      ko: "그는 밤에 일해.",
      answers: ["He works at night."],
      hint: "밤은 예외로 at",
    },
    {
      id: "prepositions-10",
      ko: "나 지금 버스 안이야.",
      answers: ["I'm on the bus now.", "I'm on the bus right now.", "I'm on the bus."],
      hint: "버스·지하철은 on",
    },
    {
      id: "prepositions-11",
      ko: "우리는 겨울에 스키 타러 가.",
      answers: ["We go skiing in winter.", "We go skiing in the winter.", "In winter, we go skiing.", "In the winter, we go skiing."],
      hint: "계절 = in / go skiing",
    },
    {
      id: "prepositions-12",
      ko: "나는 2020년에 서울로 이사했어.",
      answers: ["I moved to Seoul in 2020.", "In 2020, I moved to Seoul."],
      hint: "연도 = in / move to ~",
    },
  ],
};

export default topic;
