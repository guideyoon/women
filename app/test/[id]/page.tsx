import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { QUIZ_DATA } from '@/constants/quizzes';
import { TEST_LINKS } from '@/constants/testLinks';
import QuizClient from './QuizClient';

type TestPageProps = {
  params: Promise<{
    id: string;
  }>;
};

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;

export function generateStaticParams() {
  return TEST_LINKS.map((test) => ({
    id: test.id,
  }));
}

export async function generateMetadata({ params }: TestPageProps): Promise<Metadata> {
  const { id } = await params;
  const test = TEST_LINKS.find((item) => item.id === id);

  if (!test) {
    return {
      title: '테스트를 찾을 수 없습니다 | 미즈 밸런스',
    };
  }

  const url = `/test/${test.id}`;
  const title = `${test.title} | 미즈 밸런스`;

  return {
    ...(siteUrl ? { metadataBase: new URL(siteUrl) } : {}),
    title,
    description: test.description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description: test.description,
      url,
      siteName: '미즈 밸런스',
      type: 'website',
      locale: 'ko_KR',
    },
    twitter: {
      card: 'summary',
      title,
      description: test.description,
    },
  };
}

export default async function QuizPage({ params }: TestPageProps) {
  const { id } = await params;

  if (!(id in QUIZ_DATA)) {
    notFound();
  }

  return <QuizClient quizId={id as keyof typeof QUIZ_DATA} />;
}
