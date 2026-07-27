'use client';

import { useEffect } from 'react';

export default function PerformanceMonitor() {
  useEffect(() => {
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
