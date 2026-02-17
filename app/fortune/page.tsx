'use client';

import { useState } from 'react';
import { Moon, Sparkles, RefreshCw } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const fortunes = [
  "오늘은 새로운 시작을 하기에 좋은 날입니다. 작은 변화가 큰 행운을 가져다줄 거예요.",
  "주변 사람들에게 따뜻한 말 한마디를 건네보세요. 당신의 친절이 행운으로 돌아옵니다.",
  "평소 미뤄왔던 건강 관리를 시작해보세요. 지금이 가장 좋은 시기입니다.",
  "뜻밖의 소식이 찾아올 수 있는 날입니다. 마음을 열고 긍정적으로 맞이하세요.",
  "오늘은 자신을 위해 시간을 써보세요. 충분한 휴식이 최고의 보약입니다.",
  "꾸준한 노력이 결실을 맺는 시기입니다. 조금만 더 힘을 내보세요!",
  "금전운이 상승하고 있습니다. 계획적인 소비가 미래를 밝게 할 거예요.",
];

export default function FortunePage() {
  const [fortune, setFortune] = useState<string | null>(null);
  const [isSpinning, setIsSpinning] = useState(false);

  const getFortune = () => {
    setIsSpinning(true);
    setFortune(null);
    
    setTimeout(() => {
      const random = fortunes[Math.floor(Math.random() * fortunes.length)];
      setFortune(random);
      setIsSpinning(false);
    }, 1000);
  };

  return (
    <main className="max-w-3xl mx-auto px-6 py-12 min-h-screen">
      <header className="mb-12 text-center">
        <div className="w-16 h-16 bg-purple-50 rounded-2xl flex items-center justify-center text-purple-500 mx-auto mb-4">
          <Moon className="w-8 h-8 fill-purple-500" />
        </div>
        <h1 className="text-3xl font-bold text-gray-800">오늘의 운세</h1>
        <p className="text-gray-500 mt-2">당신을 기다리는 행운의 메시지를 확인해보세요.</p>
      </header>

      <div className="flex flex-col items-center justify-center space-y-10">
        <div className="relative">
          <motion.div
            animate={isSpinning ? { rotate: 360 } : { rotate: 0 }}
            transition={{ repeat: isSpinning ? Infinity : 0, duration: 1, ease: "linear" }}
            className="w-48 h-48 rounded-full border-4 border-dashed border-purple-200 flex items-center justify-center"
          >
            <Sparkles className="w-12 h-12 text-purple-300" />
          </motion.div>
          <div className="absolute inset-0 flex items-center justify-center">
            <button
              onClick={getFortune}
              disabled={isSpinning}
              className="w-32 h-32 rounded-full bg-white shadow-xl border border-purple-50 flex items-center justify-center hover:scale-105 transition-transform disabled:opacity-50"
            >
              <span className="font-bold text-purple-600">행운 확인</span>
            </button>
          </div>
        </div>

        <div className="w-full max-w-lg min-h-[160px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            {fortune ? (
              <motion.div
                key="fortune"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="p-8 bg-white rounded-3xl border border-secondary card-shadow text-center w-full"
              >
                <p className="text-xl font-medium text-gray-800 leading-relaxed italic">
                  "{fortune}"
                </p>
                <div className="mt-6 flex justify-center">
                  <button
                    onClick={getFortune}
                    className="flex items-center gap-2 text-sm text-gray-400 hover:text-primary transition-colors"
                  >
                    <RefreshCw className="w-4 h-4" /> 다시 뽑기
                  </button>
                </div>
              </motion.div>
            ) : isSpinning ? (
              <p className="text-gray-400 font-medium">행운을 불러오는 중...</p>
            ) : (
              <p className="text-gray-300 font-medium">버튼을 눌러 오늘의 메시지를 확인하세요</p>
            )}
          </AnimatePresence>
        </div>
      </div>
    </main>
  );
}
