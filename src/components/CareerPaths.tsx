import React, { useState } from 'react';
import { ArrowRight, BookOpen, Briefcase, GraduationCap } from 'lucide-react';

interface CareerPath {
  stream: string;
  degrees: string[];
  careers: string[];
  exams: string[];
  color: string;
  forClass: '10th' | '12th' | 'both';
  description: string;
}

interface CareerPathsProps {
  selectedClassLevel: '10th' | '12th' | null;
  selectedStream: string | null;
}

const allCareerPaths: CareerPath[] = [
  // Paths for 10th class students
  {
    stream: 'Science Stream (11th-12th)',
    degrees: ['Science with PCM', 'Science with PCB', 'Science with PCMB', 'Diploma in Engineering', 'Polytechnic Courses'],
    careers: ['Prepare for Engineering', 'Prepare for Medical', 'Research Fields', 'Technical Jobs', 'Laboratory Technician'],
    exams: ['JEE Main preparation', 'NEET preparation', 'State Polytechnic Entrance', 'Diploma Entrance Exams'],
    color: 'blue',
    forClass: '10th',
    description: 'Choose Science stream to pursue engineering, medical, or research careers'
  },
  {
    stream: 'Commerce Stream (11th-12th)',
    degrees: ['Commerce with Math', 'Commerce without Math', 'Business Studies', 'Vocational Commerce'],
    careers: ['Banking Preparation', 'Business Fields', 'Accounting', 'Finance Sector', 'Entrepreneurship'],
    exams: ['CA Foundation preparation', 'Commerce entrance exams', 'Banking exam preparation'],
    color: 'green',
    forClass: '10th',
    description: 'Choose Commerce stream for business, finance, and entrepreneurship opportunities'
  },
  {
    stream: 'Arts/Humanities (11th-12th)',
    degrees: ['Arts with Languages', 'Arts with Social Sciences', 'Fine Arts', 'Applied Arts'],
    careers: ['Teaching', 'Civil Services', 'Journalism', 'Social Work', 'Creative Fields'],
    exams: ['CUET preparation', 'State entrance exams', 'Fine Arts entrance'],
    color: 'purple',
    forClass: '10th',
    description: 'Choose Arts stream for creative, social, and administrative career paths'
  },
  {
    stream: 'Vocational & Technical',
    degrees: ['ITI Courses', 'Diploma Courses', 'Skill Development Programs', 'Trade Certificates'],
    careers: ['Skilled Technician', 'Craftsperson', 'Technical Assistant', 'Self-Employment', 'Industry Jobs'],
    exams: ['ITI Entrance', 'Polytechnic Entrance', 'Skill Certification Tests'],
    color: 'orange',
    forClass: '10th',
    description: 'Choose vocational training for immediate job opportunities and skill-based careers'
  },
  
  // Paths for 12th class students (existing paths)
  {
    stream: 'Science',
    degrees: ['B.Tech/B.E.', 'MBBS', 'B.Sc. Physics', 'B.Sc. Chemistry', 'B.Sc. Mathematics', 'B.Sc. Biology', 'B.Pharma', 'B.Arch', 'B.Sc. Agriculture', 'B.Sc. Nursing', 'BDS', 'B.V.Sc', 'B.Sc. Biotechnology', 'B.Sc. Microbiology', 'B.Sc. Biochemistry', 'B.Sc. Genetics'],
    careers: ['Software Engineer', 'Doctor', 'Research Scientist', 'Data Scientist', 'Pharmacist', 'Architect', 'Agricultural Scientist', 'Biotechnologist', 'Environmental Scientist', 'Aerospace Engineer', 'Dentist', 'Veterinarian', 'Marine Biologist', 'Forensic Scientist', 'Nuclear Physicist', 'Robotics Engineer'],
    exams: ['JEE Main/Advanced', 'NEET', 'GATE', 'CSIR-NET', 'IIT JAM', 'NATA', 'ICAR AIEEA', 'AIIMS', 'JIPMER', 'BITSAT', 'VITEEE', 'COMEDK'],
    color: 'blue',
    forClass: '12th',
    description: 'Advanced science programs leading to technical and medical careers'
  },
  {
    stream: 'Commerce',
    degrees: ['B.Com', 'BBA', 'B.Com (H)', 'BCA', 'B.Sc. Economics', 'BMS', 'B.Com Banking', 'B.Com Taxation', 'B.Com International Business', 'BBM', 'BFM', 'B.Com Insurance', 'B.Com E-Commerce', 'B.Com Marketing', 'B.Com Finance'],
    careers: ['Chartered Accountant', 'Business Analyst', 'Financial Advisor', 'Bank Manager', 'Investment Banker', 'Tax Consultant', 'Company Secretary', 'Financial Planner', 'Entrepreneur', 'Digital Marketing Manager', 'Stock Broker', 'Insurance Agent', 'Export-Import Manager', 'Cost Accountant', 'Auditor', 'Business Consultant'],
    exams: ['CA Foundation', 'CS Executive', 'CMA', 'CLAT', 'MAT', 'CAT', 'XAT', 'SNAP', 'CMAT', 'ATMA', 'NMAT', 'IIFT'],
    color: 'green',
    forClass: '12th',
    description: 'Business and commerce programs for finance and management careers'
  },
  {
    stream: 'Arts',
    degrees: ['B.A. English', 'B.A. History', 'B.A. Political Science', 'B.A. Psychology', 'B.A. Sociology', 'B.A. Economics', 'B.A. Philosophy', 'B.A. Geography', 'B.A. Fine Arts', 'B.A. Mass Communication', 'B.A. Anthropology', 'B.A. Linguistics', 'B.A. Archaeology', 'B.A. Music', 'B.A. Dance', 'B.A. Theatre Arts'],
    careers: ['Journalist', 'Teacher', 'Civil Servant', 'Social Worker', 'Content Writer', 'Counselor', 'Diplomat', 'Historian', 'Psychologist', 'Artist', 'Film Director', 'Public Relations Officer', 'Museum Curator', 'Translator', 'Cultural Researcher', 'Social Media Manager', 'Human Rights Activist', 'Policy Analyst'],
    exams: ['UPSC', 'SSC', 'UGC-NET', 'State PSC', 'CLAT', 'JMI Mass Comm', 'IIMC Entrance', 'DUET', 'BHU UET', 'JNU Entrance'],
    color: 'purple',
    forClass: '12th',
    description: 'Liberal arts and humanities programs for diverse career opportunities'
  },
  {
    stream: 'Vocational',
    degrees: ['Diploma in Engineering', 'ITI Courses', 'Hotel Management', 'Fashion Design', 'Interior Design', 'Animation', 'Photography', 'Culinary Arts', 'Beauty & Wellness', 'Automobile Technology', 'Electronics', 'Plumbing', 'Carpentry', 'Welding', 'Textile Design'],
    careers: ['Technical Specialist', 'Hotel Manager', 'Fashion Designer', 'Interior Designer', 'Animator', 'Chef', 'Beauty Therapist', 'Photographer', 'Event Manager', 'Travel Guide', 'Automobile Technician', 'Electronics Technician', 'Skilled Craftsperson', 'Freelance Artist', 'Makeup Artist', 'Wedding Planner'],
    exams: ['Polytechnic Entrance', 'NIFT', 'NID', 'NCHM JEE', 'UCEED', 'CEED', 'NATA', 'JEE B.Arch'],
    color: 'orange',
    forClass: '12th',
    description: 'Skill-based and creative programs for immediate employment opportunities'
  },
  {
    stream: 'Professional',
    degrees: ['LLB', 'B.Ed', 'B.Arch', 'B.Des', 'BFA', 'B.Journalism', 'B.Lib.Sc', 'B.P.Ed', 'B.A. LLB', 'LLM', 'M.Ed', 'B.Planning', 'B.Voc Teaching', 'Diploma in Education'],
    careers: ['Lawyer', 'Teacher', 'Architect', 'Designer', 'Artist', 'Journalist', 'Librarian', 'Sports Coach', 'Judge', 'Legal Advisor', 'Urban Planner', 'Education Consultant', 'Principal', 'Legal Researcher', 'Court Reporter', 'Paralegal'],
    exams: ['CLAT', 'AILET', 'B.Ed Entrance', 'NATA', 'UCEED', 'JMI Mass Comm', 'IGNOU B.Ed', 'LSAT', 'DU LLB', 'BHU LLB'],
    color: 'red',
    forClass: '12th',
    description: 'Professional degree programs for specialized career paths'
  },
  {
    stream: 'Technology',
    degrees: ['BCA', 'B.Tech IT', 'B.Sc. Computer Science', 'B.Sc. IT', 'Diploma in Computer Applications', 'B.Voc Software Development', 'B.Tech CSE', 'B.Tech AI/ML', 'B.Tech Data Science', 'B.Sc. Cyber Security', 'B.Tech Robotics'],
    careers: ['Software Developer', 'Web Developer', 'Mobile App Developer', 'System Administrator', 'Database Administrator', 'Cybersecurity Specialist', 'AI/ML Engineer', 'Game Developer', 'Cloud Architect', 'DevOps Engineer', 'Blockchain Developer', 'UI/UX Designer', 'Data Analyst', 'Network Engineer'],
    exams: ['JEE Main', 'State CET', 'NIMCET', 'BCA Entrance', 'BITSAT', 'VITEEE', 'SRMJEEE', 'KIITEE'],
    color: 'indigo',
    forClass: '12th',
    description: 'Technology and computer science programs for IT industry careers'
  },
  {
    stream: 'Agriculture & Life Sciences',
    degrees: ['B.Sc. Agriculture', 'B.Sc. Horticulture', 'B.Sc. Forestry', 'B.Sc. Fisheries', 'B.V.Sc', 'B.Sc. Dairy Technology', 'B.Sc. Food Technology', 'B.Sc. Environmental Science', 'B.Sc. Biotechnology'],
    careers: ['Agricultural Officer', 'Horticulturist', 'Forest Officer', 'Veterinarian', 'Food Technologist', 'Environmental Consultant', 'Agricultural Scientist', 'Dairy Technologist', 'Fisheries Officer', 'Biotechnologist', 'Organic Farmer', 'Agricultural Journalist'],
    exams: ['ICAR AIEEA', 'State Agriculture Entrance', 'OUAT', 'KEAM Agriculture', 'AP EAMCET Agriculture', 'TS EAMCET Agriculture'],
    color: 'green',
    forClass: '12th',
    description: 'Agriculture and life sciences programs for sustainable development careers'
  },
  {
    stream: 'Medical & Health Sciences',
    degrees: ['MBBS', 'BDS', 'BAMS', 'BHMS', 'BUMS', 'B.Pharma', 'B.Sc. Nursing', 'BPT', 'BOT', 'B.Sc. Medical Lab Technology', 'B.Sc. Radiology', 'B.Sc. Operation Theatre Technology'],
    careers: ['Doctor', 'Dentist', 'Ayurvedic Doctor', 'Homeopathic Doctor', 'Unani Doctor', 'Pharmacist', 'Nurse', 'Physiotherapist', 'Occupational Therapist', 'Medical Lab Technician', 'Radiologist', 'Medical Researcher', 'Hospital Administrator'],
    exams: ['NEET', 'AIIMS', 'JIPMER', 'State NEET', 'NEET MDS', 'GPAT', 'Nursing Entrance Exams'],
    color: 'red',
    forClass: '12th',
    description: 'Medical and healthcare programs for serving humanity through medicine'
  }
];

