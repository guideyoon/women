import { headers } from "next/headers";
import { SITE_NAME, SITE_URL } from "@/constants/site";
import { TEST_LINKS } from "@/constants/testLinks";

function escapeXml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

export async function GET() {
  const now = new Date().toUTCString();
  const requestHeaders = await headers();
  const host = requestHeaders.get("host");
  const protocol = requestHeaders.get("x-forwarded-proto") || "https";
  const feedSiteUrl =
    host && host.endsWith("mizbalance.com") ? `${protocol}://${host}` : SITE_URL;

  const baseItems = [
    {
      title: SITE_NAME,
      description: "여성 건강 자가진단 테스트와 맞춤 관리 정보를 확인하세요.",
      path: "/",
    },
    {
      title: "여성 건강 솔루션",
      description: "테스트 결과에 맞는 관리 방향과 솔루션을 확인하세요.",
      path: "/solutions",
    },
    {
      title: "기초대사량 계산기",
      description: "나이, 키, 체중을 기준으로 하루 필요 에너지를 계산하세요.",
      path: "/calculator",
    },
    {
      title: "오늘의 운세",
      description: "간단한 생년월일 입력으로 오늘의 흐름을 확인하세요.",
      path: "/fortune",
    },
  ];

  const testItems = TEST_LINKS.map((test) => ({
    title: test.title,
    description: test.description,
    path: `/test/${test.id}`,
  }));

  const items = [...baseItems, ...testItems]
    .map((item) => {
      const url = `${feedSiteUrl}${item.path}`;

      return `
    <item>
      <title>${escapeXml(item.title)}</title>
      <link>${escapeXml(url)}</link>
      <guid isPermaLink="true">${escapeXml(url)}</guid>
      <description>${escapeXml(item.description)}</description>
      <pubDate>${now}</pubDate>
    </item>`;
    })
    .join("");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>${escapeXml(SITE_NAME)}</title>
    <link>${escapeXml(feedSiteUrl)}</link>
    <description>여성 건강 자가진단 테스트와 맞춤 관리 정보를 제공하는 미즈 밸런스 RSS 피드입니다.</description>
    <language>ko-KR</language>
    <lastBuildDate>${now}</lastBuildDate>${items}
  </channel>
</rss>
`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "public, max-age=0, s-maxage=3600",
    },
  });
}
