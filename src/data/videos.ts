export interface Video {
  id: number;
  title: string;
  description: string;
  thumbnailUrl: string;
  videoUrl: string;
  level: 'beginner' | 'intermediate' | 'advanced';
  duration: string;
  topics: string[];
}

export const videos: Video[] = [
  {
    id: 1,
    title: 'At the Airport',
    description: 'Learn the most common greetings and expressions used in traveling in via airport.',
    thumbnailUrl: 'https://i3.ytimg.com/vi/Z6oqmST_YMk/maxresdefault.jpg',
    videoUrl: 'https://www.youtube.com/watch?v=DlL1KwykyWY&list=PLinwu5ztdferVMQVc0NCoOUS4wSCeQm-e&ab_channel=LearnArabicwithRazan-SyrianDialect',
    level: 'beginner',
    duration: '8:24',
    topics: ['greetings', 'introductions', 'daily expressions']
  },
  {
    id: 2,
    title: 'Syrian Arabic Numbers and Counting',
    description: 'Master numbers 1-100 in Syrian Arabic, including practical usage in shopping and daily life.',
    thumbnailUrl: 'https://i3.ytimg.com/vi/FtXPw6gW3YU/maxresdefault.jpg',
    videoUrl: 'https://www.youtube.com/watch?v=FtXPw6gW3YU',
    level: 'beginner',
    duration: '12:15',
    topics: ['numbers', 'shopping', 'counting']
  },
  {
    id: 3,
    title: 'Shopping in Damascus Markets',
    description: 'Learn essential phrases and vocabulary for shopping in Syrian markets.',
    thumbnailUrl: 'https://i3.ytimg.com/vi/8mXyZT0RQpY/maxresdefault.jpg',
    videoUrl: 'https://www.youtube.com/watch?v=8mXyZT0RQpY',
    level: 'intermediate',
    duration: '15:30',
    topics: ['shopping', 'bargaining', 'food']
  },
  {
    id: 4,
    title: 'Syrian Arabic Slang and Idioms',
    description: 'Popular slang expressions and idioms used in everyday Syrian conversations.',
    thumbnailUrl: 'https://i3.ytimg.com/vi/QE7m33BjXVk/maxresdefault.jpg',
    videoUrl: 'https://www.youtube.com/watch?v=QE7m33BjXVk',
    level: 'intermediate',
    duration: '18:45',
    topics: ['slang', 'idioms', 'daily life']
  },
  {
    id: 5,
    title: 'Advanced Syrian Dialect Conversations',
    description: 'Complex dialogues about culture, society, and current events in Syrian Arabic.',
    thumbnailUrl: 'https://i3.ytimg.com/vi/YK5q8H_kh4A/maxresdefault.jpg',
    videoUrl: 'https://www.youtube.com/watch?v=YK5q8H_kh4A',
    level: 'advanced',
    duration: '22:10',
    topics: ['culture', 'society', 'current events']
  },
  {
    id: 6,
    title: 'Syrian Poetry and Literature',
    description: 'Explore classic Syrian poetry and literature with detailed explanations.',
    thumbnailUrl: 'https://i3.ytimg.com/vi/L6nx0JD6KnE/maxresdefault.jpg',
    videoUrl: 'https://www.youtube.com/watch?v=L6nx0JD6KnE',
    level: 'advanced',
    duration: '25:00',
    topics: ['poetry', 'literature', 'culture']
  }
];
