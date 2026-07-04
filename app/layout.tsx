import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "미즈 밸런스 | 여성 건강의 모든 것",
  description: "갱년기 테스트, 피부 나이 진단, 칼로리 계산 등 당신을 위한 맞춤형 밸런스 케어",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="antialiased min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-1">
          {children}
        </div>
      </body>
    </html>
  );
}
