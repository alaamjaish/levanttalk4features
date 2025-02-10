'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Navbar from '@/components/layout/Navbar';
import Link from 'next/link';
import { FaArrowLeft } from 'react-icons/fa';
import { MDXRemote } from 'next-mdx-remote';
import Image from 'next/image';
import './styles.css';

interface Article {
  slug: string;
  title: string;
  content: any; // MDX content
  type?: string;
  level?: string;
  topics?: string[];
  mainImage?: string;
}

const components = {
  img: ({ src, alt, ...props }: any) => (
    <div className="relative w-full h-64 my-8">
      <Image
        src={src}
        alt={alt || ''}
        fill
        className="object-cover rounded-lg"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
    </div>
  ),
};

export default function ArticlePage() {
  const params = useParams();
  const [article, setArticle] = useState<Article | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadArticle() {
      if (!params.slug) return;

      try {
        setIsLoading(true);
        setError(null);
        const slug = Array.isArray(params.slug) ? params.slug[0] : params.slug;
        const response = await fetch(`/api/articles/${slug}`);
        
        if (!response.ok) {
          if (response.status === 404) {
            setError('Article not found');
          } else {
            setError('Failed to load article');
          }
          return;
        }

        const articleData = await response.json();
        setArticle(articleData);
      } catch (error) {
        console.error('Error loading article:', error);
        setError('Failed to load article. Please try again later.');
      } finally {
        setIsLoading(false);
      }
    }
    loadArticle();
  }, [params.slug]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        <Navbar />
        <main className="container mx-auto px-4 py-8">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded w-3/4 mb-4"></div>
            <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/2 mb-2"></div>
            <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/3 mb-4"></div>
          </div>
        </main>
      </div>
    );
  }

  if (error || !article) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        <Navbar />
        <main className="container mx-auto px-4 py-8">
          <Link
            href="/articles"
            className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline mb-6"
          >
            <FaArrowLeft className="mr-2" /> Back to Articles
          </Link>
          <div className="text-center py-12">
            <h1 className="text-2xl font-bold text-red-600 dark:text-red-400 mb-4">
              {error || 'Article not found'}
            </h1>
            <p className="text-gray-600 dark:text-gray-400">
              Please try again later or go back to browse other articles.
            </p>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Navbar />
      <main className="container mx-auto px-4 py-8 max-w-3xl">
        <Link
          href="/articles"
          className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline mb-6"
        >
          <FaArrowLeft className="mr-2" /> Back to Articles
        </Link>
        
        <article className="prose dark:prose-invert lg:prose-lg mx-auto">
          {article.mainImage && (
            <div className="relative w-full h-64 mb-8">
              <Image
                src={article.mainImage}
                alt={article.title}
                fill
                className="object-cover rounded-lg"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
          )}
          
          <h1 className="mb-4 text-3xl font-bold">{article.title}</h1>
          
          <div className="flex gap-2 mb-6">
            {article.type && (
              <span className="inline-block bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm px-3 py-1 rounded-full">
                {article.type}
              </span>
            )}
            
            {article.level && (
              <span className="inline-block bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 text-sm px-3 py-1 rounded-full">
                {article.level}
              </span>
            )}
          </div>
          
          <MDXRemote {...article.content} components={components} />
        </article>
      </main>
    </div>
  );
}