// Name.js
import React from 'react';
import Container from './Card/Container'
import BottomContainer from './Card/BottomContainer'
import styles from './Card.module.css';

export default function Name({
  name,
  handle,
  imageUrl,
  description,
  isActive,
  lastActive
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
        lastActive={lastActive} 
      />
      
    </div>
  );
}
