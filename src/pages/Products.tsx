import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Star, ShoppingCart, Eye } from 'lucide-react';
import Header from '@/components/Header';

const Products = () => {
  const products = [
    {
      id: 1,
      name: "Digital Business Card - Basic",
      price: "₹2,000",
      image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=300&h=200&fit=crop",
      rating: 4.8,
      description: "Professional digital business card with contact info, social links, and basic features.",
      features: ["Contact Information", "Social Media Links", "WhatsApp Integration", "Email Integration"]
    },
    {
      id: 2,
      name: "Digital Business Card - Premium",
      price: "₹5,000",
      image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=300&h=200&fit=crop",
      rating: 4.9,
      description: "Advanced digital card with gallery, videos, products showcase, and lead forms.",
      features: ["All Basic Features", "Photo Gallery", "Video Integration", "Product Showcase", "Lead Forms"]
    },
    {
      id: 3,
      name: "Mini E-commerce Website",
      price: "₹10,000",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=300&h=200&fit=crop",
      rating: 5.0,
      description: "Complete mini website with online store, payment integration, and inventory management.",
      features: ["Online Store", "Payment Gateway", "Inventory Management", "Order Tracking", "Customer Support"]
    },
    {
      id: 4,
      name: "Corporate Digital Identity",
      price: "₹15,000",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=300&h=200&fit=crop",
      rating: 4.7,
      description: "Complete corporate solution with multiple team cards, analytics, and brand management.",
      features: ["Team Cards", "Analytics Dashboard", "Brand Management", "Custom Domain", "Priority Support"]
    },
    {
      id: 5,
      name: "Restaurant Digital Menu",
      price: "₹8,000",
      image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=300&h=200&fit=crop",
      rating: 4.6,
      description: "Interactive digital menu with online ordering, table booking, and customer reviews.",
      features: ["Digital Menu", "Online Ordering", "Table Booking", "Customer Reviews", "QR Code Integration"]
    },
    {
      id: 6,
      name: "Healthcare Professional Card",
      price: "₹7,000",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=300&h=200&fit=crop",
      rating: 4.8,
      description: "Specialized card for healthcare professionals with appointment booking and service details.",
      features: ["Appointment Booking", "Service Details", "Patient Reviews", "Location Integration", "Emergency Contact"]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Our Products & Services</h1>
          <p className="text-xl text-purple-100 max-w-2xl mx-auto">
            Discover our range of digital solutions designed to transform your business presence
          </p>
        </div>
      </div>

      {/* Products Grid */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <Card key={product.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 right-4 bg-white px-2 py-1 rounded-full flex items-center space-x-1">
                  <Star className="text-yellow-400 fill-current" size={16} />
                  <span className="text-sm font-medium">{product.rating}</span>
                </div>
              </div>
              
              <CardHeader>
                <CardTitle className="text-xl">{product.name}</CardTitle>
                <CardDescription>{product.description}</CardDescription>
                <div className="text-2xl font-bold text-purple-600">{product.price}</div>
              </CardHeader>
              
              <CardContent>
                <div className="space-y-2 mb-6">
                  {product.features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-sm text-gray-600">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <div className="flex space-x-2">
                  <Button className="flex-1 bg-purple-600 hover:bg-purple-700">
                    <ShoppingCart size={16} className="mr-2" />
                    Order Now
                  </Button>
                  <Button variant="outline" size="icon">
                    <Eye size={16} />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Products Notice */}
        <div className="text-center mt-12">
          <Card className="max-w-2xl mx-auto p-8">
            <CardContent>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Need Something Custom?</h3>
              <p className="text-gray-600 mb-6">
                We offer custom solutions tailored to your specific business needs. Contact us to discuss your requirements and get a personalized quote.
              </p>
              <Button className="bg-blue-600 hover:bg-blue-700">
                Request Custom Solution
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Products;
