// app/page.tsx
"use client"

import Head from 'next/head';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Home() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <>
      {typeof window !== 'undefined' && (
        <Head>
          <title>Space Travel</title>
          <meta name="description" content="Experience space travel like never before" />
        </Head>
      )}

      <main className={`w-full relative ${loaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-1000`}>
        {/* Main Content Container */}
        <div className="min-h-screen w-full flex flex-col items-center justify-between py-32 px-6 md:px-12 lg:px-24">
          {/* Top Content Section */}
          <div className="text-center max-w-4xl w-full mx-auto">
            {/* Heading Section */}
            <h2 className="text-white text-base sm:text-base md:text-lg uppercase tracking-[0.2em] mb-4 font-light">
              So, you want to travel to
            </h2>
            
            {/* Main Title */}
            <h1 className="text-white text-7xl sm:text-8xl md:text-9xl lg:text-10xl font-serif my-6 md:my-10 leading-none">
              SPACE
            </h1>
            
            {/* Description Text */}
            <p className="text-gray-300 font-Arial text-sm sm:text-base max-w-md mx-auto mt-4 mb-8 leading-relaxed">
              Let&apos;s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we&apos;ll give you a truly out of this world experience!
            </p>
          </div>

          {/* Explore Button */}
          <div className="mt-16 md:mt-12">
            <Link href="/destination">
              <div className="relative group">
                <div className="absolute -inset-5 rounded-full bg-white/10 scale-0 group-hover:scale-100 transition-all duration-500 ease-in-out"></div>
                <div className="relative bg-white text-black rounded-full w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 flex items-center justify-center cursor-pointer transition-transform duration-500 group-hover:transform group-hover:translate-y-[-5px]">
                  <span className="font-serif text-base sm:text-lg md:text-xl lg:text-2xl tracking-widest">EXPLORE</span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}