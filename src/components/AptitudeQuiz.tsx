import React, { useState } from 'react';
import { CheckCircle, ArrowRight, RotateCcw } from 'lucide-react';

interface Question {
  id: number;
  text: string;
  options: string[];
  category: 'science' | 'arts' | 'commerce';
  forClass: '10th' | '12th' | 'both';
}

interface AptitudeQuizProps {
  selectedClassLevel: '10th' | '12th' | null;
  selectedStream: string | null;
}

const allQuestions: Question[] = [
  // Questions for 10th class students
  {
    id: 1,
    text: "Which subjects do you enjoy the most in your current studies?",
    options: [
      "Mathematics and Science (Physics, Chemistry, Biology)",
      "Languages and Social Studies (History, Geography, Civics)",
      "Mathematics and Business-related topics",
      "Arts, Music, and Creative subjects"
    ],
    category: 'science',
    forClass: '10th'
  },
  {
    id: 2,
    text: "What kind of career do you dream about after completing your education?",
    options: [
      "Engineer, Doctor, or Scientist",
      "Teacher, Writer, or Government Officer",
      "Business Owner, Banker, or Accountant",
      "Artist, Designer, or Social Worker"
    ],
    category: 'science',
    forClass: '10th'
  },
  {
    id: 3,
    text: "Which stream interests you most for 11th and 12th?",
    options: [
      "Science (PCM/PCB) - Physics, Chemistry, Math/Biology",
      "Arts/Humanities - History, Political Science, Psychology",
      "Commerce - Accountancy, Business Studies, Economics",
      "Vocational courses - ITI, Diploma, Skill-based training"
    ],
    category: 'science',
    forClass: '10th'
  },
  {
    id: 4,
    text: "What type of learning environment do you prefer?",
    options: [
      "Laboratory experiments and practical work",
      "Reading, writing, and group discussions",
      "Case studies and real-world problem solving",
      "Hands-on training and skill development"
    ],
    category: 'science',
    forClass: '10th'
  },
  {
    id: 5,
    text: "Which activity would you choose for a school project?",
    options: [
      "Building a science model or conducting an experiment",
      "Writing an essay or creating a presentation on social issues",
      "Preparing a business plan or market survey",
      "Creating artwork, music, or organizing an event"
    ],
    category: 'science',
    forClass: '10th'
  },
  
  // Questions for 12th class students
  {
    id: 1,
    text: "Based on your 12th class subjects, which field excites you most?",
    options: [
      "Advanced Mathematics, Physics, Chemistry, or Biology",
      "Literature, History, Political Science, or Psychology",
      "Economics, Accountancy, or Business Studies",
      "Computer Science, Arts, or Applied subjects"
    ],
    category: 'science',
    forClass: '12th'
  },
  {
    id: 2,
    text: "What type of degree program are you most interested in pursuing?",
    options: [
      "Engineering (B.Tech), Medical (MBBS), or Pure Sciences (B.Sc)",
      "Arts (B.A.), Literature, or Social Sciences",
      "Commerce (B.Com), Business Administration (BBA), or Management",
      "Professional courses (Law, Design, Mass Communication)"
    ],
    category: 'science',
    forClass: '12th'
  },
  {
    id: 3,
    text: "Which entrance exam are you most willing to prepare for?",
    options: [
      "JEE Main/Advanced, NEET, or other technical entrance exams",
      "CUET, DU entrance, or university-specific exams for arts",
      "Commerce entrance exams, CA Foundation, or management tests",
      "CLAT (Law), NIFT (Design), or specialized professional exams"
    ],
    category: 'science',
    forClass: '12th'
  },
  {
    id: 4,
    text: "What type of career growth do you envision in 5-10 years?",
    options: [
      "Technical expert, researcher, or healthcare professional",
      "Educator, civil servant, or social impact leader",
      "Business leader, entrepreneur, or financial expert",
      "Creative professional, consultant, or independent practitioner"
    ],
    category: 'science',
    forClass: '12th'
  },
  {
    id: 5,
    text: "Which type of college environment do you prefer?",
    options: [
      "Technical campus with labs, research facilities, and industry connections",
      "Liberal arts campus with libraries, cultural activities, and diverse programs",
      "Business-focused environment with internships and corporate partnerships",
      "Creative campus with studios, workshops, and flexible learning approaches"
    ],
    category: 'science',
    forClass: '12th'
  },
  
  // Common questions for both
  {
    id: 6,
    text: "What kind of career impact do you want to make?",
    options: [
      "Innovate technology and solve technical problems",
      "Influence culture and society through arts",
      "Drive economic growth and entrepreneurship",
      "Advance scientific knowledge and research"
    ],
    category: 'science',
    forClass: 'both'
  },
  {
    id: 7,
    text: "Which work style suits you best?",
    options: [
      "Systematic analysis and logical reasoning",
      "Creative expression and artistic freedom",
      "Strategic planning and business development",
      "Collaborative teamwork and communication"
    ],
    category: 'science',
    forClass: 'both'
  },
  {
    id: 8,
    text: "What type of challenges energize you?",
    options: [
      "Complex technical and scientific problems",
      "Creative projects and artistic endeavors",
      "Business strategy and market analysis",
      "Social issues and community development"
    ],
    category: 'science',
    forClass: 'both'
  },
  {
    id: 9,
    text: "Which learning method do you prefer?",
    options: [
      "Hands-on experiments and practical work",
      "Reading, writing, and creative projects",
      "Case studies and real-world applications",
      "Group discussions and collaborative learning"
    ],
    category: 'science',
    forClass: 'both'
  },
  {
    id: 10,
    text: "What kind of future do you envision for yourself?",
    options: [
      "Leading technological innovations",
      "Creating meaningful art and literature",
      "Building successful businesses",
      "Making positive social changes"
    ],
    category: 'science',
    forClass: 'both'
  },
  {
    id: 11,
    text: "Which skills do you want to develop most?",
    options: [
      "Technical expertise and analytical thinking",
      "Creative expression and communication",
      "Leadership and business acumen",
      "Research and critical thinking"
    ],
    category: 'science',
    forClass: 'both'
  },
  {
    id: 12,
    text: "What type of recognition would make you happiest?",
    options: [
      "Being known for scientific discoveries",
      "Being appreciated for creative works",
      "Being successful in business ventures",
      "Being respected for social contributions"
    ],
    category: 'science',
    forClass: 'both'
  }
];

