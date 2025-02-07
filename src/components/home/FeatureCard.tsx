import Link from 'next/link';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  href: string;
}

const FeatureCard = ({ title, description, icon, href }: FeatureCardProps) => {
  return (
    <Link href={href} className="block">
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-all hover:-translate-y-1 cursor-pointer">
        <div className="text-indigo-600 dark:text-indigo-400 w-12 h-12 mb-4">
          {icon}
        </div>
        <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{title}</h3>
        <p className="text-gray-600 dark:text-gray-300">{description}</p>
      </div>
    </Link>
  );
};

export default FeatureCard;
