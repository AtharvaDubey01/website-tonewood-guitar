
import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Heart } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { Product } from '../types/product';
import ProductRating from './ProductRating';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (product.stock > 0) {
      addToCart(product);
    }
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
          {product.isNew && (
            <div className="absolute top-2 left-2 bg-gold text-wood-dark text-xs font-bold px-2 py-1 rounded">
              NEW
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-wood-dark/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div className="absolute bottom-4 right-4 flex gap-2">
            <button
              onClick={handleAddToCart}
              className={`bg-gold text-wood-dark rounded-full p-2 opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-gold-light ${
                product.stock <= 0 ? 'opacity-50 cursor-not-allowed' : ''
              }`}
              disabled={product.stock <= 0}
              aria-label="Add to cart"
            >
              <ShoppingCart size={18} />
            </button>
            <button
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                // Wishlist functionality would go here
              }}
              className="bg-wood-medium/80 text-cream rounded-full p-2 opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-wood-medium"
              aria-label="Add to wishlist"
            >
              <Heart size={18} />
            </button>
          </div>
        </div>
        <div className="p-4">
          <div className="mb-1">
            <ProductRating 
              rating={product.ratings?.average || 0} 
              count={product.ratings?.count || 0} 
              size="sm"
            />
          </div>
          <div className="flex justify-between items-start mb-1">
            <h3 className="font-playfair text-lg font-semibold text-cream group-hover:text-gold transition-colors line-clamp-1">
              {product.name}
            </h3>
          </div>
          <p className="text-sm text-cream/70 mb-2">{product.brand}</p>
          <div className="flex justify-between items-center">
            <span className="text-gold font-semibold">${product.price.toLocaleString()}</span>
            <div className="flex items-center">
              <div className={`h-2 w-2 rounded-full mr-2 ${
                product.stock > 5 ? 'bg-green-500' : 
                product.stock > 0 ? 'bg-yellow-500' : 
                'bg-red-500'
              }`}></div>
              <span className="text-xs text-cream/60">
                {product.stock > 5 ? 'In stock' : 
                 product.stock > 0 ? 'Low stock' : 
                 'Out of stock'}
              </span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
