'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, Heart } from 'lucide-react';
import { cn } from '@/lib/utils';

const navItems = [
  { name: '솔루션', href: '/solutions' },
  { name: '갱년기 테스트', href: '/test/menopause' },
  { name: '피부나이 테스트', href: '/test/skin-age' },
  { name: '칼로리 계산기', href: '/calculator' },
  { name: '운세', href: '/fortune' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white border-b border-secondary sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center gap-2">
              <Heart className="w-6 h-6 text-primary fill-primary" />
              <span className="text-xl font-bold text-gray-800">미즈 밸런스</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-gray-600 hover:text-primary transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-primary p-2"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-secondary py-4 px-4 space-y-2">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="block px-4 py-2 text-base font-medium text-gray-600 hover:bg-rose-50 hover:text-primary rounded-xl transition-colors"
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
