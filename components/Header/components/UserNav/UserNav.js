

import React from 'react';
import styles from './UserNav.module.css';
import Dropdown from './components/Dropdown/Dropdown'
import BellIcon from './components/BellIcon/BellIcon';
import ArrowRightIcon from './components/ArrowRightIcon/ArrowRightIcon';
import { useRouter } from 'next/router';

function ArrowWithImage({
  src,
  alt = '',
  username,
  size = 32,
  className = '',
  onReportClick,
  ...props
}) {
  const router = useRouter();
  
    const items = [
      {
        label: 'Profile',
        onClick: () => router.push('/user'),
      },
      {
        label: 'Trending',
        onClick: () => router.push('/'),
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
        divider: false,
        onClick: onReportClick,

      },
 
      {
        label: 'Terms of Use',
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
    <div className={`${styles.container} ${className}`} {...props}>

      {/* Bell wrapper */}
      <div className={styles.bellWrapper}>
      <BellIcon className={styles.bell} />
      </div>

      {/* Divider line */}
      <div className={styles.divider} />

      {/* User + arrow wrapper */}
          <Dropdown
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
        <ArrowRightIcon className={styles.svg} />
      </div>
      
             </button>
            }
          />  
    </div>

  );
}

export default ArrowWithImage;
