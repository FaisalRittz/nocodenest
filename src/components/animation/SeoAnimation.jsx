'use client';

import { useEffect, useState } from 'react';

const images = [
  '/assets/seo1.png',
  '/assets/seo2.png',
  '/assets/seo3.png',
  '/assets/seo4.png',
  '/assets/seo5.png',
  '/assets/seo6.png',
  '/assets/seo7.png',
];

export default function AutomAnime() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 2000); // change image every 2 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-full overflow-hidden">
      {images.map((src, index) => (
        <img
          key={index}
          src={src}
          alt={`Slide ${index}`}
          className={`absolute p-2 w-[80vw] h-[90vh] object-cover transition-opacity duration-1000 ease-in-out ${
            index === current ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        />
      ))}
    </div>
  );
}
