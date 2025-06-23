import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MessageCircle, Star, ShoppingCart, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Header from '@/components/Header';

const Products = () => {
  const products = [
    {
      id: 1,
      name: "Premium Digital Business Card",
      price: "₹5,000",
      validity: "1 Year Validity",
      image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=300&h=200&fit=crop",
      rating: 4.9,
      description: "Everything you need to showcase your business professionally and digitally.",
      features: [
        "Social Media Links",
        "Business Logo and Name Display",
        "Contact Name and Designation",
        "10 Premium Themes",
        "Mobile Number - Click to Call",
        "WhatsApp - Click to Chat",
        "Email ID - Click on Mail",
        "Website URL Display",
        "About Us - Brief About Your Business",
        "10 YouTube Videos",
        "10 Photos",
        "20 Products",
        "Product with Images",
        "Bank Account Details",
        "Lead Enquiry Form"
      ]
    },
    {
      id: 2,
      name: "Ultimate Digital Identity",
      price: "₹8,000",
      validity: "5 Years Validity",
      image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=300&h=200&fit=crop",
      rating: 5.0,
      description: "Complete solution for professionals and small businesses to go digital.",
      features: [
        "Social Media Links",
        "Business Logo and Name Display",
        "Contact Name and Designation",
        "10 Premium Themes",
        "Mobile Number - Click to Call",
        "WhatsApp - Click to Chat",
        "Email ID - Click on Mail",
        "Website URL Display",
        "About Us - Brief About Your Business",
        "10 YouTube Videos",
        "10 Photos",
        "20 Products",
        "Product with Images",
        "Bank Account Details",
        "Lead Enquiry Form"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <motion.h1
            className="text-4xl md:text-5xl font-bold mb-4"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Our Products & Services
          </motion.h1>
          <motion.p
            className="text-xl text-purple-100 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Discover our range of digital solutions designed to transform your business presence
          </motion.p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4 justify-center">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="w-full max-w-sm mx-auto overflow-hidden hover:shadow-2xl transition-transform transform hover:-translate-y-2 duration-300 rounded-2xl">
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
                  <div className="text-sm text-gray-500 mt-1">{product.validity}</div>
                </CardHeader>

                <CardContent>
                  <div className="space-y-2 mb-6">
                    {product.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
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
            </motion.div>
          ))}
        </div>

        {/* Custom Solution Notice */}
        <div className="text-center mt-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Card className="max-w-2xl mx-auto p-8 rounded-2xl shadow-md">
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
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Products;
