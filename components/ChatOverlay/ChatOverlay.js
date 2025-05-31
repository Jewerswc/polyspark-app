import React, { useState, useEffect, useRef } from 'react';
import styles from './ChatOverlay.module.css';

const userImg = 'Images/Avatars.png';
const assistantImg = 'Images/profileimages/AlexDoe.png';

function renderWithBold(text) {
  const parts = text.split(/\*\*(.*?)\*\*/g);
  return parts.map((part, i) =>
    i % 2 === 1 ? <strong key={i}>{part}</strong> : part
  );
}

export default function ChatOverlay({ persona, name, onClose, avatarUrl }) {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const chatBodyRef = useRef(null);

  useEffect(() => {
    if (chatBodyRef.current) {
      chatBodyRef.current.scrollTop = chatBodyRef.current.scrollHeight;
    }
  }, [messages]);

  async function handleSend() {
    const userText = input.trim();
    if (!userText) return;
    setMessages((prev) => [...prev, { role: 'user', text: userText }]);
    setInput('');

    try {
      const assistantReply = await getChatResponse(persona, userText);
      setMessages((prev) => [
        ...prev,
        { role: 'assistant', text: assistantReply },
      ]);
    } catch (err) {
      console.error(err);
      setMessages((prev) => [
        ...prev,
        { role: 'assistant', text: 'Sorry, something went wrong.' },
      ]);
    }
  }

  async function getChatResponse(persona, userMessage) {
    const resp = await fetch('https://renewalbackend.com/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ persona, message: userMessage }),
    });
    if (!resp.ok) {
      throw new Error(`Server error: ${resp.status}`);
    }
    const { reply } = await resp.json();
    return reply;
  }

  function handleKeyPress(e) {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleSend();
    }
  }

  return (
    <div className={styles.overlayBackground}>
      <div className={styles.chatCard}>
        <div className={styles.chatHeader}>
          <div className={styles.headerTitleGroup}>
            <h1 className={styles.mainHeading}>{name}</h1>
          </div>
          <button
            className={styles.closeButton}
            onClick={onClose}
            aria-label="Close Chat"
          >
            &times;
          </button>
        </div>

        <div className={styles.chatBody} ref={chatBodyRef}>
          {messages.map((msg, idx) => (
            <div
              key={idx}
              className={`${styles.messageContainer} ${
                msg.role === 'user'
                  ? styles.userMessageContainer
                  : styles.assistantMessageContainer
              }`}
            >
              <img
                src={msg.role === 'user' ? userImg : avatarUrl} 
                alt={`${msg.role} avatar`}
                className={styles.avatar}
              />
              <div
                className={`${styles.message} ${
                  msg.role === 'user'
                    ? styles.userMessage
                    : styles.assistantMessage
                }`}
              >
                {renderWithBold(msg.text)}
              </div>
            </div>
          ))}
        </div>

        <div className={styles.inputArea}>
          <input
            type="text"
            placeholder="Ask anything..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={handleKeyPress}
          />
        </div>
      </div>
    </div>
  );
}