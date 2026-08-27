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
};

// PLACEHOLDER: all images are Unsplash stock photography standing in for
// Mafleurr's own portfolio shots. Swap each `image` value for the client's
// real photography before launch — ids are named for easy identification.
export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    id: "bridal-01",
    category: "Bridal",
    title: "Ivory Trailing Bouquet",
    image: unsplash("1786085801598-1e43ba68eb5a"),
    aspect: "portrait",
  },
  {
    id: "bridal-02",
    category: "Bridal",
    title: "Blush Garden Bouquet",
    image: unsplash("1623672655496-1537b4d84eb4"),
    aspect: "square",
  },
  {
    id: "bridal-03",
    category: "Bridal",
    title: "Romance in White",
    image: unsplash("1614526299531-5b5af911f22b"),
    aspect: "landscape",
  },
  {
    id: "bridal-04",
    category: "Bridal",
    title: "Soft Focus Posy",
    image: unsplash("1623672655530-2fd989eb9860"),
    aspect: "portrait",
  },
  {
    id: "bridal-05",
    category: "Bridal",
    title: "Editorial Bridal Clutch",
    image: unsplash("1554275523-33ea1d9561ca"),
    aspect: "square",
  },
  {
    id: "bridal-06",
    category: "Bridal",
    title: "Timeless White Bouquet",
    image: unsplash("1612539088954-329d75033480"),
    aspect: "portrait",
  },
  {
    id: "dried-01",
    category: "Dried",
    title: "Dried Neutral Arrangement",
    image: unsplash("1622658641558-235f26dd270b"),
    aspect: "square",
  },
  {
    id: "dried-02",
    category: "Dried",
    title: "Textural Dried Bundle",
    image: unsplash("1615654673360-29898e4f857f"),
    aspect: "portrait",
  },
  {
    id: "dried-03",
    category: "Dried",
    title: "Everlasting Meadow Mix",
    image: unsplash("1619422305621-cd7f0763d5d0"),
    aspect: "landscape",
  },
  {
    id: "dried-04",
    category: "Dried",
    title: "Muted Tone Dried Posy",
    image: unsplash("1610790952713-f060539ef1b4"),
    aspect: "square",
  },
  {
    id: "dried-05",
    category: "Dried",
    title: "Sculptural Dried Stems",
    image: unsplash("1533801956226-12d07083ca61"),
    aspect: "portrait",
  },
  {
    id: "dried-06",
    category: "Dried",
    title: "Wheat & Bunny Tail Mix",
    image: unsplash("1675089728888-5a8a54a46a8d"),
    aspect: "square",
  },
  {
    id: "balloons-01",
    category: "Balloons",
    title: "Floral Balloon Installation",
    image: unsplash("1727081203667-4792c134061a"),
    aspect: "landscape",
  },
  {
    id: "balloons-02",
    category: "Balloons",
    title: "Garden Arch Styling",
    image: unsplash("1639986098217-17112e22f1ed"),
    aspect: "portrait",
  },
  {
    id: "balloons-03",
    category: "Balloons",
    title: "Botanical Balloon Backdrop",
    image: unsplash("1707589338174-dc1ddc18945a"),
    aspect: "square",
  },
  {
    id: "balloons-04",
    category: "Balloons",
    title: "Statement Entrance Arch",
    image: unsplash("1611430009613-3cd989684b41"),
    aspect: "landscape",
  },
  {
    id: "balloons-05",
    category: "Balloons",
    title: "Soft Palette Balloon Wall",
    image: unsplash("1695852306669-63729e4a141a"),
    aspect: "portrait",
  },
  {
    id: "balloons-06",
    category: "Balloons",
    title: "Celebration Floral Arch",
    image: unsplash("1560128411-79892dd93bf8"),
    aspect: "square",
  },
  {
    id: "groom-01",
    category: "Groom",
    title: "Classic Boutonniere",
    image: unsplash("1604531826248-f0eca8eeb896"),
    aspect: "square",
  },
  {
    id: "groom-02",
    category: "Groom",
    title: "Textured Groom Pin",
    image: unsplash("1588775827551-ec4fc340be0c"),
    aspect: "portrait",
  },
  {
    id: "groom-03",
    category: "Groom",
    title: "Rustic Buttonhole",
    image: unsplash("1710587384936-b6d796c0eb58"),
    aspect: "square",
  },
  {
    id: "groom-04",
    category: "Groom",
    title: "Modern Groom Detail",
    image: unsplash("1694394149994-afccfa65ec0d"),
    aspect: "landscape",
  },
  {
    id: "groom-05",
    category: "Groom",
    title: "Garden-Style Buttonhole",
    image: unsplash("1685392024684-3d84f0888ccc"),
    aspect: "portrait",
  },
  {
    id: "groom-06",
    category: "Groom",
    title: "Refined Lapel Flower",
    image: unsplash("1770217614457-f033cc1f5b5f"),
    aspect: "square",
  },
  {
    id: "accessories-01",
    category: "Accessories",
    title: "Bridal Flower Crown",
    image: unsplash("1441123200976-b582108ebc19"),
    aspect: "portrait",
  },
  {
    id: "accessories-02",
    category: "Accessories",
    title: "Woven Hair Vine",
    image: unsplash("1554997670-153304f30d25"),
    aspect: "square",
  },
  {
    id: "accessories-03",
    category: "Accessories",
    title: "Delicate Floral Crown",
    image: unsplash("1441123032219-e66cdbbd7ca1"),
    aspect: "landscape",
  },
  {
    id: "accessories-04",
    category: "Accessories",
    title: "Loose Bridal Hairpiece",
    image: unsplash("1615379780633-90570048e1de"),
    aspect: "portrait",
  },
  {
    id: "accessories-05",
    category: "Accessories",
    title: "Textural Hair Adornment",
    image: unsplash("1770935473935-f23d38538c00"),
    aspect: "square",
  },
  {
    id: "accessories-06",
    category: "Accessories",
    title: "Statement Floral Comb",
    image: unsplash("1776013113698-64c8493df5fc"),
    aspect: "portrait",
  },
  {
    id: "fruit-preserved-01",
    category: "Fruit-Preserved",
    title: "Preserved Bloom Box",
    image: unsplash("1548460464-2a68877c7a5f"),
    aspect: "square",
  },
  {
    id: "fruit-preserved-02",
    category: "Fruit-Preserved",
    title: "Everlasting Rose Box",
    image: unsplash("1581264692636-3cf6f29655c2"),
    aspect: "portrait",
  },
  {
    id: "fruit-preserved-03",
    category: "Fruit-Preserved",
    title: "Signature Keepsake Box",
    image: unsplash("1660885900184-fe13ca69392c"),
    aspect: "landscape",
  },
  {
    id: "fruit-preserved-04",
    category: "Fruit-Preserved",
    title: "Layered Preserved Florals",
    image: unsplash("1589217289787-879b47f6edab"),
    aspect: "square",
  },
  {
    id: "fruit-preserved-05",
    category: "Fruit-Preserved",
    title: "Fruit & Bloom Gift Box",
    image: unsplash("1653380399372-4cfa7cfcfab9"),
    aspect: "portrait",
  },
  {
    id: "fruit-preserved-06",
    category: "Fruit-Preserved",
    title: "Keepsake Bloom Dome",
    image: unsplash("1583912402100-533a90936c41"),
    aspect: "square",
  },
];
