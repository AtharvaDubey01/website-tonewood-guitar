
export interface Category {
  name: string;
  image: string;
  description: string;
  slug: string;
}

export const categories: Category[] = [
  {
    name: "Acoustic Guitars",
    image: "/images/acoustic-sunburst.jpg",
    description: "Handcrafted acoustic guitars with exceptional tonal qualities and superior craftsmanship.",
    slug: "acoustic"
  },
  {
    name: "Electric Guitars",
    image: "/images/les-paul-custom.jpg",
    description: "Premium electric guitars built for professional musicians and discerning collectors.",
    slug: "electric"
  },
  {
    name: "Classical Guitars",
    image: "/images/classical-guitar.jpg",
    description: "Traditional nylon-string guitars crafted with traditional methods for authentic tone.",
    slug: "classical"
  },
  {
    name: "Bass Guitars",
    image: "/images/jazz-bass.jpg",
    description: "Premium bass guitars with superior playability and rich, resonant tones.",
    slug: "bass"
  }
];
