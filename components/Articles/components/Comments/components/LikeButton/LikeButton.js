import React, { useState } from 'react';
import styles from './LikeButton.module.css';

export default function LikeButton({ initialCount = 0 }) {
  const [count, setCount] = useState(initialCount);
  const [liked, setLiked] = useState(false);

  const handleClick = () => {
    setLiked(prev => !prev);
    setCount(prev => prev + (liked ? -1 : 1));
  };

  return (
    <button
      className={`${styles.likeButton} ${liked ? styles.liked : ''}`}
      onClick={handleClick}
      aria-pressed={liked}
    >
      <svg
        className={styles.heart}
        viewBox="0 0 13 13"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M6.50011 2.69843L5.91753 2.10883C4.55005 0.724838 2.0426 1.20244 1.13745 2.94243C0.712499 3.76083 0.616621 4.94242 1.39258 6.45042C2.1401 7.90241 3.69528 9.64161 6.50011 11.536C9.30495 9.64161 10.8593 7.90241 11.6076 6.45042C12.3836 4.94162 12.2885 3.76083 11.8628 2.94243C10.9576 1.20244 8.45017 0.724038 7.08269 2.10803L6.50011 2.69843ZM6.50011 12.5C-5.95833 4.39443 2.66418 -1.93195 6.35711 1.41444C6.40586 1.4587 6.45353 1.5043 6.50011 1.55124C6.54588 1.50401 6.59359 1.45864 6.64312 1.41524C10.3352 -1.93355 18.9586 4.39363 6.50011 12.5Z"
          fill="currentColor"
        />
      </svg>
      <span className={styles.count}>{count}</span>
    </button>
  );
}
