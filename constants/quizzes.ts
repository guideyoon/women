export const QUIZ_DATA = {
  menopause: {
    title: "갱년기 증상 체크",
    description: "최근 2주간 느끼신 증상을 선택해주세요. 총 10개의 질문으로 정밀 진단합니다.",
    questions: [
      {
        id: 1,
        question: "얼굴이나 상체가 갑자기 화끈거리며 열이 오르나요? (안면홍조)",
        icon: "Flame",
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
        icon: "Moon",
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
        icon: "Droplets",
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
        icon: "HeartPulse",
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
        icon: "Wind",
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
        icon: "Brain",
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
        icon: "Accessibility",
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
        icon: "Sparkles",
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
        icon: "BatteryLow",
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
        icon: "Calendar",
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
          url: "https://replyalba.com/pt/N0cKnHbm9V",
        }
      },
      {
        minScore: 8,
        maxScore: 14,
        title: "🟡 초기 관리 단계",
        content: "갱년기 초기 증상들이 조금씩 나타나고 있어요. 지금부터 적극적인 관리를 시작하면 증상 악화를 효과적으로 예방할 수 있습니다.",
        recommendation: "스트레스 관리(명상·요가), 규칙적인 운동, 에스트로겐이 풍부한 식품(석류·콩·아마씨) 섭취를 추천합니다. 필요시 전문 보조제를 고려해 보세요.",
        product: {
          name: "여궁골드",
          desc: "여성 생애 주기별 맞춤 솔루션 제공",
          cta: "특별 혜택가 보기",
          url: "https://replyalba.com/pt/Z1IJI9rY2c",
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
          url: "https://replyalba.com/pt/Y1PHVwO7GO",
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
          url: "https://replyalba.com/pt/DU4eJfMd1j",
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
          url: "https://replyalba.com/pt/yBXZ7Kddui",
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
          url: "https://replyalba.com/pt/CzCyUNUG4o",
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
          url: "https://replyalba.com/pt/IGBX5btayE",
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
          url: "https://replyalba.com/pt/JNyIgk9t32",
        }
      }
    ]
  },
  "chemistry": {
    title: "속궁합 테스트",
    description: "나의 성향을 10가지 질문으로 파악하고, 파트너와 점수를 비교해 궁합을 확인해 보세요. (각자 테스트 후 점수 차이로 궁합 확인!)",
    questions: [
      {
        id: 1,
        question: "섹스를 할 때 가장 중요하게 생각하는 것은?",
        options: [
          { text: "감정적인 연결과 눈 맞춤, 애정 표현", score: 4 },
          { text: "강렬하고 격렬한 오르가즘 느낌", score: 3 },
          { text: "새로운 시도와 자극적인 플레이", score: 2 },
          { text: "편안하고 느긋하게 오래 즐기는 것", score: 1 },
        ],
      },
      {
        id: 2,
        question: "이상적인 섹스 횟수는 어느 정도라고 생각해? (주당 기준)",
        options: [
          { text: "거의 매일 하고 싶다 (5~7회 이상)", score: 4 },
          { text: "일주일에 3~4번 정도가 딱 좋다", score: 3 },
          { text: "일주일에 1~2번만 해도 충분하다", score: 2 },
          { text: "한 달에 3~5번 정도면 만족", score: 1 },
        ],
      },
      {
        id: 3,
        question: "전희(foreplay)에 얼마나 시간을 투자하고 싶어?",
        options: [
          { text: "최소 30분 이상은 해야 제대로 된 기분", score: 4 },
          { text: "15~20분 정도면 충분히 뜨거워짐", score: 3 },
          { text: "5~10분만 해도 바로 본게임 OK", score: 2 },
          { text: "거의 생략하고 바로 들어가고 싶을 때 많음", score: 1 },
        ],
      },
      {
        id: 4,
        question: "섹스 중에 말(더티 토크)을 얼마나 좋아해?",
        options: [
          { text: "거의 안 하는 게 더 자연스럽고 좋음", score: 4 },
          { text: "가끔 속삭이는 정도는 섹시하다", score: 3 },
          { text: "좀 세게, 노골적으로 말하는 게 흥분됨", score: 2 },
          { text: "상대가 많이 말해줬으면 좋겠음 (내가 말하는 건 부끄러움)", score: 1 },
        ],
      },
      {
        id: 5,
        question: "야한 장소/상황에서 하는 것에 대한 호감도는?",
        options: [
          { text: "절대 안 돼, 집에서만 가능", score: 4 },
          { text: "호텔이나 여행지 정도는 괜찮음", score: 3 },
          { text: "차 안, 영화관 뒷자리 정도는 설렌다", score: 2 },
          { text: "위험한 장소일수록 더 강렬하게 느껴짐", score: 1 },
        ],
      },
      {
        id: 6,
        question: "섹스 후에 가장 하고 싶은 행동은?",
        options: [
          { text: "서로 껴안고 바로 잠들기", score: 4 },
          { text: "샤워하고 이야기 나누기", score: 3 },
          { text: "바로 또 한 번 더 하고 싶음", score: 2 },
          { text: "각자 폰 보고 따로 쉬기", score: 1 },
        ],
      },
      {
        id: 7,
        question: "새로운 포지션이나 플레이를 제안받았을 때 반응은?",
        options: [
          { text: "귀엽게 부끄러워하면서도 궁금해짐", score: 4 },
          { text: "\"한 번 해보자!\" 바로 OK", score: 3 },
          { text: "설명 자세히 듣고 판단함", score: 2 },
          { text: "별로 안 끌리면 솔직하게 거절", score: 1 },
        ],
      },
      {
        id: 8,
        question: "오르가즘에 도달하는 난이도는 어느 정도야?",
        options: [
          { text: "거의 매번 쉽게 느낌", score: 4 },
          { text: "집중하고 분위기 맞으면 대부분 느낌", score: 3 },
          { text: "꽤 오랜 시간과 자극이 필요함", score: 2 },
          { text: "파트너랑만 가능하거나 잘 안 됨", score: 1 },
        ],
      },
      {
        id: 9,
        question: "섹스 중에 통증/불편함이 있을 때 어떻게 할 것 같아?",
        options: [
          { text: "바로 말하고 멈추거나 바꿈", score: 4 },
          { text: "좀 참다가 나중에 말함", score: 3 },
          { text: "분위기 깨기 싫어서 말 안 함", score: 2 },
          { text: "통증이 있어도 크게 신경 안 씀", score: 1 },
        ],
      },
      {
        id: 10,
        question: "섹스 토이(바이브레이터, 수갑, 안대 등) 사용에 대한 생각은?",
        options: [
          { text: "없어도 충분하고, 오히려 어색함", score: 4 },
          { text: "가끔 쓰면 재미있을 것 같음", score: 3 },
          { text: "적극 추천! 다양성이 생김", score: 2 },
          { text: "이미 자주 쓰고 있는 편", score: 1 },
        ],
      },
    ],
    results: [
      {
        minScore: 10,
        maxScore: 17,
        title: "🌙 자유분방 탐험형",
        content: "당신은 개방적이고 모험적인 스타일이에요. 새로운 시도를 즐기며 자극적인 경험을 선호합니다. 파트너의 점수와 비교해보세요!",
        recommendation: "💡 궁합 확인법: 파트너도 같은 테스트를 한 뒤, 두 점수의 차이를 확인하세요.\n\n🔥 0~6점 차이 = 매우 좋음 — 성적 템포·취향이 거의 비슷!\n👍 7~12점 차이 = 좋음 — 대화로 충분히 조율 가능\n⚠️ 13~18점 차이 = 보통 — 꽤 다른 스타일, 노력 필요\n😅 19점 이상 = 많이 다름 — 핵심 가치가 달라 장기적 조율 중요",
        product: {
          name: "우먼시크릿",
          desc: "관계 자신감을 위한 여성 시크릿 케어",
          cta: "자세히 보기",
          url: "https://replyalba.com/pt/YfcVFCdD21",
        }
      },
      {
        minScore: 18,
        maxScore: 25,
        title: "🌿 밸런스 조화형",
        content: "적당한 모험심과 안정감을 모두 갖춘 균형 잡힌 스타일이에요. 다양한 파트너와 잘 맞출 수 있는 유연한 타입입니다. 파트너의 점수와 비교해보세요!",
        recommendation: "💡 궁합 확인법: 파트너도 같은 테스트를 한 뒤, 두 점수의 차이를 확인하세요.\n\n🔥 0~6점 차이 = 매우 좋음 — 성적 템포·취향이 거의 비슷!\n👍 7~12점 차이 = 좋음 — 대화로 충분히 조율 가능\n⚠️ 13~18점 차이 = 보통 — 꽤 다른 스타일, 노력 필요\n😅 19점 이상 = 많이 다름 — 핵심 가치가 달라 장기적 조율 중요",
        product: {
          name: "우먼시크릿2",
          desc: "더 깊고 진한 사랑을 위한 시크릿 관리",
          cta: "지금 확인하기",
          url: "https://replyalba.com/pt/xWHMHU09mP",
        }
      },
      {
        minScore: 26,
        maxScore: 33,
        title: "🌹 감성 로맨틱형",
        content: "감정적 연결과 분위기를 중시하는 로맨틱한 스타일이에요. 깊은 교감과 애정 표현을 중요하게 생각합니다. 파트너의 점수와 비교해보세요!",
        recommendation: "💡 궁합 확인법: 파트너도 같은 테스트를 한 뒤, 두 점수의 차이를 확인하세요.\n\n🔥 0~6점 차이 = 매우 좋음 — 성적 템포·취향이 거의 비슷!\n👍 7~12점 차이 = 좋음 — 대화로 충분히 조율 가능\n⚠️ 13~18점 차이 = 보통 — 꽤 다른 스타일, 노력 필요\n😅 19점 이상 = 많이 다름 — 핵심 가치가 달라 장기적 조율 중요",
        product: {
          name: "우먼시크릿3",
          desc: "여성의 건강과 아름다움을 지키는 관계 케어",
          cta: "특별 혜택 보기",
          url: "https://replyalba.com/pt/LAiSP6X1ij",
        }
      },
      {
        minScore: 34,
        maxScore: 40,
        title: "💗 순수 하트형",
        content: "안정적이고 감성적인 교감을 가장 중시하는 스타일이에요. 편안함과 애정표현 속에서 최고의 만족을 느끼는 타입입니다. 파트너의 점수와 비교해보세요!",
        recommendation: "💡 궁합 확인법: 파트너도 같은 테스트를 한 뒤, 두 점수의 차이를 확인하세요.\n\n🔥 0~6점 차이 = 매우 좋음 — 성적 템포·취향이 거의 비슷!\n👍 7~12점 차이 = 좋음 — 대화로 충분히 조율 가능\n⚠️ 13~18점 차이 = 보통 — 꽤 다른 스타일, 노력 필요\n😅 19점 이상 = 많이 다름 — 핵심 가치가 달라 장기적 조율 중요",
        product: {
          name: "우먼시크릿4",
          desc: "관계 속 자신감을 높여주는 프리미엄 솔루션",
          cta: "무료 상담 받기",
          url: "https://replyalba.com/pt/EkShEr1oPs",
        }
      }
    ]
  },
  "love-type": {
    title: "연애 타입 테스트",
    description: "나의 연애 스타일은 어떤 유형일까요? 10가지 질문으로 알아보세요.",
    questions: [
      {
        id: 1,
        question: "연인과 연락하는 빈도는 어느 정도가 좋나요?",
        options: [
          { text: "수시로 연락하고 싶다", score: 3 },
          { text: "하루에 몇 번이면 충분하다", score: 2 },
          { text: "하루 한 번이면 된다", score: 1 },
          { text: "필요할 때만 하면 된다", score: 0 },
        ],
      },
      {
        id: 2,
        question: "연인에게 애정 표현을 어떻게 하나요?",
        options: [
          { text: "말로 자주 표현한다", score: 3 },
          { text: "행동으로 보여준다", score: 2 },
          { text: "선물이나 이벤트로 표현한다", score: 1 },
          { text: "표현을 잘 안 하는 편이다", score: 0 },
        ],
      },
      {
        id: 3,
        question: "연인과의 갈등 상황에서 나는?",
        options: [
          { text: "바로 대화로 해결하려 한다", score: 0 },
          { text: "시간을 두고 정리한 뒤 대화한다", score: 1 },
          { text: "상대가 먼저 말할 때까지 기다린다", score: 2 },
          { text: "혼자 삭히는 편이다", score: 3 },
        ],
      },
      {
        id: 4,
        question: "이상적인 데이트 스타일은?",
        options: [
          { text: "집에서 함께 쉬는 것", score: 0 },
          { text: "맛집 탐방이나 카페 투어", score: 1 },
          { text: "액티비티(운동, 여행 등)", score: 2 },
          { text: "문화생활(전시, 공연 등)", score: 3 },
        ],
      },
      {
        id: 5,
        question: "연인의 이성 친구에 대한 나의 태도는?",
        options: [
          { text: "전혀 신경 쓰지 않는다", score: 0 },
          { text: "약간 신경 쓰지만 괜찮다", score: 1 },
          { text: "불편하지만 참는다", score: 2 },
          { text: "매우 신경 쓰인다", score: 3 },
        ],
      },
      {
        id: 6,
        question: "연애에서 가장 중요하게 생각하는 것은?",
        options: [
          { text: "신뢰와 안정감", score: 0 },
          { text: "설렘과 로맨스", score: 1 },
          { text: "성장과 자극", score: 2 },
          { text: "자유와 독립", score: 3 },
        ],
      },
      {
        id: 7,
        question: "연인과 각자의 시간을 보내는 것에 대해?",
        options: [
          { text: "항상 함께하고 싶다", score: 3 },
          { text: "대부분 함께하되 가끔 혼자 시간도 필요", score: 2 },
          { text: "적당히 각자 시간이 있어야 한다", score: 1 },
          { text: "혼자만의 시간이 많이 필요하다", score: 0 },
        ],
      },
      {
        id: 8,
        question: "연인에게 고민이 생기면?",
        options: [
          { text: "바로 연인에게 이야기한다", score: 3 },
          { text: "정리한 후 이야기한다", score: 2 },
          { text: "친구에게 먼저 이야기한다", score: 1 },
          { text: "혼자서 해결하려 한다", score: 0 },
        ],
      },
      {
        id: 9,
        question: "연애 초반 나의 모습은?",
        options: [
          { text: "적극적으로 다가간다", score: 3 },
          { text: "은근히 관심을 보인다", score: 2 },
          { text: "상대가 다가오길 기다린다", score: 1 },
          { text: "관심이 있어도 티를 안 낸다", score: 0 },
        ],
      },
      {
        id: 10,
        question: "이별 후 나의 모습은?",
        options: [
          { text: "오래 슬퍼하고 잊기 힘들다", score: 3 },
          { text: "힘들지만 서서히 극복한다", score: 2 },
          { text: "빠르게 정리하고 앞으로 나아간다", score: 1 },
          { text: "담담하게 받아들인다", score: 0 },
        ],
      },
    ],
    results: [
      {
        minScore: 0,
        maxScore: 7,
        title: "🦋 자유로운 독립형",
        content: "당신은 연애에서도 개인의 자유와 독립성을 중시하는 타입이에요. 서로의 공간을 존중하며, 집착보다는 신뢰를 기반으로 한 관계를 선호합니다.",
        recommendation: "나의 공간을 지키되, 상대에게 관심과 애정을 표현하는 것도 잊지 마세요. 작은 표현이 관계를 더 따뜻하게 만들어줍니다.",
        product: {
          name: "레이디큐어 솔루션",
          desc: "여성만의 말 못할 고민을 근본부터 케어",
          cta: "자세히 보기",
          url: "https://replyalba.com/pt/WsdU9oMhje",
        }
      },
      {
        minScore: 8,
        maxScore: 14,
        title: "🌿 안정 추구형",
        content: "당신은 차분하고 안정적인 관계를 추구하는 타입이에요. 신뢰와 편안함을 가장 중요하게 생각하며, 꾸준한 사랑을 실천합니다.",
        recommendation: "안정적인 관계 속에서도 가끔 새로운 시도를 해보세요. 서프라이즈 데이트나 새로운 취미를 함께 시작하면 관계에 활력이 생겨요.",
        product: {
          name: "레이디큐어 솔루션 2",
          desc: "더 당당한 관계를 위한 여성 시크릿 솔루션",
          cta: "지금 확인하기",
          url: "https://replyalba.com/pt/z6pRyceT7w",
        }
      },
      {
        minScore: 15,
        maxScore: 22,
        title: "🌹 로맨틱 감성형",
        content: "당신은 사랑에 깊이 빠지는 로맨티스트예요! 설렘과 감동을 중시하며, 연인에게 많은 애정을 쏟는 타입입니다.",
        recommendation: "풍부한 감성이 장점이지만, 때로는 현실적인 면도 함께 봐야 해요. 감정에 휘둘리지 않고 이성적으로 판단하는 연습도 해보세요.",
        product: {
          name: "미즈케어 솔루션 4",
          desc: "수술 없이 안전하게 관리하는 여성 건강",
          cta: "특별 혜택 보기",
          url: "https://replyalba.com/pt/SoLJ7OMizy",
        }
      },
      {
        minScore: 23,
        maxScore: 30,
        title: "🔥 열정 올인형",
        content: "당신은 사랑에 올인하는 열정적인 연애인이에요! 연인에게 모든 것을 쏟아붓고, 함께하는 모든 순간을 소중히 여깁니다.",
        recommendation: "열정적인 사랑도 좋지만, 나만의 시간과 취미도 꼭 가지세요. 서로에게 숨 쉴 공간을 주는 것이 오히려 관계를 오래가게 만듭니다.",
        product: {
          name: "미즈케어 솔루션 5",
          desc: "행복한 부부생활을 위한 최상의 선택",
          cta: "무료 상담 받기",
          url: "https://replyalba.com/pt/Phjrq2zsy8",
        }
      }
    ]
  },
  "couple-fortune": {
    title: "커플 사주 테스트",
    description: "두 사람의 운명적 궁합을 10가지 관점에서 풀어봅니다.",
    questions: [
      {
        id: 1,
        question: "처음 만났을 때 느낌이 어땠나요?",
        options: [
          { text: "운명처럼 끌렸다", score: 0 },
          { text: "첫눈에 호감이 있었다", score: 1 },
          { text: "서서히 알아갔다", score: 2 },
          { text: "별다른 느낌이 없었다", score: 3 },
        ],
      },
      {
        id: 2,
        question: "두 사람의 생일 계절이 어떻게 되나요?",
        options: [
          { text: "같은 계절이다", score: 0 },
          { text: "이웃한 계절이다 (봄-여름 등)", score: 1 },
          { text: "한 계절 건너뛴다", score: 2 },
          { text: "정반대 계절이다", score: 3 },
        ],
      },
      {
        id: 3,
        question: "꿈에서 상대방이 나온 적이 있나요?",
        options: [
          { text: "자주 나온다", score: 0 },
          { text: "가끔 나온다", score: 1 },
          { text: "한두 번 있다", score: 2 },
          { text: "전혀 없다", score: 3 },
        ],
      },
      {
        id: 4,
        question: "우연의 일치가 얼마나 자주 일어나나요?",
        options: [
          { text: "놀라울 정도로 자주", score: 0 },
          { text: "종종 있다", score: 1 },
          { text: "가끔 있다", score: 2 },
          { text: "거의 없다", score: 3 },
        ],
      },
      {
        id: 5,
        question: "서로의 가족 관계가 어떤가요?",
        options: [
          { text: "양쪽 다 잘 어울린다", score: 0 },
          { text: "한쪽은 잘 맞는다", score: 1 },
          { text: "아직 잘 모르겠다", score: 2 },
          { text: "좀 불편한 편이다", score: 3 },
        ],
      },
      {
        id: 6,
        question: "두 사람의 혈액형 궁합은?",
        options: [
          { text: "찰떡궁합 (A-O, B-AB 등)", score: 0 },
          { text: "좋은 궁합", score: 1 },
          { text: "보통이다", score: 2 },
          { text: "안 맞는다고 알려짐", score: 3 },
        ],
      },
      {
        id: 7,
        question: "위기 상황에서 두 사람은 어떻게 하나요?",
        options: [
          { text: "힘을 합쳐 잘 극복한다", score: 0 },
          { text: "한 쪽이 이끌고 한 쪽이 따른다", score: 1 },
          { text: "각자 알아서 해결한다", score: 2 },
          { text: "서로 탓하는 경향이 있다", score: 3 },
        ],
      },
      {
        id: 8,
        question: "만남 이후 서로의 운(일, 건강 등)이 어떻게 변했나요?",
        options: [
          { text: "확실히 좋아졌다", score: 0 },
          { text: "약간 좋아진 것 같다", score: 1 },
          { text: "별 변화 없다", score: 2 },
          { text: "오히려 안 좋아진 것 같다", score: 3 },
        ],
      },
      {
        id: 9,
        question: "서로를 떠올렸을 때 가장 먼저 드는 감정은?",
        options: [
          { text: "따뜻함과 안정감", score: 0 },
          { text: "설렘과 기대", score: 1 },
          { text: "걱정과 불안", score: 2 },
          { text: "복잡한 감정", score: 3 },
        ],
      },
      {
        id: 10,
        question: "10년 후 두 사람의 모습이 상상되나요?",
        options: [
          { text: "선명하게 그려진다", score: 0 },
          { text: "어렴풋이 그려진다", score: 1 },
          { text: "잘 모르겠다", score: 2 },
          { text: "상상이 안 된다", score: 3 },
        ],
      },
    ],
    results: [
      {
        minScore: 0,
        maxScore: 7,
        title: "🌙 천생연분",
        content: "두 분은 전생에서도 인연이었을 거예요! 운명적으로 끌리는 사이이며, 서로에게 긍정적인 에너지를 줍니다. 이 인연을 소중히 여기세요.",
        recommendation: "좋은 인연이라도 노력 없이는 유지할 수 없어요. 감사하는 마음을 자주 표현하고, 서로를 위한 작은 정성을 잊지 마세요.",
        product: {
          name: "미즈케어 솔루션 2",
          desc: "부부관계 개선, 다시 시작하는 신혼 라이프",
          cta: "자세히 보기",
          url: "https://replyalba.com/pt/Y1PHVwO7GO",
        }
      },
      {
        minScore: 8,
        maxScore: 14,
        title: "⭐ 좋은 인연",
        content: "분명 좋은 인연으로 만난 두 분이에요. 서로에게 긍정적 영향을 주고, 함께 성장할 수 있는 관계입니다.",
        recommendation: "서로의 장점을 인정하고 칭찬을 아끼지 마세요. 공통된 목표를 세우고 함께 노력하면 더 좋은 결과를 거둘 수 있습니다.",
        product: {
          name: "미즈케어 솔루션 5",
          desc: "행복한 부부생활을 위한 관계 컨디션 케어",
          cta: "지금 확인하기",
          url: "https://replyalba.com/pt/Phjrq2zsy8",
        }
      },
      {
        minScore: 15,
        maxScore: 22,
        title: "🌤 성장형 인연",
        content: "서로를 통해 많은 것을 배우는 관계예요. 쉽지만은 않지만, 이 관계를 통해 두 사람 모두 크게 성장할 수 있습니다.",
        recommendation: "인내심과 이해심이 필요한 관계입니다. 서로의 다른 점을 결점이 아닌 배움의 기회로 받아들여 보세요.",
        product: {
          name: "우먼시크릿",
          desc: "사랑받는 여자의 비밀, 지금 공개합니다",
          cta: "특별 혜택 보기",
          url: "https://replyalba.com/pt/YfcVFCdD21",
        }
      },
      {
        minScore: 23,
        maxScore: 30,
        title: "🌊 시련의 인연",
        content: "운명이 쉬운 길을 내어주진 않았지만, 그만큼 큰 사랑을 배울 수 있는 관계입니다. 진심을 다한다면 두 사람 사이의 벽을 넘을 수 있어요.",
        recommendation: "대화와 소통이 무엇보다 중요합니다. 서로에 대한 기대를 솔직하게 나누고, 필요하다면 전문 상담도 고려해 보세요.",
        product: {
          name: "우먼시크릿2",
          desc: "더 깊고 진한 사랑을 위한 시크릿 관리",
          cta: "무료 상담 받기",
          url: "https://replyalba.com/pt/xWHMHU09mP",
        }
      }
    ]
  },
  "lover-psychology": {
    title: "연인 심리 테스트",
    description: "나와 연인의 심리적 궁합을 10가지 질문으로 분석합니다.",
    questions: [
      {
        id: 1,
        question: "연인이 약속에 30분 늦었습니다. 나의 반응은?",
        options: [
          { text: "괜찮아, 기다리면 되지", score: 0 },
          { text: "연락해서 확인한다", score: 1 },
          { text: "좀 짜증나지만 참는다", score: 2 },
          { text: "화가 많이 난다", score: 3 },
        ],
      },
      {
        id: 2,
        question: "연인이 나 대신 친구 약속을 선택했을 때?",
        options: [
          { text: "당연히 그럴 수 있다고 생각", score: 0 },
          { text: "이해하지만 아쉽다", score: 1 },
          { text: "서운함을 느낀다", score: 2 },
          { text: "매우 속상하다", score: 3 },
        ],
      },
      {
        id: 3,
        question: "연인의 핸드폰을 볼 수 있다면?",
        options: [
          { text: "볼 필요를 못 느낀다", score: 0 },
          { text: "궁금하지만 참는다", score: 1 },
          { text: "가끔 보고 싶다", score: 2 },
          { text: "항상 확인하고 싶다", score: 3 },
        ],
      },
      {
        id: 4,
        question: "사랑한다는 말을 얼마나 자주 듣고 싶나요?",
        options: [
          { text: "행동으로 보여주면 된다", score: 0 },
          { text: "가끔이면 충분하다", score: 1 },
          { text: "자주 듣고 싶다", score: 2 },
          { text: "매일 듣고 싶다", score: 3 },
        ],
      },
      {
        id: 5,
        question: "연인에게 질투를 느끼는 편인가요?",
        options: [
          { text: "거의 느끼지 않는다", score: 0 },
          { text: "가끔 느끼지만 표현하지 않는다", score: 1 },
          { text: "자주 느끼고 은근히 표현한다", score: 2 },
          { text: "질투가 심한 편이다", score: 3 },
        ],
      },
      {
        id: 6,
        question: "연인과 의견이 다를 때 나의 심리는?",
        options: [
          { text: "다른 의견도 존중한다", score: 0 },
          { text: "설득하려고 노력한다", score: 1 },
          { text: "내 의견이 맞다고 느낀다", score: 2 },
          { text: "답답하고 화가 난다", score: 3 },
        ],
      },
      {
        id: 7,
        question: "연인이 힘들어할 때 나는?",
        options: [
          { text: "곁에서 묵묵히 지지한다", score: 0 },
          { text: "적극적으로 해결을 도와준다", score: 1 },
          { text: "위로하지만 내 선에서", score: 2 },
          { text: "나도 함께 힘들어진다", score: 3 },
        ],
      },
      {
        id: 8,
        question: "연인 관계에서 가장 두려운 것은?",
        options: [
          { text: "특별히 두려운 것이 없다", score: 0 },
          { text: "관계가 식어가는 것", score: 1 },
          { text: "배신당하는 것", score: 2 },
          { text: "버림받는 것", score: 3 },
        ],
      },
      {
        id: 9,
        question: "연인에게 솔직하게 감정을 말하는 편인가요?",
        options: [
          { text: "항상 솔직하게 말한다", score: 0 },
          { text: "대부분 솔직하다", score: 1 },
          { text: "상황에 따라 숨기기도 한다", score: 2 },
          { text: "감정을 잘 표현하지 못한다", score: 3 },
        ],
      },
      {
        id: 10,
        question: "이상적인 연인 관계란?",
        options: [
          { text: "서로를 존중하는 동반자", score: 0 },
          { text: "함께 성장하는 파트너", score: 1 },
          { text: "항상 곁에 있는 사람", score: 2 },
          { text: "나를 최우선으로 생각하는 사람", score: 3 },
        ],
      },
    ],
    results: [
      {
        minScore: 0,
        maxScore: 7,
        title: "🕊 안정 애착형",
        content: "축하합니다! 당신은 연애에서 매우 건강한 심리 상태를 가지고 있어요. 상대를 신뢰하고, 독립적이면서도 따뜻한 관계를 유지할 수 있는 타입입니다.",
        recommendation: "이 건강한 심리 상태를 유지하세요! 상대에게도 안정적인 사랑을 베풀면서, 서로 성장할 수 있는 관계를 만들어 가세요.",
        product: {
          name: "미즈케어 솔루션 2",
          desc: "부부관계 개선, 다시 시작하는 신혼 라이프",
          cta: "자세히 보기",
          url: "https://replyalba.com/pt/Y1PHVwO7GO",
        }
      },
      {
        minScore: 8,
        maxScore: 14,
        title: "🌸 관계 중시형",
        content: "당신은 관계를 소중히 여기며, 연인과의 유대감을 중요하게 생각하는 타입이에요. 다만 때로는 상대의 반응에 민감할 수 있습니다.",
        recommendation: "상대의 행동 하나하나에 너무 의미를 부여하지 마세요. 자신의 가치를 먼저 인정하고 사랑하는 것이 건강한 관계의 시작이에요.",
        product: {
          name: "레이디큐어 솔루션",
          desc: "여성만의 말 못할 고민을 근본부터 케어",
          cta: "지금 확인하기",
          url: "https://replyalba.com/pt/WsdU9oMhje",
        }
      },
      {
        minScore: 15,
        maxScore: 22,
        title: "💜 불안 감성형",
        content: "사랑에 대한 갈망이 크고, 연인의 사랑을 확인받고 싶은 마음이 강한 타입이에요. 이것은 약점이 아니라, 사랑에 진지한 당신의 모습입니다.",
        recommendation: "불안한 감정이 올라올 때, 잠시 멈추고 심호흡해 보세요. 자기 자신에 대한 확신을 키우면 연애도 더 편안해져요. 취미 생활이나 자기계발에 투자해 보세요.",
        product: {
          name: "우먼시크릿4",
          desc: "관계 속 자신감을 높여주는 프리미엄 솔루션",
          cta: "특별 혜택 보기",
          url: "https://replyalba.com/pt/EkShEr1oPs",
        }
      },
      {
        minScore: 23,
        maxScore: 30,
        title: "🌙 집착 경계형",
        content: "연인에 대한 강한 감정을 가지고 있지만, 그것이 때로는 불안과 집착으로 나타날 수 있어요. 이는 과거 경험이나 내면의 상처와 관련이 있을 수 있습니다.",
        recommendation: "전문 심리 상담을 받아보시길 권합니다. 나의 내면을 들여다보고 치유하는 과정이 필요합니다. 건강한 자기 사랑이 건강한 연애의 시작이에요.",
        product: {
          name: "우먼시크릿2",
          desc: "더 깊고 진한 사랑을 위한 시크릿 관리",
          cta: "무료 상담 받기",
          url: "https://replyalba.com/pt/xWHMHU09mP",
        }
      }
    ]
  },
  "vaginal-health": {
    title: "질 건강 자가 진단",
    description: "여성 건강의 핵심, 질 건강 상태를 10가지 항목으로 체크해 보세요.",
    questions: [
      {
        id: 1,
        question: "질 분비물의 양이나 색이 평소와 다르다고 느끼시나요?",
        icon: "Droplets",
        options: [
          { text: "정상 범위이다", score: 0 },
          { text: "가끔 다르게 느낀다", score: 1 },
          { text: "자주 변화가 있다", score: 2 },
          { text: "냄새나 색이 확연히 다르다", score: 3 },
        ],
      },
      {
        id: 2,
        question: "질 부위에 가려움이나 따가움을 느끼시나요?",
        icon: "Flame",
        options: [
          { text: "전혀 없다", score: 0 },
          { text: "가끔 느낀다", score: 1 },
          { text: "자주 느낀다", score: 2 },
          { text: "일상생활에 지장이 있을 정도다", score: 3 },
        ],
      },
      {
        id: 3,
        question: "질 건조함을 느끼시나요?",
        icon: "Wind",
        options: [
          { text: "전혀 느끼지 않는다", score: 0 },
          { text: "약간 건조한 편이다", score: 1 },
          { text: "자주 건조함을 느낀다", score: 2 },
          { text: "심한 건조함으로 불편하다", score: 3 },
        ],
      },
      {
        id: 4,
        question: "관계 시 통증이나 불편함을 느끼시나요?",
        icon: "HeartPulse",
        options: [
          { text: "전혀 없다", score: 0 },
          { text: "가끔 불편하다", score: 1 },
          { text: "자주 통증이 있다", score: 2 },
          { text: "통증 때문에 관계를 피하게 된다", score: 3 },
        ],
      },
      {
        id: 5,
        question: "소변 시 불편함이나 잔뇨감이 있나요?",
        options: [
          { text: "전혀 없다", score: 0 },
          { text: "가끔 그렇다", score: 1 },
          { text: "자주 느낀다", score: 2 },
          { text: "매번 불편하다", score: 3 },
        ],
      },
      {
        id: 6,
        question: "질 부위에서 평소와 다른 냄새가 나나요?",
        options: [
          { text: "전혀 없다", score: 0 },
          { text: "가끔 느낀다", score: 1 },
          { text: "자주 신경 쓰인다", score: 2 },
          { text: "사회생활에 지장이 있다", score: 3 },
        ],
      },
      {
        id: 7,
        question: "생리 후 질 상태 회복이 어떤 편인가요?",
        icon: "Calendar",
        options: [
          { text: "빠르게 정상으로 돌아온다", score: 0 },
          { text: "며칠 정도 걸린다", score: 1 },
          { text: "회복이 느린 편이다", score: 2 },
          { text: "다음 생리까지 불편함이 지속된다", score: 3 },
        ],
      },
      {
        id: 8,
        question: "질 탄력이 예전과 다르다고 느끼시나요?",
        options: [
          { text: "변화 없다", score: 0 },
          { text: "약간 느슨해진 느낌이다", score: 1 },
          { text: "확실히 달라졌다", score: 2 },
          { text: "많이 약해진 것 같다", score: 3 },
        ],
      },
      {
        id: 9,
        question: "질 건강을 위한 관리를 하고 계시나요?",
        options: [
          { text: "정기적으로 관리한다", score: 0 },
          { text: "가끔 신경 쓴다", score: 1 },
          { text: "거의 관리하지 않는다", score: 2 },
          { text: "관리 방법을 모른다", score: 3 },
        ],
      },
      {
        id: 10,
        question: "산부인과 정기 검진을 받고 계시나요?",
        options: [
          { text: "1년에 1회 이상 받는다", score: 0 },
          { text: "2~3년에 1회 정도", score: 1 },
          { text: "오래전에 마지막으로 받았다", score: 2 },
          { text: "받아본 적 없다", score: 3 },
        ],
      },
    ],
    results: [
      {
        minScore: 0,
        maxScore: 7,
        title: "🟢 건강한 상태",
        content: "현재 질 건강이 양호한 상태입니다! 지금의 좋은 상태를 유지하면서 예방 관리를 해주시면 더욱 좋습니다.",
        recommendation: "매일 적절한 위생 관리와 통기성 좋은 속옷 착용, 규칙적인 산부인과 검진을 유지해 주세요. 질 유산균 섭취도 도움이 됩니다.",
        product: {
          name: "여궁화이트",
          desc: "밝고 환한 자신감을 위한 화이트닝 케어",
          cta: "지금 확인하기",
          url: "https://replyalba.com/pt/SNLg3ILPbd",
        }
      },
      {
        minScore: 8,
        maxScore: 14,
        title: "🟡 초기 관리 필요",
        content: "가벼운 불편함이 나타나기 시작했어요. 지금부터 적극적인 관리를 시작하면 좋은 결과를 얻을 수 있습니다.",
        recommendation: "질 건조함과 가려움에 도움이 되는 전문 케어 제품을 사용해 보세요. 자극적인 세정제 사용을 줄이고, 면 소재 속옷을 착용해 주세요.",
        product: {
          name: "여궁닥터",
          desc: "민감한 부위의 냄새와 가려움을 말끔하게",
          cta: "솔루션 확인하기",
          url: "https://replyalba.com/pt/IlnAem4ygW",
        }
      },
      {
        minScore: 15,
        maxScore: 22,
        title: "🟠 적극 관리 필요",
        content: "여러 가지 불편한 증상이 나타나고 있어요. 체계적인 관리와 전문 제품 사용을 적극 권장합니다.",
        recommendation: "전문적인 질 건강 관리 프로그램을 시작해 보세요. 골반 근육 강화 운동(케겔 운동)과 함께 영양 보충도 중요합니다.",
        product: {
          name: "여궁골드",
          desc: "여성 생애 주기별 맞춤 솔루션 제공",
          cta: "맞춤 솔루션 보기",
          url: "https://replyalba.com/pt/Z1IJI9rY2c",
        }
      },
      {
        minScore: 23,
        maxScore: 30,
        title: "🔴 전문 상담 권장",
        content: "질 건강에 상당한 불편함이 있는 상태입니다. 전문적인 케어와 함께 산부인과 상담을 받아보시길 권합니다.",
        recommendation: "산부인과 전문 상담을 통해 정확한 진단을 받으시고, 맞춤형 집중 케어 프로그램을 시작해 보세요. 일상 속 관리도 함께 병행해 주세요.",
        product: {
          name: "미즈케어 여궁",
          desc: "질 건강과 수축력을 동시에 집중 케어",
          cta: "집중 케어 시작하기",
          url: "https://replyalba.com/pt/WeWtmEo70h",
        }
      }
    ]
  },
  "postpartum": {
    title: "산후 회복 체크",
    description: "출산 후 나의 몸은 얼마나 회복되었을까요? 10가지 항목으로 체크해 보세요.",
    questions: [
      {
        id: 1,
        question: "출산 후 골반 근육 운동(케겔 운동)을 하고 계시나요?",
        icon: "Accessibility",
        options: [
          { text: "매일 꾸준히 하고 있다", score: 0 },
          { text: "가끔 한다", score: 1 },
          { text: "거의 하지 않는다", score: 2 },
          { text: "방법을 모른다", score: 3 },
        ],
      },
      {
        id: 2,
        question: "기침이나 재채기 시 요실금 증상이 있나요?",
        icon: "Droplets",
        options: [
          { text: "전혀 없다", score: 0 },
          { text: "아주 가끔 있다", score: 1 },
          { text: "자주 경험한다", score: 2 },
          { text: "일상생활에 지장이 있다", score: 3 },
        ],
      },
      {
        id: 3,
        question: "체중이 출산 전으로 돌아갔나요?",
        options: [
          { text: "거의 돌아왔다", score: 0 },
          { text: "3~5kg 정도 더 나간다", score: 1 },
          { text: "5~10kg 정도 더 나간다", score: 2 },
          { text: "10kg 이상 더 나간다", score: 3 },
        ],
      },
      {
        id: 4,
        question: "산후 우울감이나 감정 기복을 느끼시나요?",
        icon: "Brain",
        options: [
          { text: "거의 느끼지 않는다", score: 0 },
          { text: "가끔 우울하다", score: 1 },
          { text: "자주 감정 기복이 있다", score: 2 },
          { text: "심한 우울감을 느낀다", score: 3 },
        ],
      },
      {
        id: 5,
        question: "수면의 질은 어떤가요?",
        icon: "Moon",
        options: [
          { text: "충분히 잘 자고 있다", score: 0 },
          { text: "육아로 가끔 수면 부족이다", score: 1 },
          { text: "만성적으로 수면이 부족하다", score: 2 },
          { text: "심한 불면이나 수면 장애가 있다", score: 3 },
        ],
      },
      {
        id: 6,
        question: "산후 탈모를 경험하고 계시나요?",
        options: [
          { text: "전혀 없다", score: 0 },
          { text: "약간 빠지는 편이다", score: 1 },
          { text: "눈에 띄게 빠진다", score: 2 },
          { text: "심한 탈모가 진행 중이다", score: 3 },
        ],
      },
      {
        id: 7,
        question: "허리나 골반 통증이 있나요?",
        options: [
          { text: "전혀 없다", score: 0 },
          { text: "가끔 불편하다", score: 1 },
          { text: "자주 통증을 느낀다", score: 2 },
          { text: "만성적인 통증이 있다", score: 3 },
        ],
      },
      {
        id: 8,
        question: "관계 시 불편함이나 통증을 느끼시나요?",
        icon: "HeartPulse",
        options: [
          { text: "전혀 없다", score: 0 },
          { text: "약간 불편하다", score: 1 },
          { text: "통증이 있다", score: 2 },
          { text: "관계 자체가 어렵다", score: 3 },
        ],
      },
      {
        id: 9,
        question: "전반적인 체력은 어느 정도 회복되었나요?",
        icon: "BatteryLow",
        options: [
          { text: "출산 전과 비슷하다", score: 0 },
          { text: "70~80% 정도 회복됐다", score: 1 },
          { text: "50% 정도 회복됐다", score: 2 },
          { text: "체력이 많이 떨어졌다", score: 3 },
        ],
      },
      {
        id: 10,
        question: "산후 전문 관리를 받고 계시나요?",
        options: [
          { text: "정기적으로 받고 있다", score: 0 },
          { text: "가끔 받는다", score: 1 },
          { text: "거의 받지 않는다", score: 2 },
          { text: "받아본 적 없다", score: 3 },
        ],
      },
    ],
    results: [
      {
        minScore: 0,
        maxScore: 7,
        title: "🟢 회복 우수",
        content: "산후 회복이 잘 진행되고 있어요! 꾸준한 관리로 건강한 일상을 유지하고 계시네요.",
        recommendation: "지금의 좋은 상태를 유지하세요. 골반 근육 운동을 꾸준히 하고, 균형 잡힌 영양 섭취를 계속해 주세요.",
        product: {
          name: "미즈케어 솔루션 5",
          desc: "행복한 부부생활을 위한 최상의 선택",
          cta: "지금 확인하기",
          url: "https://replyalba.com/pt/Phjrq2zsy8",
        }
      },
      {
        minScore: 8,
        maxScore: 14,
        title: "🟡 추가 관리 필요",
        content: "회복이 진행 중이지만 몇 가지 부분에서 추가 관리가 필요해요. 적극적인 케어를 시작해 보세요.",
        recommendation: "골반 근육 강화 운동을 매일 실천하고, 단백질과 철분이 풍부한 식단을 유지하세요. 충분한 휴식도 중요합니다.",
        product: {
          name: "베리얀",
          desc: "집에서 간편하게 하는 여성 근육 강화 운동",
          cta: "솔루션 확인하기",
          url: "https://replyalba.com/pt/NGi7kc77mF",
        }
      },
      {
        minScore: 15,
        maxScore: 22,
        title: "🟠 집중 회복 필요",
        content: "산후 회복이 더딘 상태입니다. 체계적인 관리 프로그램을 시작하시길 권합니다.",
        recommendation: "전문 산후 관리 프로그램을 통해 골반, 체력, 정서적 회복을 동시에 진행해 보세요. 무리하지 말고 점진적으로 관리해 주세요.",
        product: {
          name: "미즈케어 솔루션 6",
          desc: "출산 후 늘어진 근육, 다시 탄탄하게",
          cta: "집중 케어 시작하기",
          url: "https://replyalba.com/pt/MbTJlgNLg8",
        }
      },
      {
        minScore: 23,
        maxScore: 30,
        title: "🔴 전문 상담 권장",
        content: "산후 회복에 상당한 어려움을 겪고 계시네요. 전문적인 도움이 필요한 시점입니다.",
        recommendation: "산부인과 및 산후 전문 클리닉 상담을 받아보세요. 요실금, 골반 통증 등은 전문 치료로 크게 개선될 수 있습니다. 정서적 지원도 함께 받으시길 권합니다.",
        product: {
          name: "미즈케어 솔루션 2",
          desc: "부부관계 개선, 다시 시작하는 신혼 라이프",
          cta: "전문 상담 받기",
          url: "https://replyalba.com/pt/Y1PHVwO7GO",
        }
      }
    ]
  },
  "bodyline": {
    title: "바디라인 고민 진단",
    description: "나의 바디라인 고민을 정밀 분석하여 맞춤 솔루션을 알려드려요.",
    questions: [
      {
        id: 1,
        question: "현재 가장 신경 쓰이는 바디라인 부위는?",
        icon: "Accessibility",
        options: [
          { text: "특별히 없다", score: 0 },
          { text: "한 부위 정도 신경 쓰인다", score: 1 },
          { text: "여러 부위가 고민이다", score: 2 },
          { text: "전체적으로 불만족이다", score: 3 },
        ],
      },
      {
        id: 2,
        question: "규칙적인 운동을 하고 계시나요?",
        options: [
          { text: "주 3회 이상 운동한다", score: 0 },
          { text: "주 1~2회 운동한다", score: 1 },
          { text: "거의 운동하지 않는다", score: 2 },
          { text: "전혀 하지 않는다", score: 3 },
        ],
      },
      {
        id: 3,
        question: "최근 6개월간 체중 변화가 있었나요?",
        options: [
          { text: "변화 없다", score: 0 },
          { text: "2~3kg 정도 변했다", score: 1 },
          { text: "5kg 이상 변했다", score: 2 },
          { text: "10kg 이상 변했다", score: 3 },
        ],
      },
      {
        id: 4,
        question: "피부 탄력 상태는 어떤가요?",
        icon: "Sparkles",
        options: [
          { text: "탄력이 좋은 편이다", score: 0 },
          { text: "약간 처진 느낌이 있다", score: 1 },
          { text: "눈에 띄게 탄력이 떨어졌다", score: 2 },
          { text: "많이 처졌다", score: 3 },
        ],
      },
      {
        id: 5,
        question: "식단 관리를 하고 계시나요?",
        options: [
          { text: "체계적으로 관리하고 있다", score: 0 },
          { text: "어느 정도 신경 쓴다", score: 1 },
          { text: "거의 신경 쓰지 않는다", score: 2 },
          { text: "불규칙하고 과식하는 편이다", score: 3 },
        ],
      },
      {
        id: 6,
        question: "셀룰라이트가 신경 쓰이시나요?",
        options: [
          { text: "거의 없다", score: 0 },
          { text: "약간 있는 편이다", score: 1 },
          { text: "눈에 띄게 있다", score: 2 },
          { text: "넓은 부위에 심하게 있다", score: 3 },
        ],
      },
      {
        id: 7,
        question: "옷을 입을 때 체형에 대한 자신감은?",
        options: [
          { text: "자신 있다", score: 0 },
          { text: "보통이다", score: 1 },
          { text: "신경 쓰이는 편이다", score: 2 },
          { text: "옷 선택이 매우 제한적이다", score: 3 },
        ],
      },
      {
        id: 8,
        question: "바디라인 관리 제품이나 시술 경험이 있나요?",
        options: [
          { text: "꾸준히 관리하고 있다", score: 0 },
          { text: "몇 번 해봤다", score: 1 },
          { text: "관심은 있지만 해본 적 없다", score: 2 },
          { text: "어떤 것이 있는지 모른다", score: 3 },
        ],
      },
      {
        id: 9,
        question: "출산이나 노화로 인한 체형 변화가 있나요?",
        options: [
          { text: "변화가 거의 없다", score: 0 },
          { text: "약간의 변화가 있다", score: 1 },
          { text: "상당한 변화가 있다", score: 2 },
          { text: "체형이 크게 변했다", score: 3 },
        ],
      },
      {
        id: 10,
        question: "하루 평균 활동량은 어느 정도인가요?",
        options: [
          { text: "활발하게 움직인다", score: 0 },
          { text: "보통이다", score: 1 },
          { text: "앉아있는 시간이 많다", score: 2 },
          { text: "거의 움직이지 않는다", score: 3 },
        ],
      },
    ],
    results: [
      {
        minScore: 0,
        maxScore: 7,
        title: "🟢 자신감 넘치는 바디",
        content: "바디라인 관리를 잘 하고 계시네요! 현재의 좋은 컨디션을 유지하면서 더욱 아름다운 라인을 만들어 보세요.",
        recommendation: "균형 잡힌 운동과 식단을 유지하시고, 보디 케어 제품으로 피부 탄력까지 관리해 보세요.",
        product: {
          name: "바스트핏 솔루션",
          desc: "자연스럽게 차오르는 바스트 볼륨 자신감",
          cta: "지금 확인하기",
          url: "https://replyalba.com/pt/MNGGagfIeF",
        }
      },
      {
        minScore: 8,
        maxScore: 14,
        title: "🟡 가벼운 관리 시작",
        content: "약간의 바디라인 고민이 있지만, 지금부터 관리를 시작하면 충분히 개선할 수 있어요!",
        recommendation: "주 3회 이상 유산소와 근력 운동을 병행하고, 집중 관리가 필요한 부위에 전문 바디 케어 제품을 사용해 보세요.",
        product: {
          name: "올리모아",
          desc: "흐트러진 바디라인을 살려주는 집중 솔루션",
          cta: "솔루션 확인하기",
          url: "https://replyalba.com/pt/C7qCzRVOZ8",
        }
      },
      {
        minScore: 15,
        maxScore: 22,
        title: "🟠 집중 관리 필요",
        content: "바디라인에 꽤 많은 고민을 가지고 계시네요. 체계적인 바디 관리 프로그램이 필요한 시점입니다.",
        recommendation: "전문 바디 관리 프로그램을 시작해 보세요. 식단 조절과 운동, 전문 제품 사용을 함께 병행하면 효과적입니다.",
        product: {
          name: "올리모아 2",
          desc: "아름다운 몸매를 위한 스마트한 선택",
          cta: "집중 케어 시작하기",
          url: "https://replyalba.com/pt/yN552PODWx",
        }
      },
      {
        minScore: 23,
        maxScore: 30,
        title: "🔴 전문 솔루션 필요",
        content: "바디라인에 대한 고민이 큰 상태입니다. 전문적이고 체계적인 관리를 시작해 보세요.",
        recommendation: "전문가 상담을 통해 나에게 맞는 바디 관리 프로그램을 설계하세요. 꾸준한 관리가 가장 중요합니다.",
        product: {
          name: "올리모아 2",
          desc: "아름다운 몸매를 위한 스마트한 선택",
          cta: "전문 솔루션 보기",
          url: "https://replyalba.com/pt/yN552PODWx",
        }
      }
    ]
  },
  "skin-barrier": {
    title: "피부 장벽 건강 테스트",
    description: "민감하고 약해진 피부, 장벽 건강 상태를 정밀 진단해 보세요.",
    questions: [
      {
        id: 1,
        question: "세안 후 피부가 당기는 정도는 어떤가요?",
        icon: "Droplets",
        options: [
          { text: "전혀 당기지 않는다", score: 0 },
          { text: "약간 당기는 편이다", score: 1 },
          { text: "꽤 당기고 건조하다", score: 2 },
          { text: "심하게 당기고 따갑다", score: 3 },
        ],
      },
      {
        id: 2,
        question: "새로운 화장품을 사용할 때 자극을 느끼나요?",
        icon: "Flame",
        options: [
          { text: "거의 자극없이 잘 맞는다", score: 0 },
          { text: "가끔 따끔거린다", score: 1 },
          { text: "자주 자극을 느낀다", score: 2 },
          { text: "대부분의 제품이 자극적이다", score: 3 },
        ],
      },
      {
        id: 3,
        question: "환절기에 피부 트러블이 심해지나요?",
        icon: "Wind",
        options: [
          { text: "별다른 변화가 없다", score: 0 },
          { text: "약간 민감해진다", score: 1 },
          { text: "트러블이 자주 생긴다", score: 2 },
          { text: "피부 상태가 크게 나빠진다", score: 3 },
        ],
      },
      {
        id: 4,
        question: "얼굴에 붉은기나 열감이 있나요?",
        options: [
          { text: "전혀 없다", score: 0 },
          { text: "가끔 붉어진다", score: 1 },
          { text: "자주 붉은기가 있다", score: 2 },
          { text: "항상 붉고 열감이 있다", score: 3 },
        ],
      },
      {
        id: 5,
        question: "피부가 가렵거나 따가운 적이 자주 있나요?",
        options: [
          { text: "전혀 없다", score: 0 },
          { text: "가끔 그렇다", score: 1 },
          { text: "자주 그렇다", score: 2 },
          { text: "거의 매일 그렇다", score: 3 },
        ],
      },
      {
        id: 6,
        question: "보습제를 바른 후에도 피부가 건조한가요?",
        options: [
          { text: "보습이 오래 유지된다", score: 0 },
          { text: "몇 시간 후 건조해진다", score: 1 },
          { text: "금방 건조해진다", score: 2 },
          { text: "보습제를 발라도 건조하다", score: 3 },
        ],
      },
      {
        id: 7,
        question: "자외선 노출 후 피부 반응은?",
        options: [
          { text: "별다른 반응이 없다", score: 0 },
          { text: "약간 붉어진다", score: 1 },
          { text: "쉽게 타고 자극을 받는다", score: 2 },
          { text: "심하게 반응하고 회복이 느리다", score: 3 },
        ],
      },
      {
        id: 8,
        question: "피부결이 거칠거나 각질이 일어나나요?",
        options: [
          { text: "매끈한 편이다", score: 0 },
          { text: "가끔 각질이 있다", score: 1 },
          { text: "자주 거칠고 각질이 있다", score: 2 },
          { text: "항상 거칠고 각질이 심하다", score: 3 },
        ],
      },
      {
        id: 9,
        question: "화장(메이크업)이 잘 먹나요?",
        icon: "Sparkles",
        options: [
          { text: "잘 먹고 오래 유지된다", score: 0 },
          { text: "보통이다", score: 1 },
          { text: "잘 안 먹고 들뜬다", score: 2 },
          { text: "화장이 거의 안 먹는다", score: 3 },
        ],
      },
      {
        id: 10,
        question: "피부 트러블 후 회복 속도는?",
        options: [
          { text: "빠르게 회복된다", score: 0 },
          { text: "보통이다", score: 1 },
          { text: "느린 편이다", score: 2 },
          { text: "흉터나 자국이 오래 남는다", score: 3 },
        ],
      },
    ],
    results: [
      {
        minScore: 0,
        maxScore: 7,
        title: "🟢 건강한 피부 장벽",
        content: "피부 장벽이 건강한 상태입니다! 현재의 좋은 컨디션을 유지하면서 예방 관리를 해주세요.",
        recommendation: "자극적인 성분을 피하고, 꾸준한 보습과 자외선 차단으로 피부 장벽을 보호해 주세요.",
        product: {
          name: "스템벨",
          desc: "인체 줄기세포 배양액으로 되찾는 자생력",
          cta: "지금 확인하기",
          url: "https://replyalba.com/pt/yBXZ7Kddui",
        }
      },
      {
        minScore: 8,
        maxScore: 14,
        title: "🟡 장벽 관리 시작",
        content: "피부 장벽이 약간 약해진 상태예요. 지금부터 집중 보습과 장벽 강화 케어를 시작해 보세요.",
        recommendation: "세라마이드, 히알루론산 등 장벽 강화 성분이 들어간 제품을 사용하고, 과도한 각질 제거는 피해 주세요.",
        product: {
          name: "천수윤진",
          desc: "국내 최초 '녹용 줄기세포 배양액' 함유 앰플",
          cta: "장벽 케어 시작하기",
          url: "https://replyalba.com/pt/ILAPhWg9Zx",
        }
      },
      {
        minScore: 15,
        maxScore: 22,
        title: "🟠 장벽 손상 주의",
        content: "피부 장벽이 상당히 손상된 상태입니다. 전문적인 장벽 복구 케어가 필요합니다.",
        recommendation: "저자극 클렌저로 변경하고, 장벽 복구에 집중하는 스킨케어 루틴을 구축하세요. 줄기세포 기반 제품이 도움이 될 수 있습니다.",
        product: {
          name: "스템엔셀 미미셀 시그니처",
          desc: "피부 시간을 되돌리는 줄기세포 과학적 관리",
          cta: "집중 복구 시작하기",
          url: "https://replyalba.com/pt/Rzqo5tlz9p",
        }
      },
      {
        minScore: 23,
        maxScore: 30,
        title: "🔴 긴급 장벽 복구",
        content: "피부 장벽이 심하게 손상된 상태입니다. 즉각적인 집중 케어가 필요합니다.",
        recommendation: "모든 자극적인 스킨케어를 중단하고, 장벽 복구에만 집중하세요. 피부과 상담과 함께 프리미엄 복구 제품 사용을 권합니다.",
        product: {
          name: "천수윤진2",
          desc: "바를수록 어려지는 기적의 피부 솔루션",
          cta: "긴급 복구 시작하기",
          url: "https://replyalba.com/pt/Sxw8G15GMU",
        }
      }
    ]
  },
  "inner-beauty": {
    title: "이너뷰티 점수 테스트",
    description: "내면에서부터 빛나는 아름다움, 나의 이너뷰티 점수를 확인해 보세요.",
    questions: [
      {
        id: 1,
        question: "하루에 물을 얼마나 드시나요?",
        icon: "Droplets",
        options: [
          { text: "2L 이상 충분히 마신다", score: 0 },
          { text: "1~2L 정도 마신다", score: 1 },
          { text: "500ml~1L 정도 마신다", score: 2 },
          { text: "거의 마시지 않는다", score: 3 },
        ],
      },
      {
        id: 2,
        question: "과일과 채소를 얼마나 드시나요?",
        options: [
          { text: "매일 충분히 먹는다", score: 0 },
          { text: "자주 먹는 편이다", score: 1 },
          { text: "가끔 먹는다", score: 2 },
          { text: "거의 먹지 않는다", score: 3 },
        ],
      },
      {
        id: 3,
        question: "하루 평균 수면 시간은?",
        icon: "Moon",
        options: [
          { text: "7~8시간 충분히 잔다", score: 0 },
          { text: "6시간 정도 잔다", score: 1 },
          { text: "5시간 이하로 잔다", score: 2 },
          { text: "불규칙하고 수면의 질이 나쁘다", score: 3 },
        ],
      },
      {
        id: 4,
        question: "스트레스 관리는 어떻게 하시나요?",
        icon: "Brain",
        options: [
          { text: "효과적으로 관리하고 있다", score: 0 },
          { text: "나름 관리하려 노력한다", score: 1 },
          { text: "관리가 잘 안 된다", score: 2 },
          { text: "스트레스가 매우 심하다", score: 3 },
        ],
      },
      {
        id: 5,
        question: "규칙적인 운동을 하고 계시나요?",
        options: [
          { text: "주 3회 이상 한다", score: 0 },
          { text: "주 1~2회 한다", score: 1 },
          { text: "거의 하지 않는다", score: 2 },
          { text: "전혀 하지 않는다", score: 3 },
        ],
      },
      {
        id: 6,
        question: "가공식품이나 패스트푸드를 얼마나 드시나요?",
        options: [
          { text: "거의 먹지 않는다", score: 0 },
          { text: "주 1~2회 정도", score: 1 },
          { text: "주 3~4회 정도", score: 2 },
          { text: "거의 매일 먹는다", score: 3 },
        ],
      },
      {
        id: 7,
        question: "비타민이나 영양제를 챙겨 드시나요?",
        options: [
          { text: "매일 챙겨 먹는다", score: 0 },
          { text: "가끔 먹는다", score: 1 },
          { text: "거의 먹지 않는다", score: 2 },
          { text: "먹어본 적 없다", score: 3 },
        ],
      },
      {
        id: 8,
        question: "음주 빈도는 어떤가요?",
        options: [
          { text: "거의 마시지 않는다", score: 0 },
          { text: "월 1~2회 정도", score: 1 },
          { text: "주 1~2회 정도", score: 2 },
          { text: "주 3회 이상", score: 3 },
        ],
      },
      {
        id: 9,
        question: "장 건강 상태는 어떤가요?",
        options: [
          { text: "매일 규칙적이다", score: 0 },
          { text: "대체로 괜찮다", score: 1 },
          { text: "불규칙한 편이다", score: 2 },
          { text: "변비/설사가 잦다", score: 3 },
        ],
      },
      {
        id: 10,
        question: "피부와 머릿결의 윤기 상태는?",
        icon: "Sparkles",
        options: [
          { text: "윤기가 넘친다", score: 0 },
          { text: "보통이다", score: 1 },
          { text: "건조하고 푸석하다", score: 2 },
          { text: "매우 건조하고 생기가 없다", score: 3 },
        ],
      },
    ],
    results: [
      {
        minScore: 0,
        maxScore: 7,
        title: "🟢 빛나는 이너뷰티",
        content: "내면에서부터 빛나는 건강한 아름다움을 가지고 계세요! 좋은 생활 습관이 몸 전체에 긍정적인 영향을 주고 있습니다.",
        recommendation: "지금의 건강한 생활 습관을 유지하면서, 고품질 콜라겐 보충으로 더욱 빛나는 아름다움을 만들어 보세요.",
        product: {
          name: "천수애진",
          desc: "마시는 고함량 콜라겐으로 탱탱한 피부 재생",
          cta: "지금 확인하기",
          url: "https://replyalba.com/pt/SanlazetIb",
        }
      },
      {
        minScore: 8,
        maxScore: 14,
        title: "🟡 관리 시작 추천",
        content: "기본적인 건강 습관은 있지만, 몇 가지 개선으로 이너뷰티를 크게 높일 수 있어요!",
        recommendation: "수분 섭취를 늘리고, 채소와 과일 비중을 높여 보세요. 콜라겐과 비타민 보충도 도움이 됩니다.",
        product: {
          name: "천수애진2",
          desc: "속부터 채워지는 윤기와 보습의 결정체",
          cta: "이너뷰티 시작하기",
          url: "https://replyalba.com/pt/PkcJmotCli",
        }
      },
      {
        minScore: 15,
        maxScore: 22,
        title: "🟠 적극 관리 필요",
        content: "생활 습관 개선이 필요한 시점이에요. 내면의 건강이 외면의 아름다움을 좌우합니다.",
        recommendation: "수면, 식단, 운동 습관을 전면적으로 개선해 보세요. 프리미엄 영양 케어 제품으로 부족한 영양을 보충하시길 권합니다.",
        product: {
          name: "공후하결",
          desc: "피부 근본부터 채우는 프리미엄 영양 케어",
          cta: "영양 케어 시작하기",
          url: "https://replyalba.com/pt/UKfoQbTwGI",
        }
      },
      {
        minScore: 23,
        maxScore: 30,
        title: "🔴 긴급 생활 개선",
        content: "내면 건강이 상당히 저하된 상태입니다. 즉각적인 생활 습관 개선이 필요합니다.",
        recommendation: "기본적인 생활 습관부터 하나씩 개선해 나가세요. 충분한 수면, 규칙적인 식사, 적절한 운동이 핵심입니다. 전문 영양 보충 제품도 함께 시작해 보세요.",
        product: {
          name: "CR-5",
          desc: "주름·기미·잡티 고민 한 번에 해결하세요",
          cta: "집중 케어 시작하기",
          url: "https://replyalba.com/pt/JNyIgk9t32",
        }
      }
    ]
  },
  "hair-scalp": {
    title: "여성 탈모·두피 상태 테스트",
    description: "모발 빠짐, 두피 민감도, 생활 습관을 바탕으로 현재 두피 컨디션을 점검해 보세요.",
    questions: [
      {
        id: 1,
        question: "최근 머리카락이 평소보다 많이 빠진다고 느끼나요?",
        icon: "Sparkles",
        options: [
          { text: "거의 느끼지 않는다", score: 0 },
          { text: "가끔 많아진 것 같다", score: 1 },
          { text: "자주 많다고 느낀다", score: 2 },
          { text: "매일 눈에 띄게 빠진다", score: 3 },
        ],
      },
      {
        id: 2,
        question: "정수리나 가르마가 넓어 보이나요?",
        options: [
          { text: "전혀 그렇지 않다", score: 0 },
          { text: "조금 신경 쓰인다", score: 1 },
          { text: "사진에서 자주 보인다", score: 2 },
          { text: "확연히 넓어졌다", score: 3 },
        ],
      },
      {
        id: 3,
        question: "두피 가려움이나 따가움이 있나요?",
        options: [
          { text: "거의 없다", score: 0 },
          { text: "가끔 있다", score: 1 },
          { text: "자주 있다", score: 2 },
          { text: "매우 심하고 불편하다", score: 3 },
        ],
      },
      {
        id: 4,
        question: "두피 유분이나 냄새가 빨리 올라오나요?",
        options: [
          { text: "하루 종일 괜찮다", score: 0 },
          { text: "저녁쯤 신경 쓰인다", score: 1 },
          { text: "반나절이면 올라온다", score: 2 },
          { text: "샴푸 직후에도 불편하다", score: 3 },
        ],
      },
      {
        id: 5,
        question: "비듬이나 각질이 자주 보이나요?",
        options: [
          { text: "거의 없다", score: 0 },
          { text: "건조할 때만 있다", score: 1 },
          { text: "자주 보인다", score: 2 },
          { text: "늘 눈에 띄고 가렵다", score: 3 },
        ],
      },
      {
        id: 6,
        question: "펌, 염색, 열 스타일링을 자주 하나요?",
        options: [
          { text: "거의 하지 않는다", score: 0 },
          { text: "가끔 한다", score: 1 },
          { text: "월 1회 이상 한다", score: 2 },
          { text: "자주 반복한다", score: 3 },
        ],
      },
      {
        id: 7,
        question: "최근 수면 부족이나 스트레스가 심했나요?",
        icon: "Moon",
        options: [
          { text: "잘 관리하고 있다", score: 0 },
          { text: "가끔 피곤하다", score: 1 },
          { text: "자주 부족하다", score: 2 },
          { text: "거의 매일 심하다", score: 3 },
        ],
      },
      {
        id: 8,
        question: "단백질이나 영양 섭취가 부족하다고 느끼나요?",
        options: [
          { text: "균형 있게 먹는다", score: 0 },
          { text: "조금 부족할 때가 있다", score: 1 },
          { text: "자주 대충 먹는다", score: 2 },
          { text: "식사가 매우 불규칙하다", score: 3 },
        ],
      },
      {
        id: 9,
        question: "모발이 가늘고 힘없이 처지나요?",
        options: [
          { text: "탄탄한 편이다", score: 0 },
          { text: "조금 힘이 없다", score: 1 },
          { text: "가늘어진 느낌이 크다", score: 2 },
          { text: "볼륨이 거의 없다", score: 3 },
        ],
      },
      {
        id: 10,
        question: "가족력이나 호르몬 변화로 인한 탈모 걱정이 있나요?",
        options: [
          { text: "거의 없다", score: 0 },
          { text: "조금 걱정된다", score: 1 },
          { text: "분명한 걱정이 있다", score: 2 },
          { text: "이미 변화가 뚜렷하다", score: 3 },
        ],
      },
    ],
    results: [
      {
        minScore: 0,
        maxScore: 7,
        title: "🟢 안정적인 두피 컨디션",
        content: "현재 두피와 모발 컨디션은 비교적 안정적인 편입니다. 좋은 습관을 유지하면서 예방 관리에 집중해 주세요.",
        recommendation: "자극이 적은 샴푸, 충분한 수면, 단백질 섭취를 유지하고 펌·염색 빈도를 조절해 보세요.",
        product: {
          name: "천수애진",
          desc: "마시는 고함량 콜라겐으로 탱탱한 피부 재생",
          cta: "이너 케어 확인하기",
          url: "https://replyalba.com/pt/SanlazetIb",
        }
      },
      {
        minScore: 8,
        maxScore: 14,
        title: "🟡 초기 두피 관리 필요",
        content: "모발 빠짐이나 두피 민감 신호가 조금씩 보입니다. 지금 관리하면 악화를 늦출 수 있어요.",
        recommendation: "두피 자극을 줄이고, 수면과 영양을 먼저 정리하세요. 두피 보습과 진정 케어도 함께 권합니다.",
        product: {
          name: "천수윤진",
          desc: "국내 최초 '녹용 줄기세포 배양액' 함유 앰플",
          cta: "집중 케어 보기",
          url: "https://replyalba.com/pt/ILAPhWg9Zx",
        }
      },
      {
        minScore: 15,
        maxScore: 22,
        title: "🟠 탈모·두피 스트레스 주의",
        content: "두피 자극과 모발 약화 신호가 뚜렷합니다. 생활 습관과 두피 케어를 동시에 점검해야 합니다.",
        recommendation: "열 스타일링과 잦은 시술을 줄이고, 두피 상태가 지속적으로 나빠지면 전문 상담을 받아보세요.",
        product: {
          name: "스템벨 자생력 앰플",
          desc: "피부 속부터 차오르는 프리미엄 광채 에너지",
          cta: "회복 케어 시작하기",
          url: "https://replyalba.com/pt/CzCyUNUG4o",
        }
      },
      {
        minScore: 23,
        maxScore: 30,
        title: "🔴 적극적인 두피 점검 권장",
        content: "모발 빠짐과 두피 불편감이 높은 수준입니다. 자가 관리만으로 버티기보다 원인 점검이 필요합니다.",
        recommendation: "두피 염증, 호르몬 변화, 영양 결핍 가능성을 확인하고 필요하면 피부과나 전문 기관 상담을 권합니다.",
        product: {
          name: "스템엔셀 미미셀 시그니처",
          desc: "피부 시간을 되돌리는 줄기세포 과학적 관리",
          cta: "프리미엄 케어 보기",
          url: "https://replyalba.com/pt/Rzqo5tlz9p",
        }
      }
    ]
  },
  "leg-circulation": {
    title: "붓기·하체순환 테스트",
    description: "다리 붓기, 무거움, 생활 패턴을 통해 하체 순환 컨디션을 확인해 보세요.",
    questions: [
      {
        id: 1,
        question: "저녁이 되면 다리가 붓거나 무겁나요?",
        icon: "Activity",
        options: [
          { text: "거의 없다", score: 0 },
          { text: "가끔 있다", score: 1 },
          { text: "자주 있다", score: 2 },
          { text: "매일 심하다", score: 3 },
        ],
      },
      {
        id: 2,
        question: "양말 자국이 오래 남나요?",
        options: [
          { text: "거의 남지 않는다", score: 0 },
          { text: "가끔 남는다", score: 1 },
          { text: "자주 오래 남는다", score: 2 },
          { text: "깊게 남고 잘 사라지지 않는다", score: 3 },
        ],
      },
      {
        id: 3,
        question: "오래 앉거나 서 있는 시간이 많나요?",
        options: [
          { text: "중간중간 잘 움직인다", score: 0 },
          { text: "조금 긴 편이다", score: 1 },
          { text: "하루 대부분 그렇다", score: 2 },
          { text: "거의 움직이지 못한다", score: 3 },
        ],
      },
      {
        id: 4,
        question: "손발이 차거나 저린 느낌이 있나요?",
        options: [
          { text: "거의 없다", score: 0 },
          { text: "가끔 있다", score: 1 },
          { text: "자주 있다", score: 2 },
          { text: "항상 불편하다", score: 3 },
        ],
      },
      {
        id: 5,
        question: "짠 음식이나 야식을 자주 먹나요?",
        options: [
          { text: "거의 먹지 않는다", score: 0 },
          { text: "주 1~2회 정도", score: 1 },
          { text: "주 3~4회 정도", score: 2 },
          { text: "거의 매일 먹는다", score: 3 },
        ],
      },
      {
        id: 6,
        question: "물을 충분히 마시나요?",
        icon: "Droplets",
        options: [
          { text: "충분히 마신다", score: 0 },
          { text: "보통이다", score: 1 },
          { text: "부족한 편이다", score: 2 },
          { text: "거의 마시지 않는다", score: 3 },
        ],
      },
      {
        id: 7,
        question: "하체 운동이나 스트레칭을 꾸준히 하나요?",
        options: [
          { text: "주 3회 이상 한다", score: 0 },
          { text: "주 1~2회 한다", score: 1 },
          { text: "가끔 한다", score: 2 },
          { text: "거의 하지 않는다", score: 3 },
        ],
      },
      {
        id: 8,
        question: "생리 전이나 피곤할 때 붓기가 심해지나요?",
        options: [
          { text: "거의 없다", score: 0 },
          { text: "조금 있다", score: 1 },
          { text: "눈에 띄게 심해진다", score: 2 },
          { text: "일상에 불편할 정도다", score: 3 },
        ],
      },
      {
        id: 9,
        question: "다리 라인이 쉽게 변하거나 셀룰라이트가 신경 쓰이나요?",
        options: [
          { text: "거의 신경 쓰이지 않는다", score: 0 },
          { text: "조금 신경 쓰인다", score: 1 },
          { text: "눈에 띄는 편이다", score: 2 },
          { text: "매우 심하게 고민된다", score: 3 },
        ],
      },
      {
        id: 10,
        question: "마사지나 반신욕 후 다리가 가벼워지는 편인가요?",
        options: [
          { text: "평소에도 가벼워 필요성을 못 느낀다", score: 0 },
          { text: "조금 가벼워진다", score: 1 },
          { text: "확실히 차이가 난다", score: 2 },
          { text: "하지 않으면 너무 무겁다", score: 3 },
        ],
      },
    ],
    results: [
      {
        minScore: 0,
        maxScore: 7,
        title: "🟢 가벼운 하체 컨디션",
        content: "붓기와 순환 부담이 낮은 편입니다. 현재의 활동량과 식습관을 유지해 주세요.",
        recommendation: "가벼운 산책, 수분 섭취, 짠 음식 조절만 꾸준히 해도 좋은 상태를 유지할 수 있습니다.",
        product: {
          name: "올리모아",
          desc: "흐트러진 바디라인을 살려주는 집중 솔루션",
          cta: "바디 케어 보기",
          url: "https://replyalba.com/pt/C7qCzRVOZ8",
        }
      },
      {
        minScore: 8,
        maxScore: 14,
        title: "🟡 붓기 관리 시작",
        content: "하체가 무겁거나 붓는 신호가 조금씩 나타납니다. 생활 리듬을 정리할 시점입니다.",
        recommendation: "오래 앉아 있을 때는 1시간마다 일어나고, 저녁 짠 음식과 야식을 줄여 보세요.",
        product: {
          name: "올리모아 2",
          desc: "아름다운 몸매를 위한 스마트한 선택",
          cta: "순환 케어 시작하기",
          url: "https://replyalba.com/pt/yN552PODWx",
        }
      },
      {
        minScore: 15,
        maxScore: 22,
        title: "🟠 하체순환 주의",
        content: "붓기와 무거움이 반복되는 상태입니다. 식습관, 활동량, 휴식 패턴을 함께 관리해야 합니다.",
        recommendation: "하체 스트레칭과 종아리 운동을 루틴화하고, 붓기가 갑자기 심해지면 원인 확인을 권합니다.",
        product: {
          name: "올리모아",
          desc: "흐트러진 바디라인을 살려주는 집중 솔루션",
          cta: "라인 케어 확인하기",
          url: "https://replyalba.com/pt/C7qCzRVOZ8",
        }
      },
      {
        minScore: 23,
        maxScore: 30,
        title: "🔴 적극적인 순환 점검 필요",
        content: "하체 붓기와 순환 불편감이 높은 수준입니다. 단순 피로인지 확인이 필요합니다.",
        recommendation: "한쪽 다리만 붓거나 통증, 열감이 동반되면 즉시 의료 상담을 받으세요. 평소에는 압박, 휴식, 운동 루틴을 함께 관리하세요.",
        product: {
          name: "올리모아 2",
          desc: "아름다운 몸매를 위한 스마트한 선택",
          cta: "맞춤 케어 보기",
          url: "https://replyalba.com/pt/yN552PODWx",
        }
      }
    ]
  },
  "diet-failure": {
    title: "다이어트 실패 원인 테스트",
    description: "식습관, 운동, 수면, 스트레스 패턴을 통해 감량을 방해하는 원인을 찾아보세요.",
    questions: [
      {
        id: 1,
        question: "식사 시간을 규칙적으로 지키나요?",
        options: [
          { text: "대체로 규칙적이다", score: 0 },
          { text: "가끔 흔들린다", score: 1 },
          { text: "자주 불규칙하다", score: 2 },
          { text: "거의 일정하지 않다", score: 3 },
        ],
      },
      {
        id: 2,
        question: "야식이나 간식을 얼마나 자주 먹나요?",
        options: [
          { text: "거의 먹지 않는다", score: 0 },
          { text: "주 1~2회 정도", score: 1 },
          { text: "주 3~4회 정도", score: 2 },
          { text: "거의 매일 먹는다", score: 3 },
        ],
      },
      {
        id: 3,
        question: "단백질을 충분히 챙겨 먹나요?",
        options: [
          { text: "매 끼니 챙긴다", score: 0 },
          { text: "하루 한 끼는 챙긴다", score: 1 },
          { text: "가끔 챙긴다", score: 2 },
          { text: "거의 챙기지 않는다", score: 3 },
        ],
      },
      {
        id: 4,
        question: "운동 루틴이 있나요?",
        icon: "Dumbbell",
        options: [
          { text: "주 3회 이상 한다", score: 0 },
          { text: "주 1~2회 한다", score: 1 },
          { text: "가끔 한다", score: 2 },
          { text: "거의 하지 않는다", score: 3 },
        ],
      },
      {
        id: 5,
        question: "감정적으로 먹는 일이 있나요?",
        options: [
          { text: "거의 없다", score: 0 },
          { text: "가끔 있다", score: 1 },
          { text: "자주 있다", score: 2 },
          { text: "스트레스 때마다 먹는다", score: 3 },
        ],
      },
      {
        id: 6,
        question: "수면 시간이 부족한 편인가요?",
        icon: "Moon",
        options: [
          { text: "충분히 잔다", score: 0 },
          { text: "가끔 부족하다", score: 1 },
          { text: "자주 부족하다", score: 2 },
          { text: "만성적으로 부족하다", score: 3 },
        ],
      },
      {
        id: 7,
        question: "짧은 기간에 무리한 식단을 반복하나요?",
        options: [
          { text: "하지 않는다", score: 0 },
          { text: "가끔 한다", score: 1 },
          { text: "자주 반복한다", score: 2 },
          { text: "항상 극단적으로 한다", score: 3 },
        ],
      },
      {
        id: 8,
        question: "음료나 커피로 당을 자주 섭취하나요?",
        options: [
          { text: "거의 없다", score: 0 },
          { text: "주 1~2회 정도", score: 1 },
          { text: "하루 1잔 정도", score: 2 },
          { text: "하루 여러 잔 마신다", score: 3 },
        ],
      },
      {
        id: 9,
        question: "체중보다 눈바디나 체지방 변화를 함께 보나요?",
        options: [
          { text: "여러 지표를 함께 본다", score: 0 },
          { text: "가끔 확인한다", score: 1 },
          { text: "대부분 체중만 본다", score: 2 },
          { text: "숫자에 크게 흔들린다", score: 3 },
        ],
      },
      {
        id: 10,
        question: "다이어트 계획을 2주 이상 꾸준히 유지하나요?",
        options: [
          { text: "잘 유지한다", score: 0 },
          { text: "대체로 유지한다", score: 1 },
          { text: "중간에 자주 흔들린다", score: 2 },
          { text: "며칠 만에 포기한다", score: 3 },
        ],
      },
    ],
    results: [
      {
        minScore: 0,
        maxScore: 7,
        title: "🟢 유지력 좋은 감량 타입",
        content: "식사와 활동 리듬이 안정적입니다. 급한 변화보다 지속 가능한 루틴을 이어가면 좋습니다.",
        recommendation: "단백질, 수분, 근력 운동을 유지하고 체중보다 허리둘레와 컨디션 변화를 함께 보세요.",
        product: {
          name: "올리모아",
          desc: "흐트러진 바디라인을 살려주는 집중 솔루션",
          cta: "라인 관리 보기",
          url: "https://replyalba.com/pt/C7qCzRVOZ8",
        }
      },
      {
        minScore: 8,
        maxScore: 14,
        title: "🟡 습관 조정형",
        content: "작은 습관 몇 가지가 감량 속도를 늦추고 있을 수 있습니다. 식사 시간과 간식 패턴부터 정리해 보세요.",
        recommendation: "야식, 달달한 음료, 불규칙한 식사를 먼저 줄이고 2주 단위로 실천 가능한 목표를 세우세요.",
        product: {
          name: "올리모아 2",
          desc: "아름다운 몸매를 위한 스마트한 선택",
          cta: "습관 케어 시작하기",
          url: "https://replyalba.com/pt/yN552PODWx",
        }
      },
      {
        minScore: 15,
        maxScore: 22,
        title: "🟠 대사 리듬 흔들림 타입",
        content: "수면 부족, 스트레스, 극단적 식단이 반복되며 몸의 리듬이 흔들렸을 가능성이 있습니다.",
        recommendation: "무리한 절식보다 단백질과 근력 운동을 회복하고, 수면 시간을 먼저 확보해 보세요.",
        product: {
          name: "올리모아",
          desc: "흐트러진 바디라인을 살려주는 집중 솔루션",
          cta: "집중 케어 보기",
          url: "https://replyalba.com/pt/C7qCzRVOZ8",
        }
      },
      {
        minScore: 23,
        maxScore: 30,
        title: "🔴 실패 반복 원인 점검 필요",
        content: "감정적 식사, 극단적 제한, 수면 부족이 복합적으로 작용할 수 있습니다. 계획을 더 작고 안전하게 다시 설계해야 합니다.",
        recommendation: "식사 기록과 수면 기록을 1주일만 남겨 원인을 확인하세요. 폭식이나 강박이 반복되면 전문가 상담도 고려하세요.",
        product: {
          name: "올리모아 2",
          desc: "아름다운 몸매를 위한 스마트한 선택",
          cta: "맞춤 관리 확인하기",
          url: "https://replyalba.com/pt/yN552PODWx",
        }
      }
    ]
  },
  "dark-spot-risk": {
    title: "기미·잡티 위험도 테스트",
    description: "자외선 습관, 피부 회복력, 색소 흔적을 통해 기미·잡티 위험도를 점검해 보세요.",
    questions: [
      {
        id: 1,
        question: "자외선 차단제를 매일 바르나요?",
        icon: "Shield",
        options: [
          { text: "매일 충분히 바른다", score: 0 },
          { text: "외출할 때는 바른다", score: 1 },
          { text: "가끔 잊는다", score: 2 },
          { text: "거의 바르지 않는다", score: 3 },
        ],
      },
      {
        id: 2,
        question: "잡티나 색소 자국이 오래 남나요?",
        options: [
          { text: "금방 옅어진다", score: 0 },
          { text: "조금 남는다", score: 1 },
          { text: "오래 남는 편이다", score: 2 },
          { text: "거의 사라지지 않는다", score: 3 },
        ],
      },
      {
        id: 3,
        question: "최근 얼굴 톤이 칙칙해졌다고 느끼나요?",
        options: [
          { text: "전혀 아니다", score: 0 },
          { text: "가끔 그렇다", score: 1 },
          { text: "자주 느낀다", score: 2 },
          { text: "항상 칙칙하다", score: 3 },
        ],
      },
      {
        id: 4,
        question: "야외 활동이나 운전 시간이 많은 편인가요?",
        options: [
          { text: "짧은 편이다", score: 0 },
          { text: "보통이다", score: 1 },
          { text: "긴 편이다", score: 2 },
          { text: "매우 많다", score: 3 },
        ],
      },
      {
        id: 5,
        question: "피부 트러블 후 갈색 자국이 남나요?",
        options: [
          { text: "거의 남지 않는다", score: 0 },
          { text: "가끔 남는다", score: 1 },
          { text: "자주 남는다", score: 2 },
          { text: "작은 트러블도 오래 남는다", score: 3 },
        ],
      },
      {
        id: 6,
        question: "수면 부족이나 피로가 잦나요?",
        icon: "Moon",
        options: [
          { text: "잘 회복한다", score: 0 },
          { text: "가끔 피곤하다", score: 1 },
          { text: "자주 피곤하다", score: 2 },
          { text: "늘 피로하다", score: 3 },
        ],
      },
      {
        id: 7,
        question: "보습과 장벽 관리를 꾸준히 하나요?",
        options: [
          { text: "꾸준히 한다", score: 0 },
          { text: "대체로 한다", score: 1 },
          { text: "자주 놓친다", score: 2 },
          { text: "거의 하지 않는다", score: 3 },
        ],
      },
      {
        id: 8,
        question: "임신, 출산, 호르몬 변화 이후 색소 고민이 늘었나요?",
        options: [
          { text: "해당 없거나 변화 없다", score: 0 },
          { text: "조금 늘었다", score: 1 },
          { text: "눈에 띄게 늘었다", score: 2 },
          { text: "매우 심해졌다", score: 3 },
        ],
      },
      {
        id: 9,
        question: "피부를 문지르거나 자극적인 관리를 자주 하나요?",
        options: [
          { text: "거의 하지 않는다", score: 0 },
          { text: "가끔 한다", score: 1 },
          { text: "자주 한다", score: 2 },
          { text: "강한 관리를 반복한다", score: 3 },
        ],
      },
      {
        id: 10,
        question: "현재 기미·잡티가 확산되는 느낌이 있나요?",
        options: [
          { text: "전혀 없다", score: 0 },
          { text: "조금 있다", score: 1 },
          { text: "범위가 넓어졌다", score: 2 },
          { text: "빠르게 늘고 있다", score: 3 },
        ],
      },
    ],
    results: [
      {
        minScore: 0,
        maxScore: 7,
        title: "🟢 낮은 색소 위험도",
        content: "기미·잡티 위험이 낮은 편입니다. 지금처럼 자외선 차단과 보습을 유지해 주세요.",
        recommendation: "아침 자외선 차단, 저녁 보습, 충분한 수면을 기본 루틴으로 유지하세요.",
        product: {
          name: "MS-II PLUS",
          desc: "세월의 흔적을 지우는 고기능성 스킨케어",
          cta: "피부 케어 보기",
          url: "https://replyalba.com/pt/IGBX5btayE",
        }
      },
      {
        minScore: 8,
        maxScore: 14,
        title: "🟡 예방 관리 필요",
        content: "색소 흔적이 남기 쉬운 습관이 조금 있습니다. 예방 루틴을 강화할 시점입니다.",
        recommendation: "자외선 차단제를 충분히 바르고, 트러블을 만지지 않으며, 미백·진정 케어를 병행해 보세요.",
        product: {
          name: "CR-5",
          desc: "주름·기미·잡티 고민 한 번에 해결하세요",
          cta: "잡티 케어 시작하기",
          url: "https://replyalba.com/pt/JNyIgk9t32",
        }
      },
      {
        minScore: 15,
        maxScore: 22,
        title: "🟠 색소 침착 주의",
        content: "기미·잡티가 남거나 넓어질 가능성이 높은 상태입니다. 자극을 줄이고 집중 케어가 필요합니다.",
        recommendation: "낮에는 차단, 밤에는 회복 중심으로 루틴을 나누고 강한 스크럽이나 자극 관리는 피하세요.",
        product: {
          name: "스템엔셀 미미셀 시그니처",
          desc: "피부 시간을 되돌리는 줄기세포 과학적 관리",
          cta: "집중 관리 보기",
          url: "https://replyalba.com/pt/Rzqo5tlz9p",
        }
      },
      {
        minScore: 23,
        maxScore: 30,
        title: "🔴 적극적인 색소 관리 권장",
        content: "색소 고민이 강하게 진행될 수 있는 상태입니다. 홈케어와 함께 전문 상담을 고려해 보세요.",
        recommendation: "기미가 갑자기 진해지거나 넓어지면 피부과 상담을 권합니다. 자외선 차단은 매일 반복해야 합니다.",
        product: {
          name: "천수윤진2",
          desc: "바를수록 어려지는 기적의 피부 솔루션",
          cta: "프리미엄 케어 보기",
          url: "https://replyalba.com/pt/Sxw8G15GMU",
        }
      }
    ]
  },
  "sleep-stress": {
    title: "수면·스트레스 회복력 테스트",
    description: "수면의 질, 피로 회복, 스트레스 반응을 통해 현재 회복력을 점검해 보세요.",
    questions: [
      {
        id: 1,
        question: "잠들기까지 시간이 오래 걸리나요?",
        icon: "Moon",
        options: [
          { text: "금방 잠든다", score: 0 },
          { text: "가끔 오래 걸린다", score: 1 },
          { text: "자주 30분 이상 걸린다", score: 2 },
          { text: "거의 매일 오래 걸린다", score: 3 },
        ],
      },
      {
        id: 2,
        question: "자고 일어나도 피곤한가요?",
        options: [
          { text: "개운하다", score: 0 },
          { text: "가끔 피곤하다", score: 1 },
          { text: "자주 피곤하다", score: 2 },
          { text: "항상 피곤하다", score: 3 },
        ],
      },
      {
        id: 3,
        question: "밤중에 자주 깨나요?",
        options: [
          { text: "거의 깨지 않는다", score: 0 },
          { text: "가끔 깬다", score: 1 },
          { text: "자주 깬다", score: 2 },
          { text: "여러 번 깨고 다시 잠들기 어렵다", score: 3 },
        ],
      },
      {
        id: 4,
        question: "일상 스트레스가 몸으로 느껴지나요?",
        icon: "Brain",
        options: [
          { text: "잘 관리된다", score: 0 },
          { text: "가끔 느낀다", score: 1 },
          { text: "자주 두통이나 긴장감이 있다", score: 2 },
          { text: "몸이 늘 긴장되어 있다", score: 3 },
        ],
      },
      {
        id: 5,
        question: "카페인을 오후 늦게도 마시나요?",
        options: [
          { text: "거의 마시지 않는다", score: 0 },
          { text: "가끔 마신다", score: 1 },
          { text: "자주 마신다", score: 2 },
          { text: "매일 여러 잔 마신다", score: 3 },
        ],
      },
      {
        id: 6,
        question: "잠들기 전 휴대폰을 오래 보나요?",
        options: [
          { text: "거의 보지 않는다", score: 0 },
          { text: "10분 정도 본다", score: 1 },
          { text: "30분 이상 본다", score: 2 },
          { text: "잠들 때까지 본다", score: 3 },
        ],
      },
      {
        id: 7,
        question: "주말에 몰아서 자는 편인가요?",
        options: [
          { text: "평일에도 충분히 잔다", score: 0 },
          { text: "가끔 보충한다", score: 1 },
          { text: "주말마다 몰아 잔다", score: 2 },
          { text: "몰아 자도 회복이 안 된다", score: 3 },
        ],
      },
      {
        id: 8,
        question: "작은 일에도 예민하게 반응하나요?",
        options: [
          { text: "대체로 안정적이다", score: 0 },
          { text: "가끔 예민하다", score: 1 },
          { text: "자주 예민하다", score: 2 },
          { text: "감정 조절이 어렵다", score: 3 },
        ],
      },
      {
        id: 9,
        question: "쉬는 시간을 의식적으로 확보하나요?",
        options: [
          { text: "매일 확보한다", score: 0 },
          { text: "가끔 확보한다", score: 1 },
          { text: "잘 못 쉰다", score: 2 },
          { text: "거의 쉬지 못한다", score: 3 },
        ],
      },
      {
        id: 10,
        question: "피로가 피부나 소화 컨디션에 영향을 주나요?",
        options: [
          { text: "거의 없다", score: 0 },
          { text: "가끔 있다", score: 1 },
          { text: "자주 있다", score: 2 },
          { text: "항상 영향을 받는다", score: 3 },
        ],
      },
    ],
    results: [
      {
        minScore: 0,
        maxScore: 7,
        title: "🟢 회복력 안정형",
        content: "수면과 스트레스 회복력이 안정적인 편입니다. 현재의 생활 리듬을 유지해 주세요.",
        recommendation: "취침 시간을 일정하게 유지하고, 가벼운 스트레칭이나 명상으로 회복 루틴을 강화해 보세요.",
        product: {
          name: "공후하결",
          desc: "피부 근본부터 채우는 프리미엄 영양 케어",
          cta: "영양 케어 보기",
          url: "https://replyalba.com/pt/UKfoQbTwGI",
        }
      },
      {
        minScore: 8,
        maxScore: 14,
        title: "🟡 피로 누적 시작",
        content: "수면의 질이나 스트레스 회복이 조금 흔들리고 있습니다. 작은 습관 교정이 필요합니다.",
        recommendation: "오후 카페인, 취침 전 화면 사용, 불규칙한 수면 시간을 먼저 줄여 보세요.",
        product: {
          name: "천수애진2",
          desc: "속부터 채워지는 윤기와 보습의 결정체",
          cta: "회복 케어 시작하기",
          url: "https://replyalba.com/pt/PkcJmotCli",
        }
      },
      {
        minScore: 15,
        maxScore: 22,
        title: "🟠 스트레스 회복력 저하",
        content: "피로와 스트레스가 누적되어 몸 컨디션에 영향을 주는 상태입니다. 회복 시간을 의식적으로 확보해야 합니다.",
        recommendation: "수면 루틴을 고정하고, 하루 10분이라도 휴식 시간을 예약하세요. 증상이 지속되면 상담을 고려하세요.",
        product: {
          name: "스템벨",
          desc: "인체 줄기세포 배양액으로 되찾는 자생력",
          cta: "컨디션 케어 보기",
          url: "https://replyalba.com/pt/yBXZ7Kddui",
        }
      },
      {
        minScore: 23,
        maxScore: 30,
        title: "🔴 회복 루틴 재설계 필요",
        content: "수면 부족과 스트레스 반응이 높은 수준입니다. 장기화되면 몸과 마음의 회복력이 크게 떨어질 수 있습니다.",
        recommendation: "불면, 불안, 무기력감이 지속되면 전문가 상담을 권합니다. 업무량, 수면, 카페인부터 우선 조정하세요.",
        product: {
          name: "천수애진",
          desc: "마시는 고함량 콜라겐으로 탱탱한 피부 재생",
          cta: "이너 회복 보기",
          url: "https://replyalba.com/pt/SanlazetIb",
        }
      }
    ]
  },
  "pms-condition": {
    title: "PMS·생리 전 컨디션 테스트",
    description: "생리 전 감정, 통증, 붓기, 피로 변화를 통해 월경 전 컨디션을 점검해 보세요.",
    questions: [
      {
        id: 1,
        question: "생리 전 감정 기복이 심해지나요?",
        icon: "HeartPulse",
        options: [
          { text: "거의 없다", score: 0 },
          { text: "가끔 있다", score: 1 },
          { text: "자주 있다", score: 2 },
          { text: "일상에 지장이 크다", score: 3 },
        ],
      },
      {
        id: 2,
        question: "생리 전 아랫배나 허리 통증이 있나요?",
        options: [
          { text: "거의 없다", score: 0 },
          { text: "약간 있다", score: 1 },
          { text: "자주 불편하다", score: 2 },
          { text: "통증이 심하다", score: 3 },
        ],
      },
      {
        id: 3,
        question: "생리 전 붓기나 체중 증가가 느껴지나요?",
        options: [
          { text: "거의 없다", score: 0 },
          { text: "조금 있다", score: 1 },
          { text: "눈에 띄게 있다", score: 2 },
          { text: "매우 심하다", score: 3 },
        ],
      },
      {
        id: 4,
        question: "단 음식이나 탄수화물이 강하게 당기나요?",
        options: [
          { text: "거의 없다", score: 0 },
          { text: "가끔 있다", score: 1 },
          { text: "자주 있다", score: 2 },
          { text: "조절이 어렵다", score: 3 },
        ],
      },
      {
        id: 5,
        question: "생리 전 피부 트러블이 늘어나나요?",
        options: [
          { text: "거의 없다", score: 0 },
          { text: "가끔 있다", score: 1 },
          { text: "매주기 반복된다", score: 2 },
          { text: "심하게 올라온다", score: 3 },
        ],
      },
      {
        id: 6,
        question: "생리 전 피로감이나 졸림이 심한가요?",
        icon: "Moon",
        options: [
          { text: "평소와 비슷하다", score: 0 },
          { text: "조금 피곤하다", score: 1 },
          { text: "많이 피곤하다", score: 2 },
          { text: "활동이 어렵다", score: 3 },
        ],
      },
      {
        id: 7,
        question: "생리 주기가 규칙적인 편인가요?",
        options: [
          { text: "규칙적이다", score: 0 },
          { text: "가끔 차이가 난다", score: 1 },
          { text: "자주 불규칙하다", score: 2 },
          { text: "예측하기 어렵다", score: 3 },
        ],
      },
      {
        id: 8,
        question: "생리 전 예민함 때문에 관계나 업무에 영향이 있나요?",
        options: [
          { text: "거의 없다", score: 0 },
          { text: "가끔 있다", score: 1 },
          { text: "자주 있다", score: 2 },
          { text: "매우 크다", score: 3 },
        ],
      },
      {
        id: 9,
        question: "카페인, 음주, 짠 음식이 생리 전 늘어나나요?",
        options: [
          { text: "거의 늘지 않는다", score: 0 },
          { text: "조금 늘어난다", score: 1 },
          { text: "자주 늘어난다", score: 2 },
          { text: "매번 크게 늘어난다", score: 3 },
        ],
      },
      {
        id: 10,
        question: "생리 전 증상이 매달 반복되어 걱정되나요?",
        options: [
          { text: "걱정되지 않는다", score: 0 },
          { text: "조금 신경 쓰인다", score: 1 },
          { text: "꽤 걱정된다", score: 2 },
          { text: "매달 큰 부담이다", score: 3 },
        ],
      },
    ],
    results: [
      {
        minScore: 0,
        maxScore: 7,
        title: "🟢 안정적인 주기 컨디션",
        content: "생리 전 컨디션 변화가 비교적 안정적입니다. 현재의 생활 리듬을 유지하세요.",
        recommendation: "가벼운 운동, 수면, 수분 섭취를 유지하고 생리 전 카페인과 짠 음식만 조금 조절해 보세요.",
        product: {
          name: "여궁골드",
          desc: "여성 생애 주기별 맞춤 솔루션 제공",
          cta: "여성 케어 보기",
          url: "https://replyalba.com/pt/Z1IJI9rY2c",
        }
      },
      {
        minScore: 8,
        maxScore: 14,
        title: "🟡 PMS 관리 시작",
        content: "생리 전 불편함이 반복되기 시작한 상태입니다. 증상 기록과 생활 조절이 도움이 됩니다.",
        recommendation: "생리 7일 전부터 수면, 염분, 카페인, 당 섭취를 조절하고 증상 기록을 남겨 보세요.",
        product: {
          name: "여궁닥터",
          desc: "민감한 부위의 냄새와 가려움을 말끔하게",
          cta: "주기 케어 시작하기",
          url: "https://replyalba.com/pt/IlnAem4ygW",
        }
      },
      {
        minScore: 15,
        maxScore: 22,
        title: "🟠 월경 전 컨디션 주의",
        content: "감정, 통증, 붓기, 피로가 복합적으로 나타납니다. 월경 전 관리 루틴이 필요합니다.",
        recommendation: "증상이 반복되면 산부인과 상담을 고려하세요. 평소에는 스트레스 관리와 가벼운 유산소 운동을 권합니다.",
        product: {
          name: "레이디큐어 솔루션",
          desc: "여성만의 말 못할 고민, 근본부터 케어",
          cta: "집중 케어 보기",
          url: "https://replyalba.com/pt/WsdU9oMhje",
        }
      },
      {
        minScore: 23,
        maxScore: 30,
        title: "🔴 전문 상담 권장",
        content: "PMS 증상이 일상에 큰 영향을 주는 수준입니다. 자가 관리만으로 버티지 않는 것이 좋습니다.",
        recommendation: "통증, 우울감, 심한 감정 기복이 반복되면 전문 진료를 권합니다. 증상 기록을 가져가면 상담에 도움이 됩니다.",
        product: {
          name: "레이디큐어 솔루션 2",
          desc: "더 당당해지는 나를 위한 시크릿 솔루션",
          cta: "맞춤 케어 확인하기",
          url: "https://replyalba.com/pt/z6pRyceT7w",
        }
      }
    ]
  },
  "gut-constipation": {
    title: "장 건강·변비 타입 테스트",
    description: "배변 리듬, 식습관, 수분 섭취를 통해 나의 장 건강과 변비 타입을 확인해 보세요.",
    questions: [
      {
        id: 1,
        question: "배변은 얼마나 규칙적인가요?",
        options: [
          { text: "매일 규칙적이다", score: 0 },
          { text: "대체로 규칙적이다", score: 1 },
          { text: "2~3일에 한 번이다", score: 2 },
          { text: "매우 불규칙하다", score: 3 },
        ],
      },
      {
        id: 2,
        question: "배변 시 힘을 많이 주나요?",
        options: [
          { text: "거의 그렇지 않다", score: 0 },
          { text: "가끔 그렇다", score: 1 },
          { text: "자주 힘들다", score: 2 },
          { text: "매번 힘들다", score: 3 },
        ],
      },
      {
        id: 3,
        question: "복부 팽만감이나 가스가 잦나요?",
        options: [
          { text: "거의 없다", score: 0 },
          { text: "가끔 있다", score: 1 },
          { text: "자주 있다", score: 2 },
          { text: "늘 더부룩하다", score: 3 },
        ],
      },
      {
        id: 4,
        question: "물을 충분히 마시나요?",
        icon: "Droplets",
        options: [
          { text: "충분히 마신다", score: 0 },
          { text: "보통이다", score: 1 },
          { text: "부족한 편이다", score: 2 },
          { text: "거의 마시지 않는다", score: 3 },
        ],
      },
      {
        id: 5,
        question: "채소, 과일, 해조류를 자주 먹나요?",
        options: [
          { text: "매일 충분히 먹는다", score: 0 },
          { text: "자주 먹는다", score: 1 },
          { text: "가끔 먹는다", score: 2 },
          { text: "거의 먹지 않는다", score: 3 },
        ],
      },
      {
        id: 6,
        question: "활동량이나 걷는 시간이 충분한가요?",
        icon: "Activity",
        options: [
          { text: "충분하다", score: 0 },
          { text: "보통이다", score: 1 },
          { text: "부족한 편이다", score: 2 },
          { text: "거의 움직이지 않는다", score: 3 },
        ],
      },
      {
        id: 7,
        question: "스트레스를 받으면 장 컨디션이 흔들리나요?",
        options: [
          { text: "거의 없다", score: 0 },
          { text: "가끔 있다", score: 1 },
          { text: "자주 있다", score: 2 },
          { text: "항상 영향을 받는다", score: 3 },
        ],
      },
      {
        id: 8,
        question: "아침 식사를 거르는 편인가요?",
        options: [
          { text: "거의 거르지 않는다", score: 0 },
          { text: "가끔 거른다", score: 1 },
          { text: "자주 거른다", score: 2 },
          { text: "거의 매일 거른다", score: 3 },
        ],
      },
      {
        id: 9,
        question: "화장실 신호를 참는 일이 있나요?",
        options: [
          { text: "거의 없다", score: 0 },
          { text: "가끔 있다", score: 1 },
          { text: "자주 참는다", score: 2 },
          { text: "일상적으로 참는다", score: 3 },
        ],
      },
      {
        id: 10,
        question: "변비약이나 보조제에 의존하는 편인가요?",
        options: [
          { text: "거의 없다", score: 0 },
          { text: "가끔 사용한다", score: 1 },
          { text: "자주 사용한다", score: 2 },
          { text: "없으면 불안하다", score: 3 },
        ],
      },
    ],
    results: [
      {
        minScore: 0,
        maxScore: 7,
        title: "🟢 규칙적인 장 리듬",
        content: "장 건강과 배변 리듬이 안정적인 편입니다. 지금의 수분과 식이섬유 섭취를 유지하세요.",
        recommendation: "아침 식사, 충분한 물, 가벼운 걷기를 유지하면 장 리듬을 더 안정적으로 지킬 수 있습니다.",
        product: {
          name: "공후하결",
          desc: "피부 근본부터 채우는 프리미엄 영양 케어",
          cta: "이너 케어 보기",
          url: "https://replyalba.com/pt/UKfoQbTwGI",
        }
      },
      {
        minScore: 8,
        maxScore: 14,
        title: "🟡 식습관 조정형",
        content: "수분, 식이섬유, 활동량 중 일부가 부족해 장 리듬이 흔들릴 수 있습니다.",
        recommendation: "물을 조금씩 자주 마시고, 채소와 과일을 매일 추가하세요. 아침 배변 시간을 일정하게 만드는 것도 좋습니다.",
        product: {
          name: "천수애진2",
          desc: "속부터 채워지는 윤기와 보습의 결정체",
          cta: "이너뷰티 시작하기",
          url: "https://replyalba.com/pt/PkcJmotCli",
        }
      },
      {
        minScore: 15,
        maxScore: 22,
        title: "🟠 변비 반복 주의",
        content: "배변 불편과 복부 팽만이 반복되는 상태입니다. 생활 리듬과 식습관을 함께 조정해야 합니다.",
        recommendation: "무리한 보조제 의존보다 수분, 식이섬유, 걷기, 화장실 신호에 바로 반응하는 습관을 먼저 회복하세요.",
        product: {
          name: "천수애진",
          desc: "마시는 고함량 콜라겐으로 탱탱한 피부 재생",
          cta: "장 리듬 케어 보기",
          url: "https://replyalba.com/pt/SanlazetIb",
        }
      },
      {
        minScore: 23,
        maxScore: 30,
        title: "🔴 장 건강 상담 권장",
        content: "변비와 복부 불편이 높은 수준입니다. 장기간 지속된다면 원인 확인이 필요합니다.",
        recommendation: "혈변, 심한 복통, 급격한 체중 변화, 장기간 변비가 있으면 의료 상담을 받으세요. 생활 습관도 단계적으로 조정해야 합니다.",
        product: {
          name: "공후하결",
          desc: "피부 근본부터 채우는 프리미엄 영양 케어",
          cta: "이너 케어 확인하기",
          url: "https://replyalba.com/pt/UKfoQbTwGI",
        }
      }
    ]
  }
};

export type QuizId = keyof typeof QUIZ_DATA;
export type Quiz = (typeof QUIZ_DATA)[QuizId];
