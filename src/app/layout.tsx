import type { Metadata } from "next";
import { GeistMono } from 'geist/font/mono';
import "./globals.css";
import { ThemeProvider } from 'next-themes';
import { Analytics } from '@vercel/analytics/next';
import GoogleAnalyticsWrapper from '../components/GoogleAnalytics';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Raghav Dadhich - Full Stack Developer & AI Engineer",
  description: "Portfolio of Raghav Dadhich - Full Stack Developer, AI/ML Engineer, and Computer Science student at VIT Bhopal. Passionate about technology, football, chess, and music.",
  keywords: ["Raghav Dadhich", "Full Stack Developer", "AI Engineer", "Machine Learning", "React", "Next.js", "JavaScript", "Python", "VIT Bhopal"],
  authors: [{ name: "Raghav Dadhich" }],
  creator: "Raghav Dadhich",
  openGraph: {
    title: "Raghav Dadhich - Full Stack Developer & AI Engineer",
    description: "Portfolio of Raghav Dadhich - Full Stack Developer, AI/ML Engineer, and Computer Science student at VIT Bhopal.",
    url: "https://raghavdev.vercel.app/", // Replace with your actual domain
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
        className={`${GeistMono.variable} font-mono antialiased bg-background text-foreground`}
      >        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} forcedTheme="dark">
            
            {/* Retro Scanline Effect */}
            <div className="scanline" />

            {children}
            
            {/* Global Terminal Footer */}
            <footer className="fixed bottom-0 left-0 w-full bg-primary text-background text-xs md:text-sm py-1 px-4 flex justify-between items-center z-50 font-bold border-t border-primary">
              <div className="flex gap-4">
                <span>NORMAL MODE</span>
                <span className="hidden md:inline">|</span>
                <span className="hidden md:inline">utf-8</span>
              </div>
              <div className="flex gap-4">
                <Link href="/" className="hover:bg-background hover:text-primary px-2 transition-colors">[ HOME ]</Link>
                <Link href="/projects" className="hover:bg-background hover:text-primary px-2 transition-colors">[ PROJECTS ]</Link>
                <Link href="/blog" className="hover:bg-background hover:text-primary px-2 transition-colors">[ BLOG ]</Link>
                <a href="https://github.com/raghav3615" target="_blank" className="hover:bg-background hover:text-primary px-2 transition-colors">[ GITHUB ]</a>
              </div>
            </footer>

          <Analytics />
          <GoogleAnalyticsWrapper gaId={process.env.NEXT_PUBLIC_GA_ID || ''} />
        </ThemeProvider>
      </body>
    </html>
  );
}
