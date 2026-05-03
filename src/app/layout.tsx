import type { ReactNode } from "react";
import { GoogleAnalytics } from "@next/third-parties/google";

// Root layout is a pass-through; the [locale] layout provides html/body.
export default function RootLayout({ children }: { children: ReactNode }) {
  const env = process.env.NODE_ENV;
  const gaId = process.env.NEXT_PUBLIC_GA_ID;
  return (
    <>
      {children}
      {env === 'production' && gaId && (
        <GoogleAnalytics gaId={gaId} />
      )}
    </>
  );
}
