import type { GrammarTopic } from "@/lib/types";

const topic: GrammarTopic = {
  id: "do-does",
  order: 3,
  title: "일반동사 부정문·의문문",
  titleEn: "Do / Does",
  emoji: "🤔",
  level: 1,
  summary: "do랑 does가 -s를 뺏어가는 도둑이라는 사실, 알고 있었음?",
  concept: [
    {
      heading: "부정문: don't / doesn't + 동사원형",
      body:
        "일반동사 부정문은 동사 앞에 **don't** 또는 **doesn't**를 넣어.\nI / you / we / they / 복수 → **don't**\nhe / she / it / 단수 → **doesn't**\n그리고 뒤의 동사는 **무조건 원형!**",
      examples: [
        { en: "I don't like carrots.", ko: "나 당근 안 좋아해." },
        { en: "She doesn't eat meat.", ko: "그녀는 고기를 안 먹어." },
        { en: "They don't live here.", ko: "걔네는 여기 안 살아." },
      ],
      eunga: "응응! doesn't가 -s를 가져갔으니 동사는 맨몸(원형)이야!",
    },
    {
      heading: "의문문: Do / Does + 주어 + 동사원형 ~?",
      body:
        "질문은 문장 맨 앞에 **Do** 또는 **Does**를 붙여.\nYou like it. → **Do you like** it?\nHe plays golf. → **Does he play** golf?\n역시 Does가 -s를 가져가니까 뒤 동사는 **원형**.",
      examples: [
        { en: "Do you like K-pop?", ko: "너 케이팝 좋아해?" },
        { en: "Does she have a car?", ko: "그녀 차 있어?" },
        { en: "Do they work together?", ko: "걔네 같이 일해?" },
      ],
      eunga: "Does he plays? ← -s 두 번 쓰면 욕심쟁이. 응아가 째려봄.",
    },
    {
      heading: "대답은 짧게: Yes, I do. / No, she doesn't.",
      body:
        "Do/Does 질문엔 do/does로 짧게 대답해.\nDo you drink coffee? → **Yes, I do.** / **No, I don't.**\nDoes he smoke? → **Yes, he does.** / **No, he doesn't.**",
      examples: [
        { en: "Do you cook? — Yes, I do.", ko: "너 요리해? — 응, 해." },
        { en: "Does it hurt? — No, it doesn't.", ko: "아파? — 아니, 안 아파." },
      ],
    },
    {
      heading: "be동사 vs do동사 구별하기",
      body:
        "문장에 **be동사**가 있으면 → not / 순서 바꾸기 (I'm not, Are you ~?)\n문장에 **일반동사**가 있으면 → don't / doesn't, Do / Does\n형용사(hungry, busy, tired) 문장은 be동사 쪽이야!",
      examples: [
        { en: "Are you tired?", ko: "너 피곤해? (형용사 → be동사)" },
        { en: "Do you feel tired?", ko: "너 피곤하게 느껴? (feel은 일반동사 → Do)" },
        { en: "I'm not busy.", ko: "나 안 바빠." },
      ],
    },
    {
      heading: "한국인이 자주 하는 실수",
      body:
        "❌ **She don't like it.** → She는 doesn't! ✅ She doesn't like it.\n❌ **He doesn't likes it.** → 원형으로! ✅ He doesn't like it.\n❌ **Do you hungry?** → hungry는 형용사라 be동사. ✅ Are you hungry?\n❌ **You like it?** (억양 질문은 구어에서 가능하지만, 연습할 땐 Do you like it?)",
      examples: [
        { en: "She doesn't like it.", ko: "그녀는 그거 안 좋아해." },
        { en: "Are you hungry?", ko: "너 배고파?" },
        { en: "Does he know you?", ko: "걔 너 알아?" },
      ],
      eunga: "doesn't + 원형, Does + 원형. 이거 백 번 끄덕이면 외워짐. 응응응응…",
    },
  ],
  exercises: [
    {
      id: "do-does-01",
      ko: "나 당근 안 좋아해.",
      answers: ["I don't like carrots."],
      hint: "I면 don't + 동사원형.",
    },
    {
      id: "do-does-02",
      ko: "너 커피 마셔?",
      answers: ["Do you drink coffee?"],
      hint: "Do + you + 동사원형 ~?",
    },
    {
      id: "do-does-03",
      ko: "그녀는 고기를 안 먹어.",
      answers: ["She doesn't eat meat."],
      hint: "She면 doesn't! 뒤는 원형 eat.",
    },
    {
      id: "do-does-04",
      ko: "그 사람 너 알아?",
      answers: ["Does he know you?", "Does she know you?"],
      hint: "3인칭 단수 질문은 Does + 주어 + 원형.",
    },
    {
      id: "do-does-05",
      ko: "우리는 TV를 안 봐.",
      answers: ["We don't watch TV."],
      hint: "We → don't.",
    },
    {
      id: "do-does-06",
      ko: "너 여기 살아?",
      answers: ["Do you live here?"],
      hint: "Do you + live ~?",
    },
    {
      id: "do-does-07",
      ko: "우리 아빠는 술을 안 마셔.",
      answers: ["My dad doesn't drink.", "My father doesn't drink.", "My dad doesn't drink alcohol.", "My father doesn't drink alcohol."],
      hint: "My dad = 3인칭 단수 → doesn't + drink.",
    },
    {
      id: "do-does-08",
      ko: "그녀 남자친구 있어?",
      answers: ["Does she have a boyfriend?"],
      hint: "Does + she + have (has 아님!).",
    },
    {
      id: "do-does-09",
      ko: "난 그거 필요 없어.",
      answers: ["I don't need it.", "I don't need that."],
      hint: "필요하다 = need. I → don't.",
    },
    {
      id: "do-does-10",
      ko: "이 버스 시청에 가요?",
      answers: ["Does this bus go to City Hall?", "Does this bus go to city hall?"],
      hint: "this bus는 단수 → Does ~ go?",
    },
    {
      id: "do-does-11",
      ko: "걔(그)는 아침을 안 먹어.",
      answers: ["He doesn't eat breakfast.", "He doesn't have breakfast.", "He skips breakfast."],
      hint: "He → doesn't + 원형. 아침 식사 = breakfast.",
    },
    {
      id: "do-does-12",
      ko: "너희 부모님은 영어 하셔?",
      answers: ["Do your parents speak English?"],
      hint: "your parents는 복수 → Do!",
    },
  ],
};

export default topic;
