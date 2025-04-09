
import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, ShoppingCart, Heart, Check } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { products } from '../data/products';
import ProductRating from '../components/ProductRating';
import RelatedProducts from '../components/RelatedProducts';
import { useToast } from '@/hooks/use-toast';

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const { toast } = useToast();
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [isAddingToCart, setIsAddingToCart] = useState(false);
  
  const product = products.find(p => p.id === id);
  
  if (!product) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-2xl font-playfair text-cream mb-4">Product Not Found</h1>
        <p className="text-cream/80 mb-8">The product you're looking for doesn't exist or has been removed.</p>
        <Link to="/shop" className="btn-primary">
          Return to Shop
        </Link>
      </div>
    );
  }
  
  const images = [product.imageUrl, ...(product.additionalImages || [])];
  
  const handleAddToCart = () => {
    setIsAddingToCart(true);
    
    // Add product to cart
    for (let i = 0; i < quantity; i++) {
      addToCart(product);
    }
    
    // Show success toast
    toast({
      title: "Added to cart",
      description: `${product.name} has been added to your cart.`,
    });
    
    // Reset state after animation
    setTimeout(() => {
      setIsAddingToCart(false);
    }, 1000);
  };
  
  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  
  const increaseQuantity = () => {
    if (quantity < product.stock) {
      setQuantity(quantity + 1);
    }
  };
  
  return (
    <main className="py-12">
      <div className="container mx-auto px-4">
        <button 
          onClick={() => navigate(-1)} 
          className="flex items-center text-cream/80 hover:text-gold mb-8"
        >
          <ArrowLeft size={18} className="mr-2" />
          Back to shopping
        </button>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div>
            <div className="glass-card rounded-lg overflow-hidden mb-4">
              <img 
                src={images[selectedImage]} 
                alt={product.name} 
                className="w-full h-auto"
              />
            </div>
            
            {images.length > 1 && (
              <div className="flex gap-3">
                {images.map((image, index) => (
                  <button 
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`rounded overflow-hidden border-2 ${
                      selectedImage === index 
                        ? 'border-gold' 
                        : 'border-transparent'
                    }`}
                  >
                    <img 
                      src={image} 
                      alt={`${product.name} view ${index + 1}`} 
                      className="w-20 h-20 object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>
          
          {/* Product Details */}
          <div>
            <div className="mb-2 flex items-center">
              <span className="text-sm text-gold uppercase tracking-wider">{product.brand}</span>
              {product.isNew && (
                <span className="ml-3 px-2 py-1 bg-gold text-wood-dark text-xs font-medium rounded">
                  NEW
                </span>
              )}
            </div>
            
            <h1 className="text-3xl md:text-4xl font-playfair font-bold text-cream mt-1 mb-2">
              {product.name}
            </h1>
            
            <div className="flex items-center gap-3 mb-4">
              <ProductRating 
                rating={product.ratings?.average || 0} 
                count={product.ratings?.count || 0}
              />
              <span className="px-3 py-1 bg-wood-medium/50 rounded text-cream/80 text-sm">
                {product.category}
              </span>
            </div>
            
            <div className="text-2xl font-semibold text-gold mb-4">
              ${product.price.toLocaleString()}
            </div>
            
            <p className="text-cream/80 mb-6">
              {product.description}
            </p>
            
            <div className="mb-6">
              <div className="flex items-center mb-2">
                <div className={`h-3 w-3 rounded-full mr-2 ${
                  product.stock > 0 ? 'bg-green-500' : 'bg-red-500'
                }`}></div>
                <span className="text-sm text-cream/80">
                  {product.stock > 0 
                    ? `In Stock (${product.stock} available)` 
                    : 'Out of Stock'}
                </span>
              </div>
            </div>
            
            {product.stock > 0 && (
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex border border-gold/30 rounded-md">
                  <button 
                    onClick={decreaseQuantity}
                    className="px-3 py-2 text-cream hover:bg-gold/10"
                    disabled={quantity <= 1}
                  >
                    -
                  </button>
                  <span className="px-4 py-2 text-cream border-l border-r border-gold/30 min-w-[50px] text-center">
                    {quantity}
                  </span>
                  <button 
                    onClick={increaseQuantity}
                    className="px-3 py-2 text-cream hover:bg-gold/10"
                    disabled={quantity >= product.stock}
                  >
                    +
                  </button>
                </div>
                
                <button 
                  onClick={handleAddToCart} 
                  className={`btn-primary flex items-center gap-2 min-w-[180px] justify-center relative ${
                    isAddingToCart ? 'bg-green-600 hover:bg-green-700' : ''
                  }`}
                  disabled={isAddingToCart}
                >
                  {isAddingToCart ? (
                    <>
                      <Check size={18} />
                      Added
                    </>
                  ) : (
                    <>
                      <ShoppingCart size={18} />
                      Add to Cart
                    </>
                  )}
                </button>
                
                <button className="btn-outline flex items-center gap-2">
                  <Heart size={18} />
                  Wishlist
                </button>
              </div>
            )}
            
            <div className="glass-card rounded-lg p-6 mb-8">
              <h3 className="text-xl font-playfair text-gold mb-4">Features</h3>
              <ul className="space-y-2">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-start text-cream/80">
                    <span className="text-gold mr-2">•</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-playfair text-gold mb-4">Specifications</h3>
              <div className="glass-card rounded-lg overflow-hidden">
                <table className="w-full">
                  <tbody>
                    {Object.entries(product.specifications).map(([key, value], index) => (
                      <tr 
                        key={index} 
                        className={`${
                          index % 2 === 0 ? 'bg-wood-medium/20' : 'bg-wood-medium/10'
                        }`}
                      >
                        <td className="py-2 px-4 border-b border-gold/10 text-cream/90 font-medium">
                          {key}
                        </td>
                        <td className="py-2 px-4 border-b border-gold/10 text-cream/70">
                          {value}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        
        {/* Related Products Section */}
        <RelatedProducts productId={id as string} />
      </div>
    </main>
  );
};

export default ProductDetail;
