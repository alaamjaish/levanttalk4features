/**
 * Question Banks Index
 * This file combines all question banks and provides utility functions
 * for accessing and filtering questions across all banks.
 */

import { Question, Quiz, QuestionLevel, QuestionCategory } from '@/types/quiz';
import { presentTenseQuestions } from './presentTense';
import { pastTenseQuestions } from './pastTense';
import { generalQuestions } from './general';
import { prepositionsQuestions } from './prepositions';
import { futureTenseQuestions } from './futureTense';
import { pronounQuestions } from './pronouns';
import { numberQuestions } from './numbers';
import { expressionQuestions } from './expressions';

/**
 * Combine all question banks
 * Add your new question bank import above and include it here
 */
export const allQuestions: Question[] = [
  ...generalQuestions,      // General proficiency questions
  ...presentTenseQuestions, // Present tense specific questions
  ...pastTenseQuestions,    // Past tense specific questions
  ...prepositionsQuestions, // Prepositions specific questions
  ...futureTenseQuestions,  // Future tense specific questions
  ...pronounQuestions,      // Pronouns specific questions
  ...numberQuestions,       // Numbers specific questions
  ...expressionQuestions,   // Expressions specific questions
  // Add more question banks here...
];

/**
 * Quiz Definitions
 * Each quiz pulls from its specific question bank
 */
export const quizzes: Quiz[] = [
  // General proficiency quizzes
  {
    id: 'general-beginner',
    title: 'General Beginner Test',
    description: 'Test your basic knowledge of Syrian Arabic expressions and common phrases',
    level: 'beginner',
    category: 'general',
    questionCount: 40
  },
  {
    id: 'general-intermediate',
    title: 'General Intermediate Test',
    description: 'Challenge yourself with intermediate level Syrian Arabic',
    level: 'intermediate',
    category: 'general',
    questionCount: 40
  },
  {
    id: 'general-advanced',
    title: 'General Advanced Test',
    description: 'Master complex Syrian Arabic concepts',
    level: 'advanced',
    category: 'general',
    questionCount: 40
  },

  // Beginner Level Skills
  {
    id: 'numbers',
    title: 'Numbers & Counting',
    description: 'Learn essential numbers, counting, and basic math expressions',
    level: 'beginner',
    category: 'numbers',
    questionCount: 20
  },
  {
    id: 'basic-expressions',
    title: 'Essential Expressions',
    description: 'Master everyday greetings and common phrases',
    level: 'beginner',
    category: 'expressions',
    questionCount: 20
  },
  {
    id: 'basic-pronouns',
    title: 'Personal Pronouns',
    description: 'Learn personal pronouns and basic possessives',
    level: 'beginner',
    category: 'pronouns',
    questionCount: 20
  },
  {
    id: 'present-tense',
    title: 'Present Tense',
    description: 'Learn how to describe current actions and states',
    level: 'beginner',
    category: 'present',
    questionCount: 20
  },
  {
    id: 'colors-shapes',
    title: 'Colors & Shapes',
    description: 'Learn basic colors and shapes in Syrian Arabic',
    level: 'beginner',
    category: 'vocabulary',
    questionCount: 20
  },
  {
    id: 'family-members',
    title: 'Family Relations',
    description: 'Learn words for family members and relationships',
    level: 'beginner',
    category: 'vocabulary',
    questionCount: 20
  },
  {
    id: 'time-basics',
    title: 'Time & Calendar',
    description: 'Learn to tell time and discuss dates',
    level: 'beginner',
    category: 'time',
    questionCount: 20
  },

  // Intermediate Level Skills
  {
    id: 'past-tense',
    title: 'Past Tense',
    description: 'Master telling stories and describing past events',
    level: 'intermediate',
    category: 'past',
    questionCount: 20
  },
  {
    id: 'future-tense',
    title: 'Future Tense',
    description: 'Express future plans and possibilities',
    level: 'intermediate',
    category: 'future',
    questionCount: 20
  },
  {
    id: 'prepositions',
    title: 'Prepositions & Location',
    description: 'Learn to describe locations and relationships between objects',
    level: 'intermediate',
    category: 'prepositions',
    questionCount: 20
  },
  {
    id: 'idiomatic-expressions',
    title: 'Idiomatic Expressions',
    description: 'Learn common Syrian idioms and cultural expressions',
    level: 'intermediate',
    category: 'expressions',
    questionCount: 20
  },
  {
    id: 'shopping-bargaining',
    title: 'Shopping & Bargaining',
    description: 'Learn to negotiate prices and shop in markets',
    level: 'intermediate',
    category: 'practical',
    questionCount: 20
  },
  {
    id: 'food-ordering',
    title: 'Restaurant & Food',
    description: 'Master ordering food and discussing cuisine',
    level: 'intermediate',
    category: 'food',
    questionCount: 20
  },
  {
    id: 'emotions-feelings',
    title: 'Emotions & Feelings',
    description: 'Express emotions and discuss feelings',
    level: 'intermediate',
    category: 'emotions',
    questionCount: 20
  },
  {
    id: 'weather-seasons',
    title: 'Weather & Seasons',
    description: 'Discuss weather conditions and seasonal changes',
    level: 'intermediate',
    category: 'weather',
    questionCount: 20
  },

  // Advanced Level Skills
  {
    id: 'complex-tenses',
    title: 'Complex Verb Forms',
    description: 'Master conditional tenses and complex verb patterns',
    level: 'advanced',
    category: 'verbs',
    questionCount: 20
  },
  {
    id: 'colloquial-expressions',
    title: 'Colloquial Expressions',
    description: 'Master sophisticated local expressions and proverbs',
    level: 'advanced',
    category: 'expressions',
    questionCount: 20
  },
  {
    id: 'formal-speech',
    title: 'Formal Speech',
    description: 'Learn formal Arabic expressions used in Syrian dialect',
    level: 'advanced',
    category: 'formal',
    questionCount: 20
  },
  {
    id: 'dialect-variations',
    title: 'Regional Variations',
    description: 'Understand different Syrian regional dialect variations',
    level: 'advanced',
    category: 'dialect',
    questionCount: 20
  },
  {
    id: 'poetry-literature',
    title: 'Poetry & Literature',
    description: 'Explore Syrian poetry and literary expressions',
    level: 'advanced',
    category: 'literature',
    questionCount: 20
  },
  {
    id: 'business-professional',
    title: 'Business Arabic',
    description: 'Master professional and business terminology',
    level: 'advanced',
    category: 'business',
    questionCount: 20
  },
  {
    id: 'medical-health',
    title: 'Medical & Health',
    description: 'Learn medical terms and health-related expressions',
    level: 'advanced',
    category: 'medical',
    questionCount: 20
  },
  {
    id: 'cultural-traditions',
    title: 'Cultural Traditions',
    description: 'Deep dive into Syrian cultural traditions and customs',
    level: 'advanced',
    category: 'culture',
    questionCount: 20
  }
];

