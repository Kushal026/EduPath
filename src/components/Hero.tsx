import React from 'react';
import { ArrowRight, Target, MapPin, Calendar, User } from 'lucide-react';

interface HeroProps {
  onGetStarted: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onGetStarted }) => {
  return (
    <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Your Journey to the Right
            <span className="text-blue-600"> Career Path</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8">
            Discover your potential, explore career options, and find the perfect government college
            that aligns with your interests and aspirations.
          </p>
          <button
            onClick={onGetStarted}
            className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center space-x-2"
          >
            <span>Get Started</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>

        <div className="mt-16 grid md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="bg-blue-600 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
              <Target className="w-6 h-6 text-white" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Aptitude Assessment</h3>
            <p className="text-gray-600">Discover your strengths and interests through personalized quizzes</p>
          </div>

          <div className="text-center">
            <div className="bg-green-600 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
              <MapPin className="w-6 h-6 text-white" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Career Mapping</h3>
            <p className="text-gray-600">Visualize career paths and opportunities for each stream</p>
          </div>

          <div className="text-center">
            <div className="bg-purple-600 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
              <MapPin className="w-6 h-6 text-white" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">College Directory</h3>
            <p className="text-gray-600">Find nearby government colleges with detailed information</p>
          </div>

          <div className="text-center">
            <div className="bg-orange-600 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
              <Calendar className="w-6 h-6 text-white" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Timeline Tracker</h3>
            <p className="text-gray-600">Never miss important admission dates and deadlines</p>
          </div>
        </div>
      </div>
    </section>
  );
};