import { unsplash } from "@/lib/utils";

export type Occasion =
  | "Wedding"
  | "Birthday"
  | "Anniversary"
  | "Sympathy"
  | "Just Because";

export type ColourPalette =
  | "Blush & Ivory"
  | "Deep Reds & Burgundy"
  | "Pastels"
  | "Bold & Vibrant"
  | "White & Green";

export type Style =
  | "Classic & Romantic"
  | "Wild & Natural"
  | "Modern & Structured"
  | "Dried & Textural";

export type Budget = "Under £50" | "£50 - £100" | "£100 - £200" | "£200+";

export type Scale = "Petite Posy" | "Statement Bouquet" | "Large Installation";

export type QuizAnswers = {
  occasion?: Occasion;
  colour?: ColourPalette;
  style?: Style;
  budget?: Budget;
  scale?: Scale;
};

export type QuizStep = {
  id: keyof QuizAnswers;
  question: string;
  helper?: string;
  optional?: boolean;
  options: {
    value: string;
    label: string;
    /** small colour swatches shown on the colour-palette step */
    swatches?: string[];
  }[];
};

export const QUIZ_STEPS: QuizStep[] = [
  {
    id: "occasion",
    question: "What's the occasion?",
    helper: "This helps us understand the mood we're creating for.",
    options: [
      { value: "Wedding", label: "Wedding" },
      { value: "Birthday", label: "Birthday" },
      { value: "Anniversary", label: "Anniversary" },
      { value: "Sympathy", label: "Sympathy" },
      { value: "Just Because", label: "Just Because" },
    ],
  },
  {
    id: "colour",
    question: "What colour palette speaks to you?",
    helper: "Trust your first instinct.",
    options: [
      {
        value: "Blush & Ivory",
        label: "Blush & Ivory",
        swatches: ["#F3DCD4", "#EFE7DA", "#D8B7A6"],
      },
      {
        value: "Deep Reds & Burgundy",
        label: "Deep Reds & Burgundy",
        swatches: ["#5C1A22", "#7A2530", "#2B0E12"],
      },
      {
        value: "Pastels",
        label: "Pastels",
        swatches: ["#E6D9E8", "#DCE7DA", "#F1E4C9"],
      },
      {
        value: "Bold & Vibrant",
        label: "Bold & Vibrant",
        swatches: ["#C63D3D", "#E08A1E", "#9B2F6B"],
      },
      {
        value: "White & Green",
        label: "White & Green",
        swatches: ["#FAF9F6", "#C7D0BE", "#5B6B4F"],
      },
    ],
  },
  {
    id: "style",
    question: "What style are you drawn to?",
    helper: "Think of the arrangements that catch your eye.",
    options: [
      { value: "Classic & Romantic", label: "Classic & Romantic" },
      { value: "Wild & Natural", label: "Wild & Natural" },
      { value: "Modern & Structured", label: "Modern & Structured" },
      { value: "Dried & Textural", label: "Dried & Textural" },
    ],
  },
  {
    id: "budget",
    question: "What's your budget range?",
    helper: "A guide only — every piece is quoted bespoke.",
    options: [
      { value: "Under £50", label: "Under £50" },
      { value: "£50 - £100", label: "£50 – £100" },
      { value: "£100 - £200", label: "£100 – £200" },
      { value: "£200+", label: "£200+" },
    ],
  },
  {
    id: "scale",
    question: "What scale feels right?",
    helper: "Optional — skip if you're not sure yet.",
    optional: true,
    options: [
      { value: "Petite Posy", label: "Petite Posy" },
      { value: "Statement Bouquet", label: "Statement Bouquet" },
      { value: "Large Installation", label: "Large Installation" },
    ],
  },
];

export type Bouquet = {
  id: string;
  name: string;
  description: string;
  image: string;
  colours: ColourPalette[];
  styles: Style[];
};

