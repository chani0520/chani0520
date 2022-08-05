import React from 'react';
import {View, Text} from 'react-native';

// Greeting이라는 함수 컴포넌트
function Greeting(props) {
  return (
    <>
      <View>
        <Text>안녕하세요 {props.name}!</Text>
      </View>
      <Text>Extra Text!</Text>
    </>
  );
}

Greeting.defaultProps = {
  name: 'Chan',
};

// 함수로 선언한 컴포넌트에서는 이와 같이 XML형태로 이루어진 내용을 반환해줘야 한다.
export default Greeting;
