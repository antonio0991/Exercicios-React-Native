import React from 'react';
import {View, StyleSheet} from 'react-native';

import Quadrado from './Quadrado';

export default props => {
  return (
    <View style={style.FlexV2}>
      <Quadrado cor="orange" />
      <Quadrado cor="#900" />
      <Quadrado cor="#090" />
      <Quadrado cor="#009" />
      <Quadrado cor="pink" />
    </View>
  );
};

const style = StyleSheet.create({
  FlexV2: {
    flex: 1,
    width: '100%',
    alignItems: 'flex-end',
    backgroundColor: '#000',
    justifyContent: 'space-between',
  },
});
