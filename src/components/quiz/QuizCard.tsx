import { Quiz } from '@/types/quiz';
import Link from 'next/link';
import { FaGraduationCap } from 'react-icons/fa';

interface QuizCardProps {
  quiz: Quiz;
}

export default function QuizCard({ quiz }: QuizCardProps) {
  const getLevelColor = (level: string) => {
    switch (level) {
      case 'beginner':
        return 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-100';
      case 'intermediate':
        return 'bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-100';
      case 'advanced':
        return 'bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-100';
      default:
        return 'bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-100';
    }
  };

  return (
    <Link href={`/quizzes/${quiz.id}`}>
      <div className="bg-white dark:bg-gray-800 rounded-lg p-6 
                    hover:bg-gray-50 dark:hover:bg-gray-700 
                    shadow-sm hover:shadow-md dark:shadow-gray-900/10
                    border border-gray-200 dark:border-gray-700
                    transition-all duration-200 cursor-pointer h-full flex flex-col">
        {/* Header with Title and Icon */}
        <div className="flex items-start justify-between mb-4">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white flex-grow pr-2">
            {quiz.title}
          </h3>
          <FaGraduationCap className="text-indigo-600 dark:text-indigo-400 text-xl flex-shrink-0" />
        </div>

        {/* Description and Metadata */}
        <div className="flex-grow">
          <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
            {quiz.description}
          </p>
        </div>

        {/* Footer with Level and Question Count */}
        <div className="flex items-center justify-between mt-2">
          <span className={`${getLevelColor(quiz.level)} text-xs px-3 py-1 rounded-full`}>
            {quiz.level.charAt(0).toUpperCase() + quiz.level.slice(1)}
          </span>
          <span className="text-gray-500 dark:text-gray-400 text-sm">
            {quiz.questionCount} questions
          </span>
        </div>
      </div>
    </Link>
  );
}
