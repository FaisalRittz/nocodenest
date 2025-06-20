'use client';

import { useEffect, useState, useRef } from 'react';

const images = [
  '/assets/seo1.svg',
  '/assets/seo2.svg',
  '/assets/seo3.svg',
  '/assets/seo4.svg',
  '/assets/seo5.svg',
  '/assets/seo6.svg',
  '/assets/seo7.svg',
  '/assets/seo8.svg',
  '/assets/seo9.svg',
  '/assets/seo10.svg',
  '/assets/seo11.svg',
  '/assets/seo12.svg',
  '/assets/seo13.svg',
  '/assets/seo14.svg',
  '/assets/seo15.svg',
];

export default function SeoAnimation() {
  const [current, setCurrent] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const intervalRef = useRef(null);

  const handleMouseMove = (e) => {
  const { clientX, clientY } = e;
  setCursorPos({ x: clientX, y: clientY });
};

  useEffect(() => {
    if (isHovered) {
      intervalRef.current = setInterval(() => {
        setCurrent((prev) => (prev + 1) % images.length);
      }, 1000);
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isHovered]);

  return (
    <div
      className="relative w-full h-full overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseMove={handleMouseMove}
    >
      {isHovered && (
        <div
          className="pointer-events-none fixed z-50 flex items-center justify-center w-20 h-20 rounded-full bg-white text-black text-sm font-semibold mix-blend-difference transition-transform duration-75 ease-linear"
          style={{
            left: cursorPos.x,
            top: cursorPos.y,
            transform: 'translate(-50%, -50%)',
          }}
        >
          PLAY
        </div>
      )}

      {images.map((src, index) => (
        <img
          key={index}
          src={src}
          alt={`Slide ${index}`}
          className={`absolute p-2 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
            index === current ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        />
      ))}
    </div>
  );
}
