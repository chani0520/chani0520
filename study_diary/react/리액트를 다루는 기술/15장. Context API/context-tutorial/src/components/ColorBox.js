import React, { useContext } from 'react';
import ColorContext from '../contexts/color';

const ColorBox = () => {
  const { state } = useContext(ColorContext);

  return (
    /* 
      Consumer사이에 중괄호를 열어서 그 안에 함수를 넣음
      -> 이와 같은 패턴을 'Function as a child' or 'Render Props'라고 한다.
      ( 컴포넌트의 children이 있어야할 자리에, 일반 JSX혹은 문자열이 아닌 함수를 전달 )
    */
    <>
      <div
        style={{
          width: '64px',
          height: '64px',
          background: state.color,
        }}
      />
      <div
        style={{
          width: '32px',
          height: '32px',
          background: state.subcolor,
        }}
      />
    </>
  );
};

export default ColorBox;
