import React, { useState } from 'react';
import { Calendar, Clock, Bell, CheckCircle, AlertTriangle } from 'lucide-react';

interface TimelineEvent {
  id: number;
  title: string;
  description: string;
  date: string;
  type: 'admission' | 'scholarship' | 'exam' | 'counseling';
  status: 'upcoming' | 'ongoing' | 'completed' | 'missed';
  importance: 'high' | 'medium' | 'low';
  college?: string;
}

const timelineEvents: TimelineEvent[] = [
  {
    id: 1,
    title: "DU Admission Applications Open",
    description: "Delhi University undergraduate admission applications are now open. Last date for submission is July 31st.",
    date: "2024-07-15",
    type: "admission",
    status: "ongoing",
    importance: "high",
    college: "Delhi University"
  },
  {
    id: 2,
    title: "Merit Scholarship Application Deadline",
    description: "Submit your merit-based scholarship applications for government colleges.",
    date: "2024-07-20",
    type: "scholarship",
    status: "upcoming",
    importance: "high"
  },
  {
    id: 3,
    title: "CUET Results Declaration",
    description: "Common University Entrance Test results will be declared today.",
    date: "2024-07-25",
    type: "exam",
    status: "upcoming",
    importance: "high"
  },
  {
    id: 4,
    title: "First Counseling Round",
    description: "Attend the first round of counseling for seat allocation in preferred colleges.",
    date: "2024-08-01",
    type: "counseling",
    status: "upcoming",
    importance: "medium"
  },
  {
    id: 5,
    title: "Document Verification",
    description: "Complete document verification at your allotted college.",
    date: "2024-08-10",
    type: "admission",
    status: "upcoming",
    importance: "high"
  },
  {
    id: 6,
    title: "JEE Main Registration Opens",
    description: "Registration for JEE Main 2025 Session 1 begins. Apply before the deadline.",
    date: "2024-08-15",
    type: "exam",
    status: "upcoming",
    importance: "high"
  },
  {
    id: 7,
    title: "NEET Application Form",
    description: "NEET 2025 application form will be available online. Don't miss the deadline.",
    date: "2024-08-20",
    type: "exam",
    status: "upcoming",
    importance: "high"
  },
  {
    id: 8,
    title: "State Scholarship Portal Opens",
    description: "Various state government scholarships applications are now open.",
    date: "2024-08-25",
    type: "scholarship",
    status: "upcoming",
    importance: "medium"
  },
  {
    id: 9,
    title: "Second Counseling Round",
    description: "Second round of counseling for remaining seats in government colleges.",
    date: "2024-09-01",
    type: "counseling",
    status: "upcoming",
    importance: "medium"
  },
  {
    id: 10,
    title: "College Admission Confirmation",
    description: "Confirm your admission by paying fees and submitting required documents.",
    date: "2024-09-05",
    type: "admission",
    status: "upcoming",
    importance: "high"
  },
  {
    id: 11,
    title: "GATE 2025 Registration",
    description: "Graduate Aptitude Test in Engineering registration begins for postgraduate admissions.",
    date: "2024-09-10",
    type: "exam",
    status: "upcoming",
    importance: "medium"
  },
  {
    id: 12,
    title: "Minority Scholarship Deadline",
    description: "Last date to apply for minority community scholarships.",
    date: "2024-09-15",
    type: "scholarship",
    status: "upcoming",
    importance: "medium"
  },
  {
    id: 13,
    title: "Classes Begin",
    description: "First day of classes for the new academic session in most government colleges.",
    date: "2024-09-20",
    type: "admission",
    status: "upcoming",
    importance: "high"
  },
  {
    id: 14,
    title: "CLAT Registration Opens",
    description: "Common Law Admission Test registration for law college admissions.",
    date: "2024-09-25",
    type: "exam",
    status: "upcoming",
    importance: "medium"
  },
  {
    id: 15,
    title: "Hostel Allocation Results",
    description: "Hostel room allocation results will be announced for government colleges.",
    date: "2024-09-30",
    type: "admission",
    status: "upcoming",
    importance: "medium"
  },
  {
    id: 16,
    title: "Fee Submission Deadline",
    description: "Last date for fee submission for the first semester without late fees.",
    date: "2024-10-05",
    type: "admission",
    status: "upcoming",
    importance: "high"
  },
  {
    id: 17,
    title: "CAT Registration",
    description: "Common Admission Test registration for MBA programs begins.",
    date: "2024-10-10",
    type: "exam",
    status: "upcoming",
    importance: "medium"
  },
  {
    id: 18,
    title: "Research Scholarship Applications",
    description: "Applications open for various research scholarships and fellowships.",
    date: "2024-10-15",
    type: "scholarship",
    status: "upcoming",
    importance: "low"
  },
  {
    id: 19,
    title: "Mid-Semester Examinations",
    description: "Mid-semester examinations begin in most government colleges.",
    date: "2024-10-20",
    type: "exam",
    status: "upcoming",
    importance: "medium"
  },
  {
    id: 20,
    title: "Winter Break Begins",
    description: "Winter vacation starts for most government colleges and universities.",
    date: "2024-12-15",
    type: "admission",
    status: "upcoming",
    importance: "low"
  }
];

