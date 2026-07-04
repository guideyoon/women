'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { QUIZ_DATA } from '@/constants/quizzes';
import {
  Accessibility,
  Activity,
  ArrowRight,
  BatteryLow,
  Brain,
  Calendar,
  CheckCircle2,
  Droplets,
  Dumbbell,
  Flame,
  Heart,
  HeartPulse,
  Moon,
  Shield,
  Sparkles,
  Wind,
} from 'lucide-react';
import DisclosureNotice from '@/components/DisclosureNotice';

type Quiz = (typeof QUIZ_DATA)[keyof typeof QUIZ_DATA];
type QuizQuestion = Quiz['questions'][number];
type QuizOption = QuizQuestion['options'][number];

type QuizClientProps = {
  quizId: keyof typeof QUIZ_DATA;
  title: string;
  description: string;
};

const iconNames = new Set([
  'Accessibility',
  'Activity',
  'BatteryLow',
  'Brain',
  'Calendar',
  'Droplets',
  'Dumbbell',
  'Flame',
  'Heart',
  'HeartPulse',
  'Moon',
  'Shield',
  'Sparkles',
  'Wind',
]);

const quizIconMap: Partial<Record<keyof typeof QUIZ_DATA, string>> = {
  chemistry: 'Heart',
  'love-type': 'Heart',
  'couple-fortune': 'Sparkles',
  'lover-psychology': 'Brain',
  bodyline: 'Activity',
  'skin-age': 'Sparkles',
  'skin-barrier': 'Shield',
  'inner-beauty': 'Sparkles',
  'hair-scalp': 'Sparkles',
  'leg-circulation': 'Activity',
  'diet-failure': 'Dumbbell',
  'dark-spot-risk': 'Shield',
  'gut-constipation': 'Activity',
};

const quizAccentMap: Partial<Record<keyof typeof QUIZ_DATA, string>> = {
  chemistry: 'from-rose-50 via-pink-50 to-orange-50',
  'love-type': 'from-rose-50 via-pink-50 to-red-50',
  'couple-fortune': 'from-violet-50 via-rose-50 to-amber-50',
  'lover-psychology': 'from-fuchsia-50 via-rose-50 to-orange-50',
  'skin-age': 'from-pink-50 via-rose-50 to-orange-50',
  'skin-barrier': 'from-sky-50 via-rose-50 to-pink-50',
  bodyline: 'from-lime-50 via-rose-50 to-orange-50',
  'leg-circulation': 'from-cyan-50 via-rose-50 to-pink-50',
  'diet-failure': 'from-emerald-50 via-rose-50 to-orange-50',
  'dark-spot-risk': 'from-amber-50 via-rose-50 to-pink-50',
  'sleep-stress': 'from-indigo-50 via-rose-50 to-slate-50',
  'gut-constipation': 'from-green-50 via-rose-50 to-orange-50',
};

function getQuestionIconName(question: QuizQuestion, quizId: keyof typeof QUIZ_DATA) {
  const iconName = 'icon' in question ? question.icon : undefined;
  const normalizedIconName = iconName ? String(iconName) : '';
  return iconNames.has(normalizedIconName)
    ? normalizedIconName
    : quizIconMap[quizId] || 'HeartPulse';
}

function QuestionIcon({ name }: { name: string }) {
  const className = "h-16 w-16 text-primary";
  const strokeWidth = 1.7;

  switch (name) {
    case 'Accessibility':
      return <Accessibility className={className} strokeWidth={strokeWidth} />;
    case 'Activity':
      return <Activity className={className} strokeWidth={strokeWidth} />;
    case 'BatteryLow':
      return <BatteryLow className={className} strokeWidth={strokeWidth} />;
    case 'Brain':
      return <Brain className={className} strokeWidth={strokeWidth} />;
    case 'Calendar':
      return <Calendar className={className} strokeWidth={strokeWidth} />;
    case 'Droplets':
      return <Droplets className={className} strokeWidth={strokeWidth} />;
    case 'Dumbbell':
      return <Dumbbell className={className} strokeWidth={strokeWidth} />;
    case 'Flame':
      return <Flame className={className} strokeWidth={strokeWidth} />;
    case 'Heart':
      return <Heart className={className} strokeWidth={strokeWidth} />;
    case 'Moon':
      return <Moon className={className} strokeWidth={strokeWidth} />;
    case 'Shield':
      return <Shield className={className} strokeWidth={strokeWidth} />;
    case 'Sparkles':
      return <Sparkles className={className} strokeWidth={strokeWidth} />;
    case 'Wind':
      return <Wind className={className} strokeWidth={strokeWidth} />;
    default:
      return <HeartPulse className={className} strokeWidth={strokeWidth} />;
  }
}

