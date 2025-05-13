'use client';

import { useEffect, useState } from 'react';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function ClientBody({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <body className={inter.className} suppressHydrationWarning>{children}</body>;
  }

  return <body className={inter.className} suppressHydrationWarning>{children}</body>;
}
