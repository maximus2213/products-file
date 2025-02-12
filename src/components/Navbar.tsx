import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Search, User } from 'lucide-react';

function Navbar() {
  return (
    <nav className="bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="text-2xl font-bold">
            CapitalShop
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-600 hover:text-black">Home</Link>
            <a href="#" className="text-gray-600 hover:text-black">Shop</a>
            <a href="#" className="text-gray-600 hover:text-black">Categories</a>
            <a href="#" className="text-gray-600 hover:text-black">Contact</a>
          </div>

          <div className="flex items-center space-x-4">
            <button className="text-gray-600 hover:text-black">
              <Search className="w-6 h-6" />
            </button>
            <button className="text-gray-600 hover:text-black">
              <User className="w-6 h-6" />
            </button>
            <button className="text-gray-600 hover:text-black">
              <ShoppingBag className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;