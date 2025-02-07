'use client';

import { useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import Flashcard from '@/components/flashcards/Flashcard';
import { flashcardDecks } from '@/data/flashcards';

export default function FlashcardsPage() {
  const [selectedDeck, setSelectedDeck] = useState<string | null>(null);
  const [currentCardIndex, setCurrentCardIndex] = useState(0);

  const handleDeckSelect = (deckKey: string) => {
    setSelectedDeck(deckKey);
    setCurrentCardIndex(0);
  };

  const handleNext = () => {
    if (selectedDeck) {
      setCurrentCardIndex((prev) => 
        (prev + 1) % flashcardDecks[selectedDeck as keyof typeof flashcardDecks].cards.length
      );
    }
  };

  const handlePrevious = () => {
    if (selectedDeck) {
      setCurrentCardIndex((prev) => {
        const deckLength = flashcardDecks[selectedDeck as keyof typeof flashcardDecks].cards.length;
        return (prev - 1 + deckLength) % deckLength;
      });
    }
  };

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Flashcards</h1>
          <p className="text-gray-600 dark:text-gray-300">Select a deck to start learning</p>
        </div>

        {!selectedDeck ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {Object.entries(flashcardDecks).map(([key, deck]) => (
              <div 
                key={key} 
                className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow"
              >
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{deck.name}</h2>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{deck.cards.length} cards</p>
                <button
                  onClick={() => handleDeckSelect(key)}
                  className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 font-medium"
                >
                  Start Learning →
                </button>
              </div>
            ))}
          </div>
        ) : (
          <div>
            <button
              onClick={() => setSelectedDeck(null)}
              className="mb-8 text-indigo-600 hover:text-indigo-700 flex items-center"
            >
              ← Back to Decks
            </button>
            
            <div className="max-w-2xl mx-auto">
              <h2 className="text-2xl font-bold text-center mb-8">
                {flashcardDecks[selectedDeck as keyof typeof flashcardDecks].name}
              </h2>
              
              <Flashcard
                {...flashcardDecks[selectedDeck as keyof typeof flashcardDecks].cards[currentCardIndex]}
                onNext={handleNext}
                onPrevious={handlePrevious}
              />
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
