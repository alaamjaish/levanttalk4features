'use client';

import { useState } from 'react';
import Link from 'next/link';
import { FaSun, FaMoon, FaBars, FaTimes } from 'react-icons/fa';
import { useTheme } from '@/context/ThemeContext';

const Navbar = () => {
  const { darkMode, toggleDarkMode } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white dark:bg-gray-800 shadow-md">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          {/* Logo and Brand */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <span className="text-xl sm:text-2xl font-bold text-indigo-600 dark:text-indigo-400">
                LevantTalk
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/chat" className="text-gray-700 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-400">
              AI Chatbot
            </Link>
            <Link href="/videos" className="text-gray-700 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-400">
              Video Library
            </Link>
            <Link href="/flashcards" className="text-gray-700 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-400">
              Flashcards
            </Link>
            <Link href="/articles" className="text-gray-700 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-400">
              Articles & Stories
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

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 mr-2"
              aria-label="Toggle dark mode"
            >
              {darkMode ? 
                <FaSun className="w-5 h-5 text-yellow-500" /> : 
                <FaMoon className="w-5 h-5 text-gray-700" />
              }
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
              aria-label="Open menu"
            >
              {isMenuOpen ? 
                <FaTimes className="w-6 h-6 text-gray-700 dark:text-gray-200" /> : 
                <FaBars className="w-6 h-6 text-gray-700 dark:text-gray-200" />
              }
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t dark:border-gray-700">
            <div className="flex flex-col space-y-4">
              <Link 
                href="/chat" 
                className="text-gray-700 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-400 px-4 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                AI Chatbot
              </Link>
              <Link 
                href="/videos" 
                className="text-gray-700 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-400 px-4 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Video Library
              </Link>
              <Link 
                href="/flashcards" 
                className="text-gray-700 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-400 px-4 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Flashcards
              </Link>
              <Link 
                href="/articles" 
                className="text-gray-700 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-400 px-4 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Articles & Stories
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
