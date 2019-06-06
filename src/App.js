import React from 'react';
import { View, Text, Platform } from 'react-native';

const App = () => (
  <View>
    <Text>its working</Text>
  </View>
);

let hotWrapper = () => () => App;
if (Platform.OS === 'web') {
  const { hot } = require('react-hot-loader');
  hotWrapper = hot;
}
export default hotWrapper(module)(App);
