import React from 'react';
import styles from './ResultTitle.module.css';

export default function AgentActivityTitle({ action_text, title, url }) {
  return (
    <button
      className={styles.activityTitle}
      onClick={() => window.open(url, '_blank')}
    >
      {action_text} <strong>{title}</strong>
    </button>
  )
}
