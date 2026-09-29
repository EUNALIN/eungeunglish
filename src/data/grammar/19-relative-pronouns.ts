import type { GrammarTopic } from "@/lib/types";

const topic: GrammarTopic = {
  id: "relative-pronouns",
  order: 19,
  title: "관계대명사 who / which / that",
  titleEn: "Relative Pronouns",
  emoji: "🧲",
  level: 3,
  summary: "명사 뒤에 설명을 줄줄이 달아 주는 문장 접착제. 한국어랑 순서가 반대라 뇌가 꼬인다 🥨",
  concept: [
    {
      heading: "관계대명사 = 명사를 뒤에서 꾸미는 접착제",
      body: "한국어: **[어제 내가 산]** 가방 → 꾸미는 말이 **앞**\n영어: the bag **[that I bought yesterday]** → 꾸미는 말이 **뒤**\n\n두 문장을 하나로 합칠 때 공통 명사를 관계대명사로 바꿔서 이어 붙여요.\nI have a friend. + She lives in Paris.\n→ I have a friend **who** lives in Paris.\n\n꾸밈을 받는 명사를 **선행사**라고 불러요.",
      examples: [
        { en: "I have a friend who lives in Paris.", ko: "나 파리에 사는 친구 있어." },
        { en: "This is the phone that I want.", ko: "이게 내가 원하는 폰이야." },
      ],
      eunga: "응응! 영어는 결론 먼저, 설명은 나중! 성격 급한 언어야 🏃",
    },
    {
      heading: "who / which / that 고르기",
      body: "선행사가 뭐냐에 따라 골라요.\n\n• **사람** → **who** (또는 that)\n• **사물·동물** → **which** (또는 that)\n• **that**은 사람·사물 둘 다 OK! (만능 카드)\n\n대화에서는 사물엔 which보다 **that**을 더 자주 써요.\n참고: 콤마(,) 뒤에서 덧붙여 설명할 땐 that 못 써요. (…, which is ~ ⭕ / …, that is ~ ❌)",
      examples: [
        { en: "She is the girl who sings well.", ko: "그녀는 노래 잘하는 여자애야." },
        { en: "I like movies which have happy endings.", ko: "나는 해피엔딩인 영화가 좋아." },
        { en: "He is the teacher that everyone loves.", ko: "그는 모두가 좋아하는 선생님이야." },
      ],
      eunga: "응응! that은 사람이든 물건이든 다 받아 주는 착한 친구야 🤗",
    },
    {
      heading: "주격 vs 목적격 (목적격은 생략 가능!)",
      body: "**주격**: 관계대명사 바로 뒤에 **동사**가 옴 → 생략 ❌\nthe man **who** lives next door (who가 lives의 주어)\n\n**목적격**: 관계대명사 뒤에 **주어 + 동사**가 옴 → **생략 가능** ⭕\nthe cake (that) **I made** (that이 made의 목적어)\n\n원어민은 목적격을 거의 생략해요. the cake I made 처럼!\n(격식체에서 사람 목적격은 whom도 써요.)",
      examples: [
        { en: "The man who lives next door is a chef.", ko: "옆집 사는 남자는 요리사야. (주격, 생략 불가)" },
        { en: "The cake I made was too sweet.", ko: "내가 만든 케이크는 너무 달았어. (목적격 생략)" },
        { en: "The person you met is my sister.", ko: "네가 만난 사람이 내 여동생이야." },
      ],
      eunga: "응응! 목적격 that은 투명망토 쓰고 숨어 있어도 돼 🧙",
    },
    {
      heading: "한국인이 자주 하는 실수 🚨",
      body: "1. **대명사 두 번 쓰기** ❌\n   ❌ This is the book that I read **it**. → ⭕ This is the book that I read.\n   (that이 이미 목적어 역할을 하고 있어요!)\n\n2. **동사 수일치 틀리기**\n   동사는 **선행사**에 맞춰요.\n   ❌ the girl who live here → ⭕ the girl who **lives** here\n\n3. **what이랑 헷갈리기**\n   what은 선행사를 품고 있어서 앞에 명사가 없어요.\n   ❌ the thing what I want → ⭕ the thing that I want / what I want\n\n4. **주격 관계대명사 생략** ❌ the man lives next door",
      examples: [
        { en: "This is the song I told you about.", ko: "이게 내가 말했던 그 노래야." },
        { en: "People who exercise live longer.", ko: "운동하는 사람들이 더 오래 살아." },
        { en: "This is what I want.", ko: "이게 내가 원하는 거야." },
      ],
      eunga: "응응! the book that I read it은 책을 두 번 읽은 게 아니라 문법을 두 번 틀린 거야 📚",
    },
  ],
  exercises: [
    {
      id: "relative-pronouns-01",
      ko: "나 영어 가르치는 친구가 있어.",
      answers: ["I have a friend who teaches English.", "I have a friend that teaches English."],
      hint: "사람 선행사 + who, 동사는 3인칭 단수!",
    },
    {
      id: "relative-pronouns-02",
      ko: "이게 내가 어제 산 가방이야.",
      answers: [
        "This is the bag I bought yesterday.",
        "This is the bag that I bought yesterday.",
        "This is the bag which I bought yesterday.",
      ],
      hint: "목적격 관계대명사는 생략 가능",
    },
    {
      id: "relative-pronouns-03",
      ko: "나는 고양이를 좋아하는 사람들이 좋아.",
      answers: ["I like people who like cats.", "I like people that like cats."],
      hint: "people + who + 동사",
    },
    {
      id: "relative-pronouns-04",
      ko: "내가 어제 만난 여자는 간호사야.",
      answers: [
        "The woman I met yesterday is a nurse.",
        "The woman that I met yesterday is a nurse.",
        "The woman who I met yesterday is a nurse.",
        "The woman whom I met yesterday is a nurse.",
      ],
      hint: "The woman (that) I met yesterday + is ~",
    },
    {
      id: "relative-pronouns-05",
      ko: "이게 네가 찾던 열쇠야?",
      answers: [
        "Is this the key you were looking for?",
        "Is this the key that you were looking for?",
        "Is this the key which you were looking for?",
      ],
      hint: "찾다 = look for, 과거진행 were looking for",
    },
    {
      id: "relative-pronouns-06",
      ko: "그녀는 3개 국어를 할 수 있는 학생이야.",
      answers: [
        "She is a student who can speak three languages.",
        "She is a student that can speak three languages.",
        "She is a student who speaks three languages.",
        "She is a student that speaks three languages.",
      ],
      hint: "a student + who + can speak ~",
    },
    {
      id: "relative-pronouns-07",
      ko: "저기 서 있는 남자가 우리 아빠야.",
      answers: [
        "The man who is standing over there is my dad.",
        "The man that is standing over there is my dad.",
        "The man standing over there is my dad.",
        "The man who is standing over there is my father.",
        "The man standing over there is my father.",
      ],
      hint: "The man (who is standing over there) + is my dad",
    },
    {
      id: "relative-pronouns-08",
      ko: "네가 추천해 준 영화 진짜 좋았어.",
      answers: [
        "The movie you recommended was really good.",
        "The movie that you recommended was really good.",
        "The movie which you recommended was really good.",
        "The movie you recommended was really fun.",
        "The movie that you recommended was really fun.",
      ],
      hint: "주어가 길어져도 동사는 was 하나!",
    },
    {
      id: "relative-pronouns-09",
      ko: "나 파란 문이 달린 집에 살아.",
      answers: [
        "I live in a house that has a blue door.",
        "I live in a house which has a blue door.",
        "I live in a house with a blue door.",
      ],
      hint: "사물 선행사 + that/which + has",
    },
    {
      id: "relative-pronouns-10",
      ko: "그 사고를 본 사람이 경찰에 신고했어.",
      answers: [
        "The person who saw the accident called the police.",
        "The person that saw the accident called the police.",
        "The man who saw the accident called the police.",
        "Someone who saw the accident called the police.",
      ],
      hint: "경찰에 신고하다 = call the police",
    },
    {
      id: "relative-pronouns-11",
      ko: "나 늦게까지 여는 카페를 찾고 있어.",
      answers: [
        "I'm looking for a cafe that is open late.",
        "I'm looking for a cafe which is open late.",
        "I'm looking for a cafe that stays open late.",
        "I'm looking for a cafe which stays open late.",
        "I'm looking for a café that is open late.",
      ],
      hint: "늦게까지 열려 있다 = be open late",
    },
    {
      id: "relative-pronouns-12",
      ko: "내 인생을 바꾼 책은 '어린 왕자'야.",
      answers: [
        "The book that changed my life is The Little Prince.",
        "The book which changed my life is The Little Prince.",
      ],
      hint: "주격이라 that/which 생략 불가!",
    },
  ],
};

export default topic;
