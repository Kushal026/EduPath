import React, { useState } from 'react';
import { Search, MapPin, Star, Filter, Phone, Globe, GraduationCap, BookOpen, Users, Award, Calendar, TrendingUp } from 'lucide-react';

interface College {
  id: number;
  name: string;
  location: string;
  distance: string;
  rating: number;
  courses: string[];
  fees: string;
  cutoff: string;
  facilities: string[];
  phone: string;
  website: string;
  type: 'Government' | 'Aided';
  forClass: '10th' | '12th' | 'both';
  stream?: 'Science' | 'Commerce' | 'Arts' | 'All';
  established: string;
  accreditation: string;
  placement: string;
  hostel: boolean;
  scholarships: string[];
}

const colleges: College[] = [
  // Colleges for 10th class students (Stream selection colleges)
  {
    id: 1,
    name: "Government Higher Secondary School - Science Wing",
    location: "Mumbai, Maharashtra",
    distance: "2.1 km",
    rating: 4.3,
    courses: ["Science Stream (PCM)", "Science Stream (PCB)", "Science Stream (PCMB)"],
    fees: "₹12,000/year",
    cutoff: "75%",
    facilities: ["Science Labs", "Library", "Computer Lab", "Sports Ground", "Canteen"],
    phone: "+91-22-12345678",
    website: "www.ghss-mumbai-science.edu.in",
    type: "Government",
    forClass: "10th",
    stream: "All",
    established: "1985",
    accreditation: "CBSE Affiliated",
    placement: "95% students get admission in top colleges",
    hostel: false,
    scholarships: ["Merit Scholarship", "SC/ST Scholarship", "Minority Scholarship"]
  },
  {
    id: 2,
    name: "Government Commerce College - Junior Wing",
    location: "Delhi, Delhi",
    distance: "3.5 km",
    rating: 4.1,
    courses: ["Commerce Stream", "Commerce with Math", "Business Studies Foundation"],
    fees: "₹8,500/year",
    cutoff: "70%",
    facilities: ["Computer Lab", "Library", "Auditorium", "Career Counseling"],
    phone: "+91-11-87654321",
    website: "www.gcc-delhi-junior.edu.in",
    type: "Government",
    forClass: "10th",
    stream: "All",
    established: "1978",
    accreditation: "CBSE Affiliated",
    placement: "90% students pursue higher education",
    hostel: false,
    scholarships: ["Merit Scholarship", "Need-based Aid"]
  },
  {
    id: 3,
    name: "Government Arts & Humanities School",
    location: "Bangalore, Karnataka",
    distance: "4.2 km",
    rating: 4.0,
    courses: ["Arts Stream", "Humanities", "Fine Arts", "Languages"],
    fees: "₹7,000/year",
    cutoff: "65%",
    facilities: ["Art Studio", "Music Room", "Library", "Drama Theatre"],
    phone: "+91-80-11223344",
    website: "www.gahs-bangalore.edu.in",
    type: "Government",
    forClass: "10th",
    stream: "All",
    established: "1982",
    accreditation: "State Board Affiliated",
    placement: "85% students continue to graduation",
    hostel: false,
    scholarships: ["Cultural Scholarship", "Merit Award"]
  },
  {
    id: 4,
    name: "Government Polytechnic Institute",
    location: "Pune, Maharashtra",
    distance: "6.8 km",
    rating: 4.2,
    courses: ["Diploma in Engineering", "ITI Courses", "Technical Training"],
    fees: "₹15,000/year",
    cutoff: "60%",
    facilities: ["Workshop", "Technical Labs", "Library", "Placement Cell"],
    phone: "+91-20-12345678",
    website: "www.gpi-pune.edu.in",
    type: "Government",
    forClass: "10th",
    stream: "All",
    established: "1975",
    accreditation: "AICTE Approved",
    placement: "80% placement rate",
    hostel: true,
    scholarships: ["Technical Scholarship", "Industry Sponsorship"]
  },
  {
    id: 5,
    name: "Government Vocational Training Center",
    location: "Chennai, Tamil Nadu",
    distance: "5.5 km",
    rating: 3.9,
    courses: ["Skill Development", "Trade Courses", "Vocational Training"],
    fees: "₹10,000/year",
    cutoff: "55%",
    facilities: ["Training Workshops", "Industry Tie-ups", "Certification Center"],
    phone: "+91-44-87654321",
    website: "www.gvtc-chennai.edu.in",
    type: "Government",
    forClass: "10th",
    stream: "All",
    established: "1990",
    accreditation: "NSDC Certified",
    placement: "75% job placement",
    hostel: false,
    scholarships: ["Skill India Scholarship", "Rural Development Fund"]
  },

  // Science Stream Colleges for 12th class students
  {
    id: 6,
    name: "Government Engineering College",
    location: "Mumbai, Maharashtra",
    distance: "8.2 km",
    rating: 4.6,
    courses: ["B.Tech CSE", "B.Tech Mechanical", "B.Tech Civil", "B.Tech Electrical", "B.Tech Electronics"],
    fees: "₹45,000/year",
    cutoff: "85%",
    facilities: ["Advanced Labs", "Research Center", "Hostel", "Placement Cell", "Library"],
    phone: "+91-22-12345678",
    website: "www.gec-mumbai.edu.in",
    type: "Government",
    forClass: "12th",
    stream: "Science",
    established: "1960",
    accreditation: "NAAC A+ Grade",
    placement: "95% placement with avg package ₹8 LPA",
    hostel: true,
    scholarships: ["Merit Scholarship", "Research Fellowship", "Industry Scholarship"]
  },
  {
    id: 7,
    name: "Government Medical College",
    location: "Delhi, Delhi",
    distance: "12.5 km",
    rating: 4.8,
    courses: ["MBBS", "BDS", "B.Pharma", "B.Sc. Nursing", "BAMS"],
    fees: "₹25,000/year",
    cutoff: "95%",
    facilities: ["Hospital", "Medical Labs", "Research Center", "Hostel", "Library"],
    phone: "+91-11-87654321",
    website: "www.gmc-delhi.edu.in",
    type: "Government",
    forClass: "12th",
    stream: "Science",
    established: "1954",
    accreditation: "MCI Approved",
    placement: "100% placement in hospitals",
    hostel: true,
    scholarships: ["Medical Merit Scholarship", "Rural Service Bond"]
  },
  {
    id: 8,
    name: "Government Science College",
    location: "Bangalore, Karnataka",
    distance: "7.3 km",
    rating: 4.4,
    courses: ["B.Sc. Physics", "B.Sc. Chemistry", "B.Sc. Mathematics", "B.Sc. Biology", "B.Sc. Computer Science"],
    fees: "₹18,000/year",
    cutoff: "78%",
    facilities: ["Research Labs", "Library", "Computer Center", "Hostel"],
    phone: "+91-80-11223344",
    website: "www.gsc-bangalore.edu.in",
    type: "Government",
    forClass: "12th",
    stream: "Science",
    established: "1965",
    accreditation: "UGC Recognized",
    placement: "85% students pursue higher studies",
    hostel: true,
    scholarships: ["Research Scholarship", "Merit Award"]
  },
  {
    id: 9,
    name: "Government Agriculture College",
    location: "Pune, Maharashtra",
    distance: "15.8 km",
    rating: 4.3,
    courses: ["B.Sc. Agriculture", "B.Sc. Horticulture", "B.Tech Food Technology", "B.Sc. Forestry"],
    fees: "₹22,000/year",
    cutoff: "72%",
    facilities: ["Farm", "Research Labs", "Greenhouse", "Hostel", "Library"],
    phone: "+91-20-12345678",
    website: "www.gac-pune.edu.in",
    type: "Government",
    forClass: "12th",
    stream: "Science",
    established: "1970",
    accreditation: "ICAR Approved",
    placement: "90% placement in agriculture sector",
    hostel: true,
    scholarships: ["Agriculture Scholarship", "Rural Development Fund"]
  },
  {
    id: 10,
    name: "Government Pharmacy College",
    location: "Chennai, Tamil Nadu",
    distance: "11.2 km",
    rating: 4.5,
    courses: ["B.Pharma", "D.Pharma", "M.Pharma", "Pharm.D"],
    fees: "₹35,000/year",
    cutoff: "82%",
    facilities: ["Pharmacy Labs", "Research Center", "Hospital Attachment", "Hostel"],
    phone: "+91-44-87654321",
    website: "www.gpc-chennai.edu.in",
    type: "Government",
    forClass: "12th",
    stream: "Science",
    established: "1968",
    accreditation: "PCI Approved",
    placement: "92% placement in pharma industry",
    hostel: true,
    scholarships: ["Pharmacy Excellence Award", "Industry Scholarship"]
  },

  // Commerce Stream Colleges for 12th class students
  {
    id: 11,
    name: "Government Commerce College",
    location: "Mumbai, Maharashtra",
    distance: "5.8 km",
    rating: 4.2,
    courses: ["B.Com", "BBA", "B.Com (Hons)", "BMS", "B.Com Banking"],
    fees: "₹12,000/year",
    cutoff: "75%",
    facilities: ["Computer Lab", "Library", "Auditorium", "Placement Cell"],
    phone: "+91-22-12345678",
    website: "www.gcc-mumbai.edu.in",
    type: "Government",
    forClass: "12th",
    stream: "Commerce",
    established: "1962",
    accreditation: "UGC Recognized",
    placement: "88% placement with avg package ₹4.5 LPA",
    hostel: false,
    scholarships: ["Commerce Merit Award", "Business Excellence Scholarship"]
  },
  {
    id: 12,
    name: "Government Business Administration Institute",
    location: "Delhi, Delhi",
    distance: "9.4 km",
    rating: 4.4,
    courses: ["BBA", "B.Com", "BMS", "B.Com International Business", "BBM"],
    fees: "₹15,000/year",
    cutoff: "78%",
    facilities: ["Business Lab", "Library", "Seminar Hall", "Industry Tie-ups"],
    phone: "+91-11-87654321",
    website: "www.gbai-delhi.edu.in",
    type: "Government",
    forClass: "12th",
    stream: "Commerce",
    established: "1975",
    accreditation: "AICTE Approved",
    placement: "90% placement in corporate sector",
    hostel: true,
    scholarships: ["Business Leadership Award", "Entrepreneurship Grant"]
  },
  {
    id: 13,
    name: "Government Economics College",
    location: "Bangalore, Karnataka",
    distance: "6.7 km",
    rating: 4.1,
    courses: ["B.Sc. Economics", "B.Com", "B.A. Economics", "BBA Economics"],
    fees: "₹10,500/year",
    cutoff: "72%",
    facilities: ["Economics Lab", "Library", "Research Center", "Computer Lab"],
    phone: "+91-80-11223344",
    website: "www.gec-bangalore.edu.in",
    type: "Government",
    forClass: "12th",
    stream: "Commerce",
    established: "1980",
    accreditation: "UGC Recognized",
    placement: "85% students pursue higher studies or jobs",
    hostel: false,
    scholarships: ["Economics Research Grant", "Merit Scholarship"]
  },
  {
    id: 14,
    name: "Government Banking & Finance Institute",
    location: "Pune, Maharashtra",
    distance: "10.3 km",
    rating: 4.3,
    courses: ["B.Com Banking", "BBA Finance", "B.Com Insurance", "B.Sc. Finance"],
    fees: "₹14,000/year",
    cutoff: "76%",
    facilities: ["Banking Simulation Lab", "Library", "Industry Partnerships"],
    phone: "+91-20-12345678",
    website: "www.gbfi-pune.edu.in",
    type: "Government",
    forClass: "12th",
    stream: "Commerce",
    established: "1985",
    accreditation: "RBI Recognized",
    placement: "93% placement in banking sector",
    hostel: true,
    scholarships: ["Banking Excellence Award", "Financial Literacy Grant"]
  },
  {
    id: 15,
    name: "Government Accounting College",
    location: "Chennai, Tamil Nadu",
    distance: "8.9 km",
    rating: 4.0,
    courses: ["B.Com", "B.Com (CA)", "B.Com Taxation", "BBA Accounting"],
    fees: "₹11,000/year",
    cutoff: "70%",
    facilities: ["Accounting Lab", "Library", "CA Coaching Center"],
    phone: "+91-44-87654321",
    website: "www.gac-chennai.edu.in",
    type: "Government",
    forClass: "12th",
    stream: "Commerce",
    established: "1978",
    accreditation: "ICAI Recognized",
    placement: "87% students clear CA/CS exams",
    hostel: false,
    scholarships: ["CA Foundation Scholarship", "Accounting Excellence Award"]
  },

  // Arts Stream Colleges for 12th class students
  {
    id: 16,
    name: "Government Arts College",
    location: "Mumbai, Maharashtra",
    distance: "4.5 km",
    rating: 4.1,
    courses: ["B.A. English", "B.A. History", "B.A. Political Science", "B.A. Psychology", "B.A. Sociology"],
    fees: "₹8,000/year",
    cutoff: "65%",
    facilities: ["Library", "Seminar Halls", "Cultural Center", "Language Lab"],
    phone: "+91-22-12345678",
    website: "www.gac-mumbai.edu.in",
    type: "Government",
    forClass: "12th",
    stream: "Arts",
    established: "1958",
    accreditation: "UGC Recognized",
    placement: "80% students pursue higher studies",
    hostel: false,
    scholarships: ["Arts Excellence Award", "Cultural Scholarship"]
  },
  {
    id: 17,
    name: "Government Law College",
    location: "Delhi, Delhi",
    distance: "7.8 km",
    rating: 4.5,
    courses: ["LLB", "B.A. LLB", "LLM", "B.A. LLB (Hons)"],
    fees: "₹18,000/year",
    cutoff: "80%",
    facilities: ["Moot Court", "Law Library", "Legal Aid Clinic", "Seminar Halls"],
    phone: "+91-11-87654321",
    website: "www.glc-delhi.edu.in",
    type: "Government",
    forClass: "12th",
    stream: "Arts",
    established: "1924",
    accreditation: "BCI Approved",
    placement: "95% placement in legal sector",
    hostel: true,
    scholarships: ["Legal Excellence Award", "Social Justice Scholarship"]
  },
  {
    id: 18,
    name: "Government Mass Communication College",
    location: "Bangalore, Karnataka",
    distance: "9.2 km",
    rating: 4.2,
    courses: ["B.J.M.C.", "B.A. Mass Communication", "B.A. Journalism", "Diploma in Media"],
    fees: "₹16,000/year",
    cutoff: "72%",
    facilities: ["TV Studio", "Radio Station", "Computer Lab", "Media Library"],
    phone: "+91-80-11223344",
    website: "www.gmcc-bangalore.edu.in",
    type: "Government",
    forClass: "12th",
    stream: "Arts",
    established: "1982",
    accreditation: "UGC Recognized",
    placement: "85% placement in media industry",
    hostel: true,
    scholarships: ["Media Excellence Award", "Journalism Grant"]
  },
  {
    id: 19,
    name: "Government Social Work College",
    location: "Pune, Maharashtra",
    distance: "11.7 km",
    rating: 4.0,
    courses: ["B.S.W.", "M.S.W.", "B.A. Social Work", "Diploma in Social Work"],
    fees: "₹12,000/year",
    cutoff: "68%",
    facilities: ["Community Center", "Counseling Room", "Library", "Field Work Center"],
    phone: "+91-20-12345678",
    website: "www.gswc-pune.edu.in",
    type: "Government",
    forClass: "12th",
    stream: "Arts",
    established: "1975",
    accreditation: "UGC Recognized",
    placement: "90% placement in NGOs and government",
    hostel: false,
    scholarships: ["Social Service Award", "Community Development Grant"]
  },
  {
    id: 20,
    name: "Government Psychology College",
    location: "Chennai, Tamil Nadu",
    distance: "13.4 km",
    rating: 4.3,
    courses: ["B.A. Psychology", "B.Sc. Psychology", "M.A. Psychology", "Diploma in Counseling"],
    fees: "₹14,000/year",
    cutoff: "74%",
    facilities: ["Psychology Lab", "Counseling Center", "Research Lab", "Library"],
    phone: "+91-44-87654321",
    website: "www.gpc-chennai.edu.in",
    type: "Government",
    forClass: "12th",
    stream: "Arts",
    established: "1988",
    accreditation: "UGC Recognized",
    placement: "88% placement in healthcare and education",
    hostel: true,
    scholarships: ["Psychology Research Grant", "Mental Health Scholarship"]
  }
];

