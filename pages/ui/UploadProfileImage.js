import React from 'react';
import { CameraFill } from 'react-bootstrap-icons';
import styles from './UploadProfileImage.module.css';

export default function uploadwButton({ onClick }) {
  return (
    <button 
      className={styles.uploadButton} 
      onClick={onClick}
    >
      <CameraFill />
       Upload
    </button>
  );
}