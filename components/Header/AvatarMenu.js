// AvatarMenu.jsx
import React from 'react';
import ArrowWithImage from './../../pages/Loggedin';
import HoverDropdown from './components/AuthControls/HoverMenu/HoverMenu';
import { useRouter } from 'next/router';

// components/AvatarMenu/AvatarMenu.jsx

import styles from './AvatarMenu.module.css';
export default function AvatarMenu({
  src,
  username,
  alt = '',
  size = 32,
  className = '',
  onReportClick
  
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

          <ArrowWithImage
            src={src}
            alt={alt}
            size={size}
            className={className}
            onReportClick={onReportClick}

          />
        
       
  );
}