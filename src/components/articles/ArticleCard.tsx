'use client';

import Link from 'next/link';
import { FaBookOpen } from 'react-icons/fa';
import { type Article } from '@/lib/articles.server';

interface ArticleProps {
  article: Article;
}

const ArticleCard = ({ article }: ArticleProps) => {
  // Get first paragraph as excerpt
  const excerpt = article.content
    .replace(/<[^>]*>/g, '') // Remove HTML tags
    .split('\n')
    .find(p => p.trim().length > 0) || '';

  return (
    <Link href={`/articles/${encodeURIComponent(article.slug)}`}>
      <div className="bg-white dark:bg-gray-800 rounded-lg p-6 
                    hover:bg-gray-50 dark:hover:bg-gray-700 
                    shadow-sm hover:shadow-md dark:shadow-gray-900/10
                    border border-gray-200 dark:border-gray-700
                    transition-all duration-200 cursor-pointer h-full flex flex-col">
        {/* Header with Title and Icon */}
        <div className="flex items-start justify-between mb-4">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white flex-grow pr-2">
            {article.title}
          </h3>
          <FaBookOpen className="text-indigo-600 dark:text-indigo-400 text-xl flex-shrink-0" />
        </div>

        {/* Description */}
        <div className="flex-grow">
          <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-3">
            {article.description || excerpt}
          </p>
        </div>

        {/* Topics */}
        {article.topics && article.topics.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-2">
            {article.topics.map((topic) => (
              <span
                key={topic}
                className="inline-block bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 text-sm px-2 py-1 rounded-full"
              >
                {topic}
              </span>
            ))}
          </div>
        )}

        {/* Date */}
        <div className="mt-4 text-sm text-gray-500 dark:text-gray-400">
          {new Date(article.date).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          })}
        </div>
      </div>
    </Link>
  );
};

export default ArticleCard;