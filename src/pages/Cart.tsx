
import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart } from 'lucide-react';
import CartItem from '../components/CartItem';
import { useCart } from '../context/CartContext';

const Cart = () => {
  const { cartItems, clearCart, getCartTotal } = useCart();
  
  const cartTotal = getCartTotal();
  const shippingEstimate = cartTotal > 0 ? 25 : 0;
  const taxEstimate = cartTotal * 0.08;
  const orderTotal = cartTotal + shippingEstimate + taxEstimate;
  
  return (
    <main className="py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-playfair font-bold text-gold mb-8">Your Cart</h1>
        
        {cartItems.length > 0 ? (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              {cartItems.map((item) => (
                <CartItem key={item.product.id} item={item} />
              ))}
              
              <div className="mt-6 flex justify-between">
                <button 
                  onClick={clearCart}
                  className="text-cream/70 hover:text-destructive transition-colors"
                >
                  Clear Cart
                </button>
                <Link to="/shop" className="text-cream/70 hover:text-gold transition-colors">
                  Continue Shopping
                </Link>
              </div>
            </div>
            
            <div className="glass-card rounded-lg p-6 h-fit">
              <h2 className="text-xl font-playfair text-gold mb-4">Order Summary</h2>
              
              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-cream/80">
                  <span>Subtotal</span>
                  <span>${cartTotal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-cream/80">
                  <span>Shipping Estimate</span>
                  <span>${shippingEstimate.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-cream/80">
                  <span>Tax Estimate</span>
                  <span>${taxEstimate.toFixed(2)}</span>
                </div>
                <div className="border-t border-gold/20 pt-3 flex justify-between font-semibold text-cream">
                  <span>Order Total</span>
                  <span>${orderTotal.toFixed(2)}</span>
                </div>
              </div>
              
              <button className="btn-primary w-full">
                Proceed to Checkout
              </button>
              
              <p className="text-xs text-center text-cream/50 mt-4">
                This is a demo site. No real purchases will be processed.
              </p>
            </div>
          </div>
        ) : (
          <div className="glass-card rounded-lg p-12 text-center">
            <ShoppingCart size={48} className="mx-auto text-cream/40 mb-4" />
            <h2 className="text-2xl font-playfair text-cream mb-4">Your cart is empty</h2>
            <p className="text-cream/70 mb-8">
              Looks like you haven't added any guitars to your cart yet.
            </p>
            <Link to="/shop" className="btn-primary">
              Browse Our Collection
            </Link>
          </div>
        )}
      </div>
    </main>
  );
};

export default Cart;
