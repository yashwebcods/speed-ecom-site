'use client';

import { useIsMobile } from '@/hooks/use-mobile';
import RobotPeeker from '@/components/RobotPeeker';

export default function RobotPeekerWrapper() {
  const isMobile = useIsMobile();

  // Only show RobotPeeker on non-mobile devices (tablet, desktop, etc.)
  if (isMobile) {
    return null;
  }

  return <RobotPeeker />;
}
