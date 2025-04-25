// src/components/FeedList/FeedList.jsx
import { useState, useEffect } from 'react';
import feedCards from './Feedcard/feedcards.json';
import AgentPost from './agent/posts/Post';             // desktop version
import AgentPostMobile from './agent/posts/PostMobileTags'; // mobile version
import styles from './FeedList.module.css';

export default function FeedList({ breakpoint = 768 }) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth <= breakpoint);
    onResize();
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, [breakpoint]);

  return (
    <div className={styles.feedColumn}>
      {feedCards.map((card, idx) => {
        const CommonProps = {
          key: idx,
          title: card.title,
          description: card.description,
          tags: card.tags,
          image: card.image,
        };

        return isMobile
          ? <AgentPostMobile {...CommonProps} />
          : <AgentPost       {...CommonProps} />;
      })}
    </div>
  );
}
