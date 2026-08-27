import { unsplash } from "@/lib/utils";

export const EVENTS_FEATURES = [
  {
    id: "flower-bar",
    name: "The Flower Bar",
    description:
      "A live styling station where guests choose from seasonal blooms and build their own take-home posy — a beautiful, interactive moment for weddings, showers and celebrations.",
    image: unsplash("1707589338174-dc1ddc18945a"),
  },
  {
    id: "sip-bar",
    name: "The Sip Bar",
    description:
      "A styled drinks station dressed in fresh and dried florals, designed to match your event's palette — from champagne receptions to relaxed garden gatherings.",
    image: unsplash("1604004213690-4cf7730e94de"),
  },
];

// PLACEHOLDER: Unsplash event/décor imagery standing in for real Mafleurr
// Events photography — swap before launch.
export const EVENTS_GALLERY = [
  unsplash("1519225421980-715cb0215aed"),
  unsplash("1502635385003-ee1e6a1a742d"),
  unsplash("1707333514156-d42751dca70d"),
  unsplash("1604004222017-0a7e06a772a9"),
  unsplash("1649615644622-6d83f48e69c5"),
  unsplash("1780593194924-35f0343e738b"),
];
