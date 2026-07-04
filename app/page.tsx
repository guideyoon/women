"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronRight, Sparkles, Heart, Activity, Calculator, Moon, HeartHandshake, Stethoscope, Baby, Dumbbell, Shield, Apple } from "lucide-react";
import { merchants } from "@/constants/merchants";
import type { Merchant } from "@/constants/merchants";
import DisclosureNotice from "@/components/DisclosureNotice";

function getRandomMerchants(): Merchant[] {
  return [...merchants].sort(() => 0.5 - Math.random()).slice(0, 3);
}

export default function Home() {
  const [randomMerchants] = useState(getRandomMerchants);

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
    {
      id: "chemistry",
      title: "속궁합 테스트",
      desc: "우리의 케미스트리는 몇 점?",
      icon: <HeartHandshake className="w-6 h-6 text-rose-400" />,
      color: "bg-rose-50",
    },
    {
      id: "love-type",
      title: "연애 타입 테스트",
      desc: "나의 연애 스타일은?",
      icon: <Heart className="w-6 h-6 text-pink-400" />,
      color: "bg-pink-50",
    },
    {
      id: "couple-fortune",
      title: "커플 사주 테스트",
      desc: "운명적 궁합을 알아보세요",
      icon: <Moon className="w-6 h-6 text-purple-400" />,
      color: "bg-purple-50",
    },
    {
      id: "lover-psychology",
      title: "연인 심리 테스트",
      desc: "연인과의 심리적 궁합은?",
      icon: <Sparkles className="w-6 h-6 text-violet-400" />,
      color: "bg-violet-50",
    },
    {
      id: "vaginal-health",
      title: "질 건강 자가 진단",
      desc: "여성 건강의 핵심을 체크하세요",
      icon: <Stethoscope className="w-6 h-6 text-red-400" />,
      color: "bg-red-50",
    },
    {
      id: "postpartum",
      title: "산후 회복 체크",
      desc: "출산 후 회복 상태를 확인해요",
      icon: <Baby className="w-6 h-6 text-teal-400" />,
      color: "bg-teal-50",
    },
    {
      id: "bodyline",
      title: "바디라인 고민 진단",
      desc: "나만의 바디 맞춤 솔루션은?",
      icon: <Dumbbell className="w-6 h-6 text-orange-400" />,
      color: "bg-orange-50",
    },
    {
      id: "skin-barrier",
      title: "피부 장벽 건강 테스트",
      desc: "민감한 피부 상태를 진단하세요",
      icon: <Shield className="w-6 h-6 text-sky-400" />,
      color: "bg-sky-50",
    },
    {
      id: "inner-beauty",
      title: "이너뷰티 점수 테스트",
      desc: "내면의 아름다움을 측정해요",
      icon: <Apple className="w-6 h-6 text-emerald-400" />,
      color: "bg-emerald-50",
    },
    {
      id: "hair-scalp",
      title: "여성 탈모·두피 상태 테스트",
      desc: "모발과 두피 컨디션을 점검해요",
      icon: <Sparkles className="w-6 h-6 text-lime-500" />,
      color: "bg-lime-50",
    },
    {
      id: "leg-circulation",
      title: "붓기·하체순환 테스트",
      desc: "다리 붓기와 순환 상태는?",
      icon: <Activity className="w-6 h-6 text-cyan-500" />,
      color: "bg-cyan-50",
    },
    {
      id: "diet-failure",
      title: "다이어트 실패 원인 테스트",
      desc: "감량을 막는 습관을 찾아요",
      icon: <Dumbbell className="w-6 h-6 text-fuchsia-500" />,
      color: "bg-fuchsia-50",
    },
    {
      id: "dark-spot-risk",
      title: "기미·잡티 위험도 테스트",
      desc: "색소 고민 가능성을 확인해요",
      icon: <Shield className="w-6 h-6 text-yellow-500" />,
      color: "bg-yellow-50",
    },
    {
      id: "sleep-stress",
      title: "수면·스트레스 회복력 테스트",
      desc: "회복 에너지 상태를 점검해요",
      icon: <Moon className="w-6 h-6 text-indigo-500" />,
      color: "bg-indigo-50",
    },
    {
      id: "pms-condition",
      title: "PMS·생리 전 컨디션 테스트",
      desc: "주기 전 불편함을 체크해요",
      icon: <Heart className="w-6 h-6 text-rose-500" />,
      color: "bg-rose-50",
    },
    {
      id: "gut-constipation",
      title: "장 건강·변비 타입 테스트",
      desc: "내 장 리듬과 타입은?",
      icon: <Apple className="w-6 h-6 text-green-500" />,
      color: "bg-green-50",
    },
  ];

  const bannerStyles = [
    { bg: "from-rose-400 to-pink-500", text: "text-rose-100", tag: "인기 급상승", icon: "🎁" },
    { bg: "from-purple-400 to-indigo-500", text: "text-purple-100", tag: "MD 추천", icon: "✨" },
    { bg: "from-amber-400 to-orange-500", text: "text-amber-100", tag: "금주의 혜택", icon: "💕" },
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

      {/* Test Cards */}
      <section className="space-y-6">
        <h2 className="text-xl font-bold flex items-center gap-2">
          오늘의 추천 테스트 <Sparkles className="w-5 h-5 text-amber-400 fill-amber-400" />
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {tests.map((test) => (
            <Link
              key={test.id}
              href={test.id === 'bmr' ? '/calculator' : `/test/${test.id}`}
              className="flex items-center p-6 rounded-2xl bg-white border border-secondary card-shadow hover:scale-[1.02] transition-transform h-full min-h-[120px]"
            >
              <div className={`p-4 rounded-xl ${test.color} mr-4 flex-shrink-0`}>{test.icon}</div>
              <div className="flex-1 min-w-0">
                <h3 className="font-bold text-gray-800 text-lg line-clamp-1">{test.title}</h3>
                <p className="text-sm text-gray-500 line-clamp-2">{test.desc}</p>
              </div>
              <ChevronRight className="w-5 h-5 text-gray-300 flex-shrink-0" />
            </Link>
          ))}
        </div>
      </section>

      {/* Banner Cards */}
      <section className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
        {randomMerchants.map((merchant, index) => {
          const style = bannerStyles[index % bannerStyles.length];
          return (
            <Link
              key={merchant.id}
              href={merchant.url}
              target="_blank"
              className={`block rounded-2xl bg-gradient-to-br ${style.bg} p-8 text-white relative overflow-hidden group h-full`}
            >
              <div className="relative z-10">
                <span className="text-white/80 text-xs font-bold bg-white/20 px-3 py-1 rounded-full mb-3 inline-block backdrop-blur-sm">
                  {style.tag}
                </span>
                <h3 className="font-bold text-2xl leading-tight">
                  {merchant.title}
                </h3>
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
            </Link>
          );
        })}
        {/* Skeleton loaders while loading random merchants */}
        {randomMerchants.length === 0 && Array(3).fill(0).map((_, i) => (
          <div key={i} className="h-[200px] rounded-2xl bg-gray-100 animate-pulse" />
        ))}
      </section>

      <DisclosureNotice className="mt-12" />
    </main>
  );
}


