import React, { useState, useEffect, useRef } from 'react';
import styles from './ChatOverlay.module.css';

export default function ChatOverlay({ apiKey, onClose }) {
  const userImg = 'Images/Avatars.png';
  const assistantImg = 'Images/AlexDoe.png';

  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const chatBodyRef = useRef(null);

  // Auto-scroll when messages update
  useEffect(() => {
    if (chatBodyRef.current) {
      chatBodyRef.current.scrollTop = chatBodyRef.current.scrollHeight;
    }
  }, [messages]);

  async function handleSend() {
    const userText = input.trim();
    if (!userText) return;

    // Add user's message to state
    setMessages((prev) => [...prev, { role: 'user', text: userText }]);
    setInput('');

    // Query the assistant
    try {
      const assistantReply = await getOpenAIResponse(userText);
      setMessages((prev) => [
        ...prev,
        { role: 'assistant', text: assistantReply },
      ]);
    } catch (error) {
      console.error(error);
      setMessages((prev) => [
        ...prev,
        { role: 'assistant', text: 'Sorry, an error occurred.' },
      ]);
    }
  }

  async function getOpenAIResponse(userMessage) {
    const url = 'https://api.openai.com/v1/chat/completions';
    const payload = {
      model: 'gpt-4.1',
      messages: [
        { role: 'system', content: 'You are a helpful assistant.' },
        { role: 'user', content: userMessage },
      ],
      max_tokens: 1000,
      temperature: 0.7,
    };

    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${'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'}`,
    },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      throw new Error(`OpenAI API error: ${response.status}`);
    }

    const data = await response.json();
    return data.choices[0].message.content.trim();
  }

  // Handle ENTER key press
  function handleKeyPress(event) {
    if (event.key === 'Enter') {
      event.preventDefault();
      handleSend();
    }
  }

  return (
    <div className={styles.overlayBackground}>
      <div className={styles.chatCard}>
        <div className={styles.chatHeader}>
          <div className={styles.headerTitleGroup}>

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
