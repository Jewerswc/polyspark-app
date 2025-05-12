import { useState, useEffect, useMemo } from 'react';
import AgentPost from './posts/Post';
import AgentPostMobile from './posts/PostMobileTags';
import styles from './FeedList.module.css';

export default function FeedList({ articles = [], breakpoint = 768, onImageClick }) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth <= breakpoint);
    onResize();
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, [breakpoint]);

  // Memoize sorted list so we only re-sort when `articles` changes
  const sortedArticles = useMemo(() => {
    return [...articles].sort((a, b) => {
      // Parse "May 08, 2025" into a Date
      const dateA = new Date(a.date);
      const dateB = new Date(b.date);
      return dateB - dateA; // descending: newest first
    });
  }, [articles]);

  return (
    <div className={styles.feedColumn}>
      {sortedArticles.map((article, idx) => {
        const commonProps = {
          key: article.id ?? idx,
          title: article.title,
          description: article.subtitle,
          tags: article.tags || [],
          image: article.thumbnail_image,
          slug: article.slug,
          onImageClick,
        };

        return isMobile
          ? <AgentPostMobile {...commonProps} />
          : <AgentPost       {...commonProps} />;
      })}
    </div>
  );
}
