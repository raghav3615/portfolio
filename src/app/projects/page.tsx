'use client';
import Link from 'next/link';
import { FaGithub, FaExternalLinkAlt, FaArrowLeft, FaCode, FaRocket, FaBrain, FaShieldAlt, FaGamepad, FaMobile, FaLink, FaLock, FaVideo, FaStickyNote, FaBan, FaTerminal, FaMusic, FaBook, FaCog } from 'react-icons/fa';
import { HiOutlineSparkles, HiOutlineCode } from 'react-icons/hi';
import TechStack from '@/components/TechStack';

export default function Projects() {
  const projects = [
    {
      title: "Quickie",
      description: "Download any video from your favorite social media sites. A productivity tool built with Next.js and modern web technologies.",
      tech: ['TypeScript', 'Next.js', 'Tailwind CSS', 'Productivity'],
      github: "https://github.com/raghav3615/quickie",
      demo: null,
      icon: FaVideo,
      year: "2026"
    },
    {
      title: "chotuURL",
      description: "A modern, minimal URL shortener built with Next.js 15, Supabase, and Tailwind CSS. Full-stack application with database integration.",
      tech: ['TypeScript', 'Next.js 15', 'Supabase', 'Tailwind CSS', 'Full-Stack'],
      github: "https://github.com/raghav3615/chotuURL",
      demo: null,
      icon: FaLink,
      year: "2025"
    },
    {
      title: "slime",
      description: "Connect your favorite services and automate workflows without code. A powerful workflow automation platform built with microservices architecture.",
      tech: ['TypeScript', 'Next.js', 'PostgreSQL', 'Microservices', 'Workflow Automation'],
      github: "https://github.com/raghav3615/slime",
      demo: null,
      icon: FaCog,
      year: "2025"
    },
    {
      title: "yikes",
      description: "Self-hosted, zero-knowledge password manager. Secure your credentials with complete privacy and control over your data.",
      tech: ['TypeScript', 'Zero-Knowledge', 'Security', 'Self-Hosted'],
      github: "https://github.com/raghav3615/yikes",
      demo: null,
      icon: FaLock,
      year: "2025"
    },
    {
      title: "stalki",
      description: "Browser extension that tracks how much time you spend on each tab. Gain insights into your browsing habits and improve productivity.",
      tech: ['JavaScript', 'Browser Extension', 'Productivity', 'Web Extension API'],
      github: "https://github.com/raghav3615/stalki",
      demo: null,
      icon: FaMobile,
      year: "2025"
    },
    {
      title: "spotify-cli",
      description: "A command-line tool to fetch lyrics for your currently playing Spotify songs. Perfect for developers who love music and the terminal.",
      tech: ['TypeScript', 'CLI', 'Spotify API', 'Music'],
      github: "https://github.com/raghav3615/spotify-cli",
      demo: null,
      icon: FaMusic,
      year: "2025"
    },
    {
      title: "karma",
      description: "Notion in CLI. Manage your notes and workspace directly from the terminal with a powerful command-line interface.",
      tech: ['JavaScript', 'CLI', 'Productivity', 'Notion API'],
      github: "https://github.com/raghav3615/karma",
      demo: null,
      icon: FaTerminal,
      year: "2025"
    },
    {
      title: "tth",
      description: "Turn plain text into beautiful, realistic handwriting. A productivity tool built with Python and FastAPI.",
      tech: ['Python', 'FastAPI', 'Productivity', 'Text Processing'],
      github: "https://github.com/raghav3615/tth",
      demo: null,
      icon: FaBook,
      year: "2025"
    },
    {
      title: "Notes",
      description: "Quick notes app for capturing your thoughts and ideas. Simple, fast, and efficient note-taking application.",
      tech: ['TypeScript', 'Next.js', 'Productivity'],
      github: "https://github.com/raghav3615/Notes",
      demo: null,
      icon: FaStickyNote,
      year: "2025"
    },
    {
      title: "adblocker",
      description: "Browser extension to block ads and improve your browsing experience. Take control of your web experience.",
      tech: ['JavaScript', 'Browser Extension', 'Ad Blocking'],
      github: "https://github.com/raghav3615/adblocker",
      demo: null,
      icon: FaBan,
      year: "2025"
    },
    {
      title: "compiler",
      description: "Learning how to write a compiler from scratch. Educational project exploring the fundamentals of compiler design and implementation.",
      tech: ['Python', 'Compiler Design', 'Education'],
      github: "https://github.com/raghav3615/compiler",
      demo: null,
      icon: FaCode,
      year: "2026"
    },
    {
      title: "algoritms",
      description: "My journey of learning algorithms and solving problems. A collection of algorithm implementations and problem-solving solutions.",
      tech: ['C++', 'Algorithms', 'Data Structures', 'Problem Solving'],
      github: "https://github.com/raghav3615/algoritms",
      demo: null,
      icon: FaBrain,
      year: "2026"
    },
    {
      title: "Twizzy Twin",
      description: "Personalized AI assistant that learns your style to help with tasks like scheduling, emailing, and research. Built with modern AI technologies.",
      tech: ['JavaScript', 'AI/ML', 'Personalization', 'Automation'],
      github: "https://github.com/raghav3615/Twizzy-Twin",
      demo: null,
      icon: HiOutlineSparkles,
      year: "2025"
    },
    {
      title: "WeCare",
      description: "Organ Donation Management Using Blockchain Technology. A transparent platform for managing organ donation processes and ensuring trust.",
      tech: ['HTML', 'Blockchain', 'Web3', 'Organ Donation'],
      github: "https://github.com/raghav3615/organdonation",
      demo: null,
      icon: FaShieldAlt,
      year: "2025"
    },
    {
      title: "phisher-detector",
      description: "Website that helps users determine whether a URL is phishing or not before using it. Security tool for safe browsing.",
      tech: ['Jupyter Notebook', 'Python', 'Security', 'Phishing Detection', 'ML'],
      github: "https://github.com/raghav3615/phisher-detector",
      demo: null,
      icon: FaShieldAlt,
      year: "2025"
    },
    {
      title: "Code-Editor",
      description: "Code Editor that allows users to collaborate and write code together in real-time. Built for seamless team collaboration.",
      tech: ['JavaScript', 'Real-time Collaboration', 'Code Editor', 'WebSockets'],
      github: "https://github.com/raghav3615/Code-Editor",
      demo: null,
      icon: FaCode,
      year: "2025"
    },
    {
      title: "Medical-Report-Analyzer",
      description: "A project designed to analyze medical reports using AI and deliver insights in a user-friendly way. Healthcare technology application.",
      tech: ['Python', 'AI/ML', 'Healthcare', 'Data Analysis'],
      github: "https://github.com/raghav3615/Medical-Report-Analyzer",
      demo: null,
      icon: FaBrain,
      year: "2024"
    },
    {
      title: "rereact",
      description: "React from scratch. Educational project building React-like library to understand the fundamentals of modern frontend frameworks.",
      tech: ['JavaScript', 'React', 'Webpack', 'Education', 'Frontend'],
      github: "https://github.com/raghav3615/rereact",
      demo: null,
      icon: FaCode,
      year: "2025"
    },
    {
      title: "nextjs-animation-website",
      description: "Discover the world of stunning scroll animations with this Next.js project! Rebuilding part of CodeSandbox's page with Framer Motion and TypeScript.",
      tech: ['TypeScript', 'Next.js', 'Framer Motion', 'Tailwind CSS', 'Animations'],
      github: "https://github.com/raghav3615/nextjs-animation-website",
      demo: null,
      icon: FaCode,
      year: "2024"
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground font-mono p-4 md:p-8 selection:bg-primary selection:text-background overflow-x-hidden">
      <div className="max-w-5xl mx-auto space-y-10">
        
        {/* Header */}
        <div className="border-b-2 border-primary/30 pb-6 mb-10 animate-in fade-in slide-in-from-top-4 duration-700">
          <div className="flex items-center gap-2 mb-5">
            <Link 
              href="/" 
              className="text-primary hover:underline flex items-center gap-2 font-semibold hover:gap-3 transition-all group"
            >
              <FaArrowLeft className="group-hover:-translate-x-1 transition-transform" />
              cd ..
            </Link>
          </div>
          <h1 className="text-2xl md:text-4xl font-bold mb-2">
            <span className="text-foreground">raghav@portfolio:~/projects$</span> <span className="text-primary">ls -la</span>
          </h1>
          <p className="text-sm opacity-70 mt-3 bg-primary/10 border border-primary/20 px-3 py-1 inline-block">
            Total {projects.length} projects found.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid gap-6">
          {projects.map((project, index) => {
            const IconComponent = project.icon;
            return (
              <div
                key={index}
                className="border-2 border-primary/30 p-6 hover:border-primary hover:bg-primary/5 transition-all duration-300 group animate-in fade-in slide-in-from-bottom-4"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {/* Project Header */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 mb-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 flex items-center justify-center border-2 border-primary/30 group-hover:border-primary bg-primary/5 group-hover:bg-primary/10 transition-all">
                      <IconComponent className="text-primary text-xl" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-primary font-bold text-xl group-hover:underline">
                        ./{project.title.toLowerCase().replace(/\s+/g, '-')}
                      </span>
                      <span className="text-xs opacity-60 bg-primary/10 border border-primary/20 px-2 py-0.5 inline-block mt-1 w-fit">
                        {project.year}
                      </span>
                    </div>
                  </div>
                  <div className="flex gap-4 text-sm">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 hover:text-primary hover:underline border border-primary/20 px-3 py-1 hover:border-primary hover:bg-primary/10 transition-all"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <FaGithub />
                      <span>[ source ]</span>
                    </a>
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 hover:text-primary hover:underline border border-primary/20 px-3 py-1 hover:border-primary hover:bg-primary/10 transition-all"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <FaExternalLinkAlt />
                        <span>[ demo ]</span>
                      </a>
                    )}
                  </div>
                </div>

                {/* Project Description */}
                <p className="text-sm opacity-80 mb-5 pl-4 border-l-4 border-primary/30 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="pl-4">
                  <div className="text-xs opacity-60 mb-2 font-semibold text-primary">Dependencies:</div>
                  <TechStack 
                    technologies={project.tech} 
                    variant="pills" 
                    size="sm" 
                  />
                </div>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="mt-16 border-t-2 border-primary/30 pt-12 text-center animate-in fade-in slide-in-from-bottom-4 duration-700">
          <div className="inline-block border-2 border-dashed border-primary/50 p-8 bg-primary/5 hover:border-primary hover:bg-primary/10 transition-all duration-300">
            <HiOutlineCode className="text-primary text-4xl mx-auto mb-5" />
            <h3 className="text-2xl font-bold mb-3 text-primary">Want to Collaborate?</h3>
            <p className="text-sm opacity-80 mb-6 max-w-md mx-auto leading-relaxed">
              I&apos;m always excited to work on new projects and tackle interesting challenges.
            </p>
            <Link
              href="mailto:dadhichraghav896@gmail.com"
              className="inline-flex items-center gap-3 bg-primary text-background px-8 py-3 font-bold hover:bg-primary/90 transition-all border-2 border-primary hover:shadow-lg hover:shadow-primary/50 hover:gap-4"
            >
              <span>[ START NEW PROJECT ]</span>
              <FaRocket className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}