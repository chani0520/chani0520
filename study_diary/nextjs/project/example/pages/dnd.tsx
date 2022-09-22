import Link from 'next/link';
import React from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import DndComponent from '../components/DndComponent';
import styles from '../styles/Home.module.css';

const dnd = () => {
  return (
    <div className={styles.main}>
      <h1 className='text-3xl font-bold text-center my-2'>
        Drag and Drop Test page
      </h1>
      <Link href={'/'}>
        <a>
          <button className='p-1 m-2 bg-blue-400 rounded text-white'>
            Go Home
          </button>
        </a>
      </Link>
      <p className={styles.code}>src directory : /pages/dnd.tsx</p>

      {/* <DndProvider backend={HTML5Backend}> */}
      <DndComponent />
      {/* </DndProvider> */}
    </div>
  );
};

export default dnd;
