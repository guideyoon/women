'use client';

import { motion } from 'framer-motion';

const solutions = [
  { id: 1, title: "미즈케어 솔루션 2", category: "여성/육아", image: "/image/1.jpg" },
  { id: 2, title: "CR-5", category: "여성/육아", image: "/image/2.jpg" },
  { id: 3, title: "MS-II PLUS", category: "여성/육아", image: "/image/3.jpg" },
  { id: 4, title: "공후하결", category: "여성/육아", image: "/image/4.jpg" },
  { id: 5, title: "레이디큐어 솔루션", category: "여성/육아", image: "/image/5.jpg" },
  { id: 6, title: "레이디큐어 솔루션 2", category: "여성/육아", image: "/image/6.jpg" },
  { id: 7, title: "미즈케어 솔루션", category: "여성/육아", image: "/image/7.jpg" },
  { id: 8, title: "미즈케어 솔루션 3", category: "여성/육아", image: "/image/8.jpg" },
  { id: 9, title: "미즈케어 솔루션 4", category: "여성/육아", image: "/image/9.jpg" },
  { id: 10, title: "미즈케어 솔루션 5", category: "여성/육아", image: "/image/10.jpg" },
  { id: 11, title: "미즈케어 솔루션 6", category: "여성/육아", image: "/image/11.jpg" },
  { id: 12, title: "미즈케어 솔루션 7", category: "여성/육아", image: "/image/12.jpg" },
  { id: 13, title: "미즈케어 여궁", category: "여성/육아", image: "/image/13.jpg" },
  { id: 14, title: "바스트핏 솔루션", category: "여성/육아", image: "/image/14.jpg" },
  { id: 15, title: "베리얀", category: "여성/육아", image: "/image/15.jpg" },
  { id: 16, title: "스템벨", category: "여성/육아", image: "/image/16.jpg" },
  { id: 17, title: "스템벨 자생력 앰플", category: "여성/육아", image: "/image/17.jpg" },
  { id: 18, title: "스템엔셀 미미셀 시그니처", category: "여성/육아", image: "/image/18.jpg" },
  { id: 19, title: "여궁골드", category: "여성/육아", image: "/image/19.jpg" },
  { id: 20, title: "여궁닥터", category: "여성/육아", image: "/image/20.jpg" },
  { id: 21, title: "여궁화이트", category: "여성/육아", image: "/image/21.jpg" },
  { id: 22, title: "올리모아", category: "여성/육아", image: "/image/22.jpg" },
  { id: 23, title: "올리모아 2", category: "여성/육아", image: "/image/23.jpg" },
  { id: 24, title: "우먼시크릿", category: "여성/육아", image: "/image/24.jpg" },
  { id: 25, title: "우먼시크릿2", category: "여성/육아", image: "/image/25.jpg" },
  { id: 26, title: "우먼시크릿3", category: "여성/육아", image: "/image/26.jpg" },
  { id: 27, title: "우먼시크릿4", category: "여성/육아", image: "/image/27.jpg" },
  { id: 28, title: "우먼시크릿5", category: "여성/육아", image: "/image/28.jpg" },
  { id: 29, title: "천수애진", category: "여성/육아", image: "/image/29.jpg" },
  { id: 30, title: "천수애진2", category: "여성/육아", image: "/image/30.jpg" },
  { id: 31, title: "천수윤진", category: "여성/육아", image: "/image/31.jpg" },
  { id: 32, title: "천수윤진2", category: "여성/육아", image: "/image/32.jpg" },
];

export default function SolutionsPage() {
  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 bg-[#f8f9fa] min-h-screen">
      <header className="mb-12 text-center">
        <h1 className="text-3xl font-bold text-gray-900">솔루션 안내</h1>
        <p className="text-gray-600 mt-2">여성 건강과 육아를 위한 최적의 맞춤형 솔루션을 제안합니다.</p>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {solutions.map((solution, index) => (
          <motion.div
            key={solution.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.02 }}
            className="bg-white border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow cursor-pointer flex flex-col"
          >
            <div className="aspect-square bg-gray-100 relative">
              <img
                src={solution.image}
                alt={solution.title}
                className="w-full h-full object-cover"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1576091160550-2173dad99901?q=80&w=800&auto=format&fit=crop";
                }}
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
        ))}
      </div>
    </main>
  );
}
