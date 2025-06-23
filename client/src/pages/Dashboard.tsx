
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { BarChart3, Users, Mail, Phone, LogOut, Settings, Eye, Plus, CreditCard } from 'lucide-react';
import Header from '@/components/Header';
import { useToast } from '@/hooks/use-toast';
import CardCreationWizard from '@/components/CardCreationWizard';

const Dashboard = () => {
  const [userEmail, setUserEmail] = useState('');
  const [showCardWizard, setShowCardWizard] = useState(false);
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
    { title: 'Total Cards', value: '5', icon: CreditCard, color: 'text-blue-600' },
    { title: 'Active Cards', value: '3', icon: Eye, color: 'text-green-600' },
    { title: 'Total Views', value: '234', icon: Users, color: 'text-purple-600' },
    { title: 'Enquiries', value: '12', icon: Mail, color: 'text-orange-600' },
  ];

  const existingCards = [
    { id: 1, company: 'Nithra Consulting', status: 'Active', created: '2025-01-15', views: 45 },
    { id: 2, company: 'Tech Solutions', status: 'Draft', created: '2025-01-10', views: 0 },
    { id: 3, company: 'Marketing Pro', status: 'Active', created: '2025-01-05', views: 189 },
  ];

  if (showCardWizard) {
    return <CardCreationWizard onClose={() => setShowCardWizard(false)} />;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        {/* Header Section */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
            <p className="text-gray-600">Welcome back, {userEmail}</p>
          </div>
          <div className="flex space-x-3">
            <Button 
              onClick={() => setShowCardWizard(true)}
              className="flex items-center space-x-2 bg-green-600 hover:bg-green-700"
            >
              <Plus size={16} />
              <span>Create New Card</span>
            </Button>
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
{/* 
        <Tabs defaultValue="cards" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="cards">My Cards</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
            <TabsTrigger value="settings">Account Settings</TabsTrigger>
          </TabsList>

          <TabsContent value="cards" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Digital Business Cards</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {existingCards.map((card) => (
                    <div key={card.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex-1">
                        <h3 className="font-medium text-gray-900">{card.company}</h3>
                        <p className="text-sm text-gray-600">Created: {card.created}</p>
                      </div>
                      <div className="flex items-center space-x-4">
                        <span className={`px-2 py-1 rounded-full text-xs ${
                          card.status === 'Active' 
                            ? 'bg-green-100 text-green-800' 
                            : 'bg-yellow-100 text-yellow-800'
                        }`}>
                          {card.status}
                        </span>
                        <span className="text-sm text-gray-600">{card.views} views</span>
                        <Button variant="outline" size="sm">Edit</Button>
                        <Button variant="outline" size="sm">Preview</Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="analytics" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <BarChart3 className="text-purple-600" />
                    <span>Card Performance</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {existingCards.map((card) => (
                      <div key={card.id} className="flex justify-between items-center py-2 border-b last:border-b-0">
                        <span className="font-medium text-gray-900">{card.company}</span>
                        <span className="text-sm text-gray-600">{card.views} views</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Recent Activity</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      { action: 'Card viewed', card: 'Marketing Pro', time: '2 hours ago' },
                      { action: 'Enquiry received', card: 'Nithra Consulting', time: '4 hours ago' },
                      { action: 'Card shared', card: 'Marketing Pro', time: '1 day ago' },
                    ].map((activity, index) => (
                      <div key={index} className="flex justify-between items-center py-2 border-b last:border-b-0">
                        <div>
                          <p className="font-medium text-gray-900">{activity.action}</p>
                          <p className="text-sm text-gray-600">{activity.card}</p>
                        </div>
                        <p className="text-xs text-gray-500">{activity.time}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="settings" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Account Information</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                    <p className="text-gray-900">{userEmail}</p>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Account Type</label>
                    <p className="text-gray-900">Premium</p>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Member Since</label>
                    <p className="text-gray-900">January 2025</p>
                  </div>
                  <div className="pt-4">
                    <Button className="bg-purple-600 hover:bg-purple-700">
                      Change Password
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs> */}
      </div>
    </div>
  );
};

export default Dashboard;
