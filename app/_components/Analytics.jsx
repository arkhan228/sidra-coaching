'use client';

import { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';

/**
 * Analytics component responsibilities:
 * - Create a safe gtag() if it doesn't exist (so calls don't throw)
 * - Wait for external gtag script to be available (timeout fallback)
 * - Call gtag('config', GA_ID, { page_path }) on navigation changes
 */

export default function Analytics({ gaId }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (!gaId) {
      // No GA configured — do nothing
      return;
    }

    // Ensure window.dataLayer and a gtag shim exist (idempotent)
    if (!window.dataLayer) window.dataLayer = [];
    if (!window.gtag) {
      window.gtag = function gtag() {
        window.dataLayer.push(arguments);
      };
    }

    // Helper: wait for `window.gtag` to be the real function loaded by external script.
    const waitForExternalGtag = (timeout = 3000) =>
      new Promise(resolve => {
        const start = Date.now();
        const check = () => {
          // If gtag is present and not our shim (heuristic: gtag.toString length or presence of native properties)
          if (
            window.gtag &&
            window.gtag.toString &&
            window.gtag.toString().indexOf('function gtag()') === -1
          ) {
            return resolve(true);
          }
          if (Date.now() - start > timeout) return resolve(false);
          setTimeout(check, 50);
        };
        check();
      });

    // Compose full url path including search params
    const url =
      pathname +
      (searchParams?.toString() ? `?${searchParams.toString()}` : '');

    let mounted = true;
    (async () => {
      const ok = await waitForExternalGtag(3000);
      if (!mounted) return;

      // If external gtag didn't load, we still can call the shim safely (it will push into dataLayer).
      // Call config — safe even if external loads later; if it does, it will replay correctly.
      try {
        window.gtag('js', new Date());
        window.gtag('config', gaId, { page_path: url });
      } catch (err) {
        // swallow errors to avoid crashing the app
        // optional: console.warn("gtag init failed", err);
      }
    })();

    // On route changes, send page_view events
    // we use another effect to run on pathname/search changes (see dependency list)
    return () => {
      mounted = false;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [gaId]); // only run setup once when gaId set

  // track page views whenever path or search changes
  useEffect(() => {
    if (!gaId) return;
    const url =
      pathname +
      (searchParams?.toString() ? `?${searchParams.toString()}` : '');
    try {
      window.gtag?.('config', gaId, { page_path: url });
    } catch (err) {
      // ignore
    }
  }, [pathname, searchParams, gaId]);

  return null;
}
