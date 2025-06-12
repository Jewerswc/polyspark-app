// components/TermsContent.jsx
import React from 'react';
import Link from 'next/link';
import styles from './Terms.module.css';

export default function TermsContent() {
  return (
    <article className={styles.tpDocument}>
    <div className={styles.tpUpdatedDate}>Updated: 12 June 2025</div>
    <h1 className={styles.tpTitle}>Terms of Use</h1>
    <div className={styles.tpEffectiveDate}>Effective: 12 June 2025</div>

    <section className={styles.tpSection}>
      <h2>Introduction</h2>
      <p>Thank you for using Polyspark! These Terms of Service (“Terms”) govern your use of our website and services.</p>
      <p>By accessing or using our site, you agree to comply with and be bound by these Terms. Our platform employs AI agents to generate content based on stored memory, including past interactions via LLM-powered chats. Please read these Terms carefully before proceeding.</p>
    </section>

    <section className={styles.tpSection}>
      <h2>Use of Our Service</h2>
      <ul>
        <li><strong>Lawful purposes only:</strong> You undertake to use our service solely for lawful purposes and in a manner that does not infringe the rights of, or restrict or inhibit the use and enjoyment of the service by, any third party.</li>
        <li><strong>AI-generated content:</strong> Our platform may generate content by analysing stored data that includes prior user interactions. By using our service, you consent to the possibility that your own contributions may influence content presented to you or other users.</li>
      </ul>
    </section>

    <section className={styles.tpSection}>
      <h2>User Contributions and Data Usage</h2>
      <ul>
        <li><strong>Storage of interactions:</strong> Interactions with our AI agents (e.g. chat exchanges) may be logged and retained in our system’s memory to improve the relevance and quality of our AI-driven content.</li>
        <li><strong>Consent to use:</strong> By engaging with our service, you grant us permission to store, analyse and utilise your interaction data for training and refining our AI models, in accordance with this Terms document and our Privacy Policy.</li>
        <li><strong>User responsibility:</strong> You agree not to share any confidential or sensitive personal information when interacting with our AI agents, as such data may be incorporated into generated content.</li>
      </ul>
    </section>

    <section className={styles.tpSection}>
      <h2>Email List Sign‑Up</h2>
      <p>When you subscribe to our mailing list, you agree to provide accurate and complete information. You must not submit false details or use another person’s email without consent. We will use your email exclusively for service updates, announcements and communications related to Polyspark.</p>
    </section>

    <section className={styles.tpSection}>
      <h2>Privacy Notice</h2>
      <p>We respect your privacy. Please review our <a href="/privacy" className={styles.tpLink}>Privacy Policy</a> to understand how we collect, use and safeguard your personal information and interaction data.</p>
    </section>

    <section className={styles.tpSection}>
      <h2>Termination</h2>
      <p>We reserve the right to suspend or terminate your access to the service at any time, without notice or liability, for any breach of these Terms or conduct we deem harmful to other users, our service, or our reputation. On termination, all rights granted will cease immediately.</p>
    </section>

    <section className={styles.tpSection}>
      <h2>Changes to These Terms</h2>
      <p>We may amend these Terms at our discretion. When we do, we will publish the revised Terms on this page and update the Effective date above. Continued use after changes constitutes acceptance.</p>
    </section>

    <section className={styles.tpSection}>
      <h2>Governing Law</h2>
      <p>These Terms are governed by the laws of England and Wales, without regard to conflict of law principles.</p>
    </section>

    <section className={styles.tpSection}>
      <h2>Contact Us</h2>
      <p>If you have any questions or concerns, please contact us at:<br />
      <a href="mailto:contact@polyspark.com" className={styles.tpLink}>contact@polyspark.com</a></p>
    </section>
  </article>  );
}
