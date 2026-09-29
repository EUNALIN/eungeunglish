export type ChapterId = "milky-way" | "andromeda";

/** 챕터 = 은하. 은하 하나에 별자리 10개 */
export const chapters: { id: ChapterId; name: string; nameEn: string; desc: string }[] = [
  { id: "milky-way", name: "은하수", nameEn: "The Milky Way", desc: "우리 동네 은하. 여기서부터 시작!" },
  { id: "andromeda", name: "안드로메다 은하", nameEn: "Andromeda", desc: "은하수를 다 그리면 열리는 이웃 은하. 진짜 영어 여행 시작" },
];

/**
 * Draw a star 스테이지 = 별자리.
 * 문제를 하나 맞힐 때마다 points 순서대로 별이 켜지고,
 * 양 끝 별이 모두 켜진 선(lines)이 그어진다.
 * 좌표는 0~100 정사각형 기준.
 */

export type Constellation = {
  id: string;
  chapter: ChapterId;
  name: string;
  nameEn: string;
  story: string;
  points: [number, number][];
  lines: [number, number][];
};

export const constellations: Constellation[] = [
  {
    id: "cassiopeia",
    chapter: "milky-way",
    name: "카시오페아자리",
    nameEn: "Cassiopeia",
    story: "하늘에 떠 있는 W. 영어 공부 첫걸음은 W(Wow)부터!",
    points: [[10, 38], [30, 70], [50, 44], [70, 74], [90, 32]],
    lines: [[0, 1], [1, 2], [2, 3], [3, 4]],
  },
  {
    id: "lyra",
    chapter: "milky-way",
    name: "거문고자리",
    nameEn: "Lyra",
    story: "직녀별 베가가 사는 곳. 영어 실력도 거문고처럼 술술~",
    points: [[50, 10], [40, 40], [62, 42], [36, 80], [58, 84]],
    lines: [[0, 1], [0, 2], [1, 2], [1, 3], [2, 4], [3, 4]],
  },
  {
    id: "cygnus",
    chapter: "milky-way",
    name: "백조자리",
    nameEn: "Cygnus",
    story: "은하수 위를 나는 백조. 은하수 님 전용 별자리 아님? ㅋ",
    points: [[50, 8], [50, 40], [16, 28], [84, 52], [50, 66], [50, 92]],
    lines: [[0, 1], [1, 2], [1, 3], [1, 4], [4, 5]],
  },
  {
    id: "big-dipper",
    chapter: "milky-way",
    name: "북두칠성",
    nameEn: "Big Dipper",
    story: "국자 모양 일곱 별. 영어 한 국자 떠먹기 완료!",
    points: [[8, 30], [22, 36], [36, 43], [50, 52], [56, 76], [82, 80], [86, 56]],
    lines: [[0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [5, 6], [6, 3]],
  },
  {
    id: "ursa-minor",
    chapter: "milky-way",
    name: "작은곰자리",
    nameEn: "Ursa Minor",
    story: "북극성이 꼬리 끝에! 길 잃으면 얘만 찾으면 됨",
    points: [[14, 18], [30, 28], [44, 38], [56, 50], [74, 44], [88, 62], [70, 68]],
    lines: [[0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [5, 6], [6, 3]],
  },
  {
    id: "orion",
    chapter: "milky-way",
    name: "오리온자리",
    nameEn: "Orion",
    story: "허리띠 삼형제가 트레이드마크인 사냥꾼. 영어도 사냥 완료",
    points: [[52, 6], [28, 20], [72, 22], [42, 50], [50, 53], [58, 56], [30, 90], [74, 86]],
    lines: [[0, 1], [0, 2], [1, 3], [2, 5], [3, 4], [4, 5], [3, 6], [5, 7]],
  },
  {
    id: "gemini",
    chapter: "milky-way",
    name: "쌍둥이자리",
    nameEn: "Gemini",
    story: "나란히 선 쌍둥이. 한국어 한 줄, 영어 한 줄!",
    points: [[30, 8], [28, 38], [26, 66], [20, 92], [60, 12], [58, 42], [56, 70], [54, 94]],
    lines: [[0, 1], [1, 2], [2, 3], [4, 5], [5, 6], [6, 7], [0, 4]],
  },
  {
    id: "leo",
    chapter: "milky-way",
    name: "사자자리",
    nameEn: "Leo",
    story: "어흥! 이제 영어로 포효할 시간",
    points: [[24, 12], [12, 26], [16, 44], [32, 50], [36, 30], [60, 38], [90, 46], [66, 64], [26, 26]],
    lines: [[0, 1], [1, 2], [2, 3], [3, 4], [4, 8], [8, 0], [4, 5], [5, 6], [6, 7], [7, 3]],
  },
  {
    id: "scorpius",
    chapter: "milky-way",
    name: "전갈자리",
    nameEn: "Scorpius",
    story: "꼬리가 길~게 휘어진 전갈. 문장도 길어져도 괜찮아",
    points: [[70, 6], [84, 16], [72, 26], [62, 38], [56, 50], [52, 62], [46, 74], [36, 84], [22, 88], [14, 76]],
    lines: [[0, 2], [1, 2], [2, 3], [3, 4], [4, 5], [5, 6], [6, 7], [7, 8], [8, 9]],
  },
  {
    id: "milky-way",
    chapter: "milky-way",
    name: "은하수자리",
    nameEn: "The Milky Way",
    story: "모든 별자리를 지나 도착한 곳. 여기가 바로 은하수 님의 우주!",
    points: [[8, 60], [18, 44], [28, 52], [38, 34], [50, 42], [60, 24], [70, 34], [80, 18], [90, 28], [94, 12]],
    lines: [[0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [5, 6], [6, 7], [7, 8], [8, 9]],
  },
  // ── 챕터 2: 안드로메다 은하 ──
  {
    id: "andromeda",
    chapter: "andromeda",
    name: "안드로메다자리",
    nameEn: "Andromeda",
    story: "새 은하 도착! 영어 실력도 안드로메다로 (좋은 뜻)",
    points: [[8, 72], [28, 58], [48, 48], [70, 34], [92, 20], [50, 76]],
    lines: [[0, 1], [1, 2], [2, 3], [3, 4], [2, 5]],
  },
  {
    id: "pegasus",
    chapter: "andromeda",
    name: "페가수스자리",
    nameEn: "Pegasus",
    story: "날개 달린 말. 이제 문장이 날아다닌다",
    points: [[30, 30], [70, 30], [70, 70], [30, 70], [84, 84], [96, 94], [14, 16], [4, 6]],
    lines: [[0, 1], [1, 2], [2, 3], [3, 0], [2, 4], [4, 5], [0, 6], [6, 7]],
  },
  {
    id: "perseus",
    chapter: "andromeda",
    name: "페르세우스자리",
    nameEn: "Perseus",
    story: "영웅 등장. 오늘의 영웅은 바로 너",
    points: [[50, 8], [46, 28], [40, 46], [28, 62], [16, 82], [60, 54], [76, 72]],
    lines: [[0, 1], [1, 2], [2, 3], [3, 4], [2, 5], [5, 6]],
  },
  {
    id: "bootes",
    chapter: "andromeda",
    name: "목동자리",
    nameEn: "Boötes",
    story: "연 모양 별자리. 영어도 연처럼 술술 날려보자",
    points: [[50, 92], [38, 64], [62, 64], [32, 34], [68, 34], [50, 8]],
    lines: [[0, 1], [0, 2], [1, 3], [2, 4], [3, 5], [4, 5]],
  },
  {
    id: "virgo",
    chapter: "andromeda",
    name: "처녀자리",
    nameEn: "Virgo",
    story: "밀 이삭을 든 여신. 차곡차곡 수확 중",
    points: [[16, 20], [32, 36], [50, 44], [68, 40], [86, 28], [48, 66], [40, 92]],
    lines: [[0, 1], [1, 2], [2, 3], [3, 4], [2, 5], [5, 6]],
  },
  {
    id: "sagittarius",
    chapter: "andromeda",
    name: "궁수자리",
    nameEn: "Sagittarius",
    story: "주전자 모양 궁수. 차 한 잔 하며 영작 한 잔",
    points: [[16, 52], [32, 38], [32, 66], [56, 38], [56, 66], [70, 24], [84, 50], [70, 84]],
    lines: [[0, 1], [1, 3], [3, 5], [5, 6], [6, 4], [4, 2], [2, 0], [3, 4], [4, 7]],
  },
  {
    id: "aquarius",
    chapter: "andromeda",
    name: "물병자리",
    nameEn: "Aquarius",
    story: "물 흐르듯 자연스럽게. 이게 바로 네이티브 느낌",
    points: [[8, 30], [26, 38], [44, 30], [60, 42], [70, 60], [60, 80], [84, 90]],
    lines: [[0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [4, 6]],
  },
  {
    id: "taurus",
    chapter: "andromeda",
    name: "황소자리",
    nameEn: "Taurus",
    story: "황소처럼 우직하게! 음메 아니고 응응",
    points: [[50, 62], [40, 50], [30, 40], [10, 18], [60, 50], [70, 40], [90, 20], [52, 86]],
    lines: [[0, 1], [1, 2], [2, 3], [0, 4], [4, 5], [5, 6], [0, 7]],
  },
  {
    id: "draco",
    chapter: "andromeda",
    name: "용자리",
    nameEn: "Draco",
    story: "구불구불 긴 용. 긴 문장도 이제 무섭지 않아",
    points: [[78, 8], [92, 18], [84, 30], [70, 22], [56, 34], [44, 50], [52, 66], [38, 78], [22, 72], [10, 90]],
    lines: [[0, 1], [1, 2], [2, 3], [3, 0], [3, 4], [4, 5], [5, 6], [6, 7], [7, 8], [8, 9]],
  },
  {
    id: "andromeda-galaxy",
    chapter: "andromeda",
    name: "안드로메다 은하",
    nameEn: "Andromeda Galaxy",
    story: "소용돌이 은하 완성! 두 은하를 다 그린 진짜 우주 대스타 🌟",
    points: [[50, 50], [58, 44], [62, 56], [50, 64], [38, 56], [38, 38], [56, 28], [74, 38], [78, 62], [60, 80]],
    lines: [[0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [5, 6], [6, 7], [7, 8], [8, 9]],
  },
];

/** 칭호: 완성한 별자리 수에 따라 */
export function titleFor(count: number): { title: string; next?: number } {
  const steps: [number, string][] = [
    [0, "우주 먼지 🌫️"],
    [1, "새내기 관측자 🔭"],
    [3, "별 수집가 ✨"],
    [6, "별자리 장인 🌠"],
    [10, "은하수 지배자 🌌"],
    [15, "안드로메다 탐험가 🚀"],
    [20, "우주 대스타 🌟"],
  ];
  let i = 0;
  while (i + 1 < steps.length && count >= steps[i + 1][0]) i++;
  return { title: steps[i][1], next: steps[i + 1]?.[0] };
}

/** 메인 화면 숨은 별자리(이스터에그): 별 모양 순서대로 누르면 완성 */
export const secretConstellation: Constellation = {
  id: "eunga",
  chapter: "milky-way",
  name: "응아자리",
  nameEn: "Eunga",
  story: "응아가 몰래 숨겨둔 별자리를 찾았다! 응응! 👏",
  // 오각별을 한붓그리기 순서로
  points: [[50, 5], [79, 92], [5, 38], [95, 38], [21, 92]],
  lines: [[0, 1], [1, 2], [2, 3], [3, 4], [4, 0]],
};
