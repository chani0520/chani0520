// import React from 'react';
// import styles from '../styles/Home.module.css';
// import Link from 'next/link';
// import PDFViewerComponent from '../components/PDFViewerComponent';

// const pdfviewer = () => {
//   return (
//     <div className={styles.main}>
//       <h1 className='text-3xl font-bold text-center my-2'>
//         PDF Viewer Test page
//       </h1>
//       <Link href={'/'}>
//         <a>
//           <button className='p-1 m-2 bg-blue-400 rounded text-white'>
//             Go Home
//           </button>
//         </a>
//       </Link>
//       <p className={styles.code}>src directory : /pages/pdfviewer.tsx</p>

//       <PDFViewerComponent />
//     </div>
//   );
// };

// export default pdfviewer;

import dynamic from 'next/dynamic';

const PDFViewerComponent = dynamic(
  () => import('../components/PDFViewerComponent'),
  {
    ssr: false,
  }
);

export default function pefviewer() {
  return <PDFViewerComponent />;
}
