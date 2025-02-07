export interface Article {
  _id: string;
  id: string;
  title: string;
  description: string;
  content: string;
  type: 'article' | 'story';
  level: 'beginner' | 'intermediate' | 'advanced';
  topics: string[];
  mainImage: any; // Sanity image type
  readingTime: string;
  arabicText: string;
  englishTranslation: string;
  slug: string;
} 