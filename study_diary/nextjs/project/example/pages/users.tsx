import React from 'react';
import axios from 'axios';
import styles from '../styles/Home.module.css';
import Link from 'next/link';

const Users = ({ users }: any) => {
  return (
    <div className={styles.main}>
      <h1 className='text-3xl font-bold text-center my-2'>Users page</h1>
      <Link href={'/'}>
        <a>
          <button className='p-1 m-2 bg-blue-400 rounded text-white'>
            Go Home
          </button>
        </a>
      </Link>
      <p className={styles.code}>directory : /pages/users.tsx</p>
      <ul className='text-center pt-5'>
        {users.map((user: any) => (
          <li key={user.id}>
            {user.name} : {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
};

/**
 * `getInitialProps`
 *
 * - 서버사이드 렌더링을 하는 경우에는 컴포넌트에서 사전에 불러와야 할 데이터가 있다.
 *  ( react의 경우 useEffect를 사용하여 데이터를 불러올수 있다. )
 *
 * - nextjs에서는 `getInitialProps`를 사용하여 data를 가져오지만, next v9이상에서는 `getInitialProps`대신 `getStaticProps` & `getStaticPaths` & `getServerSideProps`를
 *   사용하도록 가이드하고 있다.
 */

// 🌈 getInitialProps version 🌈
// Users.getInitialProps = async () => {
//   const { data: users } = await axios.get(
//     'https://jsonplaceholder.typicode.com/users'
//   );

//   console.log('🔸 data loaded!');
//   return { users };
// };

// 🌈 getStaticProps version 🌈
export async function getStaticProps() {
  // Call an external API endpoint to get users.
  // You can use any data fetching library
  const { data: users } = await axios(
    'https://jsonplaceholder.typicode.com/users'
  );
  console.log('🔸 data loaded!');

  // By returning { props: { users } }, the Users component
  // will receive `users` as a prop at build time
  return {
    props: {
      users,
    },
  };
}

export default Users;
