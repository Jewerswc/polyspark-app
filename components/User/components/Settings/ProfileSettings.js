import React from 'react';
import styles from './ProfileSettings.module.css';
import ProfileSettingsTitle from './components/ProfileSettingsTitle'
import AvatarAndUpload from './components/AvatarAndUpload'
import UserInputsAndSaveButton from './components/UserInputsAndSaveButton';




export default function ProfileSettings({ }) {
  return (
    <div 
      className={styles.container} >
        <ProfileSettingsTitle />
        <AvatarAndUpload />
        <UserInputsAndSaveButton />

    </div>
  );
}
