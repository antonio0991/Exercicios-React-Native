import React from 'react';
import {View, StyleSheet} from 'react-native';

import Quadrado from './Quadrado';

export default props => {
  return (
    <View style={style.FlexV1}>
      <Quadrado cor="orange" />
      <Quadrado cor="#900" />
      <Quadrado cor="#090" />
      <Quadrado cor="#009" />
    </View>
  );
};

const style = StyleSheet.create({
  FlexV1: {
    backgroundColor: '#000',
    justifyContent: 'space-evenly',
    flexGrow: 1,
  },
});
