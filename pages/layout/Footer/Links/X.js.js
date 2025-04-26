import React from 'react';
import styles from './../IconLinks.module.css';

export default function IconButton({ onClick, label }) {
  return (
    <button className={styles.iconButton} onClick={onClick}>
      <svg
        className={styles.icon}
        width="24"
        height="12.5"
        viewBox="0 0 24 12.5"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >

        <path id="Vector" d="M7.94589 5.9428L12.4992 0.649902H11.4202L7.46657 5.24565L4.30879 0.649902H0.666656L5.44185 7.59949L0.666656 13.1499H1.74571L5.92089 8.29664L9.25574 13.1499H12.8979L7.94563 5.9428H7.94589ZM6.46797 7.66072L5.98415 6.96869L2.13451 1.4622H3.79189L6.89858 5.90612L7.38241 6.59814L11.4208 12.3745H9.76338L6.46797 7.66098V7.66072Z" fill="currentcolor"/>
        </svg>
      {label && <span className={styles.label}>{label}</span>}
    </button>
  );
}