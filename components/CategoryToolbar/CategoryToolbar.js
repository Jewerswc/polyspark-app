import React, { useState, useEffect, useRef } from 'react';
import CategoryLabelMobile from './components/TopButton/Top';
import CategoryButton from './components/CategoryButton/CategoryButton';
import RightButton from './RightButton';
import LeftButton from './LeftButton'
import styles from './CategoryToolbar.module.css';
import { TRENDING, NEW } from '../../pages/constants/CategoryConstants';

export default function CategoryToolbar({
  activeCategory,
  onCategorySelect,
}) {
  const [tags, setTags] = useState([]);
  const [loading, setLoading] = useState(false);

  // scroll state
  const scrollRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  // fetch tags
  useEffect(() => {
    setLoading(true);
    fetch(`https://ionbackend.com/matching/api/search/?q=&type=tags`)
      .then(res => {
        if (!res.ok) throw new Error(res.statusText);
        return res.json();
      })
      .then(data => setTags(data.tags.map(t => t.tag)))
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  // update scroll buttons whenever the container scrolls or resizes
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    const update = () => {
      setCanScrollLeft(el.scrollLeft > 0);
      setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth);
    };
    el.addEventListener('scroll', update);
    window.addEventListener('resize', update);
    // init
    update();
    return () => {
      el.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    };
  }, [tags, loading]);

  // handlers
  const scrollByAmount = (amount) => {
    scrollRef.current?.scrollBy({ left: amount, behavior: 'smooth' });
  };

  return (
    <div className={styles.toolbarWrapper}>
      {/* left “back” arrow */}
      {canScrollLeft && (
        <LeftButton
          onClick={() => scrollByAmount(-200)}
          disabled={!canScrollLeft}
          className={styles.flipped}  // if you want to flip the SVG
        />
      )}
            <div
        className={`
          ${styles.scrollWrapper}
          ${canScrollLeft ? styles.hasLeftFade : ''}
          ${canScrollRight ? styles.hasRightFade : ''}
        `}
      >
        <div className={styles.scrollContainer} ref={scrollRef}>



        <CategoryLabelMobile
        label="Trending"
          onClick={() => onCategorySelect(TRENDING)}
          isActive={activeCategory === TRENDING}
        />
        <CategoryButton
          label="Latest"
          onClick={() => onCategorySelect(NEW)}
          isActive={activeCategory === NEW}
        />
        {loading ? (
          <span className={styles.loading}>Loading…</span>
        ) : (
          tags.map(tag => (
            <CategoryButton
              key={tag}
              label={tag}
              onClick={() => onCategorySelect(tag)}
              isActive={activeCategory === tag}
            />
          ))
        )}
      </div>
      </div>

      <RightButton
        onClick={() => scrollByAmount(200)}
        disabled={!canScrollRight}
      />
    </div>
  );
}
