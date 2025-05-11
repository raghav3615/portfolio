import Link from 'next/link';

export default function Blog() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col items-center pt-10 pb-20 px-4">
      <h1 className="text-2xl font-bold mb-6">Blog</h1>
      <div className="bg-card text-card-foreground rounded-lg p-4 w-full max-w-md text-center">Blog posts coming soon!</div>
      <Link href="/" className="mt-10 text-primary underline">Back to Home</Link>
    </div>
  );
} 