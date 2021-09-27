import React from 'react';
import {View, Text} from 'react-native';
import Style from './style';

export default ({num = 0}) => {
  return (
    <View>
      <Text style={Style.fontG}>O resultado é:</Text>
      {num % 2 === 0 ? (
        <Text style={Style.fontG}>Par</Text>
      ) : (
        <Text style={Style.fontG}>Ímpar </Text>
      )}
    </View>
  );
};
