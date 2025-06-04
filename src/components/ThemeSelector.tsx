
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

interface ThemeSelectorProps {
  selectedTheme: number;
  onThemeSelect: (theme: number) => void;
}

const ThemeSelector: React.FC<ThemeSelectorProps> = ({ selectedTheme, onThemeSelect }) => {
  const themes = [
    { id: 1, name: 'Orange Theme', primary: 'bg-orange-500', secondary: 'bg-orange-100' },
    { id: 2, name: 'Green Theme', primary: 'bg-green-500', secondary: 'bg-green-100' },
    { id: 3, name: 'Black Theme', primary: 'bg-gray-900', secondary: 'bg-gray-100' },
    { id: 4, name: 'Purple Theme', primary: 'bg-purple-500', secondary: 'bg-purple-100' },
    { id: 5, name: 'Pink Theme', primary: 'bg-pink-500', secondary: 'bg-pink-100' },
    { id: 6, name: 'Blue Theme', primary: 'bg-blue-500', secondary: 'bg-blue-100' },
    { id: 7, name: 'Teal Theme', primary: 'bg-teal-500', secondary: 'bg-teal-100' },
    { id: 8, name: 'Red Theme', primary: 'bg-red-500', secondary: 'bg-red-100' },
    { id: 9, name: 'Indigo Theme', primary: 'bg-indigo-500', secondary: 'bg-indigo-100' },
    { id: 10, name: 'Dark Theme', primary: 'bg-gray-800', secondary: 'bg-gray-200' },
    { id: 11, name: 'Gradient Purple', primary: 'bg-gradient-to-r from-purple-500 to-pink-500', secondary: 'bg-purple-100' },
    { id: 12, name: 'Gradient Green', primary: 'bg-gradient-to-r from-green-500 to-blue-500', secondary: 'bg-green-100' },
    { id: 13, name: 'Gradient Blue', primary: 'bg-gradient-to-r from-blue-500 to-purple-500', secondary: 'bg-blue-100' },
    { id: 14, name: 'Navy Theme', primary: 'bg-blue-900', secondary: 'bg-blue-100' },
    { id: 15, name: 'Emerald Theme', primary: 'bg-emerald-500', secondary: 'bg-emerald-100' },
    { id: 16, name: 'Gradient Orange', primary: 'bg-gradient-to-r from-orange-500 to-red-500', secondary: 'bg-orange-100' },
    { id: 17, name: 'Gradient Teal', primary: 'bg-gradient-to-r from-teal-500 to-green-500', secondary: 'bg-teal-100' },
    { id: 18, name: 'Sky Theme', primary: 'bg-sky-500', secondary: 'bg-sky-100' },
    { id: 19, name: 'Rose Theme', primary: 'bg-rose-500', secondary: 'bg-rose-100' },
    { id: 20, name: 'Amber Theme', primary: 'bg-amber-500', secondary: 'bg-amber-100' },
  ];

  return (
    <div>
      <h3 className="text-lg font-semibold mb-6 text-center">Select Theme for your card.</h3>
      <div className="grid grid-cols-3 gap-4">
        {themes.map((theme) => (
          <Card 
            key={theme.id}
            className={`cursor-pointer transition-all hover:scale-105 ${
              selectedTheme === theme.id ? 'ring-2 ring-blue-500' : ''
            }`}
            onClick={() => onThemeSelect(theme.id)}
          >
            <CardContent className="p-3">
              <div className="aspect-[3/4] rounded-lg overflow-hidden">
                {/* Theme Preview */}
                <div className={`h-1/3 ${theme.primary} flex items-center justify-center`}>
                  <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                    <span className="text-xs font-bold">Logo</span>
                  </div>
                </div>
                <div className={`h-2/3 ${theme.secondary} p-2`}>
                  <div className="text-xs font-bold mb-1">YOUR COMPANY</div>
                  <div className="text-xs mb-1">Your Name</div>
                  <div className="text-xs mb-2">Position</div>
                  <div className="flex space-x-1 mb-2">
                    <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
                  </div>
                  <div className={`h-6 ${theme.primary} rounded`}></div>
                </div>
              </div>
              <p className="text-xs text-center mt-2 font-medium">{theme.name}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ThemeSelector;
