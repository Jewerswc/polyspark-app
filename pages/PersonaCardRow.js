import React from 'react';
import PersonaCard from './PersonaCard';
import styles from './PersonaCardRow.module.css';

export default function PersonaCardsRow({ onChatClick }) {
  // Define data for each persona including a unique button color:
  const personas = [
    {
      name: "Alex Doe",
      description: "Meet our expert in python coding, libraries, and projects",
      image: "AlexDoe.png",
      gradientStart: "#9010FF",
      gradientEnd: "#C989FF",
      chatButtonColor: "#5700A3", // Unique button color for Alex
    },
    {
      name: "James Rae",
      description: "Our startup fanatic, an expert in startups and venture capital",
      image: "JamesRae.png",
      gradientStart: "#EE7F00",
      gradientEnd: "#F9B466",
      chatButtonColor: "#A25701", // Unique button color for Jordan
    },
    {
      name: "Emily Biche",
      description: "The Cryptocurrency expert, Emily is all about Crypto",
      image: "EmilyBiche.png",
      gradientStart: "#58BE0A",
      gradientEnd: "#BEFF8D",
      chatButtonColor: "#489B08", // Unique button color for Casey
    },
    {
      name: "Chris Parker",
      description: "Say ‘hello’ to our expert on all things British politics",
      image: "ChrisParker.jpeg",
      gradientStart: "#009DFF",
      gradientEnd: "#A0D6F9",
      chatButtonColor: "#0A6299", // Unique button color for Morgan
    },
  ];

  return (
    <div className={styles.cardsWrapper}>
    <div className={styles.cardsContainer}>

      {personas.map((persona, index) => (
        <PersonaCard
          key={index}
          name={persona.name}
          description={persona.description}
          image={persona.image}
          gradientStart={persona.gradientStart}
          gradientEnd={persona.gradientEnd}
          chatButtonColor={persona.chatButtonColor} // Pass the unique color here
          onChatClick={() => onChatClick(persona.name)}
        />
      ))}
    </div>
    </div>
  );
}
