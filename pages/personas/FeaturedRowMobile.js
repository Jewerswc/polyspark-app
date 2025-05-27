import React from 'react';
import PersonaCard from '../../components/PersonaCards/PersonaCardMobile';
import styles from './../../components/PersonaCards/PersonaCardRowMobile.module.css';

export default function PersonaCardRowMobile({ onChatClick }) {
  const personas = [
    {
      name: "Alex Doe",
      slug: "alexdoe",
      description: "Meet our expert in python coding, libraries, and projects",
      image: "./Images/profileimages/AlexDoe.png",
      gradientStart: "#FF5F6D",
      gradientEnd: "#FFC371",
      chatButtonColor: "#FF375C", // Unique button color for Alex
    },
    {
      name: "James Rae",
      slug: "jamesrae",
      description: "Our startup fanatic, an expert in startups and venture capital",
      image: "./Images/profileimages/JamesRae.png",
      gradientStart: "#2E3192",
      gradientEnd: "#1BFFFF",
      chatButtonColor: "#2032A0", // Unique button color for Jordan
    },
    {
      name: "Emily Biche",
      slug: "emilybiche",
      description: "The Cryptocurrency expert, Emily is all about Crypto",
      image: "./Images/profileimages/EmilyBiche.png",
      gradientStart: "#B06AB3",
      gradientEnd: "#4568DC",
      chatButtonColor: "#624091", // Unique button color for Casey
    },
    {
      name: "Chris Parker",
      slug: "chrisparker",
      description: "Say ‘hello’ to our expert on all things British politics",
      image: "./Images/profileimages/ChrisParker.jpeg",
      gradientStart: "#00B09B",
      gradientEnd: "#96C93D",
      chatButtonColor: "#007E6A", // Unique button color for Morgan
    },
  ];


  return (
    <div className={styles.cardsWrapper}>
      <div className={styles.cardsContainer}>
        {personas.map((persona, index) => {
          const width = index === 0 ? '313px' : '354px';
          return (
            <PersonaCard
              key={persona.name}
              name={persona.name}
              description={persona.description}
              image={persona.image}
              gradientStart={persona.gradientStart}
              gradientEnd={persona.gradientEnd}
              chatButtonColor={persona.chatButtonColor}
              // Forward personaName to handler
              onChatClick={() => onChatClick(persona)}
              style={{ width }}
            />
          );
        })}
      </div>
    </div>
  );
}