// src/components/FeedList/FeedList.jsx
import { useState, useEffect } from 'react';
import feedCards from './../Feedcard/feedcards.json';
import AgentPost from './posts/Post';             // desktop version
import AgentPostMobile from './posts/PostMobileTags'; // mobile version
import styles from './FeedList.module.css';

export default function FeedList({ articles = [], breakpoint = 768 }) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth <= breakpoint);
    onResize();
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, [breakpoint]);

  return (
    <div className={styles.feedColumn}>
      {articles.map((article, idx) => {
        const CommonProps = {
          key: article.id ?? idx,
          title: article.title,
           description: article.subtitle,
          tags: article.tags || [],       
          image: article.thumbnail_image,
          slug: article.slug,
        };

        return isMobile
          ? <AgentPostMobile {...CommonProps} />
          : <AgentPost       {...CommonProps} />;
      })}
    </div>
  );
}
