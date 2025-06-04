import React from 'react';
import { Phone, Mail, MessageCircle, Star, Users, Briefcase, Camera, Video, CreditCard, Share2, Building2, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Header from '@/components/Header';

const Index = () => {
  const handleCall = () => {
    window.open('tel:+919080809998', '_self');
  };

  const handleWhatsApp = () => {
    window.open('https://wa.me/919080809998', '_blank');
  };

  const handleEmail = () => {
    window.open('mailto:contact@nithraconsulting.com', '_self');
  };

  const features = [
    { icon: Phone, title: "One Click Call", description: "Direct phone calls" },
    { icon: MessageCircle, title: "One Click WhatsApp", description: "Instant messaging" },
    { icon: Mail, title: "One Click Email", description: "Direct email contact" },
    { icon: Star, title: "Get Customers Feedback", description: "Reviews & ratings" },
    { icon: Users, title: "Add to Contacts", description: "Save contact info" },
    { icon: Share2, title: "Website & Social Links", description: "Social media integration" },
    { icon: Share2, title: "Share Unlimited", description: "Easy sharing options" },
    { icon: Building2, title: "Online Store", description: "E-commerce ready" },
    { icon: FileText, title: "Easy To Update", description: "Simple management" },
    { icon: Video, title: "Youtube Video Gallery", description: "Video showcase" },
    { icon: CreditCard, title: "Payment Section", description: "Secure payments" },
    { icon: FileText, title: "Enquiry Form", description: "Lead generation" }
  ];

  const businessTypes = [
    {
      icon: Briefcase,
      title: "Business Owners",
      description: "Business owners who call and/or meet prospects personally to get business."
    },
    {
      icon: Users,
      title: "Sales Professionals", 
      description: "Independent Sales Professionals, Field Staff and Sales Executives."
    },
    {
      icon: Building2,
      title: "Software & IT",
      description: "Web Designers, Digital and Social Media Marketers who call / meet business people."
    },
    {
      icon: Camera,
      title: "Marketing Agencies",
      description: "Being a Digital marketer is one thing and being a Expert in it is another. We have dedicated staff handling each field of Digital Marketing."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50">
      <Header />

      {/* Hero Section */}
      <section id="home" className="py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="mb-8">
            <span className="inline-block px-4 py-2 bg-purple-100 text-purple-600 rounded-full text-sm font-medium mb-4">
              Digital Business Solutions
            </span>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Nithra Digital Card
              <br />
              <span className="text-purple-600">Create your online business</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Digital Business card platform makes designing a card or Mini ecommerce store simple, convenient, and reliable.
            </p>
            <p className="text-lg text-gray-700 mb-8 font-semibold">
              Create what you need in Just 5 minutes !!
            </p>
            <Button 
              size="lg" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg rounded-lg"
            >
              Make your Card
            </Button>
          </div>

          {/* Mobile Mockup */}
          <div className="relative max-w-md mx-auto mt-12">
            <div className="bg-gradient-to-br from-yellow-400 via-purple-500 to-blue-500 rounded-3xl p-1">
              <div className="bg-white rounded-3xl p-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-white font-bold text-xl">NCS</span>
                  </div>
                  <h3 className="font-bold text-lg">NITHRA CONSULTING</h3>
                  <p className="text-gray-600 mb-4">Your Business Partner</p>
                  
                  <div className="flex justify-center space-x-3 mb-4">
                    <Button onClick={handleCall} size="sm" variant="outline" className="flex items-center space-x-1">
                      <Phone size={16} />
                      <span>Call</span>
                    </Button>
                    <Button onClick={handleWhatsApp} size="sm" variant="outline" className="flex items-center space-x-1">
                      <MessageCircle size={16} />
                      <span>WhatsApp</span>
                    </Button>
                    <Button onClick={handleEmail} size="sm" variant="outline" className="flex items-center space-x-1">
                      <Mail size={16} />
                      <span>Mail</span>
                    </Button>
                  </div>
                  
                  <div className="text-sm text-gray-600 space-y-1">
                    <p>📞 +91 9080809998</p>
                    <p>✉️ contact@nithraconsulting.com</p>
                    <p>📍 Your Business Address</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-medium mb-4">
              How It Works?
            </span>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              This Mini Website is working by
              <br />
              <span className="text-gray-600">some steps!</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="p-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <FileText className="text-blue-600" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Create your Store</h3>
                  <p className="text-gray-600">Design your Mini Website or Mini Store in 2 minutes</p>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Share2 className="text-green-600" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Save to your Device</h3>
                  <p className="text-gray-600">Mini Website or Mini Store is accessible anytime from anywhere</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 bg-purple-100 text-purple-600 rounded-full text-sm font-medium mb-4">
              FEATURES
            </span>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              One Mini Website <span className="text-gray-600">endless possibilities</span>
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-100 to-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="text-purple-600" size={32} />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-600">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Target Audience */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 bg-green-100 text-green-600 rounded-full text-sm font-medium mb-4">
              Featured services
            </span>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Advance Digital Card or
              <br />
              Mini Website is <span className="text-gray-600">Beneficial for</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              If you meet your prospective customers in person (one to one meeting) or atleast you do telephonic conversations to market and sell your products or services, then our Mini Website will help convey your message in a more strategic way.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {businessTypes.map((type, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-100 to-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <type.icon className="text-blue-600" size={32} />
                </div>
                <h3 className="font-bold text-gray-900 mb-3">{type.title}</h3>
                <p className="text-sm text-gray-600">{type.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-white bg-opacity-20 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">N</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold">Nithra Consulting Services</h3>
                  <p className="text-purple-100">Powered with Innovation</p>
                </div>
              </div>
              <p className="text-lg mb-6">
                Grow your Business by engaging with your best customers.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-bold text-lg mb-4">Useful links:</h4>
                <ul className="space-y-2 text-purple-100">
                  <li><a href="#features" className="hover:text-white transition-colors">Features</a></li>
                  <li><a href="/about" className="hover:text-white transition-colors">About Us</a></li>
                  <li><a href="/contact" className="hover:text-white transition-colors">Contact Us</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-lg mb-4">Contact:</h4>
                <div className="space-y-3 text-purple-100">
                  <div className="flex items-center space-x-2">
                    <Phone size={16} />
                    <span>Call us: +91 9080809998</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Mail size={16} />
                    <span>contact@nithraconsulting.com</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Building2 size={16} />
                    <span>Coimbatore, Tamil Nadu, India</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-purple-400 mt-12 pt-8 text-center">
            <p className="text-purple-100">
              Design By Nithra Consulting Services || All rights reserved, © 2024
            </p>
          </div>
        </div>
      </section>

      {/* WhatsApp Floating Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={handleWhatsApp}
          className="w-14 h-14 rounded-full bg-green-500 hover:bg-green-600 shadow-lg"
          size="icon"
        >
          <MessageCircle size={24} />
        </Button>
      </div>
    </div>
  );
};

export default Index;
