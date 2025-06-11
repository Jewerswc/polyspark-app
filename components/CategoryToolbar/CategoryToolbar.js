import React, { useState, useEffect, useRef } from 'react';
import CategoryLabelMobile from './components/TopButton/Top';
import CategoryButton from './components/CategoryButton/CategoryButton';
import RightButton from './RightButton';
import LeftButton from './LeftButton'
import styles from './CategoryToolbar.module.css';

const TRENDING = 'Top';
const NEW      = 'New';

export default function CategoryToolbar({
  activeCategory,
  onCategorySelect,
  selectedTag,   
  onRemoveTag,   
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
    fetch(`https://ionbackend.com/api/content/search/?q=&type=tags`)
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
      {canScrollLeft && (
        <LeftButton
          onClick={() => scrollByAmount(-200)}
          disabled={!canScrollLeft}
          className={styles.flipped}
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



          {/* Always show Trending/New, clearing selectedTag if clicked */}
          <CategoryLabelMobile
            label="Trending"
            onClick={() => {
              if (selectedTag) onRemoveTag();
              onCategorySelect(TRENDING);
            }}
            isActive={activeCategory === TRENDING && !selectedTag}
          />
          <CategoryButton
            label="Latest"
            onClick={() => {
              if (selectedTag) onRemoveTag();
              onCategorySelect(NEW);
            }}
            isActive={activeCategory === NEW && !selectedTag}
          />
          {/* ===== Render selectedTag pill if present ===== */}
          {selectedTag && (
            <button
              className={`${styles.categoryButton} ${styles.active}`}
              onClick={() => {
                // maybe re-apply, but usually no-op
              }}
              style={{ position: 'relative', paddingRight: '24px' }} // ensure space for the ×
            >
              <span>{selectedTag}</span>
              <span
                className={styles.removeTagIcon}
                onClick={(e) => {
                  e.stopPropagation();
                  onRemoveTag();
                }}
    
              >
                &times;
              </span>
            </button>
          )}
          {loading ? (
            <span className={styles.loading}></span>
          ) : (
            tags.map(tag => (
              <CategoryButton
                key={tag}
                label={tag}
                onClick={() => {
                  if (selectedTag) onRemoveTag();
                  onCategorySelect(tag);
                }}
                isActive={activeCategory === tag && !selectedTag}
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