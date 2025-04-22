import React from 'react';
import { CameraFill } from 'react-bootstrap-icons';
import styles from './UploadProfileImage.module.css';

export default function ChatNowButton({ label, onClick, buttonColor }) {
  return (
    <button 
      className={styles.chatnowButton} 
      onClick={onClick}
      style={{ backgroundColor: buttonColor }}
    >
      <CameraFill />
       Upload
    </button>
  );
}
