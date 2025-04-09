
import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { useEffect } from 'react';

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-[70vh] flex items-center justify-center">
      <div className="glass-card rounded-lg p-12 text-center max-w-md">
        <h1 className="text-4xl font-playfair font-bold text-gold mb-4">404</h1>
        <p className="text-xl text-cream mb-6">This page is out of tune</p>
        <p className="text-cream/70 mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link to="/" className="btn-primary">
          Return to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
