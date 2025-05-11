import Link from 'next/link';

export default function Projects() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col items-center pt-10 pb-20 px-4">
      <h1 className="text-2xl font-bold mb-6">Projects</h1>
      <ul className="w-full max-w-md space-y-4">
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
      </ul>
      <Link href="/" className="mt-10 text-primary underline">Back to Home</Link>
    </div>
  );
} 