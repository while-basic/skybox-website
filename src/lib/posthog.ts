'use client';

import posthog from 'posthog-js';

// Initialize PostHog
if (typeof window !== 'undefined') {
  posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY || '', {
    api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST || 'https://app.posthog.com',
    capture_pageview: false, // We'll manually capture pageviews
    loaded: (posthogInstance) => {
      if (process.env.NODE_ENV === 'development') {
        // Log to console in development
        posthogInstance.debug();
      }
    },
  });
}

export { posthog }; 