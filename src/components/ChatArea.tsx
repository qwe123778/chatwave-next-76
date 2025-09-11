import { Send, Smile, Paperclip, Mic, Phone, Video, MoreVertical } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useState } from "react";

interface Message {
  id: string;
  content: string;
  timestamp: string;
  sent: boolean;
  read?: boolean;
}

const mockMessages: Message[] = [
  {
    id: "1",
    content: "Hey! How's the project going?",
    timestamp: "2:30 PM",
    sent: false,
  },
  {
    id: "2",
    content: "It's going really well! Just finished the main components. The new design system is looking amazing 🎨",
    timestamp: "2:32 PM",
    sent: true,
    read: true,
  },
  {
    id: "3",
    content: "That's awesome! Can't wait to see it. When do you think it'll be ready for review?",
    timestamp: "2:33 PM",
    sent: false,
  },
  {
    id: "4",
    content: "I think by tomorrow evening. Still need to add a few more features and polish the animations.",
    timestamp: "2:35 PM",
    sent: true,
    read: true,
  },
];

interface ChatAreaProps {
  selectedChatId?: string;
  chatName?: string;
}

export const ChatArea = ({ selectedChatId, chatName = "Sarah Wilson" }: ChatAreaProps) => {
  const [message, setMessage] = useState("");

  const handleSendMessage = () => {
    if (message.trim()) {
      // Here you would typically send the message to your backend
      console.log("Sending message:", message);
      setMessage("");
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  if (!selectedChatId) {
    return (
      <div className="flex-1 flex items-center justify-center bg-gradient-chat">
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-foreground mb-2">Welcome to ChatFlow</h2>
          <p className="text-muted-foreground">Select a conversation to start messaging</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex-1 flex flex-col bg-gradient-chat">
      {/* Chat Header */}
      <div className="p-4 border-b border-border bg-background/80 backdrop-blur-sm">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Avatar className="h-10 w-10">
              <AvatarFallback className="bg-gradient-primary text-white font-medium">
                {chatName.split(' ').map(n => n[0]).join('')}
              </AvatarFallback>
            </Avatar>
            <div>
              <h3 className="font-medium text-foreground">{chatName}</h3>
              <p className="text-sm text-chat-accent">Online</p>
            </div>
          </div>
          
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" className="h-9 w-9">
              <Phone className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon" className="h-9 w-9">
              <Video className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon" className="h-9 w-9">
              <MoreVertical className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {mockMessages.map((msg) => (
          <div
            key={msg.id}
            className={`flex ${msg.sent ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-xs lg:max-w-md px-4 py-2 rounded-2xl transition-all hover:shadow-message ${
                msg.sent
                  ? 'bg-message-sent text-message-sent-foreground rounded-br-md'
                  : 'bg-message-received text-message-received-foreground rounded-bl-md shadow-sm'
              }`}
            >
              <p className="text-sm">{msg.content}</p>
              <div className={`flex items-center gap-1 mt-1 ${
                msg.sent ? 'justify-end' : 'justify-start'
              }`}>
                <span className={`text-xs ${
                  msg.sent ? 'text-message-sent-foreground/70' : 'text-muted-foreground'
                }`}>
                  {msg.timestamp}
                </span>
                {msg.sent && (
                  <div className="text-xs text-message-sent-foreground/70">
                    {msg.read ? '✓✓' : '✓'}
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
        
        {/* Typing Indicator */}
        <div className="flex justify-start">
          <div className="bg-message-received px-4 py-2 rounded-2xl rounded-bl-md shadow-sm">
            <div className="flex space-x-1">
              <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce"></div>
              <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
              <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
            </div>
          </div>
        </div>
      </div>

      {/* Message Input */}
      <div className="p-4 border-t border-border bg-background/80 backdrop-blur-sm">
        <div className="flex items-end gap-2">
          <Button variant="ghost" size="icon" className="h-9 w-9 shrink-0">
            <Paperclip className="h-4 w-4" />
          </Button>
          
          <div className="flex-1 relative">
            <Input
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Type a message..."
              className="pr-10 bg-chat-secondary border-0 focus-visible:ring-1 focus-visible:ring-chat-primary"
            />
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-1 top-1/2 transform -translate-y-1/2 h-7 w-7"
            >
              <Smile className="h-4 w-4" />
            </Button>
          </div>
          
          {message.trim() ? (
            <Button
              onClick={handleSendMessage}
              className="h-9 w-9 bg-gradient-primary hover:shadow-float transition-all duration-300"
              size="icon"
            >
              <Send className="h-4 w-4" />
            </Button>
          ) : (
            <Button variant="ghost" size="icon" className="h-9 w-9 shrink-0">
              <Mic className="h-4 w-4" />
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};