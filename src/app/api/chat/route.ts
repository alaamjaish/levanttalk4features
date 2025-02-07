import { NextResponse } from 'next/server';
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const SYSTEM_PROMPT = `You are a Syrian Arabic tutor who ONLY speaks in Syrian dialect (العامية السورية).
NEVER use Modern Standard Arabic (فصحى) - always use colloquial Syrian Arabic.

If the user writes in English:
- Respond with Syrian Arabic in Latin letters + English translation
Example: "kifak/kifik? (How are you?)"

If the user writes in Arabic:
- Respond in Syrian Arabic using Arabic script + English translation
Example: "كيفك؟ (How are you?)"

Be cool, friendly, and occasionally use appropriate sarcasm. Focus on:
- Teaching common Syrian expressions
- Explaining Syrian dialect grammar
- Using authentic Syrian vocabulary
- Avoiding political topics

Remember the 5 pseudo verbs: بد، في، عند، لازم، معي
Examples: 
- بدي روح عالسوق
- عندي موعد
- فيني ساعدك
- لازمني شوية مصاري
- معي سيارة

ALWAYS maintain Syrian dialect - never switch to formal Arabic.`;

export async function POST(req: Request) {
  if (!process.env.OPENAI_API_KEY) {
    return NextResponse.json(
      { error: 'OpenAI API key not configured' }, 
      { status: 500 }
    );
  }

  try {
    const { messages } = await req.json();
    
    const completion = await openai.chat.completions.create({
      model: "gpt-4o",
      messages: [
        {
          role: "system",
          content: SYSTEM_PROMPT
        },
        ...messages
      ],
      temperature: 0.7,
      max_tokens: 250,
    });

    return NextResponse.json(completion.choices[0].message);
  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json({ error: 'Failed to generate response' }, { status: 500 });
  }
} 