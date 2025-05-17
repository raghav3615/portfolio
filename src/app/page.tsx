'use client';
import { FaLinkedin, FaGithub, FaEnvelope, FaRegSun, FaRegMoon, FaHome, FaProjectDiagram } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import Link from 'next/link';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function Home() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
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
    <div className="flex flex-col min-h-screen bg-background text-foreground font-sans relative pb-28">
      {/* Main Container */}
      <div className="w-full max-w-2xl mx-auto px-4 sm:px-8">
        {/* Header/Profile */}
        {/* Changed to always be a row, items aligned to the start */}
        <div className="flex flex-row items-start gap-4 pt-10 pb-4"> {/* Adjusted gap slightly */}
          <div className="flex-shrink-0"> {/* Simplified image container */}
            {/* Profile image */}
            <div className="w-[100px] h-[100px] rounded-full border-4 border-border bg-card overflow-hidden">
              <Image
                src="/dp2.jpg" // Path relative to the 'public' directory
                alt="Profile Picture"
                width={500} // The actual width of your image
                height={500} // The actual height of your image
              />
            </div>
          </div>
          {/* Text content always aligned to the left */}
          <div className="text-left w-full"> 
            <h1 className="text-3xl sm:text-5xl font-bold mb-1 mt-4">Hi, I&apos;m Raghav</h1>
            <p className="text-lg sm:text-xl text-muted-foreground">Another tech geek from India</p>
          </div>
        </div>
        {/* About */}
        <section className="mb-6">
          <h2 className="text-xl font-bold mb-2">About</h2>
          <p className="text-sm text-muted-foreground mb-2">developer, engineer, yapper.</p>
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
        {/* Skills */}
        <section className="mb-6">
          <h2 className="text-xl font-bold mb-2">Skills</h2>
          <div className="flex flex-wrap gap-2">
            {['React', 'Next.js', 'JavaScript' , 'Typescript', 'MongoDB', 'Node.js' , 'Python', 'Pytorch', 'Postgres', 'C++'].map(skill => (
              <span key={skill} className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-semibold">{skill}</span>
            ))}
          </div>
        </section>
        
        
        {/* Education */}
        <section className="mb-6">
          <h2 className="text-xl font-bold mb-2">Education</h2>
            <div className="flex items-center gap-3">
            {/* University logo placeholder */}
            <div className="w-10 h-10 rounded-full overflow-hidden">
              <Image
              src="/clg.png" 
              alt="University Logo"
              width={40} 
              height={40} 
              />
            </div>
            <div className="flex-1">
              <div className="font-semibold">VIT Bhopal University</div>
              <div className="text-xs text-muted-foreground">Computer Science and Engineering (Specialization in AI and ML)</div>
            </div>
            <div className="text-xs text-muted-foreground whitespace-nowrap">2023 - 2027</div>
          </div>
        </section>
        
        {/* Get in Touch Form  */}
        <section className="mb-20 mt-12 py-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10">Get in Touch</h2>
          <form onSubmit={handleSubmit} className="max-w-lg mx-auto space-y-6">
            <div>
              <label htmlFor="contact-email" className="block text-sm font-medium text-muted-foreground mb-1">
                Email
              </label>
              <input
                type="email"
                id="contact-email"
                name="email"
                required
                placeholder="example-email@gmail.com"
                className="w-full p-3 border border-border rounded-md bg-card focus:ring-1 focus:ring-primary focus:border-primary placeholder:text-muted-foreground/60"
              />
            </div>
            <div>
              <label htmlFor="contact-message" className="block text-sm font-medium text-muted-foreground mb-1">
                Message
              </label>
              <textarea
                id="contact-message"
                name="message"
                rows={5}
                required
                placeholder="Hi! I really like your work and want to discuss some things...."
                className="w-full p-3 border border-border rounded-md bg-card focus:ring-1 focus:ring-primary focus:border-primary placeholder:text-muted-foreground/60"
              />
            </div>
            <p className="text-xs text-muted-foreground text-center pt-1">
              Ask me anything you would like. I always respond :D
            </p>
            <div className="text-center pt-2">
              <button
                type="submit"
                className="bg-foreground text-background hover:bg-foreground/80 active:bg-foreground/70 px-8 py-3 rounded-md font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background"
              >
                Submit
              </button>
            </div>
          </form>
        </section>
       
      </div>
      {/* Bottom Nav Bar */}
      <nav className="fixed left-1/2 -translate-x-1/2 bottom-6 w-auto max-w-[85vw] px-3 py-2 bg-background/80 shadow-lg rounded-xl flex items-center h-auto z-50 gap-2 border border-border backdrop-blur-md">
        <Link href="/" aria-label="Home" className="group">
          <div className="w-8 h-8 flex items-center justify-center rounded-full transition bg-secondary/60 group-hover:bg-secondary/80">
            <FaHome className="text-sm" />
          </div>
        </Link>
        <Link href="/projects" aria-label="Projects" className="group">
          <div className="w-8 h-8 flex items-center justify-center rounded-full transition bg-secondary/60 group-hover:bg-secondary/80">
            <FaProjectDiagram className="text-sm" />
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
            <FaXTwitter className="text-sm" /> {/* Changed icon */}
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

      {/* Footer */}
      <footer className="w-full border-t border-border">
        <div className="max-w-2xl mx-auto px-4 sm:px-8 py-8 flex flex-col items-center gap-4"> {/* Changed to always flex-col and items-center */}
          <div className="flex items-center gap-4">
            <a href="https://github.com/raghav3615" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-muted-foreground hover:text-primary transition-colors">
              <FaGithub className="text-lg" />
            </a>
            <a href="https://www.linkedin.com/in/raghavhere/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-muted-foreground hover:text-primary transition-colors">
              <FaLinkedin className="text-lg" />
            </a>
            <a href="https://twitter.com/raghav_dadhich" target="_blank" rel="noopener noreferrer" aria-label="X (formerly Twitter)" className="text-muted-foreground hover:text-primary transition-colors">
              <FaXTwitter className="text-lg" /> {/* Changed icon */}
            </a>
            <a href="mailto:dadhichraghav896@gmail.com" aria-label="Email" className="text-muted-foreground hover:text-primary transition-colors">
              <FaEnvelope className="text-lg" />
            </a>
          </div>
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Raghav Dadhich. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
