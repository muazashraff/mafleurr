import { Logo } from "./Logo";
import { InstagramIcon } from "./InstagramIcon";
import { NAV_LINKS, SITE } from "@/data/site";

export function Footer() {
  return (
    <footer className="bg-ink py-14 text-cream">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-8 px-6 text-center md:px-10">
        <Logo variant="light" className="h-9" />

        <ul className="flex flex-wrap justify-center gap-x-8 gap-y-3">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="tracking-label text-xs uppercase text-cream/70 hover:text-gold"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-5">
          <a
            href={SITE.instagram.main.url}
            target="_blank"
            rel="noreferrer"
            aria-label={`Mafleurr on Instagram (${SITE.instagram.main.handle})`}
            className="text-cream/70 hover:text-gold"
          >
            <InstagramIcon className="h-5 w-5" />
          </a>
          <a
            href={SITE.instagram.events.url}
            target="_blank"
            rel="noreferrer"
            aria-label={`Mafleurr Events on Instagram (${SITE.instagram.events.handle})`}
            className="text-cream/70 hover:text-gold"
          >
            <InstagramIcon className="h-5 w-5" />
          </a>
        </div>

        <div className="h-px w-16 bg-gold/40" />

        <p className="text-xs text-cream/50">
          &copy; {new Date().getFullYear()} {SITE.name}. All rights reserved.
          &middot; {SITE.location}
        </p>
        {/* PLACEHOLDER: add or remove a "Website concept by [name]" credit line here if desired */}
      </div>
    </footer>
  );
}
