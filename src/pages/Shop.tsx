
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ProductList from '../components/ProductList';
import { products } from '../data/products';
import { categories } from '../data/categories';
import { Input } from '../components/ui/input';
import { Separator } from '../components/ui/separator';
import { Search, SlidersHorizontal, Star } from 'lucide-react';
import { Slider } from '../components/ui/slider';
import { Checkbox } from '../components/ui/checkbox';
import { Label } from '../components/ui/label';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '../components/ui/collapsible';
import ProductRating from '../components/ProductRating';

const Shop = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const categoryParam = queryParams.get('category');

  const [searchTerm, setSearchTerm] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 5000]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>(
    categoryParam ? [categoryParam] : []
  );
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [minRating, setMinRating] = useState<number | null>(null);
  
  // Get unique brands from products
  const brands = Array.from(new Set(products.map(product => product.brand)));
  
  // Toggle category filter
  const toggleCategoryFilter = (category: string) => {
    setSelectedCategories(prev => 
      prev.includes(category) 
        ? prev.filter(c => c !== category) 
        : [...prev, category]
    );
  };

  // Toggle brand filter
  const toggleBrandFilter = (brand: string) => {
    setSelectedBrands(prev => 
      prev.includes(brand) 
        ? prev.filter(b => b !== brand) 
        : [...prev, brand]
    );
  };

  // Filter products based on all criteria
  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                        product.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategories = selectedCategories.length === 0 || 
                            selectedCategories.includes(product.category.toLowerCase());
    
    const matchesBrands = selectedBrands.length === 0 || 
                        selectedBrands.includes(product.brand);
    
    const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1];
    
    const matchesRating = minRating === null || 
                        (product.ratings && product.ratings.average >= minRating);
                        
    return matchesSearch && matchesCategories && matchesBrands && matchesPrice && matchesRating;
  });

  // Reset all filters
  const resetFilters = () => {
    setSearchTerm('');
    setSelectedCategories([]);
    setSelectedBrands([]);
    setPriceRange([0, 5000]);
    setMinRating(null);
  };
  
  // Apply category from URL parameter on initial load
  useEffect(() => {
    if (categoryParam) {
      setSelectedCategories([categoryParam]);
      setShowFilters(true);
    }
  }, [categoryParam]);

  return (
    <main className="py-12">
      <div className="container mx-auto px-4">
        <header className="glass-card rounded-lg p-8 mb-12 bg-center bg-cover relative overflow-hidden" style={{ backgroundImage: 'url("/images/hero-guitar.jpg")' }}>
          <div className="absolute inset-0 bg-wood-dark/70"></div>
          <div className="relative z-10">
            <h1 className="text-4xl font-playfair font-bold text-gold mb-4">Our Collection</h1>
            <p className="text-cream/80 max-w-2xl">
              Browse our curated selection of premium guitars crafted from the finest tonewoods.
              Each instrument is selected for its exceptional sound quality and craftsmanship.
            </p>
          </div>
        </header>

        <div className="glass-card rounded-lg p-6 mb-10">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-6">
            <div className="relative w-full md:w-auto md:flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-cream/40" size={18} />
              <Input
                placeholder="Search for guitars..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 bg-wood-medium/50 border-gold/20 text-cream focus:border-gold focus:outline-none"
              />
            </div>
            
            <Collapsible 
              open={showFilters} 
              onOpenChange={setShowFilters} 
              className="w-full md:w-auto"
            >
              <CollapsibleTrigger asChild>
                <button 
                  className="btn-outline w-full md:w-auto flex items-center justify-center gap-2"
                >
                  <SlidersHorizontal size={18} />
                  {showFilters ? 'Hide Filters' : 'Show Filters'}
                </button>
              </CollapsibleTrigger>
              
              <CollapsibleContent className="mt-6 space-y-6 animate-accordion-down">
                <div>
                  <h3 className="font-medium text-lg text-gold mb-4">Filter by Category</h3>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                    {categories.map(category => (
                      <div key={category.slug} className="flex items-center space-x-2">
                        <Checkbox 
                          id={`category-${category.slug}`} 
                          checked={selectedCategories.includes(category.slug)}
                          onCheckedChange={() => toggleCategoryFilter(category.slug)}
                          className="data-[state=checked]:bg-gold data-[state=checked]:border-gold"
                        />
                        <Label htmlFor={`category-${category.slug}`} className="text-cream">
                          {category.name}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>

                <Separator className="bg-gold/20" />

                <div>
                  <h3 className="font-medium text-lg text-gold mb-4">Filter by Brand</h3>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                    {brands.map(brand => (
                      <div key={brand} className="flex items-center space-x-2">
                        <Checkbox 
                          id={`brand-${brand}`} 
                          checked={selectedBrands.includes(brand)}
                          onCheckedChange={() => toggleBrandFilter(brand)}
                          className="data-[state=checked]:bg-gold data-[state=checked]:border-gold"
                        />
                        <Label htmlFor={`brand-${brand}`} className="text-cream">
                          {brand}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>

                <Separator className="bg-gold/20" />

                <div>
                  <h3 className="font-medium text-lg text-gold mb-4">Price Range</h3>
                  <div className="space-y-6 px-1">
                    <Slider
                      value={[priceRange[0], priceRange[1]]}
                      min={0}
                      max={5000}
                      step={100}
                      onValueChange={(value) => {
                        setPriceRange([value[0], value[1]]);
                      }}
                      className="py-4"
                    />
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="text-sm text-cream/50 mb-1">Min Price</p>
                        <div className="flex items-center bg-wood-medium/50 border border-gold/20 rounded">
                          <span className="pl-3 text-cream/50">$</span>
                          <Input
                            type="number"
                            placeholder="Min"
                            value={priceRange[0]}
                            onChange={(e) => setPriceRange([parseInt(e.target.value) || 0, priceRange[1]])}
                            className="w-24 border-0 bg-transparent text-cream"
                          />
                        </div>
                      </div>
                      <div>
                        <p className="text-sm text-cream/50 mb-1">Max Price</p>
                        <div className="flex items-center bg-wood-medium/50 border border-gold/20 rounded">
                          <span className="pl-3 text-cream/50">$</span>
                          <Input
                            type="number"
                            placeholder="Max"
                            value={priceRange[1]}
                            onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value) || 5000])}
                            className="w-24 border-0 bg-transparent text-cream"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <Separator className="bg-gold/20" />

                <div>
                  <h3 className="font-medium text-lg text-gold mb-4">Minimum Rating</h3>
                  <div className="space-y-2">
                    {[5, 4, 3, 2, 1].map((rating) => (
                      <div key={rating} className="flex items-center space-x-3">
                        <Checkbox 
                          id={`rating-${rating}`} 
                          checked={minRating === rating}
                          onCheckedChange={() => setMinRating(minRating === rating ? null : rating)}
                          className="data-[state=checked]:bg-gold data-[state=checked]:border-gold"
                        />
                        <Label htmlFor={`rating-${rating}`} className="flex items-center gap-2">
                          <ProductRating rating={rating} showCount={false} />
                          {rating === 1 ? '& up' : ''}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex justify-end mt-4">
                  <button
                    onClick={resetFilters}
                    className="btn-outline border-gold/30 text-cream hover:bg-gold/10"
                  >
                    Reset Filters
                  </button>
                </div>
              </CollapsibleContent>
            </Collapsible>
          </div>
        </div>

        <div className="min-h-[400px]">
          {filteredProducts.length === 0 ? (
            <div className="glass-card rounded-lg p-12 text-center">
              <h3 className="text-2xl font-bold text-gold mb-4">No Products Found</h3>
              <p className="text-cream/80 mb-6">Try adjusting your search or filter criteria.</p>
              <button onClick={resetFilters} className="btn-primary">
                Reset Filters
              </button>
            </div>
          ) : (
            <>
              <div className="flex justify-between items-center mb-6">
                <p className="text-cream/80">{filteredProducts.length} instruments found</p>
                <div className="flex gap-2">
                  {selectedCategories.length > 0 && (
                    <div className="bg-gold/20 rounded-full px-3 py-1 text-xs text-cream/90">
                      {selectedCategories.length} categories
                    </div>
                  )}
                  {selectedBrands.length > 0 && (
                    <div className="bg-gold/20 rounded-full px-3 py-1 text-xs text-cream/90">
                      {selectedBrands.length} brands
                    </div>
                  )}
                  {minRating && (
                    <div className="bg-gold/20 rounded-full px-3 py-1 text-xs text-cream/90 flex items-center gap-1">
                      <Star size={12} className="fill-gold text-gold" /> {minRating}+ stars
                    </div>
                  )}
                </div>
              </div>
              <ProductList products={filteredProducts} />
            </>
          )}
        </div>
      </div>
    </main>
  );
};

export default Shop;
