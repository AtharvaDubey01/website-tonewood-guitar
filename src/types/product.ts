
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
}
