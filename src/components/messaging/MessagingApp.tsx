import React, { useState, useEffect } from 'react';
import { Search, Send, Paperclip, Smile, MoreVertical, FileText, CheckCheck, Circle, ChevronLeft } from 'lucide-react';
import type { Conversation, Message } from '@/types/marketplace';
import { messageService } from '@/lib/services/messageService';

interface MessagingAppProps {
  initialConversations: Conversation[];
  initialSelectedId?: string;
}

export default function MessagingApp({
  initialConversations,
  initialSelectedId
}: MessagingAppProps) {
  const [conversations, setConversations] = useState<Conversation[]>(initialConversations);
  const [activeId, setActiveId] = useState<string>(
    initialSelectedId || initialConversations[0]?.id || ''
  );
  const [inputText, setInputText] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [isMobileListVisible, setIsMobileListVisible] = useState(true);

  const activeConversation = conversations.find(c => c.id === activeId) || conversations[0];

  const filteredConversations = conversations.filter(c =>
    c.participant.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    c.projectContext?.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputText.trim() || !activeConversation) return;

    const messageText = inputText;
    setInputText('');

    const newMsg = await messageService.sendMessage(activeConversation.id, messageText);
    
    // Update local state
    setConversations(prev => prev.map(c => {
      if (c.id === activeConversation.id) {
        return {
          ...c,
          lastMessage: {
            text: messageText,
            timestamp: 'Just now',
            unread: false
          },
          messages: [...c.messages, newMsg]
        };
      }
      return c;
    }));

    // Simulate realistic auto-reply from builder after 2.5s
    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
      const replyMsg: Message = {
        id: `msg_rep_${Date.now()}`,
        senderId: activeConversation.participant.id,
        senderName: activeConversation.participant.name,
        senderAvatar: activeConversation.participant.avatar,
        text: 'Thanks for the update! I will review this right away and make sure the milestone deliverables reflect your feedback.',
        timestamp: 'Just now'
      };

      setConversations(prev => prev.map(c => {
        if (c.id === activeConversation.id) {
          return {
            ...c,
            lastMessage: {
              text: replyMsg.text,
              timestamp: 'Just now',
              unread: false
            },
            messages: [...c.messages, replyMsg]
          };
        }
        return c;
      }));
    }, 2500);
  };

  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden h-[750px] flex flex-col md:flex-row">
      
      {/*  */}
      <div className={`w-full md:w-80 lg:w-96 border-r border-slate-200 flex flex-col h-full bg-slate-50/50 ${!isMobileListVisible ? 'hidden md:flex' : 'flex'}`}>
        
        {/*  */}
        <div className="p-4 border-b border-slate-200 bg-white">
          <h2 className="text-base font-bold text-slate-900 mb-2.5">Direct Messages</h2>
          <div className="relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search conversations..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-1.5 text-xs bg-slate-50 border border-slate-200 rounded-lg focus:bg-white focus:outline-none focus:ring-1 focus:ring-primary"
            />
          </div>
        </div>

        {/*  */}
        <div className="flex-1 overflow-y-auto divide-y divide-slate-100">
          {filteredConversations.map(conv => {
            const isSelected = conv.id === activeId;
            return (
              <button
                key={conv.id}
                onClick={() => {
                  setActiveId(conv.id);
                  setIsMobileListVisible(false);
                }}
                className={`w-full text-left p-3.5 sm:p-4 flex items-start gap-3 transition ${
                  isSelected ? 'bg-soft-primary/40 border-l-4 border-primary' : 'hover:bg-slate-50'
                }`}
              >
                <div className="relative shrink-0">
                  <img
                    src={conv.participant.avatar}
                    alt={conv.participant.name}
                    className="w-10 h-10 rounded-full object-cover border border-slate-200"
                  />
                  {conv.participant.online && (
                    <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-500 ring-2 ring-white" />
                  )}
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-1 mb-0.5">
                    <span className="text-xs font-bold text-slate-900 truncate">
                      {conv.participant.name}
                    </span>
                    <span className="text-[10px] text-slate-400 shrink-0">
                      {conv.lastMessage.timestamp}
                    </span>
                  </div>

                  {conv.projectContext && (
                    <span className="text-[11px] text-primary font-medium block truncate">
                      {conv.projectContext.title}
                    </span>
                  )}

                  <p className="text-xs text-slate-500 truncate mt-0.5">
                    {conv.lastMessage.text}
                  </p>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/*  */}
      {activeConversation ? (
        <div className={`flex-1 flex flex-col h-full bg-white ${isMobileListVisible ? 'hidden md:flex' : 'flex'}`}>
          
          {/*  */}
          <div className="p-4 border-b border-slate-200 flex items-center justify-between bg-white z-10">
            <div className="flex items-center gap-3">
              {/*  */}
              <button
                onClick={() => setIsMobileListVisible(true)}
                className="md:hidden p-1 text-slate-500 hover:text-slate-800"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <div className="relative">
                <img
                  src={activeConversation.participant.avatar}
                  alt={activeConversation.participant.name}
                  className="w-10 h-10 rounded-full object-cover border border-slate-200"
                />
                {activeConversation.participant.online && (
                  <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-500 ring-2 ring-white" />
                )}
              </div>

              <div>
                <h3 className="text-sm font-bold text-slate-900">
                  {activeConversation.participant.name}
                </h3>
                <p className="text-xs text-slate-400">
                  {activeConversation.participant.title} · <span className="text-emerald-600 font-medium">{activeConversation.participant.lastSeen}</span>
                </p>
              </div>
            </div>

            {/*  */}
            {activeConversation.projectContext && (
              <a
                href={`/orders/${activeConversation.projectContext.id}`}
                className="hidden sm:flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-700 hover:border-primary transition"
              >
                <span>Order: {activeConversation.projectContext.title}</span>
              </a>
            )}
          </div>

          {/*  */}
          <div className="flex-1 p-4 sm:p-6 overflow-y-auto space-y-4 bg-slate-50/30">
            {activeConversation.messages.map(msg => {
              const isMe = msg.senderId === 'usr_client_01';
              return (
                <div
                  key={msg.id}
                  className={`flex gap-3 max-w-[80%] ${isMe ? 'ml-auto flex-row-reverse' : 'mr-auto'}`}
                >
                  <img
                    src={msg.senderAvatar}
                    alt={msg.senderName}
                    className="w-7 h-7 rounded-full object-cover shrink-0 mt-1"
                  />
                  <div className="space-y-1">
                    <div
                      className={`p-3.5 rounded-2xl text-xs sm:text-sm leading-relaxed ${
                        isMe
                          ? 'bg-primary text-white rounded-tr-xs shadow-xs'
                          : 'bg-white border border-slate-200 text-slate-800 rounded-tl-xs shadow-xs'
                      }`}
                    >
                      <p>{msg.text}</p>

                      {/* Attachments preview if present */}
                      {msg.attachments && msg.attachments.length > 0 && (
                        <div className="mt-2.5 pt-2 border-t border-white/20 space-y-1">
                          {msg.attachments.map((att, i) => (
                            <div key={i} className="flex items-center gap-2 p-1.5 rounded bg-black/10 text-xs">
                              <FileText className="w-3.5 h-3.5" />
                              <span className="truncate">{att.name}</span>
                              <span className="text-[10px] opacity-75">({att.size})</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                    <span className={`text-[10px] text-slate-400 block ${isMe ? 'text-right' : 'text-left'}`}>
                      {msg.timestamp}
                    </span>
                  </div>
                </div>
              );
            })}

            {isTyping && (
              <div className="flex items-center gap-2 text-xs text-slate-400 italic">
                <span className="w-2 h-2 rounded-full bg-slate-400 animate-bounce" />
                <span>{activeConversation.participant.name} is typing...</span>
              </div>
            )}
          </div>

          {/*  */}
          <form onSubmit={handleSend} className="p-3 sm:p-4 border-t border-slate-200 bg-white">
            <div className="flex items-center gap-2">
              <button
                type="button"
                className="p-2 text-slate-400 hover:text-slate-600 rounded-lg transition"
                title="Attach file"
              >
                <Paperclip className="w-4 h-4" />
              </button>
              <input
                type="text"
                placeholder={`Message ${activeConversation.participant.name}...`}
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                className="flex-1 py-2 px-3 text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:ring-1 focus:ring-primary"
              />
              <button
                type="submit"
                disabled={!inputText.trim()}
                className="p-2.5 bg-primary hover:bg-primary-hover disabled:opacity-40 text-white rounded-xl shadow-xs transition"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </form>

        </div>
      ) : (
        <div className="flex-1 flex items-center justify-center text-xs text-slate-400">
          Select a conversation to begin messaging
        </div>
      )}

    </div>
  );
}
