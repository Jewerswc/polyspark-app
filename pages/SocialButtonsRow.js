import React from 'react';
import styles from './SocialButtonsRow.module.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

export default function SocialButtonsRow({
  onClickX = () => {},
  onClickInstagram = () => {},
  onClickFacebook = () => {},
  onClickEmail = () => {},
  onClickGitHub = () => {},
}) {
  const icons = [
    { label: 'X',         icon: 'bi-twitter-x',         handler: onClickX },
    { label: 'Instagram', icon: 'bi-instagram', handler: onClickInstagram },
    { label: 'Facebook',  icon: 'bi-facebook',  handler: onClickFacebook },
    { label: 'Email',     icon: 'bi-envelope',  handler: onClickEmail },
    { label: 'GitHub',    icon: 'bi-github',    handler: onClickGitHub },
  ];

  return (
    <div className={styles.socialRow}>
      {icons.map(({ label, icon, handler }) => (
        <button
          key={label}
          type="button"
          className={styles.socialButton}
          aria-label={label}
          onClick={handler}
        >
          <i className={`bi ${icon}`} />
        </button>
      ))}
    </div>
  );
}
