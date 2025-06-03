// UserInputs.jsx
import React from 'react';
import styles from './UserInputs.module.css';
import UserField from './UserField';
import SaveChangesButton from './SaveChangesButton'

export default function UserInputs({
  email, username, bio,
  onFieldChange, onSave
}) {
  return (
    <div className={styles.container}>
      <UserField
        label="Email"
        type="email"
        name="email"
        value={email}
        placeholder="yogosfgfdu@example.com"
        onChange={onFieldChange}
      />
      <UserField
        label="Username"
        type="text"
        name="username"
        value={username}
        placeholder="YourUsername"
        onChange={onFieldChange}
      />
      <UserField
        label="Bio"
        type="textarea"
        name="bio"
        value={bio}
        placeholder="Tell us about yourself"
        onChange={onFieldChange}
      />
      <SaveChangesButton onSave={onSave} />
    </div>
  );
}
