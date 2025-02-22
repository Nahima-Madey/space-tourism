// components/BackgroundImage.tsx
"use client"

import Image from 'next/image';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function BackgroundImage() {
  const [loaded, setLoaded] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  
  useEffect(() => {
    setLoaded(true);
  }, []);

  if (!isHomePage) return null;

  return (
    <div className="fixed inset-0 z-0">
      <div className="absolute inset-0 bg-black/50 z-10"></div>
      <div className="relative w-full h-full">
        <Image 
          src="https://images.unsplash.com/photo-1569141510930-5a09d247488f?q=80&w=1370&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
          alt="Earth from space" 
          fill
          priority
          style={{ objectFit: 'cover' }}
          className={`transition-opacity duration-1000 ${loaded ? 'opacity-100' : 'opacity-0'}`}
        />
      </div>
    </div>
  );
}