'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaLinkedin, FaTwitter, FaGithub, FaDev, FaMedium } from 'react-icons/fa';
import { SiCodeforces } from 'react-icons/si';

export default function Home() {
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 530);
    return () => clearInterval(interval);
  }, []);

  const currentDate = new Date().toDateString();

  return (
    <main className="min-h-screen bg-background text-foreground font-mono p-3 sm:p-4 md:p-8 selection:bg-primary selection:text-background overflow-x-hidden">
      <div className="max-w-5xl mx-auto space-y-8 sm:space-y-10 md:space-y-12">
        
        {/* Terminal Header */}
        <header className="border-b-2 border-primary/30 pb-2 sm:pb-3 mb-6 sm:mb-8 md:mb-10 animate-in fade-in slide-in-from-top-4 duration-700">
          <p className="text-xs sm:text-sm md:text-base opacity-60 mb-1">Last login: {currentDate} on ttys001</p>
          <p className="text-xs sm:text-sm md:text-base font-semibold break-words">
            raghav@portfolio:~$ <span className={`inline-block w-1.5 sm:w-2 h-3 sm:h-4 bg-primary ml-1 ${showCursor ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`}></span>
          </p>
        </header>

        {/* Profile Section (Neofetch style) */}
        <section className="grid lg:grid-cols-[220px_1fr] gap-6 sm:gap-8 md:gap-10 items-start animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100">
          {/* Desktop Profile Image - Only visible on large screens */}
          <div className="hidden lg:block relative group">
            <div className="absolute -inset-1 bg-primary/20 blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative w-52 h-52 border-2 border-primary/50 p-1 bg-background">
              <Image
                src="/dp3.jpg"
                alt="Raghav Dadhich - Full Stack Developer & AI Engineer"
                width={208}
                height={208}
                className="w-full h-full object-cover grayscale contrast-125 group-hover:grayscale-0 transition-all duration-500"
                priority
              />
              <div className="absolute inset-0 border-2 border-primary/0 group-hover:border-primary/50 transition-all duration-500"></div>
            </div>
          </div>
          
          <div className="space-y-2 sm:space-y-3">
            <h1 className="flex items-center gap-2 text-primary text-xl sm:text-2xl font-bold mb-3 sm:mb-4">
              <span className="bg-primary/10 px-2 sm:px-3 py-1 border border-primary/30 text-sm sm:text-base md:text-lg lg:text-2xl">raghav@portfolio</span>
            </h1>
            <div className="grid grid-cols-[100px_1fr] sm:grid-cols-[130px_1fr] gap-x-3 sm:gap-x-6 gap-y-1.5 sm:gap-y-2 text-xs sm:text-sm md:text-base">
              <span className="text-primary font-bold opacity-90">OS</span>
              <span className="opacity-80">PortfolioOS </span>
              
              <span className="text-primary font-bold opacity-90">Host</span>
              <span className="opacity-80">VIT Bhopal University</span>
              
              <span className="text-primary font-bold opacity-90">Kernel</span>
              <span className="opacity-80">Full Stack Developer & Open-Source Contributor</span>
              
              <span className="text-primary font-bold opacity-90">Uptime</span>
              <span className="opacity-80">20 years</span>
              
              <span className="text-primary font-bold opacity-90">Packages</span>
              <span className="opacity-80">React, Next.js, Python, PyTorch, C++</span>
              
              <span className="text-primary font-bold opacity-90">Shell</span>
              <span className="opacity-80">zsh 5.8</span>
              
              <span className="text-primary font-bold opacity-90">Resolution</span>
              <span className="opacity-80">1920x1080</span>
              
              <span className="text-primary font-bold opacity-90">Location</span>
              <span className="opacity-80">Bhopal, India</span>
            </div>
            
            {/* Color Palette Display */}
            <div className="flex flex-wrap gap-1.5 sm:gap-2 mt-4 sm:mt-6 pt-4 sm:pt-6 border-t border-primary/20">
              <div className="w-7 h-7 sm:w-10 sm:h-10 bg-black border-2 border-primary/30 hover:border-primary transition-colors cursor-pointer touch-manipulation" title="Black" aria-label="Color: Black"></div>
              <div className="w-7 h-7 sm:w-10 sm:h-10 bg-red-600 border-2 border-primary/30 hover:border-primary transition-colors cursor-pointer touch-manipulation" title="Red" aria-label="Color: Red"></div>
              <div className="w-7 h-7 sm:w-10 sm:h-10 bg-green-600 border-2 border-primary/30 hover:border-primary transition-colors cursor-pointer touch-manipulation" title="Green" aria-label="Color: Green"></div>
              <div className="w-7 h-7 sm:w-10 sm:h-10 bg-yellow-600 border-2 border-primary/30 hover:border-primary transition-colors cursor-pointer touch-manipulation" title="Yellow" aria-label="Color: Yellow"></div>
              <div className="w-7 h-7 sm:w-10 sm:h-10 bg-blue-600 border-2 border-primary/30 hover:border-primary transition-colors cursor-pointer touch-manipulation" title="Blue" aria-label="Color: Blue"></div>
              <div className="w-7 h-7 sm:w-10 sm:h-10 bg-purple-600 border-2 border-primary/30 hover:border-primary transition-colors cursor-pointer touch-manipulation" title="Purple" aria-label="Color: Purple"></div>
              <div className="w-7 h-7 sm:w-10 sm:h-10 bg-cyan-600 border-2 border-primary/30 hover:border-primary transition-colors cursor-pointer touch-manipulation" title="Cyan" aria-label="Color: Cyan"></div>
              <div className="w-7 h-7 sm:w-10 sm:h-10 bg-gray-200 border-2 border-primary/30 hover:border-primary transition-colors cursor-pointer touch-manipulation" title="White" aria-label="Color: White"></div>
            </div>

            {/* Social Links */}
            <div className="mt-4 sm:mt-6 pt-4 sm:pt-6 border-t border-primary/20">
              <div className="text-xs text-primary font-bold mb-2 sm:mb-3 opacity-90">Social_Networks:</div>
              <div className="flex flex-wrap gap-2 sm:gap-3">
                <a
                  href="https://www.linkedin.com/in/raghavhere/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 sm:gap-2 border-2 border-primary/30 px-2 sm:px-3 py-1.5 sm:py-2 hover:border-primary hover:bg-primary/10 active:bg-primary/20 transition-all group touch-manipulation min-h-[44px]"
                  title="LinkedIn - Raghav Dadhich"
                  aria-label="Visit Raghav Dadhich on LinkedIn"
                >
                  <FaLinkedin className="text-primary group-hover:scale-110 transition-transform text-sm sm:text-base" />
                  <span className="text-xs sm:text-sm font-mono">[LinkedIn]</span>
                </a>
                <a
                  href="https://twitter.com/raghav_dadhich"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 sm:gap-2 border-2 border-primary/30 px-2 sm:px-3 py-1.5 sm:py-2 hover:border-primary hover:bg-primary/10 active:bg-primary/20 transition-all group touch-manipulation min-h-[44px]"
                  title="X (Twitter) - Raghav Dadhich"
                  aria-label="Visit Raghav Dadhich on X (Twitter)"
                >
                  <FaTwitter className="text-primary group-hover:scale-110 transition-transform text-sm sm:text-base" />
                  <span className="text-xs sm:text-sm font-mono">[X]</span>
                </a>
                <a
                  href="https://github.com/raghav3615"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 sm:gap-2 border-2 border-primary/30 px-2 sm:px-3 py-1.5 sm:py-2 hover:border-primary hover:bg-primary/10 active:bg-primary/20 transition-all group touch-manipulation min-h-[44px]"
                  title="GitHub - Raghav Dadhich"
                  aria-label="Visit Raghav Dadhich on GitHub"
                >
                  <FaGithub className="text-primary group-hover:scale-110 transition-transform text-sm sm:text-base" />
                  <span className="text-xs sm:text-sm font-mono">[GitHub]</span>
                </a>
                <a
                  href="https://codeforces.com/profile/ragzus"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 sm:gap-2 border-2 border-primary/30 px-2 sm:px-3 py-1.5 sm:py-2 hover:border-primary hover:bg-primary/10 active:bg-primary/20 transition-all group touch-manipulation min-h-[44px]"
                  title="Codeforces - ragzus"
                  aria-label="Visit ragzus on Codeforces"
                >
                  <SiCodeforces className="text-primary group-hover:scale-110 transition-transform text-sm sm:text-base" />
                  <span className="text-xs sm:text-sm font-mono">[Codeforces]</span>
                </a>
                <a
                  href="https://medium.com/@itsraghav"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 sm:gap-2 border-2 border-primary/30 px-2 sm:px-3 py-1.5 sm:py-2 hover:border-primary hover:bg-primary/10 active:bg-primary/20 transition-all group touch-manipulation min-h-[44px]"
                  title="Medium - Raghav Dadhich"
                  aria-label="Visit Raghav Dadhich on Medium"
                >
                  <FaMedium className="text-primary group-hover:scale-110 transition-transform text-sm sm:text-base" />
                  <span className="text-xs sm:text-sm font-mono">[Medium]</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="space-y-3 sm:space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
          <div className="flex items-center gap-2 text-primary text-base sm:text-lg font-semibold">
            <span className="text-xl sm:text-2xl">➜</span>
            <span className="font-bold">~</span>
            <span className="text-sm sm:text-base md:text-lg">cat about.txt</span>
          </div>
          <div className="border-l-4 border-primary/50 pl-4 sm:pl-6 py-3 sm:py-4 bg-primary/5 text-xs sm:text-sm md:text-base opacity-90 leading-relaxed space-y-2 sm:space-y-3">
            <p className="flex items-start gap-2">
              <span className="text-primary font-bold mt-1">&gt;</span>
              <span>Hello World! I&apos;m Raghav Dadhich.</span>
            </p>
            <p className="flex items-start gap-2">
              <span className="text-primary font-bold mt-1">&gt;</span>
              <span>I&apos;m a Full Stack Developer and Open Source Contributor specializing in modern web technologies and AI/ML.</span>
            </p>
            <p className="flex items-start gap-2">
              <span className="text-primary font-bold mt-1">&gt;</span>
              <span>Currently pursuing Computer Science with AI/ML specialization. When not coding, I&apos;m analyzing football tactics ⚽, playing chess ♟️, or exploring new music 🎵.</span>
            </p>
          </div>
        </section>

        {/* Experience Section */}
        <section className="space-y-3 sm:space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-400">
          <div className="flex items-center gap-2 text-primary text-base sm:text-lg font-semibold">
            <span className="text-xl sm:text-2xl">➜</span>
            <span className="font-bold">~</span>
            <span className="text-sm sm:text-base md:text-lg">tail -n 5 experience.log</span>
          </div>
          
          <div className="space-y-6 sm:space-y-8 pl-1 sm:pl-2">
            <article className="relative border-l-2 border-dashed border-primary/40 pl-5 sm:pl-8 pb-3 sm:pb-4 group hover:border-primary/80 transition-colors duration-300">
              <div className="absolute -left-[5px] sm:-left-[7px] top-0 w-3 h-3 sm:w-4 sm:h-4 bg-primary border-2 border-background shadow-lg group-hover:scale-125 transition-transform duration-300"></div>
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-2 gap-2">
                <h3 className="text-lg sm:text-xl font-bold text-primary group-hover:underline">Web Developer Intern @ Doc-q</h3>
                <span className="text-xs opacity-70 bg-primary/10 px-2 py-1 border border-primary/30 font-mono whitespace-nowrap">[Oct 2024 - Jan 2025]</span>
              </div>
              <p className="text-xs sm:text-sm opacity-80 mb-2 sm:mb-3 leading-relaxed">Developed responsive web applications using React and Next.js. Optimized application performance.</p>
              <div className="flex flex-wrap gap-1.5 sm:gap-2 text-xs">
                <span className="bg-primary/20 border border-primary/30 px-2 py-1 text-primary font-mono hover:bg-primary/30 transition-colors">[React]</span>
                <span className="bg-primary/20 border border-primary/30 px-2 py-1 text-primary font-mono hover:bg-primary/30 transition-colors">[Next.js]</span>
                <span className="bg-primary/20 border border-primary/30 px-2 py-1 text-primary font-mono hover:bg-primary/30 transition-colors">[TypeScript]</span>
              </div>
            </article>

            <article className="relative border-l-2 border-dashed border-primary/40 pl-5 sm:pl-8 pb-3 sm:pb-4 group hover:border-primary/80 transition-colors duration-300">
              <div className="absolute -left-[5px] sm:-left-[7px] top-0 w-3 h-3 sm:w-4 sm:h-4 bg-primary border-2 border-background shadow-lg group-hover:scale-125 transition-transform duration-300"></div>
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-2 gap-2">
                <h3 className="text-lg sm:text-xl font-bold text-primary group-hover:underline">Junior ML Engineer @ Omdena</h3>
                <span className="text-xs opacity-70 bg-primary/10 px-2 py-1 border border-primary/30 font-mono whitespace-nowrap">[Oct 2024 - Dec 2024]</span>
              </div>
              <p className="text-xs sm:text-sm opacity-80 mb-2 sm:mb-3 leading-relaxed">Worked on ML projects focusing on real-world problem solving using Python and PyTorch.</p>
              <div className="flex flex-wrap gap-1.5 sm:gap-2 text-xs">
                <span className="bg-primary/20 border border-primary/30 px-2 py-1 text-primary font-mono hover:bg-primary/30 transition-colors">[Python]</span>
                <span className="bg-primary/20 border border-primary/30 px-2 py-1 text-primary font-mono hover:bg-primary/30 transition-colors">[PyTorch]</span>
                <span className="bg-primary/20 border border-primary/30 px-2 py-1 text-primary font-mono hover:bg-primary/30 transition-colors">[ML]</span>
              </div>
            </article>
          </div>
        </section>

        {/* Projects Section */}
        <section className="space-y-3 sm:space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-500">
          <div className="flex items-center gap-2 text-primary text-base sm:text-lg font-semibold">
            <span className="text-xl sm:text-2xl">➜</span>
            <span className="font-bold">~</span>
            <span className="text-sm sm:text-base md:text-lg">ls -la ./projects/</span>
          </div>
          
          <div className="grid gap-3 sm:gap-5">
            <Link href="https://github.com/raghav3615/quickie" target="_blank" className="border-2 border-primary/30 p-3 sm:p-5 hover:border-primary hover:bg-primary/5 transition-all duration-300 group cursor-pointer touch-manipulation">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2 sm:mb-3 gap-2">
                <div className="flex items-center gap-2 sm:gap-3 flex-wrap">
                  <span className="text-primary font-bold text-xs sm:text-sm">drwx--x--x</span>
                  <span className="font-bold text-base sm:text-lg group-hover:text-primary transition-colors">quickie</span>
                </div>
                <span className="text-xs opacity-60 bg-primary/10 px-2 py-1 border border-primary/20 w-fit">4.0K</span>
              </div>
              <p className="text-xs sm:text-sm opacity-80 mb-2 sm:mb-3 leading-relaxed">Download any video from your favorite social media sites.</p>
              <div className="text-xs opacity-60 font-mono border-l-2 border-primary/20 pl-2 sm:pl-3">
                &gt; stack: [TypeScript, Next.js, Tailwind CSS]
              </div>
            </Link>

            <Link href="https://github.com/raghav3615/chotuURL" target="_blank" className="border-2 border-primary/30 p-3 sm:p-5 hover:border-primary hover:bg-primary/5 transition-all duration-300 group cursor-pointer touch-manipulation">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2 sm:mb-3 gap-2">
                <div className="flex items-center gap-2 sm:gap-3 flex-wrap">
                  <span className="text-primary font-bold text-xs sm:text-sm">drwx--x--x</span>
                  <span className="font-bold text-base sm:text-lg group-hover:text-primary transition-colors">chotuURL</span>
                </div>
                <span className="text-xs opacity-60 bg-primary/10 px-2 py-1 border border-primary/20 w-fit">4.0K</span>
              </div>
              <p className="text-xs sm:text-sm opacity-80 mb-2 sm:mb-3 leading-relaxed">Modern, minimal URL shortener built with Next.js 15 and Supabase.</p>
              <div className="text-xs opacity-60 font-mono border-l-2 border-primary/20 pl-2 sm:pl-3">
                &gt; stack: [TypeScript, Next.js 15, Supabase]
              </div>
            </Link>

            <Link href="https://github.com/raghav3615/slime" target="_blank" className="border-2 border-primary/30 p-3 sm:p-5 hover:border-primary hover:bg-primary/5 transition-all duration-300 group cursor-pointer touch-manipulation">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2 sm:mb-3 gap-2">
                <div className="flex items-center gap-2 sm:gap-3 flex-wrap">
                  <span className="text-primary font-bold text-xs sm:text-sm">drwx--x--x</span>
                  <span className="font-bold text-base sm:text-lg group-hover:text-primary transition-colors">slime</span>
                </div>
                <span className="text-xs opacity-60 bg-primary/10 px-2 py-1 border border-primary/20 w-fit">4.0K</span>
              </div>
              <p className="text-xs sm:text-sm opacity-80 mb-2 sm:mb-3 leading-relaxed">Connect services and automate workflows without code.</p>
              <div className="text-xs opacity-60 font-mono border-l-2 border-primary/20 pl-2 sm:pl-3">
                &gt; stack: [TypeScript, Next.js, PostgreSQL, Microservices]
              </div>
            </Link>
          </div>
          
          <div className="pt-2 sm:pt-3">
             <Link href="/projects" className="text-primary hover:underline text-xs sm:text-sm font-semibold inline-flex items-center gap-2 hover:gap-3 transition-all touch-manipulation min-h-[44px]">
               <span>&gt; cd ./all-projects/</span>
               <span className="text-base sm:text-lg">→</span>
             </Link>
          </div>
        </section>


        {/* Contact Section */}
        <section className="space-y-3 sm:space-y-4 pb-20 sm:pb-24 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-600">
          <div className="flex items-center gap-2 text-primary text-base sm:text-lg font-semibold">
            <span className="text-xl sm:text-2xl">➜</span>
            <span className="font-bold">~</span>
            <span className="text-sm sm:text-base md:text-lg">./contact.sh</span>
          </div>
          
          <div className="border-2 border-primary/30 p-4 sm:p-6 md:p-8 bg-primary/5 backdrop-blur-sm">
            <p className="mb-4 sm:mb-6 text-xs sm:text-sm opacity-80 flex items-center gap-2">
              <span className="text-primary animate-pulse">●</span>
              Initiating communication protocol...
            </p>
            <form action="mailto:dadhichraghav896@gmail.com" method="post" encType="text/plain" className="space-y-4 sm:space-y-6">
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-xs text-primary uppercase tracking-wider font-bold">User_Email:</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email"
                  className="bg-background/50 border-2 border-primary/20 focus:border-primary outline-none py-2 px-3 font-mono text-xs sm:text-sm w-full transition-colors min-h-[44px]"
                  placeholder="enter_your_email@" 
                  required
                  aria-label="Email address"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-xs text-primary uppercase tracking-wider font-bold">Message_Payload:</label>
                <textarea 
                  id="message" 
                  name="message"
                  rows={4}
                  className="bg-background/50 border-2 border-primary/20 focus:border-primary outline-none p-3 font-mono text-xs sm:text-sm w-full resize-none transition-colors"
                  placeholder="> Type your message here..." 
                  required
                  aria-label="Message"
                ></textarea>
              </div>
              <button 
                type="submit" 
                className="bg-primary text-background px-4 sm:px-6 py-2.5 sm:py-3 text-xs sm:text-sm font-bold hover:bg-primary/90 active:bg-primary/80 transition-all w-full sm:w-auto border-2 border-primary hover:shadow-lg hover:shadow-primary/50 touch-manipulation min-h-[44px]"
                aria-label="Send message"
              >
                [ EXECUTE SEND ]
              </button>
            </form>
          </div>
        </section>

      </div>
    </main>
  );
}