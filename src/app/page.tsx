'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function Home() {
  const titleRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      titleRef.current,
      { y: -50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.5, ease: 'power2.out' }
    );
  }, []);

  return (
    <main className="bg-black text-green-400 min-h-screen flex flex-col items-center justify-center font-pixel">
      <h1 className="text-4xl text-green-400 font-pixel">
        Welcome to the 8bit World!
      </h1>
      <p className="text-center text-sm sm:text-base max-w-md">
        Press Start to Begin Your Journey.
      </p>
    </main>
  );
}