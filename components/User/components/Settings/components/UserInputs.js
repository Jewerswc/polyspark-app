// src/components/User/components/Settings/components/UserInputs.jsx

import React from 'react';
import styles from './UserInputs.module.css';
import UserField from './UserField';
import SaveChangesButton from './SaveChangesButton';

const CheckIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#28a745"
    strokeWidth="3"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

/** Optional: you could also show an X-icon if you like **/
const XIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#e55353"
    strokeWidth="3"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

export default function UserInputs({
  email,
  username,
  bio,
  onFieldChange,
  onSave,

  // “username availability” props from ProfileSettings.jsx:
  onUsernameBlur,
  isChecking,
  isAvailable,
  checkError,

  // NEW prop:
  isDirty
}) {
  //
  // Decide which extra class to send into <UserField inputClassName=... />
  // Based on your overlay CSS: .inputAvailable (green border) or .inputTaken (red border).
  //
  let usernameInputClass = '';
  if (isAvailable === true) {
    usernameInputClass = styles.inputAvailable;
  } else if (isAvailable === false) {
    usernameInputClass = styles.inputTaken;
  }

  return (
    <div className={styles.container}>
      <UserField
        label="Email"
        type="email"
        name="email"
        value={email}
        placeholder="you@example.com"
        onChange={onFieldChange}
      />

      {/* ——— Username field + “inside‐input” status icon ——— */}
      <div className={styles.usernameContainer}>
        <UserField
          label="Username"
          type="text"
          name="username"
          value={username}
          placeholder="YourUsername"
          onChange={onFieldChange}
          onBlur={onUsernameBlur}
          inputClassName={usernameInputClass}
        />

        {/* 
          RE-USE your overlay’s .statusIcon class exactly, 
          because that positions the spinner/check/text inside the input.
        */}
        {isChecking && (
          <div className={styles.statusIcon}>
            <svg
              width="16"
              height="16"
              viewBox="0 0 50 50"
              className={styles.spinner}
            >
              <circle
                cx="25"
                cy="25"
                r="20"
                fill="none"
                stroke="#999"
                strokeWidth="5"
              />
            </svg>
          </div>
        )}

        {!isChecking && isAvailable === true && (
          <div className={styles.statusIcon}>
            <CheckIcon />
          </div>
        )}

        {!isChecking && isAvailable === false && (
          <div className={styles.statusIcon}>
            {/* 
              Either show text “Taken”:
              <span className={styles.statusText}>Taken</span>
              or show an X icon:
            */}
            <XIcon />
          </div>
        )}

        {checkError && (
          // If the API returned an error, show it *below* the input (not inside).
          <div className={styles.checkErrorText}>{checkError}</div>
        )}
      </div>
      {/* ——— End Username container ——— */}

      <UserField
        label="Bio"
        type="textarea"
        name="bio"
        value={bio}
        placeholder="Tell us about yourself"
        onChange={onFieldChange}
      />

    <SaveChangesButton
      onSave={onSave}
      disabled={!isDirty || isAvailable === false}
    />
    </div>
  );
}
