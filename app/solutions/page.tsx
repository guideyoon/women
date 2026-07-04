'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { merchants } from '@/constants/merchants';
import DisclosureNotice from '@/components/DisclosureNotice';

export default function SolutionsPage() {
  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 bg-[#f8f9fa] min-h-screen">
      <header className="mb-12 text-center">
        <h1 className="text-3xl font-bold text-gray-900">솔루션 안내</h1>
        <p className="text-gray-600 mt-2">여성 건강과 육아를 위한 최적의 맞춤형 솔루션을 제안합니다.</p>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {merchants.map((solution, index) => (
          <a
            key={solution.id}
            href={solution.url}
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.02 }}
              className="bg-white border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow cursor-pointer flex flex-col h-full"
            >
              <div className="aspect-square bg-gray-100 relative">
                <Image
                  src={solution.image}
                  alt={solution.title}
                  fill
                  sizes="(min-width: 1280px) 25vw, (min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>

              <div className="p-4 border-t border-gray-100 flex-1 flex flex-col">
                <p className="text-[12px] text-gray-400 mb-1">{solution.category}</p>
                <h2 className="text-base font-bold text-gray-900 mb-4 line-clamp-2">{solution.title}</h2>

                <div className="mt-auto pt-4 border-t border-gray-100 flex items-center justify-between">
                  <span className="text-sm font-bold text-blue-500">상담 신청 가능</span>
                </div>
              </div>
            </motion.div>
          </a>
        ))}
      </div>

      <DisclosureNotice className="mt-10" />
    </main>
  );
}
