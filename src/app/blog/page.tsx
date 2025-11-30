'use client';
import Link from 'next/link';
import { FaArrowLeft, FaPen, FaClock, FaRocket, FaBrain, FaCode } from 'react-icons/fa';
import { HiOutlineSparkles, HiOutlineLightBulb } from 'react-icons/hi';

export default function Blog() {
  const upcomingPosts = [
    {
      title: "Building AI-Powered Web Applications",
      description: "A deep dive into integrating machine learning models with modern web frameworks",
      category: "AI/ML",
      readTime: "8 min read",
      date: "PENDING",
      icon: FaBrain
    },
    {
      title: "Modern React Patterns in 2025",
      description: "Exploring the latest React patterns, hooks, and best practices for scalable applications",
      category: "React",
      readTime: "6 min read", 
      date: "PENDING",
      icon: FaCode
    },
    {
      title: "From Idea to Deployment",
      description: "A complete guide to building and deploying full-stack applications in the modern era",
      category: "DevOps",
      readTime: "12 min read",
      date: "PENDING", 
      icon: FaRocket
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground font-mono p-4 md:p-8 selection:bg-primary selection:text-background overflow-x-hidden">
      <div className="max-w-4xl mx-auto space-y-8">
        
        {/* Header */}
        <div className="border-b border-border pb-4 mb-8">
          <div className="flex items-center gap-2 mb-4">
            <Link 
              href="/" 
              className="text-primary hover:underline flex items-center gap-2"
            >
              <FaArrowLeft />
              cd ..
            </Link>
          </div>
          <h1 className="text-2xl md:text-3xl font-bold text-primary">
            <span className="text-foreground">raghav@portfolio:~/blog$</span> ls -la
          </h1>
          <p className="text-sm opacity-70 mt-2">
            Status: Directory empty (Work in Progress)
          </p>
        </div>

        {/* Coming Soon Section */}
        <div className="border border-dashed border-primary p-6 mb-12 text-center">
          <HiOutlineSparkles className="text-primary text-3xl mx-auto mb-4" />
          <h2 className="text-xl font-bold mb-3">
            <span className="text-primary">&gt;</span> System Update in Progress...
          </h2>
          <p className="text-sm opacity-80 max-w-md mx-auto font-mono">
            [INFO] Blog module is currently compiling.
            <br />
            [INFO] Estimated completion time: Unknown.
          </p>
        </div>

        {/* Upcoming Posts Preview */}
        <div className="mb-12">
          <h3 className="text-xl font-bold mb-6 flex items-center gap-2 border-b border-border pb-2">
            <FaPen className="text-primary" />
            ./upcoming_posts.log
          </h3>
          
          <div className="grid gap-4">
            {upcomingPosts.map((post, index) => (
              <div
                key={index}
                className="border-l-2 border-border pl-4 py-2 hover:border-primary transition-colors group"
              >
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-2 mb-2">
                  <div>
                    <h4 className="font-bold text-lg group-hover:text-primary transition-colors">
                      {post.title}
                    </h4>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-xs border border-primary/50 text-primary px-1">
                        {post.category}
                      </span>
                      <span className="text-xs opacity-50">
                        // {post.readTime}
                      </span>
                    </div>
                  </div>
                  <span className="text-xs font-bold text-yellow-500 animate-pulse">
                    [{post.date}]
                  </span>
                </div>
                <p className="text-sm opacity-70 leading-relaxed">
                  {post.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-12 border-t border-border pt-8 text-center">
          <div className="inline-block p-6">
            <HiOutlineLightBulb className="text-primary text-3xl mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Subscribe to stdout</h3>
            <p className="text-sm opacity-80 mb-4 max-w-md mx-auto">
              Receive system notifications when new logs are written.
            </p>
            <Link
              href="mailto:dadhichraghav896@gmail.com?subject=Blog%20Updates&body=Hi%20Raghav!%20I'd%20like%20to%20stay%20updated%20with%20your%20blog%20posts."
              className="inline-flex items-center gap-2 bg-primary text-background px-6 py-2 font-bold hover:opacity-90 transition-opacity"
            >
              [ SUBSCRIBE ]
              <HiOutlineSparkles />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}