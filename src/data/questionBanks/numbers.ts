import { Question } from '@/types/quiz';

export const numberQuestions: Question[] = [
  {
    id: 'num-1',
    title: 'Basic Numbers',
    text: 'How do you say "five" in Syrian Arabic?',
    options: ['خمسة', 'أربعة', 'ستة', 'سبعة'],
    correctAnswer: 0,
    explanation: 'خمسة (khamse) means "five".',
    level: 'beginner',
    category: 'numbers'
  },
  {
    id: 'num-2',
    title: 'Counting Objects',
    text: 'How do you say "two books" in Syrian Arabic?',
    options: ['كتابين', 'كتاب', 'كتب', 'كتابات'],
    correctAnswer: 0,
    explanation: 'كتابين (ktabein) means "two books". The suffix -ein indicates dual form.',
    level: 'beginner',
    category: 'numbers'
  },
  {
    id: 'num-3',
    title: 'Tens',
    text: 'How do you say "twenty" in Syrian Arabic?',
    options: ['عشرين', 'ثلاثين', 'أربعين', 'خمسين'],
    correctAnswer: 0,
    explanation: 'عشرين (3eshrin) means "twenty".',
    level: 'beginner',
    category: 'numbers'
  },
  {
    id: 'num-4',
    title: 'Compound Numbers',
    text: 'How do you say "twenty-five" in Syrian Arabic?',
    options: ['خمسة وعشرين', 'عشرين وخمسة', 'خمسة عشرين', 'عشرين خمسة'],
    correctAnswer: 0,
    explanation: 'خمسة وعشرين (khamse w 3eshrin) means "twenty-five".',
    level: 'beginner',
    category: 'numbers'
  },
  {
    id: 'num-5',
    title: 'Ordinal Numbers',
    text: 'How do you say "first" in Syrian Arabic?',
    options: ['أول', 'تاني', 'تالت', 'رابع'],
    correctAnswer: 0,
    explanation: 'أول (awwal) means "first".',
    level: 'beginner',
    category: 'numbers'
  },
  {
    id: 'num-6',
    title: 'Complex Numbers',
    text: 'How do you say "one hundred and fifty-three" in Syrian Arabic?',
    options: ['مية وثلاثة وخمسين', 'مية وخمسين وثلاثة', 'ثلاثة وخمسين ومية', 'خمسين ومية وثلاثة'],
    correctAnswer: 0,
    explanation: 'مية وثلاثة وخمسين (miyye w tlate w khamsin) means "one hundred and fifty-three".',
    level: 'intermediate',
    category: 'numbers'
  },
  {
    id: 'num-7',
    title: 'Counting with Feminine Nouns',
    text: 'How do you say "three cars" in Syrian Arabic?',
    options: ['تلت سيارات', 'ثلاثة سيارات', 'تلاتة سيارات', 'ثلث سيارات'],
    correctAnswer: 0,
    explanation: 'تلت سيارات (tlat sayyarat) means "three cars". Note the special form used with feminine nouns.',
    level: 'intermediate',
    category: 'numbers'
  },
  {
    id: 'num-8',
    title: 'Large Numbers',
    text: 'How do you say "one thousand" in Syrian Arabic?',
    options: ['ألف', 'مية', 'مليون', 'عشرة آلاف'],
    correctAnswer: 0,
    explanation: 'ألف (alef) means "one thousand".',
    level: 'intermediate',
    category: 'numbers'
  }
];
