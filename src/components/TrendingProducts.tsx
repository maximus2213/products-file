import React from 'react';
import { useNavigate } from 'react-router-dom';
import { products } from '../data';

function TrendingProducts() {
  const navigate = useNavigate();

  return (
    <section className="container mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4">Trending This Week</h2>
        <p className="text-gray-600 text-lg">Discover our most popular items</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {products.map((product) => (
          <div 
            key={product.id} 
            className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
          >
            <div className="relative overflow-hidden aspect-[4/5]">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <button
                onClick={() => navigate(`/product/${product.id}`)}
                className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-white text-black px-8 py-3 rounded-full hover:bg-black hover:text-white transition-colors duration-300 transform translate-y-full group-hover:translate-y-0"
              >
                Explore Now
              </button>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
              <p className="text-gray-600 mb-3">{product.description}</p>
              <div className="flex justify-between items-center">
                <p className="text-2xl font-bold">${product.price}</p>
                <p className="text-sm text-gray-500">{product.category}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default TrendingProducts;