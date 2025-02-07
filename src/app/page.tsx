import Navbar from '@/components/layout/Navbar';
import FeatureCard from '@/components/home/FeatureCard';
import { FaRobot, FaVideo, FaLayerGroup } from 'react-icons/fa';

export default function Home() {
  return (
    <main>
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Welcome on board to study Arabic with us!
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Learn Syrian Arabic through interactive conversations, curated video content, and smart learning tools.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <FeatureCard
            title="AI Chatbot"
            description="Practice conversations with our GPT-4 powered assistant. Get instant feedback and explanations."
            icon={<FaRobot className="w-full h-full" />}
          />
          <FeatureCard
            title="Video Library"
            description="Access curated Syrian Arabic content organized by proficiency level."
            icon={<FaVideo className="w-full h-full" />}
          />
          <FeatureCard
            title="Flashcards"
            description="Coming Soon: Build your vocabulary with our smart flashcard system."
            icon={<FaLayerGroup className="w-full h-full" />}
          />
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <a
            href="/chat"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
          >
            Start Learning Now
          </a>
        </div>
      </div>
    </main>
  );
}
