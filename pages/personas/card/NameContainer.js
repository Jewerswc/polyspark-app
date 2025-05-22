// Name.js
import React from 'react';
import PersonaNameSymbol from './PersonaNameSymbol'
import PersonaHandle from './PersonaHandle'
import styles from './NameContainer.module.css';

export default function Name({ imageUrl, name, handle }) {
  return (
    <div className={styles.container}>
    <PersonaNameSymbol name={name}/>
    <PersonaHandle handle={handle}/>
      
    </div>
  );
}
