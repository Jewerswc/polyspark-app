import React from 'react';
import Container from './card/Container'
import BottomContainer from './card/BottomContainer'
import styles from './Card.module.css';

export default function Name({
  name,
  handle,
  imageUrl,
  description,
  isActive,
  lastPosted,
  actionType,
  profileUrl,
  onChatClick
}) {
  return (
    <div className={styles.container}>
          <Container
        name={name}
        handle={handle}
        imageUrl={imageUrl}
        description={description}
      />
      <BottomContainer
        isActive={isActive}
        lastPosted={lastPosted} 
        actionType={actionType}
        profileUrl={profileUrl}
        onChatClick={onChatClick} 
      />
      
    </div>
  );
}
