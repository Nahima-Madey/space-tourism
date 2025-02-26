'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

interface CrewMember {
  id: number;
  role: string;
  name: string;
  bio: string;
  imagePath: string;
}

const crewData: CrewMember[] = [
  {
    id: 1,
    role: "COMMANDER",
    name: "DOUGLAS HURLEY",
    bio: "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.",
    imagePath: "https://images.unsplash.com/photo-1614726365826-65d0f4448bef?q=80&w=1450&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"

  },
  {
    id: 2,
    role: "MISSION SPECIALIST",
    name: "MARK SHUTTLEWORTH",
    bio: "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.",
    imagePath: "https://images.unsplash.com/flagged/photo-1564401398070-9a0ec00bd38a?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: 3,
    role: "PILOT",
    name: "VICTOR GLOVER",
    bio: "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18. He was a crew member of Expedition 64, and served as a station systems flight engineer.",
    imagePath: "https://images.unsplash.com/photo-1530469353049-18df0403f42b?q=80&w=1459&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: 4,
    role: "FLIGHT ENGINEER",
    name: "Nahima Madey",
    bio: "Nahima Madey is a Kenyan engineer and co-founder of Prodea Systems. Nahima was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Kenyan in space.",
    imagePath: "https://images.unsplash.com/photo-1580832107357-012906efd981?q=80&w=1376&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  }
];

export default function CrewPage() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null; // Prevent hydration errors by not rendering until client-side
  }

  const activeMember = crewData[activeIndex];

  return (
    <main className="min-h-screen w-full bg-black bg-[url('https://images.unsplash.com/photo-1501975558162-0be7b8ca95ea?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center bg-fixed">
      <div className="container mx-auto px-6 pt-24 pb-16 md:px-10 lg:px-16 min-h-screen flex flex-col">
        <h1 className="text-white text-base md:text-xl tracking-[0.2em] text-center md:text-left mb-8 md:mb-14 lg:mb-16">
          <span className="font-bold mr-4 text-gray-500">02</span>
          MEET YOUR CREW
        </h1>

        {/* Mobile Layout (under 768px) */}
        <div className="flex flex-col md:hidden flex-1">
          <div className="flex justify-center mb-8">
            <div className="flex space-x-4">
              {crewData.map((member, index) => (
                <button
                  key={member.id}
                  onClick={() => setActiveIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    activeIndex === index ? "bg-white" : "bg-gray-600 hover:bg-gray-400"
                  }`}
                  aria-label={`Select ${member.name}`}
                />
              ))}
            </div>
          </div>

          <div className="text-center text-white animate-fadeIn mb-8">
            <h2 className="text-base text-gray-400 uppercase mb-2">{activeMember.role}</h2>
            <h3 className="text-2xl uppercase font-serif mb-4">{activeMember.name}</h3>
            <p className="text-gray-300 text-sm leading-relaxed">{activeMember.bio}</p>
          </div>

          <div className="relative h-[225px] w-full flex-shrink-0 border-t border-gray-700 pt-8">
            <Image 
              src={activeMember.imagePath}
              alt={activeMember.name}
              fill
              priority
              className="object-contain"
              sizes="(max-width: 768px) 100vw"
            />
          </div>
        </div>

        {/* Tablet Layout (768px - 1023px) */}
        <div className="hidden md:flex lg:hidden flex-col flex-1">
          <div className="text-center text-white animate-fadeIn mb-10 max-w-2xl mx-auto">
            <h2 className="text-lg text-gray-400 uppercase mb-2">{activeMember.role}</h2>
            <h3 className="text-3xl uppercase font-serif mb-4">{activeMember.name}</h3>
            <p className="text-gray-300 text-base leading-relaxed">{activeMember.bio}</p>
          </div>

          <div className="flex justify-center mb-10">
            <div className="flex space-x-5">
              {crewData.map((member, index) => (
                <button
                  key={member.id}
                  onClick={() => setActiveIndex(index)}
                  className={`w-4 h-4 rounded-full transition-all duration-300 ${
                    activeIndex === index ? "bg-white" : "bg-gray-600 hover:bg-gray-400"
                  }`}
                  aria-label={`Select ${member.name}`}
                />
              ))}
            </div>
          </div>

          <div className="relative flex-1 flex items-end justify-center">
            <Image 
              src={activeMember.imagePath}
              alt={activeMember.name}
              width={456}
              height={572} 
              className="object-contain max-h-[532px]"
              priority
            />
          </div>
        </div>

        {/* Desktop Layout (1024px and above) */}
        <div className="hidden lg:flex flex-col items-center flex-1">
          <div className="w-full text-center mb-16">
            <div className="text-white animate-fadeIn">
              <h2 className="text-2xl text-gray-400 uppercase mb-4">{activeMember.role}</h2>
              <h3 className="text-5xl uppercase font-serif mb-8">{activeMember.name}</h3>
              <p className="text-gray-300 text-lg leading-relaxed max-w-3xl mx-auto">{activeMember.bio}</p>
            </div>

            <div className="mt-12">
              <div className="flex space-x-6 justify-center">
                {crewData.map((member, index) => (
                  <button
                    key={member.id}
                    onClick={() => setActiveIndex(index)}
                    className={`w-4 h-4 rounded-full transition-all duration-300 ${
                      activeIndex === index ? "bg-white" : "bg-gray-600 hover:bg-gray-400"
                    }`}
                    aria-label={`Select ${member.name}`}
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="w-full relative h-[500px] flex justify-center">
            <Image 
              src={activeMember.imagePath}
              alt={activeMember.name}
              width={568}
              height={700}
              className="object-contain max-h-[500px]"
              priority
            />
          </div>
        </div>
      </div>
    </main>
  );
}