
import React from 'react';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  return (
    <div className="relative h-[80vh] min-h-[500px] bg-wood-dark wood-texture overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-wood-dark/90 to-transparent z-10"></div>
      <div 
        className="absolute inset-0 bg-center bg-cover"
        style={{ backgroundImage: 'url("/images/hero-guitar.jpg")' }}
      ></div>
      
      <div className="container mx-auto px-4 h-full flex items-center relative z-20">
        <div className="max-w-2xl">
          <span className="inline-block px-3 py-1 mb-4 text-xs font-medium tracking-wider text-gold uppercase bg-wood-medium/70 rounded">
            Premium Collection
          </span>
          <h1 className="text-4xl md:text-6xl font-playfair font-bold mb-4 text-cream leading-tight">
            Exceptional Guitars <br /> Crafted from the <br /> 
            <span className="text-gold">Finest Tonewoods</span>
          </h1>
          <p className="text-lg text-cream/80 mb-8 max-w-xl">
            Discover handcrafted instruments with unparalleled sound quality and 
            stunning aesthetics, built for musicians who demand excellence.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link to="/shop" className="btn-primary">
              Browse Collection
            </Link>
            <Link to="/about" className="btn-outline">
              Our Craftsmanship
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
