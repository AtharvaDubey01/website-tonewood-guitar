
import React, { useState } from 'react';
import ProductList from '../components/ProductList';
import { products } from '../data/products';
import { Input } from '../components/ui/input';
import { Button } from '../components/ui/button';
import { Separator } from '../components/ui/separator';
import { Search, SlidersHorizontal } from 'lucide-react';
import { Slider } from '../components/ui/slider';
import { Checkbox } from '../components/ui/checkbox';
import { Label } from '../components/ui/label';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '../components/ui/collapsible';

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

  // Get min and max prices from products
  const minPrice = Math.min(...products.map(product => product.price));
  const maxPrice = Math.max(...products.map(product => product.price));

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
    <main className="py-12 min-h-screen bg-slate-50">
      <div className="container mx-auto px-4">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-indigo-900 mb-4">Our Collection</h1>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Browse our curated selection of premium guitars crafted from the finest tonewoods.
            Each instrument is selected for its exceptional sound quality and craftsmanship.
          </p>
        </header>

        <div className="mb-10 bg-white rounded-xl shadow-md p-6">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-6">
            <div className="relative w-full md:w-auto md:flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" size={18} />
              <Input
                placeholder="Search for guitars..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 border-slate-200 focus-visible:ring-indigo-500"
              />
            </div>
            
            <Collapsible 
              open={showFilters} 
              onOpenChange={setShowFilters} 
              className="w-full md:w-auto"
            >
              <CollapsibleTrigger asChild>
                <Button 
                  variant="outline" 
                  className="w-full md:w-auto border-slate-200 text-indigo-700 hover:bg-indigo-50"
                >
                  <SlidersHorizontal size={18} className="mr-2" />
                  {showFilters ? 'Hide Filters' : 'Show Filters'}
                </Button>
              </CollapsibleTrigger>
              
              <CollapsibleContent className="mt-6 space-y-6 animate-accordion-down">
                <div>
                  <h3 className="font-medium text-lg text-indigo-900 mb-4">Filter by Brand</h3>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                    {brands.map(brand => (
                      <div key={brand} className="flex items-center space-x-2">
                        <Checkbox 
                          id={`brand-${brand}`} 
                          checked={selectedBrands.includes(brand)}
                          onCheckedChange={() => toggleBrandFilter(brand)}
                          className="data-[state=checked]:bg-indigo-600 data-[state=checked]:border-indigo-600"
                        />
                        <Label htmlFor={`brand-${brand}`} className="text-slate-700">
                          {brand}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>

                <Separator className="bg-slate-200" />

                <div>
                  <h3 className="font-medium text-lg text-indigo-900 mb-4">Price Range</h3>
                  <div className="space-y-6">
                    <Slider
                      defaultValue={[minPrice, maxPrice]}
                      min={minPrice}
                      max={maxPrice}
                      step={100}
                      onValueChange={(value) => {
                        setPriceRange([value[0], value[1]]);
                      }}
                      className="py-4"
                    />
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="text-sm text-slate-500 mb-1">Min Price</p>
                        <Input
                          type="number"
                          placeholder="Min"
                          value={priceRange[0] || ''}
                          onChange={(e) => setPriceRange([e.target.value ? parseInt(e.target.value) : null, priceRange[1]])}
                          className="w-32 border-slate-200"
                        />
                      </div>
                      <div>
                        <p className="text-sm text-slate-500 mb-1">Max Price</p>
                        <Input
                          type="number"
                          placeholder="Max"
                          value={priceRange[1] || ''}
                          onChange={(e) => setPriceRange([priceRange[0], e.target.value ? parseInt(e.target.value) : null])}
                          className="w-32 border-slate-200"
                        />
                      </div>
                    </div>
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
                    className="border-slate-200 text-slate-600 hover:bg-slate-100"
                  >
                    Reset Filters
                  </Button>
                </div>
              </CollapsibleContent>
            </Collapsible>
          </div>
        </div>

        <div className="bg-white p-8 rounded-xl shadow-md">
          {filteredProducts.length === 0 ? (
            <div className="text-center py-16">
              <h3 className="text-2xl font-bold text-indigo-900 mb-4">No Guitars Found</h3>
              <p className="text-slate-600">Try adjusting your search criteria to find the perfect instrument.</p>
            </div>
          ) : (
            <>
              <div className="text-right mb-4">
                <p className="text-slate-500">{filteredProducts.length} instruments found</p>
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
