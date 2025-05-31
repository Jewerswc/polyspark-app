import React from 'react';
import styles from './UserBio.module.css';
import EmailLabel from './EmailLabel'
import UserEmailInput from './UserEmailInput';

export default function UserBio({ }) {
  return (
    <div 
      className={styles.container} >
        <EmailLabel />
        <UserEmailInput />
      
    </div>
  );
}
