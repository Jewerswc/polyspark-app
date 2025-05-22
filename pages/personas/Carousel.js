// src/components/Carousel.js
import React, { useRef, useState, useEffect } from 'react';
import styles from './Carousel.module.css';

import Header from './carousel/Header';
import PersonaRow from './carousel/PersonaRow';
import LeftButton from './carousel/LeftButton';
import RightButton from './carousel/Button';

export default function Carousel({ label, personas = [], onHeaderClick }) {
  const trackRef = useRef(null);
  const SCROLL_AMOUNT = 239;

  // track whether each side can actually scroll
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  // do a one-time setup of the scroll listener
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const updateScroll = () => {
      const { scrollLeft, scrollWidth, clientWidth } = track;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft + clientWidth < scrollWidth);
    };

    track.addEventListener('scroll', updateScroll);
    window.addEventListener('resize', updateScroll);

    // initialize
    updateScroll();

    return () => {
      track.removeEventListener('scroll', updateScroll);
      window.removeEventListener('resize', updateScroll);
    };
  }, []);

  const scrollLeft = () => {
    trackRef.current?.scrollBy({ left: -SCROLL_AMOUNT, behavior: 'smooth' });
  };

  const scrollRight = () => {
    trackRef.current?.scrollBy({ left: SCROLL_AMOUNT, behavior: 'smooth' });
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <Header label={label} onClick={onHeaderClick} />
        <div className={styles.arrows}>
          <LeftButton onClick={scrollLeft} disabled={!canScrollLeft} />
          <RightButton onClick={scrollRight} disabled={!canScrollRight} />
        </div>
      </div>

      <div className={styles.track} ref={trackRef}>
        <PersonaRow personas={personas} />
      </div>
    </div>
  );
}
