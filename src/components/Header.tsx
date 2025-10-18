import React, { useState } from 'react';
import { User, Bell, BookOpen } from 'lucide-react';

interface HeaderProps {
  isLoggedIn: boolean;
  onLogin: () => void;
  user?: any;
}

export const Header: React.FC<HeaderProps> = ({ isLoggedIn, onLogin, user }) => {
  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-2">
            <BookOpen className="w-8 h-8 text-blue-600" />
            <h1 className="text-xl font-bold text-gray-800">EduPath</h1>
          </div>

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
                onClick={onLogin}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Login
              </button>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};