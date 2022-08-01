import React from 'react';
import styles from '../styles/Home.module.css';
import Link from 'next/link';
import WebFontComponent from '../components/WebFontComponent';

const webfont = () => {
  return (
    <div className={styles.main}>
      <h1 className='text-3xl font-bold text-center my-2'>
        Web Font Test page
      </h1>
      <Link href={'/'}>
        <a>
          <button className='p-1 m-2 bg-blue-400 rounded text-white'>
            Go Home
          </button>
        </a>
      </Link>
      <p className={styles.code}>src directory : /pages/webfont.tsx</p>

      <WebFontComponent />
    </div>
  );
};

export default webfont;
