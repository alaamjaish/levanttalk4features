'use client';

import { type Article } from '@/lib/articles.server';
import ArticleCard from '@/components/articles/ArticleCard';
import { useState } from 'react';
import { FaSearch } from 'react-icons/fa';

interface Props {
  articles: Article[];
}

export default function ArticlesList({ articles }: Props) {
  const [searchQuery, setSearchQuery] = useState('');
  
  const filteredArticles = articles.filter(article =>
    article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    article.description?.toLowerCase().includes(searchQuery.toLowerCase()) ||
    article.topics?.some(topic => 
      topic.toLowerCase().includes(searchQuery.toLowerCase())
    )
  );

  return (
    <div>
      <div className="mb-8">
        <div className="relative max-w-md mx-auto">
          <input
            type="text"
            placeholder="Search articles..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-4 py-2 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <FaSearch className="absolute left-3 top-3 text-gray-400" />
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredArticles.map((article) => (
          <ArticleCard key={article.slug} article={article} />
        ))}
      </div>

      {filteredArticles.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-600">No articles found matching your search.</p>
        </div>
      )}
    </div>
  );
}