export const CareerPaths: React.FC<CareerPathsProps> = ({ selectedClassLevel, selectedStream }) => {
  const [expandedStream, setExpandedStream] = useState<string | null>(null);

  // Filter career paths based on selected class level and stream
  let careerPaths;
  
  if (selectedClassLevel === '12th' && selectedStream) {
    // For 12th class students, show only their stream-specific paths
    careerPaths = allCareerPaths.filter(path => 
      path.forClass === '12th' && 
      path.stream.toLowerCase().includes(selectedStream.toLowerCase())
    );
  } else {
    // For 10th class or no stream selected, show all relevant paths
    careerPaths = allCareerPaths.filter(path => 
      path.forClass === 'both' || 
      path.forClass === selectedClassLevel ||
      selectedClassLevel === null
    );
  }

  const getColorClasses = (color: string, variant: 'bg' | 'text' | 'border') => {
    const colorMap = {
      blue: { bg: 'bg-blue-600', text: 'text-blue-600', border: 'border-blue-600' },
      green: { bg: 'bg-green-600', text: 'text-green-600', border: 'border-green-600' },
      purple: { bg: 'bg-purple-600', text: 'text-purple-600', border: 'border-purple-600' },
      orange: { bg: 'bg-orange-600', text: 'text-orange-600', border: 'border-orange-600' },
      red: { bg: 'bg-red-600', text: 'text-red-600', border: 'border-red-600' },
      indigo: { bg: 'bg-indigo-600', text: 'text-indigo-600', border: 'border-indigo-600' }
    };
    return colorMap[color as keyof typeof colorMap][variant];
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            {selectedClassLevel === '10th' ? 'Choose Your Stream for 11th-12th' : 
             selectedClassLevel === '12th' ? 
               (selectedStream ? `Career Opportunities for ${selectedStream} Stream Students` : 'Explore Degree Programs') : 
             'Explore Career Pathways'}
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {selectedClassLevel === '10th' ? 'Select the right stream after 10th class to align with your career goals.' :
             selectedClassLevel === '12th' ? 
               (selectedStream ? `Based on your ${selectedStream} background in 12th class, here are the best degree programs, career opportunities, and entrance exams for you.` : 'Choose the perfect degree program based on your 12th class background.') :
             'Discover the journey from choosing your stream to building a successful career. Each path offers unique opportunities and growth potential.'}
          </p>
          
          {selectedClassLevel === '12th' && selectedStream && (
            <div className="mt-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 max-w-3xl mx-auto border border-blue-200">
              <div className="flex items-center justify-center mb-3">
                <div className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                  {selectedStream} Stream Graduate
                </div>
              </div>
              <p className="text-blue-800 font-semibold text-lg mb-2">
                🎓 Personalized Recommendations for {selectedStream} Students
              </p>
              <p className="text-blue-700 text-sm">
                These degree programs, career paths, and entrance exams are specifically curated based on your {selectedStream} background and current industry demands.
              </p>
            </div>
          )}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {careerPaths.map((path, index) => (
            <div
              key={index}
              className={`bg-white rounded-xl shadow-lg border-2 transition-all cursor-pointer ${
                expandedStream === path.stream
                  ? `${getColorClasses(path.color, 'border')} shadow-xl transform scale-105`
                  : 'border-gray-200 hover:shadow-xl'
              }`}
              onClick={() => setExpandedStream(expandedStream === path.stream ? null : path.stream)}
            >
              <div className={`${getColorClasses(path.color, 'bg')} p-6 rounded-t-xl`}>
                <h3 className="text-xl font-bold text-white">{path.stream} Stream</h3>
                <p className="text-white/90 mt-2">{path.description}</p>
              </div>

              <div className="p-6">
                <div className="space-y-6">
                  <div>
                    <div className="flex items-center space-x-2 mb-3">
                      <GraduationCap className={`w-5 h-5 ${getColorClasses(path.color, 'text')}`} />
                      <h4 className="font-semibold text-gray-900">Degree Options</h4>
                    </div>
                    <div className="space-y-2">
                      {path.degrees.slice(0, expandedStream === path.stream ? path.degrees.length : 3).map((degree, idx) => (
                        <span
                          key={idx}
                          className="inline-block bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm mr-2 mb-2"
                        >
                          {degree}
                        </span>
                      ))}
                    </div>
                  </div>

                  {expandedStream === path.stream && (
                    <>
                      <div>
                        <div className="flex items-center space-x-2 mb-3">
                          <Briefcase className={`w-5 h-5 ${getColorClasses(path.color, 'text')}`} />
                          <h4 className="font-semibold text-gray-900">Career Opportunities</h4>
                        </div>
                        <div className="space-y-2">
                          {path.careers.map((career, idx) => (
                            <div key={idx} className="flex items-center space-x-2">
                              <ArrowRight className="w-4 h-4 text-gray-400" />
                              <span className="text-gray-600">{career}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div>
                        <div className="flex items-center space-x-2 mb-3">
                          <BookOpen className={`w-5 h-5 ${getColorClasses(path.color, 'text')}`} />
                          <h4 className="font-semibold text-gray-900">Competitive Exams</h4>
                        </div>
                        <div className="space-y-2">
                          {path.exams.map((exam, idx) => (
                            <span
                              key={idx}
                              className={`inline-block border ${getColorClasses(path.color, 'border')} ${getColorClasses(path.color, 'text')} px-3 py-1 rounded-full text-sm mr-2 mb-2`}
                            >
                              {exam}
                            </span>
                          ))}
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="bg-blue-50 rounded-xl p-8 max-w-4xl mx-auto">
            {selectedClassLevel === '10th' ? (
              <>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Need Personalized Guidance?</h3>
                <p className="text-gray-600 mb-6">
                  Take our aptitude quiz to get customized recommendations based on your interests and strengths.
                </p>
                <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors inline-flex items-center space-x-2">
                  <span>Take Aptitude Quiz</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </>
            ) : (
              <>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Take the Next Step?</h3>
                <p className="text-gray-600 mb-6">
                  Explore our college directory to find the best institutions for your chosen career path.
                </p>
                <button 
                  onClick={() => window.dispatchEvent(new CustomEvent('navigateToColleges', { 
                    detail: { classLevel: selectedClassLevel, stream: selectedStream } 
                  }))}
                  className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors inline-flex items-center space-x-2"
                >
                  <span>Find Colleges</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};