import Navbar from '@/components/layout/Navbar';
import FeatureCard from '@/components/home/FeatureCard';
import { FaRobot, FaVideo, FaLayerGroup, FaBook } from 'react-icons/fa';
import Link from 'next/link';

export default function Home() {
  const features = [
    {
      title: "AI Chatbot",
      description: "Practice conversations with our the latest AI powered assistant. Get instant explanations!",
      icon: <FaRobot className="w-full h-full" />,
      href: "/chat"
    },
    {
      title: "Video Library",
      description: "Access curated Syrian Arabic content organized by proficiency level.",
      icon: <FaVideo className="w-full h-full" />,
      href: "/videos"
    },
    {
      title: "Flashcards",
      description: "Build your vocabulary with our smart flashcard system.",
      icon: <FaLayerGroup className="w-full h-full" />,
      href: "/flashcards"
    },
    {
      title: "Articles & Stories",
      description: "Read and learn from curated Syrian Arabic articles and stories with interactive tools.",
      icon: <FaBook className="w-full h-full" />,
      href: "/articles"
    }
  ];

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Welcome on board to study Arabic with us!
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Learn Syrian Arabic through interactive conversations, curated video content, and smart learning tools.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              {...feature}
            />
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Link
            href="/chat"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md 
              text-white bg-indigo-600 hover:bg-indigo-700 transition-colors"
          >
            Start Learning Now
          </Link>
        </div>
      </div>
    </main>
  );
}
