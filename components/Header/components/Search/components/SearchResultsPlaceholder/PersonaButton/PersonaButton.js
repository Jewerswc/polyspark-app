import React from 'react';
import styles from './PersonaButton.module.css';

export default function Tag({ text, onSelect, avatarUrl, name }) {
  const handleMouseDown = e => {
    e.preventDefault();  
    e.stopPropagation();
  };
  return (
    <button 
    onMouseDown={handleMouseDown}
    onClick={() => onSelect?.(text)}
    className={styles.personaCard}>
      <img
        className={styles.avatar}
        src={avatarUrl}
        alt={`${name}'s avatar`}

      />
      <span className={styles.name}>{name}</span>
    </button>
  );
}
