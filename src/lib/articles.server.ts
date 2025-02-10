import { promises as fs } from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const articlesDirectory = path.join(process.cwd(), 'content/articles');

export interface Article {
  slug: string;
  title: string;
  content: string;
  type?: string;
  level?: string;
  topics?: string[];
}

async function markdownToHtml(markdown: string) {
  const result = await remark()
    .use(html)
    .process(markdown);
  return result.toString();
}

export async function getArticleBySlug(slug: string) {
  try {
    const fullPath = path.join(articlesDirectory, `${slug}.mdx`);
    const fileContents = await fs.readFile(fullPath, 'utf8');
    const { data, content } = matter(fileContents);
    const contentHtml = await markdownToHtml(content);

    return {
      slug,
      content: contentHtml,
      title: data.title,
      date: data.date,
      description: data.description,
    };
  } catch (error) {
    console.error(`Error loading article ${slug}:`, error);
    return null;
  }
}

export async function getAllArticles() {
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
          const contentHtml = await markdownToHtml(content);

          return {
            slug,
            title: data.title,
            date: data.date,
            description: data.description,
            content: contentHtml,
          };
        })
    );

    return articles.sort((a, b) => (a.date > b.date ? -1 : 1));
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
    article.content.toLowerCase().includes(searchQuery) ||
    article.topics?.some(topic => topic.toLowerCase().includes(searchQuery))
  );
}
