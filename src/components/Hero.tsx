"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { Logo } from "./Logo";
import { unsplash } from "@/lib/utils";
import { SITE } from "@/data/site";

export function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] items-center justify-center overflow-hidden bg-ink"
    >
      {/* PLACEHOLDER: swap for client photo — moody editorial hero bouquet */}
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1.08, x: 0, y: 0 }}
        animate={
          reduceMotion ? { scale: 1.08 } : { scale: 1.18, x: -10, y: -6 }
        }
        transition={
          reduceMotion
            ? { duration: 0 }
            : {
                duration: 26,
                ease: "linear",
                repeat: Infinity,
                repeatType: "mirror",
              }
        }
      >
        <Image
          src={unsplash("1518343161123-c7e9ab4dc4da", 1920)}
          alt="Dark, moody luxury floral arrangement"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
      </motion.div>

      <div className="absolute inset-0 bg-gradient-to-b from-ink/70 via-ink/45 to-ink/85" />
      <div className="absolute inset-0 bg-ink/20" />

      <div className="relative z-10 mx-auto flex max-w-3xl flex-col items-center px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <Logo variant="light" className="text-5xl md:text-6xl" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="mt-8 font-display text-4xl font-medium leading-tight text-cream sm:text-5xl md:text-6xl"
        >
          Bespoke Florals, Timelessly Styled
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="mt-6 max-w-xl text-base text-cream/80 md:text-lg"
        >
          Hand-crafted fresh, dried and fruit-preserved arrangements — every
          piece designed one-of-a-kind from our studio in Bolton, Greater
          Manchester.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="mt-10 flex flex-col items-center gap-4 sm:flex-row"
        >
          <a
            href="#quiz"
            className="tracking-label rounded-full border border-gold bg-gold px-8 py-3 text-xs uppercase text-ink transition-colors hover:bg-transparent hover:text-gold"
          >
            Take the Flower Quiz
          </a>
          <a
            href="#portfolio"
            className="tracking-label rounded-full border border-cream/50 px-8 py-3 text-xs uppercase text-cream transition-colors hover:border-gold hover:text-gold"
          >
            View Our Work
          </a>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        aria-label="Scroll to About section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.3 }}
        className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2 text-cream/60"
      >
        <span className="tracking-label text-[10px] uppercase">{SITE.location}</span>
        <span className="h-10 w-px animate-pulse bg-gold/70" />
      </motion.a>
    </section>
  );
}
