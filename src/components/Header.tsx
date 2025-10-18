import React, { useState } from 'react';
import { User, Bell, BookOpen, Search } from 'lucide-react';

interface HeaderProps {
  isLoggedIn: boolean;
  onLogin: () => void;
  user?: any;
  onSearch?: (query: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ isLoggedIn, onLogin, user, onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [showSearch, setShowSearch] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (onSearch && searchQuery.trim()) {
      onSearch(searchQuery.trim());
    }
  };

  return (
    <header className="bg-white/95 backdrop-blur-md shadow-lg sticky top-0 z-50 border-b border-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-3">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
              <BookOpen className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              EduPath
            </h1>
          </div>

          {/* Global Search */}
          <div className="flex-1 max-w-2xl mx-8">
            <form onSubmit={handleSearch} className="relative">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search courses, colleges, scholarships, careers..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all"
                />
              </div>
              {searchQuery && (
                <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-xl shadow-xl border border-gray-200 max-h-96 overflow-y-auto z-50">
                  <div className="p-4">
                    <div className="text-sm text-gray-500 mb-2">Search suggestions:</div>
                    <div className="space-y-2">
                      <div className="p-2 hover:bg-gray-50 rounded-lg cursor-pointer">
                        <div className="font-medium">Engineering Colleges</div>
                        <div className="text-sm text-gray-500">Find top engineering institutions</div>
                      </div>
                      <div className="p-2 hover:bg-gray-50 rounded-lg cursor-pointer">
                        <div className="font-medium">Medical Entrance Exams</div>
                        <div className="text-sm text-gray-500">NEET, AIIMS preparation</div>
                      </div>
                      <div className="p-2 hover:bg-gray-50 rounded-lg cursor-pointer">
                        <div className="font-medium">Commerce Scholarships</div>
                        <div className="text-sm text-gray-500">Financial aid for commerce students</div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </form>
          </div>

          <div className="flex items-center space-x-4">
            {isLoggedIn ? (
              <div className="flex items-center space-x-3">
                <div className="relative">
                  <Bell className="w-5 h-5 text-gray-600 cursor-pointer hover:text-blue-600 transition-colors" />
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></div>
                </div>
                <div className="w-9 h-9 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center cursor-pointer shadow-lg" title={user?.name || 'User'}>
                  <User className="w-4 h-4 text-white" />
                </div>
                {user?.name && (
                  <span className="hidden md:block text-sm font-medium text-gray-700">Hi, {user.name.split(' ')[0]}</span>
                )}
              </div>
            ) : (
              <button
                onClick={onLogin}
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2.5 rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all transform hover:scale-105 shadow-lg font-medium"
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