'use client';

import { PostHogProvider as OriginalPostHogProvider } from 'posthog-js/react';
import { posthog } from '@/lib/posthog';
import type { ReactNode } from 'react';

export function PostHogProviderClient({ children }: { children: ReactNode }) {
  return (
    // @ts-expect-error - PostHog types are not correctly defined
    <OriginalPostHogProvider client={posthog}>
      {children}
    </OriginalPostHogProvider>
  );
} 