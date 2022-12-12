import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useSession } from 'next-auth/react';
import axios from 'axios';

const SignUp = () => {
  const { data: session, status } = useSession();
  const router = useRouter();

  console.log('session :', session);
  console.log('status :', status);

  //! TODO : 존재하는 회원인지 확인

  useEffect(() => {
    const isNewUser = true;
    if (!isNewUser) {
      router.push('/login');
    }
  }, [router]);

  return (
    <div className='container w-1/2 mx-auto text-center'>
      <p>naver or kakao signup page</p>
      <button
        className='px-4 border border-gray-500 rounded'
        onClick={() => router.push('/login')}
      >
        {'/login 페이지로'}
      </button>
    </div>
  );
};

export default SignUp;
