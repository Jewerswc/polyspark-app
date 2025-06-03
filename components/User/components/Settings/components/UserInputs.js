// src/components/User/components/Settings/UserInputs.jsx

import React from 'react';
import styles from './UserInputs.module.css';
import UserEmail from './Email/UserEmail'
import UserUsername from './Username/UserUsername'
import UserBio from './Bio/UserBio'

export default function UserInputs({
  email,
  username,
  bio,
  onFieldChange,
  onSave
}) {
  return (
    <div className={styles.container}>
      <UserEmail
        email={email}
        onFieldChange={onFieldChange}   // not used inside UserEmail
        onChange={(val) => onFieldChange('email', val)}
      />
      <UserUsername
        username={username}
        onFieldChange={onFieldChange}   // not used inside UserUsername
        onChange={(val) => onFieldChange('username', val)}
      />
      <UserBio
        bio={bio}
        onFieldChange={onFieldChange}   // not used inside UserBio
        onChange={(val) => onFieldChange('bio', val)}
      />
    </div>
  );
}
