import { NextResponse } from 'next/server';
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY || 'dummy-key-for-build',
});

export async function POST(req: Request) {
  if (!process.env.OPENAI_API_KEY) {
    console.error('OpenAI API key not configured');
    return NextResponse.json(
      { error: 'OpenAI API key not configured' }, 
      { status: 500 }
    );
  }

  try {
    const { messages } = await req.json();
    console.log('Received messages:', messages);
    
    const completion = await openai.chat.completions.create({
      model: "gpt-4",
      messages: [
        {
          role: "system",
          content: `You are a Syrian Arabic language tutor. Respond to the user's message in Syrian Arabic dialect, 
          followed by an English translation. Keep responses natural, friendly, and educational. Focus on common 
          phrases and expressions used in everyday situations. Always use Arabic script for Arabic text.
          Format your response exactly like this:
          [Arabic text here]
          [English translation here]`
        },
        ...messages
      ],
      temperature: 0.7,
      max_tokens: 200,
    });

    console.log('OpenAI response:', completion.choices[0].message);
    return NextResponse.json(completion.choices[0].message);
  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json({ error: 'Failed to generate response' }, { status: 500 });
  }
} 