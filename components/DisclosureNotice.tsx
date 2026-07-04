import { cn } from '@/lib/utils';

type DisclosureNoticeProps = {
  className?: string;
  compact?: boolean;
};

export default function DisclosureNotice({
  className,
  compact = false,
}: DisclosureNoticeProps) {
  return (
    <aside
      className={cn(
        'rounded-2xl border border-secondary bg-white/80 text-gray-500',
        compact ? 'p-4 text-xs leading-relaxed' : 'p-5 text-sm leading-relaxed',
        className
      )}
    >
      본 서비스의 테스트와 계산 결과는 건강 상태를 간단히 점검하기 위한 참고 정보이며,
      의학적 진단이나 치료를 대체하지 않습니다. 건강 이상이 있거나 증상이 지속되면
      의료 전문가와 상담하세요. 일부 솔루션 링크는 제휴 링크이며, 상담 신청 또는 구매
      과정에서 운영자가 수수료를 받을 수 있습니다.
    </aside>
  );
}
