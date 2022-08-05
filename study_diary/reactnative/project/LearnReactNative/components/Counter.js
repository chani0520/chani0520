import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

const Counter = ({count, onIncrease, onDecrease}) => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.numberArea}>
        <Text style={styles.number}>{count}</Text>
      </View>
      <Button title="+1" onPress={onIncrease} />
      <Button title="-1" onPress={onDecrease} />
    </View>
  );
};

Counter.defaultProps = {
  count: 0,
};

const styles = StyleSheet.create({
  // Counter 컴포넌트 최상단의 View에 flex: 1 스타일 설정 => 해당 View가 차지할 수 있는 모든 영역 차지
  wrapper: {
    flex: 1,
  },

  // 여기도 flex: 1 을 부여함으로서 하단의 Button 컴포넌트가 차지하고 있는 영역을 제외하고 모든 영역을 차지
  numberArea: {
    flex: 1,
    alignItems: 'center', // 가로 정렬
    justifyContent: 'center', // 세로 정렬
  },

  number: {
    fontSize: 72,
    fontWeight: 'bold',
  },
});

export default Counter;
