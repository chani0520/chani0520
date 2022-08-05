import React, { useState } from 'react';
import axios, { AxiosResponse } from 'axios';
import styles from '../styles/Home.module.css';
import Link from 'next/link';

const Apitest = ({ data }: AxiosResponse) => {
  const [value, setValue] = useState('');

  const onClick = async () => {
    const res = await axios.get('http://localhost:4000/');

    console.log(res);
    setValue(await res.data);
  };

  return (
    <div className={styles.main}>
      <h1 className='text-3xl font-bold text-center my-2'>Api Test page</h1>
      <p>( Next.js(3000port) {'<->'} Nest.js(4000port) )</p>
      <Link href={'/'}>
        <a>
          <button className='p-1 m-2 bg-blue-400 rounded text-white'>
            Go Home
          </button>
        </a>
      </Link>
      <p className={styles.code}>src directory : /pages/apitest.tsx</p>

      <div className='py-2'>
        <p>
          from &ldquo;getStaticProps&rdquo; {' => '}{' '}
          <span className='font-bold'>{data}</span>
        </p>

        <div className='py-2'>
          <hr />
        </div>

        <p>
          from &ldquo;onClick event&rdquo; {' => '}{' '}
          <button
            className='bg-gray-400 text-white rounded p-1'
            onClick={() => {
              onClick();
            }}
          >
            click
          </button>{' '}
          {' => '}
          <span className='font-bold'>{value}</span>
        </p>
      </div>
    </div>
  );
};

/**
 * 🔸 getStaticProps() 🔸
 * If you export a function called getStaticProps (Static Site Generation) from a page,
 * Next.js will pre-render this page at build time using the props returned by getStaticProps.
 *
 * - 사용해야 할때?
 *  1) 해당 페이지를 랜더링하는데 필요한 특정 데이터가 유저의 요청보다 먼저(앞서) 빌드 시점에 필요로 할때
 *  2) headless CMS로부터 데이터를 받을때
 *  3) public하게 캐시될수 있는 데이터 일때
 *  4) 페이지가 반드시 먼저 랜더링(pre-render)(SEO를 위해)되어야 하고, 매우 빨라야 할때.
 *     ( getStaticProps는 HTML과 JSON파일을 생성 ) 성능을 위해 CDN에 캐시될수 있는것 처럼...
 *     - JSON파일은 클라이언트 사이드의 라우팅을 위해 이용되어짐 ( next/link or next/router을 통해 )
 *     - 빌드 시점에 getStaticProps()를 통해 만들어진 HTML & JSON, 그 안에는 이 함수를 수행한 뒤 받은 결과들을 가지고 있는데,
 *       사용자가 페이지간 이동을 할때 위의 빌드시점에 미리 계산된 데이터들이 사용되어진다.
 *       즉, 페이지 전환이 일어날때 이 함수가 호출된다는 것이 아니라, pre-computed & exported JSON이 사용된다는 뜻.
 *
 * - 언제 실행되나?
 *  1) getStaticProps()는 only 서버에서 실행되고, 절대 클라이언트측에서 실행되지 않는다.
 *  2) 이는 브라우저의 JS bundle에 포함되지 않기 때문에 DB query를 브라우저에 보내는것 없이 바로 작성할 수 있다.
 *     -> 서버사이드 코드를 본 함수 안에 바로 작성할 수 있다는 것을 의미
 *
 * 참고 : https://nextjs.org/docs/basic-features/data-fetching/get-static-props
 */
export async function getStaticProps() {
  const res = await axios.get('http://localhost:4000/');
  const data = await res.data;
  console.log(res);

  return {
    props: { data },
  };
}

export default Apitest;