export const TimelineTracker: React.FC = () => {
  const [selectedType, setSelectedType] = useState<string>('all');
  const [showOnlyUpcoming, setShowOnlyUpcoming] = useState(false);

  const filteredEvents = timelineEvents.filter(event => {
    const typeMatch = selectedType === 'all' || event.type === selectedType;
    const statusMatch = !showOnlyUpcoming || event.status === 'upcoming' || event.status === 'ongoing';
    return typeMatch && statusMatch;
  });

  const getEventIcon = (type: string, status: string) => {
    if (status === 'completed') return <CheckCircle className="w-5 h-5 text-green-500" />;
    if (status === 'missed') return <AlertTriangle className="w-5 h-5 text-red-500" />;
    
    switch (type) {
      case 'admission': return <Calendar className="w-5 h-5 text-blue-500" />;
      case 'scholarship': return <Clock className="w-5 h-5 text-green-500" />;
      case 'exam': return <Bell className="w-5 h-5 text-orange-500" />;
      case 'counseling': return <Calendar className="w-5 h-5 text-purple-500" />;
      default: return <Calendar className="w-5 h-5 text-gray-500" />;
    }
  };

  const getStatusColor = (status: string, importance: string) => {
    if (status === 'completed') return 'bg-green-100 text-green-800';
    if (status === 'missed') return 'bg-red-100 text-red-800';
    if (status === 'ongoing') return 'bg-blue-100 text-blue-800';
    
    if (importance === 'high') return 'bg-red-100 text-red-800';
    if (importance === 'medium') return 'bg-yellow-100 text-yellow-800';
    return 'bg-gray-100 text-gray-800';
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      weekday: 'short', 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric' 
    });
  };

  const getDaysUntil = (dateString: string) => {
    const today = new Date();
    const eventDate = new Date(dateString);
    const diffTime = eventDate.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays < 0) return `${Math.abs(diffDays)} days ago`;
    if (diffDays === 0) return 'Today';
    if (diffDays === 1) return 'Tomorrow';
    return `in ${diffDays} days`;
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Important Dates & Deadlines</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Stay on track with admission deadlines, scholarship applications, and important academic events.
          </p>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setSelectedType('all')}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  selectedType === 'all'
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                All Events
              </button>
              <button
                onClick={() => setSelectedType('admission')}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  selectedType === 'admission'
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Admissions
              </button>
              <button
                onClick={() => setSelectedType('scholarship')}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  selectedType === 'scholarship'
                    ? 'bg-green-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Scholarships
              </button>
              <button
                onClick={() => setSelectedType('exam')}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  selectedType === 'exam'
                    ? 'bg-orange-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Exams
              </button>
            </div>

            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="upcoming"
                checked={showOnlyUpcoming}
                onChange={(e) => setShowOnlyUpcoming(e.target.checked)}
                className="rounded text-blue-600"
              />
              <label htmlFor="upcoming" className="text-sm text-gray-700">
                Show only upcoming
              </label>
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="space-y-6">
          {filteredEvents.map((event, index) => (
            <div key={event.id} className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 mt-1">
                    {getEventIcon(event.type, event.status)}
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-gray-900 mb-1">
                          {event.title}
                        </h3>
                        {event.college && (
                          <p className="text-sm text-blue-600 mb-2">{event.college}</p>
                        )}
                        <p className="text-gray-600 mb-3">{event.description}</p>
                        
                        <div className="flex flex-wrap gap-2">
                          <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(event.status, event.importance)}`}>
                            {event.status.charAt(0).toUpperCase() + event.status.slice(1)}
                          </span>
                          <span className="px-3 py-1 rounded-full text-sm font-medium bg-gray-100 text-gray-700">
                            {event.type.charAt(0).toUpperCase() + event.type.slice(1)}
                          </span>
                        </div>
                      </div>
                      
                      <div className="text-right ml-4">
                        <div className="text-lg font-semibold text-gray-900">
                          {formatDate(event.date)}
                        </div>
                        <div className="text-sm text-gray-500">
                          {getDaysUntil(event.date)}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-4 flex flex-col sm:flex-row gap-3">
                  <button className="flex items-center justify-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                    <Bell className="w-4 h-4" />
                    <span>Set Reminder</span>
                  </button>
                  <button className="flex items-center justify-center space-x-2 border border-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors">
                    <Calendar className="w-4 h-4" />
                    <span>Add to Calendar</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredEvents.length === 0 && (
          <div className="text-center py-12">
            <Clock className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-600 mb-2">No events found</h3>
            <p className="text-gray-500">Try adjusting your filters to see more events</p>
          </div>
        )}

        {/* Notification Settings */}
        <div className="mt-12 bg-white rounded-xl shadow-lg p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Notification Preferences</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-medium text-gray-900">Email Notifications</h4>
                <p className="text-sm text-gray-600">Receive email reminders for important deadlines</p>
              </div>
              <input type="checkbox" defaultChecked className="rounded text-blue-600" />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-medium text-gray-900">SMS Alerts</h4>
                <p className="text-sm text-gray-600">Get SMS notifications for urgent deadlines</p>
              </div>
              <input type="checkbox" defaultChecked className="rounded text-blue-600" />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-medium text-gray-900">Push Notifications</h4>
                <p className="text-sm text-gray-600">Browser notifications for upcoming events</p>
              </div>
              <input type="checkbox" className="rounded text-blue-600" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};