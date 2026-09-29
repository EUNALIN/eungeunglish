@AGENTS.md

# 응응글리쉬 (eungeunglish) 프로젝트 규칙

> 영어로 물어보면? 응응! — 너 영어 할 수 있어? 응! 물론이지 글리쉬

## 무엇을 만드는가
- 주인(닉네임 **은하수**)의 영어 실력 향상이 1순위, 스터디 친구들과 공유하는 정도의 규모.
- **영작(직접 타이핑)** 이 모든 학습의 중심. 객관식·블록 조립은 기본 방식으로 쓰지 않는다 (블록은 SOS 힌트로만).
- 참고 사이트: https://anjung-eng.com/ (우주 배경 + 별 = 메뉴)

## 사이트 구조
| 메뉴 | 경로 | 설명 |
|---|---|---|
| **영어 해보자 (Draw a star)** | `/draw` | **메인.** 실생활 문장 영작. 한 문장 = 별 하나, 스테이지 = 별자리. 챕터(은하) 2개 × 별자리 10개, 칭호, 나의 밤하늘 |
| **Sunday Review** | `/sunday` | 일요 스터디(Chelsinglish 초급반) 복습. 패턴 영작 / 내 문장 고치기 / 표현 퀴즈 / 전부 섞기(모두 랜덤 10문제) + 패턴 카드. 메인의 분홍 별 |
| Study with eung! | `/study` | 문법 필요할 때 들어가는 **보조 메뉴**(메인에서 작게). 개념 카드 → 영작 12문제. 블랙홀(오답노트) `/study/blackhole` |
| 영어 콘텐츠 | (팝업) | 아직 준비 중. "외계인이 잠깐 빌려갔어요… 곧 돌아오겠습니다 👽" |

## 톤 & 카피
- **병맛 + 귀여움**. 한국어 반말, 가볍고 웃긴 톤. 단, **개념 설명의 정확성은 절대 타협하지 않는다.**
- **마스코트 캐릭터 없음** (공부 집중을 위해 뺌). 반응은 문제 위 한 줄 텍스트로만. 저작권 있는 캐릭터(우마루 등)는 쓰지 않는다.
- 메인 문구는 "너 영어 할 수 있어? 응! 물론이지 글리쉬" 하나만 쓴다 (다른 슬로건 추가 금지). 퀴즈 반응 예: "응… 반만 응 🌗", "블랙홀로 슝~ 🕳️"
- 용어: 정답=별 켜짐 ⭐, 힌트 쓰고 정답=반쪽 별 🌗, 오답/정답보기=블랙홀 🕳️, 연속 학습일=관측일 🔭

## 디자인
- 테마: 은하수 / 별자리 / 갤럭시. 색상은 `src/app/globals.css` 의 CSS 변수만 사용 (`--star`, `--ok`, `--bad`, `--dim` 등 → Tailwind `text-star` 등). **색을 하드코딩하지 않는다** (라이트 모드가 깨짐).
- **다크(기본) / 라이트 모드**: 상단 닉네임 옆 🌙/☀️ 버튼 (`src/components/ThemeToggle.tsx`). 라이트 값은 `:root[data-theme="light"]` 에 정의. 저장은 localStorage `eung:theme`, `<head>` 스크립트로 깜빡임 없이 적용.
  - 주요 토큰: `surface`/`surface-deep`(모달·입력칸 바탕), `on-star`(노란 버튼 글자), `quiz`/`ink`/`ink-inverse`(문제 화면), `--unlit`/`--line-off`/`--miss`(별자리), `--sky`/`--pink`(메뉴 제목).
- 문제 푸는 화면(`WritingQuiz`)은 단색 배경 + 텍스트 중심 (`font-plain` = Noto Sans KR).
- 폰트: 제목 `font-display`(Jua), 본문 Gowun Dodum, 영어 입력/정답 `font-mono`.
- 모바일에서도 잘 보여야 한다 (스터디 친구들이 폰으로 씀).
- 이스터에그 환영: 메인의 숨은 응아자리(오각별 순서 클릭), `eungeung` 입력 시 별똥별, 밤 11시 이후 한마디.

