import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { GoogleAnalytics } from '@next/third-parties/google';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { AppProviders } from '@/components/providers/app-providers';
import { ScrollToTop } from '@/components/ScrollToTop';
import { SITE_URL } from '@/lib/seo/config';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: 'Κτήμα Ωρίων Κερατέα | Κτήμα Γάμου & Βάπτισης', template: '%s | Κτήμα Ωρίων' },
  verification: {
    google: ['SjeFWz1wOp8tRyLIARvDR6ECjYEb0Ea_raXH1UIKzdo', 'xuVpFU3oswJIf8NTCV-D8mDL6xd6leTUk62qJBDsmSM'],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="el" className={inter.variable} suppressHydrationWarning>
      <body className="min-h-screen font-sans antialiased">
        <AppProviders>
          <ScrollToTop />
          {children}
        </AppProviders>
        <GoogleAnalytics gaId="G-R3D1HPVZYG" />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
