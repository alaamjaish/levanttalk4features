'use client';

import Link from 'next/link';
import { FaSun, FaMoon } from 'react-icons/fa';
import { useTheme } from '@/context/ThemeContext';

const Navbar = () => {
  const { darkMode, toggleDarkMode } = useTheme();

  return (
    <nav className="bg-white dark:bg-gray-800 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link href="/" className="flex items-center">
              <span className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">LevantTalk</span>
            </Link>
          </div>
          <div className="flex items-center space-x-8">
            <Link href="/chat" className="text-gray-700 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-400">
              AI Chatbot
            </Link>
            <Link href="/videos" className="text-gray-700 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-400">
              Video Library
            </Link>
            <Link href="/flashcards" className="text-gray-700 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-400">
              Flashcards
            </Link>
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
              aria-label="Toggle dark mode"
            >
              {darkMode ? 
                <FaSun className="w-5 h-5 text-yellow-500" /> : 
                <FaMoon className="w-5 h-5 text-gray-700" />
              }
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
