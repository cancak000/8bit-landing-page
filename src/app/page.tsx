'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function Home() {
  const titleRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(titleRef.current, { y: -40, opacity: 0 }, { y: 0, opacity: 1, duration: 1 });
    gsap.fromTo(buttonRef.current, { scale: 0 }, { scale: 1, duration: 1, delay: 1, ease: "back.out(1.7)" });
  }, []);

  return (
    <main className="bg-black text-green-400 min-h-screen flex flex-col items-center justify-center font-pixel">
      <h1 ref={titleRef} className="text-3xl sm:text-4xl mb-8 text-center">
        Welcome to the 8bit World!
      </h1>
    <button
      ref={buttonRef}
        className="blink-hard border-2 border-green-400 px-6 py-2"
        >
      START
    </button>
    </main>
  );
}