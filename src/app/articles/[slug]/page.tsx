import { getArticleBySlug } from '@/lib/articles.server';
import styles from '@/styles/articles.module.css';
import { notFound } from 'next/navigation';
import { MDXRemote } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import Navbar from '@/components/layout/Navbar';
import Link from 'next/link';
import { FaArrowLeft } from 'react-icons/fa';

interface Article {
  slug: string;
  title: string;
  date: string;
  content: string;
  description: string;
}

interface Props {
  params: {
    slug: string;
  };
}

export default async function ArticlePage({ params }: Props) {
  const article = await getArticleBySlug(params.slug);

  if (!article) {
    notFound();
  }

  const mdxSource = await serialize(article.content);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        <Link
          href="/articles"
          className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-6"
        >
          <FaArrowLeft className="mr-2" />
          Back to Articles
        </Link>

        <article className="max-w-4xl mx-auto bg-white rounded-lg shadow-sm p-6">
          <header className="mb-8">
            <h1 className="text-4xl font-bold mb-4">{article.title}</h1>
            <div className="flex items-center text-gray-600">
              <time dateTime={article.date}>
                {new Date(article.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </time>
            </div>
          </header>
          
          <div className={styles.articleContent}>
            <MDXRemote 
              {...mdxSource}
              components={{
                div: ({ className, ...props }) => (
                  <div className={`${styles[className || '']} ${className || ''}`} {...props} />
                ),
                span: ({ className, ...props }) => (
                  <span className={`${styles[className || '']} ${className || ''}`} {...props} />
                )
              }}
            />
          </div>
        </article>
      </main>
    </div>
  );
}