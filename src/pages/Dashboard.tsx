
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BarChart3, Users, Mail, Phone, LogOut, Settings, Eye } from 'lucide-react';
import Header from '@/components/Header';
import { useToast } from '@/hooks/use-toast';

const Dashboard = () => {
  const [userEmail, setUserEmail] = useState('');
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    const email = localStorage.getItem('userEmail');
    
    if (!isLoggedIn || isLoggedIn !== 'true') {
      navigate('/login');
      return;
    }
    
    if (email) {
      setUserEmail(email);
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('userEmail');
    toast({
      title: "Logged out successfully",
      description: "Thank you for using Nithra Consulting Services",
    });
    navigate('/');
  };

  const stats = [
    { title: 'Total Visitors', value: '2,543', icon: Users, color: 'text-blue-600' },
    { title: 'Enquiries', value: '127', icon: Mail, color: 'text-green-600' },
    { title: 'Calls', value: '89', icon: Phone, color: 'text-purple-600' },
    { title: 'Page Views', value: '5,234', icon: Eye, color: 'text-orange-600' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        {/* Header Section */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
            <p className="text-gray-600">Welcome back, {userEmail}</p>
          </div>
          <div className="flex space-x-3">
            <Button variant="outline" className="flex items-center space-x-2">
              <Settings size={16} />
              <span>Settings</span>
            </Button>
            <Button 
              onClick={handleLogout}
              variant="outline" 
              className="flex items-center space-x-2 text-red-600 border-red-600 hover:bg-red-50"
            >
              <LogOut size={16} />
              <span>Logout</span>
            </Button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <Card key={index}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600 mb-1">{stat.title}</p>
                    <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                  </div>
                  <div className={`p-2 rounded-lg bg-gray-100 ${stat.color}`}>
                    <stat.icon size={24} />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Recent Activity */}
        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <BarChart3 className="text-purple-600" />
                <span>Recent Enquiries</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { name: 'John Doe', email: 'john@example.com', time: '2 hours ago' },
                  { name: 'Sarah Smith', email: 'sarah@example.com', time: '4 hours ago' },
                  { name: 'Mike Johnson', email: 'mike@example.com', time: '1 day ago' },
                ].map((enquiry, index) => (
                  <div key={index} className="flex justify-between items-center py-2 border-b last:border-b-0">
                    <div>
                      <p className="font-medium text-gray-900">{enquiry.name}</p>
                      <p className="text-sm text-gray-600">{enquiry.email}</p>
                    </div>
                    <p className="text-xs text-gray-500">{enquiry.time}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <Button className="w-full justify-start bg-purple-600 hover:bg-purple-700">
                  <Mail className="mr-2" size={16} />
                  View All Enquiries
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Users className="mr-2" size={16} />
                  Manage Clients
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Settings className="mr-2" size={16} />
                  Update Business Info
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
