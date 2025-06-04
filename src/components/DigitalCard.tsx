
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Phone, Mail, Globe, MapPin, Facebook, Twitter, Instagram, Linkedin, Youtube } from 'lucide-react';

interface DigitalCardProps {
  cardData: {
    companyName: string;
    selectedTheme: number;
    firstName: string;
    lastName: string;
    position: string;
    phone: string;
    whatsapp: string;
    email: string;
    website: string;
    about: string;
    facebook: string;
    twitter: string;
    instagram: string;
    linkedin: string;
    youtube: string;
  };
}

const DigitalCard: React.FC<DigitalCardProps> = ({ cardData }) => {
  const getThemeClasses = (themeId: number) => {
    const themes = [
      { primary: 'bg-orange-500', secondary: 'bg-orange-100', text: 'text-orange-600' },
      { primary: 'bg-green-500', secondary: 'bg-green-100', text: 'text-green-600' },
      { primary: 'bg-gray-900', secondary: 'bg-gray-100', text: 'text-gray-900' },
      { primary: 'bg-purple-500', secondary: 'bg-purple-100', text: 'text-purple-600' },
      { primary: 'bg-pink-500', secondary: 'bg-pink-100', text: 'text-pink-600' },
      { primary: 'bg-blue-500', secondary: 'bg-blue-100', text: 'text-blue-600' },
      { primary: 'bg-teal-500', secondary: 'bg-teal-100', text: 'text-teal-600' },
      { primary: 'bg-red-500', secondary: 'bg-red-100', text: 'text-red-600' },
      { primary: 'bg-indigo-500', secondary: 'bg-indigo-100', text: 'text-indigo-600' },
      { primary: 'bg-gray-800', secondary: 'bg-gray-200', text: 'text-gray-800' }
    ];
    return themes[themeId - 1] || themes[0];
  };

  const theme = getThemeClasses(cardData.selectedTheme);

  const handleContact = (type: string, value: string) => {
    switch (type) {
      case 'phone':
        window.open(`tel:${value}`);
        break;
      case 'whatsapp':
        window.open(`https://wa.me/${value}`);
        break;
      case 'email':
        window.open(`mailto:${value}`);
        break;
      case 'website':
        window.open(value.startsWith('http') ? value : `https://${value}`, '_blank');
        break;
      default:
        window.open(value, '_blank');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <Card className="max-w-md mx-auto overflow-hidden">
          {/* Header Section */}
          <div className={`${theme.primary} text-white p-8 text-center`}>
            <div className="w-24 h-24 bg-white rounded-full mx-auto mb-4 flex items-center justify-center">
              <span className={`text-2xl font-bold ${theme.text}`}>
                {cardData.companyName.charAt(0)}
              </span>
            </div>
            <h1 className="text-2xl font-bold mb-2">{cardData.companyName}</h1>
            <h2 className="text-xl">{cardData.firstName} {cardData.lastName}</h2>
            <p className="text-lg opacity-90">{cardData.position}</p>
          </div>

          {/* Contact Information */}
          <CardContent className="p-6 space-y-4">
            <div className="space-y-3">
              {cardData.phone && (
                <Button
                  variant="outline"
                  className="w-full justify-start"
                  onClick={() => handleContact('phone', cardData.phone)}
                >
                  <Phone size={18} className="mr-3" />
                  {cardData.phone}
                </Button>
              )}

              {cardData.whatsapp && (
                <Button
                  variant="outline"
                  className="w-full justify-start bg-green-50 border-green-200 hover:bg-green-100"
                  onClick={() => handleContact('whatsapp', cardData.whatsapp)}
                >
                  <Phone size={18} className="mr-3 text-green-600" />
                  WhatsApp: {cardData.whatsapp}
                </Button>
              )}

              {cardData.email && (
                <Button
                  variant="outline"
                  className="w-full justify-start"
                  onClick={() => handleContact('email', cardData.email)}
                >
                  <Mail size={18} className="mr-3" />
                  {cardData.email}
                </Button>
              )}

              {cardData.website && (
                <Button
                  variant="outline"
                  className="w-full justify-start"
                  onClick={() => handleContact('website', cardData.website)}
                >
                  <Globe size={18} className="mr-3" />
                  {cardData.website}
                </Button>
              )}
            </div>

            {/* About Section */}
            {cardData.about && (
              <div className={`${theme.secondary} p-4 rounded-lg mt-6`}>
                <h3 className={`font-semibold mb-2 ${theme.text}`}>About Us</h3>
                <p className="text-gray-700 text-sm">{cardData.about}</p>
              </div>
            )}

            {/* Social Media Links */}
            <div className="mt-6">
              <h3 className={`font-semibold mb-3 ${theme.text}`}>Connect With Us</h3>
              <div className="flex flex-wrap gap-3">
                {cardData.facebook && (
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => handleContact('social', cardData.facebook)}
                    className="flex items-center"
                  >
                    <Facebook size={16} className="mr-2" />
                    Facebook
                  </Button>
                )}
                {cardData.twitter && (
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => handleContact('social', cardData.twitter)}
                    className="flex items-center"
                  >
                    <Twitter size={16} className="mr-2" />
                    Twitter
                  </Button>
                )}
                {cardData.instagram && (
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => handleContact('social', cardData.instagram)}
                    className="flex items-center"
                  >
                    <Instagram size={16} className="mr-2" />
                    Instagram
                  </Button>
                )}
                {cardData.linkedin && (
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => handleContact('social', cardData.linkedin)}
                    className="flex items-center"
                  >
                    <Linkedin size={16} className="mr-2" />
                    LinkedIn
                  </Button>
                )}
                {cardData.youtube && (
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => handleContact('social', cardData.youtube)}
                    className="flex items-center"
                  >
                    <Youtube size={16} className="mr-2" />
                    YouTube
                  </Button>
                )}
              </div>
            </div>

            {/* Footer */}
            <div className="text-center pt-6 border-t">
              <p className="text-sm text-gray-500">
                Powered by <span className="font-semibold">NCS Digital Cards</span>
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default DigitalCard;
