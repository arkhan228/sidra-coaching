'use client';

import { usePathname, useSearchParams } from 'next/navigation';
import { useEffect } from 'react';

export default function Analytics() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (!pathname) return;

    const url = pathname + (searchParams.toString() ? `?${searchParams}` : '');

    window.gtag?.('config', process.env.GA_ID, {
      page_path: url,
    });
  }, [pathname, searchParams]);

  return null;
}
