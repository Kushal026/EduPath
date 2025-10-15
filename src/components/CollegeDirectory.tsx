import React, { useState } from 'react';
import { Search, MapPin, Star, Filter, Phone, Globe } from 'lucide-react';

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
}

const colleges: College[] = [
  {
    id: 1,
    name: "Government College of Arts & Science",
    location: "Mumbai, Maharashtra",
    distance: "2.5 km",
    rating: 4.2,
    courses: ["B.A.", "B.Sc.", "B.Com", "BBA"],
    fees: "₹8,000/year",
    cutoff: "65%",
    facilities: ["Library", "Hostel", "Computer Lab", "Sports Complex"],
    phone: "+91-22-12345678",
    website: "www.gcas-mumbai.edu.in",
    type: "Government"
  },
  {
    id: 2,
    name: "Dr. B.R. Ambedkar Government College",
    location: "Delhi, Delhi",
    distance: "5.8 km",
    rating: 4.5,
    courses: ["B.A.", "B.Sc.", "B.Com", "BCA"],
    fees: "₹6,500/year",
    cutoff: "70%",
    facilities: ["Library", "Cafeteria", "Computer Lab", "Auditorium"],
    phone: "+91-11-87654321",
    website: "www.ambedkar-college.edu.in",
    type: "Government"
  },
  {
    id: 3,
    name: "Government Commerce College",
    location: "Bangalore, Karnataka",
    distance: "8.2 km",
    rating: 4.0,
    courses: ["B.Com", "BBA", "B.Sc. Economics"],
    fees: "₹7,200/year",
    cutoff: "60%",
    facilities: ["Library", "Computer Lab", "Placement Cell"],
    phone: "+91-80-11223344",
    website: "www.gcc-bangalore.edu.in",
    type: "Government"
  },
  {
    id: 4,
    name: "Government Engineering College",
    location: "Pune, Maharashtra",
    distance: "12.3 km",
    rating: 4.6,
    courses: ["B.Tech CSE", "B.Tech Mechanical", "B.Tech Civil", "B.Tech Electrical"],
    fees: "₹45,000/year",
    cutoff: "85%",
    facilities: ["Library", "Hostel", "Labs", "Workshop", "Placement Cell"],
    phone: "+91-20-12345678",
    website: "www.gec-pune.edu.in",
    type: "Government"
  },
  {
    id: 5,
    name: "Government Medical College",
    location: "Chennai, Tamil Nadu",
    distance: "15.7 km",
    rating: 4.8,
    courses: ["MBBS", "BDS", "B.Pharma", "B.Sc. Nursing"],
    fees: "₹25,000/year",
    cutoff: "95%",
    facilities: ["Hospital", "Library", "Hostel", "Research Labs", "Anatomy Museum"],
    phone: "+91-44-87654321",
    website: "www.gmc-chennai.edu.in",
    type: "Government"
  },
  {
    id: 6,
    name: "Government Law College",
    location: "Kolkata, West Bengal",
    distance: "6.4 km",
    rating: 4.3,
    courses: ["LLB", "B.A. LLB", "LLM"],
    fees: "₹12,000/year",
    cutoff: "75%",
    facilities: ["Library", "Moot Court", "Computer Lab", "Seminar Hall"],
    phone: "+91-33-11223344",
    website: "www.glc-kolkata.edu.in",
    type: "Government"
  },
  {
    id: 7,
    name: "Government Polytechnic College",
    location: "Hyderabad, Telangana",
    distance: "9.8 km",
    rating: 4.1,
    courses: ["Diploma Mechanical", "Diploma Civil", "Diploma Electrical", "Diploma CSE"],
    fees: "₹15,000/year",
    cutoff: "55%",
    facilities: ["Workshop", "Library", "Computer Lab", "Hostel"],
    phone: "+91-40-98765432",
    website: "www.gpc-hyderabad.edu.in",
    type: "Government"
  },
  {
    id: 8,
    name: "Government Arts College",
    location: "Jaipur, Rajasthan",
    distance: "7.2 km",
    rating: 3.9,
    courses: ["B.A. English", "B.A. Hindi", "B.A. History", "B.A. Political Science"],
    fees: "₹5,500/year",
    cutoff: "50%",
    facilities: ["Library", "Auditorium", "Computer Lab", "Cultural Center"],
    phone: "+91-141-55667788",
    website: "www.gac-jaipur.edu.in",
    type: "Government"
  },
  {
    id: 9,
    name: "Government Teacher Training College",
    location: "Lucknow, Uttar Pradesh",
    distance: "11.5 km",
    rating: 4.0,
    courses: ["B.Ed", "D.Ed", "M.Ed", "B.A. B.Ed"],
    fees: "₹18,000/year",
    cutoff: "60%",
    facilities: ["Library", "Practice School", "Computer Lab", "Psychology Lab"],
    phone: "+91-522-33445566",
    website: "www.gttc-lucknow.edu.in",
    type: "Government"
  },
  {
    id: 10,
    name: "Government Agriculture College",
    location: "Bhopal, Madhya Pradesh",
    distance: "18.3 km",
    rating: 4.2,
    courses: ["B.Sc. Agriculture", "B.Sc. Horticulture", "B.Tech Food Technology"],
    fees: "₹22,000/year",
    cutoff: "70%",
    facilities: ["Farm", "Library", "Hostel", "Research Labs", "Greenhouse"],
    phone: "+91-755-77889900",
    website: "www.gac-bhopal.edu.in",
    type: "Government"
  },
  {
    id: 11,
    name: "Government Pharmacy College",
    location: "Ahmedabad, Gujarat",
    distance: "13.6 km",
    rating: 4.4,
    courses: ["B.Pharma", "D.Pharma", "M.Pharma"],
    fees: "₹35,000/year",
    cutoff: "80%",
    facilities: ["Pharmacy Lab", "Library", "Hostel", "Research Center"],
    phone: "+91-79-22334455",
    website: "www.gpc-ahmedabad.edu.in",
    type: "Government"
  },
  {
    id: 12,
    name: "Government Veterinary College",
    location: "Nagpur, Maharashtra",
    distance: "16.2 km",
    rating: 4.3,
    courses: ["B.V.Sc", "B.Sc. Dairy Technology", "B.Sc. Fisheries"],
    fees: "₹28,000/year",
    cutoff: "78%",
    facilities: ["Veterinary Hospital", "Animal Farm", "Library", "Research Labs"],
    phone: "+91-712-44556677",
    website: "www.gvc-nagpur.edu.in",
    type: "Government"
  },
  {
    id: 13,
    name: "Government Hotel Management Institute",
    location: "Goa, Goa",
    distance: "25.4 km",
    rating: 4.3,
    courses: ["B.Sc. Hotel Management", "Diploma in Hotel Management", "B.Sc. Tourism"],
    fees: "₹28,000/year",
    cutoff: "65%",
    facilities: ["Training Kitchen", "Restaurant", "Library", "Hostel"],
    phone: "+91-832-44556677",
    website: "www.ghmi-goa.edu.in",
    type: "Government"
  },
  {
    id: 14,
    name: "Government Design College",
    location: "Chandigarh, Punjab",
    distance: "14.8 km",
    rating: 4.1,
    courses: ["B.Des Fashion", "B.Des Product", "B.Des Graphics", "B.Des Interior"],
    fees: "₹32,000/year",
    cutoff: "72%",
    facilities: ["Design Studios", "Library", "Computer Lab", "Workshop"],
    phone: "+91-172-66778899",
    website: "www.gdc-chandigarh.edu.in",
    type: "Government"
  },
  {
    id: 15,
    name: "Government Ayurvedic College",
    location: "Varanasi, Uttar Pradesh",
    distance: "19.5 km",
    rating: 4.2,
    courses: ["BAMS", "B.Sc. Ayurveda", "Diploma in Ayurveda"],
    fees: "₹24,000/year",
    cutoff: "72%",
    facilities: ["Ayurvedic Hospital", "Herbal Garden", "Library", "Research Center"],
    phone: "+91-542-77889900",
    website: "www.gac-varanasi.edu.in",
    type: "Government"
  },
  {
    id: 16,
    name: "Government Forestry College",
    location: "Dehradun, Uttarakhand",
    distance: "22.1 km",
    rating: 4.4,
    courses: ["B.Sc. Forestry", "B.Sc. Wildlife", "B.Sc. Environmental Science"],
    fees: "₹26,000/year",
    cutoff: "68%",
    facilities: ["Forest Research Center", "Wildlife Sanctuary", "Library", "Field Station"],
    phone: "+91-135-88990011",
    website: "www.gfc-dehradun.edu.in",
    type: "Government"
  },
  {
    id: 17,
    name: "Government Dental College",
    location: "Indore, Madhya Pradesh",
    distance: "17.8 km",
    rating: 4.5,
    courses: ["BDS", "MDS", "Diploma in Dental Hygiene"],
    fees: "₹42,000/year",
    cutoff: "88%",
    facilities: ["Dental Hospital", "Clinical Labs", "Library", "Research Center"],
    phone: "+91-731-99001122",
    website: "www.gdc-indore.edu.in",
    type: "Government"
  },
  {
    id: 18,
    name: "Government Nursing College",
    location: "Kochi, Kerala",
    distance: "13.4 km",
    rating: 4.3,
    courses: ["B.Sc. Nursing", "GNM", "Post Basic B.Sc. Nursing"],
    fees: "₹21,000/year",
    cutoff: "75%",
    facilities: ["Nursing Skills Lab", "Hospital Attachment", "Library", "Hostel"],
    phone: "+91-484-11223344",
    website: "www.gnc-kochi.edu.in",
    type: "Government"
  },
  {
    id: 19,
    name: "Government Fine Arts College",
    location: "Mysore, Karnataka",
    distance: "20.6 km",
    rating: 4.1,
    courses: ["BFA Painting", "BFA Sculpture", "BFA Applied Arts", "B.A. Music"],
    fees: "₹16,000/year",
    cutoff: "55%",
    facilities: ["Art Studios", "Gallery", "Music Room", "Library"],
    phone: "+91-821-55667788",
    website: "www.gfac-mysore.edu.in",
    type: "Government"
  },
  {
    id: 20,
    name: "Government Physical Education College",
    location: "Patiala, Punjab",
    distance: "18.9 km",
    rating: 4.2,
    courses: ["B.P.Ed", "M.P.Ed", "B.Sc. Sports Science"],
    fees: "₹19,000/year",
    cutoff: "62%",
    facilities: ["Sports Complex", "Gymnasium", "Swimming Pool", "Athletic Track"],
    phone: "+91-175-33445566",
    website: "www.gpec-patiala.edu.in",
    type: "Government"
  },
  {
    id: 21,
    name: "Government Mass Communication College",
    location: "Bhubaneswar, Odisha",
    distance: "14.7 km",
    rating: 4.0,
    courses: ["B.J.M.C.", "B.A. Mass Communication", "Diploma in Journalism"],
    fees: "₹17,500/year",
    cutoff: "68%",
    facilities: ["TV Studio", "Radio Station", "Computer Lab", "Library"],
    phone: "+91-674-77889900",
    website: "www.gmcc-bhubaneswar.edu.in",
    type: "Government"
  },
  {
    id: 22,
    name: "Government Biotechnology Institute",
    location: "Hyderabad, Telangana",
    distance: "21.3 km",
    rating: 4.6,
    courses: ["B.Tech Biotechnology", "B.Sc. Biotechnology", "B.Sc. Microbiology"],
    fees: "₹38,000/year",
    cutoff: "82%",
    facilities: ["Biotech Labs", "Research Center", "Library", "Incubation Center"],
    phone: "+91-40-22334455",
    website: "www.gbi-hyderabad.edu.in",
    type: "Government"
  },
  {
    id: 23,
    name: "Government Food Technology College",
    location: "Thanjavur, Tamil Nadu",
    distance: "23.8 km",
    rating: 4.1,
    courses: ["B.Tech Food Technology", "B.Sc. Food Science", "Diploma in Food Processing"],
    fees: "₹29,000/year",
    cutoff: "74%",
    facilities: ["Food Processing Lab", "Quality Control Lab", "Library", "Pilot Plant"],
    phone: "+91-4362-66778899",
    website: "www.gftc-thanjavur.edu.in",
    type: "Government"
  },
  {
    id: 24,
    name: "Government Social Work College",
    location: "Gandhinagar, Gujarat",
    distance: "16.5 km",
    rating: 3.9,
    courses: ["B.S.W.", "M.S.W.", "B.A. Social Work"],
    fees: "₹14,000/year",
    cutoff: "58%",
    facilities: ["Community Center", "Counseling Room", "Library", "Field Work Center"],
    phone: "+91-79-88990011",
    website: "www.gswc-gandhinagar.edu.in",
    type: "Government"
  },
  {
    id: 25,
    name: "Government Library Science College",
    location: "Shimla, Himachal Pradesh",
    distance: "19.2 km",
    rating: 4.0,
    courses: ["B.Lib.Sc.", "M.Lib.Sc.", "Diploma in Library Science"],
    fees: "₹13,500/year",
    cutoff: "60%",
    facilities: ["Digital Library", "Archives", "Computer Lab", "Reading Rooms"],
    phone: "+91-177-99001122",
    website: "www.glsc-shimla.edu.in",
    type: "Government"
  }
];

