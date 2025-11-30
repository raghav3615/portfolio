'use client';
import { FaDownload } from 'react-icons/fa';

interface ResumeButtonProps {
  className?: string;
}

export default function ResumeButton({ className = "" }: ResumeButtonProps) {
  const handleDownload = () => {
    // You can replace this with your actual resume URL
    const resumeUrl = "/Resume.docx"; // Place your resume.pdf in the public folder
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = 'Resume.docs';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <button
      onClick={handleDownload}
      className={`inline-flex items-center gap-2 bg-primary text-background px-4 py-2 font-bold hover:opacity-90 transition-opacity border border-primary ${className}`}
    >
      <FaDownload className="text-sm" />
      [ DOWNLOAD RESUME ]
    </button>
  );
}
