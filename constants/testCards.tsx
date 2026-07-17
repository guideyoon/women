import type { ReactNode } from 'react';
import {
  Activity,
  Apple,
  Baby,
  Calculator,
  Dumbbell,
  Heart,
  HeartHandshake,
  Moon,
  Shield,
  Sparkles,
  Stethoscope,
} from 'lucide-react';
import { TEST_LINKS, type TestId } from './testLinks';

type TestVisual = {
  icon: ReactNode;
  color: string;
};

const TEST_VISUALS: Record<TestId, TestVisual> = {
  menopause: {
    icon: <Activity className="w-6 h-6 text-primary" />,
    color: 'bg-pink-50',
  },
  'skin-age': {
    icon: <Sparkles className="w-6 h-6 text-amber-400" />,
    color: 'bg-amber-50',
  },
  chemistry: {
    icon: <HeartHandshake className="w-6 h-6 text-rose-400" />,
    color: 'bg-rose-50',
  },
  'love-type': {
    icon: <Heart className="w-6 h-6 text-pink-400" />,
    color: 'bg-pink-50',
  },
  'couple-fortune': {
    icon: <Moon className="w-6 h-6 text-purple-400" />,
    color: 'bg-purple-50',
  },
  'lover-psychology': {
    icon: <Sparkles className="w-6 h-6 text-violet-400" />,
    color: 'bg-violet-50',
  },
  'vaginal-health': {
    icon: <Stethoscope className="w-6 h-6 text-red-400" />,
    color: 'bg-red-50',
  },
  postpartum: {
    icon: <Baby className="w-6 h-6 text-teal-400" />,
    color: 'bg-teal-50',
  },
  bodyline: {
    icon: <Dumbbell className="w-6 h-6 text-orange-400" />,
    color: 'bg-orange-50',
  },
  'skin-barrier': {
    icon: <Shield className="w-6 h-6 text-sky-400" />,
    color: 'bg-sky-50',
  },
  'inner-beauty': {
    icon: <Apple className="w-6 h-6 text-emerald-400" />,
    color: 'bg-emerald-50',
  },
  'hair-scalp': {
    icon: <Sparkles className="w-6 h-6 text-lime-500" />,
    color: 'bg-lime-50',
  },
  'leg-circulation': {
    icon: <Activity className="w-6 h-6 text-cyan-500" />,
    color: 'bg-cyan-50',
  },
  'diet-failure': {
    icon: <Dumbbell className="w-6 h-6 text-fuchsia-500" />,
    color: 'bg-fuchsia-50',
  },
  'dark-spot-risk': {
    icon: <Shield className="w-6 h-6 text-yellow-500" />,
    color: 'bg-yellow-50',
  },
  'sleep-stress': {
    icon: <Moon className="w-6 h-6 text-indigo-500" />,
    color: 'bg-indigo-50',
  },
  'pms-condition': {
    icon: <Heart className="w-6 h-6 text-rose-500" />,
    color: 'bg-rose-50',
  },
  'gut-constipation': {
    icon: <Apple className="w-6 h-6 text-green-500" />,
    color: 'bg-green-50',
  },
};

const quizCards = TEST_LINKS.map((test) => ({
  id: test.id,
  title: test.title,
  desc: test.description,
  href: `/test/${test.id}`,
  ...TEST_VISUALS[test.id],
}));

const bmrCard = {
  id: 'bmr',
  title: '기초대사량 계산기',
  desc: '나이, 신장, 체중으로 하루 최소 필요 에너지를 계산해요',
  href: '/calculator',
  icon: <Calculator className="w-6 h-6 text-blue-400" />,
  color: 'bg-blue-50',
};

export const HOME_TEST_CARDS = [
  ...quizCards.slice(0, 2),
  bmrCard,
  ...quizCards.slice(2),
];
