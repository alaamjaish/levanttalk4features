import { promises as fs } from 'fs';
import path from 'path';
import matter from 'gray-matter';

const articlesDirectory = path.join(process.cwd(), 'content/articles');

export interface Article {
  slug: string;
  title: string;
  content: string;
  date: string;
  level?: 'beginner' | 'intermediate' | 'advanced';
}

export async function getArticleBySlug(slug: string): Promise<Article | null> {
  try {
    const fullPath = path.join(articlesDirectory, `${slug}.mdx`);
    const fileContents = await fs.readFile(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    return {
      slug,
      title: data.title,
      content,
      date: data.date,
      level: data.level,
    };
  } catch (error) {
    console.error(`Error loading article ${slug}:`, error);
    return null;
  }
}

export async function getAllArticles(): Promise<Article[]> {
  try {
    const files = await fs.readdir(articlesDirectory);
    const articles = await Promise.all(
      files
        .filter(file => file.endsWith('.mdx'))
        .map(async file => {
          const slug = file.replace(/\.mdx$/, '');
          const fullPath = path.join(articlesDirectory, file);
          const fileContents = await fs.readFile(fullPath, 'utf8');
          const { data, content } = matter(fileContents);

          return {
            slug,
            title: data.title,
            content,
            date: data.date,
            level: data.level,
          };
        })
    );

    return articles;
  } catch (error) {
    console.error('Error loading articles:', error);
    return [];
  }
}

export async function searchArticles(query: string): Promise<Article[]> {
  const articles = await getAllArticles();
  const searchQuery = query.toLowerCase();
  
  return articles.filter(article => 
    article.title.toLowerCase().includes(searchQuery) ||
    article.content.toLowerCase().includes(searchQuery)
  );
}
