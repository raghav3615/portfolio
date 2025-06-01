import type { Metadata } from "next";
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import "./globals.css";
import { ThemeProvider } from 'next-themes';
import { Analytics } from '@vercel/analytics/next';
import ClientWrapper from '../components/ClientWrapper';
import GoogleAnalyticsWrapper from '../components/GoogleAnalytics';

export const metadata: Metadata = {
  title: "Raghav Dadhich - Full Stack Developer & AI Engineer",
  description: "Portfolio of Raghav Dadhich - Full Stack Developer, AI/ML Engineer, and Computer Science student at VIT Bhopal. Passionate about technology, football, chess, and music.",
  keywords: ["Raghav Dadhich", "Full Stack Developer", "AI Engineer", "Machine Learning", "React", "Next.js", "JavaScript", "Python", "VIT Bhopal"],
  authors: [{ name: "Raghav Dadhich" }],
  creator: "Raghav Dadhich",
  openGraph: {
    title: "Raghav Dadhich - Full Stack Developer & AI Engineer",
    description: "Portfolio of Raghav Dadhich - Full Stack Developer, AI/ML Engineer, and Computer Science student at VIT Bhopal.",
    url: "https://your-domain.com", // Replace with your actual domain
    siteName: "Raghav Dadhich Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Raghav Dadhich - Full Stack Developer & AI Engineer",
    description: "Portfolio of Raghav Dadhich - Full Stack Developer, AI/ML Engineer, and Computer Science student at VIT Bhopal.",
    creator: "@raghav_dadhich",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${GeistSans.variable} ${GeistMono.variable} antialiased`}
      >        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} forcedTheme={undefined}>
          <ClientWrapper>
            {children}
          </ClientWrapper>
          <Analytics />
          <GoogleAnalyticsWrapper gaId={process.env.NEXT_PUBLIC_GA_ID || ''} />
        </ThemeProvider>
      </body>
    </html>
  );
}
