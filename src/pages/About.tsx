
import React from 'react';

const About = () => {
  return (
    <main className="py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-playfair font-bold text-gold mb-8">Our Story</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="glass-card rounded-lg overflow-hidden">
            <img 
              src="/images/workshop.jpg" 
              alt="Tonewood workshop" 
              className="w-full h-auto"
            />
          </div>
          <div>
            <h2 className="text-3xl font-playfair font-bold text-gold mb-6">
              A Heritage of Craftsmanship
            </h2>
            <p className="text-cream/80 mb-6 leading-relaxed">
              Founded in 1985, Tonewood Guitar Emporium began with a simple passion: to connect 
              discerning musicians with instruments that inspire greatness. Our founder, 
              Robert Chambers, spent decades traveling to remote forests and working with 
              master luthiers to understand what makes certain woods sing with unparalleled resonance.
            </p>
            <p className="text-cream/80 leading-relaxed">
              Today, we continue this tradition of excellence, sourcing the finest tonewoods 
              and partnering with renowned guitar makers to bring you instruments with exceptional 
              character, voice, and playability. Each guitar in our collection represents the 
              pinnacle of acoustic and electric craftsmanship.
            </p>
          </div>
        </div>
        
        <div className="mb-16">
          <h2 className="text-3xl font-playfair font-bold text-gold mb-8 text-center">Our Philosophy</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="glass-card p-6 rounded-lg">
              <h3 className="text-xl font-playfair text-gold-light mb-3">Quality Above All</h3>
              <p className="text-cream/70">
                We believe that a truly great instrument is an investment that appreciates with time,
                both in monetary value and in tonal character. We never compromise on quality.
              </p>
            </div>
            <div className="glass-card p-6 rounded-lg">
              <h3 className="text-xl font-playfair text-gold-light mb-3">Sustainability</h3>
              <p className="text-cream/70">
                Our commitment to responsible forestry ensures that the precious tonewoods we use
                will be available for future generations of musicians and luthiers.
              </p>
            </div>
            <div className="glass-card p-6 rounded-lg">
              <h3 className="text-xl font-playfair text-gold-light mb-3">Musical Heritage</h3>
              <p className="text-cream/70">
                We honor traditional craftsmanship while embracing innovation, creating instruments
                that connect players to the rich history of guitar making.
              </p>
            </div>
          </div>
        </div>
        
        <div className="bg-wood-medium/30 wood-texture p-8 rounded-lg">
          <h2 className="text-3xl font-playfair font-bold text-gold mb-6 text-center">
            Visit Our Showroom
          </h2>
          <p className="text-cream/80 max-w-2xl mx-auto text-center mb-8">
            Experience our collection in person at our Nashville showroom. Our experts will 
            guide you through our selection and help you find the perfect instrument for your 
            musical journey.
          </p>
          <div className="flex justify-center">
            <button className="btn-primary">Book an Appointment</button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default About;
