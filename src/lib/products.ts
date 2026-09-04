import ghee from "@/assets/IMG_9503.jpg.asset.json";
import honey from "@/assets/IMG_9502.jpg.asset.json";
import black from "@/assets/IMG_9507.jpg.asset.json";
import yellow from "@/assets/yellow-mustard.jpg.asset.json";
import groupWide from "@/assets/group-wide.jpg.asset.json";
import groupTall from "@/assets/group-tall.jpg.asset.json";

export type Category = "Ghee" | "Oils" | "Honey";

export type Product = {
  slug: string;
  name: string;
  category: Category;
  image: string;
  gallery: string[];
  blurb: string;
  sizes: string[];
  pairing: string;
  icon: "cow" | "mustard" | "bee";
};

export const products: Product[] = [
  {
    slug: "a2-cow-ghee",
    name: "A2 Cow Ghee",
    category: "Ghee",
    image: ghee.url,
    gallery: [ghee.url],
    blurb:
      "Slow-churned using the traditional Bilona method from cultured A2 desi cow milk — a deep golden hue and nutty, roasted aroma no factory ghee can fake.",
    sizes: ["200ml", "500ml"],
    pairing: "Dal tadka, halwa, ghee rice",
    icon: "cow",
  },
  {
    slug: "black-mustard-oil",
    name: "Black Mustard Oil",
    category: "Oils",
    image: black.url,
    gallery: [black.url],
    blurb:
      "Cold-pressed the kachi-ghani way from black mustard seed — sharp, pungent, and unrefined.",
    sizes: ["500ml", "1L"],
    pairing: "Bengali fish curry, achaar, sarson ka saag",
    icon: "mustard",
  },
  {
    slug: "yellow-mustard-oil",
    name: "Yellow Mustard Oil",
    category: "Oils",
    image: yellow.url,
    gallery: [yellow.url],
    blurb:
      "A milder cousin to our Black Mustard Oil — cold-pressed for gentler everyday tadka and sautéing.",
    sizes: ["500ml", "1L"],
    pairing: "Everyday tadka, sautéed vegetables",
    icon: "mustard",
  },
  {
    slug: "pure-honey",
    name: "Pure Honey",
    category: "Honey",
    image: honey.url,
    gallery: [honey.url],
    blurb: "Extracted raw, straight from the hive, unheated and unfiltered.",
    sizes: ["250g", "500g"],
    pairing: "Turmeric-honey milk, curd bowls, herbal tea",
    icon: "bee",
  },
];

export const heroImage = groupWide.url;
export const groupImage = groupTall.url;
export const gheeImages = [ghee.url];
