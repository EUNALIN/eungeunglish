import type { GrammarTopic } from "@/lib/types";

const topic: GrammarTopic = {
  id: "wh-questions",
  order: 4,
  title: "의문사 의문문",
  titleEn: "Wh- questions",
  emoji: "❓",
  level: 1,
  summary: "뭐? 어디? 언제? 누구? 왜? 어떻게? 호기심 대마왕 입문 코스ㅋ",
  concept: [
    {
      heading: "의문사 6형제",
      body:
        "**What** 무엇 / **Where** 어디 / **When** 언제\n**Who** 누구 / **Why** 왜 / **How** 어떻게, 어때\nYes/No로 대답 못 하는, 구체적인 정보를 묻는 질문이야.",
      examples: [
        { en: "What's this?", ko: "이거 뭐야?" },
        { en: "Where are you?", ko: "너 어디야?" },
        { en: "Why are you sad?", ko: "왜 슬퍼?" },
      ],
      eunga: "응응! 의문사는 항상 문장 맨 앞자리 차지함. 새치기 장인.",
    },
    {
      heading: "공식: 의문사 + 보통 의문문",
      body:
        "그냥 Yes/No 질문 앞에 의문사를 붙이면 끝!\n**be동사**: Where + **are you**? / How + **is she**?\n**일반동사**: What + **do you** want? / Where + **does he** live?\nDoes가 들어가면 뒤 동사는 역시 **원형**!",
      examples: [
        { en: "Where do you live?", ko: "너 어디 살아?" },
        { en: "What does she want?", ko: "그녀는 뭘 원해?" },
        { en: "When is your birthday?", ko: "네 생일 언제야?" },
      ],
    },
    {
      heading: "How 패밀리",
      body:
        "How는 뒤에 단어를 붙여서 변신해!\n**How much** 얼마 / **How many** 몇 개 / **How old** 몇 살\n**How long** 얼마나 오래 / **How often** 얼마나 자주\nHow many 뒤엔 복수명사: How many **books** do you have?",
      examples: [
        { en: "How much is this?", ko: "이거 얼마예요?" },
        { en: "How old are you?", ko: "너 몇 살이야?" },
        { en: "How many kids do you have?", ko: "아이가 몇 명이에요?" },
      ],
      eunga: "How는 합체 로봇이야. much랑 붙으면 가격 탐지기로 변신! 응응!",
    },
    {
      heading: "Who가 주어일 땐 do 없이!",
      body:
        "'**누가** ~했어/해?'처럼 Who 자체가 주어면 do/does를 안 쓰고 바로 동사!\n그리고 3인칭 단수 취급 → 동사에 -s.\n**Who wants** pizza? (누가 피자 원해?)\n비교: **Who do you** like? (너는 누구를 좋아해? → Who가 목적어)",
      examples: [
        { en: "Who knows the answer?", ko: "누가 답 알아?" },
        { en: "Who do you love?", ko: "너는 누구를 사랑해?" },
      ],
    },
    {
      heading: "한국인이 자주 하는 실수",
      body:
        "❌ **Where you live?** → do 빠짐! ✅ Where do you live?\n❌ **What you are doing?** → 순서! ✅ What are you doing?\n❌ **Where does she lives?** → 원형! ✅ Where does she live?\n❌ **How much is it cost?** ✅ How much is it? / How much does it cost?",
      examples: [
        { en: "Where do you live?", ko: "너 어디 살아?" },
        { en: "How much does it cost?", ko: "그거 얼마야?" },
        { en: "Why do you ask?", ko: "왜 물어봐?" },
      ],
      eunga: "의문사 뒤엔 꼭 '질문 순서'가 따라와야 해. 안 그러면 그냥 혼잣말 됨 ㅋ",
    },
  ],
  exercises: [
    {
      id: "wh-questions-01",
      ko: "이거 뭐야?",
      answers: ["What's this?", "What is this thing?"],
      hint: "What + is + this?",
    },
    {
      id: "wh-questions-02",
      ko: "너 어디야?",
      answers: ["Where are you?"],
      hint: "Where + are + you?",
    },
    {
      id: "wh-questions-03",
      ko: "네 생일 언제야?",
      answers: ["When's your birthday?"],
      hint: "When + is + your birthday?",
    },
    {
      id: "wh-questions-04",
      ko: "너 어디 살아?",
      answers: ["Where do you live?"],
      hint: "일반동사 live → Where + do you + live?",
    },
    {
      id: "wh-questions-05",
      ko: "이거 얼마예요?",
      answers: ["How much is this?", "How much is it?", "How much does this cost?", "How much does it cost?"],
      hint: "가격은 How much!",
    },
    {
      id: "wh-questions-06",
      ko: "너 왜 그렇게 슬퍼?",
      answers: ["Why are you so sad?"],
      hint: "sad는 형용사 → be동사. Why + are you ~?",
    },
    {
      id: "wh-questions-07",
      ko: "저 사람 누구야?",
      answers: ["Who's that?", "Who's that guy?", "Who's that person?", "Who's that man?", "Who's that woman?"],
      hint: "Who + is + that?",
    },
    {
      id: "wh-questions-08",
      ko: "너 저녁으로 뭐 먹고 싶어?",
      answers: ["What do you want for dinner?", "What do you want to eat for dinner?", "What would you like for dinner?", "What would you like to eat for dinner?"],
      hint: "What + do you + want ~ for dinner?",
    },
    {
      id: "wh-questions-09",
      ko: "그녀는 어디서 일해?",
      answers: ["Where does she work?"],
      hint: "She → does. 뒤 동사는 원형 work!",
    },
    {
      id: "wh-questions-10",
      ko: "너 형제자매 몇 명 있어?",
      answers: ["How many brothers and sisters do you have?", "How many siblings do you have?"],
      hint: "개수는 How many + 복수명사 + do you have?",
    },
    {
      id: "wh-questions-11",
      ko: "누가 이 노래 불러?",
      answers: ["Who sings this song?"],
      hint: "Who가 주어! do 없이 바로 동사, 그리고 -s.",
    },
    {
      id: "wh-questions-12",
      ko: "너 헬스장에 얼마나 자주 가?",
      answers: ["How often do you go to the gym?"],
      hint: "빈도는 How often + do you ~?",
    },
  ],
};

export default topic;
