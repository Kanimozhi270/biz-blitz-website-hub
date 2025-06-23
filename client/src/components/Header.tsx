import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X, Phone, Mail, MessageCircle, LogIn, LogOut, User } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useToast } from '@/hooks/use-toast';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    const loginStatus = localStorage.getItem('isLoggedIn');
    setIsLoggedIn(loginStatus === 'true');
  }, [location]);

  const handleCall = () => {
    window.open('tel:+919080809998', '_self');
  };

  const handleWhatsApp = () => {
    window.open('https://wa.me/919080809998', '_blank');
  };

  const handleEmail = () => {
    window.open('mailto:contact@nithraconsulting.com', '_self');
  };

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('userEmail');
    setIsLoggedIn(false);
    toast({
      title: "Logged out successfully",
      description: "Thank you for using Nithra Consulting Services",
    });
    navigate('/');
  };

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-white shadow-sm border-b sticky top-0 z-40">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl flex items-center justify-center shadow-lg transform transition-transform duration-300 group-hover:scale-110">
              <span className="text-white font-bold text-lg">N</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-800 flex items-center space-x-2">
                <span>Nithra</span>
                <span className="inline-block opacity-0 translate-y-2 animate-fade-in-up text-blue-600 font-semibold ml-1">Digital Card</span>
              </h1>
              <p className="text-sm text-gray-600 flex items-center space-x-2">
                <span>Consulting Services</span>
                <span className="inline-block opacity-0 translate-y-2 animate-fade-in-up text-purple-600 font-medium ml-2">Create your online business</span>
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link 
              to="/" 
              className={`transition-all duration-200 px-2 py-1 rounded-lg ${isActive('/') ? 'text-purple-600 font-semibold bg-purple-50 shadow' : 'text-gray-700 hover:text-purple-600 hover:bg-purple-50 hover:shadow'}`}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className={`transition-all duration-200 px-2 py-1 rounded-lg ${isActive('/about') ? 'text-purple-600 font-semibold bg-purple-50 shadow' : 'text-gray-700 hover:text-purple-600 hover:bg-purple-50 hover:shadow'}`}
            >
              About
            </Link>
            <Link 
              to="/products" 
              className={`transition-all duration-200 px-2 py-1 rounded-lg ${isActive('/products') ? 'text-purple-600 font-semibold bg-purple-50 shadow' : 'text-gray-700 hover:text-purple-600 hover:bg-purple-50 hover:shadow'}`}
            >
             Pricing
            </Link>
            <Link 
              to="/contact" 
              className={`transition-all duration-200 px-2 py-1 rounded-lg ${isActive('/contact') ? 'text-purple-600 font-semibold bg-purple-50 shadow' : 'text-gray-700 hover:text-purple-600 hover:bg-purple-50 hover:shadow'}`}
            >
              Contact
            </Link>
            {isLoggedIn && (
              <Link 
                to="/dashboard" 
                className={`transition-all duration-200 px-2 py-1 rounded-lg ${isActive('/dashboard') ? 'text-purple-600 font-semibold bg-purple-50 shadow' : 'text-gray-700 hover:text-purple-600 hover:bg-purple-50 hover:shadow'}`}
              >
                Dashboard
              </Link>
            )}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-3">
            <Button onClick={handleCall} variant="outline" size="sm" className="flex items-center space-x-1 rounded-lg shadow-sm transition-all duration-200 hover:bg-purple-50 hover:shadow-md">
              <Phone size={16} />
              <span>Call</span>
            </Button>
            <Button onClick={handleWhatsApp} variant="outline" size="sm" className="flex items-center space-x-1 text-green-600 border-green-600 hover:bg-green-50 rounded-lg shadow-sm transition-all duration-200 hover:shadow-md">
              <MessageCircle size={16} />
              <span>WhatsApp</span>
            </Button>
            {isLoggedIn ? (
              <Button onClick={handleLogout} variant="outline" size="sm" className="flex items-center space-x-1 text-red-600 border-red-600 hover:bg-red-50 rounded-lg shadow-sm transition-all duration-200 hover:shadow-md">
                <LogOut size={16} />
                <span>Logout</span>
              </Button>
            ) : (
              <Link to="/login">
                <Button variant="outline" size="sm" className="flex items-center space-x-1 rounded-lg shadow-sm transition-all duration-200 hover:bg-purple-50 hover:shadow-md">
                  <LogIn size={16} />
                  <span>Login</span>
                </Button>
              </Link>
            )}
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
        <div
          className={`md:hidden mt-4 pb-4 border-t pt-4 transition-all duration-500 ease-in-out overflow-hidden ${isMenuOpen ? 'max-h-[500px] opacity-100 translate-y-0' : 'max-h-0 opacity-0 -translate-y-4 pointer-events-none'}`}
          style={{ willChange: 'opacity, transform, max-height' }}
        >
          <nav className="flex flex-col space-y-4">
            <Link 
              to="/" 
              className={`transition-all duration-200 px-2 py-1 rounded-lg ${isActive('/') ? 'text-purple-600 font-semibold bg-purple-50 shadow' : 'text-gray-700 hover:text-purple-600 hover:bg-purple-50 hover:shadow'}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className={`transition-all duration-200 px-2 py-1 rounded-lg ${isActive('/about') ? 'text-purple-600 font-semibold bg-purple-50 shadow' : 'text-gray-700 hover:text-purple-600 hover:bg-purple-50 hover:shadow'}`}
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link 
              to="/products" 
              className={`transition-all duration-200 px-2 py-1 rounded-lg ${isActive('/products') ? 'text-purple-600 font-semibold bg-purple-50 shadow' : 'text-gray-700 hover:text-purple-600 hover:bg-purple-50 hover:shadow'}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Products
            </Link>
            <Link 
              to="/contact" 
              className={`transition-all duration-200 px-2 py-1 rounded-lg ${isActive('/contact') ? 'text-purple-600 font-semibold bg-purple-50 shadow' : 'text-gray-700 hover:text-purple-600 hover:bg-purple-50 hover:shadow'}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            {isLoggedIn && (
              <Link 
                to="/dashboard" 
                className={`transition-all duration-200 px-2 py-1 rounded-lg ${isActive('/dashboard') ? 'text-purple-600 font-semibold bg-purple-50 shadow' : 'text-gray-700 hover:text-purple-600 hover:bg-purple-50 hover:shadow'}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Dashboard
              </Link>
            )}
          </nav>
          <div className="flex flex-col space-y-3 mt-6">
            <Button onClick={handleCall} variant="outline" size="sm" className="flex items-center justify-center space-x-1 rounded-lg shadow-sm transition-all duration-200 hover:bg-purple-50 hover:shadow-md">
              <Phone size={16} />
              <span>Call Now</span>
            </Button>
            <Button onClick={handleWhatsApp} variant="outline" size="sm" className="flex items-center justify-center space-x-1 text-green-600 border-green-600 hover:bg-green-50 rounded-lg shadow-sm transition-all duration-200 hover:shadow-md">
              <MessageCircle size={16} />
              <span>WhatsApp</span>
            </Button>
            {isLoggedIn ? (
              <Button onClick={handleLogout} variant="outline" size="sm" className="flex items-center justify-center space-x-1 text-red-600 border-red-600 hover:bg-red-50 rounded-lg shadow-sm transition-all duration-200 hover:shadow-md">
                <LogOut size={16} />
                <span>Logout</span>
              </Button>
            ) : (
              <Link to="/login" onClick={() => setIsMenuOpen(false)}>
                <Button variant="outline" size="sm" className="w-full flex items-center justify-center space-x-1 rounded-lg shadow-sm transition-all duration-200 hover:bg-purple-50 hover:shadow-md">
                  <LogIn size={16} />
                  <span>Login</span>
                </Button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
