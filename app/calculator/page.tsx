'use client';

import { useState } from 'react';
import { Calculator, RotateCcw } from 'lucide-react';
import { motion } from 'framer-motion';

export default function CalculatorPage() {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [age, setAge] = useState('');
  const [result, setResult] = useState<number | null>(null);

  const calculateBMR = () => {
    if (!weight || !height || !age) return;
    // Mifflin-St Jeor Equation for Women
    // BMR = 10 * weight (kg) + 6.25 * height (cm) - 5 * age (y) - 161
    const bmr = 10 * Number(weight) + 6.25 * Number(height) - 5 * Number(age) - 161;
    setResult(Math.round(bmr));
  };

  const reset = () => {
    setWeight('');
    setHeight('');
    setAge('');
    setResult(null);
  };

  return (
    <main className="max-w-3xl mx-auto px-6 py-12 min-h-screen">
      <header className="mb-12 text-center">
        <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-500 mx-auto mb-4">
          <Calculator className="w-8 h-8" />
        </div>
        <h1 className="text-3xl font-bold text-gray-800">기초대사량 계산기</h1>
        <p className="text-gray-500 mt-2">내 몸이 하루에 필요로 하는 최소 에너지를 알아보세요.</p>
      </header>

      <div className="bg-white rounded-3xl p-8 border border-secondary card-shadow space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="space-y-2">
            <label className="text-sm font-bold text-gray-600">나이 (세)</label>
            <input
              type="number"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              placeholder="예: 45"
              className="w-full p-4 rounded-xl bg-gray-50 border border-gray-100 focus:outline-none focus:border-primary transition-colors"
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-bold text-gray-600">신장 (cm)</label>
            <input
              type="number"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              placeholder="예: 160"
              className="w-full p-4 rounded-xl bg-gray-50 border border-gray-100 focus:outline-none focus:border-primary transition-colors"
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-bold text-gray-600">체중 (kg)</label>
            <input
              type="number"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              placeholder="예: 55"
              className="w-full p-4 rounded-xl bg-gray-50 border border-gray-100 focus:outline-none focus:border-primary transition-colors"
            />
          </div>
        </div>

        <div className="flex gap-4">
          <button
            onClick={calculateBMR}
            className="flex-1 bg-primary text-white font-bold py-4 rounded-2xl shadow-lg shadow-rose-100 hover:bg-rose-600 transition-colors"
          >
            계산하기
          </button>
          <button
            onClick={reset}
            className="p-4 rounded-2xl bg-gray-100 text-gray-500 hover:bg-gray-200 transition-colors"
          >
            <RotateCcw className="w-6 h-6" />
          </button>
        </div>

        {result !== null && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-10 p-8 bg-blue-50 rounded-2xl border border-blue-100 text-center"
          >
            <span className="text-blue-500 font-bold text-sm uppercase">당신의 기초대사량(BMR)</span>
            <div className="text-4xl font-black text-gray-800 mt-2">
              {result} <span className="text-xl font-normal text-gray-500">kcal</span>
            </div>
            <p className="text-sm text-gray-600 mt-4 leading-relaxed">
              이는 생명 유지에 필요한 최소한의 에너지입니다.<br />
              활동량에 따라 하루 필요 열량은 더 많을 수 있습니다.
            </p>
          </motion.div>
        )}
      </div>
    </main>
  );
}
