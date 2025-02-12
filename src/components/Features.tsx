import React from 'react';
import { features } from '../data';
import * as LucideIcons from 'lucide-react';

function Features() {
  return (
    <section className="container mx-auto px-4 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature) => {
          const Icon = LucideIcons[feature.icon as keyof typeof LucideIcons];
          
          return (
            <div 
              key={feature.id} 
              className="group p-8 rounded-xl bg-white hover:bg-black transition-all duration-500 transform hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="text-center">
                {Icon && (
                  <div className="mb-6 relative">
                    <div className="w-20 h-20 mx-auto bg-gray-100 rounded-full flex items-center justify-center group-hover:bg-white transition-colors duration-500">
                      <Icon className="w-10 h-10 text-black group-hover:scale-110 transition-transform duration-500" />
                    </div>
                  </div>
                )}
                <h3 className="text-xl font-semibold mb-3 group-hover:text-white transition-colors duration-500">
                  {feature.title}
                </h3>
                <p className="text-gray-600 group-hover:text-gray-300 transition-colors duration-500">
                  {feature.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Features;