
import React from 'react';
import { Link } from 'react-router-dom';
import { getRelatedProducts } from '../data/products';
import ProductCard from './ProductCard';

interface RelatedProductsProps {
  productId: string;
}

const RelatedProducts: React.FC<RelatedProductsProps> = ({ productId }) => {
  const relatedProducts = getRelatedProducts(productId);
  
  if (relatedProducts.length === 0) {
    return null;
  }
  
  return (
    <div className="mt-16">
      <h3 className="text-2xl font-playfair font-bold text-gold mb-6">
        You May Also Like
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {relatedProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default RelatedProducts;
