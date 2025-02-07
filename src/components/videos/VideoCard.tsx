import { FaClock, FaTag } from 'react-icons/fa';
import Image from 'next/image';

interface VideoCardProps {
  title: string;
  description: string;
  thumbnailUrl: string;
  videoUrl: string;
  level: 'beginner' | 'intermediate' | 'advanced';
  duration: string;
  topics: string[];
}

const VideoCard = ({ title, description, thumbnailUrl, videoUrl, level, duration, topics }: VideoCardProps) => {
  const levelColors = {
    beginner: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300',
    intermediate: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300',
    advanced: 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300'
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <div className="relative pb-[56.25%] group">
        <Image
          src={thumbnailUrl}
          alt={title}
          fill
          className="object-cover transition-transform group-hover:scale-105"
        />
        <div className="absolute bottom-2 right-2 bg-black/75 text-white px-2 py-1 rounded-md text-sm flex items-center">
          <FaClock className="mr-1" size={12} />
          {duration}
        </div>
      </div>
      <div className="p-4">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-lg font-semibold line-clamp-2 text-gray-900 dark:text-white">{title}</h3>
          <span className={`px-2 py-1 rounded-full text-xs font-medium ${levelColors[level]}`}>
            {level.charAt(0).toUpperCase() + level.slice(1)}
          </span>
        </div>
        <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-2">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {topics.map((topic, index) => (
            <span
              key={index}
              className="inline-flex items-center px-2 py-1 rounded-full bg-gray-100 dark:bg-gray-700 
                text-gray-600 dark:text-gray-300 text-xs"
            >
              <FaTag className="mr-1" size={10} />
              {topic}
            </span>
          ))}
        </div>
        <a
          href={videoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block w-full bg-indigo-600 dark:bg-indigo-500 text-white px-4 py-2 
            rounded-lg hover:bg-indigo-700 dark:hover:bg-indigo-600 transition-colors text-center"
        >
          Watch Video
        </a>
      </div>
    </div>
  );
};

export default VideoCard;
