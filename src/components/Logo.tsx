import Image from "next/image";
import { cn } from "@/lib/utils";

type LogoProps = {
  variant?: "light" | "dark";
  className?: string;
  /** Override the default logo mark for this variant (e.g. a different file). */
  imageSrc?: string;
};

// Mafleurr's cursive wordmark, extracted from the client's Instagram avatar
// and cleaned up into a transparent PNG. `light` (white ink) is used on the
// site's dark sections (nav, hero, footer); `dark` (near-black ink) is kept
// for any future light-background placement.
const LOGO_SRC: Record<"light" | "dark", string> = {
  light: "/logo-white.png",
  dark: "/logo-black.png",
};

export function Logo({ variant = "dark", className, imageSrc }: LogoProps) {
  return (
    <Image
      src={imageSrc ?? LOGO_SRC[variant]}
      alt="Mafleurr"
      width={768}
      height={300}
      className={cn("h-9 w-auto md:h-11", className)}
      priority
    />
  );
}
