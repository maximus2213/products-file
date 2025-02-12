import { Product, Testimonial, Feature } from './types';

export const products: Product[] = [
  {
    id: 1,
    name: "Men's Classic White Shirt",
    price: 49.99,
    image: "https://images.unsplash.com/photo-1620012253295-c15cc3e65df4?w=500&auto=format",
    description: "Classic white cotton shirt perfect for any occasion. Features a regular fit and comfortable fabric.",
    category: "Shirts",
    sizes: ["S", "M", "L", "XL"],
    colors: ["White", "Blue", "Black"],
    details: {
      material: "100% Premium Cotton",
      fit: "Regular Fit",
      care: "Machine washable, Tumble dry low",
      features: [
        "Breathable fabric",
        "Wrinkle-resistant",
        "Classic collar",
        "Button closure",
        "Chest pocket"
      ],
      shipping: "Free shipping worldwide",
      returns: "30-day return policy"
    }
  },
  {
    id: 2,
    name: "Women's Denim Jacket",
    price: 79.99,
    image: "https://images.unsplash.com/photo-1544642899-f0d6e5f6ed6f?w=500&auto=format",
    description: "Stylish denim jacket with a modern cut and premium quality material. Perfect for layering in any season.",
    category: "Jackets",
    sizes: ["XS", "S", "M", "L"],
    colors: ["Blue", "Black"],
    details: {
      material: "Premium Denim",
      fit: "Slim Fit",
      care: "Machine wash cold, Line dry",
      features: [
        "Button-up front",
        "Multiple pockets",
        "Adjustable waist tabs",
        "Distressed details",
        "Reinforced stitching"
      ],
      shipping: "Free shipping worldwide",
      returns: "30-day return policy"
    }
  },
  {
    id: 3,
    name: "Casual Sneakers",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=500&auto=format",
    description: "Comfortable and stylish sneakers perfect for everyday wear. Features cushioned soles and breathable design.",
    category: "Shoes",
    sizes: ["40", "41", "42", "43", "44"],
    colors: ["White", "Black", "Gray"],
    details: {
      material: "Premium Leather & Mesh",
      fit: "True to Size",
      care: "Wipe clean with damp cloth",
      features: [
        "Memory foam insole",
        "Breathable mesh upper",
        "Non-slip rubber sole",
        "Padded collar",
        "Reinforced heel support"
      ],
      shipping: "Free shipping worldwide",
      returns: "30-day return policy"
    }
  },
  {
    id: 4,
    name: "Leather Backpack",
    price: 129.99,
    image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=500&auto=format",
    description: "Premium leather backpack with multiple compartments and laptop sleeve. Perfect for work or travel.",
    category: "Accessories",
    sizes: ["One Size"],
    colors: ["Brown", "Black"],
    details: {
      material: "Genuine Leather",
      capacity: "20L",
      care: "Clean with leather cleaner",
      features: [
        "Padded laptop compartment (fits 15\" laptop)",
        "Water-resistant lining",
        "Multiple internal pockets",
        "Adjustable straps",
        "Top handle"
      ],
      shipping: "Free shipping worldwide",
      returns: "30-day return policy"
    }
  }
];

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Fashion Blogger",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format",
    content: "The quality of products from CapitalShop is outstanding. I've been a loyal customer for years and have never been disappointed!"
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Style Consultant",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&auto=format",
    content: "Amazing selection and excellent customer service. The attention to detail in every product is remarkable. Highly recommended!"
  },
  {
    id: 3,
    name: "Emma Williams",
    role: "Fashion Designer",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&auto=format",
    content: "The attention to detail and trendy collections make CapitalShop my go-to fashion destination. Their quality is unmatched!"
  },
  {
    id: 4,
    name: "David Thompson",
    role: "Professional Photographer",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format",
    content: "As someone who needs to look presentable for client meetings, CapitalShop has been a game-changer. Their clothes are both stylish and comfortable."
  },
  {
    id: 5,
    name: "Lisa Rodriguez",
    role: "Fashion Influencer",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format",
    content: "I love how CapitalShop stays ahead of trends while maintaining quality. Their customer service is exceptional too!"
  }
];

export const features: Feature[] = [
  {
    id: 1,
    title: "Free Worldwide Shipping",
    description: "Free shipping on all orders over $50. Fast delivery to your doorstep.",
    icon: "Truck"
  },
  {
    id: 2,
    title: "24/7 Premium Support",
    description: "Round the clock customer service to assist you with any queries.",
    icon: "HeadphonesIcon"
  },
  {
    id: 3,
    title: "Money Back Guarantee",
    description: "30-day return policy. Not satisfied? Get a full refund, no questions asked.",
    icon: "RefreshCcw"
  },
  {
    id: 4,
    title: "Secure Payments",
    description: "Protected by industry-leading encryption. Shop with confidence.",
    icon: "Shield"
  }
];