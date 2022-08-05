import React from 'react';
import {View, StyleSheet} from 'react-native';

function Box({rounded, size, color}) {
  // 여러개의 스타일을 지정하고 싶다면 아래처럼 배열을 사용하면 된다.
  return (
    <View
      style={[
        styles.box,
        rounded ? styles.rounded : null,
        sizes[size],
        {
          backgroundColor: color,
        },
      ]}
    />
  );
}

Box.defaultProps = {
  size: 'medium',
  color: 'black',
};

const styles = StyleSheet.create({
  box: {
    backgroundColor: 'black',
  },
  rounded: {
    borderRadius: 16,
  },
  small: {
    width: 32,
    height: 32,
  },
  medium: {
    width: 64,
    height: 64,
  },
  large: {
    width: 128,
    height: 128,
  },
});

// small, medium, large 스타일을 준비한 다음, 이 스타일들을 sizes라는 객체에 넣어둠
// 그리고 위에선, props.size 값을 받아와서 sizes[size]를 조회해 원하는 스타일을 선택
// ( 추가로 컴포넌트에 size Props가 설정되지 않았을 때는 기본값으로 medium을 사용하도록 defaultProps를 설정 )
const sizes = {
  small: styles.small,
  medium: styles.medium,
  large: styles.large,
};

export default Box;
