import { Question } from '@/types/quiz';
import { randomizeOptions } from './utils';

/**
 * PRESENT TENSE QUESTION BANK
 * Contains all questions related to present tense conjugation and usage.
 * 
 * Categories covered:
 * - Basic conjugation with pronouns (أنا، أنت، هو، etc.)
 * - Present continuous
 * - Negation in present tense
 * - Question formation
 */

// Original questions
const originalQuestions: Question[] = [
  {
    id: 'present-1',
    title: 'Present Tense - I Form',
    text: 'For the verb يكتب (to write), what is its form when used with "أنا" (I)?',
    options: ['أكتب', 'يكتب', 'تكتب', 'نكتب'],
    correctAnswer: 0,
    explanation: 'When using "I" (أنا), we add أ to the beginning of the present tense verb. So يكتب becomes أكتب.',
    level: 'beginner',
    category: 'present-tense'
  },
  {
    id: '1',
    title: 'Walking – We Form',
    text: 'For the Arabic verb يمشي (to walk), what is its correct present tense form in Syrian dialect when the subject is "نحن" (we)?',
    options: ['منمشي', 'بمشي', 'بتمشي', 'عم يمشوا'],
    correctAnswer: 0,
    explanation: 'In Syrian dialect, the first person plural ("نحن") is formed by adding the prefix "من" to the verb. Thus, يمشي becomes "منمشي".',
    level: 'beginner',
    category: 'present-tense',
    total: 15
  },
  {
    id: '2',
    title: 'Writing – I Form',
    text: 'For the Arabic verb يكتب (to write), what is its correct present tense form in Syrian dialect when the subject is "أنا" (I)?',
    options: ['بكتب', 'منكتب', 'بيكتب', 'عم يكتب'],
    correctAnswer: 0,
    explanation: 'In Syrian dialect, the first person singular ("أنا") is formed by adding the prefix "ب". Therefore, يكتب becomes "بكتب".',
    level: 'beginner',
    category: 'present-tense',
    total: 15
  },
  {
    id: '3',
    title: 'Eating – He Form',
    text: 'For the Arabic verb يأكل (to eat), what is its correct present tense form in Syrian dialect when the subject is "هو" (he)?',
    options: ['بياكل', 'بأكل', 'منأكل', 'عم يأكل'],
    correctAnswer: 0,
    explanation: 'In Syrian dialect, the third person masculine ("هو") is typically formed with the prefix "بي". Thus, يأكل becomes "بياكل".',
    level: 'beginner',
    category: 'present-tense',
    total: 15
  },
  {
    id: '4',
    title: 'Drinking – You (Masculine) Form',
    text: 'For the Arabic verb يشرب (to drink), what is its correct present tense form in Syrian dialect when the subject is "إنتَ" (you, masculine)?',
    options: ['بتشرب', 'بشرب', 'منشرب', 'عم يشرب'],
    correctAnswer: 0,
    explanation: 'In Syrian dialect, the masculine "you" ("إنتَ") uses the prefix "بت". Therefore, يشرب becomes "بتشرب".',
    level: 'beginner',
    category: 'present-tense',
    total: 15
  },
  {
    id: '5',
    title: 'Drinking – You (Feminine) Form',
    text: 'For the Arabic verb يشرب (to drink), what is its correct present tense form in Syrian dialect when the subject is "إنتِ" (you, feminine)?',
    options: ['بتشربي', 'بتشرب', 'منشرب', 'عم تشرب'],
    correctAnswer: 0,
    explanation: 'In Syrian dialect, the feminine "you" ("إنتِ") is formed by adding an extra vowel sound after the prefix "بت", making يشرب become "بتشربي".',
    level: 'beginner',
    category: 'present-tense',
    total: 15
  },
  {
    id: '6',
    title: 'Reading – They Form',
    text: 'For the Arabic verb يقرأ (to read), what is its correct present tense form in Syrian dialect when the subject is "هم" (they)?',
    options: ['بيقرأوا', 'بقرأوا', 'منقرأ', 'عم يقرأوا'],
    correctAnswer: 0,
    explanation: 'For the plural "they" ("هم") in Syrian dialect, the prefix "بي" is used and the ending "وا" is added. Thus, يقرأ becomes "بيقرأوا".',
    level: 'beginner',
    category: 'present-tense',
    total: 15
  },
  {
    id: '7',
    title: 'Seeing – I Form',
    text: 'For the Arabic verb يشوف (to see), what is its correct present tense form in Syrian dialect when the subject is "أنا" (I)?',
    options: ['بشوف', 'منشوف', 'بيشوف', 'عم بشوف'],
    correctAnswer: 0,
    explanation: 'The Syrian dialect form for "I" ("أنا") uses the prefix "ب". Therefore, يشوف becomes "بشوف".',
    level: 'beginner',
    category: 'present-tense',
    total: 15
  },
  {
    id: '8',
    title: 'Learning – We Form',
    text: 'For the Arabic verb يتعلم (to learn), what is its correct present tense form in Syrian dialect when the subject is "نحن" (we)?',
    options: ['منتعلم', 'بنتعلم', 'منتعلم', 'عم نتعلم'],
    correctAnswer: 0,
    explanation: 'In Syrian dialect, the first person plural ("نحن") takes the prefix "من", so يتعلم becomes "منتعلم".',
    level: 'beginner',
    category: 'present-tense',
    total: 15
  },
  {
    id: '9',
    title: 'Working – He Form',
    text: 'For the Arabic verb يشتغل (to work), what is its correct present tense form in Syrian dialect when the subject is "هو" (he)?',
    options: ['بيشتغل', 'بشتغل', 'منشتغل', 'عم يشتغل'],
    correctAnswer: 0,
    explanation: 'For the third person masculine ("هو"), Syrian dialect uses the prefix "بي", turning يشتغل into "بيشتغل".',
    level: 'beginner',
    category: 'present-tense',
    total: 15
  },
  {
    id: '10',
    title: 'Talking – You (Feminine) Form',
    text: 'For the Arabic verb يحكي (to talk), what is its correct present tense form in Syrian dialect when the subject is "إنتِ" (you, feminine)?',
    options: ['بتحكي', 'بيحكي', 'منحكي', 'عم تحكي'],
    correctAnswer: 0,
    explanation: 'The feminine form of "you" ("إنتِ") in Syrian dialect uses the prefix "بت", so يحكي becomes "بتحكي".',
    level: 'beginner',
    category: 'present-tense',
    total: 15
  },
  {
    id: '11',
    title: 'Running – You (Masculine) Form',
    text: 'For the Arabic verb يركض (to run), what is its correct present tense form in Syrian dialect when the subject is "إنتَ" (you, masculine)?',
    options: ['بتركض', 'بتركض', 'منركض', 'عم يركض'],
    correctAnswer: 0,
    explanation: 'In Syrian dialect, the masculine "you" ("إنتَ") is formed with the prefix "بت", making يركض become "بتركض".',
    level: 'beginner',
    category: 'present-tense',
    total: 15
  },
  {
    id: '12',
    title: 'Singing – He Form',
    text: 'For the Arabic verb يغني (to sing), what is its correct present tense form in Syrian dialect when the subject is "هو" (he)?',
    options: ['بيغني', 'بغني', 'منغني', 'عم يغني'],
    correctAnswer: 0,
    explanation: 'For "he" ("هو") in Syrian dialect, the prefix "بي" is used. Thus, يغني becomes "بيغني".',
    level: 'beginner',
    category: 'present-tense',
    total: 15
  },
  {
    id: '13',
    title: 'Cooking – We Form',
    text: 'For the Arabic verb يطبخ (to cook), what is its correct present tense form in Syrian dialect when the subject is "نحن" (we)?',
    options: ['منطبخ', 'بطبخ', 'نتطبخ', 'عم نطبخ'],
    correctAnswer: 0,
    explanation: 'The Syrian dialect form for "we" ("نحن") uses the prefix "من", turning يطبخ into "منطبخ".',
    level: 'beginner',
    category: 'present-tense',
    total: 15
  },
  {
    id: '14',
    title: 'Talking – He Form',
    text: 'For the Arabic verb يحكي (to talk), what is its correct present tense form in Syrian dialect when the subject is "هو" (he)?',
    options: ['بيحكي', 'بحكي', 'منحكي', 'عم يحكي'],
    correctAnswer: 0,
    explanation: 'In Syrian dialect, the form for "he" ("هو") is made by using the prefix "بي", so يحكي becomes "بيحكي".',
    level: 'beginner',
    category: 'present-tense',
    total: 15
  },
  {
    id: '15',
    title: 'Writing – They Form',
    text: 'For the Arabic verb يكتب (to write), what is its correct present tense form in Syrian dialect when the subject is "هم" (they)?',
    options: ['بيكتبوا', 'بكتبوا', 'منكتب', 'عم يكتبوا'],
    correctAnswer: 0,
    explanation: 'For the plural "they" ("هم") in Syrian dialect, the prefix "بي" is used with the ending "وا", so يكتب becomes "بيكتبوا".',
    level: 'beginner',
    category: 'present-tense',
    total: 15
  },
  // Add more present tense questions here...
];

// Export randomized questions
export const presentTenseQuestions = originalQuestions.map(randomizeOptions);
