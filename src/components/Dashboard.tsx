import React from 'react';
import { User, BookOpen, MapPin, Calendar, Target, TrendingUp, Award } from 'lucide-react';

interface DashboardProps {
  user: {
    name: string;
    class: string;
    stream: string;
    location: string;
  };
}

export const Dashboard: React.FC<DashboardProps> = ({ user }) => {
  const recommendations = [
    {
      type: 'course',
      title: 'B.Sc. Computer Science',
      description: 'Based on your quiz results and interests',
      match: '92%'
    },
    {
      type: 'college',
      title: 'Government College of Science',
      description: '3.2 km from your location',
      match: '88%'
    },
    {
      type: 'scholarship',
      title: 'Merit Scholarship Program',
      description: 'Application deadline: July 25th',
      match: '95%'
    }
  ];

  const stats = [
    { label: 'Quizzes Completed', value: '3', icon: Target, color: 'blue' },
    { label: 'Colleges Saved', value: '7', icon: MapPin, color: 'green' },
    { label: 'Career Paths Explored', value: '5', icon: TrendingUp, color: 'purple' },
    { label: 'Scholarships Found', value: '12', icon: Award, color: 'orange' }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <div className="flex items-center space-x-6 mb-6">
            <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center">
              <User className="w-10 h-10 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Welcome back, {user.name}!</h1>
              <p className="text-gray-600 mt-1">
                Class {user.class} • {user.stream && `${user.stream} Stream • `}{user.location}
              </p>
              {user.courseAfter10 && (
                <p className="text-sm text-blue-600 mt-1">
                  Interested in: {user.courseAfter10} → {user.courseAfter12}
                </p>
              )}
            </div>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {stats.map((stat, index) => {
              const colorClasses = {
                blue: 'bg-blue-100 text-blue-600',
                green: 'bg-green-100 text-green-600',
                purple: 'bg-purple-100 text-purple-600',
                orange: 'bg-orange-100 text-orange-600'
              };

              return (
                <div key={index} className="text-center">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3 ${colorClasses[stat.color as keyof typeof colorClasses]}`}>
                    <stat.icon className="w-6 h-6" />
                  </div>
                  <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Personalized Recommendations */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Personalized Recommendations</h2>
            <div className="space-y-4">
              {recommendations.map((rec, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg p-6">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-3">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                        rec.type === 'course' ? 'bg-blue-100' :
                        rec.type === 'college' ? 'bg-green-100' : 'bg-orange-100'
                      }`}>
                        {rec.type === 'course' ? <BookOpen className="w-5 h-5 text-blue-600" /> :
                         rec.type === 'college' ? <MapPin className="w-5 h-5 text-green-600" /> :
                         <Award className="w-5 h-5 text-orange-600" />}
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">{rec.title}</h3>
                        <p className="text-sm text-gray-600">{rec.description}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-bold text-green-600">{rec.match}</div>
                      <div className="text-sm text-gray-500">match</div>
                    </div>
                  </div>
                  <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors">
                    Learn More
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Actions & Upcoming Events */}
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Quick Actions</h3>
              <div className="bg-white rounded-xl shadow-lg p-6 space-y-3">
                <button className="w-full text-left p-3 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
                  <div className="flex items-center space-x-3">
                    <Target className="w-5 h-5 text-blue-600" />
                    <span className="font-medium">Take Career Quiz</span>
                  </div>
                </button>
                <button className="w-full text-left p-3 bg-green-50 rounded-lg hover:bg-green-100 transition-colors">
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-5 h-5 text-green-600" />
                    <span className="font-medium">Find Colleges</span>
                  </div>
                </button>
                <button className="w-full text-left p-3 bg-orange-50 rounded-lg hover:bg-orange-100 transition-colors">
                  <div className="flex items-center space-x-3">
                    <Award className="w-5 h-5 text-orange-600" />
                    <span className="font-medium">Browse Scholarships</span>
                  </div>
                </button>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Upcoming Deadlines</h3>
              <div className="bg-white rounded-xl shadow-lg p-6">
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Calendar className="w-5 h-5 text-red-500 mt-0.5" />
                    <div>
                      <h4 className="font-medium text-gray-900">DU Admissions</h4>
                      <p className="text-sm text-gray-600">Closes in 5 days</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Calendar className="w-5 h-5 text-yellow-500 mt-0.5" />
                    <div>
                      <h4 className="font-medium text-gray-900">Merit Scholarship</h4>
                      <p className="text-sm text-gray-600">Closes in 12 days</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Calendar className="w-5 h-5 text-blue-500 mt-0.5" />
                    <div>
                      <h4 className="font-medium text-gray-900">CUET Results</h4>
                      <p className="text-sm text-gray-600">Expected in 18 days</p>
                    </div>
                  </div>
                </div>
                <button className="w-full mt-4 text-blue-600 hover:text-blue-700 font-medium">
                  View All Deadlines →
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};