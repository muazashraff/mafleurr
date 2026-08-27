export type Testimonial = {
  id: string;
  quote: string;
  name: string;
  occasion: string;
  rating: number;
};

// PLACEHOLDER: generic, polished testimonial copy for pitch purposes only —
// replace with real client quotes (and permission) before launch.
export const TESTIMONIALS: Testimonial[] = [
  {
    id: "t1",
    quote:
      "Absolutely stunning arrangements — every single detail was considered, right down to the ribbon. Our wedding flowers were beyond what we imagined.",
    name: "Sarah",
    occasion: "Bridal Bouquet",
    rating: 5,
  },
  {
    id: "t2",
    quote:
      "From the first consultation to delivery, the whole experience felt effortless and genuinely bespoke. Nothing was off-the-shelf.",
    name: "Amina",
    occasion: "Anniversary Arrangement",
    rating: 5,
  },
  {
    id: "t3",
    quote:
      "The dried arrangement they created has sat beautifully in our hallway for months and still looks incredible. True craftsmanship.",
    name: "James",
    occasion: "Dried Flower Piece",
    rating: 5,
  },
  {
    id: "t4",
    quote:
      "They understood the mood we wanted instantly. Guests are still talking about the flower bar at our engagement party.",
    name: "Priya",
    occasion: "Mafleurr Events",
    rating: 5,
  },
  {
    id: "t5",
    quote:
      "Thoughtful, elegant, and delivered with so much care during a difficult time. It meant more than they could know.",
    name: "Helen",
    occasion: "Sympathy Flowers",
    rating: 5,
  },
  {
    id: "t6",
    quote:
      "Every arrangement genuinely feels one-of-a-kind. We've never had the same bouquet twice and it's always exactly right.",
    name: "Olivia",
    occasion: "Birthday Bouquet",
    rating: 5,
  },
];
