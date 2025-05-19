// ChatContainer.jsx
import React from 'react';
import TextContainer from './TextContainer';
import ChatNowButton from './ChatNowButton';
import styles from './MainContainer.module.css';

export default function ChatContainer({ label, onClick, onChatClick, buttonColor }) {
  return (
    <div className={styles.chatContainer}>
      <TextContainer
        label={label}
        onClick={onClick}
        onChatClick={onChatClick}
        buttonColor={buttonColor}
      />
      <ChatNowButton
        label={label}
        onClick={onClick}
        onChatClick={onChatClick}
        buttonColor={buttonColor}
      />
    </div>
  );
}
