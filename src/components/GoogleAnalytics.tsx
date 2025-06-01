'use client';

import { GoogleAnalytics } from '@next/third-parties/google';

interface GoogleAnalyticsWrapperProps {
  gaId: string;
}

export default function GoogleAnalyticsWrapper({ gaId }: GoogleAnalyticsWrapperProps) {
  // Only render Google Analytics in production
  if (process.env.NODE_ENV !== 'production') {
    return null;
  }

  return <GoogleAnalytics gaId={gaId} />;
}
