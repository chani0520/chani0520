import React, { useReducer } from 'react';

/**
 *
 * @param {현재(기존)상태} state
 * @param {업데이트를 위해 필요한 정보를 담은 객체} action
 * @returns 업데이트된 새로운 상태
 */
function reducer(state, action) {
  // action.type에 따라 다른 작업 수행
  switch (action.type) {
    case 'INCREMENT':
      return { value: state.value + 1 };

    case 'DECREMENT':
      return { value: state.value - 1 };

    default:
      // 아무것도 해당되지 않을 때 기존 상태 반환
      return state;
  }
}

const Counter = () => {
  /**
   * reducer : 리듀서 함수
   * {value: 0} : 해당 리듀서의 기본 값
   *
   * ** useReducer를 사용했을때의 장점 -> component 업데이트 로직을 컴포넌트 바깥으로 빼낼 수 있다는 것!!!
   */
  const [state, dispatch] = useReducer(reducer, { value: 0 });

  return (
    <div>
      <div>🌈 useReducer example 🌈</div>
      <p>
        현재 카운터 값은 <b>{state.value}</b>
      </p>
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>+1</button>
      <button onClick={() => dispatch({ type: 'DECREMENT' })}>-1</button>
    </div>
  );
};

export default Counter;
