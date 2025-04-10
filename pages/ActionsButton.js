import React from 'react';
import styles from './ActionsButton.module.css';

export default function ActionsButton({ onClick }) {
  return (
    <button className={styles.actionsButton} onClick={onClick}>
      <svg width="9" height="14" viewBox="0 0 9 14" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="9" height="14" fill="none"/>
      <g id="MacBook Pro 14&#34; - 1" clip-path="url(#clip0_0_1)">
        <rect width="1512" height="982" transform="translate(-1240 -19)" fill="none"/>
        <g id="Main Navbar/Header" filter="url(#filter0_d_0_1)">
          <mask id="path-1-inside-1_0_1" fill="white">
            <path d="M-1240 -19H272V86H-1240V-19Z"/>
          </mask>
          <path d="M-1240 -19H272V86H-1240V-19Z" fill="none" shape-rendering="crispEdges"/>
          <path d="M272 85H-1240V87H272V85Z" fill="#D7D7D7" mask="url(#path-1-inside-1_0_1)"/>
          <g id="Five Widgets">
            <g id="Component 9">
              <path id="Vector" d="M2.51611 0.537183C2.54049 0.454251 2.59108 0.381447 2.6603 0.329675C2.72952 0.277903 2.81365 0.249949 2.90009 0.25H6.0999C6.16324 0.250048 6.22567 0.26514 6.28204 0.294033C6.33841 0.322926 6.38711 0.364794 6.42414 0.41619C6.46116 0.467587 6.48545 0.527041 6.495 0.58966C6.50455 0.652279 6.4991 0.716271 6.47908 0.776369L5.05516 5.04971H8.09978C8.17469 5.04966 8.2481 5.07064 8.31166 5.11027C8.37522 5.1499 8.42638 5.20657 8.45931 5.27385C8.49224 5.34113 8.50562 5.4163 8.49792 5.4908C8.49022 5.56531 8.46175 5.63616 8.41576 5.69528L2.8161 12.8948C2.75873 12.969 2.67717 13.0206 2.58563 13.0407C2.4941 13.0608 2.39841 13.0481 2.31526 13.0049C2.23211 12.9616 2.16679 12.8906 2.13069 12.8041C2.09459 12.7176 2.09001 12.6212 2.11774 12.5317L3.55845 7.84955H0.90021C0.838026 7.84958 0.776689 7.83512 0.721072 7.80731C0.665455 7.77949 0.617089 7.73909 0.579816 7.68932C0.542542 7.63954 0.517388 7.58176 0.506351 7.52056C0.495314 7.45937 0.498697 7.39644 0.516233 7.33678L2.51611 0.537183Z" fill="currentColor"/>
            </g>
          </g>
        </g>
      </g>
      <defs>
        <filter id="filter0_d_0_1" x="-1244" y="-19" width="1520" height="113" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
          <feFlood flood-opacity="0" result="BackgroundImageFix"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feOffset dy="4"/>
          <feGaussianBlur stdDeviation="2"/>
          <feComposite in2="hardAlpha" operator="out"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0"/>
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_0_1"/>
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_0_1" result="shape"/>
        </filter>
        <clipPath id="clip0_0_1">
          <rect width="1512" height="982" fill="white" transform="translate(-1240 -19)"/>
        </clipPath>
      </defs>
    </svg>
      <span className={styles.label}>Actions</span>
    </button>
  );
}
