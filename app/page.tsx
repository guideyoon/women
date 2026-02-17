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
    { name: "건강", icon: <Heart className="w-5 h-5" />, href: "/solutions" },
    { name: "피부", icon: <Sparkles className="w-5 h-5" />, href: "/test/skin-age" },
    { name: "다이어트", icon: <Calculator className="w-5 h-5" />, href: "/calculator" },
    { name: "운세", icon: <Moon className="w-5 h-5" />, href: "/fortune" },
  ];

  return (
    <main className="max-w-7xl mx-auto min-h-screen bg-background pb-20 px-4 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <header className="py-12 md:py-20 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800">
          <span className="text-primary">미즈 밸런스</span>
        </h1>
        <p className="text-lg text-gray-500 mt-4">오늘도 더 건강하고 아름다운 당신을 응원해요</p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Top Recommendations */}
        <section className="lg:col-span-2 space-y-6">
          <h2 className="text-xl font-bold flex items-center gap-2">
            오늘의 추천 테스트 <Sparkles className="w-5 h-5 text-amber-400 fill-amber-400" />
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {tests.map((test) => (
              <Link
                key={test.id}
                href={test.id === 'bmr' ? '/calculator' : `/test/${test.id}`}
                className="flex items-center p-6 rounded-2xl bg-white border border-secondary card-shadow hover:scale-[1.02] transition-transform"
              >
                <div className={`p-4 rounded-xl ${test.color} mr-4`}>{test.icon}</div>
                <div className="flex-1">
                  <h3 className="font-bold text-gray-800 text-lg">{test.title}</h3>
                  <p className="text-sm text-gray-500">{test.desc}</p>
                </div>
                <ChevronRight className="w-5 h-5 text-gray-300" />
              </Link>
            ))}
          </div>
        </section>

        <div className="space-y-10">
          {/* Categories */}
          <section>
            <h2 className="text-xl font-bold mb-6">카테고리별 보기</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 gap-4">
              {categories.map((cat) => (
                <Link 
                  href={cat.href}
                  key={cat.name} 
                  className="flex flex-col items-center gap-3 p-4 rounded-2xl bg-white border border-secondary card-shadow hover:bg-rose-50 transition-colors"
                >
                  <div className="w-14 h-14 rounded-full bg-secondary flex items-center justify-center text-primary">
                    {cat.icon}
                  </div>
                  <span className="text-sm font-semibold text-gray-700">{cat.name}</span>
                </Link>
              ))}
            </div>
          </section>

          {/* Product Banner */}
          <section>
            <Link href="/solutions" className="block rounded-2xl bg-gradient-to-br from-rose-400 to-pink-500 p-8 text-white relative overflow-hidden group">
              <div className="relative z-10">
                <span className="text-white/80 text-xs font-bold bg-white/20 px-3 py-1 rounded-full mb-3 inline-block backdrop-blur-sm">인기 급상승</span>
                <h3 className="font-bold text-2xl">갱년기 건강,<br />하루 한 알로 관리하세요</h3>
                <p className="mt-4 text-rose-100 flex items-center gap-1 font-medium">솔루션 보러가기 <ChevronRight className="w-4 h-4" /></p>
              </div>
              <div className="absolute -right-4 -bottom-4 w-32 h-32 bg-white/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500" />
              <div className="absolute right-6 top-1/2 -translate-y-1/2 text-6xl opacity-20 grayscale brightness-200">
                🎁
              </div>
            </Link>
          </section>
        </div>
      </div>
    </main>
  );
}