function QuestionIllustration({
  question,
  quizId,
  step,
}: {
  question: QuizQuestion;
  quizId: keyof typeof QUIZ_DATA;
  step: number;
}) {
  const iconName = getQuestionIconName(question, quizId);
  const accent = quizAccentMap[quizId] || 'from-rose-50 via-pink-50 to-orange-50';
  const figureOffset = step % 2 === 0 ? 'right-8' : 'left-8';
  const panelOffset = step % 2 === 0 ? 'left-8' : 'right-8';

  return (
    <div
      className={`relative h-48 sm:h-56 overflow-hidden rounded-3xl border border-rose-100 bg-gradient-to-br ${accent} card-shadow`}
      aria-hidden="true"
    >
      <div className={`absolute top-8 ${panelOffset} h-28 w-36 rounded-2xl border border-white/80 bg-white/70 shadow-sm`} />
      <div className={`absolute bottom-7 ${panelOffset} h-4 w-48 rounded-full bg-white/70`} />
      <div className={`absolute bottom-14 ${panelOffset} h-4 w-28 rounded-full bg-primary/20`} />

      <div className={`absolute top-8 ${figureOffset} flex h-32 w-32 items-center justify-center rounded-[2rem] border border-white/80 bg-white/85 shadow-sm`}>
        <QuestionIcon name={iconName} />
      </div>

      <div className="absolute left-1/2 top-7 h-8 w-20 -translate-x-1/2 rounded-full bg-white/70" />
      <div className="absolute left-1/2 top-20 h-3 w-40 -translate-x-1/2 rounded-full bg-white/60" />
      <div className="absolute left-1/2 top-28 h-3 w-28 -translate-x-1/2 rounded-full bg-primary/20" />

      <div className="absolute bottom-6 left-1/2 grid -translate-x-1/2 grid-cols-4 gap-2">
        {[0, 1, 2, 3].map((item) => (
          <span
            key={item}
            className={`h-8 w-8 rounded-xl border border-white/80 bg-white/70 ${item === step % 4 ? 'bg-primary/25' : ''}`}
          />
        ))}
      </div>
    </div>
  );
}

export default function QuizClient({ quizId, title, description }: QuizClientProps) {
  const router = useRouter();
  const quiz = QUIZ_DATA[quizId];

  const [currentStep, setCurrentStep] = useState(0);
  const [totalScore, setTotalScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  const handleAnswer = (score: number) => {
    const nextScore = totalScore + score;
    setTotalScore(nextScore);

    if (currentStep < quiz.questions.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setIsFinished(true);
    }
  };

  const result = quiz.results.find(
    (r) => totalScore >= r.minScore && totalScore <= r.maxScore
  ) || quiz.results[0];

  if (isFinished) {
    return (
      <main className="max-w-3xl mx-auto min-h-screen bg-background p-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="pt-10 space-y-8"
        >
          <div className="text-center space-y-2">
            <span className="text-primary font-bold">진단 결과</span>
            <h1 className="text-3xl font-extrabold text-gray-800">{result.title}</h1>
            <p className="text-lg font-bold text-gray-500">내 점수: {totalScore}점</p>
          </div>

          <div className="bg-white rounded-3xl p-8 border border-secondary card-shadow space-y-6">
            <p className="text-gray-600 leading-relaxed text-lg">
              {result.content}
            </p>

            <div className="bg-pink-50 rounded-2xl p-5 border border-pink-100">
              <h3 className="font-bold text-primary flex items-center gap-2 mb-2">
                <CheckCircle2 className="w-5 h-5" /> 추천 관리 팁
              </h3>
              <p className="text-sm text-gray-700 whitespace-pre-line">{result.recommendation}</p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-rose-50 to-amber-50 rounded-3xl p-8 border border-rose-100 space-y-4">
            <span className="text-xs font-bold text-rose-500 uppercase tracking-wider">Solution for you</span>
            <div>
              <h3 className="text-xl font-bold text-gray-800">{result.product.name}</h3>
              <p className="text-gray-500 text-sm">{result.product.desc}</p>
            </div>
            <a
              href={result.product.url}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-primary text-white font-bold py-4 rounded-2xl shadow-lg shadow-rose-200 flex items-center justify-center gap-2 hover:bg-rose-600 transition-colors"
            >
              {result.product.cta} <ArrowRight className="w-5 h-5" />
            </a>
          </div>

          <button
            onClick={() => router.push('/')}
            className="w-full text-gray-400 font-medium py-4"
          >
            처음으로 돌아가기
          </button>

          <DisclosureNotice compact />
        </motion.div>
      </main>
    );
  }

  const currentQuestion: QuizQuestion = quiz.questions[currentStep];
  const progress = ((currentStep + 1) / quiz.questions.length) * 100;

  return (
    <main className="max-w-3xl mx-auto min-h-screen bg-background p-6">
      <motion.div
        key={currentStep}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -20 }}
        className="pt-10 space-y-8"
      >
        <header className="space-y-3">
          <p className="text-sm font-bold text-primary">미즈 밸런스 자가진단</p>
          <h1 className="text-3xl font-extrabold text-gray-800 leading-tight">{title}</h1>
          <p className="text-gray-500 leading-relaxed">{description}</p>
        </header>

        <div className="space-y-4">
          <div className="flex justify-end items-end gap-1">
            <span className="text-primary font-bold text-2xl">{currentStep + 1}</span>
            <span className="text-gray-400 font-medium text-lg">/ {quiz.questions.length}</span>
          </div>
          <div className="h-2 bg-secondary rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-primary"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
            />
          </div>
        </div>

        <div className="space-y-6">
          <QuestionIllustration
            question={currentQuestion}
            quizId={quizId}
            step={currentStep}
          />

          <h2 className="text-2xl font-bold text-gray-800 leading-tight">
            {currentQuestion.question}
          </h2>

          <div className="grid gap-3">
            {currentQuestion.options.map((option: QuizOption, index: number) => (
              <button
                key={index}
                onClick={() => handleAnswer(option.score)}
                className="w-full p-5 text-left rounded-2xl border border-secondary hover:border-primary hover:bg-rose-50 transition-all group relative overflow-hidden bg-white card-shadow"
              >
                <span className="relative z-10 font-medium text-gray-700 group-hover:text-primary">
                  {option.text}
                </span>
              </button>
            ))}
          </div>
        </div>
      </motion.div>
    </main>
  );
}
