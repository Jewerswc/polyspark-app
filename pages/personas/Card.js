// Name.js
import React from 'react';
import Container from './Container'
import BottomContainer from './BottomContainer'
import PersonaDescription from './PersonaDescription'
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
    <BottomContainer />
      
    </div>
  );
}
