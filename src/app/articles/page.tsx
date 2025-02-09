'use client';

import { useState, useEffect } from 'react';
import ArticleCard from '@/components/articles/ArticleCard';
import { FaSearch } from 'react-icons/fa';
import Navbar from '@/components/layout/Navbar';

interface Article {
  title: string;
  content: string;
  type?: string;
  level?: string;
  topics?: string[];
  mainImage?: string | null;
  slug: string;
}

export const dynamic = 'force-dynamic';

function ArticlesPage() {
  const [selectedLevel, setSelectedLevel] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [articles, setArticles] = useState<Article[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchArticles() {
      try {
        setIsLoading(true);
        setError(null);
        const response = await fetch('/api/articles');
        if (!response.ok) {
          throw new Error('Failed to fetch articles');
        }
        const data = await response.json();
        setArticles(data);
      } catch (error) {
        console.error('Error fetching articles:', error);
        setError('Failed to load articles. Please try again later.');
      } finally {
        setIsLoading(false);
      }
    }
    fetchArticles();
  }, []);

  // Separate articles by level
  const beginnerArticles = articles.filter(article => article.level === 'beginner');
  const intermediateArticles = articles.filter(article => article.level === 'intermediate');
  const advancedArticles = articles.filter(article => article.level === 'advanced');
  const unspecifiedLevelArticles = articles.filter(article => !article.level);

  // Filter articles based on search and level
  const filterArticles = (articleList: Article[]) => {
    return articleList.filter(article => {
      const matchesLevel = selectedLevel === 'all' || article.level === selectedLevel;
      const matchesSearch = searchQuery === '' || 
        article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (article.topics && article.topics.some(topic => topic.toLowerCase().includes(searchQuery.toLowerCase())));

      return matchesLevel && matchesSearch;
    });
  };

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        <Navbar />
        <div className="container mx-auto px-4 py-8">
          <div className="text-center py-12">
            <p className="text-red-500 dark:text-red-400">{error}</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
          Arabic Language Articles
        </h1>

        {/* Search and Filter Bar */}
        <div className="max-w-5xl mx-auto mb-8">
          {/* Search Bar */}
          <div className="relative mb-4">
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search articles by title, content, or topics..."
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

        <div className="space-y-16">
          {/* Beginner Articles */}
          {(selectedLevel === 'all' || selectedLevel === 'beginner') && filterArticles(beginnerArticles).length > 0 && (
            <section>
              <h2 className="text-2xl font-semibold mb-8 text-center text-gray-800 dark:text-gray-200">
                Beginner Articles
              </h2>
              <div className="max-w-5xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filterArticles(beginnerArticles).map((article) => (
                    <ArticleCard key={article.slug} {...article} />
                  ))}
                </div>
              </div>
            </section>
          )}

          {/* Intermediate Articles */}
          {(selectedLevel === 'all' || selectedLevel === 'intermediate') && filterArticles(intermediateArticles).length > 0 && (
            <section>
              <h2 className="text-2xl font-semibold mb-8 text-center text-gray-800 dark:text-gray-200">
                Intermediate Articles
              </h2>
              <div className="max-w-5xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filterArticles(intermediateArticles).map((article) => (
                    <ArticleCard key={article.slug} {...article} />
                  ))}
                </div>
              </div>
            </section>
          )}

          {/* Advanced Articles */}
          {(selectedLevel === 'all' || selectedLevel === 'advanced') && filterArticles(advancedArticles).length > 0 && (
            <section>
              <h2 className="text-2xl font-semibold mb-8 text-center text-gray-800 dark:text-gray-200">
                Advanced Articles
              </h2>
              <div className="max-w-5xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filterArticles(advancedArticles).map((article) => (
                    <ArticleCard key={article.slug} {...article} />
                  ))}
                </div>
              </div>
            </section>
          )}

          {/* Other Articles (without level) */}
          {selectedLevel === 'all' && filterArticles(unspecifiedLevelArticles).length > 0 && (
            <section>
              <h2 className="text-2xl font-semibold mb-8 text-center text-gray-800 dark:text-gray-200">
                Other Articles
              </h2>
              <div className="max-w-5xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filterArticles(unspecifiedLevelArticles).map((article) => (
                    <ArticleCard key={article.slug} {...article} />
                  ))}
                </div>
              </div>
            </section>
          )}

          {/* No Results Message */}
          {filterArticles(articles).length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 dark:text-gray-400">No articles found matching your criteria.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ArticlesPage;