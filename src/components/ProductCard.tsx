import { Button } from './ui/button';
import { useCart } from '../contexts/CartContext';

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
}

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart();

  return (
    <div className='border rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white'>
      <img src={product.image} alt={product.name} className='w-full h-48 object-cover' />
      <div className='p-4'>
        <h3 className='text-lg font-semibold'>{product.name}</h3>
        <p className='text-gray-600 mt-1'>ETB {product.price.toFixed(2)}</p>
        <Button className='w-full mt-4' onClick={() => addToCart(product)}>
          Add to Cart
        </Button>
      </div>
    </div>
  );
}