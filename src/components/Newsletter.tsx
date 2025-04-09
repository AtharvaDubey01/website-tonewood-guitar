
import React, { useState } from 'react';
import { useToast } from '@/hooks/use-toast';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Thank you for subscribing!",
      description: "You'll now receive updates on our latest products and offers.",
    });
    setEmail('');
  };

  return (
    <section className="py-16 bg-wood-dark">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-playfair font-bold text-gold mb-4">
            Stay in Tune with Tonewood
          </h2>
          <p className="text-cream/80 mb-8">
            Subscribe to our newsletter for exclusive offers, new arrivals, and expert guitar advice.
          </p>
          
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              required
              className="flex-1 px-4 py-2 rounded-md bg-wood-medium/50 border border-gold/20 text-cream focus:border-gold focus:outline-none"
            />
            <button type="submit" className="btn-primary whitespace-nowrap">
              Subscribe
            </button>
          </form>
          
          <p className="text-xs text-cream/50 mt-4">
            We respect your privacy and will never share your information.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
