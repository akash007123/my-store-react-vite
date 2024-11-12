import { CheckCircle } from 'lucide-react';
import { Address } from '../types';

interface OrderConfirmationProps {
  orderNumber: string;
  address: Address;
  total: number;
  onClose: () => void;
}

export default function OrderConfirmation({ orderNumber, address, total, onClose }: OrderConfirmationProps) {
  return (
    <div className="text-center">
      <div className="flex justify-center mb-6">
        <CheckCircle className="h-16 w-16 text-green-500" />
      </div>
      
      <h2 className="text-2xl font-semibold mb-2">Order Confirmed!</h2>
      <p className="text-gray-600 mb-6">Order #{orderNumber}</p>

      <div className="bg-gray-50 p-4 rounded-lg mb-6 text-left">
        <h3 className="font-semibold mb-2">Shipping Address:</h3>
        <p className="text-gray-600">
          {address.fullName}<br />
          {address.streetAddress}<br />
          {address.city}, {address.state} {address.postalCode}<br />
          {address.country}
        </p>
      </div>

      <div className="mb-6">
        <p className="text-lg">
          Total Paid: <span className="font-bold text-indigo-600">${total.toFixed(2)}</span>
        </p>
      </div>

      <button
        onClick={onClose}
        className="bg-indigo-600 text-white px-6 py-2 rounded-md hover:bg-indigo-700 transition-colors"
      >
        Continue Shopping
      </button>
    </div>
  );
}