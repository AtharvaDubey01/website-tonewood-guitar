
export interface Product {
  id: string;
  name: string;
  brand: string;
  category: string;
  price: number;
  description: string;
  features: string[];
  specifications: {
    [key: string]: string;
  };
  imageUrl: string;
  additionalImages?: string[];
  stock: number;
  isNew?: boolean;
  isFeatured?: boolean;
  ratings?: {
    average: number;
    count: number;
  };
  relatedProducts?: string[];
}