export const CollegeDirectory: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCourse, setSelectedCourse] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  const [selectedCollege, setSelectedCollege] = useState<College | null>(null);

  const filteredColleges = colleges.filter(college => {
    const matchesSearch = college.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         college.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCourse = !selectedCourse || college.courses.includes(selectedCourse);
    return matchesSearch && matchesCourse;
  });

  const allCourses = Array.from(new Set(colleges.flatMap(college => college.courses)));

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Find Government Colleges Near You</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover quality education opportunities in government colleges with detailed information
            about courses, fees, and facilities.
          </p>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search colleges or locations..."
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

          {showFilters && (
            <div className="mt-4 pt-4 border-t border-gray-200">
              <div className="grid md:grid-cols-3 gap-4">
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
              </div>
            </div>
          )}
        </div>

        {/* Results */}
        <div className="grid lg:grid-cols-2 gap-6">
          {filteredColleges.map((college) => (
            <div key={college.id} className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{college.name}</h3>
                    <div className="flex items-center text-gray-600 mb-1">
                      <MapPin className="w-4 h-4 mr-1" />
                      <span className="text-sm">{college.location} • {college.distance}</span>
                    </div>
                    <div className="flex items-center">
                      <Star className="w-4 h-4 text-yellow-400 fill-current mr-1" />
                      <span className="text-sm font-medium">{college.rating}</span>
                      <span className="text-sm text-gray-500 ml-2">{college.type}</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-bold text-green-600">{college.fees}</div>
                    <div className="text-sm text-gray-600">Cutoff: {college.cutoff}</div>
                  </div>
                </div>

                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Available Courses</h4>
                  <div className="flex flex-wrap gap-2">
                    {college.courses.map((course, idx) => (
                      <span
                        key={idx}
                        className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Facilities</h4>
                  <div className="flex flex-wrap gap-2">
                    {college.facilities.map((facility, idx) => (
                      <span
                        key={idx}
                        className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-sm"
                      >
                        {facility}
                      </span>
                    ))}
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
      </div>

      {/* College Details Modal */}
      {selectedCollege && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl max-w-2xl w-full max-h-screen overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-bold text-gray-900">{selectedCollege.name}</h3>
                <button
                  onClick={() => setSelectedCollege(null)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Contact Information</h4>
                  <p className="text-gray-600 mb-1">{selectedCollege.location}</p>
                  <p className="text-gray-600 mb-1">Phone: {selectedCollege.phone}</p>
                  <p className="text-blue-600">{selectedCollege.website}</p>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Admission Details</h4>
                  <p className="text-gray-600 mb-1">Annual Fees: {selectedCollege.fees}</p>
                  <p className="text-gray-600">Cutoff Percentage: {selectedCollege.cutoff}</p>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Available Courses</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {selectedCollege.courses.map((course, idx) => (
                      <span
                        key={idx}
                        className="bg-blue-100 text-blue-600 px-3 py-2 rounded-lg text-center"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Campus Facilities</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {selectedCollege.facilities.map((facility, idx) => (
                      <span
                        key={idx}
                        className="bg-gray-100 text-gray-700 px-3 py-2 rounded-lg text-center"
                      >
                        {facility}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-6 flex gap-3">
                <button className="flex-1 bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors">
                  Add to Favorites
                </button>
                <button className="flex-1 bg-green-600 text-white py-3 px-4 rounded-lg hover:bg-green-700 transition-colors">
                  Apply Now
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};