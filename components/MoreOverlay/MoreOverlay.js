import React, { useState, useEffect } from 'react';
import NavigationButtonColumn from './components/NavigationButtons/NavigationButtonColumn';
import SocialButtonsRow       from './components/SocialButtons/SocialButtonsRow';
import ButtonFrame            from './components/AuthButtons/ButtonFrame';
import styles                 from './MoreOverlay.module.css';

export default function MoreOverlay({ onClose, onExited, onLogin, onSignup }) {
    const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 0);
    return () => clearTimeout(timer);
  }, []);

  const initiateClose = () => {
    onClose();           
    setIsVisible(false); 
  };

  const handleTransitionEnd = e => {
    if (e.propertyName === 'transform' && !isVisible) {
      onExited();
    }
  };

  return (
    <div className={styles.backdrop} onClick={initiateClose}>
      <div
        className={`${styles.frame} ${isVisible ? styles.visible : ''}`}
        onClick={e => e.stopPropagation()}
        onTransitionEnd={handleTransitionEnd}
      >
        <NavigationButtonColumn />
        <SocialButtonsRow />
        <ButtonFrame
        onLogin={onLogin}
         onSignup={onSignup}
       />
      </div>
    </div>
  );
}
