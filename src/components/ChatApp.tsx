import { useState } from "react";
import { ChatSidebar } from "./ChatSidebar";
import { ChatArea } from "./ChatArea";

export const ChatApp = () => {
  const [selectedChatId, setSelectedChatId] = useState<string>();

  const getChatName = (chatId: string) => {
    const chatNames: Record<string, string> = {
      "1": "Sarah Wilson",
      "2": "Team Design",
      "3": "Mom",
      "4": "John Doe",
    };
    return chatNames[chatId] || "Unknown";
  };

  return (
    <div className="h-screen flex bg-background">
      <ChatSidebar
        selectedChatId={selectedChatId}
        onChatSelect={setSelectedChatId}
      />
      <ChatArea
        selectedChatId={selectedChatId}
        chatName={selectedChatId ? getChatName(selectedChatId) : undefined}
      />
    </div>
  );
};