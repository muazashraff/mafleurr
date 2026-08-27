"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { Reveal } from "./Reveal";
import { useEnquiry } from "./EnquiryContext";
import { QUIZ_STEPS, matchBouquets, type QuizAnswers } from "@/data/quiz";
import { cn } from "@/lib/utils";

type Phase = "intro" | "question" | "result";

export function Quiz() {
  const [phase, setPhase] = useState<Phase>("intro");
  const [stepIndex, setStepIndex] = useState(0);
  const [answers, setAnswers] = useState<QuizAnswers>({});
  const { setBouquetName } = useEnquiry();

  const step = QUIZ_STEPS[stepIndex];
  const results = useMemo(() => matchBouquets(answers), [answers]);

  function selectOption(value: string) {
    const updated: QuizAnswers = { ...answers, [step.id]: value as never };
    setAnswers(updated);

    if (stepIndex === QUIZ_STEPS.length - 1) {
      setPhase("result");
    } else {
      setStepIndex((i) => i + 1);
    }
  }

  function skipStep() {
    if (stepIndex === QUIZ_STEPS.length - 1) {
      setPhase("result");
    } else {
      setStepIndex((i) => i + 1);
    }
  }

  function goBack() {
    setStepIndex((i) => Math.max(0, i - 1));
  }

  function restart() {
    setAnswers({});
    setStepIndex(0);
    setPhase("intro");
  }

  return (
    <section id="quiz" className="bg-cream-dim py-24 md:py-32">
      <div className="mx-auto max-w-4xl px-6 md:px-10">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="tracking-label text-xs uppercase text-gold-deep">
            Find Your Perfect Bouquet
          </span>
          <h2 className="mt-4 font-display text-3xl font-medium leading-tight text-ink sm:text-4xl md:text-5xl">
            The Mafleurr Flower Quiz
          </h2>
        </Reveal>

        <div className="mt-12">
          <AnimatePresence mode="wait">
            {phase === "intro" && (
              <motion.div
                key="intro"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="flex flex-col items-center gap-6 rounded-sm border border-gold/30 bg-cream px-8 py-14 text-center shadow-[0_20px_60px_-30px_rgba(10,10,10,0.35)]"
              >
                <span className="font-accent text-4xl italic text-gold-deep">
                  Not sure what you&apos;re looking for?
                </span>
                <p className="max-w-md text-ink/75">
                  Take our 60-second quiz and we&apos;ll match you with two
                  bespoke bouquet directions based on your occasion, palette
                  and style.
                </p>
                <button
                  type="button"
                  onClick={() => setPhase("question")}
                  className="tracking-label mt-2 rounded-full bg-ink px-9 py-3 text-xs uppercase text-cream transition-colors hover:bg-gold hover:text-ink"
                >
                  Start the Quiz
                </button>
              </motion.div>
            )}

            {phase === "question" && (
              <motion.div
                key={`step-${stepIndex}`}
                initial={{ opacity: 0, x: 24 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -24 }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                className="rounded-sm border border-ink/10 bg-cream p-8 shadow-[0_20px_60px_-30px_rgba(10,10,10,0.25)] md:p-12"
              >
                <div className="mb-8">
                  <div className="flex items-center justify-between text-xs text-ink/50">
                    <span className="tracking-label uppercase">
                      Question {stepIndex + 1} of {QUIZ_STEPS.length}
                    </span>
                    {step.optional && (
                      <button
                        type="button"
                        onClick={skipStep}
                        className="tracking-label uppercase text-gold-deep hover:text-ink"
                      >
                        Skip
                      </button>
                    )}
                  </div>
                  <div className="mt-3 h-px w-full bg-ink/10">
                    <motion.div
                      className="h-px bg-gold"
                      initial={false}
                      animate={{
                        width: `${((stepIndex + 1) / QUIZ_STEPS.length) * 100}%`,
                      }}
                      transition={{ duration: 0.4, ease: "easeInOut" }}
                    />
                  </div>
                </div>

                <h3 className="font-display text-2xl font-medium text-ink sm:text-3xl">
                  {step.question}
                </h3>
                {step.helper && (
                  <p className="mt-2 text-sm text-ink/60">{step.helper}</p>
                )}

                <div
                  className={cn(
                    "mt-8 grid gap-3",
                    step.options.some((o) => o.swatches)
                      ? "sm:grid-cols-2"
                      : "sm:grid-cols-2",
                  )}
                >
                  {step.options.map((option) => (
                    <button
                      key={option.value}
                      type="button"
                      onClick={() => selectOption(option.value)}
                      className="group flex items-center justify-between gap-4 rounded-sm border border-ink/15 px-5 py-4 text-left transition-colors hover:border-gold hover:bg-gold/5"
                    >
                      <span className="text-ink/85 group-hover:text-ink">
                        {option.label}
                      </span>
                      {option.swatches && (
                        <span className="flex shrink-0 -space-x-2">
                          {option.swatches.map((swatch, i) => (
                            <span
                              key={i}
                              className="h-6 w-6 rounded-full border-2 border-cream"
                              style={{ backgroundColor: swatch }}
                            />
                          ))}
                        </span>
                      )}
                    </button>
                  ))}
                </div>

                {stepIndex > 0 && (
                  <button
                    type="button"
                    onClick={goBack}
                    className="tracking-label mt-8 text-xs uppercase text-ink/50 hover:text-gold-deep"
                  >
                    &larr; Back
                  </button>
                )}
              </motion.div>
            )}

            {phase === "result" && (
              <motion.div
                key="result"
                initial={{ opacity: 0, scale: 0.94 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.94 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="text-center">
                  <span className="tracking-label text-xs uppercase text-gold-deep">
                    Your Matches
                  </span>
                  <h3 className="mt-3 font-display text-2xl font-medium text-ink sm:text-3xl">
                    Two bouquet directions, made for you
                  </h3>
                </div>

                <div className="mt-10 grid gap-8 sm:grid-cols-2">
                  {results.map((bouquet, i) => (
                    <motion.div
                      key={bouquet.id}
                      initial={{ opacity: 0, y: 24, scale: 0.96 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      transition={{
                        duration: 0.6,
                        delay: 0.15 + i * 0.15,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      className="flex flex-col overflow-hidden rounded-sm border border-ink/10 bg-cream shadow-[0_20px_60px_-30px_rgba(10,10,10,0.3)]"
                    >
                      {/* PLACEHOLDER: swap for client photo — {bouquet.name} */}
                      <div className="relative aspect-[4/3] w-full">
                        <Image
                          src={bouquet.image}
                          alt={bouquet.name}
                          fill
                          className="object-cover"
                          sizes="(min-width: 640px) 45vw, 90vw"
                        />
                      </div>
                      <div className="flex flex-1 flex-col p-6">
                        <h4 className="font-display text-xl font-medium text-ink">
                          {bouquet.name}
                        </h4>
                        <p className="mt-3 flex-1 text-sm text-ink/75">
                          {bouquet.description}
                        </p>
                        <a
                          href="#contact"
                          onClick={() => setBouquetName(bouquet.name)}
                          className="tracking-label mt-6 inline-block rounded-full border border-gold px-6 py-2.5 text-center text-[11px] uppercase text-gold-deep transition-colors hover:bg-gold hover:text-ink"
                        >
                          Enquire About This Bouquet
                        </a>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-10 text-center">
                  <button
                    type="button"
                    onClick={restart}
                    className="tracking-label text-xs uppercase text-ink/50 hover:text-gold-deep"
                  >
                    Retake the Quiz
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
