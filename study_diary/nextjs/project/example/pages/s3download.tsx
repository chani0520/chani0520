import Link from 'next/link';
import styles from '../styles/Home.module.css';
import React from 'react';
import S3Download from '../components/S3Download';

const s3download = () => {
  return (
    <div className={styles.main}>
      <h1 className='text-3xl font-bold text-center my-2'>S3 Download Test</h1>
      <Link href={'/'}>
        <a>
          <button className='p-1 m-2 bg-blue-400 rounded text-white'>
            Go Home
          </button>
        </a>
      </Link>
      <p className={styles.code}>src directory : /pages/s3download.tsx</p>

      <S3Download />
    </div>
  );
};

export default s3download;
