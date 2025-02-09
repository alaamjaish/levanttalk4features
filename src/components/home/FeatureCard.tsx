import Link from 'next/link';
import { ReactNode } from 'react';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  href: string;
}

export default function FeatureCard({ title, description, icon, href }: FeatureCardProps) {
  return (
    <Link href={href}>
      <div className="h-64 bg-white dark:bg-gray-800 rounded-lg p-6 hover:bg-gray-100 dark:hover:bg-gray-700 transition-all transform hover:-translate-y-1 hover:shadow-xl border border-gray-200 dark:border-gray-700">
        <div className="w-12 h-12 mb-4 text-indigo-600 dark:text-indigo-400">
          {icon}
        </div>
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">{title}</h3>
        <p className="text-gray-600 dark:text-gray-300 h-20 line-clamp-3">{description}</p>
      </div>
    </Link>
  );
}
