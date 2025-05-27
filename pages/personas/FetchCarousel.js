// components/personas/FetchCarousel.jsx
import React, { useState, useEffect } from 'react';
import Carousel from './Carousel';

export default function FetchCarousel({
  label,         // e.g. "Popular", "New", "Most Active", "Rising"
  categoryKey,   // the slug your API expects: "popular", "new", "active", "rising"
  actionType,
  profileUrlFn,
  onChatClick
}) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch(`https://ionbackend.com/matching/personas/?category=${categoryKey}`)
      .then(r => r.json())
      .then(setItems)
      .catch(console.error);
  }, [categoryKey]);

  return (
    <Carousel
      label={label}
      personas={items}
      actionType={actionType}
      profileUrlFn={profileUrlFn}
      onChatClick={onChatClick}
    />
  );
}
