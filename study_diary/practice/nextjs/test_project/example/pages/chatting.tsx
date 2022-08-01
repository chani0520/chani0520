import React from 'react';
import styles from '../styles/Home.module.css';
import Link from 'next/link';
import ChattingInnerHeader from '../components/chatting/ChattingInnerHeader';
import ChattingInnerContents from '../components/chatting/ChattingInnerContents';

const chatting = () => {
  return (
    <>
      {/* Main Header */}
      <div className='text-center'>
        <h1 className='text-3xl font-bold text-center my-2'>Chatting page</h1>
        <Link href={'/'}>
          <a>
            <button className='p-1 m-2 bg-blue-400 rounded text-white'>
              Go Home
            </button>
          </a>
        </Link>
        <p className={styles.code}>directory : /pages/chatting.tsx</p>
      </div>

      {/* Chatting Detail */}
      <div className='fixed w-1/2 h-[80%] left-1/2 translate-x-[-50%]'>
        {/* Header */}
        <ChattingInnerHeader />

        {/* Chatting content */}
        <ChattingInnerContents />
      </div>
    </>
  );
};

export default chatting;
