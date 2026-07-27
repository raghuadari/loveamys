'use client';

import { useEffect } from 'react';

export default function PerformanceMonitor() {
  useEffect(() => {
<<<<<<< HEAD
    // Monitor Core Web Vitals
    if (typeof window !== 'undefined' && 'PerformanceObserver' in window) {
      // Largest Contentful Paint (LCP)
      const lcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1];
        if (lastEntry) {
          console.log('LCP:', lastEntry.startTime);
          // Send to analytics service
          if (lastEntry.startTime > 2500) {
            console.warn('LCP is above recommended threshold');
          }
        }
      });
      lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

      // First Input Delay (FID)
      const fidObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          const fidEntry = entry as PerformanceEventTiming;
          console.log('FID:', fidEntry.processingStart - fidEntry.startTime);
          // Send to analytics service
          if (fidEntry.processingStart - fidEntry.startTime > 100) {
            console.warn('FID is above recommended threshold');
          }
        });
      });
      fidObserver.observe({ entryTypes: ['first-input'] });

      // Cumulative Layout Shift (CLS)
      let clsValue = 0;
      const clsObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry: any) => {
          if (!entry.hadRecentInput) {
            clsValue += entry.value;
            console.log('CLS:', clsValue);
            // Send to analytics service
            if (clsValue > 0.1) {
              console.warn('CLS is above recommended threshold');
            }
          }
        });
      });
      clsObserver.observe({ entryTypes: ['layout-shift'] });

      // First Contentful Paint (FCP)
      const fcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          console.log('FCP:', entry.startTime);
          // Send to analytics service
          if (entry.startTime > 1800) {
            console.warn('FCP is above recommended threshold');
          }
        });
      });
      fcpObserver.observe({ entryTypes: ['paint'] });

      // Time to Interactive (TTI) approximation
      const ttiObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          console.log('TTI:', entry.startTime);
          // Send to analytics service
          if (entry.startTime > 3800) {
            console.warn('TTI is above recommended threshold');
          }
        });
      });
      ttiObserver.observe({ entryTypes: ['measure'] });

      // Monitor long tasks
      const longTaskObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          console.log('Long task detected:', entry.duration);
          // Send to analytics service
          if (entry.duration > 50) {
            console.warn('Long task detected that may impact user experience');
          }
        });
      });
      longTaskObserver.observe({ entryTypes: ['longtask'] });

      // Cleanup observers on unmount
      return () => {
        lcpObserver.disconnect();
        fidObserver.disconnect();
        clsObserver.disconnect();
        fcpObserver.disconnect();
        ttiObserver.disconnect();
        longTaskObserver.disconnect();
      };
    }
  }, []);

  return null; // This component doesn't render anything
} 
=======
    if (typeof window === 'undefined' || !('PerformanceObserver' in window)) return;

    const observers: PerformanceObserver[] = [];

    const observe = (types: string[], callback: (entries: PerformanceEntryList) => void) => {
      try {
        const obs = new PerformanceObserver((list) => callback(list.getEntries()));
        obs.observe({ entryTypes: types });
        observers.push(obs);
      } catch {
        // entryType not supported in this browser — silently skip
      }
    };

    // Largest Contentful Paint
    observe(['largest-contentful-paint'], (entries) => {
      const last = entries[entries.length - 1];
      if (last) {
        // TODO: send to analytics — e.g. analytics.track('LCP', { value: last.startTime })
      }
    });

    // First Input Delay
    observe(['first-input'], (entries) => {
      entries.forEach((entry) => {
        const e = entry as PerformanceEventTiming;
        // TODO: send to analytics — e.g. analytics.track('FID', { value: e.processingStart - e.startTime })
        void e;
      });
    });

    // Cumulative Layout Shift
    let clsValue = 0;
    observe(['layout-shift'], (entries) => {
      entries.forEach((entry: any) => {
        if (!entry.hadRecentInput) {
          clsValue += entry.value;
          // TODO: send to analytics — e.g. analytics.track('CLS', { value: clsValue })
        }
      });
    });

    // First Contentful Paint
    observe(['paint'], (_entries) => {
      // TODO: send to analytics
    });

    return () => observers.forEach((obs) => obs.disconnect());
  }, []);

  return null;
}
>>>>>>> 97d1e2c (refactor: tech debt cleanup — server components, single source of truth (business.ts, config.ts, data/menu.ts), dead file removal, aria labels, magic number constants)
