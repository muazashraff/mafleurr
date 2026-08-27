"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion, type PanInfo } from "framer-motion";
import { Reveal } from "./Reveal";
import { TESTIMONIALS } from "@/data/testimonials";

const AUTO_ADVANCE_MS = 5500;

function Star({ filled }: { filled: boolean }) {
  return (
    <svg
      viewBox="0 0 20 20"
      className="h-4 w-4"
      fill={filled ? "#C9A85C" : "none"}
      stroke="#C9A85C"
      strokeWidth={1}
    >
      <path d="M10 1.5l2.59 5.25 5.79.84-4.19 4.09.99 5.77L10 14.9l-5.18 2.55.99-5.77-4.19-4.09 5.79-.84L10 1.5z" />
    </svg>
  );
}

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [paused, setPaused] = useState(false);
  const reduceMotion = useReducedMotion();
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const advance = useCallback((dir: number) => {
    setDirection(dir);
    setIndex((i) => (i + dir + TESTIMONIALS.length) % TESTIMONIALS.length);
  }, []);

  useEffect(() => {
    if (paused || reduceMotion) return;
    timerRef.current = setInterval(() => advance(1), AUTO_ADVANCE_MS);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [paused, reduceMotion, advance]);

  function handleDragEnd(_: unknown, info: PanInfo) {
    if (info.offset.x < -80) advance(1);
    else if (info.offset.x > 80) advance(-1);
  }

  const current = TESTIMONIALS[index];

  return (
    <section className="bg-cream-dim py-24 md:py-32">
      <div className="mx-auto max-w-3xl px-6 md:px-10">
        <Reveal className="text-center">
          <span className="tracking-label text-xs uppercase text-gold-deep">
            Kind Words
          </span>
          <h2 className="mt-4 font-display text-3xl font-medium leading-tight text-ink sm:text-4xl md:text-5xl">
            From Our Clients
          </h2>
        </Reveal>

        <div
          className="relative mt-14 h-[22rem] sm:h-72"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onTouchStart={() => setPaused(true)}
          onTouchEnd={() => setPaused(false)}
        >
          {/* floating layered background cards */}
          <div className="absolute inset-x-6 top-6 h-full -rotate-2 rounded-sm bg-cream shadow-[0_25px_50px_-25px_rgba(10,10,10,0.25)] sm:inset-x-10" />
          <div className="absolute inset-x-3 top-3 h-full rotate-1 rounded-sm bg-cream shadow-[0_25px_50px_-25px_rgba(10,10,10,0.25)] sm:inset-x-5" />

          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={current.id}
              custom={direction}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.2}
              onDragEnd={handleDragEnd}
              initial={{ opacity: 0, x: direction * 60, scale: 0.97 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: -direction * 60, scale: 0.97 }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-0 flex cursor-grab flex-col items-center justify-center rounded-sm border border-gold/20 bg-cream px-8 py-10 text-center shadow-[0_30px_60px_-30px_rgba(10,10,10,0.35)] active:cursor-grabbing"
            >
              <div className="flex gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} filled={i < current.rating} />
                ))}
              </div>
              <p className="mt-5 max-w-xl font-accent text-xl italic text-ink/85 sm:text-2xl">
                &ldquo;{current.quote}&rdquo;
              </p>
              <p className="tracking-label mt-6 text-xs uppercase text-gold-deep">
                {current.name} &mdash; {current.occasion}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="mt-8 flex justify-center gap-2">
          {TESTIMONIALS.map((t, i) => (
            <button
              key={t.id}
              aria-label={`Show testimonial ${i + 1}`}
              onClick={() => {
                setDirection(i > index ? 1 : -1);
                setIndex(i);
              }}
              className={`h-1.5 rounded-full transition-all ${
                i === index ? "w-6 bg-gold" : "w-1.5 bg-ink/20"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
