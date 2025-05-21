// Name.js
import React from 'react';
import Status from './Status'
import ChatButton from './ChatButton'
import styles from './BottomContainer.module.css';

export default function Name({ imageUrl, alt = 'Avatar' }) {
  return (
    <div className={styles.container}>
        <Status />
        <ChatButton />

      </div>
   
  );
}