## 채점 규칙 (`src/lib/checker.ts`)
- 대소문자, 모든 문장부호, 공백, 악센트 무시. 축약형 = 풀어쓴 형태 (I'm = I am).
- 입력칸 없이 **밑줄 위에 바로 타이핑** (투명 input 이 밑줄 영역을 덮음). 글자별로 초록/빨강, 커서 깜빡임.
- 채점 관대하게: 's = is/has, 'd = would/had, gonna = going to, ten = 10, Wi-Fi = wifi, 악센트 무시.
- 힌트·듣기 사용 또는 2번 이상 틀린 뒤 정답 → 반쪽 별. 정답 보기 → 블랙홀.
- 듣기는 브라우저 TTS (`src/lib/speech.ts`).

## 콘텐츠 추가 방법
- 문법 주제: `src/data/grammar/NN-slug.ts` 하나당 `GrammarTopic` 하나 (`src/lib/types.ts`). 추가 후 `src/data/index.ts` 에 import.
- **내 스터디 자료/수업 피드백**: `src/data/study/index.ts` 의 `studyTopics` 에 `GrammarTopic` 형식으로 추가. id 는 `study-` 로 시작.
- 영어 해보자 문장: `src/data/daily/set-*.ts` (카테고리별 `make()`), `src/data/daily/index.ts` 에서 합침. **수준: 실생활 중급** ("오늘 아침에 알람이 안 울렸어" 급). 너무 쉬운 문장 금지. 참고 사이트 문장을 그대로 베끼지 않는다.
- **Sunday Review 자료**: 원본 PDF는 `sunday/` (git 제외). 월별 `src/data/sunday/YYYY-MM.ts` (patterns / exercises 패턴당 5문장 / expressions), 개인피드백은 `src/data/sunday/feedback.ts` (fixes / feedbackExpressions). 새 달이 생기면 파일을 만들고 `src/data/sunday/index.ts` 의 MONTHS 에 추가.
  - **저장소가 Public**: 실명은 흔한 영어 이름으로 바꾸고, 너무 사적인 내용은 비슷한 일상 문장으로 바꾼다. 수업자료 원문을 통째로 옮기지 않는다.
- 별자리/챕터/칭호: `src/data/constellations.ts`. 새 은하(챕터)를 추가하면 문장도 같이 늘린다.
- `answers` 첫 번째 = 대표 정답(밑줄·듣기 기준). 축약형 변형은 넣지 말고, 진짜 다른 표현만 추가. 너그럽게.
- 한국어 문장이 애매하면 괄호로 상황을 붙인다: "(식당에서) 계산서 주세요."

## 기술
- Next.js 16 (App Router) + TypeScript + Tailwind v4. 코드 쓰기 전 `node_modules/next/dist/docs/` 확인.
- **이 PC는 Windows 스마트 앱 컨트롤이 Turbopack 네이티브 파일을 막아서 `--webpack` 으로 실행한다** (`npm run dev`, `npm run build` 에 이미 들어 있음).
- **첫 화면 = 우주선 탑승** (`src/components/BoardingGate.tsx`): 닉네임 + 4자리 코드를 입력해야만 사이트에 들어갈 수 있다. 로그아웃하면 다시 탑승 화면.
- 로그인: 닉네임 + 4자리 코드. 기록은 localStorage 에 바로 저장 + 로그인 시 **Supabase** 동기화 (`src/lib/progress.tsx`, `src/lib/cloud.ts`).
  - 서버에는 `SHA-256("eungeunglish:닉네임#코드")` 해시 key 와 기록 JSON 만 저장. 테이블 직접 접근 불가, RPC `get_progress` / `save_progress` 만 허용 (`supabase/schema.sql`).
  - 더 최신 기록(`updatedAt`)이 이긴다. 처음 로그인하면 게스트 기록을 이어받아 업로드.
  - 환경 변수: `NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY` (로컬은 `.env.local`, 배포는 Vercel 설정). 없으면 브라우저 저장만 동작. secret/service_role 키는 절대 코드·채팅에 넣지 않는다.
- 배포: Vercel https://eungeunglish.vercel.app (main 에 push 하면 자동 배포). GitHub: https://github.com/EUNALIN/eungeunglish
- 코드 주석은 한국어로, 짧게.
