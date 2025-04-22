import React from 'react';
import styles from './UserInputs.module.css';
import UserInputs from './UserInputs'
import SaveChangesButton from './SaveChangesButton'



export default function UserInputsAndSaveButton({ }) {
  return (
    <div 
      className={styles.container} >
        <UserInputs />
        <SaveChangesButton />

    </div>
  );
}
