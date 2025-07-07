import React, { useEffect, useState } from 'react';
import { Player } from '@lottiefiles/react-lottie-player';
import FlutterAnimation from './assets/animation.json'; // You must place the JSON here

const HeroTyping = () => {
  const phrases = ['Preksha Karena', 'a Flutter Developer'];
  const [text, setText] = useState('');
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = phrases[index];
    const speed = isDeleting ? 50 : 100;

    const timeout = setTimeout(() => {
      setText((prev) =>
        isDeleting ? current.substring(0, prev.length - 1) : current.substring(0, prev.length + 1)
      );

      if (!isDeleting && text === current) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setIndex((prev) => (prev + 1) % phrases.length);
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [text, isDeleting, index]);

  return (
    <section className="relative h-screen bg-[#0f0f1c] flex items-center justify-center text-white text-center overflow-hidden">
      {/* Background animation */}
      <div className="absolute inset-0 z-0 opacity-10 flex items-center justify-center">
        <Player
          autoplay
          loop
          src={FlutterAnimation}
          style={{ height: '800px', width: '1000px' }}
        />
      </div>

      {/* Text content */}
      <div className="z-10 relative px-4">
        <h1 className="text-4xl md:text-6xl font-bold text-[#8F7A6E] h-20 min-h-[60px]">
          I am {text}
          <span className="border-r-2 border-[#8F7A6E] animate-blink ml-1" />
        </h1>
        <p className="mt-4 text-xl text-gray-400">Turning ideas into pixel-perfect mobile experiences. <br />Code, design, and deliver — that’s how I build apps.</p>
      </div>
    </section>
  );
};

export default HeroTyping;
