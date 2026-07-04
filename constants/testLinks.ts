export const TEST_LINKS = [
  {
    id: "menopause",
    title: "갱년기 증상 체크",
    description: "최근 2주간 느낀 증상으로 갱년기 컨디션을 점검해요",
    keywords: ["갱년기 테스트", "갱년기 증상", "안면홍조", "여성 건강"],
  },
  {
    id: "skin-age",
    title: "피부 나이 테스트",
    description: "현재 내 피부 탄력과 회복 상태를 확인해요",
    keywords: ["피부 나이 테스트", "피부 탄력", "피부 노화", "피부 진단"],
  },
  {
    id: "chemistry",
    title: "속궁합 테스트",
    description: "우리의 케미스트리와 관계 성향을 알아봐요",
    keywords: ["속궁합 테스트", "커플 테스트", "관계 성향", "연애 심리"],
  },
  {
    id: "love-type",
    title: "연애 타입 테스트",
    description: "나의 연애 스타일과 관계 패턴을 확인해요",
    keywords: ["연애 타입 테스트", "연애 스타일", "연애 심리", "관계 테스트"],
  },
  {
    id: "couple-fortune",
    title: "커플 사주 테스트",
    description: "운명적 궁합과 관계 흐름을 알아봐요",
    keywords: ["커플 사주", "커플 궁합", "사주 테스트", "궁합 테스트"],
  },
  {
    id: "lover-psychology",
    title: "연인 심리 테스트",
    description: "연인과의 심리적 궁합을 점검해요",
    keywords: ["연인 심리 테스트", "커플 심리", "심리 테스트", "연애 궁합"],
  },
  {
    id: "vaginal-health",
    title: "질 건강 자가 진단",
    description: "여성 건강의 핵심 컨디션을 체크해요",
    keywords: ["질 건강", "여성 건강", "자가 진단", "여성 컨디션"],
  },
  {
    id: "postpartum",
    title: "산후 회복 체크",
    description: "출산 후 회복 상태와 관리 포인트를 확인해요",
    keywords: ["산후 회복", "출산 후 회복", "산후 관리", "여성 건강"],
  },
  {
    id: "bodyline",
    title: "바디라인 고민 진단",
    description: "나에게 맞는 바디라인 관리 방향을 찾아요",
    keywords: ["바디라인", "하체 관리", "몸매 관리", "바디 진단"],
  },
  {
    id: "skin-barrier",
    title: "피부 장벽 건강 테스트",
    description: "민감한 피부와 장벽 컨디션을 진단해요",
    keywords: ["피부 장벽", "민감성 피부", "피부 건강", "피부 테스트"],
  },
  {
    id: "inner-beauty",
    title: "이너뷰티 점수 테스트",
    description: "수면, 식습관, 생활 습관으로 이너뷰티 점수를 확인해요",
    keywords: ["이너뷰티", "콜라겐", "생활 습관", "피부 건강"],
  },
  {
    id: "hair-scalp",
    title: "여성 탈모·두피 상태 테스트",
    description: "모발 빠짐과 두피 컨디션을 점검해요",
    keywords: ["여성 탈모", "두피 상태", "탈모 테스트", "두피 건강"],
  },
  {
    id: "leg-circulation",
    title: "붓기·하체순환 테스트",
    description: "다리 붓기와 하체 순환 상태를 확인해요",
    keywords: ["하체 붓기", "하체순환", "다리 붓기", "순환 테스트"],
  },
  {
    id: "diet-failure",
    title: "다이어트 실패 원인 테스트",
    description: "감량을 막는 생활 습관과 실패 원인을 찾아요",
    keywords: ["다이어트 실패", "감량 실패", "다이어트 테스트", "식습관"],
  },
  {
    id: "dark-spot-risk",
    title: "기미·잡티 위험도 테스트",
    description: "색소 고민과 잡티 위험도를 점검해요",
    keywords: ["기미 잡티", "색소침착", "피부 잡티", "기미 테스트"],
  },
  {
    id: "sleep-stress",
    title: "수면·스트레스 회복력 테스트",
    description: "피로, 수면, 스트레스 회복력을 확인해요",
    keywords: ["수면 테스트", "스트레스 테스트", "회복력", "피로 관리"],
  },
  {
    id: "pms-condition",
    title: "PMS·생리 전 컨디션 테스트",
    description: "생리 전 감정, 붓기, 통증 변화를 점검해요",
    keywords: ["PMS 테스트", "생리 전 증후군", "생리 전 컨디션", "월경 건강"],
  },
  {
    id: "gut-constipation",
    title: "장 건강·변비 타입 테스트",
    description: "배변 리듬과 장 건강 타입을 확인해요",
    keywords: ["장 건강", "변비 타입", "변비 테스트", "배변 리듬"],
  },
] as const;

export type TestLink = (typeof TEST_LINKS)[number];
export type TestId = TestLink["id"];
