export const QUIZ_DATA = {
  menopause: {
    title: "갱년기 증상 체크",
    description: "최근 2주간 느끼신 증상을 선택해주세요. 총 10개의 질문으로 정밀 진단합니다.",
    questions: [
      {
        id: 1,
        question: "얼굴이나 상체가 갑자기 화끈거리며 열이 오르나요? (안면홍조)",
        options: [
          { text: "거의 없다", score: 0 },
          { text: "가끔 그렇다 (주 1~2회)", score: 1 },
          { text: "자주 그렇다 (주 3~5회)", score: 2 },
          { text: "거의 매일 심하게 느낀다", score: 3 },
        ],
      },
      {
        id: 2,
        question: "밤에 잠들기 어렵거나 자주 깨시나요?",
        options: [
          { text: "잘 자고 있다", score: 0 },
          { text: "가끔 뒤척인다", score: 1 },
          { text: "자주 깬다 (주 3회 이상)", score: 2 },
          { text: "거의 매일 수면에 어려움이 있다", score: 3 },
        ],
      },
      {
        id: 3,
        question: "식은땀이 나거나 밤에 땀에 젖어 깨신 적이 있나요?",
        options: [
          { text: "전혀 없다", score: 0 },
          { text: "가끔 그렇다", score: 1 },
          { text: "자주 그렇다", score: 2 },
          { text: "거의 매일 그렇다", score: 3 },
        ],
      },
      {
        id: 4,
        question: "가슴이 두근거리거나 불안감을 자주 느끼시나요?",
        options: [
          { text: "거의 없다", score: 0 },
          { text: "가끔 느낀다", score: 1 },
          { text: "자주 느낀다", score: 2 },
          { text: "일상에 지장이 있을 정도다", score: 3 },
        ],
      },
      {
        id: 5,
        question: "이유 없이 우울하거나 짜증이 나시나요?",
        options: [
          { text: "전혀 그렇지 않다", score: 0 },
          { text: "가끔 그렇다", score: 1 },
          { text: "자주 그렇다", score: 2 },
          { text: "감정 조절이 매우 어렵다", score: 3 },
        ],
      },
      {
        id: 6,
        question: "기억력이 떨어지거나 집중하기 어려운가요?",
        options: [
          { text: "전혀 그렇지 않다", score: 0 },
          { text: "가끔 깜빡한다", score: 1 },
          { text: "자주 깜빡하고 집중이 안 된다", score: 2 },
          { text: "일상에 지장이 있을 정도다", score: 3 },
        ],
      },
      {
        id: 7,
        question: "관절이나 근육이 뻣뻣하거나 아픈 곳이 있나요?",
        options: [
          { text: "전혀 없다", score: 0 },
          { text: "가끔 느낀다", score: 1 },
          { text: "자주 아프다", score: 2 },
          { text: "매우 심하다", score: 3 },
        ],
      },
      {
        id: 8,
        question: "피부가 건조하거나 가려움을 자주 느끼시나요?",
        options: [
          { text: "전혀 그렇지 않다", score: 0 },
          { text: "가끔 그렇다", score: 1 },
          { text: "자주 그렇다", score: 2 },
          { text: "매우 심하다", score: 3 },
        ],
      },
      {
        id: 9,
        question: "쉽게 피로해지거나 체력이 크게 떨어졌다고 느끼시나요?",
        options: [
          { text: "전혀 그렇지 않다", score: 0 },
          { text: "가끔 그렇다", score: 1 },
          { text: "자주 그렇다", score: 2 },
          { text: "항상 피곤하다", score: 3 },
        ],
      },
      {
        id: 10,
        question: "생리 주기가 불규칙하거나 변화가 있나요?",
        options: [
          { text: "규칙적이다", score: 0 },
          { text: "약간 불규칙해졌다", score: 1 },
          { text: "매우 불규칙하다", score: 2 },
          { text: "거의 없거나 완전히 멈췄다", score: 3 },
        ],
      },
    ],
    results: [
      {
        minScore: 0,
        maxScore: 7,
        title: "🟢 안심 단계",
        content: "현재 갱년기 증상이 거의 나타나지 않고 있어요! 지금의 건강한 상태를 오래 유지하기 위한 예방 관리를 시작해 보세요.",
        recommendation: "규칙적인 유산소 운동(주 3회 이상), 칼슘·비타민D가 풍부한 식단, 충분한 수면 습관을 유지해 주세요. 석류, 콩류 등 식물성 에스트로겐 식품도 도움이 됩니다.",
        product: {
          name: "멀티비타민 미즈케어",
          desc: "여성 맞춤형 영양소 24종 — 건강한 지금을 더 오래",
          cta: "지금 확인하기",
        }
      },
      {
        minScore: 8,
        maxScore: 14,
        title: "🟡 초기 관리 단계",
        content: "갱년기 초기 증상들이 조금씩 나타나고 있어요. 지금부터 적극적인 관리를 시작하면 증상 악화를 효과적으로 예방할 수 있습니다.",
        recommendation: "스트레스 관리(명상·요가), 규칙적인 운동, 에스트로겐이 풍부한 식품(석류·콩·아마씨) 섭취를 추천합니다. 필요시 전문 보조제를 고려해 보세요.",
        product: {
          name: "프리미엄 로열 블랙 코슈",
          desc: "갱년기 여성을 위한 집중 케어 — 자연 유래 성분",
          cta: "특별 혜택가 보기",
        }
      },
      {
        minScore: 15,
        maxScore: 22,
        title: "🟠 적극 관리 단계",
        content: "여러 가지 갱년기 증상이 뚜렷하게 나타나고 있어요. 일상생활에도 영향을 미치기 시작했을 수 있습니다. 체계적인 관리가 필요한 시점입니다.",
        recommendation: "전문가 상담을 받아보시길 권합니다. 호르몬 변화에 대응하는 기능성 식품과 함께, 수면 환경 개선·체중 관리·정기 건강검진을 병행해 주세요.",
        product: {
          name: "미즈밸런스 올인원 솔루션",
          desc: "갱년기 증상 완화 기능성 인증 — 하루 한 알 집중 케어",
          cta: "무료 상담 신청하기",
        }
      },
      {
        minScore: 23,
        maxScore: 30,
        title: "🔴 집중 케어 단계",
        content: "갱년기 증상이 심각한 수준으로 나타나고 있어 전문적인 도움이 필요합니다. 혼자 참지 마시고 반드시 전문가의 도움을 받으세요.",
        recommendation: "산부인과 전문의 상담을 적극 권합니다. 호르몬 대체 요법(HRT) 등 의학적 치료와 함께 생활 습관 전반을 개선해 주세요. 심리 상담도 큰 도움이 됩니다.",
        product: {
          name: "미즈케어 프리미엄 솔루션",
          desc: "의학적 근거 기반 — 갱년기 집중 관리 프로그램",
          cta: "전문 상담 바로가기",
        }
      }
    ]
  },
  "skin-age": {
    title: "피부 나이 테스트",
    description: "현재 당신의 피부 상태를 10가지 항목으로 정밀 진단해 드립니다.",
    questions: [
      {
        id: 1,
        question: "세안 후 아무것도 바르지 않으면 피부가 당기나요?",
        options: [
          { text: "전혀 당기지 않는다", score: 0 },
          { text: "살짝 당기는 느낌이 든다", score: 1 },
          { text: "꽤 많이 당긴다", score: 2 },
          { text: "바로 보습하지 않으면 견딜 수 없다", score: 3 },
        ],
      },
      {
        id: 2,
        question: "눈가나 입가에 잔주름이 보이나요?",
        options: [
          { text: "전혀 없다", score: 0 },
          { text: "웃을 때만 살짝 보인다", score: 1 },
          { text: "무표정일 때도 보인다", score: 2 },
          { text: "깊은 주름이 여러 곳에 있다", score: 3 },
        ],
      },
      {
        id: 3,
        question: "피부 탄력을 손으로 눌러봤을 때 어떤 상태인가요?",
        options: [
          { text: "바로 튀어오른다", score: 0 },
          { text: "약간 느리게 돌아온다", score: 1 },
          { text: "돌아오는 데 시간이 걸린다", score: 2 },
          { text: "누른 자국이 한참 남아있다", score: 3 },
        ],
      },
      {
        id: 4,
        question: "모공 크기가 어떤가요?",
        options: [
          { text: "거의 눈에 띄지 않는다", score: 0 },
          { text: "코 주변에만 약간 보인다", score: 1 },
          { text: "볼까지 넓어져 있다", score: 2 },
          { text: "얼굴 전체적으로 크게 벌어져 있다", score: 3 },
        ],
      },
      {
        id: 5,
        question: "피부 톤이 균일한가요?",
        options: [
          { text: "전체적으로 밝고 균일하다", score: 0 },
          { text: "부분적으로 칙칙한 곳이 있다", score: 1 },
          { text: "기미·잡티가 꽤 많다", score: 2 },
          { text: "전체적으로 칙칙하고 잡티가 많다", score: 3 },
        ],
      },
      {
        id: 6,
        question: "자외선 차단제를 얼마나 꼼꼼히 바르시나요?",
        options: [
          { text: "매일 꼼꼼히 바르고 덧바른다", score: 0 },
          { text: "외출할 때만 바른다", score: 1 },
          { text: "가끔 잊어버린다", score: 2 },
          { text: "거의 바르지 않는다", score: 3 },
        ],
      },
      {
        id: 7,
        question: "피부가 건조하거나 각질이 일어나나요?",
        options: [
          { text: "전혀 그렇지 않다", score: 0 },
          { text: "환절기에만 약간 그렇다", score: 1 },
          { text: "자주 건조하고 각질이 보인다", score: 2 },
          { text: "항상 건조하고 푸석푸석하다", score: 3 },
        ],
      },
      {
        id: 8,
        question: "아침에 일어났을 때 베개 자국이 얼마나 빨리 사라지나요?",
        options: [
          { text: "금방 사라진다 (10분 이내)", score: 0 },
          { text: "30분 정도 남아있다", score: 1 },
          { text: "1시간 이상 남아있다", score: 2 },
          { text: "오전 내내 남아있다", score: 3 },
        ],
      },
      {
        id: 9,
        question: "볼이나 턱선의 처짐이 느껴지나요?",
        options: [
          { text: "전혀 느끼지 못한다", score: 0 },
          { text: "약간 느껴지기 시작했다", score: 1 },
          { text: "눈에 띄게 처졌다", score: 2 },
          { text: "전체적으로 윤곽이 많이 변했다", score: 3 },
        ],
      },
      {
        id: 10,
        question: "피부 트러블(여드름·뾰루지)이 생기면 회복 속도가 어떤가요?",
        options: [
          { text: "1~2일 내에 금방 사라진다", score: 0 },
          { text: "일주일 정도 걸린다", score: 1 },
          { text: "2주 이상 걸리고 자국이 남는다", score: 2 },
          { text: "한 달 넘게 자국이 남는다", score: 3 },
        ],
      },
    ],
    results: [
      {
        minScore: 0,
        maxScore: 7,
        title: "✨ 20대 피부 나이",
        content: "축하해요! 현재 매우 건강하고 탄력 넘치는 피부를 가지고 계세요. 피부 재생력도 뛰어나고 수분 보유력도 좋은 상태입니다.",
        recommendation: "지금의 좋은 상태를 유지하는 것이 가장 중요해요! 자외선 차단과 보습을 꾸준히 해주시고, 충분한 수면과 수분 섭취를 잊지 마세요.",
        product: {
          name: "미즈 수분 크림",
          desc: "하루 종일 촉촉한 수분막 — 피부 장벽 강화",
          cta: "제품 상세보기",
        }
      },
      {
        minScore: 8,
        maxScore: 14,
        title: "💛 30대 초반 피부 나이",
        content: "피부 노화의 초기 신호가 나타나기 시작했어요. 콜라겐 생성이 점차 줄어들면서 미세한 변화가 나타나는 시기입니다. 지금부터 관리하면 노화를 효과적으로 늦출 수 있어요!",
        recommendation: "안티에이징 기능성 제품을 도입할 시기입니다. 비타민C 세럼, 레티놀 등 기능성 성분을 활용하고, 주 1~2회 각질 관리를 해주세요. 항산화 식품 섭취도 중요합니다.",
        product: {
          name: "스템벨 자생력 앰플",
          desc: "줄기세포 배양 기술 — 피부 자생력 회복",
          cta: "특별 혜택 확인",
        }
      },
      {
        minScore: 15,
        maxScore: 22,
        title: "🧡 30대 후반~40대 피부 나이",
        content: "피부 탄력과 수분이 눈에 띄게 줄어들고 있어요. 주름과 처짐이 진행되고 있으며, 피부 톤도 불균일해지기 시작한 상태입니다. 집중 안티에이징 케어가 필요합니다.",
        recommendation: "고농축 안티에이징 앰플·크림 사용을 권장합니다. 리프팅 마사지, 콜라겐 보충제 섭취, 전문 피부 관리를 병행하시면 큰 효과를 볼 수 있어요.",
        product: {
          name: "MS-II PLUS",
          desc: "피부 탄력 집중 개선 — 고농축 리프팅 솔루션",
          cta: "특별 혜택 확인",
        }
      },
      {
        minScore: 23,
        maxScore: 30,
        title: "❤️ 50대 이상 피부 나이",
        content: "피부 장벽이 약해지고, 탄력·수분·재생력이 전반적으로 크게 저하된 상태입니다. 전문적이고 체계적인 피부 관리가 반드시 필요한 시점이에요.",
        recommendation: "피부과 전문 시술과 고기능성 제품을 병행해 주세요. 세라마이드 기반 보습 제품, 고농축 펩타이드 앰플, 주 2~3회 시트 마스크 팩 사용을 추천합니다. 내부에서부터 피부를 채워주는 이너뷰티 보충제도 도움이 됩니다.",
        product: {
          name: "CR-5 멀티 솔루션",
          desc: "속부터 채워주는 강력한 리프팅 — 5중 복합 기능",
          cta: "무료 체험 신청",
        }
      }
    ]
  }
};
