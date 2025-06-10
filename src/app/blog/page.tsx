'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaArrowLeft, FaPen, FaClock, FaRocket, FaBrain, FaCode } from 'react-icons/fa';
import { HiOutlineSparkles, HiOutlineLightBulb } from 'react-icons/hi';

export default function Blog() {
  const upcomingPosts = [
    {
      title: "Building AI-Powered Web Applications",
      description: "A deep dive into integrating machine learning models with modern web frameworks",
      category: "AI/ML",
      readTime: "8 min read",
      date: "Coming Soon",
      icon: FaBrain,
      gradient: "from-blue-500/20 to-purple-500/20"
    },
    {
      title: "Modern React Patterns in 2025",
      description: "Exploring the latest React patterns, hooks, and best practices for scalable applications",
      category: "React",
      readTime: "6 min read", 
      date: "Coming Soon",
      icon: FaCode,
      gradient: "from-cyan-500/20 to-blue-500/20"
    },
    {
      title: "From Idea to Deployment",
      description: "A complete guide to building and deploying full-stack applications in the modern era",
      category: "DevOps",
      readTime: "12 min read",
      date: "Coming Soon", 
      icon: FaRocket,
      gradient: "from-green-500/20 to-emerald-500/20"
    }
  ];  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute top-60 right-10 w-40 h-40 bg-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-8 pt-10 pb-20">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-6 group"
          >
            <FaArrowLeft className="group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Link>
          
          <div className="text-center">
            <motion.h1 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text"
            >
              Tech Blog
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-muted-foreground text-lg max-w-2xl mx-auto"
            >
              Thoughts on technology, development insights, and lessons learned from building modern applications.
            </motion.p>
          </div>
        </motion.div>

        {/* Coming Soon Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-card/30 backdrop-blur-sm border border-border/50 rounded-xl p-8 mb-12 text-center"
        >
          <HiOutlineSparkles className="text-primary text-4xl mx-auto mb-4" />
          <h2 className="text-2xl font-bold mb-3">Blog Coming Soon!</h2>
          <p className="text-muted-foreground max-w-md mx-auto">
            I&apos;m currently working on some exciting articles about web development, AI/ML, and tech insights. 
            Stay tuned for quality content that will help you level up your skills!
          </p>
        </motion.div>

        {/* Upcoming Posts Preview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mb-12"
        >
          <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <FaPen className="text-primary" />
            What&apos;s Coming
          </h3>
          
          <div className="grid gap-6 md:grid-cols-1">
            {upcomingPosts.map((post, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                whileHover={{ scale: 1.01 }}
                className="bg-card/30 backdrop-blur-sm border border-border/50 rounded-xl p-6 transition-all hover:border-primary/30"
              >
                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${post.gradient} flex items-center justify-center`}>
                    <post.icon className="text-xl" />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h4 className="font-bold text-lg mb-1">{post.title}</h4>
                        <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-md">
                          {post.category}
                        </span>
                      </div>
                      <span className="text-sm text-muted-foreground bg-secondary/50 px-3 py-1 rounded-full">
                        {post.date}
                      </span>
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                      {post.description}
                    </p>
                    <div className="flex items-center gap-4 text-xs text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <FaClock />
                        {post.readTime}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Newsletter Signup */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center"
        >
          <div className="bg-card/30 backdrop-blur-sm border border-border/50 rounded-xl p-8">
            <HiOutlineLightBulb className="text-primary text-3xl mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-4">Stay Updated</h3>
            <p className="text-muted-foreground mb-6 max-w-md mx-auto">
              Want to be notified when I publish new articles? Drop me a message and I&apos;ll keep you posted!
            </p>
            <Link
              href="mailto:dadhichraghav896@gmail.com?subject=Blog%20Updates&body=Hi%20Raghav!%20I'd%20like%20to%20stay%20updated%20with%20your%20blog%20posts."
              className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-primary-foreground px-6 py-3 rounded-xl font-semibold transition-all"
            >
              Get Notified
              <HiOutlineSparkles />
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}