// PLACEHOLDER: mock bouquet catalogue for the quiz result screen. Names,
// descriptions and matching logic are illustrative only — replace with real
// signature arrangements when Mafleurr's own portfolio is finalised.
export const BOUQUETS: Bouquet[] = [
  {
    id: "blush-romance",
    name: "The Blush Romance",
    description:
      "Trailing garden roses and ranunculus in the softest blush and ivory tones, finished with delicate trailing greenery for an effortlessly romantic silhouette.",
    image: unsplash("1786085801598-1e43ba68eb5a"),
    colours: ["Blush & Ivory", "Pastels"],
    styles: ["Classic & Romantic"],
  },
  {
    id: "ivory-dream",
    name: "Ivory Dream",
    description:
      "A refined study in white and green — lisianthus, hellebore and eucalyptus composed with an editorial, hand-tied elegance.",
    image: unsplash("1612539088954-329d75033480"),
    colours: ["White & Green", "Blush & Ivory"],
    styles: ["Classic & Romantic", "Modern & Structured"],
  },
  {
    id: "wild-burgundy",
    name: "Wild Burgundy",
    description:
      "Deep burgundy dahlias and garden foliage, gathered with a loose, just-picked hand for a moody, romantic statement.",
    image: unsplash("1623672655496-1537b4d84eb4"),
    colours: ["Deep Reds & Burgundy"],
    styles: ["Wild & Natural", "Classic & Romantic"],
  },
  {
    id: "structured-noir",
    name: "Structured Noir",
    description:
      "Architectural stems in deep burgundy and near-black tones, composed with sculptural precision for a bold, modern statement.",
    image: unsplash("1614526299531-5b5af911f22b"),
    colours: ["Deep Reds & Burgundy", "Bold & Vibrant"],
    styles: ["Modern & Structured"],
  },
  {
    id: "pastel-whisper",
    name: "Pastel Whisper",
    description:
      "The lightest lilac, blush and sage tones layered together for a soft, painterly bouquet that feels quietly luxurious.",
    image: unsplash("1623672655530-2fd989eb9860"),
    colours: ["Pastels", "Blush & Ivory"],
    styles: ["Classic & Romantic", "Wild & Natural"],
  },
  {
    id: "vivid-bloom",
    name: "Vivid Bloom",
    description:
      "Fearless, sun-drenched colour — gerbera, ranunculus and celosia gathered with a wild, expressive hand.",
    image: unsplash("1487528699198-88d79d72479f"),
    colours: ["Bold & Vibrant"],
    styles: ["Wild & Natural", "Modern & Structured"],
  },
  {
    id: "dried-meadow",
    name: "The Dried Meadow",
    description:
      "An everlasting mix of dried pampas, bunny tail and preserved foliage in warm neutral tones — a keepsake that lasts for years.",
    image: unsplash("1622658641558-235f26dd270b"),
    colours: ["White & Green", "Blush & Ivory", "Pastels"],
    styles: ["Dried & Textural"],
  },
  {
    id: "textural-earth",
    name: "Textural Earth",
    description:
      "Sculptural dried stems and rich burgundy grasses layered for depth and texture — a striking, long-lasting statement piece.",
    image: unsplash("1533801956226-12d07083ca61"),
    colours: ["Deep Reds & Burgundy", "Bold & Vibrant"],
    styles: ["Dried & Textural", "Modern & Structured"],
  },
];

/**
 * Deterministic mock matching logic: score every bouquet on how many of its
 * tagged colours/styles overlap with the quiz answers, then return the two
 * highest scoring (falling back to the first two bouquets if nothing scores).
 */
export function matchBouquets(answers: QuizAnswers): Bouquet[] {
  const scored = BOUQUETS.map((bouquet, index) => {
    let score = 0;
    if (answers.colour && bouquet.colours.includes(answers.colour)) score += 2;
    if (answers.style && bouquet.styles.includes(answers.style)) score += 2;
    return { bouquet, score, index };
  });

  scored.sort((a, b) => b.score - a.score || a.index - b.index);

  const top = scored.slice(0, 2).map((s) => s.bouquet);
  return top.length === 2 ? top : BOUQUETS.slice(0, 2);
}
