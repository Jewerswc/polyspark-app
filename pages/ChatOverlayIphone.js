// ChatOverlayIPhone.jsx
import React, { useState, useEffect, useRef } from 'react';
import styles from './ChatOverlayIPhone.module.css';

export default function ChatOverlayIPhone({ apiKey, onClose }) {
  const userImg = 'Images/Avatars.png';
  const assistantImg = 'Images/AlexDoe.png';

  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const chatBodyRef = useRef(null);

  // Auto-scroll on new messages
  useEffect(() => {
    if (chatBodyRef.current) {
      chatBodyRef.current.scrollTop = chatBodyRef.current.scrollHeight;
    }
  }, [messages]);

  // Monitor visual viewport to detect keyboard height
  useEffect(() => {
    function onViewportResize() {
      const offset = window.innerHeight - window.visualViewport.height;
      const bottomValue =
        offset > 0
          ? `${offset}px`
          : 'env(safe-area-inset-bottom)';
      document.documentElement.style.setProperty(
        '--keyboard-offset',
        bottomValue
      );
    }

    window.visualViewport.addEventListener('resize', onViewportResize);
    onViewportResize();

    return () =>
      window.visualViewport.removeEventListener(
        'resize',
        onViewportResize
      );
  }, []);

  async function handleSend() {
    const userText = input.trim();
    if (!userText) return;

    setMessages(prev => [...prev, { role: 'user', text: userText }]);
    setInput('');

    try {
      const assistantReply = await getOpenAIResponse(userText);
      setMessages(prev => [
        ...prev,
        { role: 'assistant', text: assistantReply },
      ]);
    } catch (err) {
      console.error(err);
      setMessages(prev => [
        ...prev,
        { role: 'assistant', text: 'Sorry, an error occurred.' },
      ]);
    }
  }

  async function getOpenAIResponse(userMessage) {
    const response = await fetch(
      'https://api.openai.com/v1/chat/completions',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
          model: 'gpt-4.1',
          messages: [
            { role: 'system', content: 'You are a helpful assistant.' },
            { role: 'user', content: userMessage },
          ],
          max_tokens: 1000,
          temperature: 0.7,
        }),
      }
    );

    if (!response.ok)
      throw new Error(`OpenAI API error: ${response.status}`);
    const data = await response.json();
    return data.choices[0].message.content.trim();
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
            <img src={assistantImg} alt="Assistant avatar" />
            <h2>PolySpark</h2>
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
                src={msg.role === 'user' ? userImg : assistantImg}
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
        </div>
      </div>
    </div>
  );
}
