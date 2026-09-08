"use client";

import { useRef, useState } from "react";
import Image from "next/image";

export default function ProjectGallery({
  images,
  alt,
}: {
  images: string[];
  alt: string;
}) {
  const [index, setIndex] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);
  const touchStartX = useRef<number | null>(null);

  const hasImages = images.length > 0;
  const atStart = index === 0;
  const atEnd = index === images.length - 1;

  function goTo(next: number) {
    const clamped = Math.max(0, Math.min(images.length - 1, next));
    setIndex(clamped);
  }

  function onTouchStart(e: React.TouchEvent) {
    touchStartX.current = e.touches[0].clientX;
  }

  function onTouchEnd(e: React.TouchEvent) {
    if (touchStartX.current === null) return;
    const diff = e.changedTouches[0].clientX - touchStartX.current;
    if (diff > 40) goTo(index - 1);
    else if (diff < -40) goTo(index + 1);
    touchStartX.current = null;
  }

  if (!hasImages) {
    return (
      <div className="flex aspect-[4/3] w-full items-center justify-center bg-stone-100 px-8 text-center text-sm leading-relaxed text-stone-400 md:aspect-auto md:h-full">
        Photo gallery — scrolls left / right with arrow controls
      </div>
    );
  }

  return (
    <div className="relative">
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-stone-100 md:aspect-auto md:h-full">
        <div
          ref={trackRef}
          className="flex h-full transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${index * 88}%)` }}
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        >
          {images.map((src, i) => (
            <div
              key={src + i}
              className="relative mr-[4%] h-full flex-none basis-[88%]"
            >
              <Image
                src={src}
                alt={`${alt} — image ${i + 1} of ${images.length}`}
                fill
                sizes="(min-width: 768px) 40vw, 90vw"
                className="object-cover"
                priority={i === 0}
              />
            </div>
          ))}
        </div>

        {!atStart ? (
          <button
            type="button"
            aria-label="Previous image"
            onClick={() => goTo(index - 1)}
            className="absolute left-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white text-navy-900 shadow-subtle transition-colors hover:bg-navy-900 hover:text-white"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>
        ) : null}

        {!atEnd ? (
          <button
            type="button"
            aria-label="Next image"
            onClick={() => goTo(index + 1)}
            className="absolute right-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white text-navy-900 shadow-subtle transition-colors hover:bg-navy-900 hover:text-white"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>
        ) : null}
      </div>

      {images.length > 1 ? (
        <div className="mt-3 flex justify-center gap-1.5">
          {images.map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Go to image ${i + 1}`}
              onClick={() => goTo(i)}
              className={`h-1.5 rounded-full transition-all ${
                i === index ? "w-5 bg-gold-600" : "w-1.5 bg-stone-300"
              }`}
            />
          ))}
        </div>
      ) : null}
    </div>
  );
}
