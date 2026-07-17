import Link from 'next/link';
import { ChevronRight, Sparkles } from 'lucide-react';
import DisclosureNotice from '@/components/DisclosureNotice';
import { merchants } from '@/constants/merchants';
import { HOME_TEST_CARDS } from '@/constants/testCards';
import { TEST_LINKS } from '@/constants/testLinks';
import { absoluteUrl } from '@/constants/site';

const BANNER_STYLES = [
  { bg: 'from-rose-400 to-pink-500', text: 'text-rose-100', tag: '인기 급상승', icon: '🎁' },
  { bg: 'from-purple-400 to-indigo-500', text: 'text-purple-100', tag: 'MD 추천', icon: '✨' },
  { bg: 'from-amber-400 to-orange-500', text: 'text-amber-100', tag: '금주의 혜택', icon: '💕' },
] as const;

export default function Home() {
  const featuredMerchants = merchants.slice(0, 3);

  return (
    <main className="max-w-7xl mx-auto min-h-screen bg-background pb-20 px-4 sm:px-6 lg:px-8">
      <header className="py-12 md:py-20 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800">
          <span className="text-primary">여성 건강 자가진단 테스트</span>
        </h1>
        <p className="text-lg text-gray-500 mt-4 max-w-3xl mx-auto leading-relaxed">
          갱년기, 피부 나이, 여성 탈모, 붓기, PMS, 장 건강까지 일상에서 느끼는
          여성 컨디션을 간단한 문항으로 점검하고 관리 방향을 확인해 보세요.
        </p>
      </header>

      <section className="space-y-6">
        <h2 className="text-xl font-bold flex items-center gap-2">
          여성 컨디션 테스트 모음
          <Sparkles className="w-5 h-5 text-amber-400 fill-amber-400" />
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {HOME_TEST_CARDS.map((test) => (
            <Link
              key={test.id}
              href={test.href}
              className="flex items-center p-6 rounded-2xl bg-white border border-secondary card-shadow hover:scale-[1.02] transition-transform h-full min-h-[120px]"
            >
              <div className={`p-4 rounded-xl ${test.color} mr-4 flex-shrink-0`}>
                {test.icon}
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-bold text-gray-800 text-lg line-clamp-1">{test.title}</h3>
                <p className="text-sm text-gray-500 line-clamp-2">{test.desc}</p>
              </div>
              <ChevronRight className="w-5 h-5 text-gray-300 flex-shrink-0" />
            </Link>
          ))}
        </div>
      </section>

      <section className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="bg-white border border-secondary rounded-2xl p-6 card-shadow">
          <h2 className="text-lg font-bold text-gray-800">내 몸의 변화를 빠르게 체크</h2>
          <p className="mt-3 text-sm text-gray-600 leading-relaxed">
            안면홍조, 수면 변화, 피부 탄력, 붓기처럼 놓치기 쉬운 신호를 짧은 테스트로
            확인할 수 있습니다.
          </p>
        </div>
        <div className="bg-white border border-secondary rounded-2xl p-6 card-shadow">
          <h2 className="text-lg font-bold text-gray-800">상황별 맞춤 관리 방향</h2>
          <p className="mt-3 text-sm text-gray-600 leading-relaxed">
            결과 점수에 따라 생활 습관, 피부 관리, 이너뷰티, 여성 건강 관리 팁을
            단계별로 안내합니다.
          </p>
        </div>
        <div className="bg-white border border-secondary rounded-2xl p-6 card-shadow">
          <h2 className="text-lg font-bold text-gray-800">검색하기 쉬운 테스트 주제</h2>
          <p className="mt-3 text-sm text-gray-600 leading-relaxed">
            갱년기 테스트, PMS 테스트, 여성 탈모 테스트, 장 건강 테스트처럼 관심 있는
            주제별로 바로 시작할 수 있습니다.
          </p>
        </div>
      </section>

      <section className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
        {featuredMerchants.map((merchant, index) => {
          const style = BANNER_STYLES[index % BANNER_STYLES.length];

          return (
            <a
              key={merchant.id}
              href={merchant.url}
              target="_blank"
              rel="noopener noreferrer sponsored"
              className={`block rounded-2xl bg-gradient-to-br ${style.bg} p-8 text-white relative overflow-hidden group h-full`}
            >
              <div className="relative z-10">
                <span className="text-white/80 text-xs font-bold bg-white/20 px-3 py-1 rounded-full mb-3 inline-block backdrop-blur-sm">
                  {style.tag}
                </span>
                <h3 className="font-bold text-2xl leading-tight">{merchant.title}</h3>
                <p className="mt-2 text-white/90 text-sm font-medium line-clamp-1">
                  {merchant.subtitle}
                </p>
                <p className={`mt-4 ${style.text} flex items-center gap-1 font-medium`}>
                  솔루션 보러가기 <ChevronRight className="w-4 h-4" />
                </p>
              </div>
              <div className="absolute -right-4 -bottom-4 w-32 h-32 bg-white/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500" />
              <div className="absolute right-6 top-1/2 -translate-y-1/2 text-6xl opacity-20 grayscale brightness-200">
                {style.icon}
              </div>
            </a>
          );
        })}
      </section>

      <DisclosureNotice className="mt-12" />
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'ItemList',
            name: '여성 건강 자가진단 테스트 모음',
            itemListElement: TEST_LINKS.map((test, index) => ({
              '@type': 'ListItem',
              position: index + 1,
              name: test.title,
              url: absoluteUrl(`/test/${test.id}`),
            })),
          }),
        }}
      />
    </main>
  );
}
