
import { Product } from '../types/product';

export const products: Product[] = [
  {
    id: "1",
    name: "Vintage Sunburst Dreadnought",
    brand: "Martin",
    category: "Acoustic",
    price: 2499,
    description: "A beautifully crafted dreadnought guitar featuring premium Sitka spruce top and East Indian rosewood back and sides. The vintage sunburst finish gives it a classic look, while the modern construction ensures excellent playability and remarkable tone projection.",
    features: [
      "Solid Sitka Spruce Top",
      "East Indian Rosewood Back and Sides",
      "Mahogany Neck with Ebony Fingerboard",
      "Bone Nut and Saddle",
      "Hand-rubbed Sunburst Finish"
    ],
    specifications: {
      "Body Shape": "Dreadnought",
      "Top Wood": "Solid Sitka Spruce",
      "Back & Sides": "East Indian Rosewood",
      "Neck Wood": "Mahogany",
      "Fingerboard": "Ebony",
      "Scale Length": "25.4\"",
      "Finish": "Gloss Nitrocellulose Sunburst"
    },
    imageUrl: "/images/acoustic-sunburst.jpg",
    additionalImages: [
      "/images/acoustic-sunburst-back.jpg",
      "/images/acoustic-sunburst-detail.jpg"
    ]
  },
  {
    id: "2",
    name: "Les Paul Custom Ebony",
    brand: "Gibson",
    category: "Electric",
    price: 4999,
    description: "The Gibson Les Paul Custom in Ebony finish is the pinnacle of luxury and performance. With its multi-ply binding, ebony finish, and gold hardware, it exudes elegance. Powered by high-output humbuckers, it delivers the thick, rich tone that made Les Pauls legendary.",
    features: [
      "Mahogany Body with Maple Top",
      "Mahogany Neck with Ebony Fretboard",
      "Custom Humbucking Pickups",
      "Gold Hardware",
      "Multi-ply Body and Headstock Binding"
    ],
    specifications: {
      "Body Wood": "Mahogany with Carved Maple Top",
      "Neck Wood": "Mahogany",
      "Fingerboard": "Ebony",
      "Pickups": "Custom Humbuckers",
      "Bridge": "ABR-1 Tune-O-Matic with Stopbar Tailpiece",
      "Hardware": "Gold",
      "Scale Length": "24.75\""
    },
    imageUrl: "/images/les-paul-custom.jpg",
    additionalImages: [
      "/images/les-paul-custom-back.jpg",
      "/images/les-paul-custom-detail.jpg"
    ]
  },
  {
    id: "3",
    name: "Professional Stratocaster II",
    brand: "Fender",
    category: "Electric",
    price: 1799,
    description: "The Fender Professional Stratocaster II combines timeless design with modern features. It features V-Mod II pickups for versatile tones, a comfortable Deep C neck profile, and premium finishes. Perfect for professional players who want Fender's iconic sound with enhanced playability.",
    features: [
      "Alder Body",
      "Maple Neck with Rosewood or Maple Fingerboard",
      "V-Mod II Single-Coil Pickups",
      "2-Point Tremolo Bridge with Cold-Rolled Steel Block",
      "Bone Nut"
    ],
    specifications: {
      "Body Wood": "Alder",
      "Neck Wood": "Maple",
      "Fingerboard": "Rosewood",
      "Pickups": "V-Mod II Single-Coil Strat",
      "Bridge": "2-Point Synchronized Tremolo",
      "Hardware": "Nickel/Chrome",
      "Scale Length": "25.5\""
    },
    imageUrl: "/images/stratocaster.jpg",
    additionalImages: [
      "/images/stratocaster-back.jpg",
      "/images/stratocaster-detail.jpg"
    ]
  },
  {
    id: "4",
    name: "Hauser Classical",
    brand: "Ramirez",
    category: "Classical",
    price: 3699,
    description: "Inspired by the legendary luthier Hermann Hauser, this classical guitar features a solid cedar top with Indian rosewood back and sides. It delivers the warm, rich tone and excellent projection that classical guitarists demand. The traditional hand-crafted construction ensures authentic sound and response.",
    features: [
      "Solid Cedar Top",
      "Indian Rosewood Back and Sides",
      "Mahogany Neck with Ebony Fingerboard",
      "Traditional Hand-tied Bridge",
      "French Polish Finish"
    ],
    specifications: {
      "Body Shape": "Classical",
      "Top Wood": "Solid Cedar",
      "Back & Sides": "Indian Rosewood",
      "Neck Wood": "Mahogany",
      "Fingerboard": "Ebony",
      "Scale Length": "650mm",
      "Finish": "French Polish"
    },
    imageUrl: "/images/classical-guitar.jpg",
    additionalImages: [
      "/images/classical-guitar-back.jpg",
      "/images/classical-guitar-detail.jpg"
    ]
  },
  {
    id: "5",
    name: "Jazz Bass V",
    brand: "Fender",
    category: "Bass",
    price: 2199,
    description: "The Fender Jazz Bass V delivers the classic Jazz Bass sound with an extended range. The slim, fast neck provides comfortable playability for even the most demanding bassists. With its versatile tone and impeccable construction, it's the perfect 5-string bass for professional players.",
    features: [
      "Alder Body",
      "5-String Configuration",
      "Maple Neck with Rosewood Fingerboard",
      "Dual Jazz Bass Single-Coil Pickups",
      "High-Mass Bridge with Brass Saddles"
    ],
    specifications: {
      "Body Wood": "Alder",
      "Neck Wood": "Maple",
      "Fingerboard": "Rosewood",
      "Pickups": "V-Mod Jazz Bass Single-Coil",
      "Bridge": "High-Mass Vintage-Style",
      "Hardware": "Nickel/Chrome",
      "Scale Length": "34\""
    },
    imageUrl: "/images/jazz-bass.jpg",
    additionalImages: [
      "/images/jazz-bass-back.jpg",
      "/images/jazz-bass-detail.jpg"
    ]
  },
  {
    id: "6",
    name: "Mini Acoustic Travel Guitar",
    brand: "Taylor",
    category: "Acoustic",
    price: 899,
    description: "This compact acoustic guitar delivers surprising volume and full sound in a travel-friendly size. Perfect for musicians on the go, it features solid wood construction and comfortable playability. Its built-in electronics make it stage-ready despite its small stature.",
    features: [
      "Solid Sitka Spruce Top",
      "Layered Sapele Back and Sides",
      "Ebony Fingerboard",
      "Built-in Electronics with Preamp",
      "Includes Deluxe Gig Bag"
    ],
    specifications: {
      "Body Shape": "Mini Dreadnought",
      "Top Wood": "Solid Sitka Spruce",
      "Back & Sides": "Layered Sapele",
      "Neck Wood": "Mahogany",
      "Fingerboard": "Ebony",
      "Scale Length": "22.75\"",
      "Finish": "Varnish"
    },
    imageUrl: "/images/travel-guitar.jpg",
    additionalImages: [
      "/images/travel-guitar-back.jpg",
      "/images/travel-guitar-detail.jpg"
    ]
  }
];
