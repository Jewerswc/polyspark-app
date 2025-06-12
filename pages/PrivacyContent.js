import { useRouter } from 'next/router';
import styles from './Terms.module.css';

export default function PrivacyContent() {
  return (
    <article className={styles.tpDocument}>
      <div className={styles.tpUpdatedDate}>Updated: 12 June 2025</div>
      <h1 className={styles.tpTitle}>Privacy Policy</h1>
      <div className={styles.tpEffectiveDate}>Effective: 12 June 2025</div>

      <section className={styles.tpSection}>
        <h2>Introduction</h2>
        <p>This Privacy Policy explains how Polyspark (&ldquo;we&rdquo;, &ldquo;us&rdquo; or &ldquo;our&rdquo;) collects, uses, discloses and protects information when you use our website and services, including interactions with our AI agents. By engaging with our service, you consent to the practices described herein.</p>
      </section>

      <section className={styles.tpSection}>
        <h2>Information We Collect</h2>
        <ul>
          <li><strong>Personal information:</strong> Details you provide when registering or subscribing, such as name and email address.</li>
          <li><strong>Interaction data:</strong> Chat logs and other exchanges with our AI agents may be recorded to improve our models and service performance.</li>
          <li><strong>Usage data:</strong> Technical details such as IP address, browser type, pages visited and duration of visits.</li>
          <li><strong>Cookies and tracking technologies:</strong> We use cookies, local storage and similar mechanisms to remember preferences and analyse usage. You can manage cookie settings via your browser, though disabling cookies may limit functionality.</li>
        </ul>
      </section>

      <section className={styles.tpSection}>
        <h2>How We Use Information</h2>
        <ul>
          <li><strong>To provide and maintain the service:</strong> We use your information to operate, maintain and improve our offerings, including powering AI-driven features.</li>
          <li><strong>To improve AI models:</strong> Interaction data (in anonymised or aggregated form) may be used to train and refine our AI, enhancing accuracy and performance.</li>
          <li><strong>Communications:</strong> We may send you service-related messages, newsletters or notifications if you have opted in.</li>
          <li><strong>Security and fraud prevention:</strong> We use data to detect, prevent and address security threats, technical issues and fraudulent activity.</li>
        </ul>
      </section>

      <section className={styles.tpSection}>
        <h2>Data Sharing and Disclosure</h2>
        <ul>
          <li><strong>Service providers:</strong> We may share information with vendors who help us provide the service (e.g. hosting, analytics). They are contractually obligated to protect your data.</li>
          <li><strong>Legal requirements:</strong> We may disclose information if required by law, regulation or legal process, or to protect rights, property or safety.</li>
          <li><strong>Business transfers:</strong> If we are involved in a merger, acquisition or asset sale, your information may be transferred subject to confidentiality obligations.</li>
          <li><strong>Aggregated/anonymised data:</strong> We may share non-identifiable, aggregated information that cannot reasonably be used to identify any individual.</li>
        </ul>
      </section>

      <section className={styles.tpSection}>
        <h2>Data Retention</h2>
        <p>We retain personal information and interaction data only as long as necessary to fulfil the purposes outlined in this policy, unless a longer period is required or permitted by law.</p>
      </section>

      <section className={styles.tpSection}>
        <h2>Your Choices</h2>
        <ul>
          <li><strong>Access, correction and deletion:</strong> You may review, update or delete your personal information by contacting us.</li>
          <li><strong>Cookies:</strong> You can configure your browser to refuse cookies or alert you when cookies are set. Note that disabling cookies may impair certain features.</li>
          <li><strong>Opt-out of marketing:</strong> You can unsubscribe from marketing communications at any time by following the instructions in those messages.</li>
        </ul>
      </section>

      <section className={styles.tpSection}>
        <h2>Security</h2>
        <p>We implement reasonable technical and organisational measures to protect your data. However, no method of transmission or storage is completely secure; we cannot guarantee absolute security.</p>
      </section>

      <section className={styles.tpSection}>
        <h2>Children&rsquo;s Privacy</h2>
        <p>Our service is not directed at individuals under 13 years old. We do not knowingly collect personal data from children. If you believe we have inadvertently collected such data, please contact us to request its deletion.</p>
      </section>

      <section className={styles.tpSection}>
        <h2>International Transfers</h2>
        <p>If you access our service from outside the UK, your data may be transferred to, stored and processed in countries other than your own. By using the service, you consent to such transfers.</p>
      </section>

      <section className={styles.tpSection}>
        <h2>Changes to This Policy</h2>
        <p>We may update this Privacy Policy periodically. When we do, we will post the revised policy on this page and update the &quot;Updated&quot; and &quot;Effective&quot; dates. Continued use after changes indicates acceptance.</p>
      </section>

      <section className={styles.tpSection}>
        <h2>Contact Us</h2>
        <p>If you have any questions about this Privacy Policy, please contact us at:<br />
        <a href="mailto:privacy@polyspark.com" className={styles.tpLink}>privacy@polyspark.com</a></p>
      </section>
    </article>
  );
}