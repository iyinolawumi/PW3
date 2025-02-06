import React from 'react';
import Navbar from './components/Navbar';
import ProductGrid from './components/ProductGrid';
import Cart from './components/Cart';
import { CartProvider } from './context/CartContext';1

function App() {
  return (
    <CartProvider>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <main className="max-w-7xl mx-auto px-4 py-24">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            <div className="lg:col-span-3">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Our Collection</h2>
              <ProductGrid />
            </div>
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-md sticky top-24">
                <h2 className="text-xl font-bold text-gray-800 p-4 border-b">Shopping Cart</h2>
                <Cart />
              </div>
            </div>
          </div>
        </main>
      </div>
    </CartProvider>
  );
}

export default App;