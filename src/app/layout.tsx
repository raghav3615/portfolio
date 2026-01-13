import type { Metadata } from "next";
import { GeistMono } from 'geist/font/mono';
import "./globals.css";
import { ThemeProvider } from 'next-themes';
import { Analytics } from '@vercel/analytics/next';
import GoogleAnalyticsWrapper from '../components/GoogleAnalytics';
import Link from 'next/link';

export const metadata: Metadata = {
  metadataBase: new URL("https://raghavdev.vercel.app"),
  title: {
    default: "Raghav Dadhich (ragzus) - Full Stack Developer & OSS Contributor | Portfolio",
    template: "%s | Raghav Dadhich",
  },
  description: "Portfolio of Raghav Dadhich (ragzus) - Full Stack Developer, OSS Contributor, and Computer Science student at VIT Bhopal. Expert in React, Next.js, Python, PyTorch, and Machine Learning. View projects, code, and connect. Passionate about technology, football, chess, and music.",
  keywords: [
    "Raghav Dadhich",
    "raghav dadhich",
    "ragzus",
    "raghav",
    "raghv",
    "Raghav",
    "Raghav Dadhich portfolio",
    "raghav dadhich developer",
    "raghav developer",
    "raghav codes",
    "ragzus developer",
    "ragzus codes",
    "Full Stack Developer",
    "AI Engineer",
    "Machine Learning Engineer",
    "ML Engineer",
    "React Developer",
    "Next.js Developer",
    "JavaScript Developer",
    "TypeScript Developer",
    "Python Developer",
    "PyTorch Developer",
    "Web Developer",
    "Web Developer India",
    "Full Stack Developer India",
    "React Developer India",
    "Next.js Developer India",
    "AI Engineer India",
    "Machine Learning India",
    "VIT Bhopal",
    "Open Source Contributor",
    "Software Engineer",
    "Frontend Developer",
    "Backend Developer",
    "Web Development",
    "React Development",
    "Next.js Development",
    "Python Programming",
    "Machine Learning Projects",
    "AI Projects",
    "Portfolio Website"
  ],
  authors: [{ name: "Raghav Dadhich", url: "https://raghavdev.vercel.app" }],
  creator: "Raghav Dadhich",
  publisher: "Raghav Dadhich",
  alternates: {
    canonical: "https://raghavdev.vercel.app",
  },
  openGraph: {
    title: "Raghav Dadhich (ragzus) - Full Stack Developer & AI Engineer | Portfolio",
    description: "Portfolio of Raghav Dadhich (ragzus) - Full Stack Developer, AI/ML Engineer, and Computer Science student at VIT Bhopal. Expert in React, Next.js, Python, PyTorch, and Machine Learning. View projects, code, and connect.",
    url: "https://raghavdev.vercel.app",
    siteName: "Raghav Dadhich Portfolio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://raghavdev.vercel.app/dp3.jpg",
        width: 1200,
        height: 630,
        alt: "Raghav Dadhich - Full Stack Developer & AI Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Raghav Dadhich (ragzus) - Full Stack Developer & AI Engineer",
    description: "Portfolio of Raghav Dadhich (ragzus) - Full Stack Developer, AI/ML Engineer at VIT Bhopal. Expert in React, Next.js, Python, and Machine Learning.",
    creator: "@raghav_dadhich",
    site: "@raghav_dadhich",
    images: ["https://raghavdev.vercel.app/dp3.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code", // Add after verifying with Google Search Console
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0, user-scalable=yes" />
        <meta name="theme-color" content="#00ff88" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      </head>
      <body
        className={`${GeistMono.variable} font-mono antialiased bg-background text-foreground`}
      >        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} forcedTheme="dark">

          {/* Retro Scanline Effect */}
          <div className="scanline" />

          {/* JSON-LD Structured Data for SEO */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "Person",
                "name": "Raghav Dadhich",
                "alternateName": ["ragzus", "raghav", "raghv", "Raghav Dadhich", "raghav developer", "raghav codes", "ragzus developer"],
                "url": "https://raghavdev.vercel.app",
                "image": "https://raghavdev.vercel.app/dp3.jpg",
                "jobTitle": "Full Stack Developer & AI Engineer",
                "description": "Full Stack Developer, AI/ML Engineer, and Computer Science student at VIT Bhopal. Expert in React, Next.js, Python, PyTorch, and Machine Learning. Open source contributor and passionate about technology.",
                "email": "dadhichraghav896@gmail.com",
                "sameAs": [
                  "https://github.com/raghav3615",
                  "https://twitter.com/raghav_dadhich",
                  "https://www.linkedin.com/in/raghavhere/",
                  "https://codeforces.com/profile/ragzus",
                  "https://medium.com/@itsraghav"
                ],
                "alumniOf": {
                  "@type": "Organization",
                  "name": "VIT Bhopal University"
                },
                "knowsAbout": [
                  "Full Stack Development",
                  "React",
                  "Next.js",
                  "Python",
                  "PyTorch",
                  "Machine Learning",
                  "AI Engineering",
                  "JavaScript",
                  "TypeScript",
                  "Web Development",
                  "Frontend Development",
                  "Backend Development",
                  "Open Source"
                ],
                "address": {
                  "@type": "PostalAddress",
                  "addressLocality": "Bhopal",
                  "addressCountry": "IN"
                }
              })
            }}
          />

          {children}

          {/* Global Terminal Footer */}
          <footer className="fixed bottom-0 left-0 w-full bg-primary text-background text-[10px] sm:text-xs md:text-sm py-1 sm:py-1.5 px-2 sm:px-4 flex flex-col sm:flex-row justify-between items-center gap-1 sm:gap-4 z-50 font-bold border-t border-primary">
            <div className="flex gap-2 sm:gap-4 items-center">
              <span className="whitespace-nowrap">NORMAL MODE</span>
              <span className="hidden sm:inline">|</span>
              <span className="hidden sm:inline">utf-8</span>
            </div>
            <nav className="flex gap-1 sm:gap-2 md:gap-4 items-center flex-wrap justify-center">
              <Link href="/" className="hover:bg-background hover:text-primary px-1 sm:px-2 transition-colors touch-manipulation min-h-[32px] sm:min-h-[auto] flex items-center text-[10px] sm:text-xs md:text-sm">[ HOME ]</Link>
              <Link href="/projects" className="hover:bg-background hover:text-primary px-1 sm:px-2 transition-colors touch-manipulation min-h-[32px] sm:min-h-[auto] flex items-center text-[10px] sm:text-xs md:text-sm">[ PROJECTS ]</Link>
              <Link href="/blog" className="hover:bg-background hover:text-primary px-1 sm:px-2 transition-colors touch-manipulation min-h-[32px] sm:min-h-[auto] flex items-center text-[10px] sm:text-xs md:text-sm">[ BLOG ]</Link>
              <a href="https://github.com/raghav3615" target="_blank" rel="noopener noreferrer" className="hover:bg-background hover:text-primary px-1 sm:px-2 transition-colors touch-manipulation min-h-[32px] sm:min-h-[auto] flex items-center text-[10px] sm:text-xs md:text-sm">[ GITHUB ]</a>
            </nav>
          </footer>

          <Analytics />
          <GoogleAnalyticsWrapper gaId={process.env.NEXT_PUBLIC_GA_ID || ''} />
        </ThemeProvider>
      </body>
    </html>
  );
}
