import React, { useState } from 'react';
import { CheckCircle, ArrowRight, RotateCcw } from 'lucide-react';

interface Question {
  id: number;
  text: string;
  options: string[];
  category: 'science' | 'arts' | 'commerce';
}

const questions: Question[] = [
  {
    id: 1,
    text: "Which activity interests you the most?",
    options: [
      "Conducting experiments and research",
      "Writing stories or articles",
      "Analyzing business trends",
      "Creating art or music"
    ],
    category: 'science'
  },
  {
    id: 2,
    text: "What type of problems do you enjoy solving?",
    options: [
      "Mathematical equations and formulas",
      "Creative and artistic challenges",
      "Business and financial puzzles",
      "Social and communication issues"
    ],
    category: 'science'
  },
  {
    id: 3,
    text: "Which environment appeals to you more?",
    options: [
      "Laboratory or research facility",
      "Library or creative studio",
      "Corporate office or business center",
      "Community center or social organization"
    ],
    category: 'science'
  },
  {
    id: 4,
    text: "What motivates you the most in your studies?",
    options: [
      "Understanding how things work scientifically",
      "Expressing creativity and emotions",
      "Building wealth and business success",
      "Helping people and making social impact"
    ],
    category: 'science'
  },
  {
    id: 5,
    text: "Which subject combination excites you most?",
    options: [
      "Physics, Chemistry, Mathematics",
      "History, Literature, Psychology",
      "Economics, Accountancy, Business Studies",
      "Biology, Environmental Science, Geography"
    ],
    category: 'science'
  },
  {
    id: 6,
    text: "What kind of career impact do you want to make?",
    options: [
      "Innovate technology and solve technical problems",
      "Influence culture and society through arts",
      "Drive economic growth and entrepreneurship",
      "Advance scientific knowledge and research"
    ],
    category: 'science'
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
    category: 'science'
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
    category: 'science'
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
    category: 'science'
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
    category: 'science'
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
    category: 'science'
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
    category: 'science'
  }
];

export const AptitudeQuiz: React.FC = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [showResults, setShowResults] = useState(false);

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

  const getRecommendation = () => {
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
        courses: ['B.Tech/B.E.', 'MBBS', 'B.Sc.', 'B.Pharma', 'BDS', 'B.Arch']
      };
    } else if (commerceScore >= artsScore) {
      return {
        stream: 'Commerce Stream',
        description: 'Your interest in business and analytical skills make commerce a great fit for you.',
        subjects: ['Accountancy', 'Business Studies', 'Economics', 'Mathematics'],
        careers: ['Chartered Accountant', 'Business Analyst', 'Financial Advisor', 'Entrepreneur'],
        courses: ['B.Com', 'BBA', 'B.Com (Hons)', 'BMS', 'BBM', 'CA Foundation']
      };
    } else {
      return {
        stream: 'Arts Stream',
        description: 'Your creativity and communication skills align well with arts and humanities subjects.',
        subjects: ['English Literature', 'History', 'Political Science', 'Psychology'],
        careers: ['Journalist', 'Teacher', 'Social Worker', 'Civil Servant'],
        courses: ['B.A.', 'B.A. (Hons)', 'B.Ed', 'LLB', 'B.J.M.C.', 'B.S.W.']
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

              <div className="grid md:grid-cols-2 gap-6">
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
                <span>Explore Career Paths</span>
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