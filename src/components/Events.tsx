import Image from "next/image";
import { Reveal } from "./Reveal";
import { InstagramIcon } from "./InstagramIcon";
import { EVENTS_FEATURES, EVENTS_GALLERY } from "@/data/events";
import { SITE } from "@/data/site";

export function Events() {
  return (
    <section id="events" className="bg-ink py-24 text-cream md:py-32">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="tracking-label text-xs uppercase text-gold">
            Mafleurr Events
          </span>
          <h2 className="mt-4 font-display text-3xl font-medium leading-tight sm:text-4xl md:text-5xl">
            Timeless event &amp; décor styling
          </h2>
          <p className="mt-5 text-cream/75">
            Our events arm brings the same bespoke, editorial approach to
            weddings and celebrations across the North West UK — enquiries
            open now.
          </p>
          <a
            href={SITE.instagram.events.url}
            target="_blank"
            rel="noreferrer"
            className="tracking-label mt-5 inline-flex items-center gap-2 text-xs uppercase text-gold hover:text-gold-soft"
          >
            <InstagramIcon className="h-4 w-4" />
            {SITE.instagram.events.handle}
          </a>
        </Reveal>

        <div className="mt-14 grid gap-8 md:grid-cols-2">
          {EVENTS_FEATURES.map((feature, i) => (
            <Reveal key={feature.id} delay={i * 0.12}>
              <div className="group relative flex h-full flex-col overflow-hidden rounded-sm border border-gold/20">
                <div className="relative aspect-[16/10] w-full overflow-hidden">
                  <Image
                    src={feature.image}
                    alt={feature.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(min-width: 768px) 45vw, 92vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/10 to-transparent" />
                </div>
                <div className="flex flex-1 flex-col p-7">
                  <h3 className="font-display text-2xl font-medium text-cream">
                    {feature.name}
                  </h3>
                  <p className="mt-3 text-sm text-cream/70">
                    {feature.description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2} className="mt-14">
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-6">
            {EVENTS_GALLERY.map((src, i) => (
              <div
                key={src + i}
                className="relative aspect-square overflow-hidden rounded-sm"
              >
                <Image
                  src={src}
                  alt="Mafleurr Events décor styling"
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                  sizes="(min-width: 768px) 16vw, 45vw"
                />
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
