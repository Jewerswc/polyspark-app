// Name.js
import React from 'react';
import Status from './Status'
import ChatButton from './ChatButton'
import styles from './BottomContainer.module.css';

export default function Name({   isActive, lastActive, actionType, profileUrl, onChatClick}) {
  return (
    <div className={styles.container}>
        <Status
        isActive={isActive}
        lastActive={lastActive}
      />
             {actionType === 'profile' ? (
        <Link href={profileUrl}>
          <a className={styles.viewProfileButton}>View Profile</a>
        </Link>
      ) : (
        <ChatButton
          label="Chat Now"
          onClick={onChatClick}
        />
      )}

      </div>
   
  );
}
