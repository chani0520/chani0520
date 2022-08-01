import React from 'react';
import styles from '../styles/Home.module.css';
import Link from 'next/link';

const aos = () => {
  return (
    <div className={styles.main}>
      <h1 className='text-3xl font-bold text-center my-2'>AOS Test page</h1>
      <Link href={'/'}>
        <a>
          <button className='p-1 m-2 bg-blue-400 rounded text-white'>
            Go Home
          </button>
        </a>
      </Link>
      <p className={styles.code}>src directory : /pages/aos.tsx</p>
      <div className={styles.grid}>
        <a
          href='https://nextjs.org/docs'
          className={styles.card}
          data-aos='fade-right'
          data-aos-delay='1300'
        >
          <h2>Documentation &rarr;</h2>
          <p>Find in-depth information about Next.js features and API.</p>
        </a>

        <a
          href='https://nextjs.org/learn'
          className={styles.card}
          data-aos='fade-left'
          data-aos-delay='1400'
        >
          <h2>Learn &rarr;</h2>
          <p>Learn about Next.js in an interactive course with quizzes!</p>
        </a>

        <a
          href='https://github.com/vercel/next.js/tree/canary/examples'
          className={styles.card}
          data-aos='fade-right'
          data-aos-delay='1500'
        >
          <h2>Examples &rarr;</h2>
          <p>Discover and deploy boilerplate example Next.js projects.</p>
        </a>

        <a
          href='https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
          className={styles.card}
          data-aos='fade-left'
          data-aos-delay='1600'
        >
          <h2>Deploy &rarr;</h2>
          <p>Instantly deploy your Next.js site to a public URL with Vercel.</p>
        </a>
      </div>
    </div>
  );
};

export default aos;
