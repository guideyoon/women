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
          name: "커플 케미 프로그램",
          desc: "서로의 차이를 이해하고 더 뜨겁게",
          cta: "자세히 보기",
        }
      },
      {
        minScore: 18,
        maxScore: 25,
        title: "🌿 밸런스 조화형",
        content: "적당한 모험심과 안정감을 모두 갖춘 균형 잡힌 스타일이에요. 다양한 파트너와 잘 맞출 수 있는 유연한 타입입니다. 파트너의 점수와 비교해보세요!",
        recommendation: "💡 궁합 확인법: 파트너도 같은 테스트를 한 뒤, 두 점수의 차이를 확인하세요.\n\n🔥 0~6점 차이 = 매우 좋음 — 성적 템포·취향이 거의 비슷!\n👍 7~12점 차이 = 좋음 — 대화로 충분히 조율 가능\n⚠️ 13~18점 차이 = 보통 — 꽤 다른 스타일, 노력 필요\n😅 19점 이상 = 많이 다름 — 핵심 가치가 달라 장기적 조율 중요",
        product: {
          name: "커플 소통 가이드",
          desc: "대화로 더 가까워지는 관계 만들기",
          cta: "지금 확인하기",
        }
      },
      {
        minScore: 26,
        maxScore: 33,
        title: "🌹 감성 로맨틱형",
        content: "감정적 연결과 분위기를 중시하는 로맨틱한 스타일이에요. 깊은 교감과 애정 표현을 중요하게 생각합니다. 파트너의 점수와 비교해보세요!",
        recommendation: "💡 궁합 확인법: 파트너도 같은 테스트를 한 뒤, 두 점수의 차이를 확인하세요.\n\n🔥 0~6점 차이 = 매우 좋음 — 성적 템포·취향이 거의 비슷!\n👍 7~12점 차이 = 좋음 — 대화로 충분히 조율 가능\n⚠️ 13~18점 차이 = 보통 — 꽤 다른 스타일, 노력 필요\n😅 19점 이상 = 많이 다름 — 핵심 가치가 달라 장기적 조율 중요",
        product: {
          name: "커플 힐링 프로그램",
          desc: "함께 성장하는 관계를 위한 맞춤 케어",
          cta: "특별 혜택 보기",
        }
      },
      {
        minScore: 34,
        maxScore: 40,
        title: "� 순수 하트형",
        content: "안정적이고 감성적인 교감을 가장 중시하는 스타일이에요. 편안함과 애정표현 속에서 최고의 만족을 느끼는 타입입니다. 파트너의 점수와 비교해보세요!",
        recommendation: "💡 궁합 확인법: 파트너도 같은 테스트를 한 뒤, 두 점수의 차이를 확인하세요.\n\n🔥 0~6점 차이 = 매우 좋음 — 성적 템포·취향이 거의 비슷!\n👍 7~12점 차이 = 좋음 — 대화로 충분히 조율 가능\n⚠️ 13~18점 차이 = 보통 — 꽤 다른 스타일, 노력 필요\n😅 19점 이상 = 많이 다름 — 핵심 가치가 달라 장기적 조율 중요",
        product: {
          name: "관계 깊어지기 프로그램",
          desc: "서로의 마음을 더 깊이 이해하는 비결",
          cta: "무료 상담 받기",
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
          name: "셀프 힐링 프로그램",
          desc: "나를 사랑하는 것부터 시작하는 건강한 연애",
          cta: "자세히 보기",
        }
      },
      {
        minScore: 8,
        maxScore: 14,
        title: "🌿 안정 추구형",
        content: "당신은 차분하고 안정적인 관계를 추구하는 타입이에요. 신뢰와 편안함을 가장 중요하게 생각하며, 꾸준한 사랑을 실천합니다.",
        recommendation: "안정적인 관계 속에서도 가끔 새로운 시도를 해보세요. 서프라이즈 데이트나 새로운 취미를 함께 시작하면 관계에 활력이 생겨요.",
        product: {
          name: "커플 힐링 테라피",
          desc: "더 깊고 안정적인 사랑을 위한 가이드",
          cta: "지금 확인하기",
        }
      },
      {
        minScore: 15,
        maxScore: 22,
        title: "🌹 로맨틱 감성형",
        content: "당신은 사랑에 깊이 빠지는 로맨티스트예요! 설렘과 감동을 중시하며, 연인에게 많은 애정을 쏟는 타입입니다.",
        recommendation: "풍부한 감성이 장점이지만, 때로는 현실적인 면도 함께 봐야 해요. 감정에 휘둘리지 않고 이성적으로 판단하는 연습도 해보세요.",
        product: {
          name: "연애 감성 코칭",
          desc: "감성과 이성의 균형을 찾는 연애 레시피",
          cta: "특별 혜택 보기",
        }
      },
      {
        minScore: 23,
        maxScore: 30,
        title: "🔥 열정 올인형",
        content: "당신은 사랑에 올인하는 열정적인 연애인이에요! 연인에게 모든 것을 쏟아붓고, 함께하는 모든 순간을 소중히 여깁니다.",
        recommendation: "열정적인 사랑도 좋지만, 나만의 시간과 취미도 꼭 가지세요. 서로에게 숨 쉴 공간을 주는 것이 오히려 관계를 오래가게 만듭니다.",
        product: {
          name: "건강한 연애 가이드",
          desc: "열정을 지키면서도 균형 잡힌 사랑 만들기",
          cta: "무료 상담 받기",
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
          name: "커플 운세 프리미엄",
          desc: "더 깊은 사주 분석으로 미래를 엿보기",
          cta: "자세히 보기",
        }
      },
      {
        minScore: 8,
        maxScore: 14,
        title: "⭐ 좋은 인연",
        content: "분명 좋은 인연으로 만난 두 분이에요. 서로에게 긍정적 영향을 주고, 함께 성장할 수 있는 관계입니다.",
        recommendation: "서로의 장점을 인정하고 칭찬을 아끼지 마세요. 공통된 목표를 세우고 함께 노력하면 더 좋은 결과를 거둘 수 있습니다.",
        product: {
          name: "운명 분석 리포트",
          desc: "두 사람만을 위한 맞춤 운세 분석",
          cta: "지금 확인하기",
        }
      },
      {
        minScore: 15,
        maxScore: 22,
        title: "🌤 성장형 인연",
        content: "서로를 통해 많은 것을 배우는 관계예요. 쉽지만은 않지만, 이 관계를 통해 두 사람 모두 크게 성장할 수 있습니다.",
        recommendation: "인내심과 이해심이 필요한 관계입니다. 서로의 다른 점을 결점이 아닌 배움의 기회로 받아들여 보세요.",
        product: {
          name: "관계 성장 프로그램",
          desc: "함께 성장하며 더 단단해지는 사랑",
          cta: "특별 혜택 보기",
        }
      },
      {
        minScore: 23,
        maxScore: 30,
        title: "🌊 시련의 인연",
        content: "운명이 쉬운 길을 내어주진 않았지만, 그만큼 큰 사랑을 배울 수 있는 관계입니다. 진심을 다한다면 두 사람 사이의 벽을 넘을 수 있어요.",
        recommendation: "대화와 소통이 무엇보다 중요합니다. 서로에 대한 기대를 솔직하게 나누고, 필요하다면 전문 상담도 고려해 보세요.",
        product: {
          name: "사주 심층 상담",
          desc: "운명을 읽고 사랑을 지키는 방법",
          cta: "무료 상담 받기",
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
          name: "행복한 커플 마스터",
          desc: "건강한 관계를 더 깊게 만드는 비결",
          cta: "자세히 보기",
        }
      },
      {
        minScore: 8,
        maxScore: 14,
        title: "🌸 관계 중시형",
        content: "당신은 관계를 소중히 여기며, 연인과의 유대감을 중요하게 생각하는 타입이에요. 다만 때로는 상대의 반응에 민감할 수 있습니다.",
        recommendation: "상대의 행동 하나하나에 너무 의미를 부여하지 마세요. 자신의 가치를 먼저 인정하고 사랑하는 것이 건강한 관계의 시작이에요.",
        product: {
          name: "자존감 회복 프로그램",
          desc: "나를 사랑해야 사랑받을 수 있어요",
          cta: "지금 확인하기",
        }
      },
      {
        minScore: 15,
        maxScore: 22,
        title: "💜 불안 감성형",
        content: "사랑에 대한 갈망이 크고, 연인의 사랑을 확인받고 싶은 마음이 강한 타입이에요. 이것은 약점이 아니라, 사랑에 진지한 당신의 모습입니다.",
        recommendation: "불안한 감정이 올라올 때, 잠시 멈추고 심호흡해 보세요. 자기 자신에 대한 확신을 키우면 연애도 더 편안해져요. 취미 생활이나 자기계발에 투자해 보세요.",
        product: {
          name: "마음 치유 테라피",
          desc: "불안을 내려놓고 진정한 사랑을 만나기",
          cta: "특별 혜택 보기",
        }
      },
      {
        minScore: 23,
        maxScore: 30,
        title: "🌙 집착 경계형",
        content: "연인에 대한 강한 감정을 가지고 있지만, 그것이 때로는 불안과 집착으로 나타날 수 있어요. 이는 과거 경험이나 내면의 상처와 관련이 있을 수 있습니다.",
        recommendation: "전문 심리 상담을 받아보시길 권합니다. 나의 내면을 들여다보고 치유하는 과정이 필요합니다. 건강한 자기 사랑이 건강한 연애의 시작이에요.",
        product: {
          name: "심리 상담 프로그램",
          desc: "내면의 상처를 치유하고 건강한 사랑 시작하기",
          cta: "무료 상담 받기",
        }
      }
    ]
  }
};
