export const TEST_LINKS = [
  {
    id: "menopause",
    title: "갱년기 증상 체크",
    description: "최근 2주간 느낀 증상으로 갱년기 컨디션을 점검해요",
  },
  {
    id: "skin-age",
    title: "피부 나이 테스트",
    description: "현재 내 피부 탄력과 회복 상태를 확인해요",
  },
  {
    id: "chemistry",
    title: "속궁합 테스트",
    description: "우리의 케미스트리와 관계 성향을 알아봐요",
  },
  {
    id: "love-type",
    title: "연애 타입 테스트",
    description: "나의 연애 스타일과 관계 패턴을 확인해요",
  },
  {
    id: "couple-fortune",
    title: "커플 사주 테스트",
    description: "운명적 궁합과 관계 흐름을 알아봐요",
  },
  {
    id: "lover-psychology",
    title: "연인 심리 테스트",
    description: "연인과의 심리적 궁합을 점검해요",
  },
  {
    id: "vaginal-health",
    title: "질 건강 자가 진단",
    description: "여성 건강의 핵심 컨디션을 체크해요",
  },
  {
    id: "postpartum",
    title: "산후 회복 체크",
    description: "출산 후 회복 상태와 관리 포인트를 확인해요",
  },
  {
    id: "bodyline",
    title: "바디라인 고민 진단",
    description: "나에게 맞는 바디라인 관리 방향을 찾아요",
  },
  {
    id: "skin-barrier",
    title: "피부 장벽 건강 테스트",
    description: "민감한 피부와 장벽 컨디션을 진단해요",
  },
  {
    id: "inner-beauty",
    title: "이너뷰티 점수 테스트",
    description: "수면, 식습관, 생활 습관으로 이너뷰티 점수를 확인해요",
  },
  {
    id: "hair-scalp",
    title: "여성 탈모·두피 상태 테스트",
    description: "모발 빠짐과 두피 컨디션을 점검해요",
  },
  {
    id: "leg-circulation",
    title: "붓기·하체순환 테스트",
    description: "다리 붓기와 하체 순환 상태를 확인해요",
  },
  {
    id: "diet-failure",
    title: "다이어트 실패 원인 테스트",
    description: "감량을 막는 생활 습관과 실패 원인을 찾아요",
  },
  {
    id: "dark-spot-risk",
    title: "기미·잡티 위험도 테스트",
    description: "색소 고민과 잡티 위험도를 점검해요",
  },
  {
    id: "sleep-stress",
    title: "수면·스트레스 회복력 테스트",
    description: "피로, 수면, 스트레스 회복력을 확인해요",
  },
  {
    id: "pms-condition",
    title: "PMS·생리 전 컨디션 테스트",
    description: "생리 전 감정, 붓기, 통증 변화를 점검해요",
  },
  {
    id: "gut-constipation",
    title: "장 건강·변비 타입 테스트",
    description: "배변 리듬과 장 건강 타입을 확인해요",
  },
] as const;

export type TestLink = (typeof TEST_LINKS)[number];
export type TestId = TestLink["id"];
