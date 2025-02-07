'use client';

import { useParams } from 'next/navigation';
import { articles } from '@/data/articles';
import Navbar from '@/components/layout/Navbar';
import Link from 'next/link';
import Image from 'next/image';
import { FaClock, FaArrowLeft } from 'react-icons/fa';

export default function ArticlePage() {
  const { slug } = useParams();
  const article = articles.find(a => a.slug === slug || a.id === slug);

  if (!article) {
    return (
      <main className="min-h-screen bg-gray-50 dark:bg-gray-900">
        <Navbar />
        <div className="max-w-4xl mx-auto px-4 py-8">
          <Link href="/articles" className="text-indigo-600 hover:text-indigo-800">
            ← Back to Articles
          </Link>
          <h1 className="text-2xl font-bold mt-4">Article not found</h1>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Navbar />
      <article className="max-w-4xl mx-auto px-4 py-8">
        <Link href="/articles" className="text-indigo-600 hover:text-indigo-800">
          ← Back to Articles
        </Link>
        <div className="mt-8">
          <h1 className="text-3xl font-bold mb-4">{article.title}</h1>
          <div className="prose max-w-none">
            <div className="mb-8">
              <h2 className="text-xl font-semibold mb-2">Arabic Text:</h2>
              <p className="text-lg" dir="rtl">{article.arabicText}</p>
            </div>
            <div>
              <h2 className="text-xl font-semibold mb-2">English Translation:</h2>
              <p className="text-lg">{article.englishTranslation}</p>
            </div>
          </div>
        </div>
      </article>
    </main>
  );
} 