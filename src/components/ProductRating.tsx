
import React from 'react';
import { Star } from 'lucide-react';

interface ProductRatingProps {
  rating: number;
  count?: number;
  showCount?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

const ProductRating: React.FC<ProductRatingProps> = ({ 
  rating, 
  count = 0, 
  showCount = true,
  size = 'md' 
}) => {
  // Generate an array of 5 stars
  const stars = Array.from({ length: 5 }, (_, i) => {
    // Full star if rating is at least i+1
    if (rating >= i + 1) {
      return 'full';
    }
    // Half star if rating is between i and i+1
    else if (rating >= i + 0.5) {
      return 'half';
    }
    // Empty star otherwise
    else {
      return 'empty';
    }
  });
  
  // Determine star size based on the size prop
  const starSize = {
    sm: 14,
    md: 18,
    lg: 22
  }[size];
  
  return (
    <div className="flex items-center">
      <div className="flex">
        {stars.map((type, index) => (
          <div key={index} className="relative">
            {type === 'full' && (
              <Star
                size={starSize}
                className="text-gold fill-gold"
              />
            )}
            {type === 'half' && (
              <>
                <Star
                  size={starSize}
                  className="text-gold/30 fill-gold/30"
                />
                <div className="absolute inset-0 overflow-hidden w-1/2">
                  <Star
                    size={starSize}
                    className="text-gold fill-gold"
                  />
                </div>
              </>
            )}
            {type === 'empty' && (
              <Star
                size={starSize}
                className="text-gold/30"
              />
            )}
          </div>
        ))}
      </div>
      
      {showCount && count > 0 && (
        <span className="ml-2 text-cream/60 text-sm">
          ({count} {count === 1 ? 'review' : 'reviews'})
        </span>
      )}
    </div>
  );
};

export default ProductRating;
