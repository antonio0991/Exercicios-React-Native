import React from 'react';
import {View, StyleSheet} from 'react-native';

import Quadrado from './Quadrado';

export default props => {
  return (
    <View style={style.FlexV3}>
      <Quadrado cor="orange" lado={20} />
      <Quadrado cor="#900" lado={30} />
      <Quadrado cor="#090" lado={40} />
      <Quadrado cor="#009" lado={50} />
      <Quadrado cor="pink" lado={60} />
    </View>
  );
};

const style = StyleSheet.create({
  FlexV3: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'baseline',
    height: 300,
    width: '100%',
    backgroundColor: '#000',
  },
});
