import React from 'react';
import styles from './UserUsername.module.css';
import UsernameLabel from './UsernameLabel'
import UserUsernameInput from './UserUsernameInput';

export default function UserBio({ username, onFieldChange  }) {
  return (
    <div 
      className={styles.container} >
        <UsernameLabel />
        <UserUsernameInput username={username} onChange={(val) => onFieldChange('username', val)}  />
      
    </div>
  );
}
