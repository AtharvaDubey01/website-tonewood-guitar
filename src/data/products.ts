
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
    ],
    stock: 5,
    isNew: false,
    isFeatured: true,
    ratings: {
      average: 4.8,
      count: 24
    },
    relatedProducts: ["4", "6"]
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
    ],
    stock: 2,
    isNew: true,
    isFeatured: true,
    ratings: {
      average: 5.0,
      count: 18
    },
    relatedProducts: ["3"]
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
    ],
    stock: 8,
    isNew: false,
    isFeatured: true,
    ratings: {
      average: 4.7,
      count: 32
    },
    relatedProducts: ["2"]
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
    ],
    stock: 3,
    isNew: false,
    isFeatured: false,
    ratings: {
      average: 4.9,
      count: 15
    },
    relatedProducts: ["1"]
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
    ],
    stock: 4,
    isNew: true,
    isFeatured: false,
    ratings: {
      average: 4.6,
      count: 12
    },
    relatedProducts: []
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
    ],
    stock: 10,
    isNew: true,
    isFeatured: true,
    ratings: {
      average: 4.5,
      count: 28
    },
    relatedProducts: ["1"]
  },
  {
    id: "7",
    name: "Custom Shop Telecaster",
    brand: "Fender",
    category: "Electric",
    price: 3499,
    description: "This Custom Shop Telecaster combines vintage aesthetics with modern playability. Hand-crafted by Fender's master builders, it features premium tonewoods and hand-wound pickups for that authentic Telecaster twang with enhanced dynamics and clarity.",
    features: [
      "Lightweight Ash Body",
      "Maple Neck with Rosewood Fingerboard",
      "Hand-Wound Custom Shop Pickups",
      "Nitrocellulose Lacquer Finish",
      "Vintage-Style Hardware"
    ],
    specifications: {
      "Body Wood": "Ash",
      "Neck Wood": "Maple",
      "Fingerboard": "Rosewood",
      "Pickups": "Custom Shop Hand-Wound",
      "Bridge": "Vintage-Style with Brass Saddles",
      "Hardware": "Nickel",
      "Scale Length": "25.5\""
    },
    imageUrl: "/images/stratocaster.jpg", // Using placeholder image
    additionalImages: [
      "/images/stratocaster-back.jpg", // Using placeholder image
      "/images/stratocaster-detail.jpg" // Using placeholder image
    ],
    stock: 1,
    isNew: false,
    isFeatured: false,
    ratings: {
      average: 4.9,
      count: 7
    },
    relatedProducts: ["3"]
  },
  {
    id: "8",
    name: "Grand Auditorium Acoustic-Electric",
    brand: "Taylor",
    category: "Acoustic",
    price: 2799,
    description: "This Grand Auditorium body shape offers the perfect balance between dreadnought power and concert comfort. Featuring Taylor's Expression System 2 electronics, it delivers studio-quality amplified tone for stage performances while maintaining the rich, natural acoustic sound the brand is known for.",
    features: [
      "Sitka Spruce Top",
      "Hawaiian Koa Back and Sides",
      "Mahogany Neck with Ebony Fingerboard",
      "Expression System 2 Electronics",
      "Venetian Cutaway"
    ],
    specifications: {
      "Body Shape": "Grand Auditorium",
      "Top Wood": "Sitka Spruce",
      "Back & Sides": "Hawaiian Koa",
      "Neck Wood": "Tropical Mahogany",
      "Fingerboard": "Ebony",
      "Scale Length": "25.5\"",
      "Finish": "Gloss"
    },
    imageUrl: "/images/acoustic-sunburst.jpg", // Using placeholder image
    additionalImages: [
      "/images/acoustic-sunburst-back.jpg", // Using placeholder image
      "/images/acoustic-sunburst-detail.jpg" // Using placeholder image
    ],
    stock: 3,
    isNew: true,
    isFeatured: true,
    ratings: {
      average: 4.8,
      count: 16
    },
    relatedProducts: ["1", "6"]
  }
];

// Helper function to get products by category
export const getProductsByCategory = (category: string) => {
  return products.filter(product => 
    product.category.toLowerCase() === category.toLowerCase()
  );
};

// Helper function to get featured products
export const getFeaturedProducts = () => {
  return products.filter(product => product.isFeatured);
};

// Helper function to get new products
export const getNewProducts = () => {
  return products.filter(product => product.isNew);
};

// Helper function to get related products
export const getRelatedProducts = (productId: string) => {
  const product = products.find(p => p.id === productId);
  if (!product || !product.relatedProducts) return [];
  
  return products.filter(p => product.relatedProducts?.includes(p.id));
};

// Helper function to search products
export const searchProducts = (query: string) => {
  const searchTerm = query.toLowerCase();
  return products.filter(product => 
    product.name.toLowerCase().includes(searchTerm) ||
    product.brand.toLowerCase().includes(searchTerm) ||
    product.description.toLowerCase().includes(searchTerm) ||
    product.category.toLowerCase().includes(searchTerm)
  );
};
