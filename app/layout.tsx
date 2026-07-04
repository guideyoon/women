import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { SITE_NAME, SITE_URL } from "@/constants/site";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  applicationName: SITE_NAME,
  title: {
    default: "미즈 밸런스 | 여성 건강 자가진단 테스트",
    template: `%s | ${SITE_NAME}`,
  },
  description:
    "갱년기, 피부 나이, 여성 탈모, 붓기, PMS, 장 건강 등 여성 컨디션을 간단히 점검하는 자가진단 테스트 모음입니다.",
  keywords: [
    "여성 건강 테스트",
    "자가진단 테스트",
    "갱년기 테스트",
    "피부 나이 테스트",
    "PMS 테스트",
    "여성 탈모 테스트",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "미즈 밸런스 | 여성 건강 자가진단 테스트",
    description:
      "여성 건강, 피부, 바디, 수면, 장 건강 컨디션을 간단히 점검하고 나에게 맞는 관리 방향을 확인하세요.",
    url: "/",
    siteName: SITE_NAME,
    locale: "ko_KR",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "미즈 밸런스 | 여성 건강 자가진단 테스트",
    description:
      "갱년기, 피부 나이, 여성 탈모, PMS, 장 건강 등 여성 컨디션 테스트 모음",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
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
