import React, { useCallback, useMemo, useRef, useState } from 'react';

const getAverage = (numbers) => {
  console.log('평균값 계산 중...');

  if (numbers.length === 0) return 0;

  const sum = numbers.reduce((acc, cur) => acc + cur, 0);

  return sum / numbers.length;
};

const Average = () => {
  const [list, setList] = useState([]);
  const [number, setNumber] = useState('');
  const inputEl = useRef(null);

  // useCallback 적용 전
  // const onChange = (e) => {
  //   setNumber(e.target.value);
  // };

  // useCallback 적용 후
  const onChange = useCallback((e) => {
    setNumber(e.target.value);
  }, []); // -> []를 추가함으로서 컴포넌트가 처음 렌더링 될때에만 함수를 생성

  // useCallback 적용 전
  // const onInsert = (e) => {
  //   const nextList = list.concat(parseInt(number));
  //   setList(nextList);

  //   setNumber('');
  // };

  // useCallback 적용 후
  const onInsert = useCallback(
    (e) => {
      const nextList = list.concat(parseInt(number));
      setList(nextList);

      setNumber('');

      inputEl.current.focus();
    },
    [number, list] // number 혹은 list가 변경되었을 때에만 함수를 생성
  );

  // useMemo의 두번째 인자인 [list]가 변경될때에만, getAverage(list)함수가 호출된다. (!! list는 위의 onInsert()함수가 호출될때만 변경됨. 즉 '등록'버튼을 눌렀을때만 작동한다! )
  const avg = useMemo(() => getAverage(list), [list]);

  return (
    <div>
      <div>🌈 useMemo & useCallback & useRef example 🌈</div>
      <input value={number} onChange={onChange} ref={inputEl} />
      <button onClick={onInsert}>등록</button>
      <ul>
        {list &&
          list.map((value, index) => {
            return <li key={index}>{value}</li>;
          })}
      </ul>

      <div>
        <b>평균값 :</b> {avg}
      </div>
    </div>
  );
};

export default Average;
