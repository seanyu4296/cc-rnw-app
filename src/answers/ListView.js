import React from 'react';
import { View, Text } from 'react-native';

const ListView = ({ arr }) => {
  return (
    <View>
      {arr.map((v) => {
        return <Text>{v}</Text>;
      })}
    </View>
  );
};

export default ListView;
