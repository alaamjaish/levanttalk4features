import { Question } from '@/types/quiz';

export const expressionQuestions: Question[] = [
  {
    id: 'expr-1',
    title: 'Basic Greetings',
    text: 'How do you say "good morning" in Syrian Arabic?',
    options: ['صباح الخير', 'مساء الخير', 'تصبح على خير', 'صباح النور'],
    correctAnswer: 0,
    explanation: 'صباح الخير (sabah el-kheir) means "good morning".',
    level: 'beginner',
    category: 'expressions'
  },
  {
    id: 'expr-2',
    title: 'Common Phrases',
    text: 'How do you say "please" in Syrian Arabic?',
    options: ['لو سمحت', 'شكراً', 'عفواً', 'أهلاً'],
    correctAnswer: 0,
    explanation: 'لو سمحت (law samaht) means "please".',
    level: 'beginner',
    category: 'expressions'
  },
  {
    id: 'expr-3',
    title: 'Polite Responses',
    text: 'How do you respond to "thank you" in Syrian Arabic?',
    options: ['عفواً', 'شكراً', 'مرحبا', 'مع السلامة'],
    correctAnswer: 0,
    explanation: 'عفواً (3afwan) means "you\'re welcome".',
    level: 'beginner',
    category: 'expressions'
  },
  {
    id: 'expr-4',
    title: 'Well-wishes',
    text: 'How do you say "congratulations" in Syrian Arabic?',
    options: ['مبروك', 'الحمد لله', 'يعطيك العافية', 'الله يسعدك'],
    correctAnswer: 0,
    explanation: 'مبروك (mabrook) means "congratulations".',
    level: 'beginner',
    category: 'expressions'
  },
  {
    id: 'expr-5',
    title: 'Common Questions',
    text: 'How do you ask "how are you?" in Syrian Arabic?',
    options: ['كيفك', 'شو أخبارك', 'وينك', 'شلونك'],
    correctAnswer: 0,
    explanation: 'كيفك (kifak/kifik) means "how are you?".',
    level: 'beginner',
    category: 'expressions'
  },
  {
    id: 'expr-6',
    title: 'Idiomatic Expressions',
    text: 'What does "على راسي" mean literally and figuratively?',
    options: ['على راسي (on my head) - "I\'d be honored"', 'على راسي - "I\'m tired"', 'على راسي - "I\'m thinking"', 'على راسي - "I\'m confused"'],
    correctAnswer: 0,
    explanation: 'على راسي (3ala rasi) literally means "on my head" but is used to say "I\'d be honored" or "with pleasure".',
    level: 'intermediate',
    category: 'expressions'
  },
  {
    id: 'expr-7',
    title: 'Cultural Expressions',
    text: 'What do you say when someone is eating in Syrian Arabic?',
    options: ['صحتين', 'بالهنا', 'عافية', 'حلوة'],
    correctAnswer: 0,
    explanation: 'صحتين (sahten) is said to someone who is eating, similar to "bon appétit".',
    level: 'intermediate',
    category: 'expressions'
  },
  {
    id: 'expr-8',
    title: 'Religious Expressions',
    text: 'What do you say when someone sneezes in Syrian Arabic?',
    options: ['يرحمكم الله', 'الحمد لله', 'الله يشفيك', 'بارك الله فيك'],
    correctAnswer: 0,
    explanation: 'يرحمكم الله (yarhamkom allah) is said when someone sneezes, similar to "bless you".',
    level: 'intermediate',
    category: 'expressions'
  }
];
