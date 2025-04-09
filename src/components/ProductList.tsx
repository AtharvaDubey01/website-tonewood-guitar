
import React, { useState } from 'react';
import ProductCard from './ProductCard';
import { Product } from '../types/product';

interface ProductListProps {
  products: Product[];
  title?: string;
}

const ProductList: React.FC<ProductListProps> = ({ products, title }) => {
  const [category, setCategory] = useState<string>('all');

  const filteredProducts = category === 'all' 
    ? products 
    : products.filter(product => product.category.toLowerCase() === category);

  const categories = ['all', ...new Set(products.map(product => product.category.toLowerCase()))];

  return (
    <div className="container mx-auto px-4 py-8">
      {title && (
        <h2 className="text-3xl font-playfair font-bold text-gold mb-8">{title}</h2>
      )}

      <div className="flex flex-wrap justify-center gap-4 mb-8">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setCategory(cat)}
            className={`px-4 py-2 rounded-full text-sm capitalize transition-colors ${
              category === cat
                ? 'bg-gold text-wood-dark font-semibold'
                : 'bg-wood-medium text-cream/80 hover:text-cream'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {filteredProducts.length === 0 && (
        <p className="text-center text-cream/70 py-8">
          No products found in this category.
        </p>
      )}
    </div>
  );
};

export default ProductList;
