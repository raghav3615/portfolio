'use client';
import Link from 'next/link';

// Note: Page-specific metadata is handled in layout.tsx template
// Blog page will use the default title template: "Blog | Raghav Dadhich"

export default function Blog() {
  return (
    <div className="min-h-screen bg-black text-white font-mono flex items-center justify-center p-6 selection:bg-primary selection:text-background">
      <div className="text-left max-w-2xl">

        {/* Title */}
        <h1 className="text-5xl md:text-3xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-500 bg-clip-text text-transparent tracking-tight">
          blog
        </h1>

        {/* Subtitle */}
        <p className="text-[#e85a7e] text-lg md:text-xl mb-6 tracking-wide">
          the personal corner
        </p>

        {/* Description */}
        <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-10">
          here you will find personal opinions, thoughts, and experiences on a variety of topics
        </p>

        {/* Year filters */}
        <div className="flex items-center justify-start gap-3 text-sm mb-20">
          <span className="text-[#e85a7e] hover:text-[#ff7a9e] cursor-pointer transition-colors">
            2026
          </span>

        </div>

        {/* Empty state */}
        <div className="text-gray-500 text-sm space-y-2">
          <p>
            <span className="text-primary">{'>'}</span> no posts yet...
          </p>
          <p className="text-gray-600">
            exciting content is coming soon. check back later!
          </p>
        </div>

        {/* Back to home */}
        <div className="mt-16">
          <Link
            href="/"
            className="text-gray-600 hover:text-gray-400 text-sm transition-colors"
          >
            ← back to home
          </Link>
        </div>

      </div>
    </div>
  );
}