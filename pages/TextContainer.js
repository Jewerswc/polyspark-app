// ChatContainer.jsx
import React from 'react';
import Name from './Name';
import Description from './description';
import styles from './TextContainer.module.css';

export default function ChatContainer({ label, onClick, onChatClick, buttonColor }) {
  return (
    <div className={styles.chatContainer}>
      <Name
        label={label}
        onClick={onClick}
        onChatClick={onChatClick}
        buttonColor={buttonColor}
      />
      <Description
        label={label}
        onClick={onClick}
        onChatClick={onChatClick}
        buttonColor={buttonColor}
      />
    </div>
  );
}
