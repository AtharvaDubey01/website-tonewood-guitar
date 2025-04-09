
import React, { useState } from 'react';
import ProductList from '../components/ProductList';
import { products } from '../data/products';
import { Input } from '../components/ui/input';
import { Button } from '../components/ui/button';
import { Separator } from '../components/ui/separator';
import { Search, SlidersHorizontal } from 'lucide-react';

const Shop = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  const [priceRange, setPriceRange] = useState<[number | null, number | null]>([null, null]);
  
  // Get unique brands from products
  const brands = Array.from(new Set(products.map(product => product.brand)));
  
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);

  const toggleBrandFilter = (brand: string) => {
    setSelectedBrands(prev => 
      prev.includes(brand) 
        ? prev.filter(b => b !== brand) 
        : [...prev, brand]
    );
  };

  // Filter products based on search term, brands, and price range
  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                        product.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesBrand = selectedBrands.length === 0 || selectedBrands.includes(product.brand);
    
    const matchesPrice = (priceRange[0] === null || product.price >= priceRange[0]) && 
                        (priceRange[1] === null || product.price <= priceRange[1]);
                        
    return matchesSearch && matchesBrand && matchesPrice;
  });

  return (
    <main className="py-12 min-h-screen">
      <div className="container mx-auto px-4">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-playfair font-bold text-gold mb-4">Our Collection</h1>
          <p className="text-cream/80 max-w-2xl mx-auto">
            Browse our curated selection of premium guitars crafted from the finest tonewoods.
            Each instrument is selected for its exceptional sound quality and craftsmanship.
          </p>
        </header>

        <div className="mb-10">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-6">
            <div className="relative w-full md:w-auto md:flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-cream/50" size={18} />
              <Input
                placeholder="Search for guitars..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 bg-wood-medium/30 border-gold/20 text-cream placeholder-cream/40 focus-visible:ring-gold/30"
              />
            </div>
            
            <Button 
              onClick={() => setShowFilters(!showFilters)}
              variant="outline" 
              className="w-full md:w-auto border-gold/20 text-gold hover:bg-gold/10"
            >
              <SlidersHorizontal size={18} className="mr-2" />
              {showFilters ? 'Hide Filters' : 'Show Filters'}
            </Button>
          </div>

          {showFilters && (
            <div className="glass-card p-6 mb-8 animate-fade-in">
              <h3 className="font-playfair text-gold mb-4">Filter by Brand</h3>
              <div className="flex flex-wrap gap-2 mb-6">
                {brands.map(brand => (
                  <button
                    key={brand}
                    onClick={() => toggleBrandFilter(brand)}
                    className={`px-4 py-1.5 rounded-full text-sm border transition-colors ${
                      selectedBrands.includes(brand)
                        ? 'bg-gold text-wood-dark border-gold'
                        : 'bg-wood-medium/30 text-cream/80 border-gold/20 hover:border-gold/50'
                    }`}
                  >
                    {brand}
                  </button>
                ))}
              </div>

              <h3 className="font-playfair text-gold mb-4">Price Range</h3>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <label htmlFor="minPrice" className="block text-sm text-cream/80 mb-1">
                    Min Price ($)
                  </label>
                  <Input
                    id="minPrice"
                    type="number"
                    placeholder="Min"
                    value={priceRange[0] || ''}
                    onChange={(e) => setPriceRange([e.target.value ? parseInt(e.target.value) : null, priceRange[1]])}
                    className="bg-wood-medium/30 border-gold/20 text-cream"
                  />
                </div>
                <div>
                  <label htmlFor="maxPrice" className="block text-sm text-cream/80 mb-1">
                    Max Price ($)
                  </label>
                  <Input
                    id="maxPrice"
                    type="number"
                    placeholder="Max"
                    value={priceRange[1] || ''}
                    onChange={(e) => setPriceRange([priceRange[0], e.target.value ? parseInt(e.target.value) : null])}
                    className="bg-wood-medium/30 border-gold/20 text-cream"
                  />
                </div>
              </div>

              <div className="flex justify-end mt-4">
                <Button
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedBrands([]);
                    setPriceRange([null, null]);
                  }}
                  variant="outline"
                  className="border-gold/20 text-cream/70 hover:bg-wood-medium/50 hover:text-cream"
                >
                  Reset Filters
                </Button>
              </div>
            </div>
          )}
        </div>

        <Separator className="bg-gold/10 mb-8" />

        {filteredProducts.length === 0 ? (
          <div className="text-center py-16">
            <h3 className="text-2xl font-playfair text-gold mb-4">No Guitars Found</h3>
            <p className="text-cream/80">Try adjusting your search criteria to find the perfect instrument.</p>
          </div>
        ) : (
          <>
            <div className="text-right mb-4">
              <p className="text-cream/70">{filteredProducts.length} instruments found</p>
            </div>
            <ProductList products={filteredProducts} />
          </>
        )}
      </div>
    </main>
  );
};

export default Shop;
