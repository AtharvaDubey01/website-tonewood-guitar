
import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, ShoppingCart, Heart } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { products } from '../data/products';

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [selectedImage, setSelectedImage] = useState(0);
  
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
    addToCart(product);
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
            <span className="text-sm text-gold uppercase tracking-wider">{product.brand}</span>
            <h1 className="text-3xl md:text-4xl font-playfair font-bold text-cream mt-1 mb-2">
              {product.name}
            </h1>
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 bg-wood-medium/50 rounded text-cream/80 text-sm">
                {product.category}
              </span>
            </div>
            <div className="text-2xl font-semibold text-gold mb-6">
              ${product.price.toLocaleString()}
            </div>
            
            <p className="text-cream/80 mb-8">
              {product.description}
            </p>
            
            <div className="flex gap-4 mb-10">
              <button onClick={handleAddToCart} className="btn-primary flex items-center gap-2">
                <ShoppingCart size={18} />
                Add to Cart
              </button>
              <button className="btn-outline flex items-center gap-2">
                <Heart size={18} />
                Wishlist
              </button>
            </div>
            
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
      </div>
    </main>
  );
};

export default ProductDetail;
