import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface FlashcardProps {
  arabic: string;
  english: string;
  pronunciation: string;
  category: string;
  onNext: () => void;
  onPrevious: () => void;
}

const Flashcard = ({ arabic, english, pronunciation, category, onNext, onPrevious }: FlashcardProps) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowRight') onNext();
    if (e.key === 'ArrowLeft') onPrevious();
    if (e.key === ' ') setIsFlipped(!isFlipped);
  };

  return (
    <div
      className="w-full max-w-xl mx-auto p-4"
      onKeyDown={handleKeyDown}
      tabIndex={0}
    >
      <motion.div
        className="relative w-full aspect-[3/2] cursor-pointer"
        onClick={handleClick}
      >
        <AnimatePresence initial={false} mode="wait">
          <motion.div
            key={isFlipped ? "back" : "front"}
            initial={{ rotateY: isFlipped ? -180 : 0, opacity: 0 }}
            animate={{ rotateY: isFlipped ? 0 : 0, opacity: 1 }}
            exit={{ rotateY: isFlipped ? 0 : -180, opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="absolute inset-0 w-full h-full bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6"
          >
            <div className="h-full flex flex-col items-center justify-center text-center">
              {!isFlipped ? (
                <>
                  <span className="text-sm text-indigo-600 dark:text-indigo-400 mb-4">{category}</span>
                  <h2 className="text-4xl mb-4 font-bold text-gray-900 dark:text-white">{arabic}</h2>
                  <p className="text-gray-500 dark:text-gray-400">{pronunciation}</p>
                </>
              ) : (
                <>
                  <h2 className="text-3xl mb-4 text-gray-900 dark:text-white">{english}</h2>
                  <p className="text-gray-600 dark:text-gray-400 italic">Click to flip back</p>
                </>
              )}
            </div>
          </motion.div>
        </AnimatePresence>
      </motion.div>

      <div className="flex justify-center mt-6 space-x-4">
        <button
          onClick={onPrevious}
          className="px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200 
            rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
        >
          Previous
        </button>
        <button
          onClick={onNext}
          className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 
            dark:bg-indigo-500 dark:hover:bg-indigo-600 transition-colors"
        >
          Next
        </button>
      </div>

      <div className="text-center mt-4 text-sm text-gray-500 dark:text-gray-400">
        Tip: Use arrow keys to navigate, spacebar to flip
      </div>
    </div>
  );
};

export default Flashcard;
