// LoggedIn.jsx

import React from 'react';
import styles from './LoggedinMobile.module.css';
import HoverDropdown from './components/AuthControls/HoverMenu/HoverMenu'
import { useRouter } from 'next/router';

function ArrowWithImage({
  src,
  alt = '',
  size = 32,
  className = '',
  onReportClick,
  username,
  ...props
}) {
  const router = useRouter();
  
    const items = [
      {
        label: 'Profile',
        onClick: () => router.push('/user'),
      },
      {
        label: 'Personas',
        onClick: () => router.push('/persona'),
      },
      {
        label: 'Activity',
        onClick: () => router.push('/Activity'),
      },
      {
        label: 'Report an Issue',
        divider: true,
        onClick: onReportClick,

      },
      {
        label: 'Logout',
        onClick: () => {
          console.log('Log out');
          localStorage.removeItem('accessToken');
          // …any other cleanup…
          router.push('/');
        },
      },
    ];
  return (
    <div className={`${styles.image} ${className}`} {...props}>



      {/* User + arrow wrapper */}
          <HoverDropdown
              items={items}
              src={src}
              username={username}
            trigger={
              <button className={styles.trigger}>
      <div className={styles.userWrapper}>
        <img
          src={src}
          alt={alt}
          style={{ width: size, height: size }}
          className={styles.avatar}
        />
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
      
             </button>
            }
          />  
    </div>

  );
}

export default ArrowWithImage;
