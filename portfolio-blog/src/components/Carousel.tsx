"use client";

import { useState } from "react";

type CarouselProps = {
  images: string[];
};

export default function Carousel({ images }: CarouselProps) {
  const [current, setCurrent] = useState(0);
  const prev = () => setCurrent((c) => (c === 0 ? images.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === images.length - 1 ? 0 : c + 1));
  return (
    <div className="relative max-w-md mx-auto">
      <img
        src={images[current]}
        alt={`Slide ${current}`}
        className="W-full rounded-lg object-cover"
      />
      <div className="absolute inset-0 flex justify-between items-center px-4">
        <button
          onClick={prev}
          className="bg-white/70 hover:bg-white text-black rounded-full px-3 py-1"
        >
          ‹
        </button>
        <button
          onClick={next}
          className="bg-white/70 hover:bg-white text-black rounded-full px-3 py-1"
        >
          ›
        </button>
      </div>
    </div>
  );
}
