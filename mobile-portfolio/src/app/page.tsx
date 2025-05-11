'use client';
import { FaTwitter, FaLinkedin, FaGithub, FaEnvelope, FaRegSun, FaRegMoon, FaHome, FaBlog } from 'react-icons/fa';
import Link from 'next/link';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function Home() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground font-sans relative pb-28">
      {/* Main Container */}
      <div className="w-full max-w-2xl mx-auto px-4 sm:px-8">
        {/* Header/Profile */}
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 pt-10 pb-4">
          <div className="flex-shrink-0 flex justify-center w-full sm:w-auto">
            {/* Profile image */}
            <div className="w-[120px] h-[120px] rounded-full border-4 border-border bg-card overflow-hidden">
              <Image
                src="/dp1.jpg" // Path relative to the 'public' directory
                alt="Profile Picture"
                width={500} // The actual width of your image
                height={500} // The actual height of your image
              />
            </div>
          </div>
          <div className="text-center sm:text-left w-full">
            <h1 className="text-3xl sm:text-5xl font-bold mb-1">Hi, I&apos;m Raghav</h1>
            <p className="text-lg sm:text-xl text-muted-foreground">Another tech geek from India</p>
          </div>
        </div>
        {/* About */}
        <section className="mb-6">
          <h2 className="text-xl font-bold mb-2">About</h2>
          <p className="text-sm text-muted-foreground mb-2">developer, engineer, hacker, yapper.</p>
          <p className="text-sm text-muted-foreground mb-2">I like to read & learn about different technology & wants to make a impact in the society.</p>
          <p className="text-sm text-muted-foreground mb-2">I passionately invest my time in football, chess, muisc & shitposting.</p>
          <p className="text-sm text-muted-foreground">If you&apos;d like to connect over a quick video chat, <a href="mailto:dadhichraghav896@gmail.com" className="underline font-medium text-primary">book a meeting with me here!</a></p>
        </section>
        {/* Experience */}
        <section className="mb-6">
          <h2 className="text-xl font-bold mb-2">Experience</h2>
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              {/* Company logo placeholder */}
                <div className="w-10 h-10 rounded-full overflow-hidden">
                <Image
                  src="/docq.png" // Replace with the actual path to your image
                  alt="Doc-q Logo"
                  width={40} // Adjust width as needed
                  height={40} // Adjust height as needed
                />
                </div>
                <div className="flex-1">
                <div className="font-semibold">Doc-q</div>
                <div className="text-xs text-muted-foreground">Web Developer Intern</div>
                </div>
              <div className="text-xs text-muted-foreground whitespace-nowrap">October 2024 - January 2025</div>
            </div>
            <div className="flex items-center gap-3">
              {/* Company logo placeholder */}
              <div className="w-10 h-10 rounded-full overflow-hidden">
                <Image
                  src="/omdena.png" // Replace with the actual path to your image
                  alt="Doc-q Logo"
                  width={40} // Adjust width as needed
                  height={40} // Adjust height as needed
                />
                </div>
              <div className="flex-1">
                <div className="font-semibold">Omdena VIT Bhopal Chapter</div>
                <div className="text-xs text-muted-foreground">Junior ML Engineer</div>
              </div>
              <div className="text-xs text-muted-foreground whitespace-nowrap">October 2024 - December 2024</div>
            </div>
          </div>
        </section>
        {/* Projects */}
        <section className="mb-6">
          <h2 className="text-xl font-bold mb-2">Featured Projects</h2>
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              {/* Project logo placeholder */}
              {/* <div className="w-10 h-10 rounded-full bg-card" /> */}
              <div className="flex-1">
                <div className="font-semibold">
                  <Link href="https://github.com/raghav3615/hackcrux" target="_blank" rel="noopener noreferrer" className="underline text-primary">
                  Twizzy Twin
                  </Link>
                </div>
                <div className="text-xs text-muted-foreground"> personalized AI assistant that learns your style to help with tasks like scheduling, emailing, and research.</div>
              </div>
              <div className="text-xs text-muted-foreground whitespace-nowrap">2025</div>
            </div>
            <div className="flex items-center gap-3">
              {/* Project logo placeholder */}
              {/* <div className="w-10 h-10 rounded-full bg-card" /> */}
              <div className="flex-1">
                <div className="font-semibold">
                  <Link href="https://github.com/raghav3615/organdonation" target="_blank" rel="noopener noreferrer" className="underline text-primary">
                  WeCare
                  </Link>
                </div>
                <div className="text-xs text-muted-foreground">blockchain-based platform for managing organ donation, registration, and transplant matching.</div>
              </div>
              <div className="text-xs text-muted-foreground whitespace-nowrap">2025</div>
            </div>
          </div>
          <br />
          <Link href="/projects" className="mt-4 text-sm text-primary underline font-medium">
            check out other fun projects i built
          </Link>
        </section>
        {/* Education */}
        <section className="mb-6">
          <h2 className="text-xl font-bold mb-2">Education</h2>
            <div className="flex items-center gap-3">
            {/* University logo placeholder */}
            <div className="w-10 h-10 rounded-full overflow-hidden">
              <Image
              src="/clg.png" // Replace with the actual path to your university logo
              alt="University Logo"
              width={40} // Adjust width as needed
              height={40} // Adjust height as needed
              />
            </div>
            <div className="flex-1">
              <div className="font-semibold">VIT Bhopal University</div>
              <div className="text-xs text-muted-foreground">Computer Science and Engineering (Specialization in AI and ML)</div>
            </div>
            <div className="text-xs text-muted-foreground whitespace-nowrap">2023 - 2027</div>
          </div>
        </section>
        {/* Skills */}
        <section className="mb-6">
          <h2 className="text-xl font-bold mb-2">Skills</h2>
          <div className="flex flex-wrap gap-2">
            {['React', 'Next.js', 'JavaScript' , 'Typescript', 'MongoDB', 'Node.js' , 'Python', 'Pytorch', 'Postgres', 'C++'].map(skill => (
              <span key={skill} className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-semibold">{skill}</span>
            ))}
          </div>
        </section>
        {/* Say Hello */}
        <section className="mb-24">
          <h2 className="text-xl font-bold mb-2">say hello👋</h2>
          <a href="https://twitter.com/raghav_dadhich" target="_blank" rel="noopener noreferrer" className="text-sm text-primary underline font-medium">
            let&apos;s connect on twitter
          </a>
        </section>
      </div>
      {/* Bottom Nav Bar */}
      <nav className="fixed left-1/2 -translate-x-1/2 bottom-6 w-auto max-w-[85vw] px-3 py-2 bg-background/80 shadow-lg rounded-xl flex items-center h-auto z-50 gap-2 border border-border backdrop-blur-md">
        <Link href="/" aria-label="Home" className="group">
          <div className="w-8 h-8 flex items-center justify-center rounded-full transition bg-secondary/60 group-hover:bg-secondary/80">
            <FaHome className="text-sm" />
          </div>
        </Link>
        <Link href="/blog" aria-label="Blog" className="group">
          <div className="w-8 h-8 flex items-center justify-center rounded-full transition bg-secondary/60 group-hover:bg-secondary/80">
            <FaBlog className="text-sm" />
          </div>
        </Link>
        <a href="https://github.com/raghav3615" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="group">
          <div className="w-8 h-8 flex items-center justify-center rounded-full transition bg-secondary/60 group-hover:bg-secondary/80">
            <FaGithub className="text-sm" />
          </div>
        </a>
        <a href="https://www.linkedin.com/in/raghavhere/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="group">
          <div className="w-8 h-8 flex items-center justify-center rounded-full transition bg-secondary/60 group-hover:bg-secondary/80">
            <FaLinkedin className="text-sm" />
          </div>
        </a>
        <a href="https://twitter.com/raghav_dadhich" target="_blank" rel="noopener noreferrer" aria-label="X" className="group">
          <div className="w-8 h-8 flex items-center justify-center rounded-full transition bg-secondary/60 group-hover:bg-secondary/80">
            <FaTwitter className="text-sm" />
          </div>
        </a>
        <a href="mailto:dadhichraghav896@gmail.com" aria-label="Email" className="group">
          <div className="w-8 h-8 flex items-center justify-center rounded-full transition bg-secondary/60 group-hover:bg-secondary/80">
            <FaEnvelope className="text-sm" />
          </div>
        </a>
        <button
          aria-label="Toggle Theme"
          className="group focus:outline-none"
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        >
          <div className="w-8 h-8 flex items-center justify-center rounded-full transition bg-secondary/60 group-hover:bg-secondary/80">
            {mounted && (
              theme === 'dark' ? 
              <FaRegMoon className="text-sm" /> : 
              <FaRegSun className="text-sm" />
            )}
          </div>
        </button>
      </nav>
    </div>
  );
}
