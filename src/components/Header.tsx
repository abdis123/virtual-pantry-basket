import { Link } from 'react-router-dom';
import { ShoppingCart } from 'lucide-react';
import { Button } from './ui/button';
import { useCart } from '../contexts/CartContext';

export default function Header() {
  const { cartItems } = useCart();
  const itemCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header className='fixed top-0 left-0 right-0 z-50 bg-white shadow-md'>
      <nav className='container mx-auto px-4 py-4 flex justify-between items-center'>
        <Link to='/' className='text-2xl font-bold text-gray-800'>
          SokoFresh
        </Link>
        <div className='hidden md:flex items-center space-x-6'>
          <Link to='/products/fruits' className='text-gray-600 hover:text-gray-800'>Fruits</Link>
          <Link to='/products/vegetables' className='text-gray-600 hover:text-gray-800'>Vegetables</Link>
          <Link to='/products/dairy' className='text-gray-600 hover:text-gray-800'>Dairy</Link>
          <Link to='/products/bakery' className='text-gray-600 hover:text-gray-800'>Bakery</Link>
        </div>
        <div className='flex items-center space-x-4'>
            <Link to='/checkout'>
                <Button variant='ghost' size='icon'>
                    <ShoppingCart className='h-6 w-6' />
                    {itemCount > 0 && (
                    <span className='absolute top-2 right-2 transform translate-x-1/2 -translate-y-1/2 bg-red-500 text-white rounded-full h-5 w-5 text-xs flex items-center justify-center'>
                        {itemCount}
                    </span>
                    )}
                </Button>
            </Link>
        </div>
      </nav>
    </header>
  );
}