// app/destination/page.tsx
"use client"

import { useState } from 'react';
import Image from 'next/image';

const destinations = [
  { id: 'moon', name: 'MOON' },
  { id: 'mars', name: 'MARS' },
  { id: 'europa', name: 'EUROPA' },
  { id: 'titan', name: 'TITAN' },
];

export default function Destination() {
  const [selectedDestination, setSelectedDestination] = useState('moon');

  return (
    <main className="relative min-h-screen z-20">
      {/* Background Image */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-black/70 z-10" />
        <div className="relative w-full h-full">
          <Image 
            src="https://images.unsplash.com/photo-1572925077991-61acf7d70608?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Space background"
            fill
            priority
            style={{ objectFit: 'cover' }}
          />
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 flex flex-col items-center space-y-12 max-w-3xl relative z-20">
        {/* Header */}
        <header className="w-full text-center">
          <h1 className="text-white font-barlow-condensed text-xl md:text-2xl tracking-[0.2em]">
            <span className="opacity-25 mr-4 font-bold">01</span>
            PICK YOUR DESTINATION
          </h1>
        </header>

        {/* Main Content */}
        <div className="flex flex-col items-center space-y-12 w-full">
          {/* Planet Image */}
          <div className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px]">
            <Image
              src="/moon.png" // Add your destination images
              alt={selectedDestination}
              fill
              className="object-contain animate-float"
            />
          </div>

          {/* Navigation */}
          <nav className="flex justify-center gap-6">
            {destinations.map((dest) => (
              <button
                key={dest.id}
                onClick={() => setSelectedDestination(dest.id)}
                className={`text-white pb-2 px-2 tracking-[0.2em] border-b-2 transition-colors ${
                  selectedDestination === dest.id
                    ? 'border-white'
                    : 'border-transparent hover:border-white/50'
                }`}
              >
                {dest.name}
              </button>
            ))}
          </nav>

          {/* Destination Info */}
          <div className="text-center space-y-8">
            <h2 className="text-white text-6xl md:text-7xl font-bellefair">
              {selectedDestination.toUpperCase()}
            </h2>

            <p className="text-gray-300 leading-relaxed max-w-xl mx-auto">
              See our planet as you&apos;ve never seen it before. A perfect relaxing
              trip away to help regain perspective and come back refreshed.
              While you&apos;re there, take in some history by visiting the Luna 2
              and Apollo 11 landing sites.
            </p>

            <hr className="border-gray-700 my-8" />

            {/* Stats */}
            <div className="flex flex-col md:flex-row justify-center gap-8 md:gap-16">
              <div className="space-y-2">
                <h3 className="text-gray-400 text-sm tracking-wider">AVG. DISTANCE</h3>
                <p className="text-white text-2xl font-bellefair">384,400 KM</p>
              </div>
              <div className="space-y-2">
                <h3 className="text-gray-400 text-sm tracking-wider">EST. TRAVEL TIME</h3>
                <p className="text-white text-2xl font-bellefair">3 DAYS</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}