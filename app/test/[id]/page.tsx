import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { QUIZ_DATA } from '@/constants/quizzes';
import { TEST_LINKS } from '@/constants/testLinks';
import { absoluteUrl, SITE_NAME, SITE_URL } from '@/constants/site';
import QuizClient from './QuizClient';

type TestPageProps = {
  params: Promise<{
    id: string;
  }>;
};

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
  const title = test.title;
  const socialTitle = `${test.title} | ${SITE_NAME}`;

  return {
    metadataBase: new URL(SITE_URL),
    title,
    description: test.description,
    keywords: [...test.keywords],
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: socialTitle,
      description: test.description,
      url,
      siteName: SITE_NAME,
      type: 'website',
      locale: 'ko_KR',
    },
    twitter: {
      card: 'summary',
      title: socialTitle,
      description: test.description,
    },
  };
}

export default async function QuizPage({ params }: TestPageProps) {
  const { id } = await params;
  const test = TEST_LINKS.find((item) => item.id === id);

  if (!(id in QUIZ_DATA) || !test) {
    notFound();
  }

  return (
    <>
      <QuizClient
        quizId={id as keyof typeof QUIZ_DATA}
        title={test.title}
        description={test.description}
      />
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: test.title,
            description: test.description,
            url: absoluteUrl(`/test/${test.id}`),
            isPartOf: {
              "@type": "WebSite",
              name: SITE_NAME,
              url: SITE_URL,
            },
            keywords: test.keywords.join(", "),
          }),
        }}
      />
    </>
  );
}
