
import React, { useEffect, useState } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import DigitalCard from '@/components/DigitalCard';
import { Card, CardContent } from '@/components/ui/card';

const CardDisplay = () => {
  const { companyName } = useParams();
  const [cardData, setCardData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Get card data from localStorage (in real app, this would fetch from database)
    const storedCards = JSON.parse(localStorage.getItem('digitalCards') || '[]');
    const sanitizedCompanyName = companyName?.toLowerCase().replace(/\s+/g, '').replace(/[^a-z0-9]/g, '');
    
    const foundCard = storedCards.find((card: any) => {
      const cardCompanyName = card.companyName.toLowerCase().replace(/\s+/g, '').replace(/[^a-z0-9]/g, '');
      return cardCompanyName === sanitizedCompanyName;
    });

    if (foundCard) {
      setCardData(foundCard);
    }
    setLoading(false);
  }, [companyName]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading digital card...</p>
        </div>
      </div>
    );
  }

  if (!cardData) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <Card className="max-w-md mx-auto">
          <CardContent className="p-8 text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Card Not Found</h1>
            <p className="text-gray-600 mb-6">
              The digital business card for "{companyName}" could not be found.
            </p>
            <p className="text-sm text-gray-500">
              Please check the URL or contact the card owner for the correct link.
            </p>
          </CardContent>
        </Card>
      </div>
    );
  }

  return <DigitalCard cardData={cardData} />;
};

export default CardDisplay;