/**
 * Get questions for a specific quiz
 * Each category (including 'general') now uses its own specific question bank
 */
export function getRandomQuestions(level: string, category: string, count: number): Question[] {
  // Get questions from the specific category's bank
  const questionPool = category === 'general'
    ? allQuestions.filter(q => q.level === level)
    : allQuestions.filter(q => q.category === category && q.level === level);
  
  // Determine the correct number of questions based on quiz type
  const targetCount = category === 'general' ? 40 : 20;
  
  // Randomly select and prepare questions
  return [...questionPool]
    .sort(() => Math.random() - 0.5)
    .slice(0, Math.min(targetCount, questionPool.length))
    .map((q, i) => ({
      ...q,
      id: (i + 1).toString(),
      total: targetCount // Always set the total to the target count
    }));
}

/**
 * Get all questions for a specific category
 */
export function getQuestionsByCategory(category: QuestionCategory): Question[] {
  return allQuestions.filter(q => q.category === category);
}

/**
 * Get all questions for a specific difficulty level
 */
export function getQuestionsByLevel(level: QuestionLevel): Question[] {
  return allQuestions.filter(q => q.level === level);
}

/**
 * Verify that we have enough questions for each quiz
 */
export function verifyQuizQuestions(): { valid: boolean; issues: string[] } {
  const issues: string[] = [];
  
  quizzes.forEach(quiz => {
    const availableQuestions = quiz.category === 'general'
      ? getQuestionsByLevel(quiz.level)
      : getQuestionsByCategory(quiz.category).filter(q => q.level === quiz.level);
      
    if (availableQuestions.length < quiz.questionCount) {
      issues.push(
        `Quiz "${quiz.title}" requires ${quiz.questionCount} questions but only ${availableQuestions.length} are available`
      );
    }
  });
  
  return {
    valid: issues.length === 0,
    issues
  };
}
