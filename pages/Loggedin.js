import React from 'react';
import styles from './LoggedIn.module.css';

/**
 * ArrowWithImage (CSS‑module version)
 * ----------------------------------
 * Avatar on the left, arrow on the right.  Arrow starts at 90° and flips
 * 180° on hover.
 *
 * ‑ The arrow colour is controlled purely in CSS via `currentColor`.
 * ‑ `display: inline‑flex` lets the wrapper hug its content instead of
 *   stretching to 100 % width.
 */
function ArrowWithImage({
  src,
  alt = '',
  size = 32,
  className = '',
  ...props
}) {
  return (
    <div className={`${styles.image} ${className}`} {...props}>
      {/* Avatar */}
      <img src="Images/useravatar.png" alt={alt} style={{ width: size, height: size }} />

      {/* Arrow icon */}
      <svg
        className={styles.svg}
        width="8"
        height="12"
        viewBox="0 0 8 12"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M1.5 1L6.37663 5.70833C6.45571 5.78622 6.5 5.89094 6.5 6C6.5 6.10906 6.45571 6.21378 6.37663 6.29167L1.5 11"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
      </svg>
    </div>
  );
}

export default ArrowWithImage;
