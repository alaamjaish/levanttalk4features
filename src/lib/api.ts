import 'server-only';
import { promises as fs } from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

// This should be used in a Node.js context (Server Components, getStaticProps, etc.)
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

// This function should only be called in Server Components or data fetching functions
export async function getAllArticles(): Promise<Article[]> {
  try {
    // Get file names under /articles
    const fileNames = await fs.readdir(articlesDirectory);
    const allArticlesData = await Promise.all(
      fileNames
        .filter(fileName => fileName.endsWith('.mdx'))
        .map(async fileName => {
          const slug = fileName.replace(/\.mdx$/, '');
          const fullPath = path.join(articlesDirectory, fileName);
          const fileContents = await fs.readFile(fullPath, 'utf8');
          
          // Use gray-matter to parse the post metadata section
          const { data, content } = matter(fileContents);
          
          // Convert markdown to HTML
          const contentHtml = await markdownToHtml(content);
          
          return {
            slug,
            title: data.title || 'Untitled',
            content: contentHtml,
            type: data.type,
            level: data.level,
            topics: data.topics,
          };
        })
    );

    return allArticlesData;
  } catch (error) {
    console.error('Error getting all articles:', error);
    return [];
  }
}

// This function should only be called in Server Components or data fetching functions
export async function getArticleBySlug(slug: string): Promise<Article | null> {
  try {
    const fullPath = path.join(articlesDirectory, `${slug}.mdx`);
    const fileContents = await fs.readFile(fullPath, 'utf8');
    
    // Use gray-matter to parse the post metadata section
    const { data, content } = matter(fileContents);
    
    // Convert markdown to HTML
    const contentHtml = await markdownToHtml(content);
    
    return {
      slug,
      title: data.title || 'Untitled',
      content: contentHtml,
      type: data.type,
      level: data.level,
      topics: data.topics,
    };
  } catch (error) {
    console.error(`Error getting article by slug ${slug}:`, error);
    return null;
  }
}

// This function should only be called in Server Components or data fetching functions
export async function searchArticles(query: string): Promise<Article[]> {
  const articles = await getAllArticles();
  const searchQuery = query.toLowerCase();
  
  return articles.filter(article => 
    article.title.toLowerCase().includes(searchQuery) ||
    article.content.toLowerCase().includes(searchQuery) ||
    article.topics?.some(topic => topic.toLowerCase().includes(searchQuery))
  );
}
