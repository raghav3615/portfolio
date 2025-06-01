'use client';

import { useState, useEffect } from 'react';
import LoadingScreen from './LoadingScreen';

interface ClientWrapperProps {
  children: React.ReactNode;
}

export default function ClientWrapper({ children }: ClientWrapperProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);

  const handleLoadingComplete = () => {
    setIsLoading(false);
    // Add a small delay to ensure smooth transition
    setTimeout(() => {
      setShowContent(true);
    }, 300);
  };

  // Ensure loading screen shows on every page load
  useEffect(() => {
    setIsLoading(true);
    setShowContent(false);
  }, []);

  return (
    <>
      {isLoading && <LoadingScreen onLoadingComplete={handleLoadingComplete} />}
      <div 
        className={`transition-opacity duration-500 ${
          showContent ? 'opacity-100' : 'opacity-0'
        }`}
        style={{ display: showContent ? 'block' : 'none' }}
      >
        {children}
      </div>
    </>
  );
}
