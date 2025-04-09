
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, ShoppingCart, X } from 'lucide-react';
import { useCart } from '../context/CartContext';

const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { cartItems } = useCart();
  
  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <header className="sticky top-0 z-50 bg-wood-dark/90 backdrop-blur-md border-b border-gold/20">
      <div className="container mx-auto px-4 flex justify-between items-center h-16">
        <Link to="/" className="flex items-center">
          <h1 className="text-2xl sm:text-3xl font-playfair font-bold text-gold tracking-wider">
            TONEWOOD
          </h1>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-cream hover:text-gold transition-colors">
            Home
          </Link>
          <Link to="/shop" className="text-cream hover:text-gold transition-colors">
            Shop
          </Link>
          <Link to="/about" className="text-cream hover:text-gold transition-colors">
            About
          </Link>
          <Link to="/contact" className="text-cream hover:text-gold transition-colors">
            Contact
          </Link>
        </nav>

        <div className="flex items-center">
          <Link to="/cart" className="relative mr-4">
            <ShoppingCart className="h-6 w-6 text-cream hover:text-gold transition-colors" />
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-gold text-wood-dark text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </Link>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-cream hover:text-gold"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-wood-dark border-t border-gold/20 animate-fade-in">
          <nav className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <Link 
              to="/" 
              className="text-cream hover:text-gold transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/shop" 
              className="text-cream hover:text-gold transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Shop
            </Link>
            <Link 
              to="/about" 
              className="text-cream hover:text-gold transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link 
              to="/contact" 
              className="text-cream hover:text-gold transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
