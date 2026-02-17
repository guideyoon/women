'use client';

import { motion } from 'framer-motion';

const solutions = [
  {
    id: 1,
    title: "미즈케어 솔루션 2",
    category: "여성/육아",
    image: "https://images.unsplash.com/photo-1576091160550-2173dad99901?q=80&w=800&auto=format&fit=crop",
    promotion: true,
  },
  {
    id: 2,
    title: "CR-5",
    category: "여성/육아",
    image: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?q=80&w=800&auto=format&fit=crop",
    promotion: true,
  },
  {
    id: 3,
    title: "MS-II PLUS",
    category: "여성/육아",
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=800&auto=format&fit=crop",
    promotion: true,
  },
  {
    id: 4,
    title: "공후하결",
    category: "여성/육아",
    image: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?q=80&w=800&auto=format&fit=crop",
    promotion: true,
  },
  {
    id: 5,
    title: "레이디큐어 솔루션",
    category: "여성/육아",
    image: "https://images.unsplash.com/photo-1559839734-2b71f1e3c7e5?q=80&w=800&auto=format&fit=crop",
    promotion: true,
  },
  {
    id: 6,
    title: "레이디큐어 솔루션 2",
    category: "여성/육아",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800&auto=format&fit=crop",
    promotion: true,
  },
];

export default function SolutionsPage() {
  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 bg-[#f8f9fa] min-h-screen">
      <header className="mb-12 text-center">
        <h1 className="text-3xl font-bold text-gray-900">솔루션 안내</h1>
        <p className="text-gray-600 mt-2">여성 건강을 위한 최적의 맞춤형 솔루션을 제안합니다.</p>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {solutions.map((solution, index) => (
          <motion.div
            key={solution.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
            className="bg-white border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow cursor-pointer flex flex-col"
          >
            {/* Image Section */}
            <div className="aspect-square bg-gray-100 relative">
              <img
                src={solution.image}
                alt={solution.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Info Section */}
            <div className="p-4 border-t border-gray-100 flex-1">
              <p className="text-[13px] text-gray-400 mb-1">{solution.category}</p>
              <h2 className="text-lg font-medium text-gray-900 mb-6">{solution.title}</h2>
              
              <div className="mt-auto pt-4 border-t border-gray-100 flex items-center justify-between">
                <span className="text-sm font-bold text-blue-500">상담 신청 가능</span>
                {solution.promotion && (
                  <span className="bg-[#ff4d4f] text-white text-[10px] font-bold px-2 py-0.5 rounded-[2px] uppercase">
                    프로모션
                  </span>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </main>
  );
}
