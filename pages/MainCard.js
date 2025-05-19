// ChatContainer.jsx
import React from 'react';
import MainContainer from './MainContainer';
import styles from './MainCard.module.css';

export default function ChatContainer({
  label,
  onClick,
  onChatClick,
  buttonColor,
  imgSrc,
  imgAlt
}) {
  return (
    <div className={styles.chatContainer}>
              <div className={styles.imageWrapper}>
        <img
          src="Images/profileimages/AlexDoe.png"
          alt={imgAlt}
          className={styles.image}
        />
      </div>
      <MainContainer
        label={label}
        onClick={onClick}
        onChatClick={onChatClick}
        buttonColor={buttonColor}
      />

    </div>
  );
}
