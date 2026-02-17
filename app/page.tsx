import Link from "next/link";
import { ChevronRight, Sparkles, Heart, Activity, Calculator, Moon } from "lucide-react";

export default function Home() {
  const tests = [
    {
      id: "menopause",
      title: "갱년기 증상 체크",
      desc: "내 증상은 어느 정도일까요?",
      icon: <Activity className="w-6 h-6 text-primary" />,
      color: "bg-pink-50",
    },
    {
      id: "skin-age",
      title: "피부 나이 테스트",
      desc: "현재 내 피부 탄력 상태는?",
      icon: <Sparkles className="w-6 h-6 text-amber-400" />,
      color: "bg-amber-50",
    },
    {
      id: "bmr",
      title: "기초대사량 계산기",
      desc: "내 몸에 필요한 에너지는?",
      icon: <Calculator className="w-6 h-6 text-blue-400" />,
      color: "bg-blue-50",
    },
  ];

  const categories = [
    { name: "건강", icon: <Heart className="w-5 h-5" /> },
    { name: "피부", icon: <Sparkles className="w-5 h-5" /> },
    { name: "다이어트", icon: <Calculator className="w-5 h-5" /> },
    { name: "운세", icon: <Moon className="w-5 h-5" /> },
  ];

  return (
    <main className="max-w-md mx-auto min-h-screen bg-background pb-20">
      {/* Header */}
      <header className="p-6 pt-10">
        <h1 className="text-2xl font-bold text-gray-800">
          <span className="text-primary">미즈 밸런스</span>
        </h1>
        <p className="text-gray-500 mt-1">오늘도 더 건강하고 아름다운 당신을 응원해요</p>
      </header>

      {/* Top Recommendations */}
      <section className="px-6 space-y-4">
        <h2 className="text-lg font-semibold flex items-center gap-2">
          오늘의 추천 테스트 <Sparkles className="w-4 h-4 text-amber-400 fill-amber-400" />
        </h2>
        <div className="space-y-3">
          {tests.map((test) => (
            <Link
              key={test.id}
              href={`/test/${test.id}`}
              className="flex items-center p-4 rounded-2xl bg-white border border-secondary card-shadow hover:scale-[1.02] transition-transform"
            >
              <div className={`p-3 rounded-xl ${test.color} mr-4`}>{test.icon}</div>
              <div className="flex-1">
                <h3 className="font-bold text-gray-800">{test.title}</h3>
                <p className="text-sm text-gray-500">{test.desc}</p>
              </div>
              <ChevronRight className="w-5 h-5 text-gray-300" />
            </Link>
          ))}
        </div>
      </section>

      {/* Categories */}
      <section className="px-6 mt-10">
        <h2 className="text-lg font-semibold mb-4">카테고리별 보기</h2>
        <div className="grid grid-cols-4 gap-3">
          {categories.map((cat) => (
            <div key={cat.name} className="flex flex-col items-center gap-2">
              <div className="w-14 h-14 rounded-full bg-white border border-secondary flex items-center justify-center text-primary card-shadow">
                {cat.icon}
              </div>
              <span className="text-xs font-medium text-gray-600">{cat.name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Product Banner (Placeholder) */}
      <section className="px-6 mt-10">
        <div className="rounded-2xl bg-secondary p-6 flex justify-between items-center overflow-hidden relative">
          <div>
            <span className="text-primary text-xs font-bold bg-white px-2 py-1 rounded-full mb-2 inline-block">인기 급상승</span>
            <h3 className="font-bold text-gray-800 text-lg">갱년기 건강,<br />하루 한 알로 관리하세요</h3>
          </div>
          <div className="w-20 h-20 bg-white rounded-xl flex items-center justify-center rotate-12 shadow-sm">
            🎁
          </div>
        </div>
      </section>
    </main>
  );
}
