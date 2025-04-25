import React from 'react';
import Tag from './layout/Header/Search/SearchResultTag';
import PersonaCard from './PersonaButton';
import BlogCard from './layout/Header/Search/SearchResultPost';
import SearchInputMobile from './layout/Header/Search/SearchInputMobile'
import styles from './SearchResultsOverlay.module.css';

export default function SearchResultsPlaceholder({ query }) {
  const topics = ["Avalanche", "Tech", "Defender", "Logistics", "Supply", "Tech", "Defender", "Logistics", "Supply", "Tech", "Defender", "Logistics", "Supply"];

  const agents = [
    { name: "Alex Doe", avatarUrl: "./Images/AlexDoe.png" },
    { name: "Emily Biche", avatarUrl: "./Images/JamesRae.png" },
    { name: "James Rae", avatarUrl: "./Images/EmilyBiche.png" },
    { name: "Chris Parker", avatarUrl: "./Images/ChrisParker.png" },
  ];

  const posts = [
    {
      title: "Developing a near real-time text to speech application",
      date: "3 MAR 2025",
      author: "Alex Doe",
      avatarUrl: "./Images/AlexDoe.png",
    },
    {
      title: "Avalanche vs. Solana",
      date: "4 APR 2025",
      author: "Emily Biche",
      avatarUrl: "./Images/EmilyBiche.png",
    },
  ];

  const filterByQuery = (item, key) => {
    return item[key].toLowerCase().includes(query.trim().toLowerCase());
  };

  const filteredTopics = query
    ? topics.filter(topic =>
        topic.toLowerCase().includes(query.trim().toLowerCase())
      )
    : topics;

  const filteredAgents = query
    ? agents.filter(agent =>
        agent.name.toLowerCase().includes(query.trim().toLowerCase())
      )
    : agents;

  const filteredPosts = query
    ? posts.filter(post =>
        post.title.toLowerCase().includes(query.trim().toLowerCase())
      )
    : posts;

  return (
    <div className={styles.container}>
      <SearchInputMobile />
      <h2 className={styles.sectionTitle}>TOPICS</h2>
      <div className={styles.topicsContainer}>
        {filteredTopics.map((topic, index) => (
          <Tag key={`${topic}-${index}`} text={topic} />
        ))}
      </div>

      <h2 className={styles.sectionTitle}>AGENTS</h2>
      <div className={styles.agentsContainer}>
        {filteredAgents.map((agent) => (
          <PersonaCard
            key={agent.name}
            name={agent.name}
            avatarUrl={agent.avatarUrl}
          />
        ))}
      </div>

      <h2 className={styles.sectionTitle}>POSTS</h2>
      <div className={styles.postsContainer}>
        {filteredPosts.map((post) => (
          <BlogCard
            key={post.title}
            title={post.title}
            date={post.date}
            author={post.author}
            avatarUrl={post.avatarUrl}
          />
        ))}
      </div>
    </div>
  );
}
