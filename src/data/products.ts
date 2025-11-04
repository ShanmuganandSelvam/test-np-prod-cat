import { Product } from '../types/product';

export const products: Product[] = [
  {
    id: '1',
    name: 'Premium Wireless Headphones',
    description: 'Noise-cancelling over-ear headphones with premium sound quality and 30-hour battery life.',
    price: 299.99,
    category: 'Electronics',
    image: 'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    rating: 4.8,
    stock: 45,
    featured: true,
    tags: ['wireless', 'audio', 'noise-cancelling']
  },
  {
    id: '2',
    name: 'Ultra-Slim Laptop',
    description: 'Powerful 14-inch laptop with 16GB RAM, 512GB SSD, and all-day battery life.',
    price: 1299.99,
    category: 'Electronics',
    image: 'https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    rating: 4.7,
    stock: 12,
    featured: true,
    tags: ['laptop', 'ultrabook', 'portable']
  },
  {
    id: '3',
    name: 'Smart Fitness Watch',
    description: 'Track your workouts, heart rate, sleep, and more with this waterproof smart watch.',
    price: 199.99,
    category: 'Wearables',
    image: 'https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    rating: 4.5,
    stock: 78,
    discount: 15,
    tags: ['fitness', 'smartwatch', 'health']
  },
  {
    id: '4',
    name: 'Professional Camera Kit',
    description: 'DSLR camera with 24.1MP sensor, 4K video recording, and two premium lenses.',
    price: 1499.99,
    category: 'Photography',
    image: 'https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    rating: 4.9,
    stock: 5,
    featured: true,
    tags: ['camera', 'photography', 'professional']
  },
  {
    id: '5',
    name: 'Wireless Earbuds',
    description: 'True wireless earbuds with active noise cancellation and 24-hour battery life with case.',
    price: 149.99,
    category: 'Electronics',
    image: 'https://images.pexels.com/photos/3780681/pexels-photo-3780681.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    rating: 4.6,
    stock: 120,
    discount: 10,
    tags: ['wireless', 'audio', 'earbuds']
  },
  {
    id: '6',
    name: 'Smart Home Speaker',
    description: 'Voice-controlled smart speaker with premium sound and home automation features.',
    price: 129.99,
    category: 'Smart Home',
    image: 'https://images.pexels.com/photos/6039243/pexels-photo-6039243.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    rating: 4.4,
    stock: 35,
    tags: ['smart home', 'speaker', 'voice assistant']
  },
  {
    id: '7',
    name: 'Gaming Console',
    description: 'Next-generation gaming console with 1TB storage, 4K gaming, and exclusive titles.',
    price: 499.99,
    category: 'Gaming',
    image: 'https://images.pexels.com/photos/275033/pexels-photo-275033.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    rating: 4.9,
    stock: 8,
    featured: true,
    tags: ['gaming', 'console', 'entertainment']
  },
  {
    id: '8',
    name: 'Ergonomic Office Chair',
    description: 'Adjustable office chair with lumbar support, breathable mesh, and premium comfort.',
    price: 349.99,
    category: 'Furniture',
    image: 'https://images.pexels.com/photos/1957477/pexels-photo-1957477.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    rating: 4.7,
    stock: 22,
    tags: ['office', 'furniture', 'ergonomic']
  },
  {
    id: '9',
    name: 'Portable Bluetooth Speaker',
    description: 'Waterproof, rugged Bluetooth speaker with 20-hour battery life and powerful sound.',
    price: 89.99,
    category: 'Electronics',
    image: 'https://images.pexels.com/photos/1279107/pexels-photo-1279107.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    rating: 4.5,
    stock: 65,
    discount: 20,
    tags: ['bluetooth', 'speaker', 'portable']
  },
  {
    id: '10',
    name: 'Smart 4K TV',
    description: '55-inch 4K Ultra HD smart TV with HDR, voice control, and streaming apps built-in.',
    price: 799.99,
    category: 'Electronics',
    image: 'https://images.pexels.com/photos/6976094/pexels-photo-6976094.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    rating: 4.8,
    stock: 15,
    featured: true,
    tags: ['tv', '4k', 'smart tv']
  },
  {
    id: '11',
    name: 'Mechanical Keyboard',
    description: 'RGB mechanical gaming keyboard with customizable keys and premium switches.',
    price: 129.99,
    category: 'Computer Accessories',
    image: 'https://images.pexels.com/photos/1772123/pexels-photo-1772123.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    rating: 4.6,
    stock: 42,
    tags: ['keyboard', 'gaming', 'mechanical']
  },
  {
    id: '12',
    name: 'Wireless Gaming Mouse',
    description: 'Ultra-responsive wireless gaming mouse with 25,000 DPI and customizable buttons.',
    price: 79.99,
    category: 'Computer Accessories',
    image: 'https://images.pexels.com/photos/2115257/pexels-photo-2115257.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    rating: 4.7,
    stock: 38,
    discount: 5,
    tags: ['mouse', 'gaming', 'wireless']
  }
];

export const categories = Array.from(new Set(products.map(product => product.category)));
