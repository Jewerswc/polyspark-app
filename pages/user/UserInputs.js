import React from 'react';
import styles from './UserInputs.module.css';
import UserEmail from './UserEmail'
import UserUsername from './UserUsername'
import UserBio from './UserBio'


export default function UserInputs({ }) {
  return (
    <div 
      className={styles.container} >
        <UserEmail />
        <UserUsername />
        <UserBio />

    </div>
  );
}
