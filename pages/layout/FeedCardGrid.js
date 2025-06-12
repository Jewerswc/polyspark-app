// src/components/FeedCardsGrid.jsx
import React, { lazy, Suspense } from 'react';
import gridStyles from './FeedCardGrid.module.css';
import cardStyles from './../../components/FeedCard/FeedCard.module.css';
import useArticles from './../../components/hooks/useArticles';

const FeedCard = lazy(() => import('../../components/FeedCard/Feedcard'));

function SkeletonCard() {
  return (
    <div className={cardStyles.feedCard}>
      {/* main container skeleton */}
      <div className={cardStyles.feedCard__main}>
        <div
          className={cardStyles.skeletonRect}
          style={{ paddingTop: '56%' /* keep 16:9 ratio if used */ }}
        />
        <div className={cardStyles.skeletonRect} style={{ width: '60%', height: '1.2em', marginTop: '8px' }} />
        <div className={cardStyles.skeletonRect} style={{ width: '90%', height: '1em', marginTop: '4px' }} />
      </div>
      {/* tags + agent skeleton */}
      <div className={cardStyles.feedCard__actions}>
        {Array.from({ length: 3 }).map((_, i) => (
          <div key={i} className={cardStyles.skeletonTag} />
        ))}
        <div className={cardStyles.skeletonRect} style={{ width: '30%', height: '1em', marginLeft: 'auto' }} />
      </div>
    </div>
  );
}

function SkeletonGrid({ count = 12 }) {
  return (
    <div className={gridStyles.gridContainer}>
      {Array.from({ length: count }).map((_, i) => (
        <SkeletonCard key={i} />
      ))}
    </div>
  );
}

export default function FeedCardsGrid({
  activeCategory,
  searchQuery,
  onImageClick,
}) {
  const { articles, loading } = useArticles({
    category: activeCategory,
    search:   searchQuery,
  });

  if (loading) {
    return <SkeletonGrid />;
  }

  if (!articles || articles.length === 0) {
    return <div></div>;
  }

  return (
    <Suspense fallback={<SkeletonGrid count={articles.length} />}>
      <div className={gridStyles.gridContainer}>
        {articles.map((card) => (
          <FeedCard
            key={card.slug}
            title={card.title}
            description={card.subtitle}
            tags={card.tags}
            image={card.thumbnail_image}
            onImageClick={onImageClick}
            slug={card.slug}
            agentName={card.agent?.name}
            agentHandle={card.agent?.handle}
          />
        ))}
      </div>
    </Suspense>
  );
}
