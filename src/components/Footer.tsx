
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-wood-dark border-t border-gold/20 pt-12 pb-8 wood-texture">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <h3 className="text-2xl font-playfair font-bold text-gold mb-4">TONEWOOD</h3>
            <p className="text-cream/80 mb-4">
              Purveyors of fine guitars and musical instruments crafted from the world's finest tonewoods.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-cream hover:text-gold transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-cream hover:text-gold transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-cream hover:text-gold transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-gold-light mb-4">Shop</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/shop?category=acoustic" className="text-cream/80 hover:text-gold transition-colors">
                  Acoustic Guitars
                </Link>
              </li>
              <li>
                <Link to="/shop?category=electric" className="text-cream/80 hover:text-gold transition-colors">
                  Electric Guitars
                </Link>
              </li>
              <li>
                <Link to="/shop?category=classical" className="text-cream/80 hover:text-gold transition-colors">
                  Classical Guitars
                </Link>
              </li>
              <li>
                <Link to="/shop?category=bass" className="text-cream/80 hover:text-gold transition-colors">
                  Bass Guitars
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-gold-light mb-4">Company</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-cream/80 hover:text-gold transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-cream/80 hover:text-gold transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/journal" className="text-cream/80 hover:text-gold transition-colors">
                  Journal
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-cream/80 hover:text-gold transition-colors">
                  Careers
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-gold-light mb-4">Support</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/shipping" className="text-cream/80 hover:text-gold transition-colors">
                  Shipping & Returns
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-cream/80 hover:text-gold transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-cream/80 hover:text-gold transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-cream/80 hover:text-gold transition-colors">
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t border-gold/10 text-center text-cream/60 text-sm">
          <p>© {new Date().getFullYear()} Tonewood Guitar Emporium. All rights reserved.</p>
          <p className="mt-1">This is a demo site. No real purchases will be processed.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
