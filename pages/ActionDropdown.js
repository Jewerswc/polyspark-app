import React from 'react';
import styles from './ActionDropdown.module.css';

export default function BrowseMenu() {
    const browseActions = [
        {
          label: 'Polyspark Post',
          icon: 'Polyspark.png', // Replace with your actual icon
          disabled: false,
          onClick: () => console.log('Polyspark Post clicked'),
        },
        {
          label: 'Github Repository',
          icon: 'GithubAction.png', // Replace with your actual icon
          disabled: true,  // This button will be rendered as disabled
          onClick: () => console.log('Github Repository clicked'),
        },
        {
          label: 'Podcast',
          icon: 'PodcastAction.png', // Replace with your actual icon
          disabled: false,
          onClick: () => console.log('Podcast clicked'),
        },
        {
          label: 'X Post',
          icon: 'XAction.png', // Replace with your actual icon
          disabled: true,  // This button will be rendered as disabled
          onClick: () => console.log('X Post clicked'),
        },
        {
          label: 'Hacker News Post',
          icon: 'HNAction.png', // Replace with your actual icon
          disabled: false,
          onClick: () => console.log('Hacker News Post clicked'),
        },
      ];

  return (
    <div className={styles.container}>
      <h3 className={styles.heading}>Browse</h3>
      <ul className={styles.actionList}>
        {browseActions.map((action, index) => (
          <li key={index} className={styles.actionItem}>
            <button className={styles.actionButton}>
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
