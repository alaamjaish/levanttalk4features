import { Question } from '@/types/quiz';

export const pronounQuestions: Question[] = [
  {
    id: 'pron-1',
    title: 'Personal Pronouns',
    text: 'What is the Syrian Arabic word for "I"?',
    options: ['أنا', 'إنت', 'هو', 'هي'],
    correctAnswer: 0,
    explanation: 'أنا (ana) means "I" in Syrian Arabic.',
    level: 'beginner',
    category: 'pronouns'
  },
  {
    id: 'pron-2',
    title: 'Possessive Pronouns',
    text: 'How do you say "my book" in Syrian Arabic?',
    options: ['كتابي', 'كتابك', 'كتابو', 'كتابا'],
    correctAnswer: 0,
    explanation: 'كتابي (ktabi) means "my book". The suffix -i indicates possession.',
    level: 'beginner',
    category: 'pronouns'
  },
  {
    id: 'pron-3',
    title: 'Object Pronouns',
    text: 'Which word means "him" in Syrian Arabic?',
    options: ['ياه', 'يانا', 'ياكي', 'ياكن'],
    correctAnswer: 0,
    explanation: 'ياه (ya) means "him" when used as an object pronoun.',
    level: 'beginner',
    category: 'pronouns'
  },
  {
    id: 'pron-4',
    title: 'Plural Pronouns',
    text: 'How do you say "we" in Syrian Arabic?',
    options: ['نحنا', 'إنتو', 'هنن', 'أنا'],
    correctAnswer: 0,
    explanation: 'نحنا (nehna) means "we".',
    level: 'beginner',
    category: 'pronouns'
  },
  {
    id: 'pron-5',
    title: 'Demonstrative Pronouns',
    text: 'Which word means "this" (masculine) in Syrian Arabic?',
    options: ['هاد', 'هاي', 'هدول', 'هديك'],
    correctAnswer: 0,
    explanation: 'هاد (had) means "this" for masculine nouns.',
    level: 'beginner',
    category: 'pronouns'
  },
  {
    id: 'pron-6',
    title: 'Complex Possessives',
    text: 'How do you say "their house" (plural) in Syrian Arabic?',
    options: ['بيتن', 'بيتو', 'بيتا', 'بيتي'],
    correctAnswer: 0,
    explanation: 'بيتن (beiton) means "their house". The suffix -on indicates plural possession.',
    level: 'intermediate',
    category: 'pronouns'
  },
  {
    id: 'pron-7',
    title: 'Relative Pronouns',
    text: 'Which word is used as "who/that/which" in Syrian Arabic?',
    options: ['يللي', 'مين', 'شو', 'وين'],
    correctAnswer: 0,
    explanation: 'يللي (yalli) is the relative pronoun used for "who/that/which".',
    level: 'intermediate',
    category: 'pronouns'
  },
  {
    id: 'pron-8',
    title: 'Demonstrative Distance',
    text: 'How do you say "that one" (feminine, far) in Syrian Arabic?',
    options: ['هديك', 'هاي', 'هدول', 'هاد'],
    correctAnswer: 0,
    explanation: 'هديك (hadik) means "that one" for feminine nouns at a distance.',
    level: 'intermediate',
    category: 'pronouns'
  }
];
