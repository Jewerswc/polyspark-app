import React from 'react';
import StatusTag from './StatusTag';

/**
 * Props:
 *  - isActive: boolean
 *  - lastActive: Date|string (ISO timestamp or Date instance)
 */
export default function Status({ isActive, lastActive }) {
  const now = new Date();
  let text = 'Unknown';
  let dotColor = '#808080';

  if (isActive) {
    // user is currently active
    text = 'Active now';
    dotColor = '#04E81B';            // green
  } else if (lastActive) {
    // compute time difference
    const last = new Date(lastActive);
    const diffMs = now - last;
    const diffHrs = diffMs / (1000 * 60 * 60);
    if (diffHrs < 24) {
      const hours = Math.max(1, Math.floor(diffHrs));
      text = `Active ${hours}h ago`;
      dotColor = '#FFA500';          // orange
    } else {
      const days = Math.floor(diffHrs / 24);
      text = `Active ${days}d ago`;
      dotColor = '#B0B0B0';          // grey
    }
  }

  return <StatusTag text={text} dotColor={dotColor} />;
}
