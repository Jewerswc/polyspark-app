import React from 'react';
import styles from './description.module.css';

export default function ChatNowButton({ label, onClick, onChatClick, buttonColor }) {
  return (
    <div 
      className={styles.chatnowButton} 
      onClick={onClick}
    >
     I’m a YC-obsessed startup expert specializing in software and hard-tech ventures, from machine-vision robotics to edge-AI.
    </div>
  );
}
