import React from 'react';
import styles from './PersonaCard.module.css';
import ChatNowButton from './components/ChatNowButton';

export default function PersonaCard({
  name = "Alex Doe",
  description = "Meet our expert in Python coding, libraries, and projects",
  image = "AlexDoe.png",
  onChatClick,
  gradientStart = "#9010FF",
  gradientEnd = "#C989FF",
  chatButtonColor,
  style = {},                // added style prop for custom width, etc.
}) {
  // Create a style object for the dynamic gradient background
  const cardStyle = {
    background: `linear-gradient(to right, ${gradientStart}, ${gradientEnd})`
  };

  return (
    <div
      className={styles.card}
      style={{
        ...cardStyle,
        ...style
      }}
    >
      <div className={styles.info}>
        <h2 className={styles.name}>{name}</h2>
        <p className={styles.description}>{description}</p>
        <ChatNowButton
          label="Chat Now"
          onClick={onChatClick}
          buttonColor={chatButtonColor}
        />
      </div>
      <div className={styles.imageContainer}>
        <img
          src={image}
          alt={`Profile of ${name}`}
          className={styles.profileImage}
        />
      </div>
    </div>
  );
}
