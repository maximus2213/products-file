import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { CheckCircle, Package, Truck, Calendar } from 'lucide-react';

function ThankYou() {
  const location = useLocation();
  const { product, selectedSize, selectedColor } = location.state || {};

  return (
    <div className="min-h-[80vh] bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-sm p-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-6">
              <CheckCircle className="w-12 h-12 text-green-500" />
            </div>
            <h1 className="text-4xl font-bold mb-4">Thank You for Your Purchase!</h1>
            <p className="text-gray-600 text-lg">Your order has been confirmed and will be shipped soon.</p>
          </div>

          {product && (
            <div className="border rounded-xl p-6 mb-8">
              <div className="flex items-center space-x-6">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-32 h-32 object-cover rounded-lg"
                />
                <div>
                  <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                  <p className="text-gray-600 mb-4">{product.description}</p>
                  <div className="flex space-x-4 text-sm text-gray-500">
                    <span>Size: {selectedSize}</span>
                    <span>Color: {selectedColor}</span>
                    <span>Price: ${product.price}</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="p-4 rounded-xl bg-gray-50">
              <Package className="w-8 h-8 text-gray-700 mb-3" />
              <h3 className="font-semibold mb-1">Order Processing</h3>
              <p className="text-sm text-gray-600">Your order is being prepared</p>
            </div>
            <div className="p-4 rounded-xl bg-gray-50">
              <Truck className="w-8 h-8 text-gray-700 mb-3" />
              <h3 className="font-semibold mb-1">Estimated Delivery</h3>
              <p className="text-sm text-gray-600">3-5 business days</p>
            </div>
            <div className="p-4 rounded-xl bg-gray-50">
              <Calendar className="w-8 h-8 text-gray-700 mb-3" />
              <h3 className="font-semibold mb-1">Order Date</h3>
              <p className="text-sm text-gray-600">{new Date().toLocaleDateString()}</p>
            </div>
          </div>

          <div className="text-center">
            <Link
              to="/"
              className="inline-flex items-center justify-center space-x-2 bg-black text-white px-8 py-4 rounded-lg hover:bg-gray-900 transition-colors duration-300"
            >
              <span>Continue Shopping</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ThankYou;