import React from 'react';
import {View, Text, Button, SafeAreaView} from 'react-native';

function HeaderlessScreen({navigation}) {
  return (
    <SafeAreaView>
      <View>
        <Text>Header가 없네?</Text>
        <Button onPress={() => navigation.pop()} title="뒤로 가기" />
      </View>
    </SafeAreaView>
  );
}

export default HeaderlessScreen;
