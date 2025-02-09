'use client';

import QuizQuestion from '@/components/quiz/QuizQuestion';
import { getRandomQuestions, quizzes } from '@/data/questionBanks';
import { Question, QuizResult } from '@/types/quiz';
import { useParams, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function QuizPage() {
  const params = useParams();
  const router = useRouter();
  const [quiz] = useState(() => quizzes.find(q => q.id === params.quizId));
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [quizComplete, setQuizComplete] = useState(false);

  useEffect(() => {
    if (quiz) {
      // The getRandomQuestions function now handles the correct question count internally
      const selectedQuestions = getRandomQuestions(quiz.level, quiz.category, quiz.questionCount);
      setQuestions(selectedQuestions);
    }
  }, [quiz]);

  if (!quiz) {
    return <div>Quiz not found</div>;
  }

  const handleAnswer = (isCorrect: boolean) => {
    if (isCorrect) {
      setScore(score + 1);
    }
  };

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setQuizComplete(true);
    }
  };

  if (quizComplete) {
    const result: QuizResult = {
      quizId: quiz.id,
      score,
      totalQuestions: questions.length,
      answers: [], // You can track individual answers if needed
      completedAt: new Date().toISOString(),
    };

    return (
      <div className="container mx-auto px-4 py-8 max-w-2xl">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Quiz Complete!</h2>
          <p className="text-xl mb-6">
            Your score: {score} out of {questions.length}
            ({Math.round((score / questions.length) * 100)}%)
          </p>
          <button
            onClick={() => router.push('/quizzes')}
            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Back to Quizzes
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Sticky Progress Bar */}
      <div className="sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-b border-gray-200 dark:border-gray-700">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-12">
            {/* Empty space on the left for centering */}
            <div className="w-20"></div>
            
            {/* Centered Quiz Info */}
            <div className="flex items-center space-x-3 flex-grow justify-center">
              <h1 className="text-lg font-semibold text-gray-900 dark:text-white">{quiz.title}</h1>
              <span className="text-sm text-gray-600 dark:text-gray-400">
                {currentQuestionIndex + 1} / {questions.length}
              </span>
              <span className={`px-2 py-0.5 text-xs font-medium rounded-full ${
                quiz.level === 'beginner' ? 'bg-green-100 dark:bg-green-900/50 text-green-800 dark:text-green-100' :
                quiz.level === 'intermediate' ? 'bg-yellow-100 dark:bg-yellow-900/50 text-yellow-800 dark:text-yellow-100' :
                'bg-red-100 dark:bg-red-900/50 text-red-800 dark:text-red-100'
              }`}>
                {quiz.level.charAt(0).toUpperCase() + quiz.level.slice(1)}
              </span>
            </div>
            
            {/* Score on the right, same width as left space for balance */}
            <div className="w-20 text-right">
              <span className="text-sm font-medium text-indigo-600 dark:text-indigo-400">
                Score: {score}
              </span>
            </div>
          </div>
          
          {/* Ultra-thin Progress Bar */}
          <div className="h-0.5 bg-gray-200 dark:bg-gray-700">
            <div 
              className="h-full bg-indigo-600 dark:bg-indigo-500 transition-all duration-300 ease-out"
              style={{ width: `${((currentQuestionIndex + 1) / questions.length) * 100}%` }}
            />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        {questions.length > 0 && (
          <QuizQuestion
            question={questions[currentQuestionIndex]}
            onAnswer={handleAnswer}
            onNext={handleNext}
          />
        )}
      </div>
    </div>
  );
}
