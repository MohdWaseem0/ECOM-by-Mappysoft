'use client';

import dynamic from 'next/dynamic';

// Dynamically import the performance monitor to avoid affecting initial load
const PerformanceMonitor = dynamic(
  () => import('@/components/performance-monitor'),
  { ssr: false }
);

export default function ClientPerformanceMonitor() {
  return <PerformanceMonitor />;
}
