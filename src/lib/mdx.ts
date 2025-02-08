import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const articlesDirectory = path.join(process.cwd(), 'content/articles');

export interface ArticleMetadata {
  title: string;
  type?: string;
  level?: string;
  topics?: string[];
  mainImage?: string;
  slug: string;
}

export interface Article extends ArticleMetadata {
  content: string;
}

export function getAllArticles(): Article[] {
  // Get file names under /articles
  const fileNames = fs.readdirSync(articlesDirectory);
  const allArticlesData = fileNames.map((fileName) => {
    // Remove ".mdx" from file name to get slug
    const slug = fileName.replace(/\.mdx$/, '');

    // Read markdown file as string
    const fullPath = path.join(articlesDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // Use gray-matter to parse the post metadata section
    const { data, content } = matter(fileContents);

    // Combine the data with the slug
    return {
      slug,
      content,
      title: data.title,
      type: data.type || 'article',
      level: data.level || 'beginner',
      topics: data.topics || [],
      mainImage: data.mainImage || null,
    };
  });

  // Sort articles by date
  return allArticlesData;
}

export function getArticleBySlug(slug: string): Article | null {
  try {
    const fullPath = path.join(articlesDirectory, `${slug}.mdx`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // Use gray-matter to parse the article metadata section
    const { data, content } = matter(fileContents);

    return {
      slug,
      content,
      title: data.title,
      type: data.type || 'article',
      level: data.level || 'beginner',
      topics: data.topics || [],
      mainImage: data.mainImage || null,
    };
  } catch (error) {
    console.error(`Error loading article ${slug}:`, error);
    return null;
  }
}
