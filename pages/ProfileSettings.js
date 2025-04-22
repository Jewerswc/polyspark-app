import React from 'react';
import styles from './ProfileSettings.module.css';
import ProfileSettingsTitle from './ProfileSettingsTitle'
import AvatarAndUpload from './user/AvatarAndUpload'
import UserInputsAndSaveButton from './user/UserInputsAndSaveButton';




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
