import type { Metadata } from 'next';
import FortuneClient from './FortuneClient';

export const metadata: Metadata = {
  title: '오늘의 운세',
  description: '버튼을 눌러 오늘 나를 위한 짧은 행운 메시지를 확인해 보세요.',
  alternates: {
    canonical: '/fortune',
  },
  openGraph: {
    title: '오늘의 운세 | 미즈 밸런스',
    description: '오늘 나를 기다리는 짧은 행운 메시지를 확인해 보세요.',
    url: '/fortune',
    type: 'website',
    locale: 'ko_KR',
  },
};

export default function FortunePage() {
  return <FortuneClient />;
}
