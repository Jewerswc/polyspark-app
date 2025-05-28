// wherever you need it...
import AvatarMenu from './AvatarMenu';

const items = [
  { label: 'Profile', onClick: () => {} },
  { label: 'Settings', divider: true, onClick: () => {} },
  { label: 'Logout', onClick: () => {} },
];

<AvatarMenu
  src="Images/useravatar.png"
  alt="Your avatar"
  size={32}
  menuItems={items}
/>
