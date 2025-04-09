
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, ShoppingCart, X, ChevronDown, Search } from 'lucide-react';
import { useCart } from '../context/CartContext';
import NavMenu from './NavMenu';

const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [isScrolled, setIsScrolled] = useState(false);
  const { cartItems } = useCart();
  const location = useLocation();
  
  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
    setSearchOpen(false);
  }, [location.pathname]);

  // Add scroll listener
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      window.location.href = `/shop?search=${encodeURIComponent(searchTerm)}`;
    }
  };

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-wood-dark/95 backdrop-blur-md shadow-md shadow-black/20' 
        : 'bg-wood-dark/80 backdrop-blur-sm'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center">
            <h1 className="text-2xl sm:text-3xl font-playfair font-bold text-gold tracking-wider">
              TONEWOOD
            </h1>
          </Link>

          {/* Desktop Navigation using NavMenu component */}
          <NavMenu />

          <div className="flex items-center">
            <button 
              onClick={() => setSearchOpen(!searchOpen)}
              className="mr-4 text-cream hover:text-gold transition-colors"
              aria-label="Search"
            >
              {searchOpen ? (
                <X size={20} />
              ) : (
                <Search size={20} />
              )}
            </button>
            
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
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Search Bar */}
      {searchOpen && (
        <div className="border-t border-gold/10 bg-wood-medium/30 py-3 px-4 animate-fade-in">
          <form onSubmit={handleSearch} className="container mx-auto flex">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search for guitars, brands, or categories..."
              className="w-full px-4 py-2 bg-wood-dark border border-gold/20 rounded-l-md text-cream focus:outline-none focus:border-gold"
              autoFocus
            />
            <button 
              type="submit" 
              className="btn-primary rounded-l-none"
              aria-label="Search"
            >
              <Search size={18} />
            </button>
          </form>
        </div>
      )}

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-wood-dark border-t border-gold/20 animate-fade-in">
          <nav className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <Link 
              to="/" 
              className={`text-cream hover:text-gold transition-colors py-2 ${location.pathname === '/' ? 'text-gold' : ''}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/shop" 
              className={`text-cream hover:text-gold transition-colors py-2 ${location.pathname === '/shop' ? 'text-gold' : ''}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Shop
            </Link>
            <div className="pl-4 space-y-2 border-l border-gold/10">
              <Link 
                to="/shop?category=acoustic" 
                className="block text-sm text-cream/90 hover:text-gold transition-colors py-1"
                onClick={() => setMobileMenuOpen(false)}
              >
                Acoustic Guitars
              </Link>
              <Link 
                to="/shop?category=electric" 
                className="block text-sm text-cream/90 hover:text-gold transition-colors py-1"
                onClick={() => setMobileMenuOpen(false)}
              >
                Electric Guitars
              </Link>
              <Link 
                to="/shop?category=classical" 
                className="block text-sm text-cream/90 hover:text-gold transition-colors py-1"
                onClick={() => setMobileMenuOpen(false)}
              >
                Classical Guitars
              </Link>
              <Link 
                to="/shop?category=bass" 
                className="block text-sm text-cream/90 hover:text-gold transition-colors py-1"
                onClick={() => setMobileMenuOpen(false)}
              >
                Bass Guitars
              </Link>
            </div>
            <Link 
              to="/about" 
              className={`text-cream hover:text-gold transition-colors py-2 ${location.pathname === '/about' ? 'text-gold' : ''}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link 
              to="/contact" 
              className={`text-cream hover:text-gold transition-colors py-2 ${location.pathname === '/contact' ? 'text-gold' : ''}`}
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
