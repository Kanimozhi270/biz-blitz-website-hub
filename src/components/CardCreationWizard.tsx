import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { ArrowLeft, ArrowRight, Check, Upload, Copy, ExternalLink } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import ThemeSelector from '@/components/ThemeSelector';

interface CardCreationWizardProps {
  onClose: () => void;
}

const CardCreationWizard: React.FC<CardCreationWizardProps> = ({ onClose }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [cardCreated, setCardCreated] = useState(false);
  const [cardUrl, setCardUrl] = useState('');
  const [formData, setFormData] = useState({
    companyName: '',
    selectedTheme: 1,
    firstName: '',
    lastName: '',
    position: '',
    phone: '',
    whatsapp: '',
    email: '',
    website: '',
    about: '',
    facebook: '',
    twitter: '',
    instagram: '',
    linkedin: '',
    youtube: '',
    pinterest: '',
    paytm: '',
    googlepay: '',
    phonepe: '',
    bankName: '',
    accountHolder: '',
    accountNumber: '',
    ifsc: '',
    products: Array(20).fill({ name: '', image: null }),
    gallery: Array(10).fill(null),
    videos: Array(10).fill('')
  });
  const { toast } = useToast();

  const steps = [
    { number: 1, title: 'Company Name', key: 'company' },
    { number: 2, title: 'Select Theme', key: 'theme' },
    { number: 3, title: 'Company Details', key: 'details' },
    { number: 4, title: 'Social Links', key: 'social' },
    { number: 5, title: 'Payment Options', key: 'payment' },
    { number: 6, title: 'Products & Services', key: 'products' },
    { number: 7, title: 'Image Gallery', key: 'gallery' },
    { number: 8, title: 'Preview Card', key: 'preview' }
  ];

  const generateCardUrl = (companyName: string) => {
    const sanitizedName = companyName.toLowerCase().replace(/\s+/g, '').replace(/[^a-z0-9]/g, '');
    return `ncsdigitalcard.com/${sanitizedName}`;
  };

  const handleInputChange = (field: string, value: any) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleNext = () => {
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = () => {
    const generatedUrl = generateCardUrl(formData.companyName);
    setCardUrl(generatedUrl);
    setCardCreated(true);
    
    // Store card data in localStorage (in real app, this would be saved to database)
    const cardData = { ...formData, url: generatedUrl, id: Date.now() };
    const existingCards = JSON.parse(localStorage.getItem('digitalCards') || '[]');
    existingCards.push(cardData);
    localStorage.setItem('digitalCards', JSON.stringify(existingCards));
    
    toast({
      title: "Card Created Successfully!",
      description: `Your digital business card is now live at ${generatedUrl}`,
    });
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(`https://${cardUrl}`);
    toast({
      title: "URL Copied!",
      description: "The card URL has been copied to your clipboard",
    });
  };

  const openCard = () => {
    const sanitizedName = formData.companyName.toLowerCase().replace(/\s+/g, '').replace(/[^a-z0-9]/g, '');
    window.open(`/card/${sanitizedName}`, '_blank');
  };

  if (cardCreated) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <Card className="max-w-md mx-auto">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl text-green-600">🎉 Card Created Successfully!</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="text-center">
              <p className="text-gray-600 mb-4">Your digital business card is now live at:</p>
              <div className="bg-gray-100 p-3 rounded-lg border">
                <p className="font-mono text-sm break-all">{cardUrl}</p>
              </div>
            </div>
            
            <div className="flex space-x-3">
              <Button onClick={copyToClipboard} variant="outline" className="flex-1">
                <Copy size={16} className="mr-2" />
                Copy URL
              </Button>
              <Button onClick={openCard} className="flex-1 bg-blue-600 hover:bg-blue-700">
                <ExternalLink size={16} className="mr-2" />
                View Card
              </Button>
            </div>
            
            <Button onClick={onClose} variant="outline" className="w-full">
              Back to Dashboard
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-4">
            <div>
              <Label htmlFor="companyName">Company Name *</Label>
              <Input
                id="companyName"
                placeholder="Enter Company Name"
                value={formData.companyName}
                onChange={(e) => handleInputChange('companyName', e.target.value)}
                className="mt-1"
              />
              {formData.companyName && (
                <p className="text-sm text-gray-500 mt-2">
                  Your card will be available at: <span className="font-mono">{generateCardUrl(formData.companyName)}</span>
                </p>
              )}
            </div>
          </div>
        );

      case 2:
        return (
          <ThemeSelector 
            selectedTheme={formData.selectedTheme}
            onThemeSelect={(theme) => handleInputChange('selectedTheme', theme)}
          />
        );

      case 3:
        return (
          <div className="space-y-4">
            <div className="text-center mb-6">
              <div className="w-24 h-24 bg-red-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Upload className="text-red-500" size={32} />
              </div>
              <Label className="text-green-600">Company Logo (Required)* 250KB max size</Label>
              <Input type="file" className="mt-2" accept="image/*" />
            </div>
            
            <h3 className="text-lg font-semibold mb-4">Personal Details</h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="firstName">First Name *</Label>
                <Input
                  id="firstName"
                  value={formData.firstName}
                  onChange={(e) => handleInputChange('firstName', e.target.value)}
                />
              </div>
              <div>
                <Label htmlFor="lastName">Last Name (Optional)</Label>
                <Input
                  id="lastName"
                  placeholder="Enter Last Name (Optional)"
                  value={formData.lastName}
                  onChange={(e) => handleInputChange('lastName', e.target.value)}
                />
              </div>
            </div>
            <div>
              <Label htmlFor="position">Position/Designation *</Label>
              <Input
                id="position"
                value={formData.position}
                onChange={(e) => handleInputChange('position', e.target.value)}
              />
            </div>
            <div>
              <Label htmlFor="phone">Phone No *</Label>
              <Input
                id="phone"
                value={formData.phone}
                onChange={(e) => handleInputChange('phone', e.target.value)}
              />
            </div>
            <div>
              <Label htmlFor="whatsapp">WhatsApp No (Optional)</Label>
              <Input
                id="whatsapp"
                value={formData.whatsapp}
                onChange={(e) => handleInputChange('whatsapp', e.target.value)}
              />
            </div>
            <div>
              <Label htmlFor="email">Email *</Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
              />
            </div>
            <div>
              <Label htmlFor="website">Website (Optional)</Label>
              <Input
                id="website"
                value={formData.website}
                onChange={(e) => handleInputChange('website', e.target.value)}
              />
            </div>
            <div>
              <Label htmlFor="about">About Us (Optional)</Label>
              <Textarea
                id="about"
                placeholder="Brief About Your Business"
                value={formData.about}
                onChange={(e) => handleInputChange('about', e.target.value)}
              />
            </div>
          </div>
        );

      case 4:
        return (
          <div className="space-y-4">
            <h3 className="text-lg font-semibold mb-4">Social Media Links</h3>
            <div>
              <Label htmlFor="facebook">Facebook Link(Optional)</Label>
              <Input
                id="facebook"
                placeholder="facebook Link"
                value={formData.facebook}
                onChange={(e) => handleInputChange('facebook', e.target.value)}
              />
            </div>
            <div>
              <Label htmlFor="twitter">Twitter Link(Optional)</Label>
              <Input
                id="twitter"
                placeholder="Twitter Link"
                value={formData.twitter}
                onChange={(e) => handleInputChange('twitter', e.target.value)}
              />
            </div>
            <div>
              <Label htmlFor="instagram">Instagram Link(Optional)</Label>
              <Input
                id="instagram"
                placeholder="Instagram Link"
                value={formData.instagram}
                onChange={(e) => handleInputChange('instagram', e.target.value)}
              />
            </div>
            <div>
              <Label htmlFor="linkedin">LinkedIn Link(Optional)</Label>
              <Input
                id="linkedin"
                placeholder="Linked in Link"
                value={formData.linkedin}
                onChange={(e) => handleInputChange('linkedin', e.target.value)}
              />
            </div>
            <div>
              <Label htmlFor="youtube">Youtube Link(Optional)</Label>
              <Input
                id="youtube"
                placeholder="Youtube Page Link"
                value={formData.youtube}
                onChange={(e) => handleInputChange('youtube', e.target.value)}
              />
            </div>
            <div>
              <Label htmlFor="pinterest">Pinterest Link(Optional)</Label>
              <Input
                id="pinterest"
                placeholder="Pinterest Link"
                value={formData.pinterest}
                onChange={(e) => handleInputChange('pinterest', e.target.value)}
              />
            </div>
          </div>
        );

      case 5:
        return (
          <div className="space-y-6">
            <h3 className="text-lg font-semibold">Payment</h3>
            <div>
              <Label htmlFor="paytm">PayTm Number (Optional)</Label>
              <Input
                id="paytm"
                placeholder="Paytm Number"
                value={formData.paytm}
                onChange={(e) => handleInputChange('paytm', e.target.value)}
              />
            </div>
            <div>
              <Label htmlFor="googlepay">Google Pay (Optional)</Label>
              <Input
                id="googlepay"
                placeholder="Google Pay Number"
                value={formData.googlepay}
                onChange={(e) => handleInputChange('googlepay', e.target.value)}
              />
            </div>
            <div>
              <Label htmlFor="phonepe">PhonePe (Optional)</Label>
              <Input
                id="phonepe"
                placeholder="PhonePe Number"
                value={formData.phonepe}
                onChange={(e) => handleInputChange('phonepe', e.target.value)}
              />
            </div>
            
            <h3 className="text-lg font-semibold mt-8">Bank Account Details</h3>
            <div>
              <Label htmlFor="bankName">Bank Name (Optional)</Label>
              <Input
                id="bankName"
                placeholder="Bank Name. Ex. HDFC, SBI etc"
                value={formData.bankName}
                onChange={(e) => handleInputChange('bankName', e.target.value)}
              />
            </div>
            <div>
              <Label htmlFor="accountHolder">Account Holder Name (Optional)</Label>
              <Input
                id="accountHolder"
                placeholder="Account holder name"
                value={formData.accountHolder}
                onChange={(e) => handleInputChange('accountHolder', e.target.value)}
              />
            </div>
          </div>
        );

      case 6:
        return (
          <div className="space-y-4">
            <div className="text-center text-red-600 mb-4">
              (Upload images with in 250 KB each image)
            </div>
            <div className="grid grid-cols-5 gap-4">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                <div key={num} className="border rounded-lg p-4 text-center">
                  <div className="bg-purple-600 text-white rounded px-2 py-1 text-sm mb-2">{num}</div>
                  <div className="text-green-600 text-sm mb-2">{num === 1 ? '1th' : `${num}th`} Product & Service</div>
                  <Input placeholder="Product/Service Name" className="mb-2 text-xs" />
                  <div className="border-2 border-dashed border-gray-300 rounded p-4 mb-2">
                    <Upload className="mx-auto text-gray-400" size={20} />
                  </div>
                  <Input type="file" className="text-xs" />
                </div>
              ))}
            </div>
          </div>
        );

      case 7:
        return (
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Image Gallery</h3>
            <div className="grid grid-cols-3 gap-4">
              {Array(10).fill(0).map((_, index) => (
                <div key={index} className="border rounded-lg p-4 text-center">
                  <div className="border-2 border-dashed border-gray-300 rounded p-8 mb-2">
                    <Upload className="mx-auto text-gray-400" size={32} />
                  </div>
                  <Input type="file" accept="image/*" />
                </div>
              ))}
            </div>
            
            <h3 className="text-lg font-semibold mt-8">YouTube Videos</h3>
            <div className="grid grid-cols-2 gap-4">
              {Array(10).fill(0).map((_, index) => (
                <div key={index}>
                  <Label>Video {index + 1} URL</Label>
                  <Input placeholder="https://youtube.com/..." />
                </div>
              ))}
            </div>
          </div>
        );

      case 8:
        return (
          <div className="text-center space-y-6">
            <h3 className="text-2xl font-semibold">Preview Your Card</h3>
            <div className="bg-gradient-to-r from-purple-400 to-blue-500 rounded-lg p-8 text-white max-w-md mx-auto">
              <h2 className="text-xl font-bold">{formData.companyName || 'Your Company'}</h2>
              <p className="text-lg">{formData.firstName} {formData.lastName}</p>
              <p>{formData.position}</p>
              <p>{formData.phone}</p>
              <p>{formData.email}</p>
            </div>
            <p className="text-gray-600">This is a preview of your digital business card</p>
            {formData.companyName && (
              <div className="bg-blue-50 p-4 rounded-lg">
                <p className="text-sm text-gray-600">Your card will be available at:</p>
                <p className="font-mono text-blue-600">{generateCardUrl(formData.companyName)}</p>
              </div>
            )}
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-green-600 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
              <span className="text-green-600 font-bold">C</span>
            </div>
            <span className="text-xl font-bold">Customer Login</span>
          </div>
          <div className="flex items-center space-x-4">
            <span>Hi Customer</span>
            <Button variant="outline" className="text-white border-white hover:bg-white hover:text-green-600">
              Change Password
            </Button>
            <Button variant="outline" className="text-white border-white hover:bg-white hover:text-green-600">
              Logout
            </Button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <Button
            onClick={onClose}
            variant="outline"
            className="flex items-center space-x-2"
          >
            <ArrowLeft size={16} />
            <span>Back</span>
          </Button>
          {currentStep < steps.length && (
            <Button className="bg-blue-600 hover:bg-blue-700">
              Skip →
            </Button>
          )}
        </div>

        {/* Progress Steps */}
        <div className="flex justify-center mb-8">
          <div className="flex space-x-2">
            {steps.map((step) => (
              <div
                key={step.number}
                className={`px-3 py-1 rounded text-sm ${
                  step.number === currentStep
                    ? 'bg-blue-500 text-white'
                    : step.number < currentStep
                    ? 'bg-gray-400 text-white'
                    : 'bg-gray-200 text-gray-600'
                }`}
              >
                {step.title}
              </div>
            ))}
          </div>
        </div>

        <Card className="max-w-4xl mx-auto">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl">
              {currentStep === 8 ? 'Preview Card' : steps[currentStep - 1].title}
            </CardTitle>
          </CardHeader>
          <CardContent className="p-8">
            {renderStepContent()}
            
            <div className="flex justify-center space-x-4 mt-8">
              {currentStep > 1 && (
                <Button
                  onClick={handlePrevious}
                  variant="outline"
                  className="flex items-center space-x-2"
                >
                  <ArrowLeft size={16} />
                  <span>Previous</span>
                </Button>
              )}
              
              {currentStep < steps.length ? (
                <Button
                  onClick={handleNext}
                  className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700"
                >
                  <span>Submit & Next</span>
                  <ArrowRight size={16} />
                </Button>
              ) : (
                <Button
                  onClick={handleSubmit}
                  className="flex items-center space-x-2 bg-green-600 hover:bg-green-700"
                >
                  <Check size={16} />
                  <span>Create Card</span>
                </Button>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default CardCreationWizard;
