"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Logo } from "./Logo";
import { InstagramIcon } from "./InstagramIcon";
import { NAV_LINKS, SITE } from "@/data/site";
import { cn } from "@/lib/utils";

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const solid = scrolled || open;

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-500",
        solid
          ? "bg-ink/95 backdrop-blur-sm shadow-[0_1px_0_0_rgba(201,168,92,0.25)]"
          : "bg-transparent",
      )}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-10">
        <Link href="#top" className="shrink-0" aria-label="Mafleurr home">
          <Logo variant="light" className="h-8 md:h-9" />
        </Link>

        <ul className="hidden items-center gap-9 lg:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="tracking-label text-xs uppercase text-cream/80 transition-colors hover:text-gold"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-4 lg:flex">
          <a
            href={SITE.instagram.main.url}
            target="_blank"
            rel="noreferrer"
            aria-label={`Mafleurr on Instagram (${SITE.instagram.main.handle})`}
            className="text-cream/80 transition-colors hover:text-gold"
          >
            <InstagramIcon className="h-5 w-5" />
          </a>
          <a
            href={SITE.instagram.events.url}
            target="_blank"
            rel="noreferrer"
            aria-label={`Mafleurr Events on Instagram (${SITE.instagram.events.handle})`}
            className="text-cream/80 transition-colors hover:text-gold"
          >
            <InstagramIcon className="h-5 w-5" />
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle navigation menu"
          aria-expanded={open}
          className="flex h-9 w-9 flex-col items-center justify-center gap-1.5 lg:hidden"
        >
          <span
            className={cn(
              "h-px w-6 bg-cream transition-transform duration-300",
              open && "translate-y-[3.5px] rotate-45",
            )}
          />
          <span
            className={cn(
              "h-px w-6 bg-cream transition-transform duration-300",
              open && "-translate-y-[3.5px] -rotate-45",
            )}
          />
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="overflow-hidden bg-ink lg:hidden"
          >
            <ul className="flex flex-col gap-6 px-6 pb-8 pt-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="tracking-label text-sm uppercase text-cream/85 hover:text-gold"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li className="flex items-center gap-5 pt-2">
                <a
                  href={SITE.instagram.main.url}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Mafleurr on Instagram (${SITE.instagram.main.handle})`}
                  className="text-cream/80 hover:text-gold"
                >
                  <InstagramIcon className="h-5 w-5" />
                </a>
                <a
                  href={SITE.instagram.events.url}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Mafleurr Events on Instagram (${SITE.instagram.events.handle})`}
                  className="text-cream/80 hover:text-gold"
                >
                  <InstagramIcon className="h-5 w-5" />
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
