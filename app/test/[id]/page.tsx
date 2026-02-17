'use client';

import { useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { QUIZ_DATA } from '@/constants/quizzes';
import { ChevronLeft, ArrowRight, CheckCircle2 } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function QuizPage() {
  const params = useParams();
  const router = useRouter();
  const quizId = params.id as keyof typeof QUIZ_DATA;
  const quiz = QUIZ_DATA[quizId];

  const [currentStep, setCurrentStep] = useState(0);
  const [totalScore, setTotalScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  if (!quiz) return <div>페이지를 찾을 수 없습니다.</div>;

  const handleOptionClick = (score: number) => {
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
          </div>

          <div className="bg-white rounded-3xl p-8 border border-secondary card-shadow space-y-6">
            <p className="text-gray-600 leading-relaxed text-lg">
              {result.content}
            </p>
            
            <div className="bg-pink-50 rounded-2xl p-5 border border-pink-100">
              <h3 className="font-bold text-primary flex items-center gap-2 mb-2">
                <CheckCircle2 className="w-5 h-5" /> 추천 관리 팁
              </h3>
              <p className="text-sm text-gray-700">{result.recommendation}</p>
            </div>
          </div>

          {/* CPA Product Recommendation */}
          <div className="bg-gradient-to-br from-rose-50 to-amber-50 rounded-3xl p-8 border border-rose-100 space-y-4">
            <span className="text-xs font-bold text-rose-500 uppercase tracking-wider">Solution for you</span>
            <div>
              <h3 className="text-xl font-bold text-gray-800">{result.product.name}</h3>
              <p className="text-gray-500 text-sm">{result.product.desc}</p>
            </div>
            <button className="w-full bg-primary text-white font-bold py-4 rounded-2xl shadow-lg shadow-rose-200 flex items-center justify-center gap-2 hover:bg-rose-600 transition-colors">
              {result.product.cta} <ArrowRight className="w-5 h-5" />
            </button>
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

  return (
    <main className="max-w-3xl mx-auto min-h-screen bg-background">
      <div className="p-6">
        <button onClick={() => router.back()} className="p-2 -ml-2 text-gray-400">
          <ChevronLeft className="w-6 h-6" />
        </button>

        <div className="mt-6 space-y-2">
          <div className="w-full h-2 bg-secondary rounded-full overflow-hidden">
            <motion.div 
              className="h-full bg-primary" 
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
            />
          </div>
          <p className="text-xs text-right text-gray-400 font-medium">
            {currentStep + 1} / {quiz.questions.length}
          </p>
        </div>

        <div className="mt-12">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentStep}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-10"
            >
              <h2 className="text-2xl font-bold text-gray-800 leading-tight">
                {currentQuestion.question}
              </h2>

              <div className="space-y-4">
                {currentQuestion.options.map((option, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleOptionClick(option.score)}
                    className="w-full text-left p-5 rounded-2xl bg-white border border-secondary hover:border-primary hover:bg-rose-50 transition-all text-gray-700 font-medium shadow-sm active:scale-95"
                  >
                    {option.text}
                  </button>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </main>
  );
}
