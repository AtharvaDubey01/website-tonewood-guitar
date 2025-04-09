
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-wood-dark border-t border-gold/20 pt-16 pb-8 wood-texture">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-12">
          <div className="md:col-span-4">
            <h3 className="text-2xl font-playfair font-bold text-gold mb-4">TONEWOOD</h3>
            <p className="text-cream/80 mb-6 max-w-md">
              Purveyors of fine guitars and musical instruments crafted from the world's 
              most exceptional tonewoods. Serving musicians with premium instruments since 1985.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-wood-medium/50 p-2 rounded-full text-cream hover:text-gold transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="bg-wood-medium/50 p-2 rounded-full text-cream hover:text-gold transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="bg-wood-medium/50 p-2 rounded-full text-cream hover:text-gold transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>
          
          <div className="md:col-span-2">
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
          
          <div className="md:col-span-2">
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
          
          <div className="md:col-span-2">
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
          
          <div className="md:col-span-2">
            <h4 className="text-lg font-semibold text-gold-light mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={18} className="text-gold mr-2 mt-0.5" />
                <span className="text-cream/80">
                  123 Guitar Avenue<br />
                  Nashville, TN 37203
                </span>
              </li>
              <li className="flex items-start">
                <Phone size={18} className="text-gold mr-2 mt-0.5" />
                <span className="text-cream/80">
                  +1 (615) 555-1234
                </span>
              </li>
              <li className="flex items-start">
                <Mail size={18} className="text-gold mr-2 mt-0.5" />
                <span className="text-cream/80">
                  info@tonewoodguitars.com
                </span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gold/10 text-center text-cream/60 text-sm">
          <p>© {currentYear} Tonewood Guitar Emporium. All rights reserved.</p>
          <p className="mt-1">This is a demo site. No real purchases will be processed.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
