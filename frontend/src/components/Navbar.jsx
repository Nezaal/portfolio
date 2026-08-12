import React from 'react';
import { personalInfo } from '../data/portfolioData';

export default function Navbar({ onNavigate, activeSection, onOpenContact }) {
  const navItems = [
    { id: 'hero', label: 'Hero' },
    { id: 'skills', label: 'Skills' },
    { id: 'process', label: 'Process' },
    { id: 'work', label: 'Work' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-2xl">
      <nav className="flex items-center justify-between px-4 py-2 rounded-full bg-black/60 backdrop-blur-xl border border-white/10 shadow-2xl">
        <span className="font-mono font-bold text-xs text-[#BEF202] tracking-wider px-2">
          {personalInfo.name.toUpperCase()}
        </span>

        <div className="flex items-center gap-1">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className={`px-3 py-1 rounded-full text-xs font-mono transition-all cursor-pointer ${
                activeSection === item.id
                  ? 'bg-white/15 text-[#BEF202] font-semibold border border-white/10'
                  : 'text-white/60 hover:text-white hover:bg-white/5'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        <button
          onClick={onOpenContact}
          className="hidden sm:block px-3 py-1 rounded-full bg-[#BEF202] text-black text-xs font-mono font-medium hover:bg-[#a8d602] transition-colors cursor-pointer"
        >
          Hire Me
        </button>
      </nav>
    </header>
  );
}
