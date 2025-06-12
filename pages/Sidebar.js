// components/TermsSidebar.jsx
import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from './Terms.module.css';

export default function TermsSidebar() {
  const { pathname } = useRouter();
  const isTerms   = pathname === '/terms';
  const isPrivacy = pathname === '/privacy';

  return (
    <aside className={styles.tpSidebar}>
      <ul className={styles.tpTabList}>
        <li
          className={`${styles.tpTabItem} ${isTerms   ? styles.selected : ''}`}
        >
          <Link href="/terms" className={styles.tpTabLink}>
            Terms of Use
          </Link>
        </li>
        <li
          className={`${styles.tpTabItem} ${isPrivacy ? styles.selected : ''}`}
        >
          <Link href="/privacy" className={styles.tpTabLink}>
            Privacy Policy
          </Link>
        </li>
      </ul>
    </aside>
  );
}
