import Link from 'next/link';

export default function Projects() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col items-center pt-10 pb-20 px-4">
      <h1 className="text-2xl font-bold mb-6">Projects</h1>
      <ul className="w-full max-w-md space-y-4">
        <li className="bg-card text-card-foreground rounded-lg p-4">Project 1 (Coming Soon)</li>
        <li className="bg-card text-card-foreground rounded-lg p-4">Project 2 (Coming Soon)</li>
      </ul>
      <Link href="/" className="mt-10 text-primary underline">Back to Home</Link>
    </div>
  );
} 