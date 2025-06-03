import React, { useState } from 'react';
import styles from './UsernameOverlay.module.css';
import TermsPrivacy from './../components/LoginOverlay/components/TermsPrivacy';

// You can swap these out for SVGs if you like:
const CheckIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#28a745"       // green
    strokeWidth="3"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

const XIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#e55353"      // red/orange
    strokeWidth="3"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

export default function LoginOverlay({ onLoginSuccess, onClose }) {
  const [username, setUsername] = useState('');
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [subscribeUpdates, setSubscribeUpdates] = useState(true);

  const [isChecking, setIsChecking] = useState(false);
  const [isAvailable, setIsAvailable] = useState(null); // null = not checked, true/false otherwise
  const [checkError, setCheckError] = useState('');

  const handleUsernameChange = (e) => {
    const value = e.target.value.trim();
    setUsername(value);
    setIsAvailable(null);
    setCheckError('');
  };

  const checkUsername = async () => {
    if (!username) {
      setIsAvailable(null);
      return;
    }

    setIsChecking(true);
    setCheckError('');
    try {
      const response = await fetch(
        `http://127.0.0.1:8000/matching/api/check-username/?username=${encodeURIComponent(
          username
        )}`
      );
      if (!response.ok) throw new Error('Network response was not ok');
      const data = await response.json();
      setIsAvailable(data.available);
    } catch (err) {
      console.error('Error checking username:', err);
      setCheckError('Unable to verify availability.');
      setIsAvailable(null);
    } finally {
      setIsChecking(false);
    }
  };

  const handleUsernameSubmit = () => {
    if (username && agreeTerms && isAvailable) {
      onLoginSuccess({ username, subscribeUpdates });
    }
  };

  //--------------------------------------------------------------------
  // RENDER:
  //--------------------------------------------------------------------
  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.card} onClick={(e) => e.stopPropagation()}>
        <div className={styles.headings}>
          <h2 className={styles.heading}>Choose a username</h2>
          <h3 className={styles.headingtwo}>You can update this later.</h3>
        </div>

        {/* ========== USERNAME INPUT ========== */}
        <div className={styles.inputWrapper}>
          <div className={styles.usernameContainer}>
            <span className={styles.prefix}>@</span>

            <input
              type="text"
              placeholder="username"
              value={username}
              onChange={handleUsernameChange}
              onBlur={checkUsername}
              // Change border color based on availability:
              className={`
                ${styles.inputWithPrefix}
                ${isAvailable === true ? styles.inputAvailable : ''}
                ${isAvailable === false ? styles.inputTaken : ''}
              `}
            />

            {/* Icon on the right side of the input: */}
            {isChecking && (
              <div className={styles.statusIcon}>
                {/* you could show a spinner here if you like */}
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
            {isAvailable === true && !isChecking && (
              <div className={styles.statusIcon}>
                <CheckIcon />
              </div>
            )}
            {isAvailable === false && !isChecking && (
              <div className={styles.statusText}>
                Username Taken
              </div>
            )}
          </div>
        </div>

        {/* ========== Remove the old below‐input text messages ========== */}

        <hr className={styles.divider} />

        {/* ========== CHECKBOXES ========== */}
        <div className={styles.checkboxWrapper}>
          <label className={styles.checkboxLabel}>
            <input
              type="checkbox"
              checked={agreeTerms}
              onChange={(e) => setAgreeTerms(e.target.checked)}
              className={styles.checkbox}
            />
            <span className={styles.checkboxText}>
              By creating my Polyspark account, I agree to the Polyspark&nbsp;
              <a href="#" className={styles.link}>
                Terms of Use
              </a>
              &nbsp;and have read the&nbsp;
              <a href="#" className={styles.link}>Privacy Policy</a>.
            </span>
          </label>

          <label className={styles.checkboxLabeltwo}>
            <input
              type="checkbox"
              checked={subscribeUpdates}
              onChange={(e) => setSubscribeUpdates(e.target.checked)}
              className={styles.checkbox}
            />
            <span className={styles.checkboxText}>
              Send me important product updates and market news
            </span>
          </label>
        </div>

        <button
          onClick={handleUsernameSubmit}
          className={styles.button}
          disabled={
            !username ||
            !agreeTerms ||
            isAvailable === false ||
            isAvailable === null
          }
        >
          Continue
        </button>

        <TermsPrivacy />
      </div>
    </div>
  );
}
