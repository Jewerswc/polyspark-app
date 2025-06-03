import React from 'react';
import styles from './UserEmail.module.css';
import EmailLabel from './EmailLabel'
import UserEmailInput from './UserEmailInput';

export default function UserBio({ email, onFieldChange }) {
  return (
    <div 
      className={styles.container} >
        <EmailLabel />
        <UserEmailInput email={email} onChange={(val) => onFieldChange('email', val)} />
      
    </div>
  );
}
