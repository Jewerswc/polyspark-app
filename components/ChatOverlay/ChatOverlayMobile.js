import React, { useState, useEffect, useRef } from 'react';
import styles from './ChatOverlayMobile.module.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

export default function ChatOverlayIPhone({ name, persona, onClose, avatarUrl }) {
  const userImg = 'Images/Avatars.png';
  const assistantImg = 'Images/profileimages/AlexDoe.png';

  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const chatBodyRef = useRef(null);

  useEffect(() => {
    if (chatBodyRef.current) {
      chatBodyRef.current.scrollTop = chatBodyRef.current.scrollHeight;
    }
  }, [messages]);

  useEffect(() => {
    if (!window.visualViewport) {
      // If the browser doesn’t support visualViewport, just fall back to safe-area.
      document.documentElement.style.setProperty(
        '--keyboard-offset',
        'env(safe-area-inset-bottom)'
      );
      return;
    }
  
    let rafId = null;
  
    function onVisualViewportResize() {
      if (rafId !== null) cancelAnimationFrame(rafId);
    
      rafId = requestAnimationFrame(() => {
        const layoutHeight = window.innerHeight;
        const visualHeight = window.visualViewport.height;
        const rawOffset = layoutHeight - visualHeight;
    
        console.log('⏱ rawOffset =', rawOffset, ' (innerHeight:', layoutHeight, ' visualHeight:', visualHeight, ')');
    
        if (rawOffset > 0) {
          document.documentElement.style.setProperty('--keyboard-offset', `${rawOffset}px`);
          console.log('→ setting --keyboard-offset =', `${rawOffset}px`);
        } else {
          document.documentElement.style.setProperty('--keyboard-offset', 'env(safe-area-inset-bottom)');
          console.log('→ setting --keyboard-offset = safe‐area‐inset');
        }
        rafId = null;
      });
    }
    
  
    // Start by running it once (in case the keyboard is already open)
    onVisualViewportResize();
  
    window.visualViewport.addEventListener('resize', onVisualViewportResize);
    return () => {
      window.visualViewport.removeEventListener('resize', onVisualViewportResize);
      if (rafId !== null) {
        cancelAnimationFrame(rafId);
      }
    };
  }, []);
  

  async function handleSend() {
    const userText = input.trim();
    if (!userText) return;

    setMessages(prev => [...prev, { role: 'user', text: userText }]);
    setInput('');

    try {
      const assistantReply = await getChatResponse(persona, userText);
      setMessages(prev => [
        ...prev,
        { role: 'assistant', text: assistantReply },
      ]);
    } catch (err) {
      console.error(err);
      setMessages(prev => [
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
            <img src="/Images/Polyspark.png" alt="Assistant avatar" />
            <h2>{name}</h2>
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
          {messages.map((msg, i) => (
            <div
              key={i}
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
                {msg.text}
              </div>
            </div>
          ))}
        </div>

        <div className={styles.inputArea}>          
          <input
            type="text"
            placeholder="Ask anything…"
            value={input}
            onChange={e => setInput(e.target.value)}
            onKeyPress={handleKeyPress}
          />
          <button
            className={styles.sendButton}
            onClick={handleSend}
            aria-label="Send message"
          >
            <svg width="28" height="28" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="icon-2xl">
              <path fillRule="evenodd" clipRule="evenodd" d="M15.1918 8.90615C15.6381 8.45983 16.3618 8.45983 16.8081 8.90615L21.9509 14.049C22.3972 14.4953 22.3972 15.2189 21.9509 15.6652C21.5046 16.1116 20.781 16.1116 20.3347 15.6652L17.1428 12.4734V22.2857C17.1428 22.9169 16.6311 23.4286 15.9999 23.4286C15.3688 23.4286 14.8571 22.9169 14.8571 22.2857V12.4734L11.6652 15.6652C11.2189 16.1116 10.4953 16.1116 10.049 15.6652C9.60265 15.2189 9.60265 14.4953 10.049 14.049L15.1918 8.90615Z" fill="currentColor"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
