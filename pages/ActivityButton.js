import React from 'react';
import styles from './ActivityButton.module.css';

export default function ActivityButton({ onClick }) {
  return (
    <button className={styles.activityButton} onClick={onClick}>
<svg width="26" height="13" viewBox="0 0 26 13" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="0.25" y="0.275" width="25.5" height="12.5" rx="2" fill="#666666" fill-opacity="0.75"/>
<rect x="4.45" y="5.475" width="2.1" height="2.1" rx="1.05" fill="white"/>
<rect x="4.45" y="5.475" width="2.1" height="2.1" rx="1.05" stroke="white" stroke-width="0.4"/>
<path d="M8.212 9.025V4.825H8.968L10.762 7.537V4.825H11.53V9.025H10.9L8.98 6.145V9.025H8.212ZM12.4542 9.025V4.825H15.1422V5.569H13.2402V6.463H14.7162V7.207H13.2402V8.281H15.2022V9.025H12.4542ZM16.6443 9.025L15.4623 4.825H16.2603L17.1003 7.807L18.0363 4.825H18.5703L19.5423 7.729L20.3463 4.825H21.1443L19.9143 9.025H19.2363L18.3003 6.223L17.3703 9.025H16.6443Z" fill="white"/>
</svg>

      <span className={styles.label}>Activity</span>
    </button>
  );
}
