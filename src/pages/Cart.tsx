
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, ShoppingBag, ArrowRight } from 'lucide-react';
import CartItem from '../components/CartItem';
import { useCart } from '../context/CartContext';
import { useToast } from '@/hooks/use-toast';

const Cart = () => {
  const { cartItems, clearCart, getCartTotal } = useCart();
  const { toast } = useToast();
  const [couponCode, setCouponCode] = useState('');
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  
  const cartTotal = getCartTotal();
  const shippingEstimate = cartTotal > 0 ? 25 : 0;
  const taxEstimate = cartTotal * 0.08;
  const orderTotal = cartTotal + shippingEstimate + taxEstimate;
  
  const handleApplyCoupon = () => {
    if (couponCode.trim()) {
      toast({
        title: "Invalid coupon",
        description: `The coupon code "${couponCode}" is not valid or has expired.`,
      });
      setCouponCode('');
    }
  };
  
  const handleCheckout = () => {
    setIsCheckingOut(true);
    
    setTimeout(() => {
      toast({
        title: "Checkout successful",
        description: "This is a demo. In a real app, you would be redirected to a payment processor.",
      });
      clearCart();
      setIsCheckingOut(false);
    }, 1500);
  };
  
  return (
    <main className="py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-playfair font-bold text-gold mb-8">Your Cart</h1>
        
        {cartItems.length > 0 ? (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="glass-card rounded-lg p-6 mb-6">
                <h2 className="text-xl font-playfair text-gold mb-4">
                  Cart Items ({cartItems.reduce((acc, item) => acc + item.quantity, 0)})
                </h2>
                
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
                  <Link to="/shop" className="text-cream/70 hover:text-gold transition-colors flex items-center gap-1">
                    Continue Shopping
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
              
              <div className="glass-card rounded-lg p-6">
                <h2 className="text-xl font-playfair text-gold mb-4">Have a Coupon?</h2>
                <div className="flex">
                  <input
                    type="text"
                    value={couponCode}
                    onChange={(e) => setCouponCode(e.target.value)}
                    placeholder="Enter coupon code"
                    className="flex-1 px-4 py-2 rounded-l-md bg-wood-medium/50 border border-gold/20 text-cream focus:border-gold focus:outline-none"
                  />
                  <button 
                    onClick={handleApplyCoupon}
                    className="btn-primary rounded-l-none"
                    disabled={!couponCode.trim()}
                  >
                    Apply
                  </button>
                </div>
                <p className="text-xs text-cream/50 mt-2">
                  Enter a valid coupon code if you have one. Demo coupon: TONEWOOD10
                </p>
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
              
              <button 
                className={`btn-primary w-full flex items-center justify-center gap-2 ${
                  isCheckingOut ? 'opacity-70 cursor-wait' : ''
                }`}
                onClick={handleCheckout}
                disabled={isCheckingOut}
              >
                {isCheckingOut ? (
                  <>
                    <div className="h-4 w-4 border-2 border-t-transparent border-wood-dark rounded-full animate-spin"></div>
                    Processing...
                  </>
                ) : (
                  <>
                    <ShoppingBag size={18} />
                    Proceed to Checkout
                  </>
                )}
              </button>
              
              <div className="mt-6">
                <h3 className="text-sm font-medium text-cream mb-2">We Accept</h3>
                <div className="flex gap-2">
                  <div className="bg-white/80 rounded px-2 py-1">
                    <span className="text-xs text-wood-dark font-semibold">VISA</span>
                  </div>
                  <div className="bg-white/80 rounded px-2 py-1">
                    <span className="text-xs text-wood-dark font-semibold">MASTERCARD</span>
                  </div>
                  <div className="bg-white/80 rounded px-2 py-1">
                    <span className="text-xs text-wood-dark font-semibold">AMEX</span>
                  </div>
                  <div className="bg-white/80 rounded px-2 py-1">
                    <span className="text-xs text-wood-dark font-semibold">PAYPAL</span>
                  </div>
                </div>
              </div>
              
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
