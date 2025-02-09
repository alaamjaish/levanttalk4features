/**
 * Types for the LevantTalk Quiz System
 * This file contains all the type definitions needed for the quiz feature.
 */

/**
 * Defines the possible difficulty levels for questions and quizzes.
 * - beginner: For users just starting to learn Arabic
 * - intermediate: For users with basic Arabic knowledge
 * - advanced: For users with strong Arabic foundation
 */
export type QuestionLevel = 'beginner' | 'intermediate' | 'advanced';

/**
 * Defines the categories of questions and quizzes.
 * - general: Mixed questions from various topics
 * - present-tense: Questions about present tense conjugation
 * - past-tense: Questions about past tense conjugation
 * - future-tense: Questions about future tense formation
 * - prepositions: Questions about Arabic prepositions
 * 
 * You can extend this type to add more categories as needed.
 */
export type QuestionCategory = 'general' | 'present-tense' | 'past-tense' | 'future-tense' | 'prepositions' | string;

/**
 * Represents a single question in the quiz system.
 * 
 * @property id - Unique identifier for the question
 * @property title - Optional title describing the question topic
 * @property text - The actual question text (English with Arabic terms)
 * @property options - Array of possible answers (usually in Arabic)
 * @property correctAnswer - Index of the correct answer in the options array (0-based)
 * @property explanation - Detailed explanation of the answer (English with Arabic examples)
 * @property level - Difficulty level of the question
 * @property category - The grammatical or topical category
 * @property total - Optional total number of questions in the quiz
 * 
 * Example:
 * {
 *   id: '1',
 *   title: 'Present Tense Conjugation',
 *   text: 'For the verb يكتب (to write), what is its form with "أنا" (I)?',
 *   options: ['أكتب', 'يكتب', 'تكتب', 'نكتب'],
 *   correctAnswer: 0,
 *   explanation: 'With "I" (أنا), we add أ to the start of the verb...',
 *   level: 'beginner',
 *   category: 'present-tense'
 * }
 */
export interface Question {
  id: string;
  title?: string;
  text: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  level: QuestionLevel;
  category: QuestionCategory;
  total?: number;
}

/**
 * Represents a complete quiz that can be taken by users.
 * 
 * @property id - Unique identifier for the quiz
 * @property title - Display title of the quiz
 * @property description - Detailed description of what the quiz covers
 * @property level - Difficulty level of the quiz
 * @property category - The grammatical or topical category
 * @property questionCount - Number of questions to include in the quiz
 * @property imageUrl - Optional image for the quiz card
 * 
 * Example:
 * {
 *   id: 'present-tense-basics',
 *   title: 'Present Tense Basics',
 *   description: 'Learn basic present tense conjugations',
 *   level: 'beginner',
 *   category: 'present-tense',
 *   questionCount: 15
 * }
 */
export interface Quiz {
  id: string;
  title: string;
  description: string;
  level: QuestionLevel;
  category: QuestionCategory;
  questionCount: number;
  imageUrl?: string;
}

/**
 * Represents the results of a completed quiz.
 * 
 * @property quizId - ID of the quiz that was taken
 * @property score - Number of correct answers
 * @property totalQuestions - Total number of questions in the quiz
 * @property answers - Array of user's answers and their correctness
 * @property completedAt - Timestamp when the quiz was completed
 * 
 * Example:
 * {
 *   quizId: 'present-tense-basics',
 *   score: 12,
 *   totalQuestions: 15,
 *   answers: [
 *     { questionId: '1', correct: true, selectedAnswer: 0 }
 *   ],
 *   completedAt: '2025-02-09T03:09:21+03:00'
 * }
 */
export interface QuizResult {
  quizId: string;
  score: number;
  totalQuestions: number;
  answers: {
    questionId: string;
    correct: boolean;
    selectedAnswer: number;
  }[];
  completedAt: string;
}
