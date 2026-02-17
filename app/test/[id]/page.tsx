'use client';

import { useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { QUIZ_DATA } from '@/constants/quizzes';
import { ChevronLeft, ArrowRight, CheckCircle2, ArrowLeft, Clock, Info, Flame, Moon, Droplets, HeartPulse, Wind, Brain, Accessibility, Sparkles, BatteryLow, Calendar } from 'lucide-react';
import { cn } from '@/lib/utils';

const IconMap: Record<string, any> = {
  Flame,
  Moon,
  Droplets,
  HeartPulse,
  Wind,
  Brain,
  Accessibility,
  Sparkles,
  BatteryLow,
  Calendar,
};

export default function QuizPage() {
  const params = useParams();
  const router = useRouter();
  const quizId = params.id as keyof typeof QUIZ_DATA;
  const quiz = QUIZ_DATA[quizId];

  const [currentStep, setCurrentStep] = useState(0);
  const [totalScore, setTotalScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  if (!quiz) return <div>페이지를 찾을 수 없습니다.</div>;

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

          {/* CPA Product Recommendation */}
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
        </motion.div>
      </main>
    );
  }

  const currentQuestion = quiz.questions[currentStep];
  const progress = ((currentStep + 1) / quiz.questions.length) * 100;
  const QuestionIcon = currentQuestion.icon ? IconMap[currentQuestion.icon] : null;

  return (
    <main className="max-w-3xl mx-auto min-h-screen bg-background p-6">
      <motion.div
        key={currentStep}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -20 }}
        className="pt-10 space-y-8"
      >
        {/* Progress */}
        <div className="space-y-4">
          <div className="flex justify-between items-end">
            <span className="text-primary font-bold text-2xl">0{currentStep + 1}</span>
            <span className="text-gray-400 font-medium">/ 0{quiz.questions.length}</span>
          </div>
          <div className="h-2 bg-secondary rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-primary"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Dynamic Icon/Illustration */}
        {QuestionIcon && (
          <div className="flex justify-center py-4">
            <div className="w-32 h-32 bg-primary/5 rounded-full flex items-center justify-center border border-primary/10 shadow-inner">
              <QuestionIcon className="w-16 h-16 text-primary" strokeWidth={1.5} />
            </div>
          </div>
        )}

        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-gray-800 leading-tight">
            {currentQuestion.question}
          </h2>

          <div className="grid gap-3">
            {currentQuestion.options.map((option: any, index: number) => (
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
