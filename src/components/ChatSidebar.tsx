import { Search, Plus, MoreVertical } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface Chat {
  id: string;
  name: string;
  lastMessage: string;
  timestamp: string;
  unread: number;
  avatar?: string;
  online: boolean;
}

const mockChats: Chat[] = [
  {
    id: "1",
    name: "Sarah Wilson",
    lastMessage: "Hey! How's the project going?",
    timestamp: "2m",
    unread: 2,
    online: true,
  },
  {
    id: "2",
    name: "Team Design",
    lastMessage: "Alex: The new mockups are ready",
    timestamp: "5m",
    unread: 0,
    online: false,
  },
  {
    id: "3",
    name: "Mom",
    lastMessage: "Don't forget dinner tomorrow!",
    timestamp: "1h",
    unread: 1,
    online: true,
  },
  {
    id: "4",
    name: "John Doe",
    lastMessage: "Thanks for the help earlier",
    timestamp: "3h",
    unread: 0,
    online: false,
  },
];

interface ChatSidebarProps {
  selectedChatId?: string;
  onChatSelect: (chatId: string) => void;
}

export const ChatSidebar = ({ selectedChatId, onChatSelect }: ChatSidebarProps) => {
  return (
    <div className="w-80 bg-sidebar-bg border-r border-border flex flex-col shadow-sidebar">
      {/* Header */}
      <div className="p-4 border-b border-border bg-background">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-xl font-semibold text-foreground">Messages</h1>
          <div className="flex gap-2">
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <Plus className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <MoreVertical className="h-4 w-4" />
            </Button>
          </div>
        </div>
        
        {/* Search */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search conversations..."
            className="pl-9 bg-chat-secondary border-0 focus-visible:ring-1 focus-visible:ring-chat-primary"
          />
        </div>
      </div>

      {/* Chat List */}
      <div className="flex-1 overflow-y-auto">
        {mockChats.map((chat) => (
          <div
            key={chat.id}
            onClick={() => onChatSelect(chat.id)}
            className={`p-4 border-b border-border cursor-pointer transition-colors hover:bg-sidebar-hover ${
              selectedChatId === chat.id ? 'bg-sidebar-active' : ''
            }`}
          >
            <div className="flex items-start gap-3">
              <div className="relative">
                <Avatar className="h-12 w-12">
                  <AvatarImage src={chat.avatar} />
                  <AvatarFallback className="bg-gradient-primary text-white font-medium">
                    {chat.name.split(' ').map(n => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>
                {chat.online && (
                  <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-chat-accent border-2 border-white rounded-full"></div>
                )}
              </div>
              
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <h3 className="font-medium text-foreground truncate">{chat.name}</h3>
                  <span className="text-xs text-muted-foreground">{chat.timestamp}</span>
                </div>
                <div className="flex items-center justify-between mt-1">
                  <p className="text-sm text-muted-foreground truncate">{chat.lastMessage}</p>
                  {chat.unread > 0 && (
                    <span className="bg-chat-primary text-white text-xs rounded-full px-2 py-0.5 min-w-[20px] text-center">
                      {chat.unread}
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};