import React, { useState } from 'react';
import Navigation from './Navigation';
import MobileMenu from './MobileMenu';
import { navigationItems } from '../../../data/navigation';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-blue-600">YourBrand</h1>
          </div>
          
          <Navigation items={navigationItems} />
          
          <div className="hidden md:block">
            <Button>Get Started</Button>
          </div>
          
          <MobileMenu 
            isOpen={mobileMenuOpen} 
            onToggle={() => setMobileMenuOpen(!mobileMenuOpen)}
            items={navigationItems}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;