'use client';
import { FaEnvelope, FaWhatsapp, FaLinkedin } from 'react-icons/fa';
import { useState } from 'react';

export default function FloatingContact() {
  const [isOpen, setIsOpen] = useState(false);

  const contactOptions = [
    {
      icon: FaEnvelope,
      label: 'Email',
      href: 'mailto:dadhichraghav896@gmail.com',
    },
    {
      icon: FaLinkedin,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/raghavhere/',
    },
    {
      icon: FaWhatsapp,
      label: 'WhatsApp',
      href: 'https://wa.me/919876543210',
    },
  ];

  return (
    <div className="fixed bottom-8 right-8 z-40 font-mono">
      {/* Contact Options */}
      {isOpen && (
        <div className="flex flex-col gap-2 mb-2 items-end">
          {contactOptions.map((option, index) => (
            <a
              key={index}
              href={option.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-background border border-primary px-3 py-2 hover:bg-primary hover:text-background transition-colors"
            >
              <span className="text-xs uppercase">[{option.label}]</span>
              <option.icon className="text-sm" />
            </a>
          ))}
        </div>
      )}

      {/* Main Toggle */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-background border border-primary text-primary px-4 py-2 hover:bg-primary hover:text-background transition-colors flex items-center gap-2"
      >
        {isOpen ? (
          <span>[ CLOSE ]</span>
        ) : (
          <>
            <span>[ CONTACT ]</span>
            <FaEnvelope className="text-sm" />
          </>
        )}
      </button>
    </div>
  );
}
