"use client";

import { useState } from "react";
import { Reveal } from "./Reveal";
import { InstagramIcon } from "./InstagramIcon";
import { useEnquiry } from "./EnquiryContext";
import { SITE } from "@/data/site";

const ENQUIRY_TYPES = [
  "Wedding Flowers",
  "Bridal Bouquet",
  "Birthday / Anniversary",
  "Sympathy Flowers",
  "Dried Flowers",
  "Fruit-Preserved Gift",
  "Mafleurr Events",
  "Quiz Result",
  "General Enquiry",
];

type FormState = {
  name: string;
  email: string;
  occasion: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormState, string>>;

function emptyForm(bouquetName: string | null): FormState {
  return {
    name: "",
    email: "",
    occasion: bouquetName ? "Quiz Result" : ENQUIRY_TYPES[8],
    message: bouquetName
      ? `I'd love to enquire about "${bouquetName}" from the flower quiz.`
      : "",
  };
}

function validate(values: FormState): FormErrors {
  const next: FormErrors = {};
  if (!values.name.trim()) next.name = "Please enter your name.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    next.email = "Please enter a valid email address.";
  }
  if (!values.message.trim()) next.message = "Please add a short message.";
  return next;
}

/**
 * Keyed on bouquetName by the parent so it remounts (and re-initialises its
 * default values) whenever a quiz result is sent through, instead of
 * syncing external state into local state via an effect.
 */
function ContactForm({ bouquetName }: { bouquetName: string | null }) {
  const [form, setForm] = useState<FormState>(() => emptyForm(bouquetName));
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const validation = validate(form);
    setErrors(validation);
    if (Object.keys(validation).length > 0) return;

    // MOCK SUBMIT: no backend wired up for this pitch site.
    console.log("Mafleurr enquiry submitted:", form);
    setSubmitted(true);
    setForm(emptyForm(null));
    setTimeout(() => setSubmitted(false), 5000);
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="mt-10 space-y-6">
      <div>
        <label htmlFor="name" className="tracking-label text-xs uppercase text-ink/60">
          Name
        </label>
        <input
          id="name"
          type="text"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          className="mt-2 w-full border-b border-ink/25 bg-transparent py-2 text-ink outline-none focus:border-gold"
        />
        {errors.name && (
          <p className="mt-1 text-xs text-red-700/80">{errors.name}</p>
        )}
      </div>

      <div>
        <label htmlFor="email" className="tracking-label text-xs uppercase text-ink/60">
          Email
        </label>
        <input
          id="email"
          type="email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          className="mt-2 w-full border-b border-ink/25 bg-transparent py-2 text-ink outline-none focus:border-gold"
        />
        {errors.email && (
          <p className="mt-1 text-xs text-red-700/80">{errors.email}</p>
        )}
      </div>

      <div>
        <label htmlFor="occasion" className="tracking-label text-xs uppercase text-ink/60">
          Occasion / Enquiry Type
        </label>
        <select
          id="occasion"
          value={form.occasion}
          onChange={(e) => setForm({ ...form, occasion: e.target.value })}
          className="mt-2 w-full border-b border-ink/25 bg-transparent py-2 text-ink outline-none focus:border-gold"
        >
          {ENQUIRY_TYPES.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="message" className="tracking-label text-xs uppercase text-ink/60">
          Message
        </label>
        <textarea
          id="message"
          rows={4}
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          className="mt-2 w-full resize-none border-b border-ink/25 bg-transparent py-2 text-ink outline-none focus:border-gold"
        />
        {errors.message && (
          <p className="mt-1 text-xs text-red-700/80">{errors.message}</p>
        )}
      </div>

      <button
        type="submit"
        className="tracking-label rounded-full bg-ink px-9 py-3 text-xs uppercase text-cream transition-colors hover:bg-gold hover:text-ink"
      >
        Send Enquiry
      </button>

      {submitted && (
        <p className="tracking-label text-xs uppercase text-gold-deep">
          Thank you — your enquiry has been received.
        </p>
      )}
    </form>
  );
}

export function Contact() {
  const { bouquetName } = useEnquiry();

  return (
    <section id="contact" className="bg-cream py-24 md:py-32">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-14 px-6 md:grid-cols-5 md:gap-16 md:px-10">
        <Reveal className="md:col-span-3">
          <span className="tracking-label text-xs uppercase text-gold-deep">
            Contact
          </span>
          <h2 className="mt-4 font-display text-3xl font-medium leading-tight text-ink sm:text-4xl md:text-5xl">
            Start Your Enquiry
          </h2>
          <p className="mt-5 max-w-md text-ink/75">
            Tell us a little about your occasion and we&apos;ll be in touch
            to talk through your bespoke arrangement.
          </p>

          <ContactForm key={bouquetName ?? "default"} bouquetName={bouquetName} />
        </Reveal>

        <Reveal delay={0.15} className="md:col-span-2">
          <div className="flex h-full flex-col justify-between rounded-sm border border-gold/25 bg-cream-dim p-8">
            <div>
              <h3 className="font-display text-xl font-medium text-ink">
                Prefer to reach us directly?
              </h3>
              <div className="mt-6 flex flex-col gap-4">
                <a
                  href={SITE.whatsapp}
                  target="_blank"
                  rel="noreferrer"
                  className="tracking-label flex items-center gap-3 text-xs uppercase text-ink/80 hover:text-gold-deep"
                >
                  <span className="flex h-9 w-9 items-center justify-center rounded-full border border-ink/20">
                    W
                  </span>
                  WhatsApp Enquiry
                </a>
                <a
                  href={SITE.instagram.main.url}
                  target="_blank"
                  rel="noreferrer"
                  className="tracking-label flex items-center gap-3 text-xs uppercase text-ink/80 hover:text-gold-deep"
                >
                  <span className="flex h-9 w-9 items-center justify-center rounded-full border border-ink/20">
                    <InstagramIcon className="h-4 w-4" />
                  </span>
                  DM {SITE.instagram.main.handle}
                </a>
                <a
                  href={SITE.instagram.events.url}
                  target="_blank"
                  rel="noreferrer"
                  className="tracking-label flex items-center gap-3 text-xs uppercase text-ink/80 hover:text-gold-deep"
                >
                  <span className="flex h-9 w-9 items-center justify-center rounded-full border border-ink/20">
                    <InstagramIcon className="h-4 w-4" />
                  </span>
                  DM {SITE.instagram.events.handle}
                </a>
              </div>
            </div>

            <p className="tracking-label mt-10 text-xs uppercase text-ink/50">
              Based in {SITE.location}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
