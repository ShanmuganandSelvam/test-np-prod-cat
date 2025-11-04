import { useState } from 'react';
import { Filter, X, ChevronDown, ChevronUp } from 'lucide-react';
import { bayerSansClasses } from '../lib/bayer-sans';

interface ProductFiltersProps {
  categories: string[];
  selectedCategory: string | null;
  onCategoryChange: (category: string | null) => void;
  priceRange: [number, number];
  onPriceRangeChange: (range: [number, number]) => void;
  maxPrice: number;
  onSortChange: (sort: string) => void;
  currentSort: string;
  onFilterReset: () => void;
}

export const ProductFilters = ({
  categories,
  selectedCategory,
  onCategoryChange,
  priceRange,
  onPriceRangeChange,
  maxPrice,
  onSortChange,
  currentSort,
  onFilterReset
}: ProductFiltersProps) => {
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);
  const [minPrice, maxPriceValue] = priceRange;
  
  const handleMinPriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    onPriceRangeChange([value, maxPriceValue]);
  };
  
  const handleMaxPriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    onPriceRangeChange([minPrice, value]);
  };
  
  const sortOptions = [
    { value: 'featured', label: 'Featured' },
    { value: 'price-asc', label: 'Price: Low to High' },
    { value: 'price-desc', label: 'Price: High to Low' },
    { value: 'rating-desc', label: 'Highest Rated' },
    { value: 'newest', label: 'Newest' }
  ];
  
  const toggleFilters = () => {
    setIsFiltersOpen(!isFiltersOpen);
  };
  
  return (
    <div className="bg-white rounded-lg shadow-sm border mb-6">
      {/* Mobile filter toggle */}
      <div className="md:hidden p-4 border-b">
        <button
          onClick={toggleFilters}
          className="flex items-center justify-between w-full"
        >
          <div className="flex items-center gap-2">
            <Filter size={18} />
            <span className={bayerSansClasses.weights.medium}>Filters</span>
          </div>
          {isFiltersOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
        </button>
      </div>
      
      <div className={`${isFiltersOpen ? 'block' : 'hidden'} md:block md:flex`}>
        {/* Categories */}
        <div className="p-4 border-b md:border-b-0 md:border-r md:w-1/4">
          <h3 className={`${bayerSansClasses.weights.bold} mb-3`}>Categories</h3>
          <div className="space-y-2">
            <div className="flex items-center">
              <input
                type="radio"
                id="category-all"
                name="category"
                checked={selectedCategory === null}
                onChange={() => onCategoryChange(null)}
                className="mr-2"
              />
              <label htmlFor="category-all" className="text-sm cursor-pointer">All Categories</label>
            </div>
            
            {categories.map(category => (
              <div key={category} className="flex items-center">
                <input
                  type="radio"
                  id={`category-${category}`}
                  name="category"
                  checked={selectedCategory === category}
                  onChange={() => onCategoryChange(category)}
                  className="mr-2"
                />
                <label htmlFor={`category-${category}`} className="text-sm cursor-pointer">{category}</label>
              </div>
            ))}
          </div>
        </div>
        
        {/* Price Range */}
        <div className="p-4 border-b md:border-b-0 md:border-r md:w-1/4">
          <h3 className={`${bayerSansClasses.weights.bold} mb-3`}>Price Range</h3>
          <div className="space-y-4">
            <div>
              <label className="text-sm text-gray-600 block mb-1">Min Price</label>
              <div className="flex items-center">
                <span className="text-gray-500 mr-1">$</span>
                <input
                  type="number"
                  value={minPrice}
                  onChange={handleMinPriceChange}
                  min={0}
                  max={maxPriceValue}
                  className="border rounded px-2 py-1 w-full"
                />
              </div>
            </div>
            
            <div>
              <label className="text-sm text-gray-600 block mb-1">Max Price</label>
              <div className="flex items-center">
                <span className="text-gray-500 mr-1">$</span>
                <input
                  type="number"
                  value={maxPriceValue}
                  onChange={handleMaxPriceChange}
                  min={minPrice}
                  max={maxPrice}
                  className="border rounded px-2 py-1 w-full"
                />
              </div>
            </div>
            
            <div className="pt-2">
              <input
                type="range"
                min={0}
                max={maxPrice}
                value={maxPriceValue}
                onChange={handleMaxPriceChange}
                className="w-full"
              />
              <div className="flex justify-between text-xs text-gray-500">
                <span>$0</span>
                <span>${maxPrice}</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Sort */}
        <div className="p-4 md:w-1/4">
          <h3 className={`${bayerSansClasses.weights.bold} mb-3`}>Sort By</h3>
          <select
            value={currentSort}
            onChange={(e) => onSortChange(e.target.value)}
            className="w-full border rounded px-2 py-1.5"
          >
            {sortOptions.map(option => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
        
        {/* Reset Filters */}
        <div className="p-4 border-t md:border-t-0 md:border-l md:w-1/4 flex items-center justify-center">
          <button
            onClick={onFilterReset}
            className="flex items-center gap-2 text-gray-600 hover:text-danger-600 transition-colors"
          >
            <X size={16} />
            <span className={bayerSansClasses.weights.medium}>Reset Filters</span>
          </button>
        </div>
      </div>
    </div>
  );
};
