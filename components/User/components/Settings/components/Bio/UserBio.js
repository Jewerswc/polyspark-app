import React from 'react';
import styles from './UserBio.module.css';
import BioLabel from './BioLabel'
import UserBioInput from './UserBioInput'

export default function UserBio({ bio, onFieldChange}) {
  return (
    <div 
      className={styles.container} >
        <BioLabel />
        <UserBioInput bio={bio} onChange={(val) => onFieldChange('bio', val)}  />
      
    </div>
  );
}
