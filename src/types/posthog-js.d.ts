declare module 'posthog-js' {
  interface PostHogOptions {
    api_host?: string;
    capture_pageview?: boolean;
    loaded?: (posthog: PostHog) => void;
    [key: string]: unknown;
  }

  interface PostHog {
    init: (apiKey: string, options?: PostHogOptions) => void;
    capture: (event: string, properties?: Record<string, unknown>) => void;
    identify: (distinctId: string, properties?: Record<string, unknown>) => void;
    debug: () => void;
    [key: string]: unknown;
  }

  const posthog: PostHog;
  export default posthog;
}

declare module 'posthog-js/react' {
  import type { ReactNode } from 'react';
  
  export interface PostHogProviderProps {
    children: ReactNode;
  }
  
  export function PostHogProvider(props: PostHogProviderProps): JSX.Element;
} 