import React from 'react';
import styles from './ResultTitle.module.css';

export default function AgentActivityTitle({ action_text, title, url }) {
  return (
    <button
      className={styles.activityTitle}
    >
      <strong>{action_text}</strong>  {title}
    </button>
  )
}
