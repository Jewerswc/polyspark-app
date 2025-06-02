import React from 'react';
import styles from './UserInputs.module.css';
import UserInputs from './UserInputs'
import SaveChangesButton from './SaveChangesButton'

export default function UserInputsAndSaveButton({
  email,
  username,
  bio,
  onFieldChange,
  onSave
}) {
  return (
    <div className={styles.container}>
      <UserInputs
        email={email}
        username={username}
        bio={bio}
        onFieldChange={onFieldChange}
      />
      <SaveChangesButton onSave={onSave} />
    </div>
  );
}
