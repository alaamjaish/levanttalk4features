import { NextResponse } from 'next/server';
import { getAllArticles } from '@/lib/articles.server';

export async function GET() {
  try {
    const articles = await getAllArticles();
    
    if (!articles || articles.length === 0) {
      console.log('No articles found');
      return NextResponse.json({ articles: [], message: 'No articles found' });
    }

    console.log(`Returning ${articles.length} articles`);
    return NextResponse.json(articles);
  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch articles', details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
}
