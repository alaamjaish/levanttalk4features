import 'server-only';
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

export async function getAllArticles(): Promise<Article[]> {
  try {
    // Check if directory exists
    try {
      await fs.access(articlesDirectory);
    } catch (error) {
      console.error('Articles directory not found:', articlesDirectory);
      return [];
    }

    const fileNames = await fs.readdir(articlesDirectory);
    console.log('Found article files:', fileNames);

    if (fileNames.length === 0) {
      console.log('No MDX files found in articles directory');
      return [];
    }

    const allArticlesData = await Promise.all(
      fileNames
        .filter(fileName => fileName.endsWith('.mdx'))
        .map(async (fileName): Promise<Article | null> => {
          try {
            const slug = fileName.replace(/\.mdx$/, '');
            const fullPath = path.join(articlesDirectory, fileName);
            console.log('Processing article:', fullPath);
            
            const fileContents = await fs.readFile(fullPath, 'utf8');
            console.log('File contents:', fileContents.substring(0, 200)); // Show first 200 chars
            const { data, content } = matter(fileContents);
            console.log('Parsed frontmatter data:', JSON.stringify(data, null, 2));
            console.log('Content preview:', content.substring(0, 100));
            const contentHtml = await markdownToHtml(content);
            
            const article = {
              slug,
              title: data.title || 'Untitled',
              content: contentHtml,
              type: data.type,
              level: data.level,
              topics: data.topics,
            };
            console.log('Processed article:', JSON.stringify(article, null, 2));
            return article;
          } catch (error) {
            console.error(`Error processing article ${fileName}:`, error);
            return null;
          }
        })
    );

    // Filter out any null results from errors
    const validArticles = allArticlesData.filter((article): article is Article => article !== null);
    console.log(`Successfully processed ${validArticles.length} articles`);
    
    return validArticles;
  } catch (error) {
    console.error('Error in getAllArticles:', error);
    throw error;
  }
}

export async function getArticleBySlug(slug: string): Promise<Article | null> {
  try {
    const fullPath = path.join(articlesDirectory, `${slug}.mdx`);
    const fileContents = await fs.readFile(fullPath, 'utf8');
    
    const { data, content } = matter(fileContents);
    console.log('Parsed frontmatter data:', data);
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

export async function searchArticles(query: string): Promise<Article[]> {
  const articles = await getAllArticles();
  const searchQuery = query.toLowerCase();
  
  return articles.filter(article => 
    article.title.toLowerCase().includes(searchQuery) ||
    article.content.toLowerCase().includes(searchQuery) ||
    article.topics?.some(topic => topic.toLowerCase().includes(searchQuery))
  );
}
