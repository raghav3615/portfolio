'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaArrowLeft, FaCode, FaRocket, FaBrain, FaShieldAlt, FaGamepad, FaMobile } from 'react-icons/fa';
import { HiOutlineSparkles, HiOutlineCode } from 'react-icons/hi';
import TechStack from '@/components/TechStack';

export default function Projects() {
  const projects = [
    {
      title: "Twizzy Twin",
      description: "A sophisticated AI assistant that learns your personal style and preferences to help with scheduling, email management, and research tasks. Built with modern AI/ML technologies.",
      tech: ['AI/ML', 'Python', 'React', 'Node.js', 'OpenAI'],
      github: "https://github.com/raghav3615/hackcrux",
      demo: null,
      icon: HiOutlineSparkles,
      gradient: "from-blue-500/20 to-purple-500/20",
      color: "blue",
      year: "2025"
    },
    {
      title: "WeCare",
      description: "A transparent blockchain-based platform for managing organ donation processes, registration, and transplant matching. Ensuring security and trust in life-saving procedures.",
      tech: ['Blockchain', 'Web3', 'React', 'Solidity', 'Ethereum'],
      github: "https://github.com/raghav3615/organdonation",
      demo: null,
      icon: FaShieldAlt,
      gradient: "from-green-500/20 to-emerald-500/20",
      color: "green",
      year: "2025"
    },
    {
      title: "TaskFlow Pro",
      description: "A modern task management application with real-time collaboration, advanced filtering, and productivity analytics. Perfect for teams and individuals.",
      tech: ['React', 'Next.js', 'TypeScript', 'MongoDB', 'Socket.io'],
      github: "https://github.com/raghav3615/taskflow",
      demo: "https://taskflow-demo.vercel.app",
      icon: FaCode,
      gradient: "from-orange-500/20 to-red-500/20",
      color: "orange",
      year: "2024"
    },
    {
      title: "SmartChat AI",
      description: "An intelligent chatbot application with natural language processing capabilities, supporting multiple conversation contexts and learning user preferences.",
      tech: ['Python', 'FastAPI', 'React', 'TensorFlow', 'NLP'],
      github: "https://github.com/raghav3615/smartchat",
      demo: null,
      icon: FaBrain,
      gradient: "from-purple-500/20 to-pink-500/20",
      color: "purple",
      year: "2024"
    },
    {
      title: "GameHub",
      description: "A responsive gaming platform showcasing popular games with search, filtering, and detailed game information. Built with modern web technologies.",
      tech: ['React', 'TypeScript', 'Vite', 'CSS3', 'API Integration'],
      github: "https://github.com/raghav3615/gamehub",
      demo: "https://gamehub-demo.netlify.app",
      icon: FaGamepad,
      gradient: "from-cyan-500/20 to-blue-500/20",
      color: "cyan",
      year: "2024"
    },
    {
      title: "WeatherWise",
      description: "A beautiful weather application with location-based forecasts, interactive maps, and weather alerts. Features smooth animations and modern UI.",
      tech: ['React Native', 'TypeScript', 'Weather API', 'Maps API'],
      github: "https://github.com/raghav3615/weatherwise",
      demo: null,
      icon: FaMobile,
      gradient: "from-teal-500/20 to-green-500/20",
      color: "teal",
      year: "2024"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute top-60 right-10 w-40 h-40 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute bottom-40 left-1/2 w-36 h-36 bg-secondary/10 rounded-full blur-3xl" />
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
              My Projects
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-muted-foreground text-lg max-w-2xl mx-auto"
            >
              A collection of projects I&apos;ve built, from AI-powered applications to modern web solutions. 
              Each project represents a learning journey and a problem solved.
            </motion.p>
          </div>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid gap-6 md:grid-cols-2"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              className="bg-card/30 backdrop-blur-sm border border-border/50 rounded-xl p-6 transition-all hover:border-primary/30 group"
            >
              {/* Project Header */}
              <div className="flex items-start gap-4 mb-4">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${project.gradient} flex items-center justify-center`}>
                  <project.icon className={`text-${project.color}-500 text-xl`} />
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-bold text-xl group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <span className="text-sm text-muted-foreground bg-secondary/50 px-3 py-1 rounded-full">
                      {project.year}
                    </span>
                  </div>
                </div>
              </div>

              {/* Project Description */}
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                {project.description}
              </p>              {/* Tech Stack */}
              <div className="mb-4">
                <TechStack 
                  technologies={project.tech} 
                  variant="pills" 
                  size="sm" 
                />
              </div>

              {/* Project Links */}
              <div className="flex gap-3">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  <FaGithub />
                  Code
                </a>
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    <FaExternalLinkAlt />
                    Live Demo
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="bg-card/30 backdrop-blur-sm border border-border/50 rounded-xl p-8">
            <HiOutlineCode className="text-primary text-3xl mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-4">Want to Collaborate?</h3>
            <p className="text-muted-foreground mb-6 max-w-md mx-auto">
              I&apos;m always excited to work on new projects and tackle interesting challenges. 
              Let&apos;s build something amazing together!
            </p>
            <Link
              href="mailto:dadhichraghav896@gmail.com"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-primary-foreground px-6 py-3 rounded-xl font-semibold transition-all"
            >
              Start a Project
              <FaRocket />
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}