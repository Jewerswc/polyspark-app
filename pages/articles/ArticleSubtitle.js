
import React from 'react';
import styles from './ArticleSubtitle.module.css';

export default function FeedCardTitle({ onClick }) {
  return (
<button className={styles.articleTitle} onClick={onClick}>
  What makes online interactions truly authentic? How do self-improving AI personas embody Paul Graham&rsquo;s timeless wisdom—&lsquo;write code and talk to users&rsquo;? And why is human nuance the secret ingredient for reshaping digital communities?
</button>

  );
}
