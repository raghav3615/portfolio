'use client';
import { FaLinkedin, FaGithub, FaEnvelope, FaRegSun, FaRegMoon, FaHome, FaProjectDiagram, FaCode, FaMapMarkerAlt, FaRocket } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { HiOutlineSparkles, HiOutlineLightBulb } from 'react-icons/hi';
import Link from 'next/link';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import ResumeButton from '@/components/ResumeButton';
import TechStack from '@/components/TechStack';
// import FloatingContact from '@/components/FloatingContact';


export default function Home() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, 100]);
  
  useEffect(() => setMounted(true), []);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const userEmail = formData.get('email') as string;
    const message = formData.get('message') as string;
    
    const myEmail = "dadhichraghav896@gmail.com"; 
    
    const subject = encodeURIComponent(`New message from ${userEmail} via Portfolio`);
    const body = encodeURIComponent(
      `From: ${userEmail}\n\nMessage:\n${message}`
    );
    
    window.location.href = `mailto:${myEmail}?subject=${subject}&body=${body}`;
  };

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground font-sans relative pb-28 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 pointer-events-none">
        <motion.div 
          style={{ y }}
          className="absolute top-20 left-10 w-32 h-32 bg-primary/5 rounded-full blur-3xl"
        />
        <motion.div 
          style={{ y: useTransform(scrollYProgress, [0, 1], [0, -100]) }}
          className="absolute top-60 right-10 w-40 h-40 bg-accent/10 rounded-full blur-3xl"
        />
      </div>

      {/* Main Container */}
      <div className="w-full max-w-4xl mx-auto px-4 sm:px-8 relative z-10">
        {/* Professional Profile Card */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="pt-10 pb-8"
        >
          <div className="bg-card/40 backdrop-blur-sm border border-border/50 rounded-2xl p-6 sm:p-8 shadow-xl relative">
            {/* Social Media Icons - Top Right */}
            <div className="absolute top-4 right-4 flex gap-2">
              <a
                href="https://github.com/raghav3615"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-background/60 hover:bg-background/80 rounded-lg transition-colors"
                aria-label="GitHub"
              >
                <FaGithub className="w-4 h-4 text-foreground" />
              </a>
              <a
                href="https://twitter.com/raghav_dadhich"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-background/60 hover:bg-background/80 rounded-lg transition-colors"
                aria-label="X (Twitter)"
              >
                <FaXTwitter className="w-4 h-4 text-foreground" />
              </a>
            </div>

            <div className="flex flex-row items-start gap-4 sm:gap-6">
              {/* Profile Picture */}
              <motion.div 
                className="flex-shrink-0"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="w-[80px] h-[80px] sm:w-[120px] sm:h-[120px] rounded-2xl overflow-hidden shadow-lg border-2 border-border/30">
                  <Image
                    src="/dp3.jpg"
                    alt="Raghav Dadhich - Full Stack Developer"
                    width={500}
                    height={500}
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>
              
              {/* Profile Info */}
              <div className="flex-1 text-left">
                <motion.h1 
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-xl sm:text-3xl font-bold mb-1 text-foreground"
                >
                  Raghav Dadhich
                </motion.h1>
                
                <motion.p 
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="text-sm sm:text-lg text-muted-foreground mb-3 sm:mb-4"
                >
                  Full Stack Developer
                </motion.p>
                
                {/* Contact Info */}
                <motion.div 
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="space-y-1.5 sm:space-y-2 mb-3 sm:mb-4"
                >
                  <div className="flex items-center justify-start gap-2 text-xs sm:text-sm text-muted-foreground">
                    <FaMapMarkerAlt className="text-primary w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
                    <span>Bhopal, India</span>
                  </div>
                  
                  <div className="flex items-center justify-start gap-2 text-xs sm:text-sm">
                    <FaEnvelope className="text-primary w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
                    <a 
                      href="mailto:dadhichraghav896@gmail.com" 
                      className="text-muted-foreground hover:text-primary transition-colors truncate"
                    >
                      dadhichraghav896@gmail.com
                    </a>
                  </div>
                  
                  <div className="flex items-center justify-start gap-2 text-xs sm:text-sm">
                    <FaLinkedin className="text-primary w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
                    <a 
                      href="https://www.linkedin.com/in/raghavhere/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      raghavhere
                    </a>
                  </div>
                </motion.div>
                
                {/* Action Button */}
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="flex justify-start"
                >
                  <ResumeButton />
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Enhanced About Section */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mb-8"
        >
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <HiOutlineLightBulb className="text-primary" />
            About Me
          </h2>
          <div className="bg-card/30 backdrop-blur-sm border border-border/50 rounded-xl p-6 space-y-3">
            <p className="text-muted-foreground leading-relaxed">
              I&apos;m a <span className="text-foreground font-semibold">Full Stack Developer</span> and <span className="text-foreground font-semibold">Open Source Contributor</span>.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              I specialize in <span className="text-primary font-medium">modern web technologies</span> and love creating solutions that make a real impact. Currently pursuing Computer Science with AI/ML specialization.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              When I&apos;m not coding, you&apos;ll find me watching football ⚽, strategizing over chess ♟️, discovering new music 🎵, or crafting the perfect meme 😄
            </p>
            <div className="pt-2">
              <Link 
                href="mailto:dadhichraghav896@gmail.com" 
                className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium transition-colors underline"
              >
                <FaEnvelope />
                Let&apos;s connect and build something amazing together!
              </Link>
            </div>
          </div>
        </motion.section>
        {/* Enhanced Experience Section */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mb-8"
        >
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <FaCode className="text-primary" />
            Experience
          </h2>
          <div className="space-y-4">
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="bg-card/30 backdrop-blur-sm border border-border/50 rounded-xl p-6 transition-all hover:border-primary/30"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl overflow-hidden border-2 border-primary/20 bg-gradient-to-br from-primary/10 to-accent/10">
                  <Image
                    src="/docq.png"
                    alt="Doc-q Logo"
                    width={48}
                    height={48}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="font-bold text-lg">Web Developer Intern</h3>
                      <p className="text-primary font-medium">Doc-q</p>
                    </div>
                    <span className="text-sm text-muted-foreground bg-secondary/50 px-3 py-1 rounded-full">
                      Oct 2024 - Jan 2025
                    </span>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Developed responsive web applications using React and Next.js. Collaborated with cross-functional teams to deliver user-centric solutions and optimize application performance.
                  </p>
                  <div className="flex flex-wrap gap-2 mt-3">
                    <TechStack 
                      technologies={['React', 'Next.js', 'TypeScript', 'Tailwind CSS']} 
                      variant="pills" 
                      size="sm" 
                    />
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="bg-card/30 backdrop-blur-sm border border-border/50 rounded-xl p-6 transition-all hover:border-primary/30"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl overflow-hidden border-2 border-primary/20 bg-gradient-to-br from-primary/10 to-accent/10">
                  <Image
                    src="/omdena.png"
                    alt="Omdena Logo"
                    width={48}
                    height={48}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="font-bold text-lg">Junior ML Engineer</h3>
                      <p className="text-primary font-medium">Omdena VIT Bhopal Chapter</p>
                    </div>
                    <span className="text-sm text-muted-foreground bg-secondary/50 px-3 py-1 rounded-full">
                      Oct 2024 - Dec 2024
                    </span>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Worked on machine learning projects focusing on real-world problem solving. Implemented AI models using Python and PyTorch for data analysis and predictive modeling.
                  </p>
                  <div className="flex flex-wrap gap-2 mt-3">
                    <TechStack 
                      technologies={['Python', 'PyTorch', 'Machine Learning', 'Data Analysis']} 
                      variant="pills" 
                      size="sm" 
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.section>
        {/* Enhanced Projects Section */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mb-8"
        >
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <FaRocket className="text-primary" />
            Featured Projects
          </h2>
          <div className="space-y-4">
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="bg-card/30 backdrop-blur-sm border border-border/50 rounded-xl p-6 transition-all hover:border-primary/30"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center">
                  <HiOutlineSparkles className="text-blue-500 text-xl" />
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="font-bold text-lg">
                        <Link 
                          href="https://github.com/raghav3615/hackcrux" 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="text-primary hover:text-primary/80 transition-colors"
                        >
                          Twizzy Twin ↗
                        </Link>
                      </h3>
                      <p className="text-muted-foreground text-sm">AI-Powered Personal Assistant</p>
                    </div>
                    <span className="text-sm text-muted-foreground bg-secondary/50 px-3 py-1 rounded-full">
                      2025
                    </span>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                    A sophisticated AI assistant that learns your personal style and preferences to help with scheduling, email management, and research tasks. Built with modern AI/ML technologies.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {['AI/ML', 'Python', 'React', 'Node.js'].map(tech => (
                      <span key={tech} className="text-xs bg-blue-500/10 text-blue-600 px-2 py-1 rounded-md">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="bg-card/30 backdrop-blur-sm border border-border/50 rounded-xl p-6 transition-all hover:border-primary/30"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500/20 to-emerald-500/20 flex items-center justify-center">
                  <FaRocket className="text-green-500 text-xl" />
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="font-bold text-lg">
                        <Link 
                          href="https://github.com/raghav3615/organdonation" 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="text-primary hover:text-primary/80 transition-colors"
                        >
                          WeCare ↗
                        </Link>
                      </h3>
                      <p className="text-muted-foreground text-sm">Blockchain Organ Donation Platform</p>
                    </div>
                    <span className="text-sm text-muted-foreground bg-secondary/50 px-3 py-1 rounded-full">
                      2025
                    </span>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                    A transparent blockchain-based platform for managing organ donation processes, registration, and transplant matching. Ensuring security and trust in life-saving procedures.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <TechStack 
                      technologies={['Blockchain', 'Web3', 'React', 'Solidity']} 
                      variant="pills" 
                      size="sm" 
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="mt-6 text-center"
          >
            <Link 
              href="/projects" 
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium transition-colors bg-primary/10 px-4 py-2 rounded-lg hover:bg-primary/20"
            >
              <FaProjectDiagram />
              Explore All Projects
            </Link>
          </motion.div>
        </motion.section>
        

        {/* Featured Technologies Section */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="mb-8"
        >
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <HiOutlineSparkles className="text-primary" />
            Tech Stack
          </h2>
          <div className="bg-card/30 backdrop-blur-sm border border-border/50 rounded-xl p-6">
            <TechStack 
              technologies={['React', 'Next.js', 'JavaScript', 'TypeScript','Tailwind CSS', 'MongoDB', 'Node.js', 'Python', 'PyTorch', 'PostgreSQL', 'C++', 'Docker']} 
              variant="icons-with-text" 
              size="lg" 
            />
          </div>
        </motion.section>

        {/* Enhanced Contact Form */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="mb-20 mt-12"
        >
          <div className="text-center mb-8">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Let&apos;s Build Something Amazing Together</h2>
            <p className="text-muted-foreground max-w-md mx-auto">
              Have a project in mind? Let&apos;s discuss how we can bring your ideas to life!
            </p>
          </div>
          
          <div className="bg-card/30 backdrop-blur-sm border border-border/50 rounded-xl p-8 max-w-lg mx-auto">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="contact-email" className="block text-sm font-medium text-foreground mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  id="contact-email"
                  name="email"
                  required
                  placeholder="your.email@example.com"
                  className="w-full p-4 border border-border/50 rounded-xl bg-background/50 backdrop-blur-sm focus:ring-2 focus:ring-primary/50 focus:border-primary/50 placeholder:text-muted-foreground/60 transition-all"
                />
              </div>
              <div>
                <label htmlFor="contact-message" className="block text-sm font-medium text-foreground mb-2">
                  Your Message
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={5}
                  required
                  placeholder="Hi Raghav! I'd love to discuss a project opportunity with you..."
                  className="w-full p-4 border border-border/50 rounded-xl bg-background/50 backdrop-blur-sm focus:ring-2 focus:ring-primary/50 focus:border-primary/50 placeholder:text-muted-foreground/60 transition-all resize-none"
                />
              </div>
              
              <div className="text-center">
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-primary-foreground px-8 py-4 rounded-xl font-semibold transition-all focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2 focus:ring-offset-background shadow-lg"
                >
                  Send Message 🚀
                </motion.button>
                <p className="text-xs text-muted-foreground mt-3">
                  I typically respond within 24 hours ⚡
                </p>
              </div>
            </form>
          </div>
        </motion.section>

        </div>
      {/* Floating Contact Button */}
      {/* <FloatingContact /> */}

      {/* Enhanced Bottom Navigation */}
      <motion.nav 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.2 }}
        className="fixed left-1/2 -translate-x-1/2 bottom-6 w-auto max-w-[85vw] px-4 py-3 bg-background/80 backdrop-blur-xl shadow-2xl rounded-2xl flex items-center h-auto z-50 gap-3 border border-border/50"
      >
        <Link href="/" aria-label="Home" className="group">
          <motion.div 
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="w-10 h-10 flex items-center justify-center rounded-xl transition bg-primary/10 group-hover:bg-primary/20 border border-primary/20"
          >
            <FaHome className="text-primary" />
          </motion.div>
        </Link>
        <Link href="/projects" aria-label="Projects" className="group">
          <motion.div 
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="w-10 h-10 flex items-center justify-center rounded-xl transition bg-secondary/60 group-hover:bg-secondary/80 border border-border/50"
          >
            <FaProjectDiagram className="text-foreground" />
          </motion.div>
        </Link>
        <a href="https://github.com/raghav3615" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="group">
          <motion.div 
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="w-10 h-10 flex items-center justify-center rounded-xl transition bg-secondary/60 group-hover:bg-secondary/80 border border-border/50"
          >
            <FaGithub className="text-foreground" />
          </motion.div>
        </a>
        <a href="https://www.linkedin.com/in/raghavhere/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="group">
          <motion.div 
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="w-10 h-10 flex items-center justify-center rounded-xl transition bg-secondary/60 group-hover:bg-secondary/80 border border-border/50"
          >
            <FaLinkedin className="text-foreground" />
          </motion.div>
        </a>
        <a href="https://twitter.com/raghav_dadhich" target="_blank" rel="noopener noreferrer" aria-label="X" className="group">
          <motion.div 
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="w-10 h-10 flex items-center justify-center rounded-xl transition bg-secondary/60 group-hover:bg-secondary/80 border border-border/50"
          >
            <FaXTwitter className="text-foreground" />
          </motion.div>
        </a>
        <a href="mailto:dadhichraghav896@gmail.com" aria-label="Email" className="group">
          <motion.div 
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="w-10 h-10 flex items-center justify-center rounded-xl transition bg-secondary/60 group-hover:bg-secondary/80 border border-border/50"
          >
            <FaEnvelope className="text-foreground" />
          </motion.div>
        </a>
        <button
          aria-label="Toggle Theme"
          className="group focus:outline-none"
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        >
          <motion.div 
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="w-10 h-10 flex items-center justify-center rounded-xl transition bg-secondary/60 group-hover:bg-secondary/80 border border-border/50"
          >
            {mounted && (
              theme === 'dark' ? 
              <FaRegMoon className="text-foreground" /> : 
              <FaRegSun className="text-foreground" />
            )}
          </motion.div>
        </button>
      </motion.nav>

      {/* Enhanced Footer */}
      <motion.footer 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.3 }}
        className="w-full border-t border-border/50 bg-card/20 backdrop-blur-sm"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-8 py-8 flex flex-col items-center gap-6">
          <div className="flex items-center gap-6">
            <motion.a 
              whileHover={{ scale: 1.1 }}
              href="https://github.com/raghav3615" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="GitHub" 
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <FaGithub className="text-xl" />
            </motion.a>
            <motion.a 
              whileHover={{ scale: 1.1 }}
              href="https://www.linkedin.com/in/raghavhere/" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="LinkedIn" 
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <FaLinkedin className="text-xl" />
            </motion.a>
            <motion.a 
              whileHover={{ scale: 1.1 }}
              href="https://twitter.com/raghav_dadhich" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="X (formerly Twitter)" 
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <FaXTwitter className="text-xl" />
            </motion.a>
            <motion.a 
              whileHover={{ scale: 1.1 }}
              href="mailto:dadhichraghav896@gmail.com" 
              aria-label="Email" 
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <FaEnvelope className="text-xl" />
            </motion.a>
          </div>
          
          <div className="text-center">
            <p className="text-sm text-muted-foreground mb-2">
              Built with ❤️ using Next.js, TypeScript & Tailwind CSS
            </p>
            <p className="text-xs text-muted-foreground">
              © {new Date().getFullYear()} Raghav Dadhich. All rights reserved.
            </p>
          </div>
        </div>
      </motion.footer>
    </div>
  );
}
