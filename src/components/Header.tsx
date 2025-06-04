
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X, Phone, Mail, MessageCircle } from 'lucide-react';
import { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const handleCall = () => {
    window.open('tel:+919080809998', '_self');
  };

  const handleWhatsApp = () => {
    window.open('https://wa.me/919080809998', '_blank');
  };

  const handleEmail = () => {
    window.open('mailto:contact@nithraconsulting.com', '_self');
  };

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-white shadow-sm border-b sticky top-0 z-40">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">N</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-800">Nithra</h1>
              <p className="text-sm text-gray-600">Consulting Services</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link 
              to="/" 
              className={`transition-colors ${isActive('/') ? 'text-purple-600 font-medium' : 'text-gray-700 hover:text-purple-600'}`}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className={`transition-colors ${isActive('/about') ? 'text-purple-600 font-medium' : 'text-gray-700 hover:text-purple-600'}`}
            >
              About
            </Link>
            <Link 
              to="/products" 
              className={`transition-colors ${isActive('/products') ? 'text-purple-600 font-medium' : 'text-gray-700 hover:text-purple-600'}`}
            >
              Products
            </Link>
            <Link 
              to="/contact" 
              className={`transition-colors ${isActive('/contact') ? 'text-purple-600 font-medium' : 'text-gray-700 hover:text-purple-600'}`}
            >
              Contact
            </Link>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-3">
            <Button onClick={handleCall} variant="outline" size="sm" className="flex items-center space-x-1">
              <Phone size={16} />
              <span>Call</span>
            </Button>
            <Button onClick={handleWhatsApp} variant="outline" size="sm" className="flex items-center space-x-1 text-green-600 border-green-600 hover:bg-green-50">
              <MessageCircle size={16} />
              <span>WhatsApp</span>
            </Button>
            <Button className="bg-purple-600 hover:bg-purple-700">Get Started</Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t pt-4">
            <nav className="flex flex-col space-y-4">
              <Link 
                to="/" 
                className={`transition-colors ${isActive('/') ? 'text-purple-600 font-medium' : 'text-gray-700'}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/about" 
                className={`transition-colors ${isActive('/about') ? 'text-purple-600 font-medium' : 'text-gray-700'}`}
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link 
                to="/products" 
                className={`transition-colors ${isActive('/products') ? 'text-purple-600 font-medium' : 'text-gray-700'}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Products
              </Link>
              <Link 
                to="/contact" 
                className={`transition-colors ${isActive('/contact') ? 'text-purple-600 font-medium' : 'text-gray-700'}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
            </nav>
            
            <div className="flex flex-col space-y-3 mt-6">
              <Button onClick={handleCall} variant="outline" size="sm" className="flex items-center justify-center space-x-1">
                <Phone size={16} />
                <span>Call Now</span>
              </Button>
              <Button onClick={handleWhatsApp} variant="outline" size="sm" className="flex items-center justify-center space-x-1 text-green-600 border-green-600">
                <MessageCircle size={16} />
                <span>WhatsApp</span>
              </Button>
              <Button className="bg-purple-600 hover:bg-purple-700">Get Started</Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
