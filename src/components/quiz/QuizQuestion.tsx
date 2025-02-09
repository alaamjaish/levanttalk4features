import { Question } from '@/types/quiz';
import { useState } from 'react';

interface QuizQuestionProps {
  question: Question;
  onAnswer: (isCorrect: boolean) => void;
  onNext: () => void;
}

export default function QuizQuestion({ question, onAnswer, onNext }: QuizQuestionProps) {
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);

  const handleAnswerClick = (index: number) => {
    if (showFeedback) return;
    setSelectedAnswer(index);
    setShowFeedback(true);
    onAnswer(index === question.correctAnswer);
  };

  const handleNextClick = () => {
    setSelectedAnswer(null);
    setShowFeedback(false);
    onNext();
  };

  const getOptionStyle = (index: number) => {
    if (!showFeedback) {
      return selectedAnswer === index 
        ? 'border-indigo-500 bg-indigo-50 dark:bg-indigo-900/30' 
        : 'border-gray-300 dark:border-gray-600 hover:border-indigo-400 dark:hover:border-indigo-500';
    }
    
    if (index === question.correctAnswer) {
      return 'border-green-500 bg-green-50 dark:bg-green-900/30';
    }
    
    if (selectedAnswer === index) {
      return 'border-red-500 bg-red-50 dark:bg-red-900/30';
    }
    
    return 'border-gray-300 dark:border-gray-600 opacity-50';
  };

  return (
    <div className="max-w-3xl mx-auto px-4 h-[calc(100vh-4rem)] flex flex-col">
      {/* Main Content Area - Scrollable if needed */}
      <div className="flex-grow overflow-y-auto pb-20">
        {/* Question Header */}
        <div className="text-center mb-4">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white">{question.title}</h2>
        </div>

        {/* Question Text */}
        <div className="mb-6">
          <p className="text-lg text-gray-900 dark:text-white leading-relaxed">
            {question.text}
          </p>
        </div>

        {/* Options */}
        <div className="space-y-3">
          {question.options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswerClick(index)}
              disabled={showFeedback}
              className={`w-full p-3 text-right text-lg font-arabic border-2 rounded-lg transition-all
                ${getOptionStyle(index)}
                disabled:cursor-default
                flex items-center justify-between
                text-gray-900 dark:text-white`}
              dir="rtl"
            >
              <span className="flex-grow">{option}</span>
              {showFeedback && index === question.correctAnswer && (
                <span className="text-green-500">✓</span>
              )}
              {showFeedback && selectedAnswer === index && index !== question.correctAnswer && (
                <span className="text-red-500">✗</span>
              )}
            </button>
          ))}
        </div>

        {/* Feedback - Compact Version */}
        {showFeedback && (
          <div className="mt-4 p-3 rounded-lg bg-gray-50 dark:bg-gray-800/50">
            <p className="text-base">
              {selectedAnswer === question.correctAnswer ? (
                <span className="text-green-500">✓ Correct!</span>
              ) : (
                <span className="text-red-500">✗ Not quite right.</span>
              )}
              {question.explanation && (
                <span className="text-gray-700 dark:text-gray-300 ml-2">
                  {question.explanation}
                </span>
              )}
            </p>
          </div>
        )}
      </div>

      {/* Fixed Navigation Bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
        <div className="max-w-3xl mx-auto px-4 py-3 flex justify-between items-center">
          <button
            onClick={handleNextClick}
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-6 rounded-lg transition-colors"
          >
            Next Question
          </button>
        </div>
      </div>
    </div>
  );
}
