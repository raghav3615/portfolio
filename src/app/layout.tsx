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
    default: "Raghav Dadhich (ragzus) - Full Stack Developer & AI Engineer",
    template: "%s | Raghav Dadhich",
  },
  description: "Portfolio of Raghav Dadhich (also known as ragzus) - Full Stack Developer, AI/ML Engineer, and Computer Science student at VIT Bhopal. Expert in React, Next.js, Python, and Machine Learning. Passionate about technology, football, chess, and music.",
  keywords: [
    "Raghav Dadhich",
    "raghav ddhich",
    "ragzus",
    "Raghav",
    "Raghav Dadhich portfolio",
    "raghav dadhich developer",
    "Full Stack Developer",
    "AI Engineer",
    "Machine Learning",
    "React Developer",
    "Next.js Developer",
    "JavaScript",
    "Python",
    "VIT Bhopal",
    "Web Developer India",
    "ML Engineer",
    "Open Source Contributor"
  ],
  authors: [{ name: "Raghav Dadhich", url: "https://raghavdev.vercel.app" }],
  creator: "Raghav Dadhich",
  publisher: "Raghav Dadhich",
  alternates: {
    canonical: "https://raghavdev.vercel.app",
  },
  openGraph: {
    title: "Raghav Dadhich (ragzus) - Full Stack Developer & AI Engineer",
    description: "Portfolio of Raghav Dadhich (ragzus) - Full Stack Developer, AI/ML Engineer, and Computer Science student at VIT Bhopal. Expert in React, Next.js, Python, and Machine Learning.",
    url: "https://raghavdev.vercel.app",
    siteName: "Raghav Dadhich Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Raghav Dadhich (ragzus) - Full Stack Developer & AI Engineer",
    description: "Portfolio of Raghav Dadhich (ragzus) - Full Stack Developer, AI/ML Engineer at VIT Bhopal.",
    creator: "@raghav_dadhich",
    site: "@raghav_dadhich",
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
                "alternateName": ["ragzus", "raghav ddhich", "Raghav"],
                "url": "https://raghavdev.vercel.app",
                "image": "https://raghavdev.vercel.app/dp3.jpg",
                "jobTitle": "Full Stack Developer & AI Engineer",
                "description": "Full Stack Developer, AI/ML Engineer, and Computer Science student at VIT Bhopal. Expert in React, Next.js, Python, and Machine Learning.",
                "email": "dadhichraghav896@gmail.com",
                "sameAs": [
                  "https://github.com/raghav3615",
                  "https://twitter.com/raghav_dadhich"
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
                  "Machine Learning",
                  "AI Engineering",
                  "JavaScript",
                  "TypeScript"
                ]
              })
            }}
          />

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
