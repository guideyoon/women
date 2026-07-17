import type { Metadata } from 'next';
import CalculatorClient from './CalculatorClient';

export const metadata: Metadata = {
  title: '기초대사량 계산기',
  description: '나이, 신장, 체중을 입력해 여성의 기초대사량(BMR)을 간편하게 계산해 보세요.',
  alternates: {
    canonical: '/calculator',
  },
  openGraph: {
    title: '기초대사량 계산기 | 미즈 밸런스',
    description: '나이, 신장, 체중을 기준으로 하루 최소 필요 에너지를 계산해 보세요.',
    url: '/calculator',
    type: 'website',
    locale: 'ko_KR',
  },
};

export default function CalculatorPage() {
  return <CalculatorClient />;
}
