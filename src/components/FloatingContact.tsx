'use client';
import { motion } from 'framer-motion';
import { FaEnvelope, FaWhatsapp, FaLinkedin } from 'react-icons/fa';
import { useState } from 'react';

export default function FloatingContact() {
  const [isOpen, setIsOpen] = useState(false);

  const contactOptions = [
    {
      icon: FaEnvelope,
      label: 'Email',
      href: 'mailto:dadhichraghav896@gmail.com',
      color: 'bg-blue-500 hover:bg-blue-600',
    },
    {
      icon: FaLinkedin,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/raghavhere/',
      color: 'bg-blue-700 hover:bg-blue-800',
    },
    {
      icon: FaWhatsapp,
      label: 'WhatsApp',
      href: 'https://wa.me/919876543210', // Replace with your actual WhatsApp number
      color: 'bg-green-500 hover:bg-green-600',
    },
  ];

  return (
    <div className="fixed bottom-24 right-6 z-40">
      {/* Contact Options */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          className="flex flex-col gap-3 mb-4"
        >
          {contactOptions.map((option, index) => (
            <motion.a
              key={index}
              href={option.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`flex items-center gap-3 ${option.color} text-white px-4 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all group`}
            >
              <option.icon className="text-lg" />
              <span className="text-sm font-medium whitespace-nowrap">{option.label}</span>
            </motion.a>
          ))}
        </motion.div>
      )}

      {/* Main FAB */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className={`w-14 h-14 ${isOpen ? 'bg-red-500 hover:bg-red-600' : 'bg-primary hover:bg-primary/90'} text-white rounded-full shadow-lg hover:shadow-xl transition-all flex items-center justify-center`}
      >
        <motion.div
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.2 }}
        >
          {isOpen ? (
            <span className="text-xl font-bold">×</span>
          ) : (
            <FaEnvelope className="text-lg" />
          )}
        </motion.div>
      </motion.button>
    </div>
  );
}
