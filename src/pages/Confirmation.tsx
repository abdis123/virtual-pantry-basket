import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { CheckCircle } from 'lucide-react';

export default function Confirmation() {
  return (
    <div className='container mx-auto max-w-2xl py-20 px-4 text-center'>
      <CheckCircle className='w-24 h-24 text-green-500 mx-auto mb-6' />
      <h1 className='text-4xl font-bold mb-4'>Order Confirmed!</h1>
      <p className='text-lg text-gray-600 mb-8'>
        Thank you for your purchase. Your order is being processed and you will receive a confirmation shortly.
      </p>
      <Button asChild>
        <Link to='/'>Continue Shopping</Link>
      </Button>
    </div>
  );
}