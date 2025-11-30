'use client';
import Link from 'next/link';
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
      year: "2025"
    },
    {
      title: "WeCare",
      description: "A transparent blockchain-based platform for managing organ donation processes, registration, and transplant matching. Ensuring security and trust in life-saving procedures.",
      tech: ['Blockchain', 'Web3', 'React', 'Solidity', 'Ethereum'],
      github: "https://github.com/raghav3615/organdonation",
      demo: null,
      icon: FaShieldAlt,
      year: "2025"
    },
    {
      title: "TaskFlow Pro",
      description: "A modern task management application with real-time collaboration, advanced filtering, and productivity analytics. Perfect for teams and individuals.",
      tech: ['React', 'Next.js', 'TypeScript', 'MongoDB', 'Socket.io'],
      github: "https://github.com/raghav3615/taskflow",
      demo: "https://taskflow-demo.vercel.app",
      icon: FaCode,
      year: "2024"
    },
    {
      title: "SmartChat AI",
      description: "An intelligent chatbot application with natural language processing capabilities, supporting multiple conversation contexts and learning user preferences.",
      tech: ['Python', 'FastAPI', 'React', 'TensorFlow', 'NLP'],
      github: "https://github.com/raghav3615/smartchat",
      demo: null,
      icon: FaBrain,
      year: "2024"
    },
    {
      title: "GameHub",
      description: "A responsive gaming platform showcasing popular games with search, filtering, and detailed game information. Built with modern web technologies.",
      tech: ['React', 'TypeScript', 'Vite', 'CSS3', 'API Integration'],
      github: "https://github.com/raghav3615/gamehub",
      demo: "https://gamehub-demo.netlify.app",
      icon: FaGamepad,
      year: "2024"
    },
    {
      title: "WeatherWise",
      description: "A beautiful weather application with location-based forecasts, interactive maps, and weather alerts. Features smooth animations and modern UI.",
      tech: ['React Native', 'TypeScript', 'Weather API', 'Maps API'],
      github: "https://github.com/raghav3615/weatherwise",
      demo: null,
      icon: FaMobile,
      year: "2024"
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
            <span className="text-foreground">raghav@portfolio:~/projects$</span> ls -la
          </h1>
          <p className="text-sm opacity-70 mt-2">
            Total {projects.length} projects found.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="border border-border p-4 hover:bg-primary/5 transition-colors group"
            >
              {/* Project Header */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-3">
                <div className="flex items-center gap-3">
                  <span className="text-primary font-bold text-lg">
                    ./{project.title.toLowerCase().replace(/\s+/g, '-')}
                  </span>
                  <span className="text-xs opacity-50 border border-border px-1">
                    {project.year}
                  </span>
                </div>
                <div className="flex gap-4 text-sm">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 hover:text-primary hover:underline"
                  >
                    <FaGithub />
                    [ source ]
                  </a>
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 hover:text-primary hover:underline"
                    >
                      <FaExternalLinkAlt />
                      [ demo ]
                    </a>
                  )}
                </div>
              </div>

              {/* Project Description */}
              <p className="text-sm opacity-80 mb-4 pl-4 border-l-2 border-border/30">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="pl-4">
                <div className="text-xs opacity-60 mb-1">Dependencies:</div>
                <TechStack 
                  technologies={project.tech} 
                  variant="pills" 
                  size="sm" 
                />
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-12 border-t border-border pt-8 text-center">
          <div className="inline-block border border-dashed border-primary p-6">
            <HiOutlineCode className="text-primary text-3xl mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Want to Collaborate?</h3>
            <p className="text-sm opacity-80 mb-4 max-w-md mx-auto">
              I&apos;m always excited to work on new projects and tackle interesting challenges.
            </p>
            <Link
              href="mailto:dadhichraghav896@gmail.com"
              className="inline-flex items-center gap-2 bg-primary text-background px-6 py-2 font-bold hover:opacity-90 transition-opacity"
            >
              [ START NEW PROJECT ]
              <FaRocket />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}