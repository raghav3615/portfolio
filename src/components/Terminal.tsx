'use client';

import { useState, useRef, useEffect, KeyboardEvent } from 'react';
import { FaTimes, FaTerminal } from 'react-icons/fa';

interface FileSystemNode {
    type: 'file' | 'directory';
    content?: string;
    children?: Record<string, FileSystemNode>;
}

// Virtual file system based on the portfolio website
const fileSystem: Record<string, FileSystemNode> = {
    '/': {
        type: 'directory',
        children: {
            'home': {
                type: 'directory',
                children: {
                    'raghav': {
                        type: 'directory',
                        children: {
                            'about.txt': {
                                type: 'file',
                                content: `Hello World! I'm Raghav Dadhich.

I'm a Full Stack Developer and Open Source Contributor specializing in modern web technologies and AI/ML.

Currently pursuing Computer Science with AI/ML specialization at VIT Bhopal University.

When not coding, I'm analyzing football tactics ⚽, playing chess ♟️, or exploring new music 🎵.

Contact: dadhichraghav896@gmail.com
Location: Bhopal, India`
                            },
                            'skills.txt': {
                                type: 'file',
                                content: `=== TECHNICAL SKILLS ===

Languages:
  - TypeScript / JavaScript
  - Python
  - C++
  
Frameworks:
  - React.js
  - Next.js
  - Node.js
  - PyTorch
  
Databases:
  - PostgreSQL
  - MongoDB
  - Supabase
  
Tools:
  - Git & GitHub
  - Docker
  - Linux
  - VS Code`
                            },
                            'contact.txt': {
                                type: 'file',
                                content: `=== CONTACT INFORMATION ===

Email: dadhichraghav896@gmail.com

Social Links:
  - LinkedIn: linkedin.com/in/raghavhere
  - Twitter: twitter.com/raghav_dadhich
  - GitHub: github.com/raghav3615
  - Codeforces: codeforces.com/profile/ragzus
  - Medium: medium.com/@itsraghav`
                            },
                            'projects': {
                                type: 'directory',
                                children: {
                                    'quickie.txt': {
                                        type: 'file',
                                        content: `=== QUICKIE ===

Description: Download any video from your favorite social media sites.

Tech Stack: TypeScript, Next.js, Tailwind CSS

GitHub: github.com/raghav3615/quickie`
                                    },
                                    'chotuURL.txt': {
                                        type: 'file',
                                        content: `=== CHOTUURL ===

Description: Modern, minimal URL shortener built with Next.js 15 and Supabase.

Tech Stack: TypeScript, Next.js 15, Supabase

GitHub: github.com/raghav3615/chotuURL`
                                    },
                                    'slime.txt': {
                                        type: 'file',
                                        content: `=== SLIME ===

Description: Connect services and automate workflows without code.

Tech Stack: TypeScript, Next.js, PostgreSQL, Microservices

GitHub: github.com/raghav3615/slime`
                                    }
                                }
                            },
                            'experience': {
                                type: 'directory',
                                children: {
                                    'doc-q.txt': {
                                        type: 'file',
                                        content: `=== WEB DEVELOPER INTERN @ DOC-Q ===

Duration: October 2024 - January 2025

Responsibilities:
  - Developed responsive web applications using React and Next.js
  - Optimized application performance
  
Tech: React, Next.js, TypeScript`
                                    },
                                    'omdena.txt': {
                                        type: 'file',
                                        content: `=== JUNIOR ML ENGINEER @ OMDENA ===

Duration: October 2024 - December 2024

Responsibilities:
  - Worked on ML projects focusing on real-world problem solving
  - Used Python and PyTorch for model development
  
Tech: Python, PyTorch, ML`
                                    }
                                }
                            },
                            '.bashrc': {
                                type: 'file',
                                content: `# ~/.bashrc
export PS1="raghav@portfolio:~$ "
export EDITOR=vim
alias ll='ls -la'
alias dev='npm run dev'

echo "Welcome to Raghav's Portfolio Terminal!"`
                            }
                        }
                    }
                }
            }
        }
    }
};

