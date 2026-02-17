export const QUIZ_DATA = {
  menopause: {
    title: "갱년기 증상 체크",
    description: "최근 2주간 느끼신 증상을 선택해주세요.",
    questions: [
      {
        id: 1,
        question: "얼굴이 갑자기 화끈거리고 붉어지나요?",
        options: [
          { text: "거의 없다", score: 0 },
          { text: "가끔 그렇다", score: 1 },
          { text: "자주 그렇다", score: 2 },
          { text: "매우 심하다", score: 3 },
        ],
      },
      {
        id: 2,
        question: "밤에 잠을 자기 어렵거나 자주 깨시나요?",
        options: [
          { text: "거의 없다", score: 0 },
          { text: "가끔 그렇다", score: 1 },
          { text: "자주 그렇다", score: 2 },
          { text: "매우 심하다", score: 3 },
        ],
      },
      {
        id: 3,
        question: "평소보다 가슴이 두근거리거나 불안한가요?",
        options: [
          { text: "거의 없다", score: 0 },
          { text: "가끔 그렇다", score: 1 },
          { text: "자주 그렇다", score: 2 },
          { text: "매우 심하다", score: 3 },
        ],
      },
    ],
    results: [
      {
        minScore: 0,
        maxScore: 2,
        title: "안심 단계",
        content: "현재 갱년기 증상이 거의 없으시네요! 꾸준한 건강 습관을 유지해 보세요.",
        recommendation: "규칙적인 운동과 고른 영양 섭취가 도움이 됩니다.",
        product: {
          name: "멀티비타민 미즈케어",
          desc: "여성 맞춤형 영양소 24종",
          cta: "지금 확인하기",
        }
      },
      {
        minScore: 3,
        maxScore: 5,
        title: "관리 필요 단계",
        content: "약간의 증상이 나타나고 있어요. 충분한 휴식과 전용 보조제가 도움이 될 수 있습니다.",
        recommendation: "석류나 콩 등 에스트로겐이 풍부한 식품을 챙겨보세요.",
        product: {
          name: "프리미엄 로열 블랙 코슈",
          desc: "갱년기 여성을 위한 집중 케어",
          cta: "특별 혜택가 보기",
        }
      },
      {
        minScore: 6,
        maxScore: 9,
        title: "집중 케어 단계",
        content: "갱년기 증상으로 인해 일상이 불편하실 수 있습니다. 적극적인 관리가 필요한 시점이에요.",
        recommendation: "전문가와의 상담을 고려해 보시고, 건강한 식단을 꼭 챙기세요.",
        product: {
          name: "미즈밸런스 올인원 솔루션",
          desc: "갱년기 증상 완화 기능성 인증 제품",
          cta: "무료 상담 신청하기",
        }
      }
    ]
  },
  "skin-age": {
    title: "피부 나이 테스트",
    description: "현재 당신의 피부 상태를 진단해 드립니다.",
    questions: [
      {
        id: 1,
        question: "세안 후 피부가 당기는 느낌이 드나요?",
        options: [
          { text: "전혀 그렇지 않다", score: 0 },
          { text: "가끔 그렇다", score: 1 },
          { text: "자주 그렇다", score: 2 },
          { text: "항상 그렇다", score: 3 },
        ],
      },
      {
        id: 2,
        question: "눈가나 입가에 잔주름이 눈에 띄나요?",
        options: [
          { text: "없다", score: 0 },
          { text: "조금 있다", score: 1 },
          { text: "눈에 띈다", score: 2 },
          { text: "매우 심하다", score: 3 },
        ],
      },
      {
        id: 3,
        question: "피부 탄력이 예전보다 떨어진 것 같나요?",
        options: [
          { text: "그대로다", score: 0 },
          { text: "약간 떨어진 것 같다", score: 1 },
          { text: "많이 떨어졌다", score: 2 },
          { text: "매우 심각하다", score: 3 },
        ],
      },
    ],
    results: [
      {
        minScore: 0,
        maxScore: 2,
        title: "20대 피부 상태",
        content: "와우! 현재 매우 건강하고 탄력 있는 피부를 유지하고 계시네요.",
        recommendation: "지금처럼 자외선 차단과 보습에 신경 써주세요.",
        product: {
          name: "미즈 수분 크림",
          desc: "하루 종일 촉촉한 수분막",
          cta: "제품 상세보기",
        }
      },
      {
        minScore: 3,
        maxScore: 5,
        title: "30대 피부 상태",
        content: "노화가 시작되는 단계입니다. 집중적인 영양 공급이 필요해요.",
        recommendation: "기능성 안티에이징 제품을 사용하기 시작하면 좋습니다.",
        product: {
          name: "MS-II PLUS",
          desc: "피부 탄력 집중 개선 솔루션",
          cta: "특별 혜택 확인",
        }
      },
      {
        minScore: 6,
        maxScore: 9,
        title: "40대 이상 피부 상태",
        content: "피부 장벽이 약해지고 탄력이 많이 저하된 상태입니다. 전문가의 케어가 권장됩니다.",
        recommendation: "고농축 앰플과 전문 관리를 병행해 보세요.",
        product: {
          name: "CR-5 멀티 솔루션",
          desc: "속부터 채워주는 강력한 리프팅",
          cta: "무료 체험 신청",
        }
      }
    ]
  }
};
