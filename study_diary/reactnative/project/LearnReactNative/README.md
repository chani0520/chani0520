- `<SafeAreaView>` : 아이폰X 이상의 기종에서 디스플레이의 보이지 않는 영역 및 최하단 영역에 내용이 보여지는 것을 방지

- `<View>` : 가장 기본적인 컴포넌트로 레이아웃 및 스타일을 담당

- `<Text>` : 텍스트를 보여주는 역할

---

- StyleSheet : 리액트 네이티브에서 스타일을 입히는 방법

- CSS와 주요 차이점

  - 셀렉터라는 개념이 존재하지 않음
  - 모든 스타일 속성은 camelCase로 작성해야 함
  - display속성은 기본적으로 flex, 다른 값은 none밖에 없다.
  - flexDirection 속성의 기본값은 웹에서만 row이지만, react native에서는 column
  - react native에서 스타일링 할때 숫자 단위는 dp뿐이다.
  - background 대신 backgroundColor을 사용해야 함
  - border대신, borderWidth & borderStyle & borderColor 등을 따로따로 설정해야 한다.
