import React, { useState } from 'react';
import { ArrowRight, Target, MapPin, Calendar, User, GraduationCap, BookOpen, Clock, Award, TrendingUp, Zap, Star, Users, Globe } from 'lucide-react';

interface HeroProps {
  onGetStarted: () => void;
  onClassSelection: (classLevel: '10th' | '12th', stream?: string) => void;
  onSectionChange: (section: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onGetStarted, onClassSelection, onSectionChange }) => {
  const [showWelcome, setShowWelcome] = useState(true);
  const [showStreamSelection, setShowStreamSelection] = useState(false);
  const [selectedClass, setSelectedClass] = useState<'10th' | '12th' | null>(null);
  const [currentFeatureIndex, setCurrentFeatureIndex] = useState(0);

  const handleClassSelection = (classLevel: '10th' | '12th') => {
    if (classLevel === '12th') {
      setSelectedClass(classLevel);
      setShowStreamSelection(true);
    } else {
      onClassSelection(classLevel);
    }
  };

  const handleStreamSelection = (stream: string) => {
    if (selectedClass) {
      onClassSelection(selectedClass, stream);
      setShowStreamSelection(false);
    }
  };

  const features = [
    {
      id: 'quiz',
      title: 'Aptitude Assessment',
      description: 'Discover your strengths and interests through personalized quizzes',
      icon: Target,
      color: 'blue',
      gradient: 'from-blue-500 to-blue-600',
      stats: '10,000+ Students Assessed'
    },
    {
      id: 'careers',
      title: 'Career Mapping',
      description: 'Visualize career paths and opportunities for each stream',
      icon: TrendingUp,
      color: 'green',
      gradient: 'from-green-500 to-green-600',
      stats: '500+ Career Paths'
    },
    {
      id: 'colleges',
      title: 'College Directory',
      description: 'Find nearby government colleges with detailed information',
      icon: MapPin,
      color: 'purple',
      gradient: 'from-purple-500 to-purple-600',
      stats: '2,000+ Colleges Listed'
    },
    {
      id: 'timeline',
      title: 'Timeline Tracker',
      description: 'Never miss important admission dates and deadlines',
      icon: Calendar,
      color: 'orange',
      gradient: 'from-orange-500 to-orange-600',
      stats: '100+ Important Dates'
    }
  ];

  const uniqueFeatures = [
    {
      title: 'AI-Powered Recommendations',
      description: 'Get personalized suggestions based on your profile',
      icon: Zap,
      color: 'yellow'
    },
    {
      title: 'Expert Counseling',
      description: 'Connect with certified career counselors',
      icon: Users,
      color: 'indigo'
    },
    {
      title: 'Success Stories',
      description: 'Learn from students who achieved their dreams',
      icon: Star,
      color: 'pink'
    },
    {
      title: 'Global Opportunities',
      description: 'Explore international education options',
      icon: Globe,
      color: 'teal'
    }
  ];

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFeatureIndex((prev) => (prev + 1) % features.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  if (showWelcome) {
    return (
      <section className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-20 h-20 bg-blue-200 rounded-full opacity-20 animate-pulse"></div>
          <div className="absolute top-40 right-20 w-32 h-32 bg-purple-200 rounded-full opacity-20 animate-bounce"></div>
          <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-green-200 rounded-full opacity-20 animate-ping"></div>
          <div className="absolute bottom-40 right-1/3 w-24 h-24 bg-orange-200 rounded-full opacity-20 animate-pulse"></div>
        </div>

        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            {/* Welcome Section */}
            <div className="mb-16">
              <div className="inline-flex items-center bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 mb-8 shadow-lg">
                <GraduationCap className="w-6 h-6 text-blue-600 mr-2" />
                <span className="text-blue-600 font-semibold">Welcome to EduPath</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
                Your Journey to the
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600"> Perfect Career</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-600 mb-12 leading-relaxed">
                Discover your potential, explore career options, and find the perfect path
                that aligns with your interests and aspirations.
              </p>

              <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
                <button
                  onClick={() => setShowWelcome(false)}
                  className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all transform hover:scale-105 shadow-lg text-lg font-semibold"
                >
                  <span className="flex items-center justify-center space-x-2">
                    <span>Get Started</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </button>
                
                <button className="group border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-xl hover:border-blue-500 hover:text-blue-600 transition-all transform hover:scale-105 text-lg font-semibold">
                  <span className="flex items-center justify-center space-x-2">
                    <BookOpen className="w-5 h-5" />
                    <span>Learn More</span>
                  </span>
                </button>
              </div>
            </div>

            {/* Animated Feature Showcase */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-8">Why Choose EduPath?</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {uniqueFeatures.map((feature, index) => (
                  <div
                    key={index}
                    className="group p-6 rounded-xl bg-gradient-to-br from-white to-gray-50 hover:shadow-lg transition-all transform hover:scale-105 border border-gray-100"
                  >
                    <div className={`w-12 h-12 rounded-full bg-${feature.color}-100 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                      <feature.icon className={`w-6 h-6 text-${feature.color}-600`} />
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">{feature.title}</h3>
                    <p className="text-gray-600 text-sm">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Success Stats */}
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">50,000+</div>
                <div className="text-gray-600">Students Guided</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-green-600 mb-2">95%</div>
                <div className="text-gray-600">Success Rate</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-600 mb-2">2,000+</div>
                <div className="text-gray-600">Partner Colleges</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
      <div className="container mx-auto px-4">
        {/* Educational Stage Selection */}
        {!showStreamSelection ? (
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Choose Your Educational Stage</h2>
            <p className="text-lg text-gray-600 mb-12">
              Select your current educational stage to get personalized career guidance and course recommendations.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <button
                onClick={() => handleClassSelection('10th')}
                className="group bg-gradient-to-r from-blue-500 to-blue-600 text-white p-8 rounded-2xl hover:from-blue-600 hover:to-blue-700 transition-all transform hover:scale-105 shadow-xl"
              >
                <div className="text-center">
                  <div className="text-4xl font-bold mb-4">After 10th</div>
                  <div className="text-blue-100 mb-4 text-lg">Choose your stream for 11th & 12th</div>
                  <div className="text-sm text-blue-100 leading-relaxed">
                    • Science, Commerce, Arts streams<br />
                    • Diploma & Vocational courses<br />
                    • ITI & Polytechnic options
                  </div>
                </div>
              </button>
              
              <button
                onClick={() => handleClassSelection('12th')}
                className="group bg-gradient-to-r from-green-500 to-green-600 text-white p-8 rounded-2xl hover:from-green-600 hover:to-green-700 transition-all transform hover:scale-105 shadow-xl"
              >
                <div className="text-center">
                  <div className="text-4xl font-bold mb-4">After 12th</div>
                  <div className="text-green-100 mb-4 text-lg">Choose your degree program</div>
                  <div className="text-sm text-green-100 leading-relaxed">
                    • Bachelor's degree programs<br />
                    • Professional courses<br />
                    • Entrance exam preparation
                  </div>
                </div>
              </button>
            </div>
          </div>
        ) : (
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What did you study in 12th Class?</h2>
            <p className="text-lg text-gray-600 mb-12">
              Select your 12th class stream to get personalized degree and career recommendations.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <button
                onClick={() => handleStreamSelection('Science')}
                className="group bg-gradient-to-r from-blue-500 to-blue-600 text-white p-6 rounded-2xl hover:from-blue-600 hover:to-blue-700 transition-all transform hover:scale-105 shadow-xl"
              >
                <div className="text-center">
                  <div className="text-2xl font-bold mb-2">Science</div>
                  <div className="text-blue-100 mb-3">PCM / PCB / PCMB</div>
                  <div className="text-sm text-blue-100">
                    Physics, Chemistry, Math/Biology
                  </div>
                </div>
              </button>
              
              <button
                onClick={() => handleStreamSelection('Commerce')}
                className="group bg-gradient-to-r from-green-500 to-green-600 text-white p-6 rounded-2xl hover:from-green-600 hover:to-green-700 transition-all transform hover:scale-105 shadow-xl"
              >
                <div className="text-center">
                  <div className="text-2xl font-bold mb-2">Commerce</div>
                  <div className="text-green-100 mb-3">With/Without Math</div>
                  <div className="text-sm text-green-100">
                    Accountancy, Business Studies, Economics
                  </div>
                </div>
              </button>
              
              <button
                onClick={() => handleStreamSelection('Arts')}
                className="group bg-gradient-to-r from-purple-500 to-purple-600 text-white p-6 rounded-2xl hover:from-purple-600 hover:to-purple-700 transition-all transform hover:scale-105 shadow-xl"
              >
                <div className="text-center">
                  <div className="text-2xl font-bold mb-2">Arts</div>
                  <div className="text-purple-100 mb-3">Humanities</div>
                  <div className="text-sm text-purple-100">
                    History, Political Science, Psychology
                  </div>
                </div>
              </button>
            </div>
            
            <button
              onClick={() => setShowStreamSelection(false)}
              className="text-gray-600 hover:text-gray-700 font-medium inline-flex items-center space-x-2"
            >
              <span>← Back to class selection</span>
            </button>
          </div>
        )}

        {/* Interactive Features Section */}
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Explore Our Features</h2>
          
          {/* Sliding Feature Cards */}
          <div className="relative mb-16">
            <div className="overflow-hidden rounded-2xl shadow-2xl">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentFeatureIndex * 100}%)` }}
              >
                {features.map((feature, index) => (
                  <div
                    key={feature.id}
                    className={`w-full flex-shrink-0 bg-gradient-to-r ${feature.gradient} text-white p-12 relative overflow-hidden`}
                  >
                    <div className="relative z-10 max-w-4xl mx-auto">
                      <div className="flex items-center justify-between">
                        <div className="flex-1">
                          <div className="flex items-center mb-6">
                            <feature.icon className="w-12 h-12 mr-4" />
                            <div>
                              <h3 className="text-3xl font-bold mb-2">{feature.title}</h3>
                              <p className="text-lg opacity-90">{feature.description}</p>
                            </div>
                          </div>
                          <div className="text-sm opacity-75 mb-6">{feature.stats}</div>
                          <button
                            onClick={() => onSectionChange(feature.id)}
                            className="bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-lg hover:bg-white/30 transition-all transform hover:scale-105"
                          >
                            Explore Now
                          </button>
                        </div>
                        <div className="hidden lg:block">
                          <div className="w-32 h-32 bg-white/10 rounded-full flex items-center justify-center">
                            <feature.icon className="w-16 h-16" />
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Background Pattern */}
                    <div className="absolute inset-0 opacity-10">
                      <div className="absolute top-10 right-10 w-20 h-20 border-2 border-white rounded-full"></div>
                      <div className="absolute bottom-10 left-10 w-16 h-16 border-2 border-white rounded-full"></div>
                      <div className="absolute top-1/2 left-1/4 w-12 h-12 border-2 border-white rounded-full"></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Feature Navigation Dots */}
            <div className="flex justify-center mt-6 space-x-2">
              {features.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentFeatureIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentFeatureIndex ? 'bg-blue-600 w-8' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Quick Access Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature) => (
              <button
                key={feature.id}
                onClick={() => onSectionChange(feature.id)}
                className="group bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all transform hover:scale-105 border border-gray-100"
              >
                <div className={`w-12 h-12 rounded-full bg-${feature.color}-100 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                  <feature.icon className={`w-6 h-6 text-${feature.color}-600`} />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm mb-3">{feature.description}</p>
                <div className="text-xs text-gray-500">{feature.stats}</div>
              </button>
            ))}
          </div>

          {/* Additional Features */}
          <div className="mt-16 bg-white rounded-2xl shadow-xl p-8">
            <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">Additional Features</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center p-4">
                <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Award className="w-6 h-6 text-yellow-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Scholarship Finder</h4>
                <p className="text-gray-600 text-sm">Find scholarships and financial aid</p>
              </div>
              
              <div className="text-center p-4">
                <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Users className="w-6 h-6 text-indigo-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Peer Connect</h4>
                <p className="text-gray-600 text-sm">Connect with like-minded students</p>
              </div>
              
              <div className="text-center p-4">
                <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Star className="w-6 h-6 text-pink-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Success Stories</h4>
                <p className="text-gray-600 text-sm">Learn from successful alumni</p>
              </div>
              
              <div className="text-center p-4">
                <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Globe className="w-6 h-6 text-teal-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Study Abroad</h4>
                <p className="text-gray-600 text-sm">Explore international opportunities</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};