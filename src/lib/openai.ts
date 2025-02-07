export interface ChatMessage {
  role: "user" | "assistant" | "system";
  content: string;
}

let lastCallTime = 0;
const MIN_CALL_INTERVAL = 1000; // 1 second

export const generateChatResponse = async (messages: ChatMessage[]): Promise<{ arabicText: string; translation: string }> => {
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
      const errorData = await response.json();
      console.error('API Error:', errorData);
      throw new Error('Failed to generate response');
    }

    const data = await response.json();
    console.log('API Response:', data); // Add this for debugging

    const responseContent = data.content;
    const [arabicText, translation] = responseContent.split('\n').filter((line: string) => line.trim());

    return {
      arabicText: arabicText || 'عذراً، حدث خطأ',
      translation: translation || 'Sorry, an error occurred'
    };
  } catch (error) {
    console.error('Error generating chat response:', error);
    throw error;
  }
};