interface CollegeDirectoryProps {
  selectedClassLevel?: '10th' | '12th' | null;
  selectedStream?: string | null;
  showClassSelection?: boolean;
}

export const CollegeDirectory: React.FC<CollegeDirectoryProps> = ({ 
  selectedClassLevel, 
  selectedStream,
  showClassSelection = true 
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCourse, setSelectedCourse] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  const [selectedCollege, setSelectedCollege] = useState<College | null>(null);
  const [classFilter, setClassFilter] = useState<'10th' | '12th' | 'all'>(
    selectedClassLevel || 'all'
  );
  const [streamFilter, setStreamFilter] = useState<'Science' | 'Commerce' | 'Arts' | 'All'>(
    (selectedStream as 'Science' | 'Commerce' | 'Arts') || 'All'
  );
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState<'rating' | 'fees' | 'distance'>('rating');

  const filteredColleges = colleges.filter(college => {
    const matchesSearch = college.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         college.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCourse = !selectedCourse || college.courses.some(course => 
      course.toLowerCase().includes(selectedCourse.toLowerCase())
    );
    const matchesClass = classFilter === 'all' || college.forClass === classFilter || college.forClass === 'both';
    const matchesStream = streamFilter === 'All' || college.stream === streamFilter || college.stream === 'All';
    
    return matchesSearch && matchesCourse && matchesClass && matchesStream;
  }).sort((a, b) => {
    switch (sortBy) {
      case 'rating':
        return b.rating - a.rating;
      case 'fees':
        return parseInt(a.fees.replace(/[^\d]/g, '')) - parseInt(b.fees.replace(/[^\d]/g, ''));
      case 'distance':
        return parseFloat(a.distance) - parseFloat(b.distance);
      default:
        return 0;
    }
  });

  const allCourses = Array.from(new Set(colleges.flatMap(college => college.courses)));

  const getCollegeStats = () => {
    const total = filteredColleges.length;
    const government = filteredColleges.filter(c => c.type === 'Government').length;
    const avgRating = filteredColleges.reduce((sum, c) => sum + c.rating, 0) / total;
    const withHostel = filteredColleges.filter(c => c.hostel).length;
    
    return { total, government, avgRating: avgRating.toFixed(1), withHostel };
  };

  const stats = getCollegeStats();

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            {selectedClassLevel === '10th' ? 'Find Schools for Stream Selection' :
             selectedClassLevel === '12th' ? 
               (selectedStream ? `${selectedStream} Stream Colleges` : 'Find Degree Colleges') :
             'Discover Government Colleges'}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {selectedClassLevel === '10th' ? 'Choose the right school for your 11th-12th stream selection and future preparation.' :
             selectedClassLevel === '12th' ? 
               (selectedStream ? `Explore top government colleges offering ${selectedStream} stream programs and degrees.` : 'Find the perfect college for your degree program.') :
             'Explore quality education opportunities in government colleges with detailed information.'}
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid md:grid-cols-4 gap-4 mb-8">
          <div className="bg-white rounded-lg p-4 text-center shadow-md">
            <div className="text-2xl font-bold text-blue-600">{stats.total}</div>
            <div className="text-sm text-gray-600">Total Colleges</div>
          </div>
          <div className="bg-white rounded-lg p-4 text-center shadow-md">
            <div className="text-2xl font-bold text-green-600">{stats.government}</div>
            <div className="text-sm text-gray-600">Government Colleges</div>
          </div>
          <div className="bg-white rounded-lg p-4 text-center shadow-md">
            <div className="text-2xl font-bold text-orange-600">{stats.avgRating}</div>
            <div className="text-sm text-gray-600">Average Rating</div>
          </div>
          <div className="bg-white rounded-lg p-4 text-center shadow-md">
            <div className="text-2xl font-bold text-purple-600">{stats.withHostel}</div>
            <div className="text-sm text-gray-600">With Hostel</div>
          </div>
        </div>

        {/* Enhanced Search and Filters */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <div className="flex flex-col lg:flex-row gap-4 mb-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search colleges, locations, or courses..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <select
              value={selectedCourse}
              onChange={(e) => setSelectedCourse(e.target.value)}
              className="px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">All Courses</option>
              {allCourses.map((course, index) => (
                <option key={index} value={course}>{course}</option>
              ))}
            </select>

            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center space-x-2 px-4 py-3 border border-gray-200 rounded-lg hover:bg-gray-50"
            >
              <Filter className="w-5 h-5" />
              <span>Filters</span>
            </button>
          </div>

          {/* Class and Stream Selection */}
          {showClassSelection && (
            <div className="flex flex-wrap gap-4 mb-4">
              <div className="flex items-center space-x-2">
                <span className="text-sm font-medium text-gray-700">Class:</span>
                <select
                  value={classFilter}
                  onChange={(e) => setClassFilter(e.target.value as '10th' | '12th' | 'all')}
                  className="px-3 py-2 border border-gray-200 rounded-lg text-sm"
                >
                  <option value="all">All Classes</option>
                  <option value="10th">After 10th</option>
                  <option value="12th">After 12th</option>
                </select>
              </div>

              {classFilter === '12th' && (
                <div className="flex items-center space-x-2">
                  <span className="text-sm font-medium text-gray-700">Stream:</span>
                  <select
                    value={streamFilter}
                    onChange={(e) => setStreamFilter(e.target.value as 'Science' | 'Commerce' | 'Arts' | 'All')}
                    className="px-3 py-2 border border-gray-200 rounded-lg text-sm"
                  >
                    <option value="All">All Streams</option>
                    <option value="Science">Science</option>
                    <option value="Commerce">Commerce</option>
                    <option value="Arts">Arts</option>
                  </select>
                </div>
              )}
            </div>
          )}

          {/* View Controls */}
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <span className="text-sm font-medium text-gray-700">Sort by:</span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as 'rating' | 'fees' | 'distance')}
                  className="px-3 py-2 border border-gray-200 rounded-lg text-sm"
                >
                  <option value="rating">Rating</option>
                  <option value="fees">Fees</option>
                  <option value="distance">Distance</option>
                </select>
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded ${viewMode === 'grid' ? 'bg-blue-100 text-blue-600' : 'text-gray-400'}`}
              >
                <div className="w-4 h-4 grid grid-cols-2 gap-0.5">
                  <div className="bg-current rounded-sm"></div>
                  <div className="bg-current rounded-sm"></div>
                  <div className="bg-current rounded-sm"></div>
                  <div className="bg-current rounded-sm"></div>
                </div>
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded ${viewMode === 'list' ? 'bg-blue-100 text-blue-600' : 'text-gray-400'}`}
              >
                <div className="w-4 h-4 flex flex-col gap-0.5">
                  <div className="bg-current h-0.5 rounded"></div>
                  <div className="bg-current h-0.5 rounded"></div>
                  <div className="bg-current h-0.5 rounded"></div>
                  <div className="bg-current h-0.5 rounded"></div>
                </div>
              </button>
            </div>
          </div>

          {showFilters && (
            <div className="mt-4 pt-4 border-t border-gray-200">
              <div className="grid md:grid-cols-4 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Distance</label>
                  <select className="w-full px-3 py-2 border border-gray-200 rounded-lg">
                    <option>Within 5 km</option>
                    <option>Within 10 km</option>
                    <option>Within 25 km</option>
                    <option>Any distance</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Fees Range</label>
                  <select className="w-full px-3 py-2 border border-gray-200 rounded-lg">
                    <option>Under ₹10,000</option>
                    <option>₹10,000 - ₹25,000</option>
                    <option>₹25,000 - ₹50,000</option>
                    <option>Above ₹50,000</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Rating</label>
                  <select className="w-full px-3 py-2 border border-gray-200 rounded-lg">
                    <option>All ratings</option>
                    <option>4.0+ stars</option>
                    <option>3.5+ stars</option>
                    <option>3.0+ stars</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Facilities</label>
                  <select className="w-full px-3 py-2 border border-gray-200 rounded-lg">
                    <option>All facilities</option>
                    <option>With Hostel</option>
                    <option>With Labs</option>
                    <option>With Placement</option>
                  </select>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Results */}
        <div className={viewMode === 'grid' ? 'grid lg:grid-cols-2 gap-6' : 'space-y-4'}>
          {filteredColleges.map((college) => (
            <div key={college.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <h3 className="text-xl font-bold text-gray-900">{college.name}</h3>
                      {college.forClass === '10th' && (
                        <span className="bg-blue-100 text-blue-600 px-2 py-1 rounded-full text-xs font-medium">
                          After 10th
                        </span>
                      )}
                      {college.forClass === '12th' && (
                        <span className="bg-green-100 text-green-600 px-2 py-1 rounded-full text-xs font-medium">
                          After 12th
                        </span>
                      )}
                      {college.stream && college.stream !== 'All' && (
                        <span className="bg-purple-100 text-purple-600 px-2 py-1 rounded-full text-xs font-medium">
                          {college.stream}
                        </span>
                      )}
                    </div>
                    <div className="flex items-center text-gray-600 mb-1">
                      <MapPin className="w-4 h-4 mr-1" />
                      <span className="text-sm">{college.location} • {college.distance}</span>
                    </div>
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <div className="flex items-center">
                        <Star className="w-4 h-4 text-yellow-400 fill-current mr-1" />
                        <span className="font-medium">{college.rating}</span>
                      </div>
                      <span>Est. {college.established}</span>
                      <span className="text-green-600 font-medium">{college.type}</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-bold text-green-600">{college.fees}</div>
                    <div className="text-sm text-gray-600">Cutoff: {college.cutoff}</div>
                    {college.hostel && (
                      <div className="text-xs text-blue-600 font-medium">Hostel Available</div>
                    )}
                  </div>
                </div>

                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Available Courses</h4>
                  <div className="flex flex-wrap gap-2">
                    {college.courses.slice(0, 3).map((course, idx) => (
                      <span
                        key={idx}
                        className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm"
                      >
                        {course}
                      </span>
                    ))}
                    {college.courses.length > 3 && (
                      <span className="text-sm text-gray-500">+{college.courses.length - 3} more</span>
                    )}
                  </div>
                </div>

                <div className="mb-4">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-gray-600">Accreditation:</span>
                      <div className="font-medium">{college.accreditation}</div>
                    </div>
                    <div>
                      <span className="text-gray-600">Placement:</span>
                      <div className="font-medium text-green-600">{college.placement}</div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <button
                    onClick={() => setSelectedCollege(college)}
                    className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    View Details
                  </button>
                  <div className="flex gap-2">
                    <a
                      href={`tel:${college.phone}`}
                      className="flex items-center justify-center w-10 h-10 border border-gray-300 rounded-lg hover:bg-gray-50"
                    >
                      <Phone className="w-4 h-4 text-gray-600" />
                    </a>
                    <a
                      href={`https://${college.website}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center w-10 h-10 border border-gray-300 rounded-lg hover:bg-gray-50"
                    >
                      <Globe className="w-4 h-4 text-gray-600" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredColleges.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <Search className="w-16 h-16 mx-auto" />
            </div>
            <h3 className="text-xl font-semibold text-gray-600 mb-2">No colleges found</h3>
            <p className="text-gray-500">Try adjusting your search criteria or filters</p>
          </div>
        )}

        {/* College Comparison Feature */}
        {filteredColleges.length > 1 && (
          <div className="mt-12 bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Quick Comparison</h3>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <TrendingUp className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                <div className="text-lg font-bold text-blue-600">
                  {Math.max(...filteredColleges.map(c => c.rating))}
                </div>
                <div className="text-sm text-gray-600">Highest Rated</div>
              </div>
              <div className="text-center p-4 bg-green-50 rounded-lg">
                <Award className="w-8 h-8 text-green-600 mx-auto mb-2" />
                <div className="text-lg font-bold text-green-600">
                  ₹{Math.min(...filteredColleges.map(c => parseInt(c.fees.replace(/[^\d]/g, ''))))}
                </div>
                <div className="text-sm text-gray-600">Lowest Fees</div>
              </div>
              <div className="text-center p-4 bg-purple-50 rounded-lg">
                <MapPin className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                <div className="text-lg font-bold text-purple-600">
                  {Math.min(...filteredColleges.map(c => parseFloat(c.distance)))} km
                </div>
                <div className="text-sm text-gray-600">Nearest College</div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* College Details Modal */}
      {selectedCollege && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl max-w-4xl w-full max-h-screen overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{selectedCollege.name}</h3>
                  <div className="flex items-center space-x-4 text-sm text-gray-600">
                    <span>{selectedCollege.location}</span>
                    <span>•</span>
                    <span>Est. {selectedCollege.established}</span>
                    <span>•</span>
                    <span className="text-green-600 font-medium">{selectedCollege.type}</span>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedCollege(null)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Contact Information</h4>
                    <div className="space-y-2 text-gray-600">
                      <p><MapPin className="w-4 h-4 inline mr-2" />{selectedCollege.location}</p>
                      <p><Phone className="w-4 h-4 inline mr-2" />{selectedCollege.phone}</p>
                      <p><Globe className="w-4 h-4 inline mr-2" />{selectedCollege.website}</p>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Admission Details</h4>
                    <div className="space-y-2 text-gray-600">
                      <p>Annual Fees: <span className="font-medium text-green-600">{selectedCollege.fees}</span></p>
                      <p>Cutoff Percentage: <span className="font-medium">{selectedCollege.cutoff}</span></p>
                      <p>Accreditation: <span className="font-medium">{selectedCollege.accreditation}</span></p>
                      <p>Rating: <span className="font-medium text-yellow-600">{selectedCollege.rating}/5</span></p>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Scholarships Available</h4>
                    <div className="space-y-2">
                      {selectedCollege.scholarships.map((scholarship, idx) => (
                        <span
                          key={idx}
                          className="inline-block bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm mr-2 mb-2"
                        >
                          {scholarship}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Available Courses</h4>
                    <div className="grid grid-cols-1 gap-2">
                      {selectedCollege.courses.map((course, idx) => (
                        <div
                          key={idx}
                          className="bg-blue-50 text-blue-700 px-3 py-2 rounded-lg text-center font-medium"
                        >
                          {course}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Campus Facilities</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {selectedCollege.facilities.map((facility, idx) => (
                        <span
                          key={idx}
                          className="bg-gray-100 text-gray-700 px-3 py-2 rounded-lg text-center text-sm"
                        >
                          {facility}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Placement Information</h4>
                    <div className="bg-green-50 p-4 rounded-lg">
                      <p className="text-green-800 font-medium">{selectedCollege.placement}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 flex gap-4">
                <button className="flex-1 bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors font-medium">
                  Add to Favorites
                </button>
                <button className="flex-1 bg-green-600 text-white py-3 px-6 rounded-lg hover:bg-green-700 transition-colors font-medium">
                  Apply Now
                </button>
                <button className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
                  Compare
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};