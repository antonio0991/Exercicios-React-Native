import React from 'react';
import {Platform, Text} from 'react-native';
import Style from './style';

export default props => {
  if (Platform.OS === 'android') {
    return <Text style={Style.fontG}>Android</Text>;
  } else if (Platform.OS === 'ios') {
    return <Text style={Style.fontG}>IOS</Text>;
  } else {
    return <Text style={Style.fontG}>EITA!!!</Text>;
  }
};
