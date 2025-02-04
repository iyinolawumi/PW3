import React from 'react';
import { X } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function Cart() {
  const { cart, removeFromCart, updateQuantity, total } = useCart();

  if (cart.length === 0) {
    return (
      <div className="p-4">
        <p className="text-gray-500 text-center">Your cart is empty</p>
      </div>
    );
  }

  return (
    <div className="p-4">
      {cart.map(item => (
        <div
          key={item.product.id}
          className="flex items-center justify-between py-4 border-b"
        >
          <div className="flex items-center">
            <img
              src={item.product.image}
              alt={item.product.name}
              className="w-16 h-16 object-cover rounded"
            />
            <div className="ml-4">
              <h3 className="text-sm font-medium">{item.product.name}</h3>
              <p className="text-sm text-gray-500">${item.product.price}</p>
            </div>
          </div>
          <div className="flex items-center">
            <input
              type="number"
              min="1"
              value={item.quantity}
              onChange={(e) =>
                updateQuantity(item.product.id, parseInt(e.target.value))
              }
              className="w-16 px-2 py-1 border rounded"
            />
            <button
              onClick={() => removeFromCart(item.product.id)}
              className="ml-4 text-gray-400 hover:text-gray-500"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>
      ))}
      <div className="mt-4">
        <div className="flex justify-between text-lg font-medium">
          <span>Total</span>
          <span>${total.toFixed(2)}</span>
        </div>
        <button className="w-full mt-4 bg-purple-600 text-white py-2 px-4 rounded-md hover:bg-purple-700 transition-colors">
          Checkout
        </button>
      </div>
    </div>
  );
}