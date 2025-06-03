// components/AtCircleIcon.jsx
import React from 'react';

export default function AtCircleIcon(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      width="1.5rem"
      height="1.5rem"
      {...props}
    >
      {/* black circle background */}
      <circle cx="24" cy="24" r="24" fill="#000" />

      {/* white “@” in the center */}
      <text
        x="50%"
        y="50%"
        fill="#fff"
        fontSize="24"
        fontFamily="sans-serif"
        fontWeight="bold"
        textAnchor="middle"
        dominantBaseline="central"
      >
        @
      </text>
    </svg>
  );
}
