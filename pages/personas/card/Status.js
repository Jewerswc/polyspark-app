import React from 'react';
import StatusTag from './StatusTag';

/**
 * Props:
 *  - isActive: boolean
 *  - lastPosted: string (ISO) or Date
 */
export default function Status({ isActive, lastPosted }) {
  const now = Date.now();
  let text = 'Unknown';
  let dotColor = '#808080';

  if (isActive) {
    text = 'Active now';
    dotColor = '#04E81B';
  } else if (lastPosted) {
    const last = new Date(lastPosted).getTime();
    const diffMs = now - last;
    const diffHrs = diffMs / (1000 * 60 * 60);

    if (diffHrs < 1) {
      text = 'Active just now';
      dotColor = '#04E81B';
    } else if (diffHrs < 24) {
      const hrs = Math.floor(diffHrs);
      text = `Active ${hrs}h ago`;
      dotColor = '#FFA500';
    } else {
      const days = Math.floor(diffHrs / 24);
      text = `Active ${days}d ago`;
      dotColor = '#B0B0B0';
    }
  }

  return <StatusTag text={text} dotColor={dotColor} />;
}
