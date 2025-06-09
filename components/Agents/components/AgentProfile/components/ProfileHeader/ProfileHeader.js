import React from 'react'
import styles from './ProfileHeader.module.css'
import TextContainer from './components/TextContainer/TextContainer'

export default function ProfileHeader({
  name,
  handle,
  bio,
  avatar,
  onChatClick,
  onImageClick
}) {
  return (
    <div className={styles.card}>
      
    <TextContainer 
            name={name}
            handle={handle}
            bio={bio}
            onChatClick={onChatClick}
         />

      <img
      src={avatar}
      alt={`${name} `}
      className={styles.avatar}
      onClick={() => onImageClick(avatar)}
      />
    </div>
  );
}


