import React from 'react';
import styles from './SearchResultTag.module.css';

export default function Tag({ text, onSelect }) {
  const handleMouseDown = e => {
    e.preventDefault();  
    e.stopPropagation();
  };

  return (
    <button
      type="button"
      onMouseDown={handleMouseDown}
      onClick={() => onSelect?.(text)}
      className={styles.tag}
    >
      {text}
    </button>
  );
}
