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

function getQuestionScene(question: QuizQuestion, quizId: keyof typeof QUIZ_DATA) {
  const text = question.question;
  const iconName = getQuestionIconName(question, quizId);

  if (quizId === 'leg-circulation') return 'legs';
  if (quizId === 'diet-failure') return /운동|활동량|근력/.test(text) ? 'activity' : 'diet';
  if (quizId === 'hair-scalp') return 'hair';
  if (quizId === 'gut-constipation') return 'gut';
  if (quizId === 'bodyline') return 'bodyline';
  if (quizId === 'postpartum') return 'recovery';

  if (/얼굴|열|화끈|안면홍조|땀/.test(text) || iconName === 'Flame') return 'hot-flash';
  if (/잠|수면|피로|졸림|회복|깨어/.test(text) || iconName === 'Moon' || iconName === 'BatteryLow') return 'sleep';
  if (/기분|감정|불안|스트레스|예민|짜증/.test(text) || iconName === 'Brain') return 'mind';
  if (/분비물|수분|건조|물|땀|냄새|가려움/.test(text) || iconName === 'Droplets') return 'droplets';
  if (/주기|생리|PMS|월경|배란/.test(text) || iconName === 'Calendar') return 'cycle';
  if (/관절|근육|통증|운동|활동량|걷/.test(text) || iconName === 'Activity' || iconName === 'Dumbbell') return 'activity';
  if (/피부|주름|모공|탄력|장벽|기미|잡티|자외선|색소|트러블/.test(text) || quizId === 'skin-age' || quizId === 'skin-barrier' || quizId === 'dark-spot-risk') return 'skin';
  if (/머리|모발|두피|탈모|가르마|빠짐/.test(text)) return 'hair';
  if (/하체|다리|종아리|붓기|순환|부종/.test(text)) return 'legs';
  if (/식사|야식|간식|체중|다이어트|감량|폭식|카페인/.test(text)) return 'diet';
  if (/배변|장|변비|복부|가스|화장실/.test(text)) return 'gut';
  if (/연인|커플|사랑|관계|궁합|만났|연락|데이트|파트너|섹스|스킨십/.test(text) || quizId === 'chemistry' || quizId === 'love-type' || quizId === 'couple-fortune' || quizId === 'lover-psychology') return 'relationship';

  return 'wellness';
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

function SceneArt({ scene, iconName }: { scene: string; iconName: string }) {
  switch (scene) {
    case 'hot-flash':
      return (
        <>
          <div className="absolute left-12 top-11 h-28 w-24 rounded-[3rem] bg-white/90 shadow-sm">
            <div className="absolute left-5 top-9 h-3 w-3 rounded-full bg-gray-700" />
            <div className="absolute right-5 top-9 h-3 w-3 rounded-full bg-gray-700" />
            <div className="absolute left-4 top-14 h-6 w-6 rounded-full bg-primary/35" />
            <div className="absolute right-4 top-14 h-6 w-6 rounded-full bg-primary/35" />
            <div className="absolute left-9 top-20 h-1.5 w-7 rounded-full bg-gray-700/60" />
          </div>
          <div className="absolute right-16 top-11 flex h-24 w-24 items-center justify-center rounded-full bg-white/85 shadow-sm">
            <Flame className="h-14 w-14 text-primary" strokeWidth={1.8} />
          </div>
          <div className="absolute right-10 top-24 h-12 w-2 rounded-full bg-primary/25" />
          <div className="absolute right-28 top-28 h-10 w-2 rounded-full bg-primary/20" />
        </>
      );
    case 'sleep':
      return (
        <>
          <div className="absolute left-10 bottom-12 h-20 w-56 rounded-3xl bg-white/85 shadow-sm" />
          <div className="absolute left-12 bottom-20 h-16 w-20 rounded-2xl bg-primary/15" />
          <div className="absolute left-28 bottom-20 h-6 w-32 rounded-full bg-white" />
          <Moon className="absolute right-16 top-10 h-16 w-16 text-indigo-400" strokeWidth={1.8} />
          <div className="absolute right-24 top-28 h-3 w-20 rounded-full bg-indigo-100" />
        </>
      );
    case 'mind':
      return (
        <>
          <div className="absolute left-12 top-11 h-28 w-28 rounded-[2.5rem] bg-white/85 shadow-sm" />
          <Brain className="absolute left-20 top-20 h-16 w-16 text-primary" strokeWidth={1.7} />
          <div className="absolute right-16 top-12 h-16 w-36 rounded-3xl bg-white/75 shadow-sm" />
          <div className="absolute right-20 top-32 h-4 w-28 rounded-full bg-primary/20" />
          <div className="absolute right-28 top-40 h-4 w-16 rounded-full bg-white/80" />
        </>
      );
    case 'droplets':
      return (
        <>
          <div className="absolute left-12 top-10 h-32 w-28 rounded-[2rem] bg-white/85 shadow-sm" />
          <Droplets className="absolute left-20 top-22 h-16 w-16 text-sky-400" strokeWidth={1.7} />
          <div className="absolute right-14 top-11 h-28 w-24 rounded-[2rem] border border-sky-100 bg-sky-50/80" />
          <div className="absolute right-24 top-20 h-16 w-3 rounded-full bg-sky-300/50" />
          <div className="absolute right-18 top-30 h-10 w-3 rounded-full bg-sky-300/35" />
        </>
      );
    case 'cycle':
      return (
        <>
          <div className="absolute left-12 top-10 h-32 w-32 rounded-[2rem] bg-white/85 shadow-sm" />
          <Calendar className="absolute left-20 top-18 h-16 w-16 text-primary" strokeWidth={1.8} />
          <div className="absolute right-16 top-12 grid grid-cols-3 gap-2 rounded-2xl bg-white/70 p-4 shadow-sm">
            {[0, 1, 2, 3, 4, 5].map((item) => (
              <span key={item} className={`h-8 w-8 rounded-xl ${item === 3 ? 'bg-primary/35' : 'bg-white/90'}`} />
            ))}
          </div>
        </>
      );
    case 'activity':
      return (
        <>
          <div className="absolute left-12 top-11 h-32 w-28 rounded-[2rem] bg-white/85 shadow-sm" />
          <Activity className="absolute left-20 top-23 h-16 w-16 text-emerald-500" strokeWidth={1.8} />
          <div className="absolute right-14 top-14 h-24 w-24 rounded-full border-[10px] border-emerald-100" />
          <Dumbbell className="absolute right-21 top-28 h-14 w-14 text-primary" strokeWidth={1.8} />
        </>
      );
    case 'skin':
      return (
        <>
          <div className="absolute left-12 top-10 h-32 w-28 rounded-[2rem] bg-white/90 shadow-sm">
            <div className="absolute left-7 top-10 h-2.5 w-2.5 rounded-full bg-amber-300" />
            <div className="absolute right-7 top-14 h-2 w-2 rounded-full bg-rose-300" />
            <div className="absolute left-8 top-24 h-1.5 w-14 rounded-full bg-primary/30" />
          </div>
          <Shield className="absolute right-22 top-14 h-20 w-20 text-primary" strokeWidth={1.6} />
          <Sparkles className="absolute right-14 top-30 h-12 w-12 text-amber-400" strokeWidth={1.7} />
        </>
      );
    case 'hair':
      return (
        <>
          <div className="absolute left-12 top-12 h-28 w-28 rounded-[3rem] bg-white/90 shadow-sm" />
          <div className="absolute left-17 top-8 h-16 w-18 rounded-t-full bg-gray-700/80" />
          <div className="absolute left-23 top-13 h-24 w-1.5 rounded-full bg-white/70" />
          <Sparkles className="absolute right-18 top-14 h-20 w-20 text-primary" strokeWidth={1.7} />
          <div className="absolute right-13 top-33 h-3 w-28 rounded-full bg-primary/20" />
        </>
      );
    case 'legs':
      return (
        <svg className="absolute inset-0 h-full w-full" viewBox="0 0 720 224" role="img">
          <ellipse cx="360" cy="184" rx="250" ry="18" fill="rgba(255,255,255,0.55)" />
          <rect x="155" y="42" width="58" height="116" rx="29" fill="white" opacity="0.92" />
          <rect x="230" y="42" width="58" height="116" rx="29" fill="white" opacity="0.92" />
          <ellipse cx="180" cy="160" rx="44" ry="18" fill="rgba(255,138,128,0.2)" />
          <ellipse cx="258" cy="160" rx="44" ry="18" fill="rgba(255,138,128,0.2)" />
          <path d="M420 70c50-42 118-18 122 40 3 45-40 69-82 50" fill="none" stroke="#67e8f9" strokeWidth="12" strokeLinecap="round" />
          <path d="M452 58l-36 10 13 34" fill="none" stroke="#67e8f9" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M456 143c-18-5-35-15-48-32" fill="none" stroke="#ff8a80" strokeWidth="8" strokeLinecap="round" />
          <circle cx="500" cy="107" r="8" fill="#ff8a80" opacity="0.7" />
          <circle cx="525" cy="128" r="6" fill="#ff8a80" opacity="0.45" />
        </svg>
      );
    case 'diet':
      return (
        <svg className="absolute inset-0 h-full w-full" viewBox="0 0 720 224" role="img">
          <ellipse cx="360" cy="184" rx="250" ry="18" fill="rgba(255,255,255,0.55)" />
          <circle cx="210" cy="112" r="62" fill="white" opacity="0.92" />
          <circle cx="210" cy="112" r="42" fill="#ecfdf5" />
          <ellipse cx="195" cy="112" rx="20" ry="13" fill="#86efac" />
          <ellipse cx="225" cy="105" rx="18" ry="12" fill="#fdba74" />
          <ellipse cx="230" cy="128" rx="24" ry="10" fill="#fda4af" opacity="0.75" />
          <path d="M112 70v84M100 70v28M112 70v28M124 70v28" stroke="#94a3b8" strokeWidth="7" strokeLinecap="round" />
          <path d="M302 72v82" stroke="#94a3b8" strokeWidth="9" strokeLinecap="round" />
          <path d="M302 72c23 12 23 42 0 56" fill="none" stroke="#94a3b8" strokeWidth="7" strokeLinecap="round" />
          <circle cx="505" cy="104" r="54" fill="white" opacity="0.9" />
          <circle cx="505" cy="104" r="36" fill="none" stroke="#ff8a80" strokeWidth="8" />
          <path d="M505 82v25l22 12" stroke="#ff8a80" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M456 166h98" stroke="rgba(255,255,255,0.9)" strokeWidth="12" strokeLinecap="round" />
        </svg>
      );
    case 'gut':
      return (
        <>
          <div className="absolute left-12 top-10 h-32 w-32 rounded-[2.5rem] bg-white/90 shadow-sm" />
          <div className="absolute left-22 top-21 h-16 w-16 rounded-[2rem] border-[8px] border-orange-200" />
          <div className="absolute left-29 top-28 h-8 w-8 rounded-full border-[6px] border-primary/50" />
          <Droplets className="absolute right-17 top-16 h-18 w-18 text-sky-400" strokeWidth={1.7} />
          <div className="absolute right-14 top-36 h-3 w-32 rounded-full bg-green-100" />
        </>
      );
    case 'relationship':
      return (
        <>
          <div className="absolute left-12 top-12 h-24 w-24 rounded-[2rem] bg-white/85 shadow-sm" />
          <div className="absolute right-12 top-12 h-24 w-24 rounded-[2rem] bg-white/85 shadow-sm" />
          <Heart className="absolute left-1/2 top-20 h-18 w-18 -translate-x-1/2 text-primary" strokeWidth={1.8} />
          <div className="absolute left-20 bottom-12 h-3 w-44 rounded-full bg-primary/20" />
          <div className="absolute right-20 bottom-18 h-3 w-32 rounded-full bg-white/80" />
        </>
      );
    case 'bodyline':
      return (
        <>
          <div className="absolute left-18 top-8 h-36 w-24 rounded-[3rem] border-[10px] border-white/90 bg-lime-50 shadow-sm" />
          <div className="absolute left-24 top-20 h-22 w-12 rounded-full bg-primary/20" />
          <Activity className="absolute right-18 top-18 h-18 w-18 text-lime-500" strokeWidth={1.8} />
          <div className="absolute right-14 top-37 h-4 w-28 rounded-full bg-white/75" />
        </>
      );
    case 'recovery':
      return (
        <>
          <div className="absolute left-12 top-12 h-28 w-28 rounded-[2.5rem] bg-white/90 shadow-sm" />
          <HeartPulse className="absolute left-20 top-22 h-16 w-16 text-primary" strokeWidth={1.7} />
          <div className="absolute right-14 top-12 h-28 w-28 rounded-full bg-rose-100/60" />
          <Sparkles className="absolute right-22 top-23 h-14 w-14 text-amber-400" strokeWidth={1.7} />
        </>
      );
    default:
      return (
        <>
          <div className="absolute left-12 top-11 h-28 w-32 rounded-[2rem] bg-white/85 shadow-sm" />
          <QuestionIcon name={iconName} />
          <div className="absolute right-14 top-14 h-24 w-24 rounded-full bg-white/80 shadow-sm" />
        </>
      );
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
  const scene = getQuestionScene(question, quizId);
  const accent = quizAccentMap[quizId] || 'from-rose-50 via-pink-50 to-orange-50';

  return (
    <div
      className={`relative h-48 sm:h-56 overflow-hidden rounded-3xl border border-rose-100 bg-gradient-to-br ${accent} card-shadow`}
      aria-hidden="true"
    >
      <div className="absolute inset-x-8 bottom-8 h-8 rounded-full bg-white/50 blur-md" />
      <SceneArt scene={scene} iconName={iconName} />

      <div className={`absolute ${step % 2 === 0 ? 'right-8' : 'left-8'} bottom-6 grid grid-cols-4 gap-2`}>
        {[0, 1, 2, 3].map((item) => (
          <span
            key={item}
            className={`h-4 w-4 rounded-full border border-white/80 bg-white/70 ${item === step % 4 ? 'bg-primary/45' : ''}`}
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
