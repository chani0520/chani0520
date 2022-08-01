import React, {useState} from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
// import Greeting from './components/Greeting';
// import Box from './components/Box';
import Counter from './components/Counter';

const App = () => {
  const name = 'Chan';
  const [visible, setVisible] = useState(true);
  const onPress = () => {
    setVisible(!visible);
  };

  const [count, setCount] = useState(0);
  const onIncrease = () => setCount(count + 1);
  const onDecrease = () => setCount(count - 1);

  return (
    <SafeAreaView style={styles.full}>
      {/* 주석은 이렇게 작성! */}
      {/* <Greeting name="Props" /> */}
      {/* <Greeting
        name={name} // 주석은 이렇게도 작성 가능!
      /> */}

      {/* <Button title="토글" onPress={onPress} /> */}

      {/* <Box rounded /> 는 아래와 동일하다, Boolean타입의 경우 이처럼 이름만 적어주면, 이값을 true로 설정 */}
      {/* {visible && <Box rounded={true} size="large" color="blue" />} */}

      <Counter count={count} onIncrease={onIncrease} onDecrease={onDecrease} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  full: {
    flex: 1,
  },
});

export default App;
