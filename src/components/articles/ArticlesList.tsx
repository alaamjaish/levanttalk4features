'use client';

import { useState } from 'react';
import ArticleCard from './ArticleCard';
import { type Article } from '@/lib/articles.server';

interface ArticlesListProps {
  articles: Article[];
}

export default function ArticlesList({ articles }: ArticlesListProps) {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredArticles = articles.filter(article =>
    article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    article.content.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <div className="mb-6">
        <input
          type="text"
          placeholder="Search articles..."
          className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
