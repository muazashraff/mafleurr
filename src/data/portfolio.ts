import { unsplash } from "@/lib/utils";

export const PORTFOLIO_CATEGORIES = [
  "All",
  "Bridal",
  "Dried",
  "Balloons",
  "Groom",
  "Accessories",
  "Fruit-Preserved",
] as const;

export type PortfolioCategory = (typeof PORTFOLIO_CATEGORIES)[number];

export type PortfolioItem = {
  id: string;
  category: Exclude<PortfolioCategory, "All">;
  title: string;
  image: string;
  /** portrait | square | landscape — used to vary the masonry rhythm */
  aspect: "portrait" | "square" | "landscape";
  /** true only for the Unsplash stand-ins still awaiting real photography */
  isPlaceholder?: boolean;
};

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  // Real Mafleurr photography
  {
    id: "bridal-01",
    category: "Bridal",
    title: "Blush Garden Bouquet",
    image: "/bridal-blush-garden.jpeg",
    aspect: "square",
  },
  {
    id: "bridal-02",
    category: "Bridal",
    title: "Wild Burgundy Bouquet",
    image: "/bridal-wild-burgundy.jpeg",
    aspect: "square",
  },
  {
    id: "dried-01",
    category: "Dried",
    title: "Noir & Ivory Dried Arrangement",
    image: "/dried-noir-ivory.jpeg",
    aspect: "square",
  },
  {
    id: "dried-02",
    category: "Dried",
    title: "Ivory & Gold Dried Arrangement",
    image: "/dried-ivory-gold.jpeg",
    aspect: "portrait",
  },
  {
    id: "dried-03",
    category: "Dried",
    title: "Textural Burgundy Dried Arrangement",
    image: "/dried-textural-burgundy.jpeg",
    aspect: "square",
  },
  {
    id: "dried-04",
    category: "Dried",
    title: "Dried Meadow Arrangement",
    image: "/dried-meadow-ivory.jpeg",
    aspect: "square",
  },
  {
    id: "balloons-01",
    category: "Balloons",
    title: "Personalised New Baby Balloon Box",
    image: "/balloon-new-baby.jpeg",
    aspect: "portrait",
  },
  {
    id: "balloons-02",
    category: "Balloons",
    title: "Personalised Birthday Balloon Box",
    image: "/balloon-birthday.jpeg",
    aspect: "portrait",
  },
  {
    id: "balloons-03",
    category: "Balloons",
    title: "New Home Balloon Box",
    image: "/balloon-new-home.jpeg",
    aspect: "portrait",
  },
  {
    id: "fruit-preserved-01",
    category: "Fruit-Preserved",
    title: "Preserved Rose Box Duo",
    image: "/preserved-rose-box-duo.jpeg",
    aspect: "square",
  },
  {
    id: "fruit-preserved-02",
    category: "Fruit-Preserved",
    title: "Preserved Rose Box Gift",
    image: "/preserved-rose-box-gift.jpeg",
    aspect: "square",
  },

  // PLACEHOLDER: no client photography supplied yet for Groom or Accessories —
  // swap these Unsplash stand-ins for real Mafleurr photos when available.
  {
    id: "groom-01",
    category: "Groom",
    title: "Classic Boutonniere",
    image: unsplash("1604531826248-f0eca8eeb896"),
    aspect: "square",
    isPlaceholder: true,
  },
  {
    id: "groom-02",
    category: "Groom",
    title: "Textured Groom Pin",
    image: unsplash("1588775827551-ec4fc340be0c"),
    aspect: "portrait",
    isPlaceholder: true,
  },
  {
    id: "groom-03",
    category: "Groom",
    title: "Rustic Buttonhole",
    image: unsplash("1710587384936-b6d796c0eb58"),
    aspect: "square",
    isPlaceholder: true,
  },
  {
    id: "accessories-01",
    category: "Accessories",
    title: "Bridal Flower Crown",
    image: unsplash("1441123200976-b582108ebc19"),
    aspect: "portrait",
    isPlaceholder: true,
  },
  {
    id: "accessories-02",
    category: "Accessories",
    title: "Woven Hair Vine",
    image: unsplash("1554997670-153304f30d25"),
    aspect: "square",
    isPlaceholder: true,
  },
  {
    id: "accessories-03",
    category: "Accessories",
    title: "Delicate Floral Crown",
    image: unsplash("1441123032219-e66cdbbd7ca1"),
    aspect: "landscape",
    isPlaceholder: true,
  },
];