interface TerminalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function Terminal({ isOpen, onClose }: TerminalProps) {
    const [history, setHistory] = useState<string[]>([
        'Welcome to Raghav\'s Portfolio Terminal!',
        'Type "help" to see available commands.',
        ''
    ]);
    const [input, setInput] = useState('');
    const [currentDir, setCurrentDir] = useState('/home/raghav');
    const [commandHistory, setCommandHistory] = useState<string[]>([]);
    const [historyIndex, setHistoryIndex] = useState(-1);

    const inputRef = useRef<HTMLInputElement>(null);
    const terminalRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (isOpen && inputRef.current) {
            inputRef.current.focus();
        }
    }, [isOpen]);

    useEffect(() => {
        if (terminalRef.current) {
            terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
        }
    }, [history]);

    const resolvePath = (path: string): string => {
        if (path.startsWith('/')) return path;
        if (path === '~') return '/home/raghav';
        if (path.startsWith('~/')) return '/home/raghav/' + path.slice(2);

        const parts = currentDir.split('/').filter(Boolean);
        const newParts = path.split('/');

        for (const part of newParts) {
            if (part === '..') {
                parts.pop();
            } else if (part !== '.') {
                parts.push(part);
            }
        }

        return '/' + parts.join('/');
    };

    const getNode = (path: string): FileSystemNode | null => {
        const parts = path.split('/').filter(Boolean);
        let node: FileSystemNode = fileSystem['/'];

        for (const part of parts) {
            if (node.type !== 'directory' || !node.children?.[part]) {
                return null;
            }
            node = node.children[part];
        }

        return node;
    };

    const executeCommand = (cmd: string): string[] => {
        const trimmedCmd = cmd.trim();
        if (!trimmedCmd) return [];

        const [command, ...args] = trimmedCmd.split(/\s+/);
        const output: string[] = [];

        switch (command.toLowerCase()) {
            case 'help':
                output.push(
                    '╔════════════════════════════════════════╗',
                    '║      AVAILABLE COMMANDS                ║',
                    '╠════════════════════════════════════════╣',
                    '║  ls [dir]      - List directory        ║',
                    '║  cd <dir>      - Change directory      ║',
                    '║  pwd           - Print working dir     ║',
                    '║  cat <file>    - Display file content  ║',
                    '║  clear         - Clear terminal        ║',
                    '║  whoami        - Display current user  ║',
                    '║  date          - Show current date     ║',
                    '║  echo <text>   - Print text            ║',
                    '║  tree          - Show directory tree   ║',
                    '║  neofetch      - System information    ║',
                    '║  help          - Show this help        ║',
                    '║  exit          - Close terminal        ║',
                    '╚════════════════════════════════════════╝'
                );
                break;

            case 'ls':
                const lsPath = args[0] ? resolvePath(args[0]) : currentDir;
                const lsNode = getNode(lsPath);

                if (!lsNode) {
                    output.push(`ls: cannot access '${args[0]}': No such file or directory`);
                } else if (lsNode.type === 'file') {
                    output.push(args[0] || currentDir.split('/').pop() || '');
                } else if (lsNode.children) {
                    const entries = Object.entries(lsNode.children);
                    const dirs = entries.filter(([, n]) => n.type === 'directory').map(([name]) => `\x1b[1;34m${name}/\x1b[0m`);
                    const files = entries.filter(([, n]) => n.type === 'file').map(([name]) => name);
                    output.push([...dirs, ...files].join('  '));
                }
                break;

            case 'cd':
                if (!args[0] || args[0] === '~') {
                    setCurrentDir('/home/raghav');
                } else {
                    const newPath = resolvePath(args[0]);
                    const cdNode = getNode(newPath);

                    if (!cdNode) {
                        output.push(`cd: no such file or directory: ${args[0]}`);
                    } else if (cdNode.type !== 'directory') {
                        output.push(`cd: not a directory: ${args[0]}`);
                    } else {
                        setCurrentDir(newPath);
                    }
                }
                break;

            case 'pwd':
                output.push(currentDir);
                break;

            case 'cat':
                if (!args[0]) {
                    output.push('cat: missing file operand');
                } else {
                    const catPath = resolvePath(args[0]);
                    const catNode = getNode(catPath);

                    if (!catNode) {
                        output.push(`cat: ${args[0]}: No such file or directory`);
                    } else if (catNode.type === 'directory') {
                        output.push(`cat: ${args[0]}: Is a directory`);
                    } else {
                        output.push(...(catNode.content || '').split('\n'));
                    }
                }
                break;

            case 'clear':
                setHistory([]);
                return [];

            case 'whoami':
                output.push('raghav');
                break;

            case 'date':
                output.push(new Date().toString());
                break;

            case 'echo':
                output.push(args.join(' '));
                break;

            case 'tree':
                const treePath = args[0] ? resolvePath(args[0]) : currentDir;
                const treeNode = getNode(treePath);

                const buildTree = (node: FileSystemNode, prefix = ''): string[] => {
                    const lines: string[] = [];
                    if (node.children) {
                        const entries = Object.entries(node.children);
                        entries.forEach(([name, child], index) => {
                            const isLast = index === entries.length - 1;
                            const connector = isLast ? '└── ' : '├── ';
                            const icon = child.type === 'directory' ? '📁 ' : '📄 ';
                            lines.push(`${prefix}${connector}${icon}${name}`);
                            if (child.type === 'directory') {
                                const newPrefix = prefix + (isLast ? '    ' : '│   ');
                                lines.push(...buildTree(child, newPrefix));
                            }
                        });
                    }
                    return lines;
                };

                if (!treeNode) {
                    output.push(`tree: '${args[0]}': No such file or directory`);
                } else if (treeNode.type === 'file') {
                    output.push(treePath.split('/').pop() || '');
                } else {
                    output.push('.');
                    output.push(...buildTree(treeNode));
                }
                break;

            case 'neofetch':
                output.push(
                    '          ⣴⣶⣤⡤⠦⣤⣀⣤⠆     ⣈⣭⣭⣿⣶⣿⣦⣼⣆        raghav@portfolio',
                    '           ⠉⠻⢿⣿⠿⣿⣿⣶⣦⠤⠶⣿⠿⣿⣿⣿⠿⣿⣿⡀       ──────────────────',
                    '               ⠈⢿⣿⣟⣿⣿⠹        ⣿⣿⣿⣿⣿⡇       OS: PortfolioOS',
                    '                 ⠛⠿⠛⠉⠁         ⢀⣿⣿⠿⣿⣿⡆       Host: VIT Bhopal',
                    '                      ⣼⠿⠿⠿⠿       ⣿⣿⡿⣻        Kernel: Full Stack Developer',
                    '                    ⠤⣤⣤⣤⣤⣀⣿⠿⣶⣦⣤⠤⠹⠿⠟⠀⣧       Uptime: 20 years',
                    '                         ⠉⠉⠉⣻⣿⣿⣿⣿⣿⣿⣿⡏       Packages: React, Next.js, Python',
                    '                        ⠤⣤⣤⠿⠿⠿⢤⣤⣿⣀⣿⣿⣷       Shell: zsh 5.8',
                    '                           ⣁⣸⣿⣿⣿⣿⣿⣿⡇⡀       Resolution: 1920x1080',
                    '                         ⢰⣿⣿⣿⣿⣿⣿⡿⣿⣿⣿⡇       Location: Bhopal, India',
                    '                        ⠨⣿⣿⣿⣿⣿⠿⠃⠇⠈⠥'
                );
                break;

            case 'exit':
                onClose();
                break;

            default:
                output.push(`${command}: command not found. Type 'help' for available commands.`);
        }

        return output;
    };

    const handleSubmit = () => {
        const cmdLine = `raghav@portfolio:${currentDir}$ ${input}`;
        const output = executeCommand(input);

        setHistory(prev => [...prev, cmdLine, ...output]);
        setCommandHistory(prev => [input, ...prev]);
        setHistoryIndex(-1);
        setInput('');
    };

    const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            handleSubmit();
        } else if (e.key === 'ArrowUp') {
            e.preventDefault();
            if (historyIndex < commandHistory.length - 1) {
                const newIndex = historyIndex + 1;
                setHistoryIndex(newIndex);
                setInput(commandHistory[newIndex]);
            }
        } else if (e.key === 'ArrowDown') {
            e.preventDefault();
            if (historyIndex > 0) {
                const newIndex = historyIndex - 1;
                setHistoryIndex(newIndex);
                setInput(commandHistory[newIndex]);
            } else if (historyIndex === 0) {
                setHistoryIndex(-1);
                setInput('');
            }
        } else if (e.key === 'Tab') {
            e.preventDefault();
            // Simple tab completion for current directory
            const parts = input.split(/\s+/);
            const lastPart = parts[parts.length - 1];
            const basePath = lastPart.includes('/')
                ? resolvePath(lastPart.substring(0, lastPart.lastIndexOf('/') + 1))
                : currentDir;
            const searchTerm = lastPart.includes('/')
                ? lastPart.substring(lastPart.lastIndexOf('/') + 1)
                : lastPart;

            const node = getNode(basePath);
            if (node?.children) {
                const matches = Object.keys(node.children).filter(name =>
                    name.startsWith(searchTerm)
                );
                if (matches.length === 1) {
                    parts[parts.length - 1] = lastPart.includes('/')
                        ? lastPart.substring(0, lastPart.lastIndexOf('/') + 1) + matches[0]
                        : matches[0];
                    setInput(parts.join(' '));
                }
            }
        } else if (e.key === 'Escape') {
            onClose();
        }
    };

    if (!isOpen) return null;

    return (
        <div
            className="fixed inset-0 z-[100] flex items-end justify-center bg-black/50 backdrop-blur-sm animate-in fade-in duration-200"
            onClick={(e) => e.target === e.currentTarget && onClose()}
        >
            <div className="w-full max-w-4xl h-[60vh] sm:h-[50vh] bg-background border-2 border-primary mb-0 sm:mb-12 flex flex-col animate-in slide-in-from-bottom-4 duration-300">
                {/* Terminal Header */}
                <div className="flex items-center justify-between bg-primary text-background px-3 py-1.5 border-b border-primary">
                    <div className="flex items-center gap-2">
                        <FaTerminal className="text-sm" />
                        <span className="text-xs sm:text-sm font-bold">raghav@portfolio: {currentDir}</span>
                    </div>
                    <button
                        onClick={onClose}
                        className="hover:bg-background/20 p-1 transition-colors"
                        aria-label="Close terminal"
                    >
                        <FaTimes className="text-sm" />
                    </button>
                </div>

                {/* Terminal Content */}
                <div
                    ref={terminalRef}
                    className="flex-1 overflow-y-auto p-3 text-xs sm:text-sm font-mono space-y-0.5"
                    onClick={() => inputRef.current?.focus()}
                >
                    {history.map((line, index) => (
                        <div key={index} className="whitespace-pre-wrap break-words">
                            {line.startsWith('raghav@portfolio:') ? (
                                <>
                                    <span className="text-primary font-bold">
                                        {line.split('$')[0]}$
                                    </span>
                                    <span className="text-foreground">{line.split('$').slice(1).join('$')}</span>
                                </>
                            ) : (
                                <span className="text-foreground/90">{line}</span>
                            )}
                        </div>
                    ))}

                    {/* Current Input Line */}
                    <div className="flex items-center gap-1">
                        <span className="text-primary font-bold whitespace-nowrap">
                            raghav@portfolio:{currentDir}$
                        </span>
                        <input
                            ref={inputRef}
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyDown={handleKeyDown}
                            className="flex-1 bg-transparent border-none outline-none text-foreground font-mono text-xs sm:text-sm"
                            autoComplete="off"
                            spellCheck={false}
                            aria-label="Terminal input"
                        />
                        <span className="w-2 h-4 bg-primary animate-pulse" />
                    </div>
                </div>
            </div>
        </div>
    );
}
