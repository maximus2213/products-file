import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { products } from '../data';
import { Check, ShoppingBag, Truck, RefreshCcw } from 'lucide-react';

function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = products.find(p => p.id === Number(id));
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState('');

  if (!product) {
    return <div>Product not found</div>;
  }

  const handleBuyNow = () => {
    navigate('/thank-you', { 
      state: { 
        product,
        selectedSize,
        selectedColor
      }
    });
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="grid md:grid-cols-2 gap-12">
        <div className="space-y-6">
          <div className="aspect-[4/5] rounded-2xl overflow-hidden">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
          
          <div className="grid grid-cols-3 gap-4">
            <div className="aspect-square rounded-lg overflow-hidden">
              <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
            </div>
            <div className="aspect-square rounded-lg overflow-hidden">
              <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
            </div>
            <div className="aspect-square rounded-lg overflow-hidden">
              <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
            </div>
          </div>
        </div>

        <div className="space-y-8">
          <div>
            <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
            <p className="text-3xl font-semibold text-gray-900 mb-6">${product.price}</p>
            <p className="text-gray-600 text-lg leading-relaxed">{product.description}</p>
          </div>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-4">Size</h3>
              <div className="grid grid-cols-4 gap-3">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    className={`py-3 px-4 text-sm font-medium rounded-lg border-2 transition-all duration-300 ${
                      selectedSize === size
                        ? 'border-black bg-black text-white'
                        : 'border-gray-200 hover:border-black'
                    }`}
                    onClick={() => setSelectedSize(size)}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-4">Color</h3>
              <div className="grid grid-cols-4 gap-3">
                {product.colors.map((color) => (
                  <button
                    key={color}
                    className={`py-3 px-4 text-sm font-medium rounded-lg border-2 transition-all duration-300 ${
                      selectedColor === color
                        ? 'border-black bg-black text-white'
                        : 'border-gray-200 hover:border-black'
                    }`}
                    onClick={() => setSelectedColor(color)}
                  >
                    {color}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <button
            onClick={handleBuyNow}
            className="w-full bg-black text-white py-4 px-8 rounded-lg hover:bg-gray-900 transition-colors duration-300 flex items-center justify-center space-x-2 text-lg font-medium"
          >
            <ShoppingBag className="w-5 h-5" />
            <span>Buy Now</span>
          </button>

          <div className="grid grid-cols-3 gap-4 py-6 border-y border-gray-200">
            <div className="text-center">
              <Truck className="w-6 h-6 mx-auto mb-2" />
              <p className="text-sm">Free Shipping</p>
            </div>
            <div className="text-center">
              <RefreshCcw className="w-6 h-6 mx-auto mb-2" />
              <p className="text-sm">30-Day Returns</p>
            </div>
            <div className="text-center">
              <Check className="w-6 h-6 mx-auto mb-2" />
              <p className="text-sm">Secure Checkout</p>
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium mb-3">Product Details</h3>
              <div className="space-y-4">
                <div className="flex justify-between py-2 border-b">
                  <span className="text-gray-600">Material</span>
                  <span className="font-medium">{product.details.material}</span>
                </div>
                {product.details.fit && (
                  <div className="flex justify-between py-2 border-b">
                    <span className="text-gray-600">Fit</span>
                    <span className="font-medium">{product.details.fit}</span>
                  </div>
                )}
                {product.details.capacity && (
                  <div className="flex justify-between py-2 border-b">
                    <span className="text-gray-600">Capacity</span>
                    <span className="font-medium">{product.details.capacity}</span>
                  </div>
                )}
                <div className="flex justify-between py-2 border-b">
                  <span className="text-gray-600">Care</span>
                  <span className="font-medium">{product.details.care}</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-3">Features</h3>
              <ul className="list-disc list-inside space-y-2">
                {product.details.features.map((feature, index) => (
                  <li key={index} className="text-gray-600">{feature}</li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-3">Shipping & Returns</h3>
              <p className="text-gray-600 mb-2">{product.details.shipping}</p>
              <p className="text-gray-600">{product.details.returns}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;