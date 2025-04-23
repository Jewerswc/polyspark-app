import React, { useState, useEffect, useRef } from 'react';
import NavigationButtonColumn from './NavigationButtonColumn';
import SocialButtonsRow       from './SocialButtonsRow';
import ButtonFrame            from './ButtonFrame';
import styles                 from './MoreOverlay.module.css';

export default function MoreOverlay({ onClose }) {
  const [isVisible, setIsVisible] = useState(false);
  const frameRef = useRef();

  // Slide in on mount
  useEffect(() => {
    requestAnimationFrame(() => setIsVisible(true));
  }, []);

  // When user clicks backdrop or “×”, trigger slide‐out
  const initiateClose = () => {
    setIsVisible(false);
  };

  // After the slide‐out ends, inform parent to unmount
  const handleTransitionEnd = (e) => {
    // only run when our transform transition ends
    if (e.propertyName === 'transform' && !isVisible) {
      onClose();
    }
  };

  return (
    <div className={styles.backdrop} onClick={initiateClose}>
      <div
        ref={frameRef}
        className={`${styles.frame} ${isVisible ? styles.visible : ''}`}
        onClick={e => e.stopPropagation()}
        onTransitionEnd={handleTransitionEnd}
      >


        <NavigationButtonColumn />
        <SocialButtonsRow />
        <ButtonFrame />
      </div>
    </div>
  );
}
