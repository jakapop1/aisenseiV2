import React, { useState } from 'react';
import { ArrowRight, BookOpen, Code, CheckCircle, Terminal } from 'lucide-react';

const PromptEngineeringTutorial = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);

  const overview = {
    title: "What is Prompt Engineering?",
    description: "Prompt engineering is the art of effectively communicating with AI models to get desired results. It involves crafting clear instructions and understanding how to structure your requests for optimal outcomes.",
    learnMoreLink: "https://www.llama.com/docs/how-to-guides/prompting/" 
  };

  const examples = [
    {
      title: "Basic Instructions",
      prompt: "Summarize the benefits of exercise",
      improved: "Create a 3-point summary of the key health benefits of regular exercise, focusing on physical, mental, and long-term impacts",
      explanation: "The improved version specifies the format (3 points) and areas to focus on"
    },
    {
      title: "Role-Based",
      prompt: "Help me write a business email",
      improved: "Act as a senior business communications expert and help me write a professional email to decline a vendor's proposal while maintaining a positive relationship",
      explanation: "Defines a specific role and context for more targeted results"
    },
    {
      title: "Step-by-Step",
      prompt: "How to make pasta",
      improved: "Provide step-by-step instructions for making pasta from scratch, including: 1) required ingredients, 2) mixing and kneading process, 3) shaping method, and 4) cooking guidelines",
      explanation: "Breaks down the request into clear sequential steps"
    }
  ];

  const quizQuestions = [
    {
      question: "Which prompt is more likely to get a specific, useful response?",
      options: [
        "Tell me about cars",
        "Explain the top 3 factors to consider when buying an electric car in 2024, focusing on range, cost, and charging infrastructure"
      ],
      correct: 1,
      explanation: "The second prompt provides specific parameters and areas of focus"
    },
    {
      question: "What's wrong with this prompt: 'Write good code'?",
      options: [
        "It's too long",
        "It lacks context, language specification, and requirements",
        "It uses technical terms",
        "Nothing is wrong with it"
      ],
      correct: 1,
      explanation: "The prompt needs specifics about programming language, purpose, and requirements"
    },
    {
      question: "Which is a better way to request a creative story?",
      options: [
        "Write a story about a hero",
        "Write a 500-word fantasy story about a reluctant hero discovering their powers, emphasizing character development and including a moral lesson"
      ],
      correct: 1,
      explanation: "The second prompt specifies length, genre, theme, focus areas, and desired elements"
    }
  ];

  const tabs = [
    { id: 'overview', label: 'Overview' },
    { id: 'examples', label: 'Examples' },
    { id: 'quiz', label: 'Practice Quiz' }
  ];

  return (
    <div className="site-background section-padding">
      <h1 className="heading-primary text-3xl mb-6">Prompt Engineering Guide</h1>
      
      <div className="flex space-x-4 mb-8">
        {tabs.map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`${
              activeTab === tab.id ? 'nav-button-primary' : 'nav-button-secondary'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {activeTab === 'overview' && (
        <div className="space-y-8">
          <div className="module-card">
            <h2 className="card-title text-xl mb-4">{overview.title}</h2>
            <p className="text-gray-300 mb-6">{overview.description}</p>
            <a 
              href={overview.learnMoreLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-blue-400 hover:text-blue-300"
            >
              <BookOpen className="w-4 h-4 mr-2" />
              Learn more in the documentation
            </a>
          </div>
        </div>
      )}

      {activeTab === 'examples' && (
        <div className="space-y-8">
          {examples.map((example, index) => (
            <div key={index} className="module-card">
              <h3 className="card-title text-xl mb-4">{example.title}</h3>
              <div className="space-y-4">
                <div>
                  <div className="text-gray-300 mb-1">Basic Prompt:</div>
                  <div className="bg-gray-700/50 p-3 rounded-lg border border-gray-600">
                    <div className="flex items-center space-x-2">
                      <Terminal className="w-4 h-4 text-blue-400" />
                      <span>{example.prompt}</span>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="text-gray-300 mb-1">Improved Prompt:</div>
                  <div className="bg-gray-700/50 p-3 rounded-lg border border-green-500">
                    <div className="flex items-center space-x-2">
                      <Terminal className="w-4 h-4 text-green-400" />
                      <span>{example.improved}</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center text-gray-300">
                  <Code className="w-4 h-4 text-blue-400 mr-2" />
                  {example.explanation}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {activeTab === 'quiz' && (
        <div className="space-y-8">
          {quizQuestions.map((q, questionIndex) => (
            <div key={questionIndex} className="module-card">
              <h3 className="card-title text-xl mb-4">Question {questionIndex + 1}</h3>
              <p className="text-gray-300 mb-4">{q.question}</p>
              <div className="space-y-3">
                {q.options.map((option, optionIndex) => (
                  <button
                    key={optionIndex}
                    onClick={() => setSelectedAnswers({
                      ...selectedAnswers,
                      [questionIndex]: optionIndex
                    })}
                    className={`w-full text-left p-3 rounded-lg border ${
                      selectedAnswers[questionIndex] === optionIndex
                        ? 'bg-blue-600/50 border-blue-500'
                        : 'bg-gray-700/50 border-gray-600 hover:border-gray-500'
                    }`}
                  >
                    <div className="flex items-center space-x-2">
                      <ArrowRight className="w-4 h-4 text-blue-400" />
                      <span>{option}</span>
                    </div>
                  </button>
                ))}
              </div>
              {selectedAnswers[questionIndex] !== undefined && (
                <div className={`mt-4 p-4 rounded-lg ${
                  selectedAnswers[questionIndex] === q.correct
                    ? 'bg-green-900/50 border border-green-500'
                    : 'bg-red-900/50 border border-red-500'
                }`}>
                  <div className="flex items-center">
                    <CheckCircle className={`w-4 h-4 mr-2 ${
                      selectedAnswers[questionIndex] === q.correct
                        ? 'text-green-400'
                        : 'text-red-400'
                    }`} />
                    <p className="text-gray-300">{q.explanation}</p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default PromptEngineeringTutorial;