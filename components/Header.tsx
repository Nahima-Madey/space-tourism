"use client"

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const navItems = [
    { id: '00', title: 'HOME', path: '/' },
    { id: '01', title: 'DESTINATION', path: '/destination' },
    { id: '02', title: 'CREW', path: '/crew' },
    { id: '03', title: 'TECHNOLOGY', path: '/technology' },
  ];

  const isActive = (path: string) => pathname === path;

  return (
    <header className="relative w-full text-white py-8 md:py-0">
      <div className="flex items-center justify-end">
        {/* Mobile menu button */}
        {isMobile && (
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="absolute right-6 z-50 focus:outline-none"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 6L6 18M6 6L18 18" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            ) : (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 6H20M4 12H20M4 18H20" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            )}
          </button>
        )}
        
        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <div className={`${isHomePage ? 'bg-[#0B0D17]/70' : 'bg-[#0B0D17]/90'} backdrop-blur-md h-24 lg:h-28 pl-2 pr-0`}>
            <ul className="flex h-full items-center">
              {navItems.map((item) => (
                <li key={item.id} className="relative h-full flex items-center">
                  <Link href={item.path}>
                    <span className={`flex items-center h-full text-xs lg:text-sm tracking-widest hover:text-white group transition duration-200 px-3 lg:px-4 ${isActive(item.path) ? 'text-white' : 'text-gray-300'}`}>
                      <span className="font-bold mr-2">{item.id}</span>
                      <span>{item.title}</span>
                      <span className={`absolute bottom-0 left-0 w-full h-1 bg-white transform ${isActive(item.path) ? 'opacity-100' : 'opacity-0 group-hover:opacity-75'} transition-opacity duration-200`}></span>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </nav>
        
        {/* Mobile Navigation Menu */}
        <div className={`md:hidden fixed inset-y-0 right-0 transition-transform transform duration-300 ease-in-out z-40 ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="w-64 h-full bg-[#0B0D17]/95 backdrop-blur-md flex flex-col pt-24 px-8">
            <ul className="space-y-8">
              {navItems.map((item) => (
                <li key={item.id}>
                  <Link href={item.path}>
                    <span 
                      className={`block text-sm tracking-widest py-2 border-b border-transparent ${isActive(item.path) ? 'text-white border-white' : 'text-gray-300 hover:border-gray-400'}`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <span className="font-bold mr-2">{item.id}</span>
                      <span>{item.title}</span>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;