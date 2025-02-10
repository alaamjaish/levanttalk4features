import Link from 'next/link';
import { type Article } from '@/lib/articles.server';

interface ArticleProps {
  article: Article;
}

export default function ArticleCard({ article }: ArticleProps) {
  const getLevelColor = (level?: string) => {
    switch (level) {
      case 'beginner':
        return 'bg-green-100 text-green-800';
      case 'intermediate':
        return 'bg-yellow-100 text-yellow-800';
      case 'advanced':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <Link href={`/articles/${article.slug}`}>
      <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
        <h3 className="text-xl font-semibold mb-2">{article.title}</h3>
        {article.level && (
          <span className={`inline-block px-2 py-1 rounded text-sm ${getLevelColor(article.level)}`}>
            {article.level}
          </span>
        )}
      </div>
    </Link>
  );
}