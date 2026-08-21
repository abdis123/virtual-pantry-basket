import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../contexts/CartContext';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { toast } from 'sonner';

export default function Checkout() {
  const { cartItems, getCartTotal, clearCart } = useCart();
  const navigate = useNavigate();
  const [paymentMethod, setPaymentMethod] = useState('telebirr');
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');

  const handlePayment = () => {
    if (!fullName || !phone) {
      toast.error('Please fill in your name and phone number.');
      return;
    }

    toast.loading('Processing payment...');

    // Simulate API call
    setTimeout(() => {
      toast.dismiss();
      toast.success('Payment successful!');
      clearCart();
      navigate('/confirmation');
    }, 2000);
  };

  return (
    <div className='container mx-auto max-w-4xl py-12 px-4'>
      <h1 className='text-4xl font-bold text-center mb-8'>Checkout</h1>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-12'>
        <div>
          <Card>
            <CardHeader>
              <CardTitle>Your Order</CardTitle>
            </CardHeader>
            <CardContent>
              <div className='space-y-4'>
                {cartItems.length > 0 ? (
                  cartItems.map(item => (
                    <div key={item.id} className='flex justify-between items-center'>
                      <div>
                        <p className='font-semibold'>{item.name}</p>
                        <p className='text-sm text-gray-500'>
                          {item.quantity} x ETB {item.price.toFixed(2)}
                        </p>
                      </div>
                      <p className='font-semibold'>ETB {(item.price * item.quantity).toFixed(2)}</p>
                    </div>
                  ))
                ) : (
                  <p>Your cart is empty.</p>
                )}
              </div>
              <hr className='my-4' />
              <div className='flex justify-between font-bold text-lg'>
                <p>Total</p>
                <p>ETB {getCartTotal().toFixed(2)}</p>
              </div>
            </CardContent>
          </Card>
        </div>
        <div>
          <Card>
            <CardHeader>
              <CardTitle>Payment Details</CardTitle>
            </CardHeader>
            <CardContent>
              <div className='space-y-4'>
                <div>
                  <label className='font-semibold'>Full Name</label>
                  <Input 
                    type='text' 
                    placeholder='Abebe Bikila'
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)} 
                  />
                </div>
                <div>
                  <label className='font-semibold'>Phone Number</label>
                  <Input 
                    type='tel' 
                    placeholder='+2519...' 
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>
                <div>
                  <label className='font-semibold mb-2 block'>Payment Method</label>
                  <div className='flex space-x-4'>
                    <div 
                      onClick={() => setPaymentMethod('telebirr')}
                      className={`flex items-center space-x-2 border rounded-lg p-3 cursor-pointer flex-1 ${paymentMethod === 'telebirr' ? 'border-blue-500 ring-2 ring-blue-500' : ''}`}>
                      <img src='https://storage.googleapis.com/dala-prod-public-storage/generated-images/7c54f1e6-e19c-4304-8f32-640e540ae37a/telebirr-logo-h8chab6-1763992465668.webp' alt='Telebirr' className='w-12 h-8 object-contain' />
                      <span className='font-semibold'>Telebirr</span>
                    </div>
                    <div 
                      onClick={() => setPaymentMethod('cbe')}
                      className={`flex items-center space-x-2 border rounded-lg p-3 cursor-pointer flex-1 ${paymentMethod === 'cbe' ? 'border-blue-500 ring-2 ring-blue-500' : ''}`}>
                      <img src='https://storage.googleapis.com/dala-prod-public-storage/generated-images/7c54f1e6-e19c-4304-8f32-640e540ae37a/cbe-logo-b5tvijh-1763992475385.webp' alt='CBE' className='w-12 h-8 object-contain' />
                      <span className='font-semibold'>CBE</span>
                    </div>
                  </div>
                </div>
                <Button onClick={handlePayment} className='w-full' disabled={cartItems.length === 0}>
                  Pay ETB {getCartTotal().toFixed(2)}
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}