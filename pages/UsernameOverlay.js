import React, { useState } from 'react';
import styles from './UsernameOverlay.module.css';
import TermsPrivacy from './../components/LoginOverlay/components/TermsPrivacy/TermsPrivacy';
import API from './../lib/api'; 

const CheckIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#28a745" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

export default function UsernameOverlay({ onLoginSuccess }) {
  const [username, setUsername] = useState('');
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [subscribeUpdates, setSubscribeUpdates] = useState(true);

  const [isChecking, setIsChecking] = useState(false);
  const [isAvailable, setIsAvailable] = useState(null);
  const [checkError, setCheckError] = useState('');
  const [submitError, setSubmitError] = useState('');

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
        `https://ionbackend.com/matching/api/check-username/?username=${encodeURIComponent(username)}`
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

  const handleUsernameSubmit = async () => {
    if (!username || !agreeTerms || !isAvailable) return;

    setSubmitError('');
    try {
      await API.post('/set-username/', { username });
      await API.patch('/me/', { receive_updates: subscribeUpdates });
      // **Always** pass both values here:
      onLoginSuccess({ username, subscribeUpdates });
    } catch (err) {
      console.error(err.response || err);
      const backendErr =
        err.response?.data?.username?.[0] ||
        err.response?.data?.receive_updates ||
        'Unable to complete signup.';
      setSubmitError(backendErr);
    }
  };

  return (
    <div className={styles.overlay}>
      <div className={styles.card} onClick={(e) => e.stopPropagation()}>
      <img
          src="/Images/Frame 224.png"
          alt="Choose your username"
          className={styles.mobileImage}
        />
        <div className={styles.headings}>
          <h2 className={styles.heading}>Choose a username</h2>
          <h3 className={styles.headingtwo}>You can update this later.</h3>
        </div>

        <div className={styles.inputWrapper}>
          <div className={styles.usernameContainer}>
            <span className={styles.prefix}>@</span>
            <input
              type="text"
              placeholder="username"
              value={username}
              onChange={handleUsernameChange}
              onBlur={checkUsername}
              className={`
                ${styles.inputWithPrefix}
                ${isAvailable === true ? styles.inputAvailable : ''}
                ${isAvailable === false ? styles.inputTaken : ''}
              `}
            />
            {isChecking && (
              <div className={styles.statusIcon}>
                <svg width="16" height="16" viewBox="0 0 50 50" className={styles.spinner}>
                  <circle cx="25" cy="25" r="20" fill="none" stroke="#999" strokeWidth="5" />
                </svg>
              </div>
            )}
            {isAvailable === true && !isChecking && (
              <div className={styles.statusIcon}>
                <CheckIcon />
              </div>
            )}
            {isAvailable === false && !isChecking && (
              <div className={styles.statusText}>Username Taken</div>
            )}
          </div>
        </div>

        {checkError && <p className={styles.error}>{checkError}</p>}

        <hr className={styles.divider} />

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
              <a href="#" className={styles.link}>Terms of Use</a>
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
              I want useful and interesting updates from Polyspark
            </span>
          </label>
        </div>

        {submitError && <p className={styles.error}>{submitError}</p>}

        <button
          onClick={handleUsernameSubmit}
          className={styles.button}
          disabled={!username || !agreeTerms || isAvailable !== true}
        >
          Continue
        </button>

        <TermsPrivacy />
      </div>
    </div>
  );
}
