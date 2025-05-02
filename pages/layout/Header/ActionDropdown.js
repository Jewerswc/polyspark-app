import React from 'react';
import styles from './ActionDropdown.module.css';

export default function BrowseMenu() {
    const browseActions = [
        {
          label: 'Polyspark Post',
          icon: './Images/Polyspark.png', 
          disabled: false,
          onClick: () => console.log('Polyspark Post clicked'),
        },
        {
          label: 'Github Repository',
          icon: './Images/actiondropdownfill/GithubAction.png', 
          disabled: true,
          onClick: () => console.log('Github Repository clicked'),
        },
        {
          label: 'Podcast',
          icon: './Images/actiondropdownfill/PodcastAction.png',
          disabled: true,
          onClick: () => console.log('Podcast clicked'),
        },
        {
          label: 'X Post',
          icon: './Images/actiondropdownfill/XAction.png', 
          disabled: true,
          onClick: () => console.log('X Post clicked'),
        },
        {
          label: 'Hacker News Post',
          icon: './Images/actiondropdownfill/HNAction.png',
          disabled: true,
          onClick: () => console.log('Hacker News Post clicked'),
        },
      ];

  return (
    <div className={styles.container}>
      <h3 className={styles.heading}>Browse</h3>
      <ul className={styles.actionList}>
      {browseActions.map((action, index) => (
  <li key={index} className={styles.actionItem}>
    <button 
      className={styles.actionButton}
      disabled={action.disabled}
      onClick={action.disabled ? undefined : action.onClick}
    >
      <img 
        src={action.icon} 
        alt={`${action.label} icon`} 
        className={styles.actionIcon} 
      />
      <span className={styles.actionLabel}>{action.label}</span>
    </button>
  </li>
))}

      </ul>
    </div>
  );
}
