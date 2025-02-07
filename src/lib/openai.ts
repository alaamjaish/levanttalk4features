export interface ChatMessage {
  role: "user" | "assistant" | "system";
  content: string;
}

let lastCallTime = 0;
const MIN_CALL_INTERVAL = 1000; // 1 second

export const generateChatResponse = async (messages: ChatMessage[]): Promise<ChatMessage> => {
  const now = Date.now();
  if (now - lastCallTime < MIN_CALL_INTERVAL) {
    await new Promise(resolve => setTimeout(resolve, MIN_CALL_INTERVAL - (now - lastCallTime)));
  }
  lastCallTime = Date.now();
  
  try {
    const response = await fetch('/api/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ messages }),
    });

    if (!response.ok) {
      throw new Error('Failed to generate response');
    }

    const data = await response.json();
    
    // Return the entire message instead of trying to split it
    return data;

  } catch (error) {
    console.error('Error generating chat response:', error);
    throw error;
  }
};
