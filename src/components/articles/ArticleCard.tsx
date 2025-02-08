'use client';

import Link from 'next/link';
import { FaTag } from 'react-icons/fa';

interface ArticleProps {
  title: string;
  content: string;
  type?: string;
  level?: string;
  topics?: string[];
  slug: string;
}

const ArticleCard = ({ title, content, type, level, topics, slug }: ArticleProps) => {
  const levelColors = {
    beginner: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200',
    intermediate: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200',
    advanced: 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
  };

  // Get first paragraph as excerpt
  const excerpt = content
    .replace(/<[^>]*>/g, '') // Remove HTML tags
    .split('\n')
    .find(p => p.trim().length > 0) || '';

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow border border-gray-200 dark:border-gray-700">
      <Link href={`/articles/${encodeURIComponent(slug)}`} className="block p-6">
        <h2 className="text-xl font-bold mb-2 text-gray-900 dark:text-gray-100">{title}</h2>
        
        <div className="flex gap-2 mb-3">
          {type && (
            <span className="px-2 py-1 text-sm rounded-full bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
              {type}
            </span>
          )}
          {level && (
            <span className={`px-2 py-1 text-sm rounded-full ${levelColors[level as keyof typeof levelColors] || ''}`}>
              {level}
            </span>
          )}
        </div>
        
        <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
          {excerpt}
        </p>
        
        {topics && topics.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {topics.map((topic, index) => (
              <span
                key={index}
                className="inline-flex items-center gap-1 px-2 py-1 text-sm rounded-full bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300"
              >
                <FaTag className="text-gray-500 dark:text-gray-400" />
                {topic}
              </span>
            ))}
          </div>
        )}
      </Link>
    </div>
  );
};

export default ArticleCard;