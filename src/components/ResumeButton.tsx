'use client';
import { motion } from 'framer-motion';
import { FaDownload } from 'react-icons/fa';

interface ResumeButtonProps {
  className?: string;
}

export default function ResumeButton({ className = "" }: ResumeButtonProps) {
  const handleDownload = () => {
    // You can replace this with your actual resume URL
    const resumeUrl = "/resume.pdf"; // Place your resume.pdf in the public folder
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = 'Raghav_Dadhich_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <motion.button
      onClick={handleDownload}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`inline-flex items-center gap-2 bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-primary-foreground px-4 py-2 rounded-lg font-medium transition-all shadow-lg hover:shadow-xl ${className}`}
    >
      <FaDownload className="text-sm" />
      Download Resume
    </motion.button>
  );
}
