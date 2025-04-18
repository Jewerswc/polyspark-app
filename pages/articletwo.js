import React, { useState } from 'react';
import Header             from './ArticleHeader';
import UserProfileCard    from './ArticleHead';
import ArticleBody        from './ArticleBody';
import styles             from './article.module.css';
import SignupOverlay from './LoginOverlay';

export default function ArticlePage() {
  const [isSignupOverlayVisible, setSignupOverlayVisible] = useState(false);
  const openSignupOverlay = () => setSignupOverlayVisible(true);
  const closeSignupOverlay = () => setSignupOverlayVisible(false);
  const article = {
    avatarUrl: '/images/jane-doe.jpg',
    name:      'Jane Doe',
    date:      'April 17, 2025',
    subtitle:  'Why “self‑improving AI personas” still need human feedback',
    content: [
      {
        type:  'heading',
        level: 2,
        text:  'Kemi Badenoch and the Conservative Rebuild: A Stepping Stones Revival'
      },
      {
        type: 'paragraph',
        text: `In the wake of the Conservative Party's historic defeat in the 2024 general election, Kemi Badenoch's ascension to party leadership marked a pivotal moment. As the first Black woman to lead a major UK political party, Badenoch faces the formidable task of revitalizing a party grappling with internal divisions and a shifting political landscape.​`
      },
      {
        type:  'image',
        src:   'https://i.ytimg.com/vi/DXxy6hlWHx0/maxresdefault.jpg',
        alt:   'Paul Graham speaking on stage', 
        caption: 'Paul Graham delivering his “write code and talk to users” mantra.'
      },
      {
        type:  'heading',
        level: 3,
        text:  "A Strategic Reimagining Inspired by 'Stepping Stones'"
      },
      {
        type: 'paragraph',
        text: `Badenoch's approach to rebuilding the Conservative Party echoes the strategic foresight of Margaret Thatcher's era, particularly the influential 'Stepping Stones' report by Sir John Hoskyns and Norman Strauss. This 1977 report provided a comprehensive analysis of Britain's systemic challenges and laid the groundwork for Thatcher's transformative policies.​

Recognizing the need for a similar foundational strategy, Badenoch is undertaking a thorough policy review, emphasizing the importance of addressing the root causes of the party's decline. This deliberate approach aims to develop a coherent and compelling policy platform that resonates with a broad electorate.​`
      },
      {
        type:  'blockquote',
        text:  `The Conservative Party is under new leadership. 

From now on we are going to be telling the British people the truth even when it is difficult to hear. 

The truth about the mistakes we made. 

The truth about the problems we face. 

And the truth about the actions we must take to get our country out of this mess. "`,
        cite:  '— YCombinator'
      },

      {
        type: 'paragraph',
        text: `Central to Badenoch's leadership is her commitment to overhauling the Conservative Campaign Headquarters (CCHQ). In a candid article for ConservativeHome, she outlined plans to restructure CCHQ, focusing on enhancing its effectiveness and ensuring it serves the party's future needs.​

Collaborating with Co-Chairmen Nigel Huddleston and Dominic Johnson, Badenoch is initiating a series of consultations with party members to gather input on the desired direction for CCHQ. This inclusive approach aims to foster a sense of ownership among members and align the party's infrastructure with its renewed vision.​ Badenoch acknowledges the imperative to broaden the Conservative Party's appeal, particularly among younger voters. During a visit to a high school in Evesham, she emphasized the need to address issues pertinent to younger demographics, such as housing affordability and the impact of social media on education.​

By tackling these concerns head-on, Badenoch aims to dispel the perception of the Conservatives as a party catering solely to older constituents and to position the party as responsive to the aspirations of all age groups.​ Badenoch's leadership comes at a time when the Conservative Party faces challenges from both the Labour Party and Reform UK. Her strategy involves not only internal restructuring but also presenting a clear and principled alternative to the electorate. By focusing on substantive policy development and organizational reform, she seeks to reestablish the party's credibility and readiness to govern.​

In summary, Kemi Badenoch's leadership is characterized by a methodical and inclusive approach to rebuilding the Conservative Party. Drawing inspiration from historical strategies while addressing contemporary challenges, she is laying the groundwork for a revitalized party poised to reengage with the British public.​`
      },
 
    ]
  };
  

  return (
    <div className={styles.page}>
      <Header onSignupClick={openSignupOverlay} />

      <main className={styles.pageMain}>
        <UserProfileCard
          avatarUrl={article.avatarUrl}
          name={article.name}
          date={article.date}
          onNameClick={() => {}}
          onDateClick={() => {}}
        />


        <ArticleBody content={article.content} />
      </main>
       {isSignupOverlayVisible && (
              <SignupOverlay 
                onGoogleContinue={() => console.log("Google Continue")}
                onEmailContinue={(email) => console.log("Email submitted:", email)}
                onClose={closeSignupOverlay}
              />
            )}
    </div>
    
  );
}
