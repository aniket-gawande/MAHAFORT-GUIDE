import React, { useState, useRef, useEffect, useCallback } from 'react';
import { FaTimes, FaPaperPlane, FaFortAwesome } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

// ──────────────────────────────────────────────────────────────────────────
// 🏰  बहिर्जी नाईक — The Fort Knowledge Chatbot (Gemini AI Powered)
//     Named after Bahirji Naik, Chhatrapati Shivaji Maharaj's legendary spy
// ──────────────────────────────────────────────────────────────────────────

// ─── Quick Reply Suggestions ──────────────────────────────────────────────
const quickReplies = [
  '🏰 Tell me about a fort',
  '🥾 Trekking tips for beginners',
  '⛰️ Best forts near Pune',
  '🌧️ Monsoon trekking safety',
  '📋 What to carry on a trek',
  '🗺️ Plan my trip',
];

// ──────────────────────────────────────────────────────────────────────────
// 🧩  Chatbot Component
// ──────────────────────────────────────────────────────────────────────────



const BahirjiChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: 'bot',
      text: '🙏 **जय शिवराय!** I am **बहिर्जी नाईक**, your guide to Maharashtra\'s glorious forts.\n\nAsk me about any fort, trekking tips, safety, or trip planning — I\'m at your service, warrior! ⚔️',
      quickReplies: quickReplies.slice(0, 4),
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [unreadCount, setUnreadCount] = useState(1);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);
  const navigate = useNavigate();

  // Auto-scroll to latest message
  const scrollToBottom = useCallback(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping, scrollToBottom]);

  // Focus input when chat opens
  useEffect(() => {
    if (isOpen) {
      setUnreadCount(0);
      setTimeout(() => inputRef.current?.focus(), 300);
    }
  }, [isOpen]);

  const handleSendMessage = async (text) => {
    const messageText = text || inputValue.trim();
    if (!messageText) return;

    // Add user message immediately
    const userMsg = {
      id: Date.now(),
      type: 'user',
      text: messageText,
      timestamp: new Date(),
    };
    
    // We create a new array holding the current conversation plus the new user message
    const updatedMessages = [...messages, userMsg];
    setMessages(updatedMessages);
    setInputValue('');

    setIsTyping(true);

    try {
      // Call backend API with the conversation history
      const res = await axios.post('http://localhost:5000/api/chat', { messages: updatedMessages });
      
      const botMsg = {
        id: Date.now() + 1,
        type: 'bot',
        text: res.data.text || 'I encountered a disruption in the spy network!',
        quickReplies: res.data.quickReplies || [],
        timestamp: new Date(),
      };
      
      setMessages((prev) => [...prev, botMsg]);
    } catch (error) {
      console.error('Chat API Error:', error);
      const errorMsg = {
        id: Date.now() + 1,
        type: 'bot',
        text: '⚠️ Appears the courier pigeons were intercepted! I cannot connect to my intelligence network right now.',
        quickReplies: ['Retry'],
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, errorMsg]);
    } finally {
      setIsTyping(false);
      if (!isOpen) {
        setUnreadCount((prev) => prev + 1);
      }
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const handleQuickReply = (reply) => {
    handleSendMessage(reply);
  };

  const handleNavLink = (path) => {
    navigate(path);
    setIsOpen(false);
  };

  const formatText = (text) => {
    // Bold
    let formatted = text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
    // Italic
    formatted = formatted.replace(/\*(.*?)\*/g, '<em>$1</em>');
    // Line breaks
    formatted = formatted.replace(/\n/g, '<br/>');
    return formatted;
  };

  const formatTime = (date) => {
    return date.toLocaleTimeString('en-IN', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: true,
    });
  };

  return (
    <>
      {/* ─── Chat Window ─── */}
      <div
        id="bahirji-chatbot-window"
        style={{
          position: 'fixed',
          bottom: '100px',
          right: '24px',
          width: '400px',
          maxWidth: 'calc(100vw - 32px)',
          height: '600px',
          maxHeight: 'calc(100vh - 140px)',
          zIndex: 9999,
          display: isOpen ? 'flex' : 'none',
          flexDirection: 'column',
          borderRadius: '24px',
          overflow: 'hidden',
          border: '1px solid rgba(255, 153, 51, 0.2)',
          boxShadow: '0 25px 80px rgba(0, 0, 0, 0.6), 0 0 40px rgba(255, 153, 51, 0.1)',
          background: 'linear-gradient(145deg, #0a0a0a 0%, #121212 50%, #0a0a0a 100%)',
          animation: isOpen ? 'chatSlideUp 0.4s cubic-bezier(0.16, 1, 0.3, 1)' : 'none',
        }}
      >
        {/* ─── Header ─── */}
        <div
          style={{
            background: 'linear-gradient(135deg, #1a1100 0%, #2a1800 50%, #1a1100 100%)',
            borderBottom: '1px solid rgba(255, 153, 51, 0.2)',
            padding: '16px 20px',
            display: 'flex',
            alignItems: 'center',
            gap: '14px',
            flexShrink: 0,
          }}
        >
          {/* Avatar */}
          <div
            style={{
              width: '46px',
              height: '46px',
              borderRadius: '14px',
              background: 'linear-gradient(135deg, #FF9933 0%, #cc7a29 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '22px',
              boxShadow: '0 0 20px rgba(255, 153, 51, 0.4)',
              flexShrink: 0,
            }}
          >
            ⚔️
          </div>
          <div style={{ flex: 1 }}>
            <h3
              style={{
                margin: 0,
                color: '#FF9933',
                fontSize: '16px',
                fontFamily: '"Cinzel", serif',
                fontWeight: 700,
                letterSpacing: '0.05em',
              }}
            >
              बहिर्जी नाईक
            </h3>
            <p
              style={{
                margin: '2px 0 0',
                color: '#888',
                fontSize: '11px',
                fontFamily: '"Montserrat", sans-serif',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
              }}
            >
              <span
                style={{
                  display: 'inline-block',
                  width: '7px',
                  height: '7px',
                  borderRadius: '50%',
                  background: '#22c55e',
                  marginRight: '6px',
                  boxShadow: '0 0 6px #22c55e',
                }}
              ></span>
              Fort Intelligence Active
            </p>
          </div>
          {/* Close */}
          <button
            onClick={() => setIsOpen(false)}
            style={{
              background: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: '10px',
              width: '36px',
              height: '36px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              color: '#999',
              transition: 'all 0.2s',
            }}
            onMouseEnter={(e) => {
              e.target.style.background = 'rgba(255, 153, 51, 0.15)';
              e.target.style.color = '#FF9933';
              e.target.style.borderColor = 'rgba(255, 153, 51, 0.3)';
            }}
            onMouseLeave={(e) => {
              e.target.style.background = 'rgba(255, 255, 255, 0.05)';
              e.target.style.color = '#999';
              e.target.style.borderColor = 'rgba(255, 255, 255, 0.1)';
            }}
            aria-label="Close chat"
          >
            <FaTimes size={14} />
          </button>
        </div>

        {/* ─── Messages Area ─── */}
        <div
          style={{
            flex: 1,
            overflowY: 'auto',
            padding: '16px',
            display: 'flex',
            flexDirection: 'column',
            gap: '14px',
            scrollbarWidth: 'thin',
            scrollbarColor: '#333 transparent',
          }}
        >
          {messages.map((msg) => (
            <div
              key={msg.id}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: msg.type === 'user' ? 'flex-end' : 'flex-start',
                animation: 'msgFadeIn 0.3s ease-out',
              }}
            >
              {/* Message Bubble */}
              <div
                style={{
                  maxWidth: '85%',
                  padding: '12px 16px',
                  borderRadius:
                    msg.type === 'user' ? '18px 18px 4px 18px' : '18px 18px 18px 4px',
                  background:
                    msg.type === 'user'
                      ? 'linear-gradient(135deg, #FF9933 0%, #cc7a29 100%)'
                      : 'rgba(255, 255, 255, 0.05)',
                  border:
                    msg.type === 'user'
                      ? 'none'
                      : '1px solid rgba(255, 255, 255, 0.08)',
                  color: msg.type === 'user' ? '#000' : '#e5e5e5',
                  fontSize: '13px',
                  lineHeight: '1.6',
                  fontFamily: '"Montserrat", sans-serif',
                  boxShadow:
                    msg.type === 'user'
                      ? '0 4px 15px rgba(255, 153, 51, 0.3)'
                      : '0 2px 8px rgba(0, 0, 0, 0.2)',
                }}
                dangerouslySetInnerHTML={{ __html: formatText(msg.text) }}
              />

              {/* Timestamp */}
              <span
                style={{
                  fontSize: '10px',
                  color: '#555',
                  marginTop: '4px',
                  padding: '0 4px',
                }}
              >
                {formatTime(msg.timestamp)}
              </span>

              {/* Quick Replies */}
              {msg.type === 'bot' && msg.quickReplies && msg.quickReplies.length > 0 && (
                <div
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '6px',
                    marginTop: '8px',
                    maxWidth: '90%',
                  }}
                >
                  {msg.quickReplies.map((reply, i) => (
                    <button
                      key={i}
                      onClick={() => handleQuickReply(reply)}
                      style={{
                        padding: '6px 12px',
                        borderRadius: '20px',
                        border: '1px solid rgba(255, 153, 51, 0.25)',
                        background: 'rgba(255, 153, 51, 0.08)',
                        color: '#FF9933',
                        fontSize: '11px',
                        fontFamily: '"Montserrat", sans-serif',
                        fontWeight: 600,
                        cursor: 'pointer',
                        transition: 'all 0.2s',
                        whiteSpace: 'nowrap',
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.background = 'rgba(255, 153, 51, 0.2)';
                        e.target.style.borderColor = '#FF9933';
                        e.target.style.transform = 'translateY(-1px)';
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.background = 'rgba(255, 153, 51, 0.08)';
                        e.target.style.borderColor = 'rgba(255, 153, 51, 0.25)';
                        e.target.style.transform = 'translateY(0)';
                      }}
                    >
                      {reply}
                    </button>
                  ))}
                </div>
              )}

              {/* Navigation Link */}
              {msg.type === 'bot' && msg.hasLink && (
                <button
                  onClick={() => handleNavLink(msg.linkPath)}
                  style={{
                    marginTop: '8px',
                    padding: '8px 16px',
                    borderRadius: '12px',
                    border: '1px solid rgba(255, 153, 51, 0.4)',
                    background: 'linear-gradient(135deg, rgba(255, 153, 51, 0.15), rgba(255, 153, 51, 0.05))',
                    color: '#FF9933',
                    fontSize: '12px',
                    fontFamily: '"Montserrat", sans-serif',
                    fontWeight: 700,
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    transition: 'all 0.2s',
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.background = 'rgba(255, 153, 51, 0.25)';
                    e.target.style.transform = 'translateY(-1px)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.background = 'linear-gradient(135deg, rgba(255, 153, 51, 0.15), rgba(255, 153, 51, 0.05))';
                    e.target.style.transform = 'translateY(0)';
                  }}
                >
                  🗺️ {msg.linkText}
                </button>
              )}
            </div>
          ))}

          {/* Typing Indicator */}
          {isTyping && (
            <div
              style={{
                display: 'flex',
                alignItems: 'flex-start',
                animation: 'msgFadeIn 0.3s ease-out',
              }}
            >
              <div
                style={{
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  borderRadius: '18px 18px 18px 4px',
                  padding: '14px 20px',
                  display: 'flex',
                  gap: '5px',
                  alignItems: 'center',
                }}
              >
                {[0, 1, 2].map((i) => (
                  <span
                    key={i}
                    style={{
                      width: '7px',
                      height: '7px',
                      borderRadius: '50%',
                      background: '#FF9933',
                      animation: `typingBounce 1.4s infinite ease-in-out`,
                      animationDelay: `${i * 0.2}s`,
                      opacity: 0.6,
                    }}
                  />
                ))}
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* ─── Input Area ─── */}
        <div
          style={{
            borderTop: '1px solid rgba(255, 255, 255, 0.06)',
            padding: '14px 16px',
            background: 'rgba(0, 0, 0, 0.4)',
            flexShrink: 0,
          }}
        >
          <div
            style={{
              display: 'flex',
              gap: '10px',
              alignItems: 'center',
              background: 'rgba(255, 255, 255, 0.04)',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              borderRadius: '16px',
              padding: '4px 6px 4px 16px',
              transition: 'border-color 0.2s',
            }}
          >
            <input
              ref={inputRef}
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Ask about any fort..."
              style={{
                flex: 1,
                border: 'none',
                outline: 'none',
                background: 'transparent',
                color: '#e5e5e5',
                fontSize: '13px',
                fontFamily: '"Montserrat", sans-serif',
                padding: '10px 0',
              }}
            />
            <button
              onClick={() => handleSendMessage()}
              disabled={!inputValue.trim()}
              style={{
                width: '40px',
                height: '40px',
                borderRadius: '12px',
                border: 'none',
                background: inputValue.trim()
                  ? 'linear-gradient(135deg, #FF9933 0%, #cc7a29 100%)'
                  : 'rgba(255, 255, 255, 0.05)',
                color: inputValue.trim() ? '#000' : '#555',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: inputValue.trim() ? 'pointer' : 'default',
                transition: 'all 0.2s',
                flexShrink: 0,
                boxShadow: inputValue.trim()
                  ? '0 4px 15px rgba(255, 153, 51, 0.3)'
                  : 'none',
              }}
              aria-label="Send message"
            >
              <FaPaperPlane size={14} />
            </button>
          </div>
          <p
            style={{
              margin: '8px 0 0',
              textAlign: 'center',
              fontSize: '9px',
              color: '#444',
              fontFamily: '"Montserrat", sans-serif',
              letterSpacing: '0.05em',
            }}
          >
            Powered by MahaFort Guide • बहिर्जी नाईक AI
          </p>
        </div>
      </div>

      {/* ─── Floating Action Button ─── */}
      <button
        id="bahirji-chatbot-fab"
        onClick={() => setIsOpen(!isOpen)}
        style={{
          position: 'fixed',
          bottom: '28px',
          right: '28px',
          width: '64px',
          height: '64px',
          borderRadius: '20px',
          border: '2px solid rgba(255, 153, 51, 0.4)',
          background: isOpen
            ? 'linear-gradient(135deg, #1a1100 0%, #2a1800 100%)'
            : 'linear-gradient(135deg, #FF9933 0%, #cc7a29 100%)',
          color: isOpen ? '#FF9933' : '#000',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          zIndex: 10000,
          boxShadow: isOpen
            ? '0 8px 30px rgba(0, 0, 0, 0.4), 0 0 20px rgba(255, 153, 51, 0.2)'
            : '0 8px 30px rgba(255, 153, 51, 0.4), 0 0 40px rgba(255, 153, 51, 0.15)',
          transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
          transform: isOpen ? 'rotate(0deg)' : 'rotate(0deg)',
          animation: !isOpen ? 'fabPulse 3s ease-in-out infinite' : 'none',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'scale(1.08)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'scale(1)';
        }}
        aria-label="Open Bahirji Chatbot"
      >
        {isOpen ? (
          <FaTimes size={22} />
        ) : (
          <FaFortAwesome size={26} />
        )}

        {/* Unread Badge */}
        {!isOpen && unreadCount > 0 && (
          <span
            style={{
              position: 'absolute',
              top: '-4px',
              right: '-4px',
              width: '22px',
              height: '22px',
              borderRadius: '50%',
              background: '#ef4444',
              color: '#fff',
              fontSize: '11px',
              fontWeight: 800,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              border: '2px solid #050505',
              boxShadow: '0 0 10px rgba(239, 68, 68, 0.5)',
              animation: 'badgePop 0.3s ease-out',
            }}
          >
            {unreadCount}
          </span>
        )}
      </button>

      {/* ─── Global Animations ─── */}
      <style>{`
        @keyframes chatSlideUp {
          from {
            opacity: 0;
            transform: translateY(20px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        @keyframes msgFadeIn {
          from {
            opacity: 0;
            transform: translateY(8px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes typingBounce {
          0%, 80%, 100% {
            transform: translateY(0);
          }
          40% {
            transform: translateY(-8px);
          }
        }
        @keyframes fabPulse {
          0%, 100% {
            box-shadow: 0 8px 30px rgba(255, 153, 51, 0.4), 0 0 40px rgba(255, 153, 51, 0.15);
          }
          50% {
            box-shadow: 0 8px 30px rgba(255, 153, 51, 0.6), 0 0 60px rgba(255, 153, 51, 0.25);
          }
        }
        @keyframes badgePop {
          from {
            transform: scale(0);
          }
          to {
            transform: scale(1);
          }
        }
        
        #bahirji-chatbot-window::-webkit-scrollbar {
          width: 4px;
        }
        #bahirji-chatbot-window::-webkit-scrollbar-track {
          background: transparent;
        }
        #bahirji-chatbot-window::-webkit-scrollbar-thumb {
          background: #333;
          border-radius: 2px;
        }
        #bahirji-chatbot-window *::-webkit-scrollbar {
          width: 4px;
        }
        #bahirji-chatbot-window *::-webkit-scrollbar-track {
          background: transparent;
        }
        #bahirji-chatbot-window *::-webkit-scrollbar-thumb {
          background: #333;
          border-radius: 2px;
        }

        @media (max-width: 480px) {
          #bahirji-chatbot-window {
            bottom: 0 !important;
            right: 0 !important;
            width: 100vw !important;
            max-width: 100vw !important;
            height: 100vh !important;
            max-height: 100vh !important;
            border-radius: 0 !important;
          }
          #bahirji-chatbot-fab {
            bottom: 16px !important;
            right: 16px !important;
            width: 56px !important;
            height: 56px !important;
          }
        }
      `}</style>
    </>
  );
};

export default BahirjiChatbot;
