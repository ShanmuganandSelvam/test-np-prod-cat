import { useState } from 'react';
import { ProductCard } from './ProductCard';
import { Product } from '../types/product';
import { bayerSansClasses } from '../lib/bayer-sans';

interface ProductsListProps {
  products: Product[];
  onAddToCart: (product: Product) => void;
  onAddToWishlist: (product: Product) => void;
  loading?: boolean;
}

export const ProductsList = ({ 
  products, 
  onAddToCart, 
  onAddToWishlist,
  loading = false 
}: ProductsListProps) => {
  const [visibleProducts, setVisibleProducts] = useState(8);
  
  const loadMore = () => {
    setVisibleProducts(prev => prev + 4);
  };
  
  if (loading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {Array.from({ length: 8 }).map((_, index) => (
          <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md h-full">
            <div className="h-48 bg-gray-200 animate-pulse"></div>
            <div className="p-4">
              <div className="h-4 bg-gray-200 rounded animate-pulse mb-2"></div>
              <div className="h-6 bg-gray-200 rounded animate-pulse mb-4"></div>
              <div className="h-4 bg-gray-200 rounded animate-pulse mb-2 w-1/2"></div>
              <div className="h-10 bg-gray-200 rounded animate-pulse mt-4"></div>
            </div>
          </div>
        ))}
      </div>
    );
  }
  
  if (products.length === 0) {
    return (
      <div className="text-center py-12">
        <h3 className={`${bayerSansClasses.heading.h4} mb-2`}>No products found</h3>
        <p className="text-gray-500">Try adjusting your filters or search query.</p>
      </div>
    );
  }
  
  const displayedProducts = products.slice(0, visibleProducts);
  
  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {displayedProducts.map(product => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={onAddToCart}
            onAddToWishlist={onAddToWishlist}
          />
        ))}
      </div>
      
      {visibleProducts < products.length && (
        <div className="mt-8 text-center">
          <button
            onClick={loadMore}
            className="bg-white border border-primary-500 text-primary-600 hover:bg-primary-50 px-6 py-2 rounded-md transition-colors"
          >
            Load More Products
          </button>
        </div>
      )}
    </div>
  );
};
