import  { useState } from 'react';
import { X } from 'lucide-react';
import { CartItem, Address, PaymentDetails, CheckoutStep } from '../types';
import Cart from './Cart';
import AddressForm from './AddressForm';
import PaymentForm from './PaymentForm';
import OrderConfirmation from './OrderConfirmation';

interface CheckoutProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (id: number, quantity: number) => void;
  onRemoveItem: (id: number) => void;
  onOrderComplete: () => void;
}

export default function Checkout({ 
  isOpen, 
  onClose, 
  items, 
  onUpdateQuantity, 
  onRemoveItem,
  onOrderComplete 
}: CheckoutProps) {
  const [step, setStep] = useState<CheckoutStep>('cart');
  const [address, setAddress] = useState<Address>({
    fullName: '',
    streetAddress: '',
    city: '',
    state: '',
    postalCode: '',
    country: ''
  });
  const [payment, setPayment] = useState<PaymentDetails>({
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    cardholderName: ''
  });

  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleComplete = () => {
    onOrderComplete();
    setStep('cart');
    setAddress({
      fullName: '',
      streetAddress: '',
      city: '',
      state: '',
      postalCode: '',
      country: ''
    });
    setPayment({
      cardNumber: '',
      expiryDate: '',
      cvv: '',
      cardholderName: ''
    });
  };

  if (!isOpen) return null;

  const renderStep = () => {
    switch (step) {
      case 'cart':
        return (
          <Cart
            items={items}
            onUpdateQuantity={onUpdateQuantity}
            onRemoveItem={onRemoveItem}
            onCheckout={() => setStep('address')}
          />
        );
      case 'address':
        return (
          <AddressForm
            address={address}
            onChange={setAddress}
            onNext={() => setStep('payment')}
            onBack={() => setStep('cart')}
          />
        );
      case 'payment':
        return (
          <PaymentForm
            payment={payment}
            onChange={setPayment}
            onNext={() => setStep('confirmation')}
            onBack={() => setStep('address')}
          />
        );
      case 'confirmation':
        return (
          <OrderConfirmation
            orderNumber={Math.random().toString(36).substr(2, 9).toUpperCase()}
            address={address}
            total={total}
            onClose={handleComplete}
          />
        );
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      <div className="absolute inset-0 bg-black bg-opacity-50" onClick={onClose} />
      <div className="absolute right-0 top-0 bottom-0 w-full max-w-md bg-white shadow-xl">
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between p-4 border-b">
            <h2 className="text-lg font-semibold">
              {step === 'cart' && 'Shopping Cart'}
              {step === 'address' && 'Shipping Address'}
              {step === 'payment' && 'Payment Details'}
              {step === 'confirmation' && 'Order Confirmed'}
            </h2>
            <button onClick={onClose} className="p-2 hover:text-indigo-600">
              <X className="h-6 w-6" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-4">
            {renderStep()}
          </div>
        </div>
      </div>
    </div>
  );
}