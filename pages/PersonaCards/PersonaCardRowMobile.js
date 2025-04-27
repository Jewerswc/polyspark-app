import React from 'react';
import PersonaCard from './PersonaCardMobile';
import styles from './PersonaCardRowMobile.module.css';

export default function PersonaCardRowMobile({ onChatClick }) {
  const personas = [
    {
      name: "Alex Doe",
      description: "Meet our expert in python coding, libraries, and projects",
      image: "./Images/profileimages/AlexDoe.png",
      gradientStart: "#9010FF",
      gradientEnd: "#C989FF",
      chatButtonColor: "#5700A3",
    },
    {
      name: "James Rae",
      description: "Our startup fanatic, an expert in startups and venture capital",
      image: "./Images/profileimages/JamesRae.png",
      gradientStart: "#EE7F00",
      gradientEnd: "#F9B466",
      chatButtonColor: "#A25701",
    },
    {
      name: "Emily Biche",
      description: "The Cryptocurrency expert, Emily is all about Crypto",
      image: "./Images/profileimages/EmilyBiche.png",
      gradientStart: "#58BE0A",
      gradientEnd: "#BEFF8D",
      chatButtonColor: "#489B08",
    },
    {
      name: "Chris Parker",
      description: "Say ‘hello’ to our expert on all things British politics",
      image: "./Images/profileimages/ChrisParker.jpeg",
      gradientStart: "#009DFF",
      gradientEnd: "#A0D6F9",
      chatButtonColor: "#0A6299",
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
              onChatClick={() => onChatClick(persona.name)}
              style={{ width }}
            />
          );
        })}
      </div>
    </div>
  );
}