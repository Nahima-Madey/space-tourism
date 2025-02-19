// components/Header.jsx

"use client"

import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navItems = [
    { id: "00", label: "HOME", href: "/" },
    { id: "01", label: "DESTINATION", href: "/destination" },
    { id: "02", label: "CREW", href: "/crew" },
    { id: "03", label: "TECHNOLOGY", href: "/technology" },
  ];

  return (
    <header className="bg-[#0c0d18] text-white h-[40px] flex justify-center items-center">
      <div className="bg-[#1c1d29] h-full px-24 flex items-center justify-center">
        <nav className="flex space-x-12 h-full">
          {navItems.map((item, index) => (
            <Link 
              key={item.id} 
              href={item.href}
              className="relative h-full flex items-center"
              onClick={() => setActiveIndex(index)}
            >
              <div className="flex items-center text-[13px] tracking-[2px] py-2 px-1">
                <span className="font-mono mr-2">{item.id}</span>
                <span className="font-mono">{item.label}</span>
              </div>
              {index === 0 && (
                <div className="absolute bottom-0 left-0 w-full h-[2px] bg-white"></div>
              )}
            </Link>
          ))}
        </nav>
      </div>

      {/* Mobile Navigation - Hidden by default but will appear on small screens */}
      <div className="lg:hidden">
        <button onClick={toggleMenu} className="text-white p-2">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
        
        {isOpen && (
          <div className="absolute top-[40px] right-0 w-48 bg-[#1c1d29] shadow-md z-50">
            {navItems.map((item, index) => (
              <Link 
                key={item.id} 
                href={item.href}
                className="block px-4 py-2 text-[13px] tracking-[2px]"
                onClick={() => {
                  setActiveIndex(index);
                  setIsOpen(false);
                }}
              >
                <span className="font-mono mr-2">{item.id}</span>
                <span className="font-mono">{item.label}</span>
              </Link>
            ))}
          </div>
        )}
      </div>
    </header>
  );
}