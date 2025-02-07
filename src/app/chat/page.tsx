'use client';

import { useState, useRef, useEffect } from 'react';
import Navbar from '@/components/layout/Navbar';
import ChatMessage from '@/components/chat/ChatMessage';
import ChatInput from '@/components/chat/ChatInput';
import { generateChatResponse, ChatMessage as OpenAIApiMessage } from '@/lib/openai';

export default function ChatPage() {
  const [messages, setMessages] = useState<OpenAIApiMessage[]>([
    {
      role: 'assistant',
      content: "مرحبا! أنا مساعدك في تعلم اللغة العربية. كيف يمكنني مساعدتك اليوم؟\nHello! I'm your Arabic learning assistant. How can I help you today?"
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    const savedMessages = localStorage.getItem('chatMessages');
    if (savedMessages) {
      setMessages(JSON.parse(savedMessages));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('chatMessages', JSON.stringify(messages));
  }, [messages]);

  const handleSubmit = async (message: string) => {
    try {
      setIsLoading(true);
      // Add user message
      const userMessage: OpenAIApiMessage = {
        role: 'user',
        content: message
      };
      setMessages(prev => [...prev, userMessage]);

      // Get AI response
      const response = await generateChatResponse([...messages, userMessage]);
      
      // Add AI response
      const aiMessage: OpenAIApiMessage = {
        role: 'assistant',
        content: `${response.arabicText}\n${response.translation}`
      };
      setMessages(prev => [...prev, aiMessage]);
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Navbar />
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg h-[70vh] flex flex-col">
          <div className="flex-1 overflow-y-auto p-4">
            {messages.map((message, index) => (
              <ChatMessage
                key={index}
                role={message.role}
                content={message.content}
              />
            ))}
            <div ref={messagesEndRef} />
          </div>

          <ChatInput 
            onSendMessage={handleSubmit}
            isLoading={isLoading}
            input={input}
            setInput={setInput}
          />
        </div>
      </div>
    </main>
  );
}
