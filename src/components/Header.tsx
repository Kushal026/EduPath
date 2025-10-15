import React, { useState } from 'react';
import { Menu, X, User, Bell, BookOpen } from 'lucide-react';
import { AuthModal } from './AuthModal';

interface HeaderProps {
  currentSection: string;
  onSectionChange: (section: string) => void;
  isLoggedIn: boolean;
  onLogin: (userData: any) => void;
  user?: any;
}

export const Header: React.FC<HeaderProps> = ({ currentSection, onSectionChange, isLoggedIn, onLogin, user }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showAuthModal, setShowAuthModal] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home', icon: BookOpen },
    { id: 'quiz', label: 'Aptitude Quiz', icon: BookOpen },
    { id: 'careers', label: 'Career Paths', icon: BookOpen },
    { id: 'colleges', label: 'Colleges', icon: BookOpen },
    { id: 'timeline', label: 'Timeline', icon: Bell },
  ];

  const handleLogin = (userData: any) => {
    onLogin(userData);
    setShowAuthModal(false);
  };

  return (
    <>
      <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-2">
            <BookOpen className="w-8 h-8 text-blue-600" />
            <h1 className="text-xl font-bold text-gray-800">CareerCompass</h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onSectionChange(item.id)}
                className={`flex items-center space-x-1 px-3 py-2 rounded-lg transition-colors ${
                  currentSection === item.id
                    ? 'bg-blue-100 text-blue-600'
                    : 'text-gray-600 hover:text-blue-600 hover:bg-gray-50'
                }`}
              >
                <item.icon className="w-4 h-4" />
                <span>{item.label}</span>
              </button>
            ))}
          </nav>

          <div className="flex items-center space-x-4">
            {isLoggedIn ? (
              <div className="flex items-center space-x-3">
                <Bell className="w-5 h-5 text-gray-600 cursor-pointer hover:text-blue-600" />
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center cursor-pointer" title={user?.name || 'User'}>
                  <User className="w-4 h-4 text-white" />
                </div>
                {user?.name && (
                  <span className="hidden md:block text-sm text-gray-700">Hi, {user.name.split(' ')[0]}</span>
                )}
              </div>
            ) : (
              <button
                onClick={() => setShowAuthModal(true)}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Login
              </button>
            )}

            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6 text-gray-600" />
              ) : (
                <Menu className="w-6 h-6 text-gray-600" />
              )}
            </button>
          </div>
        </div>
      </div>
      </header>
    </>
  );
};