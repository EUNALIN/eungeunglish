import type { GrammarTopic } from "@/lib/types";

const topic: GrammarTopic = {
  id: "present-simple",
  order: 2,
  title: "일반동사 현재",
  titleEn: "Present simple",
  emoji: "🔁",
  level: 1,
  summary: "he, she, it만 보면 동사에 -s 붙이는 병에 걸려야 함ㅋ",
  concept: [
    {
      heading: "현재시제 = 평소에, 늘, 반복적으로",
      body:
        "일반동사 현재형은 '지금 이 순간'보다 **습관, 반복, 사실**을 말할 때 써.\nI drink coffee every morning. (매일 아침 습관)\nThe sun rises in the east. (변하지 않는 사실)\n'지금 하는 중'은 현재진행형(be + -ing)이 따로 있어!",
      examples: [
        { en: "I drink coffee every morning.", ko: "나는 매일 아침 커피 마셔." },
        { en: "We live in Seoul.", ko: "우리는 서울에 살아." },
        { en: "Water boils at 100 degrees.", ko: "물은 100도에서 끓어." },
      ],
      eunga: "응응! 현재시제는 '맨날 그럼'의 시제야. 나도 맨날 끄덕임.",
    },
    {
      heading: "3인칭 단수 주어면 동사에 -s",
      body:
        "주어가 **he / she / it / 사람 한 명 / 물건 하나**면 동사 끝에 **-s**를 붙여!\nI like → **She likes**\nThey play → **He plays**\nI, you, we, they, 복수 주어는 그냥 원형 그대로.",
      examples: [
        { en: "She likes cats.", ko: "그녀는 고양이를 좋아해." },
        { en: "My dad works at a bank.", ko: "우리 아빠는 은행에서 일하셔." },
        { en: "They play soccer on Sundays.", ko: "걔네는 일요일마다 축구해." },
      ],
      eunga: "3인칭 단수는 -s 꼬리를 달고 다님. 꼬리 없으면 원어민이 '응?' 함.",
    },
    {
      heading: "-s 붙이는 규칙",
      body:
        "대부분: **+s** (eats, reads)\n-s, -sh, -ch, -x, -o로 끝나면: **+es** (watches, goes, does, fixes)\n자음 + y로 끝나면: **y → ies** (study → studies, cry → cries)\n모음 + y는 그냥 +s (play → plays)\n특별: **have → has**",
      examples: [
        { en: "He watches TV every night.", ko: "그는 매일 밤 TV를 봐." },
        { en: "She studies English.", ko: "그녀는 영어를 공부해." },
        { en: "My brother has a car.", ko: "우리 형은 차가 있어." },
      ],
      eunga: "have가 has로 변신하는 거 보면 걔도 3인칭 앞에선 긴장하나 봐 ㅋ",
    },
    {
      heading: "빈도부사 위치: 일반동사 앞",
      body:
        "always(항상), usually(보통), often(자주), sometimes(가끔), never(절대 안)는\n**일반동사 앞**에 와! (be동사면 be동사 뒤)\nI **always** eat breakfast.\nShe **never** drinks coffee.",
      examples: [
        { en: "I usually get up at seven.", ko: "나는 보통 7시에 일어나." },
        { en: "He sometimes cooks dinner.", ko: "그는 가끔 저녁을 해." },
        { en: "She never drinks coffee.", ko: "그녀는 커피를 절대 안 마셔." },
      ],
    },
    {
      heading: "한국인이 자주 하는 실수",
      body:
        "❌ **She like pizza.** → -s 빠짐! ✅ She likes pizza.\n❌ **He is work here.** → be동사 + 일반동사 동시 사용 금지. ✅ He works here.\n❌ **My friends lives here.** → 복수 주어엔 -s 없음! ✅ My friends live here.\n❌ **She haves a dog.** ✅ She has a dog.",
      examples: [
        { en: "She likes pizza.", ko: "그녀는 피자 좋아해." },
        { en: "He works here.", ko: "그는 여기서 일해." },
        { en: "My friends live here.", ko: "내 친구들은 여기 살아." },
      ],
      eunga: "주어가 여러 명이면 -s는 동사가 아니라 주어한테 붙어 있음! 응응!",
    },
  ],
  exercises: [
    {
      id: "present-simple-01",
      ko: "나는 커피를 좋아해.",
      answers: ["I like coffee.", "I love coffee."],
      hint: "주어가 I면 동사 원형 그대로.",
    },
    {
      id: "present-simple-02",
      ko: "그녀는 고양이를 좋아해.",
      answers: ["She likes cats.", "She loves cats."],
      hint: "She면 동사에 -s! 고양이 전체는 cats.",
    },
    {
      id: "present-simple-03",
      ko: "우리 아빠는 은행에서 일하셔.",
      answers: ["My dad works at a bank.", "My father works at a bank.", "My dad works in a bank.", "My father works in a bank."],
      hint: "My dad = 3인칭 단수 → works.",
    },
    {
      id: "present-simple-04",
      ko: "그는 매일 운동해.",
      answers: ["He works out every day.", "He exercises every day."],
      hint: "운동하다 = work out / exercise. He니까 -s!",
    },
    {
      id: "present-simple-05",
      ko: "걔네(그들)는 서울에 살아.",
      answers: ["They live in Seoul."],
      hint: "They는 복수라 -s 없음.",
    },
    {
      id: "present-simple-06",
      ko: "내 남동생은 게임을 너무 많이 해.",
      answers: ["My brother plays games too much.", "My little brother plays games too much.", "My younger brother plays games too much.", "My brother plays too many games.", "My little brother plays too many games.", "My younger brother plays too many games."],
      hint: "play + s = plays (모음 + y는 그냥 -s).",
    },
    {
      id: "present-simple-07",
      ko: "그녀는 매일 밤 영어를 공부해.",
      answers: ["She studies English every night."],
      hint: "study → studies (자음 + y는 ies).",
    },
    {
      id: "present-simple-08",
      ko: "그는 보통 7시에 일어나.",
      answers: ["He usually gets up at seven.", "He usually wakes up at seven.", "He usually gets up at 7.", "He usually wakes up at 7."],
      hint: "usually는 일반동사 앞! gets up / wakes up.",
    },
    {
      id: "present-simple-09",
      ko: "우리 언니는 차가 있어.",
      answers: ["My sister has a car.", "My older sister has a car.", "My big sister has a car."],
      hint: "have의 3인칭 단수형은 has!",
    },
    {
      id: "present-simple-10",
      ko: "그는 매일 밤 TV를 봐.",
      answers: ["He watches TV every night."],
      hint: "watch는 -ch로 끝나니까 +es.",
    },
    {
      id: "present-simple-11",
      ko: "내 친구는 항상 늦게 와.",
      answers: ["My friend always comes late.", "My friend always arrives late.", "My friend always shows up late."],
      hint: "always는 동사 앞, 동사엔 -s! (comes / arrives / shows up)",
    },
    {
      id: "present-simple-12",
      ko: "우리 엄마는 매일 아침 나한테 전화하셔.",
      answers: ["My mom calls me every morning.", "My mother calls me every morning."],
      hint: "My mom = 3인칭 단수 → calls.",
    },
  ],
};

export default topic;
