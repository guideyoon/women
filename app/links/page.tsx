'use client';

import { useState, useSyncExternalStore } from 'react';
import Link from 'next/link';
import { Check, Copy, ExternalLink } from 'lucide-react';
import { TEST_LINKS } from '@/constants/testLinks';

export default function LinksPage() {
  const origin = useSyncExternalStore(
    () => () => {},
    () => window.location.origin,
    () => ''
  );
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const copyUrl = async (id: string) => {
    const url = `${origin}/test/${id}`;
    await navigator.clipboard.writeText(url);
    setCopiedId(id);
    window.setTimeout(() => setCopiedId(null), 1500);
  };

  return (
    <main className="max-w-5xl mx-auto min-h-screen px-4 sm:px-6 lg:px-8 py-10">
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">테스트별 공유 링크</h1>
        <p className="mt-2 text-gray-500">
          SNS 게시물과 CPA 승인 자료에 사용할 수 있는 테스트별 직접 접속 링크입니다.
        </p>
      </header>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {TEST_LINKS.map((test) => {
          const url = `${origin || ''}/test/${test.id}`;
          const isCopied = copiedId === test.id;

          return (
            <article
              key={test.id}
              className="bg-white border border-secondary rounded-2xl p-5 card-shadow"
            >
              <div className="space-y-1">
                <h2 className="text-lg font-bold text-gray-800">{test.title}</h2>
                <p className="text-sm text-gray-500">{test.description}</p>
              </div>

              <div className="mt-4 rounded-xl bg-gray-50 border border-gray-100 px-3 py-2 text-sm text-gray-600 break-all">
                {url || `/test/${test.id}`}
              </div>

              <div className="mt-4 flex gap-2">
                <button
                  type="button"
                  onClick={() => copyUrl(test.id)}
                  disabled={!origin}
                  className="inline-flex items-center gap-2 rounded-xl bg-primary px-4 py-2 text-sm font-bold text-white disabled:opacity-50"
                >
                  {isCopied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                  {isCopied ? '복사됨' : '링크 복사'}
                </button>
                <Link
                  href={`/test/${test.id}`}
                  className="inline-flex items-center gap-2 rounded-xl bg-gray-100 px-4 py-2 text-sm font-bold text-gray-600 hover:bg-gray-200"
                >
                  <ExternalLink className="w-4 h-4" />
                  열기
                </Link>
              </div>
            </article>
          );
        })}
      </section>
    </main>
  );
}
