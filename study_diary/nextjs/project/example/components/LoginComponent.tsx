import React from 'react';
import { useSession, signIn, signOut } from 'next-auth/react';

const LoginComponent = () => {
  const { data, status } = useSession();

  return (
    <div className='container w-2/3 text-center'>
      <hr className='my-5' />
      <div>
        <div>
          이름 : <b>{data?.user?.name}</b>
        </div>
        <div>
          이메일 : <b>{data?.user?.email}</b>
        </div>
        <div>
          Provider : <b>{data && data.provider ? data.provider : ''}</b>
        </div>
        <div>
          ProviderAccId :{' '}
          <b>{data && data.providerAccountId ? data.providerAccountId : ''}</b>
        </div>
        <div>
          인증상태 : <b>{status}</b>
        </div>
        <div>
          access_token : <b>{data ? data.accessToken : ''}</b>
        </div>
      </div>
      <hr className='my-5' />
      {data ? (
        <div className='flex justify-center'>
          <div>
            <button
              className='m-2 border-2 border-red-500 rounded-xl p-5'
              onClick={() => signOut()}
            >
              로그아웃
            </button>
          </div>
          <div>
            <button
              className='m-2 border-2 border-red-500 rounded-xl p-5'
              onClick={() => signOut()}
            >
              탈퇴 ( 탈퇴기능은 아직 구현 안함 )
            </button>
          </div>
        </div>
      ) : (
        <div className='flex justify-center'>
          <div>
            <button
              className='m-2 border-2 border-emerald-500 rounded-xl p-5'
              onClick={() => signIn('naver')}
            >
              네이버 로그인
            </button>
          </div>
          <div>
            <button
              className='m-2 border-2 border-yellow-300 rounded-xl p-5'
              onClick={() => signIn('kakao')}
            >
              카카오 로그인
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default LoginComponent;
