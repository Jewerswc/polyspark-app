// Name.js
import React from 'react';
import Status from './Status'
import ChatButton from './ChatButton'
import styles from './BottomContainer.module.css';

export default function Name({   isActive, lastActive }) {
  return (
    <div className={styles.container}>
        <Status
        isActive={isActive}
        lastActive={lastActive}
      />
        <ChatButton />

      </div>
   
  );
}
