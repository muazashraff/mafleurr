"use client";

import { useMemo, useState, useEffect } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { Reveal } from "./Reveal";
import {
  PORTFOLIO_CATEGORIES,
  PORTFOLIO_ITEMS,
  type PortfolioCategory,
} from "@/data/portfolio";
import { cn } from "@/lib/utils";

export function Portfolio() {
  const [active, setActive] = useState<PortfolioCategory>("All");
  const [lightbox, setLightbox] = useState<{ image: string; title: string } | null>(
    null,
  );

  const items = useMemo(
    () =>
      active === "All"
        ? PORTFOLIO_ITEMS
        : PORTFOLIO_ITEMS.filter((item) => item.category === active),
    [active],
  );

  useEffect(() => {
    if (!lightbox) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightbox(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightbox]);

  return (
    <section id="portfolio" className="bg-cream-dim py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="tracking-label text-xs uppercase text-gold-deep">
            Portfolio
          </span>
          <h2 className="mt-4 font-display text-3xl font-medium leading-tight text-ink sm:text-4xl md:text-5xl">
            A study in bespoke craft
          </h2>
          <p className="mt-5 text-ink/75">
            No two arrangements are ever the same. Explore a selection of
            work across bridal, dried, events and preserved florals.
          </p>
        </Reveal>

        <Reveal delay={0.1} className="mt-10 flex flex-wrap justify-center gap-3">
          {PORTFOLIO_CATEGORIES.map((category) => (
            <button
              key={category}
              onClick={() => setActive(category)}
              className={cn(
                "tracking-label rounded-full border px-5 py-2 text-[11px] uppercase transition-colors",
                active === category
                  ? "border-ink bg-ink text-cream"
                  : "border-ink/25 text-ink/70 hover:border-gold hover:text-gold-deep",
              )}
            >
              {category}
            </button>
          ))}
        </Reveal>

        <motion.div
          layout
          className="mt-12 columns-1 gap-4 sm:columns-2 lg:columns-3"
        >
          <AnimatePresence mode="popLayout">
            {items.map((item) => (
              <motion.button
                type="button"
                layout
                key={item.id}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                onClick={() => setLightbox({ image: item.image, title: item.title })}
                className="group relative mb-4 block w-full overflow-hidden rounded-sm text-left"
              >
                {/* PLACEHOLDER: swap for client photo — {item.title} */}
                <div
                  className={cn(
                    "relative w-full overflow-hidden bg-ink/5",
                    item.aspect === "portrait" && "aspect-[3/4]",
                    item.aspect === "square" && "aspect-square",
                    item.aspect === "landscape" && "aspect-[4/3]",
                  )}
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    sizes="(min-width: 1024px) 32vw, (min-width: 640px) 48vw, 92vw"
                  />
                  <div className="absolute inset-0 flex items-end bg-gradient-to-t from-ink/60 via-ink/0 to-ink/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <span className="tracking-label px-4 py-3 text-[11px] uppercase text-cream">
                      {item.title}
                    </span>
                  </div>
                </div>
              </motion.button>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-ink/90 p-6"
            onClick={() => setLightbox(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="relative aspect-[3/4] w-full max-w-xl"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={lightbox.image}
                alt={lightbox.title}
                fill
                className="object-contain"
                sizes="90vw"
              />
            </motion.div>
            <button
              type="button"
              aria-label="Close preview"
              onClick={() => setLightbox(null)}
              className="absolute right-6 top-6 text-3xl leading-none text-cream/80 hover:text-gold"
            >
              &times;
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
