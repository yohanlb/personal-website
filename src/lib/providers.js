'use client';
import posthog from 'posthog-js';
import { PostHogProvider } from 'posthog-js/react';
import { ReactNode } from 'react';

const isEnabled =
  typeof window !== 'undefined' && process.env.NODE_ENV !== 'development';

if (isEnabled) {
  posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY, {
    api_host: 'https://yohanlebreton.com/ingest',
    ui_host: process.env.NEXT_PUBLIC_POSTHOG_HOST,
  });
}

export function CSPostHogProvider({ children }) {
  if (isEnabled) {
    return <PostHogProvider client={posthog}>{children}</PostHogProvider>;
  } else {
    return <>{children}</>;
  }
}
