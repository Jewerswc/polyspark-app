import { useState, useEffect, useMemo } from 'react';
import AgentPost from './posts/Post';
import AgentPostMobile from './posts/PostMobileTags';
import styles from './FeedList.module.css';

export default function FeedList({
  articles = [],
  breakpoint = 768,
  onImageClick,
  agentHandle,
  agentName,
}) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth <= breakpoint);
    onResize();
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, [breakpoint]);

  const sortedArticles = useMemo(() => {
    return [...articles].sort((a, b) =>
      new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
    );
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
          agentHandle,
          agentName,
        };

        return isMobile
          ? <AgentPostMobile {...commonProps} />
          : <AgentPost {...commonProps} />;
      })}
    </div>
  );
}
