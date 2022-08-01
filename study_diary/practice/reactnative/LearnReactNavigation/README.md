## 리액트 네이티브를 다루는 기술 5장

- `??` : nullish 병합 연산자 ( 연산자 좌측의 값이 `null` or `undefined`라면 우측의 값으로 설정 )

- 일반적으로 '네이티브 스택 네비게이터'와 '하단 탭 네비게이터'를 조합해서 많이 사용한다.

---

- `useNavigation` : Screen으로 사용되고 있지 않은 컴포넌트에서도 navigation객체를 사용할 수 있다. ( useNavigation을 사용하면 navigation을 상위 컴포넌트에서 Props로 넣어주지 않아도 사용할 수 있다. )

- `useRoute` : useNavigation과 비슷하게, Screen이 아닌 컴포넌트에서 route객체를 사용할 수 있게 한다.

- `useFocusEffect` : 화면에 포커스가 잡혔을 때 특정 작업을 할 수 있게 하는 Hook ( 다른 화면을 열었다가 돌아왔을 때 특정 작업을 하고 싶다면 사용, 또 현재 화면에서 다른 화면으로 넘어갈 때 특정 작업을 하고 싶다면 `useFocusEffect`에서 함수를 만들어 반환하면 됨, `useFocusEffect는` 꼭 `useCallback`과 같이 사용해야 한다. 만약 `useCallback`을 사용하지 않으면 컴포넌트가 리렌더링 될때마다 `useFocusEffect`에 등록된 함수가 호출된 것)

- 참고 : [리액트네비게이션](https://reactnavigation.org)
