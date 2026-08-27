import Image from "next/image";
import { Reveal } from "./Reveal";
import { unsplash } from "@/lib/utils";

export function About() {
  return (
    <section id="about" className="bg-cream py-24 md:py-32">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-14 px-6 md:grid-cols-2 md:gap-20 md:px-10">
        <Reveal>
          {/* PLACEHOLDER: swap for client photo — Mafleurr at work / studio */}
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-sm">
            <Image
              src={unsplash("1559211033-2aa7f2fbb31a", 1000)}
              alt="Florist hand-tying a bespoke arrangement"
              fill
              className="object-cover"
              sizes="(min-width: 768px) 45vw, 90vw"
            />
            <div className="pointer-events-none absolute inset-0 border border-gold/30" />
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <span className="tracking-label text-xs uppercase text-gold-deep">
            Our Story
          </span>
          <h2 className="mt-4 font-display text-3xl font-medium leading-tight text-ink sm:text-4xl md:text-5xl">
            Every arrangement, entirely one-of-a-kind
          </h2>
          <p className="mt-6 text-ink/80">
            Mafleurr is a bespoke luxury florist working from our studio in
            Bolton, Greater Manchester. We don&apos;t work from a fixed
            catalogue — every bouquet, installation and gift box is designed
            around you, your palette and your occasion, so no two Mafleurr
            arrangements are ever quite the same.
          </p>
          <p className="mt-4 text-ink/80">
            Our craft spans fresh, dried and fruit-preserved florals — from
            fleeting, just-picked bridal bouquets to everlasting dried
            keepsakes and jewel-toned preserved flower boxes designed to be
            treasured for years.
          </p>
          <p className="mt-8 font-accent text-2xl italic text-gold-deep">
            &ldquo;Flowers should feel like they were made for one person
            only — because they were.&rdquo;
          </p>
        </Reveal>
      </div>
    </section>
  );
}
