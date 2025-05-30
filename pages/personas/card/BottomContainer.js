// Name.js
import React from 'react';
import Status from './Status'
import ChatButton from './ChatButton'
import Link from 'next/link';
import styles from './BottomContainer.module.css';
import { useRouter } from 'next/router';

export default function Name({
  isActive,
  lastPosted,
  actionType,
  profileUrl,
  onChatClick, 
  
}) {
  const router = useRouter();
  return (
    <div className={styles.container}>
      <Status isActive={isActive} lastPosted={lastPosted} />

            {actionType === 'profile' && profileUrl ? (
        <ChatButton
          label="View Profile"
          onClick={() => router.push(profileUrl)}
        />
      ) : (
        <ChatButton
          label="Chat Now"
          onClick={onChatClick}
        />
      )}
    </div>
  );
}