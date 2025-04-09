
import React from 'react';
import Hero from '../components/Hero';
import FeaturedProducts from '../components/FeaturedProducts';
import { products } from '../data/products';

const Index = () => {
  return (
    <main>
      <Hero />
      <FeaturedProducts products={products} />
      
      <section className="py-20 bg-wood-medium/30 wood-texture">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-playfair font-bold text-gold mb-6">
              The World's Finest Tonewoods
            </h2>
            <p className="text-cream/80 mb-10 text-lg">
              For over three decades, we've sourced the rarest and most resonant tonewoods 
              from sustainable forests across the globe, collaborating with master luthiers 
              to create instruments of unparalleled beauty and sound.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="glass-card p-6 rounded-lg">
                <h3 className="text-xl font-playfair text-gold-light mb-3">Exceptional Tone</h3>
                <p className="text-cream/70">Our aged tonewoods are selected for their superior resonance and tonal character.</p>
              </div>
              <div className="glass-card p-6 rounded-lg">
                <h3 className="text-xl font-playfair text-gold-light mb-3">Master Craftsmanship</h3>
                <p className="text-cream/70">Each instrument is meticulously built with techniques refined over generations.</p>
              </div>
              <div className="glass-card p-6 rounded-lg">
                <h3 className="text-xl font-playfair text-gold-light mb-3">Sustainable Sourcing</h3>
                <p className="text-cream/70">We're committed to responsible forestry practices and environmental stewardship.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-playfair font-bold text-gold mb-6">
                Our Heritage of Excellence
              </h2>
              <p className="text-cream/80 mb-6">
                Since 1985, Tonewood Guitar Emporium has been dedicated to providing musicians 
                with instruments that inspire greatness. Our collection represents the pinnacle 
                of acoustic and electric guitar craftsmanship.
              </p>
              <p className="text-cream/80 mb-8">
                We work directly with renowned luthiers and small-batch manufacturers who 
                share our passion for excellence, bringing you guitars with character, 
                voice, and impeccable playability.
              </p>
              <button className="btn-primary">Discover Our Story</button>
            </div>
            <div className="glass-card rounded-lg overflow-hidden">
              <img 
                src="/images/workshop.jpg" 
                alt="Guitar workshop" 
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Index;
