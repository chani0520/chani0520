import React, { useState } from 'react';
import styles from '../styles/Home.module.css';
import Link from 'next/link';
import CalendarComponent from '../components/CalendarComponent';

const calendar = () => {
  return (
    <div className={styles.main}>
      <h1 className='text-3xl font-bold text-center my-2'>
        Calendar Test page
      </h1>
      <Link href={'/'}>
        <a>
          <button className='p-1 m-2 bg-blue-400 rounded text-white'>
            Go Home
          </button>
        </a>
      </Link>
      <p className={styles.code}>src directory : /pages/calendar.tsx</p>

      <CalendarComponent />
    </div>
  );
};

export default calendar;
