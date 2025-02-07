import Link from 'next/link';
import Image from 'next/image';
import { Article } from '@/data/articles';
import { FaClock, FaTag } from 'react-icons/fa';

const ArticleCard = ({ id, title, description, type, level, topics, imageUrl, readingTime, slug }: Article) => {
  const levelColors = {
    beginner: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300',
    intermediate: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300',
    advanced: 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300'
  };

  return (
    <Link href={`/articles/${slug}`} className="block">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
        {imageUrl && (
          <div className="relative h-48">
            <Image src={imageUrl} alt={title} fill className="object-cover" />
          </div>
        )}
        <div className="p-4">
          <div className="flex items-center justify-between mb-2">
            <span className={`px-2 py-1 rounded-full text-xs font-medium ${levelColors[level]}`}>
              {level.charAt(0).toUpperCase() + level.slice(1)}
            </span>
            <span className="text-gray-600 dark:text-gray-400 text-sm flex items-center">
              <FaClock className="mr-1" size={12} />{readingTime}
            </span>
          </div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{title}</h3>
          <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">{description}</p>
          <div className="flex flex-wrap gap-2">
            {topics.map((topic, index) => (
              <span key={index} className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300">
                <FaTag className="mr-1" size={10} />{topic}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ArticleCard;