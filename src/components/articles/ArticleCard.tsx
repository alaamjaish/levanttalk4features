'use client';

import Link from 'next/link';
import { FaBookOpen, FaTag } from 'react-icons/fa';

interface ArticleProps {
  title: string;
  content: string;
  type?: string;
  level?: string;
  topics?: string[];
  slug: string;
}

const ArticleCard = ({ title, content, type, level, topics, slug }: ArticleProps) => {
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

  // Get first paragraph as excerpt
  const excerpt = content
    .replace(/<[^>]*>/g, '') // Remove HTML tags
    .split('\n')
    .find(p => p.trim().length > 0) || '';

  return (
    <Link href={`/articles/${encodeURIComponent(slug)}`}>
      <div className="bg-white dark:bg-gray-800 rounded-lg p-6 
                    hover:bg-gray-50 dark:hover:bg-gray-700 
                    shadow-sm hover:shadow-md dark:shadow-gray-900/10
                    border border-gray-200 dark:border-gray-700
                    transition-all duration-200 cursor-pointer h-full flex flex-col">
        {/* Header with Title and Icon */}
        <div className="flex items-start justify-between mb-4">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white flex-grow pr-2">
            {title}
          </h3>
          <FaBookOpen className="text-indigo-600 dark:text-indigo-400 text-xl flex-shrink-0" />
        </div>

        {/* Description */}
        <div className="flex-grow">
          <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-3">
            {excerpt}
          </p>
        </div>

        {/* Footer with Level and Topics */}
        <div className="flex items-center justify-between mt-2">
          {level && (
            <span className={`${getLevelColor(level)} text-xs px-3 py-1 rounded-full`}>
              {level.charAt(0).toUpperCase() + level.slice(1)}
            </span>
          )}
          {topics && topics.length > 0 && (
            <div className="flex items-center gap-1">
              <FaTag className="text-gray-400 dark:text-gray-500 text-xs" />
              <span className="text-gray-500 dark:text-gray-400 text-sm">
                {topics.length} {topics.length === 1 ? 'topic' : 'topics'}
              </span>
            </div>
          )}
        </div>
      </div>
    </Link>
  );
};

export default ArticleCard;