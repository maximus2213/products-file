import React from 'react';
import TrendingProducts from '../components/TrendingProducts';
import Testimonials from '../components/Testimonials';
import Features from '../components/Features';

function Home() {
  return (
    <div className="space-y-16 py-8">
      <TrendingProducts />
      <Testimonials />
      <Features />
    </div>
  );
}

export default Home;