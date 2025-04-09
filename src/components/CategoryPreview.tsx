
import React from 'react';
import { Link } from 'react-router-dom';

interface Category {
  name: string;
  image: string;
  description: string;
  slug: string;
}

interface CategoryPreviewProps {
  categories: Category[];
}

const CategoryPreview: React.FC<CategoryPreviewProps> = ({ categories }) => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-playfair font-bold text-gold text-center mb-12">
          Explore Our Collection
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <Link 
              key={index} 
              to={`/shop?category=${category.slug}`}
              className="group"
            >
              <div className="glass-card rounded-lg overflow-hidden h-full transition-all duration-300 hover:shadow-lg hover:shadow-gold/10 hover:-translate-y-1">
                <div className="aspect-[4/3] overflow-hidden">
                  <img 
                    src={category.image} 
                    alt={category.name} 
                    className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-playfair text-xl font-semibold text-gold mb-2">
                    {category.name}
                  </h3>
                  <p className="text-cream/70 text-sm">
                    {category.description}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryPreview;
