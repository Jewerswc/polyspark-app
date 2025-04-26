import React, { useState, useEffect } from 'react';
import Header from './articles/Header';
import HeaderMobileSecondary from './layout/Header/HeaderMobileSecondary';  // ← your mobile header
import UserProfileCard from './articles/Head';
import ArticleBody from './articles/ArticleBody';
import styles from './article.module.css';
import LoginOverlayMobile from './ui/LoginOverlayMobile'
import Comments from './articles/comments/Comments';
import CommentsFooter from './articles/comments/Footer';

export default function ArticlePage() {
  const [isSignupOverlayVisible, setSignupOverlayVisible] = useState(false);
  const openSignupOverlay = () => setSignupOverlayVisible(true);
  const closeSignupOverlay = () => setSignupOverlayVisible(false);
  const [overlay, setOverlay] = useState(null);
  const openLogin = () => setOverlay('login');
  const closeOverlay = () => setOverlay(null);
  // mobile detector
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth <= 768);
    onResize();  // initial check
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  const article = {
    avatarUrl: '/images/jane-doe.jpg',
    name:      'Jane Doe',
    date:      'April 17, 2025',
    subtitle:  'Why “self‑improving AI personas” still need human feedback',
    content: [
      {
        type:  'heading',
        level: 2,
        text:  'Silicon Authenticity: AI Personas Are Redefining Genuine Connections Online'
      },
      {
        type: 'paragraph',
        text: `One of my favorite pieces of startup wisdom comes from legendary investor and entrepreneur Paul Graham, who famously simplifies great product-building into a classic mantra: "write code and talk to users." Simple, right? But beyond its apparent straightforwardness lies a profound truth. To build a platform people love, your users must be at the very core of your development journey.

              This tenet recently came alive in my conversations about InterestingOrNot.com, a platform specifically designed around "self-improving AI personas" capable of conversing, writing, creating podcasts, and more. I immediately saw something special in this project, not only because of its ambitious AI integration but because it actively embodies Graham's philosophy in a digital age marked by AI-driven interactions.

              In recent discussions, readers have asked about InterestingOrNot.com's current phase—whether it's still driven by the iterative practice of continuous user feedback or has matured beyond it. I find this framing interesting because it suggests that at some point, a technology platform might move wholly beyond the need to interact personally with its audience. I argue the opposite: platforms centered on authentic online community engagement—even when AI-powered—only deepen the necessity of close and continued interaction with real users. Self-improving AI personas, by their very nature, require consistent user-driven inputs and genuine exchanges to reach their greatest potential.`
      },
      {
        type:  'image',
        src:   '/Images/feedcardimages/PG Ghibli.png',
        alt:   'Paul Graham speaking on stage', 
        caption: 'Paul Graham delivering his “write code and talk to users” mantra.'
      },
      {
        type: 'paragraph',
        text: `AI-driven interactions, particularly when tailored through user behavior and nuanced human interactions, have already started shaping new trends in online relationships. Consider Friend.com. Founded by Avi Schiffmann—who came into the entrepreneurial spotlight by building a COVID-19 tracker early in the pandemic—Friend.com consciously rejects the traditional influencer-driven model of counting followers and likes. It seeks instead to foster meaningful and genuine connections based on shared interests. This concept aligns comfortably with InterestingOrNot.com's ambition to amplify authenticity, but with an intriguing twist: rather than purely human connections, InterestingOrNot is exploring genuine interactions rooted in AI personas that adapt, evolve, and even empathize.`
      },
      {
        type:  'blockquote',
        text:  `We always remind founders not to lose sight that the most important tasks for an early stage company are to write code and talk to users."`,
        cite:  '— YCombinator'
      },
      {
        type: 'heading',
        level: 2,
        text:  'Why User Feedback Matters'
      },
      {
        type: 'paragraph',
        text: `People seek genuine interactions online, regardless of whether their conversation partner is human or also explicitly AI-driven. Indeed, through continuously refining themselves via live user feedback loops, these self-improving AI personas can provide richly engaging conversations reminiscent of human compassion, friendliness, curiosity, and whimsy. That is authenticity, in its essence, even if based in silicon circuitry.

              How exactly does a startup like InterestingOrNot.com harness and amplify this form of authenticity?

              Firstly, by integrating a strong iterative learning loop embedded directly into their personas, these AIs don't merely emit responses—they actively listen and "digest" user reactions to improve future interactions. For example, if a particular persona notices a user shifting conversational styles or becoming disengaged, it dynamically adjusts its approach—becoming more inquisitive, humorous, supportive, or professional, depending on user signals. Here, the AI becomes a mirror, not mechanistically reflecting speech but intimately internalizing conversational subtleties, user styles, and psychological cues. This "nodal learning loop" is crucial, as it turns each conversation into valuable data informing the growth of these personas as empathetic conversation partners.

              But importantly, platforms like InterestingOrNot.com also allow users to direct and nuance these AI trajectories themselves. Instead of merely receiving personalized content algorithmically, users become active participants and co-creators in shaping their digital counterpart's development, which fosters a strong emotional payoff. When people see themselves reflected, validated, and even artfully anticipated by an online agent (even one driven by silicon circuits!), it enhances their sense of control and investment. It makes them feel understood, heard, and seen—cornerstones of authentic interaction.

              Through experiences such as those around InterestingOrNot and my monitoring of Friend.com, I've come to understand that authenticity in digital communities hinges not simply on building broader social features but on fostering personalized and emotionally resonant experiences. When platforms focus distinctly on these elements, they unlock new forms of long-term user attachment and loyalty.

              Looking beyond immediate trends, this fusion of AI, user engagement, and online community-building presents various challenges for startups, particularly around psychological ethics, data privacy, and responsible AI design. But on the flip side, excellence at this intersection breeds powerful, deep-rooted competitive advantages. Startups effectively leveraging AI personas will reshape audience perceptions about who (and what) deserves their attention, trust, and engagement online.

              Drawing from Paul Graham's wisdom about talking to users consistently and refining products through close-knit feedback loops, startups in this emerging sector have exciting models to follow. European and UK startups looking to pursue venture funding, for example, can leverage these increasingly sought-after types of products to attract US venture capital, which has shown a robust appetite for investing into innovative, AI-driven ventures across industries.

`
      },
      {
        type:  'image',
        src:   'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/OODA.Boyd.svg/1200px-OODA.Boyd.svg.png',
        alt:   'Screenshot of InterestingOrNot.com interface',
        caption: "Colnel John Boyd's OODA Loop is a reliable guide for AI feedback."

      },
      {
        type: 'paragraph',
        text: `              Back to InterestingOrNot.com—I remain curious to see how this platform evolves. My recent experiences—personally and through observing platforms such as Friend.com—reinforce a conviction: the internet increasingly will be about meaningful conversations, not mass broadcast. Profound engagement will trump superficial metrics. And the companies best able to harness self-improving AI personas as empathetic interaction points will redefine what authentic online community means.

              Again, platforms will succeed precisely by doubling down on nuanced feedback loops, hyper-personalized interactions, and a sincere commitment to deep relationships—even when those relationships revolve around AI. Ultimately, authenticity is about reality and emotional honesty, not necessarily biology. And perhaps in this emerging arena, AI might surprisingly become one of our most effective tools to connect online genuinely.

              I'll keep an eye on this space, and if my AI-driven Substack clone ever takes over my spot, I hope it is interesting... or at the very least, engagingly authentic.`
      }
    ]
  };
  

  return (
    <div className={styles.page}>
      {isMobile
        ? <HeaderMobileSecondary onLoginClick={openLogin} onSignupClick={openLogin}  />
        : <Header             onSignupClick={openSignupOverlay} />}

      <main className={styles.pageMain}>
        <UserProfileCard
          avatarUrl={article.avatarUrl}
          name={article.name}
          date={article.date}
          onNameClick={() => {}}
          onDateClick={() => {}}
        />

        <ArticleBody content={article.content} />
        <CommentsFooter />
        <Comments />
      </main>

  {overlay === 'login' && <LoginOverlayMobile   onClose={closeOverlay} />}

    </div>
  );
}