export const AptitudeQuiz: React.FC<AptitudeQuizProps> = ({ selectedClassLevel, selectedStream }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [showResults, setShowResults] = useState(false);

  // Filter questions based on selected class level
  const questions = allQuestions.filter(q => 
    q.forClass === 'both' || 
    q.forClass === selectedClassLevel ||
    selectedClassLevel === null
  );

  const handleAnswer = (optionIndex: number) => {
    const newAnswers = [...answers, optionIndex];
    setAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setAnswers([]);
    setShowResults(false);
  };

  const handleExploreColleges = () => {
    // This would be handled by the parent component
    window.dispatchEvent(new CustomEvent('navigateToColleges', { 
      detail: { classLevel: selectedClassLevel, stream: selectedStream } 
    }));
  };

  const getRecommendation = () => {
    if (selectedClassLevel === '10th') {
      return getRecommendationFor10th();
    } else if (selectedClassLevel === '12th') {
      return getRecommendationFor12th();
    } else {
      return getGeneralRecommendation();
    }
  };

  const getRecommendationFor10th = () => {
    // Simple recommendation logic based on answers
    const scienceScore = answers.filter(answer => answer === 0).length;
    const artsScore = answers.filter(answer => answer === 1 || answer === 3).length;
    const commerceScore = answers.filter(answer => answer === 2).length;

    if (scienceScore >= artsScore && scienceScore >= commerceScore) {
      return {
        stream: 'Science Stream (11th-12th)',
        description: 'Your analytical thinking and interest in mathematics and science suggest you should choose Science stream.',
        subjects: ['Physics', 'Chemistry', 'Mathematics', 'Biology (optional)'],
        careers: ['Engineer', 'Doctor', 'Research Scientist', 'Data Analyst', 'Pharmacist', 'Architect'],
        courses: ['Science Stream (PCM)', 'Science Stream (PCB)', 'Diploma in Engineering', 'Polytechnic Courses']
      };
    } else if (commerceScore >= artsScore) {
      return {
        stream: 'Commerce Stream (11th-12th)',
        description: 'Your interest in business and analytical skills make Commerce stream ideal for you.',
        subjects: ['Accountancy', 'Business Studies', 'Economics', 'Mathematics'],
        careers: ['Chartered Accountant', 'Business Analyst', 'Banker', 'Entrepreneur', 'Financial Advisor'],
        courses: ['Commerce Stream', 'Diploma in Business', 'Vocational Business Courses']
      };
    } else {
      return {
        stream: 'Arts/Humanities Stream (11th-12th)',
        description: 'Your creativity and communication skills align well with Arts and Humanities subjects.',
        subjects: ['English Literature', 'History', 'Political Science', 'Psychology', 'Geography'],
        careers: ['Teacher', 'Journalist', 'Social Worker', 'Civil Servant', 'Content Writer'],
        courses: ['Arts Stream', 'Humanities Stream', 'Creative Arts Courses', 'Vocational Courses']
      };
    }
  };

  const getRecommendationFor12th = () => {
    // Recommendation based on 12th stream and quiz answers
    if (selectedStream === 'Science') {
      return {
        stream: 'Science & Technology Programs',
        description: 'Based on your Science background, here are the best career paths for you.',
        subjects: ['Physics', 'Chemistry', 'Mathematics', 'Biology'],
        careers: ['Software Engineer', 'Doctor', 'Research Scientist', 'Data Scientist', 'Biotechnologist', 'Aerospace Engineer'],
        courses: ['B.Tech/B.E.', 'MBBS', 'B.Sc.', 'B.Pharma', 'BDS', 'B.Arch', 'B.Sc. Biotechnology'],
        entranceExams: ['JEE Main/Advanced', 'NEET', 'BITSAT', 'VITEEE', 'GATE', 'AIIMS']
      };
    } else if (selectedStream === 'Commerce') {
      return {
        stream: 'Business & Commerce Programs',
        description: 'Your Commerce background opens doors to business and finance careers.',
        subjects: ['Accountancy', 'Business Studies', 'Economics', 'Mathematics'],
        careers: ['Chartered Accountant', 'Investment Banker', 'Business Consultant', 'Financial Planner', 'Entrepreneur', 'Marketing Manager'],
        courses: ['B.Com', 'BBA', 'B.Com (Hons)', 'BMS', 'CA Foundation', 'BCA', 'B.Sc. Economics'],
        entranceExams: ['CA Foundation', 'CS Executive', 'CMA', 'CAT', 'XAT', 'SNAP', 'CMAT']
      };
    } else if (selectedStream === 'Arts') {
      return {
        stream: 'Liberal Arts & Professional Programs',
        description: 'Your Arts background provides diverse opportunities in humanities and social sciences.',
        subjects: ['History', 'Political Science', 'Psychology', 'Sociology', 'Literature'],
        careers: ['Civil Servant', 'Lawyer', 'Journalist', 'Psychologist', 'Social Worker', 'Content Creator', 'Diplomat'],
        courses: ['B.A.', 'LLB', 'B.A. LLB', 'B.J.M.C.', 'B.S.W.', 'B.Ed', 'B.A. Psychology'],
        entranceExams: ['UPSC', 'SSC', 'CLAT', 'JMI Mass Comm', 'UGC-NET', 'State PSC']
      };
    }

    // Fallback to general recommendation if no stream selected
    const scienceScore = answers.filter(answer => answer === 0).length;
    const artsScore = answers.filter(answer => answer === 1 || answer === 3).length;
    const commerceScore = answers.filter(answer => answer === 2).length;

    if (scienceScore >= artsScore && scienceScore >= commerceScore) {
      return {
        stream: 'Science & Technology Programs',
        description: 'Your strong foundation in science subjects opens doors to technical and medical fields.',
        subjects: ['Advanced Mathematics', 'Physics', 'Chemistry', 'Biology'],
        careers: ['Software Engineer', 'Doctor', 'Research Scientist', 'Data Scientist', 'Biotechnologist', 'Environmental Scientist'],
        courses: ['B.Tech/B.E.', 'MBBS', 'B.Sc.', 'B.Pharma', 'BDS', 'B.Arch', 'B.Sc. Biotechnology'],
        entranceExams: ['JEE Main/Advanced', 'NEET', 'GATE', 'AIIMS', 'BITSAT']
      };
    } else if (commerceScore >= artsScore) {
      return {
        stream: 'Business & Commerce Programs',
        description: 'Your business acumen and analytical skills are perfect for commerce and management fields.',
        subjects: ['Economics', 'Accountancy', 'Business Studies', 'Mathematics'],
        careers: ['Chartered Accountant', 'Investment Banker', 'Business Consultant', 'Financial Planner', 'Entrepreneur', 'Marketing Manager'],
        courses: ['B.Com', 'BBA', 'B.Com (Hons)', 'BMS', 'CA Foundation', 'BCA', 'B.Sc. Economics'],
        entranceExams: ['CA Foundation', 'CS Executive', 'CMA', 'CAT', 'XAT', 'SNAP']
      };
    } else {
      return {
        stream: 'Liberal Arts & Professional Programs',
        description: 'Your creative and analytical abilities suit diverse fields in arts, law, and social sciences.',
        subjects: ['Literature', 'History', 'Political Science', 'Psychology', 'Sociology'],
        careers: ['Lawyer', 'Journalist', 'Civil Servant', 'Psychologist', 'Social Worker', 'Content Creator', 'Diplomat'],
        courses: ['B.A.', 'LLB', 'B.A. LLB', 'B.J.M.C.', 'B.S.W.', 'B.Ed', 'B.A. Psychology'],
        entranceExams: ['UPSC', 'SSC', 'CLAT', 'UGC-NET', 'JMI Mass Comm']
      };
    }
  };

  const getGeneralRecommendation = () => {
    // Simple recommendation logic based on answers
    const scienceScore = answers.filter(answer => answer === 0).length;
    const artsScore = answers.filter(answer => answer === 1 || answer === 3).length;
    const commerceScore = answers.filter(answer => answer === 2).length;

    if (scienceScore >= artsScore && scienceScore >= commerceScore) {
      return {
        stream: 'Science Stream',
        description: 'Your analytical thinking and problem-solving skills suggest a strong aptitude for science subjects.',
        subjects: ['Physics', 'Chemistry', 'Mathematics', 'Biology'],
        careers: ['Engineer', 'Doctor', 'Research Scientist', 'Data Analyst'],
        courses: ['B.Tech/B.E.', 'MBBS', 'B.Sc.', 'B.Pharma', 'BDS', 'B.Arch'],
        entranceExams: ['JEE Main/Advanced', 'NEET', 'GATE', 'AIIMS']
      };
    } else if (commerceScore >= artsScore) {
      return {
        stream: 'Commerce Stream',
        description: 'Your interest in business and analytical skills make commerce a great fit for you.',
        subjects: ['Accountancy', 'Business Studies', 'Economics', 'Mathematics'],
        careers: ['Chartered Accountant', 'Business Analyst', 'Financial Advisor', 'Entrepreneur'],
        courses: ['B.Com', 'BBA', 'B.Com (Hons)', 'BMS', 'BBM', 'CA Foundation'],
        entranceExams: ['CA Foundation', 'CS Executive', 'CAT', 'XAT']
      };
    } else {
      return {
        stream: 'Arts Stream',
        description: 'Your creativity and communication skills align well with arts and humanities subjects.',
        subjects: ['English Literature', 'History', 'Political Science', 'Psychology'],
        careers: ['Journalist', 'Teacher', 'Social Worker', 'Civil Servant'],
        courses: ['B.A.', 'B.A. (Hons)', 'B.Ed', 'LLB', 'B.J.M.C.', 'B.S.W.'],
        entranceExams: ['UPSC', 'SSC', 'CLAT', 'UGC-NET']
      };
    }
  };

  if (showResults) {
    const recommendation = getRecommendation();

    return (
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="text-center mb-8">
              <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Quiz Complete!</h2>
              <p className="text-gray-600">Based on your responses, here's our recommendation:</p>
            </div>

            <div className="bg-blue-50 rounded-lg p-6 mb-6">
              <h3 className="text-2xl font-bold text-blue-600 mb-2">{recommendation.stream}</h3>
              <p className="text-gray-700 mb-4">{recommendation.description}</p>
              
              {selectedStream && (
                <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-4">
                  <h4 className="font-semibold text-green-800 mb-2">
                    Based on your {selectedStream} background:
                  </h4>
                  <p className="text-green-700 text-sm">
                    These recommendations are specifically tailored for students who studied {selectedStream} in 12th class.
                  </p>
                </div>
              )}

              <div className="grid md:grid-cols-2 gap-6 mb-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Recommended Subjects:</h4>
                  <ul className="list-disc list-inside space-y-1">
                    {recommendation.subjects.map((subject, index) => (
                      <li key={index} className="text-gray-600">{subject}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Career Opportunities:</h4>
                  <ul className="list-disc list-inside space-y-1">
                    {recommendation.careers.map((career, index) => (
                      <li key={index} className="text-gray-600">{career}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Recommended Courses:</h4>
                  <ul className="list-disc list-inside space-y-1">
                    {recommendation.courses.map((course, index) => (
                      <li key={index} className="text-gray-600">{course}</li>
                    ))}
                  </ul>
                </div>
              </div>
              
              {recommendation.entranceExams && (
                <div className="bg-yellow-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Important Entrance Exams:</h4>
                  <div className="flex flex-wrap gap-2">
                    {recommendation.entranceExams.map((exam, index) => (
                      <span key={index} className="bg-yellow-200 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium">
                        {exam}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={resetQuiz}
                className="flex items-center justify-center space-x-2 bg-gray-600 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition-colors"
              >
                <RotateCcw className="w-4 h-4" />
                <span>Retake Quiz</span>
              </button>
              <button className="flex items-center justify-center space-x-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                <span onClick={handleExploreColleges}>Find Colleges</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Discover Your Ideal Stream</h2>
          <p className="text-gray-600">Answer a few questions to get personalized recommendations</p>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="flex justify-between items-center mb-6">
            <span className="text-sm font-medium text-gray-500">
              Question {currentQuestion + 1} of {questions.length}
              {selectedStream && (
                <span className="ml-2 bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs">
                  {selectedStream} Stream
                </span>
              )}
            </span>
            <div className="flex space-x-2">
              {questions.map((_, index) => (
                <div
                  key={index}
                  className={`w-3 h-3 rounded-full ${
                    index <= currentQuestion ? 'bg-blue-600' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>

          <h3 className="text-xl font-semibold text-gray-900 mb-6">
            {questions[currentQuestion].text}
          </h3>

          <div className="space-y-3">
            {questions[currentQuestion].options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswer(index)}
                className="w-full text-left p-4 border border-gray-200 rounded-lg hover:border-blue-300 hover:bg-blue-50 transition-colors"
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};