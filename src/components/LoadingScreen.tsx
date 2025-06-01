'use client';

import { useEffect, useState } from 'react';

interface LoadingScreenProps {
  onLoadingComplete: () => void;
}

export default function LoadingScreen({ onLoadingComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const texts = ['hello', 'नमस्ते'];

  useEffect(() => {
    // Text switching animation (switches every 1.5 seconds)
    const textInterval = setInterval(() => {
      setCurrentTextIndex(prev => (prev + 1) % texts.length);
    }, 1550);

    // Progress bar animation
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          clearInterval(textInterval);
          // Delay before calling onLoadingComplete to show 100% for a moment
          setTimeout(() => {
            onLoadingComplete();
          }, 300);
          return 100;
        }
        return prev + 1.5; // Slower progress for longer loading time
      });
    }, 45);

    return () => {
      clearInterval(textInterval);
      clearInterval(progressInterval);
    };
  }, [onLoadingComplete]);

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black/20 backdrop-blur-sm">
      <div className="text-center">
        {/* Main greeting text with fade transition */}
        <h1 className="text-5xl md:text-7xl font-light text-gray-900 dark:text-white mb-16 transition-all duration-500 ease-in-out min-h-[5rem] flex items-center justify-center">
          <span className="animate-fade-in" key={currentTextIndex}>
            {texts[currentTextIndex]}
          </span>
        </h1>

        {/* Apple-style loading line */}
        <div className="w-64 mx-auto">
          <div className="w-full bg-gray-300 dark:bg-gray-700 rounded-full h-1">
            <div
              className="bg-gray-900 dark:bg-white h-1 rounded-full transition-all duration-300 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </div>

      {/* CSS animations */}
      <style jsx>{`
        @keyframes fade-in {
          0% {
            opacity: 0;
            transform: translateY(10px) scale(0.95);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        
        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }
      `}</style>
    </div>
  );
}
