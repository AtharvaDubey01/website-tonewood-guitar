
import React from 'react';
import { Minus, Plus, Trash2 } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { CartItem as CartItemType } from '../types/cart';

interface CartItemProps {
  item: CartItemType;
}

const CartItem: React.FC<CartItemProps> = ({ item }) => {
  const { removeFromCart, increaseQuantity, decreaseQuantity } = useCart();

  return (
    <div className="flex items-center gap-4 py-4 border-b border-gold/10">
      <div className="w-20 h-20 overflow-hidden rounded">
        <img 
          src={item.product.imageUrl} 
          alt={item.product.name} 
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="flex-1">
        <h3 className="font-playfair text-lg text-cream">{item.product.name}</h3>
        <p className="text-xs text-cream/70">{item.product.brand} | {item.product.category}</p>
      </div>
      
      <div className="flex items-center gap-2">
        <button 
          onClick={() => decreaseQuantity(item.product.id)} 
          className="text-cream/80 hover:text-gold"
          aria-label="Decrease quantity"
        >
          <Minus size={18} />
        </button>
        
        <span className="w-8 text-center font-medium text-cream">{item.quantity}</span>
        
        <button 
          onClick={() => increaseQuantity(item.product.id)} 
          className="text-cream/80 hover:text-gold"
          aria-label="Increase quantity"
        >
          <Plus size={18} />
        </button>
      </div>
      
      <div className="w-24 text-right font-semibold text-gold">
        ${(item.product.price * item.quantity).toLocaleString()}
      </div>
      
      <button 
        onClick={() => removeFromCart(item.product.id)} 
        className="text-cream/60 hover:text-destructive"
        aria-label="Remove item"
      >
        <Trash2 size={18} />
      </button>
    </div>
  );
};

export default CartItem;
