import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { AptitudeQuiz } from './components/AptitudeQuiz';
import { CareerPaths } from './components/CareerPaths';
import { CollegeDirectory } from './components/CollegeDirectory';
import { TimelineTracker } from './components/TimelineTracker';
import { Dashboard } from './components/Dashboard';

function App() {
  const [currentSection, setCurrentSection] = useState('home');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user] = useState({
    name: 'Priya Sharma',
    class: '12',
    stream: 'Science',
    location: 'Mumbai, Maharashtra'
  });

  const handleLogin = () => {
    setIsLoggedIn(true);
    setCurrentSection('dashboard');
  };

  const handleGetStarted = () => {
    if (isLoggedIn) {
      setCurrentSection('dashboard');
    } else {
      setCurrentSection('quiz');
    }
  };

  const renderSection = () => {
    switch (currentSection) {
      case 'home':
        return <Hero onGetStarted={handleGetStarted} />;
      case 'dashboard':
        return isLoggedIn ? <Dashboard user={user} /> : <Hero onGetStarted={handleGetStarted} />;
      case 'quiz':
        return <AptitudeQuiz />;
      case 'careers':
        return <CareerPaths />;
      case 'colleges':
        return <CollegeDirectory />;
      case 'timeline':
        return <TimelineTracker />;
      default:
        return <Hero onGetStarted={handleGetStarted} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header
        currentSection={currentSection}
        onSectionChange={setCurrentSection}
        isLoggedIn={isLoggedIn}
        onLogin={handleLogin}
        user={user}
      />
      {renderSection()}
      
      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">CareerCompass</h3>
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
                <li>Email: info@careercompass.edu</li>
                <li>Phone: +91-11-1234-5678</li>
                <li>WhatsApp: +91-98765-43210</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 CareerCompass. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;