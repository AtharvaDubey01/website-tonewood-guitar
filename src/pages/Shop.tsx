
import React from 'react';
import ProductList from '../components/ProductList';
import { products } from '../data/products';

const Shop = () => {
  return (
    <main className="py-12">
      <div className="container mx-auto px-4">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-playfair font-bold text-gold mb-4">Our Collection</h1>
          <p className="text-cream/80 max-w-2xl mx-auto">
            Browse our curated selection of premium guitars crafted from the finest tonewoods.
            Each instrument is selected for its exceptional sound quality and craftsmanship.
          </p>
        </header>

        <ProductList products={products} />
      </div>
    </main>
  );
};

export default Shop;
