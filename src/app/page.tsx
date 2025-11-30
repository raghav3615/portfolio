'use client';
import { FaLinkedin, FaGithub, FaEnvelope, FaTerminal } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import Image from 'next/image';

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
    <div className="min-h-screen bg-background text-foreground font-mono p-4 md:p-8 selection:bg-primary selection:text-background overflow-x-hidden">
      <div className="max-w-4xl mx-auto space-y-8">
        
        {/* Terminal Header */}
        <div className="border-b border-border pb-2 mb-8">
          <p className="text-sm md:text-base opacity-70">Last login: {currentDate} on ttys001</p>
          <p className="text-sm md:text-base">raghav@portfolio:~$ <span className={`${showCursor ? 'opacity-100' : 'opacity-0'}`}>_</span></p>
        </div>

        {/* Profile Section (Neofetch style) */}
        <section className="grid md:grid-cols-[200px_1fr] gap-8 items-start">
          <div className="hidden md:block relative w-48 h-48 border-2 border-border p-1">
             <Image
                src="/dp3.jpg"
                alt="Raghav Dadhich"
                width={200}
                height={200}
                className="w-full h-full object-cover grayscale contrast-125 hover:grayscale-0 transition-all duration-300"
              />
          </div>
          
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-primary text-xl font-bold">
              <span>raghav@portfolio</span>
            </div>
            <div className="grid grid-cols-[120px_1fr] gap-x-4 gap-y-1 text-sm md:text-base">
              <span className="text-primary font-bold">OS</span>
              <span>PortfolioOS </span>
              
              <span className="text-primary font-bold">Host</span>
              <span>VIT Bhopal University</span>
              
              <span className="text-primary font-bold">Kernel</span>
              <span>Full Stack Developer & Open-Source Contributor</span>
              
              <span className="text-primary font-bold">Uptime</span>
              <span>20 years</span>
              
              <span className="text-primary font-bold">Packages</span>
              <span>React, Next.js, Python, PyTorch, C++</span>
              
              <span className="text-primary font-bold">Shell</span>
              <span>zsh 5.8</span>
              
              <span className="text-primary font-bold">Resolution</span>
              <span>1920x1080</span>
              
              <span className="text-primary font-bold">Location</span>
              <span>Bhopal, India</span>
            </div>
            
            {/* Color Palette Display */}
            <div className="flex gap-2 mt-4 pt-4">
              <div className="w-8 h-8 bg-black border border-border"></div>
              <div className="w-8 h-8 bg-red-600"></div>
              <div className="w-8 h-8 bg-green-600"></div>
              <div className="w-8 h-8 bg-yellow-600"></div>
              <div className="w-8 h-8 bg-blue-600"></div>
              <div className="w-8 h-8 bg-purple-600"></div>
              <div className="w-8 h-8 bg-cyan-600"></div>
              <div className="w-8 h-8 bg-gray-200"></div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="space-y-2">
          <div className="flex items-center gap-2 text-primary">
            <span>➜</span>
            <span className="font-bold">~</span>
            <span>cat about.txt</span>
          </div>
          <div className="border-l-2 border-border pl-4 py-2 text-sm md:text-base opacity-90 leading-relaxed">
            <p className="mb-2">
              &gt; Hello World! I&apos;m Raghav Dadhich.
            </p>
            <p className="mb-2">
              &gt; I&apos;m a Full Stack Developer and Open Source Contributor specializing in modern web technologies and AI/ML.
            </p>
            <p>
              &gt; Currently pursuing Computer Science with AI/ML specialization. When not coding, I&apos;m analyzing football tactics ⚽, playing chess ♟️, or exploring new music 🎵.
            </p>
          </div>
        </section>

        {/* Experience Section */}
        <section className="space-y-4">
          <div className="flex items-center gap-2 text-primary">
            <span>➜</span>
            <span className="font-bold">~</span>
            <span>tail -n 5 experience.log</span>
          </div>
          
          <div className="space-y-6 pl-2">
            <div className="relative border-l border-dashed border-border pl-6 pb-2">
              <div className="absolute -left-[5px] top-0 w-2.5 h-2.5 bg-primary rounded-none"></div>
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-1">
                <h3 className="text-lg font-bold text-primary">Web Developer Intern @ Doc-q</h3>
                <span className="text-xs opacity-70">[Oct 2024 - Jan 2025]</span>
              </div>
              <p className="text-sm opacity-80 mb-2">Developed responsive web applications using React and Next.js. Optimized application performance.</p>
              <div className="flex flex-wrap gap-2 text-xs">
                <span className="bg-primary/20 px-1 text-primary">[React]</span>
                <span className="bg-primary/20 px-1 text-primary">[Next.js]</span>
                <span className="bg-primary/20 px-1 text-primary">[TypeScript]</span>
              </div>
            </div>

            <div className="relative border-l border-dashed border-border pl-6 pb-2">
              <div className="absolute -left-[5px] top-0 w-2.5 h-2.5 bg-primary rounded-none"></div>
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-1">
                <h3 className="text-lg font-bold text-primary">Junior ML Engineer @ Omdena</h3>
                <span className="text-xs opacity-70">[Oct 2024 - Dec 2024]</span>
              </div>
              <p className="text-sm opacity-80 mb-2">Worked on ML projects focusing on real-world problem solving using Python and PyTorch.</p>
              <div className="flex flex-wrap gap-2 text-xs">
                <span className="bg-primary/20 px-1 text-primary">[Python]</span>
                <span className="bg-primary/20 px-1 text-primary">[PyTorch]</span>
                <span className="bg-primary/20 px-1 text-primary">[ML]</span>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section className="space-y-4">
          <div className="flex items-center gap-2 text-primary">
            <span>➜</span>
            <span className="font-bold">~</span>
            <span>ls -la ./projects/</span>
          </div>
          
          <div className="grid gap-4">
            <div className="border border-border p-4 hover:bg-primary/5 transition-colors group cursor-pointer">
              <div className="flex justify-between items-start mb-2">
                <div className="flex items-center gap-2">
                  <span className="text-primary font-bold">drwx--x--x</span>
                  <Link href="https://github.com/raghav3615/hackcrux" target="_blank" className="font-bold group-hover:underline">Twizzy Twin</Link>
                </div>
                <span className="text-xs opacity-60">4.0K</span>
              </div>
              <p className="text-sm opacity-80 mb-3">AI-Powered Personal Assistant that learns your style and preferences.</p>
              <div className="text-xs opacity-60 font-mono">
                &gt; stack: [Python, React, Node.js, AI/ML]
              </div>
            </div>

            <div className="border border-border p-4 hover:bg-primary/5 transition-colors group cursor-pointer">
              <div className="flex justify-between items-start mb-2">
                <div className="flex items-center gap-2">
                  <span className="text-primary font-bold">drwx--x--x</span>
                  <Link href="https://github.com/raghav3615/organdonation" target="_blank" className="font-bold group-hover:underline">WeCare</Link>
                </div>
                <span className="text-xs opacity-60">4.0K</span>
              </div>
              <p className="text-sm opacity-80 mb-3">Blockchain-based platform for transparent organ donation processes.</p>
              <div className="text-xs opacity-60 font-mono">
                &gt; stack: [Blockchain, Web3, React, Solidity]
              </div>
            </div>
          </div>
          
          <div className="pt-2">
             <Link href="/projects" className="text-primary hover:underline text-sm">
               &gt; cd ./all-projects/
             </Link>
          </div>
        </section>

        {/* Contact Section */}
        <section className="space-y-4 pb-20">
          <div className="flex items-center gap-2 text-primary">
            <span>➜</span>
            <span className="font-bold">~</span>
            <span>./contact.sh</span>
          </div>
          
          <div className="border border-border p-6 bg-black/50">
            <p className="mb-4 text-sm">Initiating communication protocol...</p>
            <form action="mailto:dadhichraghav896@gmail.com" method="post" encType="text/plain" className="space-y-4">
              <div className="flex flex-col gap-1">
                <label htmlFor="email" className="text-xs text-primary uppercase tracking-wider">User_Email:</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email"
                  className="bg-transparent border-b border-border focus:border-primary outline-none py-1 font-mono text-sm w-full"
                  placeholder="enter_your_email@" 
                />
              </div>
              <div className="flex flex-col gap-1">
                <label htmlFor="message" className="text-xs text-primary uppercase tracking-wider">Message_Payload:</label>
                <textarea 
                  id="message" 
                  name="message"
                  rows={4}
                  className="bg-transparent border border-border focus:border-primary outline-none p-2 font-mono text-sm w-full resize-none"
                  placeholder="> Type your message here..." 
                ></textarea>
              </div>
              <button 
                type="submit" 
                className="bg-primary text-background px-4 py-2 text-sm font-bold hover:opacity-90 transition-opacity w-full sm:w-auto"
              >
                [ EXECUTE SEND ]
              </button>
            </form>
          </div>
        </section>

      </div>
    </div>
  );
}