import { conversations } from '@/data/conversations';
import type { Conversation, Message } from '@/types/marketplace';

export const messageService = {
  getConversations: async (): Promise<Conversation[]> => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('craftgrid_conversations');
      if (stored) {
        try {
          return JSON.parse(stored);
        } catch {
          // fallback
        }
      }
    }
    return [...conversations];
  },

  sendMessage: async (conversationId: string, text: string, senderId = 'usr_client_01'): Promise<Message> => {
    const newMessage: Message = {
      id: `msg_${Date.now()}`,
      senderId,
      senderName: senderId === 'usr_client_01' ? 'Olivia Vance' : 'Maya Bennett',
      senderAvatar: senderId === 'usr_client_01'
        ? 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80'
        : 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80',
      text,
      timestamp: 'Just now'
    };

    if (typeof window !== 'undefined') {
      const convos = await messageService.getConversations();
      const target = convos.find(c => c.id === conversationId);
      if (target) {
        target.messages.push(newMessage);
        target.lastMessage = {
          text,
          timestamp: 'Just now',
          unread: false
        };
        localStorage.setItem('craftgrid_conversations', JSON.stringify(convos));
      }
    }

    return newMessage;
  }
};
