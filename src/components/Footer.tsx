'use client';

import { useState } from 'react';
import Link from 'next/link';
import Terminal from './Terminal';

export default function Footer() {
    const [isTerminalOpen, setIsTerminalOpen] = useState(false);

    return (
        <>
            <footer className="fixed bottom-0 left-0 w-full bg-primary text-background text-[10px] sm:text-xs md:text-sm py-1 sm:py-1.5 px-2 sm:px-4 flex flex-col sm:flex-row justify-between items-center gap-1 sm:gap-4 z-50 font-bold border-t border-primary">
                <div className="flex gap-2 sm:gap-4 items-center">
                    <span className="whitespace-nowrap">NORMAL MODE</span>
                    <span className="hidden sm:inline">|</span>
                    <span className="hidden sm:inline">utf-8</span>
                </div>
                <nav className="flex gap-1 sm:gap-2 md:gap-4 items-center flex-wrap justify-center">
                    <Link href="/" className="hover:bg-background hover:text-primary px-1 sm:px-2 transition-colors touch-manipulation min-h-[32px] sm:min-h-[auto] flex items-center text-[10px] sm:text-xs md:text-sm">[ HOME ]</Link>
                    <Link href="/projects" className="hover:bg-background hover:text-primary px-1 sm:px-2 transition-colors touch-manipulation min-h-[32px] sm:min-h-[auto] flex items-center text-[10px] sm:text-xs md:text-sm">[ PROJECTS ]</Link>
                    <Link href="/blog" className="hover:bg-background hover:text-primary px-1 sm:px-2 transition-colors touch-manipulation min-h-[32px] sm:min-h-[auto] flex items-center text-[10px] sm:text-xs md:text-sm">[ BLOG ]</Link>
                    <a href="https://github.com/raghav3615" target="_blank" rel="noopener noreferrer" className="hover:bg-background hover:text-primary px-1 sm:px-2 transition-colors touch-manipulation min-h-[32px] sm:min-h-[auto] flex items-center text-[10px] sm:text-xs md:text-sm">[ GITHUB ]</a>
                    <button
                        onClick={() => setIsTerminalOpen(true)}
                        className="hover:bg-background hover:text-primary px-1 sm:px-2 transition-colors touch-manipulation min-h-[32px] sm:min-h-[auto] flex items-center text-[10px] sm:text-xs md:text-sm cursor-pointer border-none bg-transparent font-bold"
                    >
                        [ TERMINAL ]
                    </button>
                </nav>
            </footer>

            <Terminal isOpen={isTerminalOpen} onClose={() => setIsTerminalOpen(false)} />
        </>
    );
}
