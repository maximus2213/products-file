export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
  category: string;
  sizes: string[];
  colors: string[];
  details: {
    material: string;
    fit?: string;
    capacity?: string;
    care: string;
    features: string[];
    shipping: string;
    returns: string;
  };
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  image: string;
  content: string;
}

export interface Feature {
  id: number;
  title: string;
  description: string;
  icon: string;
}