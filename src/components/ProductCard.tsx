
import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { Product } from '../types/product';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product);
  };

  return (
    <Link to={`/product/${product.id}`}>
      <div className="glass-card group rounded-lg overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-gold/10 hover:-translate-y-1">
        <div className="aspect-[4/3] overflow-hidden relative">
          <img
            src={product.imageUrl}
            alt={product.name}
            className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-wood-dark/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <button
            onClick={handleAddToCart}
            className="absolute bottom-4 right-4 bg-gold text-wood-dark rounded-full p-2 opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-gold-light"
            aria-label="Add to cart"
          >
            <ShoppingCart size={20} />
          </button>
        </div>
        <div className="p-4">
          <div className="flex justify-between items-start mb-2">
            <h3 className="font-playfair text-lg font-semibold text-cream group-hover:text-gold transition-colors">
              {product.name}
            </h3>
          </div>
          <p className="text-sm text-cream/70 mb-2">{product.brand}</p>
          <div className="flex justify-between items-center">
            <span className="text-gold font-semibold">${product.price.toLocaleString()}</span>
            <span className="text-xs px-2 py-1 bg-wood-medium/50 rounded text-cream/80">{product.category}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
