import { getArticleBySlug } from '@/lib/articles.server';
import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote } from 'next-mdx-remote';
import Navbar from '@/components/layout/Navbar';

interface Props {
  params: {
    slug: string;
  };
}

export default async function ArticlePage({ params }: Props) {
  const article = await getArticleBySlug(params.slug);

  if (!article) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <div className="container mx-auto px-4 py-8">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900">Article not found</h1>
            <p className="mt-2 text-gray-600">The article you're looking for doesn't exist.</p>
          </div>
        </div>
      </div>
    );
  }

  const mdxSource = await serialize(article.content);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <article className="container mx-auto px-4 py-8 max-w-4xl">
        <header className="mb-8">
          <h1 className="text-4xl font-bold mb-4">{article.title}</h1>
          <div className="flex items-center gap-4">
            <time className="text-gray-600" dateTime={article.date}>
              {new Date(article.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </time>
            {article.level && (
              <span className={`px-2 py-1 rounded text-sm ${getLevelColor(article.level)}`}>
                {article.level}
              </span>
            )}
          </div>
        </header>
        <div className="prose prose-lg max-w-none">
          <MDXRemote {...mdxSource} />
        </div>
      </article>
    </div>
  );
}

function getLevelColor(level: string) {
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
}