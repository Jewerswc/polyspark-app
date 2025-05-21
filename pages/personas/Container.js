// Name.js
import React from 'react';
import TopContainer from './TopContainer'
import PersonaDescription from './PersonaDescription'
import styles from './NameContainer.module.css';

export default function Container({ name, handle, imageUrl, description }) {
  return (
    <div className={styles.container}>
    <TopContainer name={name} handle={handle} imageUrl={imageUrl}/>
    <PersonaDescription description={description}/>
      
    </div>
  );
}
