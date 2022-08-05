## 리액트 네이티브를 다루는 기술 3장

### 할일 목록 만들기I

- Satus Bar 색상 바꾸기

- iOS / Android 운영 체제에 따라 다른 결과 보여주기

- 이미지 불러오기

- 사용자 입력받기

- 커스텀 버튼 만들기

---

- 색깔 참고 : [Material Color](https://material.io/resources/color)

- Android의 경우, StatusBar를 import해서 status창의 색을 지정할 수 있지만, iOS의 경우 그렇게 하지 못해 `yarn add react-native-safe-area-context`를 사용 ( 참고 : [react-native-safe-area-context](https://github.com/th3rdwave/react-native-safe-area-context) )

  - 3rd party library 설치

  - `$ cd ios`

  - `$ pod install`

  - `$ cd ../`

  - `$ yarn ios`

  - `$ yarn android`

---

- iPhone 시뮬레이터 가능한 기기 확인

  - `$ xcrun simctl list devices`

- 특정 디바이스를 지정해 시뮬레이터 가동하기

  - `$ yarn react-native run-ios --simulator="iPhone 5s"`

> 안드로이드의 경우, Android Virtual Device Manager를 열어 'Create Virtual Device'버튼을 눌러 새 디바이스를 추가하면 됨

---

## 리액트 네이티브를 다루는 기술 4장

### 할일 목록 만들기II

- 배열에 데이터 추가, 삭제, 수정하기

- FlatList 컴포넌트 사용하기

- SVG 불러오기

- react-native-vector-icons로 아이콘 쉽게 사용하기

  - `$ yarn add react-native-vector-icons`

  - [아이콘 참고](https://oblador.github.io/react-native-vector-icons)

- useEffect Hook 함수 사용하기

- AsyncStorage로 앱이 꺼져도 데이터 유지하기

  - `$ yarn add @react-native-community/async-storage`
