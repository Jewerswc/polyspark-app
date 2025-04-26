import React from 'react';
import EmailLink from './Links/Email'
import XLink from './Links/X.js'
import GithubLink from './Links/Github'
import styles from './IconButtonRow.module.css';

export default function IconButtonRow() {
  return (
    <div className={styles.iconButtonRow}>

      <EmailLink
        onClick={() => console.log('Icon 2 clicked')}
      />
            <XLink 
        onClick={() => console.log('Icon 1 clicked')} 
      />

      <GithubLink
        onClick={() => console.log('Icon 3 clicked')}
      />
      
    </div>
  );
}
