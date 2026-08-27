import Image from "next/image";
import { cn } from "@/lib/utils";

type LogoProps = {
  variant?: "light" | "dark";
  className?: string;
  /**
   * PLACEHOLDER LOGO MARK: Mafleurr's real logo is a loose cursive script
   * wordmark. Until the client's logo file is supplied, we render a styled
   * text stand-in below. To swap in the real mark, pass an `imageSrc`
   * (e.g. "/logo.svg") and it will render in place of the text placeholder —
   * no other changes needed at call sites.
   */
  imageSrc?: string;
};

export function Logo({ variant = "dark", className, imageSrc }: LogoProps) {
  if (imageSrc) {
    return (
      <Image
        src={imageSrc}
        alt="Mafleurr"
        width={160}
        height={48}
        className={cn("h-10 w-auto", className)}
        priority
      />
    );
  }

  return (
    <span
      className={cn(
        "font-accent italic text-3xl md:text-4xl leading-none tracking-wide select-none",
        variant === "light" ? "text-cream" : "text-ink",
        className,
      )}
    >
      Mafleurr
    </span>
  );
}
