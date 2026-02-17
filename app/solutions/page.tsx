'use client';

import { motion } from 'framer-motion';

const solutions = [
  { id: 1, title: "미즈케어 솔루션 2", category: "여성/육아", image: "https://replyalba.com/banner/ME1GU1720591566.jpg", promotion: true },
  { id: 2, title: "CR-5", category: "여성/육아", image: "https://replyalba.com/banner/0JKUK1770784450.jpg", promotion: true },
  { id: 3, title: "MS-II PLUS", category: "여성/육아", image: "https://replyalba.com/banner/IRZ8C1765759370.jpg", promotion: true },
  { id: 4, title: "공후하결", category: "여성/육아", image: "https://replyalba.com/banner/AZ3CS1733113210.jpg", promotion: true },
  { id: 5, title: "레이디큐어 솔루션", category: "여성/육아", image: "https://replyalba.com/banner/DFRQF1765759170.jpg", promotion: true },
  { id: 6, title: "레이디큐어 솔루션 2", category: "여성/육아", image: "https://replyalba.com/banner/CE1MP1765759306.jpg", promotion: true },
  { id: 7, title: "올컷 다이어트", category: "여성/육아", image: "https://replyalba.com/banner/L75341765759423.jpg", promotion: true },
  { id: 8, title: "아이클타임", category: "여성/육아", image: "https://replyalba.com/banner/0JSWU1750142399.jpg", promotion: true },
  { id: 9, title: "천수애", category: "여성/육아", image: "https://replyalba.com/banner/5MGF61761886773.jpg", promotion: true },
  { id: 10, title: "미즈케어", category: "여성/육아", image: "https://replyalba.com/banner/CUQDI1626324228.jpg", promotion: true },
  { id: 11, title: "우먼피어리스", category: "여성/육아", image: "https://replyalba.com/banner/LDXD11748830605.png", promotion: true },
  { id: 12, title: "슬림웨이", category: "여성/육아", image: "https://replyalba.com/banner/O86201754550305.jpg", promotion: true },
  { id: 13, title: "디제로킹", category: "여성/육아", image: "https://replyalba.com/banner/MOEB91731998272.jpg", promotion: true },
  { id: 14, title: "보나플러스", category: "여성/육아", image: "https://replyalba.com/banner/IRZ8C1765759370.jpg", promotion: true },
  { id: 15, title: "화이토락", category: "여성/육아", image: "https://replyalba.com/banner/CE1MP1765759306.jpg", promotion: true },
  { id: 16, title: "청아미", category: "여성/육아", image: "https://replyalba.com/banner/0JKUK1770784450.jpg", promotion: true },
  { id: 17, title: "미즈미", category: "여성/육아", image: "https://replyalba.com/banner/5MGF61761886773.jpg", promotion: true },
  { id: 18, title: "리피어라", category: "여성/육아", image: "https://replyalba.com/banner/AZ3CS1733113210.jpg", promotion: true },
  { id: 19, title: "우먼케어", category: "여성/육아", image: "https://replyalba.com/banner/ME1GU1720591566.jpg", promotion: true },
  { id: 20, title: "뉴트리원", category: "여성/육아", image: "https://replyalba.com/banner/L75341765759423.jpg", promotion: true },
  { id: 21, title: "고혼진", category: "여성/육아", image: "https://replyalba.com/banner/0JSWU1750142399.jpg", promotion: true },
  { id: 22, title: "천수담", category: "여성/육아", image: "https://replyalba.com/banner/DFRQF1765759170.jpg", promotion: true },
  { id: 23, title: "미즈밸런스", category: "여성/육아", image: "https://replyalba.com/banner/CUQDI1626324228.jpg", promotion: true },
  { id: 24, title: "우먼시크릿", category: "여성/육아", image: "https://replyalba.com/banner/LDXD11748830605.png", promotion: true },
  { id: 25, title: "아이점프", category: "여성/육아", image: "https://replyalba.com/banner/O86201754550305.jpg", promotion: true },
  { id: 26, title: "키성장 솔루션", category: "여성/육아", image: "https://replyalba.com/banner/MOEB91731998272.jpg", promotion: true },
  { id: 27, title: "베베쿡", category: "여성/육아", image: "https://replyalba.com/banner/IRZ8C1765759370.jpg", promotion: true },
  { id: 28, title: "풀마루", category: "여성/육아", image: "https://replyalba.com/banner/CE1MP1765759306.jpg", promotion: true },
  { id: 29, title: "미즈메디", category: "여성/육아", image: "https://replyalba.com/banner/0JKUK1770784450.jpg", promotion: true },
  { id: 30, title: "우먼파워", category: "여성/육아", image: "https://replyalba.com/banner/5MGF61761886773.jpg", promotion: true },
  { id: 31, title: "아이사랑", category: "여성/육아", image: "https://replyalba.com/banner/AZ3CS1733113210.jpg", promotion: true },
  { id: 32, title: "맘스케어", category: "여성/육아", image: "https://replyalba.com/banner/ME1GU1720591566.jpg", promotion: true },
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
