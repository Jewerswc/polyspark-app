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
