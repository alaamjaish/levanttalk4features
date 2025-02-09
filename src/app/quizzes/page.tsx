'use client';

import { quizzes } from '@/data/questionBanks';
import QuizCard from '@/components/quiz/QuizCard';
import { useState } from 'react';
import { FaSearch } from 'react-icons/fa';

export default function QuizzesPage() {
  const [selectedLevel, setSelectedLevel] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const generalQuizzes = quizzes.filter(quiz => quiz.category === 'general');
  const specificQuizzes = quizzes.filter(quiz => quiz.category !== 'general');

  const filteredSpecificQuizzes = specificQuizzes.filter(quiz => {
    const matchesLevel = selectedLevel === 'all' || quiz.level === selectedLevel;
    const matchesSearch = quiz.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         quiz.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesLevel && matchesSearch;
  });

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
        Arabic Language Quizzes
      </h1>

      <div className="space-y-16">
        {/* General Level Tests */}
        <section>
          <h2 className="text-2xl font-semibold mb-8 text-center text-gray-800 dark:text-gray-200">
            General Level Tests
          </h2>
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {generalQuizzes.map(quiz => (
                <QuizCard key={quiz.id} quiz={quiz} />
              ))}
            </div>
          </div>
        </section>

        {/* Specific Skill Tests */}
        <section>
          <h2 className="text-2xl font-semibold mb-8 text-center text-gray-800 dark:text-gray-200">
            Specific Skill Tests
          </h2>
          
          {/* Search and Filter Bar */}
          <div className="max-w-5xl mx-auto mb-8">
            {/* Search Bar */}
            <div className="relative mb-4">
              <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search quizzes by title, description, or topics..."
                className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 
                         bg-white dark:bg-gray-800 text-gray-900 dark:text-white
                         focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 focus:border-transparent"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            {/* Level Filters */}
            <div className="flex gap-2 justify-center">
              <button
                onClick={() => setSelectedLevel('all')}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors
                  ${selectedLevel === 'all'
                    ? 'bg-indigo-600 text-white'
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                  }`}
              >
                All
              </button>
              <button
                onClick={() => setSelectedLevel('beginner')}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors
                  ${selectedLevel === 'beginner'
                    ? 'bg-green-600 text-white'
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                  }`}
              >
                Beginner
              </button>
              <button
                onClick={() => setSelectedLevel('intermediate')}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors
                  ${selectedLevel === 'intermediate'
                    ? 'bg-yellow-600 text-white'
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                  }`}
              >
                Intermediate
              </button>
              <button
                onClick={() => setSelectedLevel('advanced')}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors
                  ${selectedLevel === 'advanced'
                    ? 'bg-red-600 text-white'
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                  }`}
              >
                Advanced
              </button>
            </div>
          </div>

          {/* Quiz Grid */}
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredSpecificQuizzes.map(quiz => (
                <QuizCard key={quiz.id} quiz={quiz} />
              ))}
              {filteredSpecificQuizzes.length === 0 && (
                <div className="col-span-full text-center py-8 text-gray-500 dark:text-gray-400">
                  No quizzes found matching your criteria
                </div>
              )}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
