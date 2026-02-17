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
  }
};
