import { Star, ShoppingCart, Heart } from 'lucide-react';
import { Product } from '../types/product';
import { bayerSansClasses } from '../lib/bayer-sans';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
  onAddToWishlist: (product: Product) => void;
}

export const ProductCard = ({ product, onAddToCart, onAddToWishlist }: ProductCardProps) => {
  const { name, price, image, rating, discount, featured, stock } = product;
  
  const discountedPrice = discount ? price * (1 - discount / 100) : price;
  
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col h-full">
      <div className="relative">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-48 object-cover"
        />
        
        {/* Badges */}
        <div className="absolute top-2 left-2 flex flex-col gap-2">
          {featured && (
            <span className="bg-primary-500 text-white text-xs font-medium px-2 py-1 rounded">
              Featured
            </span>
          )}
          {discount && (
            <span className="bg-danger-500 text-white text-xs font-medium px-2 py-1 rounded">
              {discount}% OFF
            </span>
          )}
          {stock < 10 && (
            <span className="bg-amber-500 text-white text-xs font-medium px-2 py-1 rounded">
              Low Stock
            </span>
          )}
        </div>
        
        {/* Wishlist button */}
        <button 
          onClick={() => onAddToWishlist(product)}
          className="absolute top-2 right-2 bg-white rounded-full p-1.5 shadow-sm hover:bg-gray-100"
          aria-label="Add to wishlist"
        >
          <Heart size={18} className="text-gray-600" />
        </button>
      </div>
      
      <div className="p-4 flex flex-col flex-grow">
        <div className="flex items-center mb-1">
          <div className="flex items-center">
            <Star size={16} className="text-amber-400 fill-amber-400" />
            <span className="ml-1 text-sm font-medium">{rating}</span>
          </div>
          <span className="mx-2 text-gray-300">•</span>
          <span className="text-xs text-gray-500">{stock} in stock</span>
        </div>
        
        <h3 className={`${bayerSansClasses.heading.h6} mb-1 line-clamp-1`}>{name}</h3>
        
        <div className="mt-auto pt-3">
          <div className="flex items-baseline mb-2">
            <span className={`${bayerSansClasses.weights.bold} text-lg`}>
              ${discountedPrice.toFixed(2)}
            </span>
            
            {discount && (
              <span className="ml-2 text-sm text-gray-500 line-through">
                ${price.toFixed(2)}
              </span>
            )}
          </div>
          
          <button
            onClick={() => onAddToCart(product)}
            className="w-full flex items-center justify-center gap-2 bg-primary-500 hover:bg-primary-600 text-white py-2 px-4 rounded-md transition-colors"
          >
            <ShoppingCart size={16} />
            <span className={bayerSansClasses.weights.medium}>Add to Cart</span>
          </button>
        </div>
      </div>
    </div>
  );
};
