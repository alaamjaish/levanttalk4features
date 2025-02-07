'use client';

import { useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import ArticleCard from '@/components/articles/ArticleCard';
import { articles } from '@/data/articles';
import { FaSearch } from 'react-icons/fa';

export default function ArticlesPage() {
  const [selectedType, setSelectedType] = useState<'all' | 'article' | 'story'>('all');
  const [selectedLevel, setSelectedLevel] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredArticles = articles.filter(article => {
    const matchesType = selectedType === 'all' || article.type === selectedType;
    const matchesLevel = selectedLevel === 'all' || article.level === selectedLevel;
    const matchesSearch = searchQuery === '' || 
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.topics.some(topic => topic.toLowerCase().includes(searchQuery.toLowerCase()));
    
    return matchesType && matchesLevel && matchesSearch;
  });

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Articles & Stories
          </h1>
          <p className="text-gray-600 dark:text-gray-300">
            Improve your reading comprehension with curated Syrian Arabic content
          </p>
        </div>

        {/* Filters */}
        <div className="mb-8">
          <div className="relative mb-6">
            <input
              type="text"
              placeholder="Search articles and stories..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-2 pl-10 rounded-lg border dark:bg-gray-800 dark:border-gray-700 
                dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>

          {/* Type Filter */}
          <div className="flex flex-wrap gap-4 mb-4">
            {['all', 'article', 'story'].map((type) => (
              <button
                key={type}
                onClick={() => setSelectedType(type as 'all' | 'article' | 'story')}
                className={`px-4 py-2 rounded-lg transition-colors ${
                  selectedType === type
                    ? 'bg-indigo-600 text-white dark:bg-indigo-500'
                    : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                }`}
              >
                {type.charAt(0).toUpperCase() + type.slice(1)}s
              </button>
            ))}
          </div>

          {/* Level Filter */}
          <div className="flex flex-wrap gap-4">
            {['all', 'beginner', 'intermediate', 'advanced'].map((level) => (
              <button
                key={level}
                onClick={() => setSelectedLevel(level)}
                className={`px-4 py-2 rounded-lg transition-colors ${
                  selectedLevel === level
                    ? 'bg-indigo-600 text-white dark:bg-indigo-500'
                    : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                }`}
              >
                {level.charAt(0).toUpperCase() + level.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* Articles Grid */}
        {filteredArticles.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredArticles.map((article) => (
              <ArticleCard
                key={article.id}
                {...article}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-600 dark:text-gray-400">No articles found matching your criteria.</p>
          </div>
        )}
      </div>
    </main>
  );
} 