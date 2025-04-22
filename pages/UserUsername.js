import React from 'react';
import styles from './UserBio.module.css';
import UsernameLabel from './UsernameLabel'
import UserUsernameInput from './UserUsernameInput';

export default function UserBio({ }) {
  return (
    <div 
      className={styles.container} >
        <UsernameLabel />
        <UserUsernameInput />
      
    </div>
  );
}
