import React from 'react';
import { Users, Target, Award, Heart } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import Header from '@/components/Header';

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">About Nithra Consulting Services</h1>
          <p className="text-xl text-purple-100 max-w-2xl mx-auto">
            Your trusted partner in digital transformation and business consulting
          </p>
        </div>
      </div>

      {/* About Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
            <p className="text-gray-600 mb-4">
              Nithra Consulting Services (NCS) was founded with a vision to bridge the gap between traditional business practices and modern digital solutions. We understand that in today's fast-paced world, businesses need to adapt quickly to stay competitive.
            </p>
            <p className="text-gray-600 mb-4">
              Our digital business card platform represents the future of networking and business presentations. We help professionals and businesses create stunning, interactive digital cards that leave lasting impressions and drive real results.
            </p>
            <p className="text-gray-600">
              With our innovative approach, we've helped hundreds of businesses transform their digital presence and achieve remarkable growth in customer engagement and lead generation.
            </p>
          </div>
          <div className="bg-gradient-to-br from-purple-100 to-blue-100 rounded-lg p-8">
            <div className="grid grid-cols-2 gap-6 text-center">
              <div>
                <h3 className="text-3xl font-bold text-purple-600">500+</h3>
                <p className="text-gray-600">Happy Clients</p>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-blue-600">1000+</h3>
                <p className="text-gray-600">Digital Cards Created</p>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-green-600">95%</h3>
                <p className="text-gray-600">Client Satisfaction</p>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-orange-600">24/7</h3>
                <p className="text-gray-600">Support Available</p>
              </div>
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="grid md:grid-cols-4 gap-6">
          <Card className="text-center p-6">
            <CardContent>
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="text-blue-600" size={32} />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Customer First</h3>
              <p className="text-gray-600 text-sm">We prioritize our customers' success above everything else</p>
            </CardContent>
          </Card>

          <Card className="text-center p-6">
            <CardContent>
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="text-green-600" size={32} />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Innovation</h3>
              <p className="text-gray-600 text-sm">Constantly evolving to provide cutting-edge solutions</p>
            </CardContent>
          </Card>

          <Card className="text-center p-6">
            <CardContent>
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="text-purple-600" size={32} />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Excellence</h3>
              <p className="text-gray-600 text-sm">Committed to delivering the highest quality services</p>
            </CardContent>
          </Card>

          <Card className="text-center p-6">
            <CardContent>
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="text-red-600" size={32} />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Integrity</h3>
              <p className="text-gray-600 text-sm">Building trust through honest and transparent practices</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default About;
