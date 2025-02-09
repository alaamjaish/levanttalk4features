import { Question } from '@/types/quiz';
import { randomizeOptions } from './utils';

/**
 * PAST TENSE QUESTION BANK
 * Contains all questions related to past tense conjugation and usage.
 * 
 * Categories covered:
 * - Basic past tense conjugation
 * - Irregular past tense verbs
 * - Negation in past tense
 * - Question formation
 */

// Original questions
const originalQuestions: Question[] = [
  {
    id: 'past-1',
    title: 'Past Tense - They Form',
    text: 'What is the correct form of كتب (to write) when used with "هم" (they)?',
    options: ['كتبوا', 'كتبت', 'كتبنا', 'كتبتم'],
    correctAnswer: 0,
    explanation: 'When using "they" (هم) in the past tense, we add وا to the end of the verb. So كتب becomes كتبوا.',
    level: 'beginner',
    category: 'past-tense'
  },
  // Add more past tense questions here...
  {
    id: 'past-1',
    title: 'راح (To Go) - Basic Past',
    text: 'How do you say "I went" in Syrian Arabic?',
    options: ['رحت', 'ذهبت', 'مشيت', 'روحت'],
    correctAnswer: 0,
    explanation: 'In Syrian dialect, "I went" is رحت (rehet). The verb راح is very common and the past tense uses ت for "I".',
    level: 'beginner',
    category: 'past-tense'
  },
  {
    id: 'past-2',
    title: 'اكل (To Eat) - Negation',
    text: 'How do you say "I didn\'t eat" in Syrian Arabic?',
    options: ['ما اكلت', 'لم آكل', 'مو اكلت', 'ما اكلتش'],
    correctAnswer: 0,
    explanation: 'To negate in Syrian past tense, we use ما before the verb. So "I didn\'t eat" is ما اكلت (ma akalt).',
    level: 'beginner',
    category: 'past-tense'
  },
  {
    id: 'past-3',
    title: 'شاف (To See) - They Form',
    text: 'How do you say "they saw" in Syrian Arabic?',
    options: ['شافو', 'شافوا', 'رأوا', 'شافون'],
    correctAnswer: 0,
    explanation: 'In Syrian dialect, "they saw" is شافو (shafo). Note that in dialect, we drop the ا at the end that would be present in MSA.',
    level: 'beginner',
    category: 'past-tense'
  },
  {
    id: 'past-4',
    title: 'حكى (To Speak) - We Form',
    text: 'How do you say "we spoke" in Syrian Arabic?',
    options: ['حكينا', 'تكلمنا', 'حكيننا', 'تحدثنا'],
    correctAnswer: 0,
    explanation: 'The Syrian past tense "we" form adds نا to the verb. "We spoke" is حكينا (hkeena).',
    level: 'beginner',
    category: 'past-tense'
  },
  {
    id: 'past-5',
    title: 'نام (To Sleep) - She Form',
    text: 'How do you say "she slept" in Syrian Arabic?',
    options: ['نامت', 'نامة', 'نامي', 'نامتي'],
    correctAnswer: 0,
    explanation: 'For "she" in past tense, we add ت. "She slept" is نامت (namet).',
    level: 'beginner',
    category: 'past-tense'
  },
  {
    id: 'past-6',
    title: 'عمل (To Do) - Question Formation',
    text: 'How do you ask "what did you do?" in Syrian Arabic?',
    options: ['شو عملت؟', 'ماذا فعلت؟', 'إيش سويت؟', 'شو سويت؟'],
    correctAnswer: 0,
    explanation: 'In Syrian dialect, we use شو for "what" and عمل for "to do". So "What did you do?" is شو عملت؟ (shu 3melt?)',
    level: 'beginner',
    category: 'past-tense'
  },
  {
    id: 'past-7',
    title: 'جاب (To Bring) - You Plural',
    text: 'How do you say "you all brought" in Syrian Arabic?',
    options: ['جبتو', 'جبتوا', 'أحضرتم', 'جابيتو'],
    correctAnswer: 0,
    explanation: 'The Syrian past tense "you plural" form adds تو. "You all brought" is جبتو (jebto).',
    level: 'beginner',
    category: 'past-tense'
  },
  {
    id: 'past-8',
    title: 'كان (To Be) - Negation Past',
    text: 'How do you say "it wasn\'t" in Syrian Arabic?',
    options: ['ما كان', 'لم يكن', 'مو كان', 'مش كان'],
    correctAnswer: 0,
    explanation: 'To negate كان in Syrian dialect, we use ما كان (ma kan). This is very common in spoken Syrian.',
    level: 'beginner',
    category: 'past-tense'
  },
  {
    id: 'past-9',
    title: 'قال (To Say) - He Form',
    text: 'How do you say "he said" in Syrian Arabic?',
    options: ['قال', 'حكى', 'قالي', 'حكالي'],
    correctAnswer: 0,
    explanation: 'The verb قال is irregular but common. "He said" is simply قال (aal) in Syrian dialect.',
    level: 'beginner',
    category: 'past-tense'
  },
  {
    id: 'past-10',
    title: 'طلع (To Go Up/Out) - You Feminine',
    text: 'How do you say "you (feminine) went out" in Syrian Arabic?',
    options: ['طلعتي', 'طلعت', 'طالعتي', 'طلعتين'],
    correctAnswer: 0,
    explanation: 'For "you (feminine)" in past tense, we add تي. "You went out" is طلعتي (tla3ti).',
    level: 'beginner',
    category: 'past-tense'
  },
  {
    id: 'past-11',
    title: 'شرب (To Drink) - Continuous Past',
    text: 'How do you say "I was drinking" in Syrian Arabic?',
    options: ['كنت عم اشرب', 'كنت اشرب', 'شربت', 'عم شربت'],
    correctAnswer: 0,
    explanation: 'For past continuous in Syrian, we use كنت عم + verb. "I was drinking" is كنت عم اشرب (kent 3am eshrab).',
    level: 'intermediate',
    category: 'past-tense'
  },
  {
    id: 'past-12',
    title: 'فات (To Enter) - They Form',
    text: 'How do you say "they entered" in Syrian Arabic?',
    options: ['فاتو', 'دخلو', 'فاتوا', 'دخلوا'],
    correctAnswer: 0,
    explanation: 'The verb فات is more common than دخل in Syrian. "They entered" is فاتو (faato).',
    level: 'beginner',
    category: 'past-tense'
  }
];

// Export randomized questions
export const pastTenseQuestions = originalQuestions.map(randomizeOptions);
