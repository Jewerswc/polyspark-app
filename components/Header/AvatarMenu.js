// AvatarMenu.jsx
import React from 'react';
import ArrowWithImage from './../../pages/Loggedin';
import HoverDropdown from './components/AuthControls/HoverMenu/HoverMenu';
import { useRouter } from 'next/router';

export default function AvatarMenu({
    src,
    alt = '',
    size = 32,
    className = '',
  }) {
    // 3) Define your items here
    const items = [
      {
        label: 'Profile',
        onClick: () => {
          console.log('Go to profile');
                router.push('/user')
          // e.g. router.push('/profile')
        },
      },
      {
        label: 'Personas',
        divider: false,
        onClick: () => {
          console.log('Open settings');
          router.push('/persona')

        },
        
      },
      {
        label: 'Activity',
        divider: false,
        onClick: () => {
          console.log('Open settings');
          router.push('/Activity')

        },
        
      },
      {
        label: 'Report an Issue',
        divider: true,
        onClick: () => {
          console.log('Open settings');
        },
        
      },
      {
        label: 'Logout',
        onClick: () => {
          console.log('Log out');
          localStorage.removeItem('accessToken');
          // …and any other logout logic…
          // e.g. setLoggedIn(false)
        },
      },
    ];
    const router = useRouter();
    return (
      <HoverDropdown
        // use the arrow-avatar component as trigger
        trigger={
          <ArrowWithImage
            src={src}
            alt={alt}
            size={size}
            className={className}
          />
        }
        // pass *your* items constant, not a prop
        items={items}
      />
    );
  }