import React from 'react';
import style from '../styles/font.module.css';

const htmlData = (
  <div className='border-t-2 container mx-auto w-2/3'>
    <div className='text-center'>WebFont 테스트 중입니다...</div>

    <hr />

    <h1 className='font-bold'>WebFont?</h1>
    <p>
      방문자의 로컬 컴퓨터에 폰트 설치 여부와 상관 없이 온라인의 특정 서버에
      위치한 폰트 파일을 다운로드하여 화면에 표시해주는 웹 전용 폰트입니다.
    </p>

    <hr />

    <p>안녕하세요!</p>

    <ul className='text-center'>
      <li>사과</li>
      <li>오렌지</li>
      <li>딸기</li>
      <li>수박</li>
      <li>귤</li>
    </ul>
  </div>
);

const WebFontComponent = () => {
  return (
    <>
      <hr className='m-5 w-full' />
      <div className={style.docu}>{htmlData}</div>
      <hr className='m-5 w-full' />
    </>
  );
};

export default WebFontComponent;
