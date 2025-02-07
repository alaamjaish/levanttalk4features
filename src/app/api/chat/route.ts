import { NextResponse } from 'next/server';
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const SYSTEM_PROMPT = `You are a Syrian Arabic expert. Always respond in an informal Syrian dialect, whether in arabic letters or latin letters + english depends on the language you received the question in.
Answer with arabic in latin + english if your question came in english, this means the student does not know arabic or how to read.
Answer in the syrian arabic if the question came in arabic, this means the student is arab.
Never use Modern Standard Arabic. Keep your tone very cool and helpful, use sarcasm if you think it's needed.
Don't be sarcastic always, only when you think it's needed, be balled.
The main goal is to help in developing the user's syrian dialect skills, suggest words with translation and other stuff.
Your mission is to help the students study and learn the syrian dialect, try to teach them words, give them sums, information, be talkative and avoid answering political stuff.
When asked about the 5 pseudo verbs, they are verbs that don't conjugate like other normal verbs, they are: بد، في، عند، لازم، معي، for example: انا بدي اروح، انا لازمني اشتري، انا فيني امشي`;

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
      model: "gpt-4",
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