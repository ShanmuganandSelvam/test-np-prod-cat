import { useState, useEffect } from 'react';
import { ProductsHeader } from './ProductsHeader';
import { ProductFilters } from './ProductFilters';
import { ProductsList } from './ProductsList';
import { products, categories } from '../data/products';
import { Product } from '../types/product';
import { bayerSansClasses } from '../lib/bayer-sans';

export const ProductsPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 2000]);
  const [sortBy, setSortBy] = useState('featured');
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(products);
  const [loading, setLoading] = useState(true);
  const [cart, setCart] = useState<Product[]>([]);
  const [wishlist, setWishlist] = useState<Product[]>([]);
  
  // Calculate max price for filter
  const maxPrice = Math.max(...products.map(product => product.price));
  
  // Filter and sort products
  useEffect(() => {
    setLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      let result = [...products];
      
      // Apply search filter
      if (searchQuery) {
        const query = searchQuery.toLowerCase();
        result = result.filter(product => 
          product.name.toLowerCase().includes(query) || 
          product.description.toLowerCase().includes(query) ||
          (product.tags && product.tags.some(tag => tag.toLowerCase().includes(query)))
        );
      }
      
      // Apply category filter
      if (selectedCategory) {
        result = result.filter(product => product.category === selectedCategory);
      }
      
      // Apply price range filter
      result = result.filter(product => 
        product.price >= priceRange[0] && product.price <= priceRange[1]
      );
      
      // Apply sorting
      switch (sortBy) {
        case 'price-asc':
          result.sort((a, b) => a.price - b.price);
          break;
        case 'price-desc':
          result.sort((a, b) => b.price - a.price);
          break;
        case 'rating-desc':
          result.sort((a, b) => b.rating - a.rating);
          break;
        case 'newest':
          // In a real app, we'd sort by date
          result.sort((a, b) => Number(b.id) - Number(a.id));
          break;
        case 'featured':
        default:
          result.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
          break;
      }
      
      setFilteredProducts(result);
      setLoading(false);
    }, 500);
  }, [searchQuery, selectedCategory, priceRange, sortBy]);
  
  const handleAddToCart = (product: Product) => {
    setCart(prev => [...prev, product]);
  };
  
  const handleAddToWishlist = (product: Product) => {
    setWishlist(prev => {
      // Check if product is already in wishlist
      const exists = prev.some(item => item.id === product.id);
      if (exists) {
        return prev.filter(item => item.id !== product.id);
      } else {
        return [...prev, product];
      }
    });
  };
  
  const resetFilters = () => {
    setSearchQuery('');
    setSelectedCategory(null);
    setPriceRange([0, maxPrice]);
    setSortBy('featured');
  };
  
  return (
    <div className="min-h-screen bg-gray-50">
      <ProductsHeader
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        cartCount={cart.length}
        wishlistCount={wishlist.length}
        onCartClick={() => alert('Cart clicked')}
        onWishlistClick={() => alert('Wishlist clicked')}
      />
      
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className={bayerSansClasses.heading.h4}>
            {loading ? 'Loading products...' : `${filteredProducts.length} Products`}
          </h2>
          
          <div className="text-sm text-gray-500">
            {selectedCategory ? `Category: ${selectedCategory}` : 'All Categories'}
            {searchQuery && ` • Search: "${searchQuery}"`}
          </div>
        </div>
        
        <ProductFilters
          categories={categories}
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
          priceRange={priceRange}
          onPriceRangeChange={setPriceRange}
          maxPrice={maxPrice}
          onSortChange={setSortBy}
          currentSort={sortBy}
          onFilterReset={resetFilters}
        />
        
        <ProductsList
          products={filteredProducts}
          onAddToCart={handleAddToCart}
          onAddToWishlist={handleAddToWishlist}
          loading={loading}
        />
      </div>
    </div>
  );
};
