interface ChatMessageProps {
  role: 'user' | 'assistant' | 'system';
  content: string;
  translation?: string;
}

const ChatMessage = ({ role, content, translation }: ChatMessageProps) => {
  const isUser = role === 'user';
  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'} mb-4`}>
      <div
        className={`max-w-[70%] rounded-lg p-4 ${
          isUser
            ? 'bg-indigo-600 text-white dark:bg-indigo-500 rounded-br-none'
            : 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-white rounded-bl-none'
        }`}
      >
        <p className="text-lg">{content}</p>
        {translation && (
          <p className="mt-2 text-sm opacity-80 border-t pt-2 dark:border-gray-600">
            {translation}
          </p>
        )}
      </div>
    </div>
  );
};

export default ChatMessage;
