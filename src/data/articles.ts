export interface Article {
  id: string;
  title: string;
  description: string;
  content: string;
  type: 'article' | 'story';
  level: 'beginner' | 'intermediate' | 'advanced';
  topics: string[];
  imageUrl?: string;
  readingTime: string;
  arabicText: string;
  englishTranslation: string;
  slug?: string;
}

export const articles: Article[] = [
  {
    id: '1',
    slug: 'day-in-damascus',
    title: 'يوم في دمشق',
    description: 'A day in Damascus - Experience the daily life in the oldest capital city',
    content: 'Full article content here...',
    type: 'story',
    level: 'beginner',
    topics: ['daily life', 'culture', 'city'],
    imageUrl: '/images/damascus.jpg',
    readingTime: '5 min',
    arabicText: 'صباح الخير! اليوم رح نروح عرحلة بدمشق القديمة...',
    englishTranslation: 'Good morning! Today we will go on a journey in old Damascus...'
  },
  // Add your new article here
  {
    id: '2',  // Make sure to use a unique ID
    slug: 'your-article-slug',
    title: 'Your Arabic Title',
    description: 'Your English Description',
    content: 'Your Full Article Content',
    type: 'article',  // or 'story'
    level: 'beginner',  // or 'intermediate' or 'advanced'
    topics: ['your', 'topics', 'here'],
    imageUrl: '/images/your-image.jpg',  // Add image to public/images/
    readingTime: '3 min',
    arabicText: 'Your Arabic Text',
    englishTranslation: 'Your English Translation'
  },
  // Add more articles...
]; 