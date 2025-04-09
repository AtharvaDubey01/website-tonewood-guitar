
import React from 'react';
import { Link } from 'react-router-dom';
import { AlertTriangle } from 'lucide-react';

const NotFound = () => {
  return (
    <div className="flex items-center justify-center min-h-[60vh]">
      <div className="text-center max-w-md mx-auto px-4">
        <AlertTriangle size={48} className="text-gold mb-4 mx-auto" />
        <h1 className="text-3xl font-playfair font-bold text-gold mb-4">Page Not Found</h1>
        <p className="text-cream/80 mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/" className="btn-primary">
            Return to Home
          </Link>
          <Link to="/shop" className="btn-outline">
            Browse Shop
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
