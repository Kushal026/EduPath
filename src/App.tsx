import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { AptitudeQuiz } from './components/AptitudeQuiz';
import { CareerPaths } from './components/CareerPaths';
import { CollegeDirectory } from './components/CollegeDirectory';
import { TimelineTracker } from './components/TimelineTracker';
import { Dashboard } from './components/Dashboard';
import { AuthModal } from './components/AuthModal';

function App() {
  const [currentSection, setCurrentSection] = useState('home');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [selectedClassLevel, setSelectedClassLevel] = useState<'10th' | '12th' | null>(null);
  const [selectedStream, setSelectedStream] = useState<string | null>(null);
  const [searchResults, setSearchResults] = useState<any[]>([]);
  const [showSearchResults, setShowSearchResults] = useState(false);
  const [user, setUser] = useState({
    name: 'Priya Sharma',
    class: '12',
    stream: 'Science',
    location: 'Mumbai, Maharashtra'
  });

  const handleLogin = (userData: any) => {
    setIsLoggedIn(true);
    setUser(userData);
    setCurrentSection('dashboard');
    setShowAuthModal(false);
  };

  const handleGetStarted = () => {
    if (isLoggedIn) {
      setCurrentSection('dashboard');
    } else {
      setCurrentSection('quiz');
    }
  };

  const handleClassSelection = (classLevel: '10th' | '12th', stream?: string) => {
    setSelectedClassLevel(classLevel);
    if (stream) {
      setSelectedStream(stream);
    }
    // For 12th class students, go directly to career paths after stream selection
    if (classLevel === '12th' && stream) {
      setCurrentSection('careers');
    } else {
      setCurrentSection('quiz');
    }
  };

  const handleSearch = (query: string) => {
    // Mock search functionality - in real app, this would search through all content
    const mockResults = [
      { type: 'college', title: 'Government Engineering College', description: 'Top engineering college in Mumbai' },
      { type: 'course', title: 'B.Tech Computer Science', description: 'Popular engineering course' },
      { type: 'scholarship', title: 'Merit Scholarship Program', description: 'Financial aid for deserving students' },
      { type: 'career', title: 'Software Engineer', description: 'High-demand career in technology' }
    ].filter(item => 
      item.title.toLowerCase().includes(query.toLowerCase()) ||
      item.description.toLowerCase().includes(query.toLowerCase())
    );
    
    setSearchResults(mockResults);
    setShowSearchResults(true);
  };

  // Listen for navigation events from quiz results
  React.useEffect(() => {
    const handleNavigateToColleges = (event: any) => {
      setCurrentSection('colleges');
    };

    window.addEventListener('navigateToColleges', handleNavigateToColleges);
    return () => window.removeEventListener('navigateToColleges', handleNavigateToColleges);
  }, []);

  const renderSection = () => {
    switch (currentSection) {
      case 'home':
        return <Hero onGetStarted={handleGetStarted} onClassSelection={handleClassSelection} onSectionChange={setCurrentSection} />;
      case 'dashboard':
        return isLoggedIn ? <Dashboard user={user} /> : <Hero onGetStarted={handleGetStarted} />;
      case 'quiz':
        return <AptitudeQuiz selectedClassLevel={selectedClassLevel} selectedStream={selectedStream} />;
      case 'careers':
        return <CareerPaths selectedClassLevel={selectedClassLevel} selectedStream={selectedStream} />;
      case 'colleges':
        return <CollegeDirectory 
          selectedClassLevel={selectedClassLevel} 
          selectedStream={selectedStream}
        />;
      case 'timeline':
        return <TimelineTracker />;
      default:
        return <Hero onGetStarted={handleGetStarted} onClassSelection={handleClassSelection} onSectionChange={setCurrentSection} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header
        isLoggedIn={isLoggedIn}
        onLogin={() => setShowAuthModal(true)}
        user={user}
        onSearch={handleSearch}
      />
      {renderSection()}
      
      <AuthModal
        isOpen={showAuthModal}
        onClose={() => setShowAuthModal(false)}
        onLogin={handleLogin}
      />
      
      {/* Search Results Modal */}
      {showSearchResults && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl max-w-2xl w-full max-h-96 overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold text-gray-900">Search Results</h3>
                <button
                  onClick={() => setShowSearchResults(false)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <div className="space-y-4">
                {searchResults.map((result, index) => (
                  <div key={index} className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50">
                    <div className="flex items-center space-x-3">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                        result.type === 'college' ? 'bg-blue-100 text-blue-600' :
                        result.type === 'course' ? 'bg-green-100 text-green-600' :
                        result.type === 'scholarship' ? 'bg-yellow-100 text-yellow-600' :
                        'bg-purple-100 text-purple-600'
                      }`}>
                        {result.type === 'college' ? '🏫' :
                         result.type === 'course' ? '📚' :
                         result.type === 'scholarship' ? '💰' : '💼'}
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">{result.title}</h4>
                        <p className="text-sm text-gray-600">{result.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
                {searchResults.length === 0 && (
                  <div className="text-center py-8">
                    <p className="text-gray-500">No results found. Try different keywords.</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
      
      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">EduPath</h3>
              <p className="text-gray-300">
                Your trusted guide to making informed career and education decisions.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Features</h4>
              <ul className="space-y-2 text-gray-300">
                <li>Aptitude Assessment</li>
                <li>Career Guidance</li>
                <li>College Directory</li>
                <li>Timeline Tracker</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-300">
                <li>Help Center</li>
                <li>Contact Us</li>
                <li>Privacy Policy</li>
                <li>Terms of Service</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Connect</h4>
              <ul className="space-y-2 text-gray-300">
                <li>Email: info@edupath.edu</li>
                <li>Phone: +91-11-1234-5678</li>
                <li>WhatsApp: +91-98765-43210</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 EduPath. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;