import React from 'react';
import Style from '../style';
import Membro from './Membro';
import {Text} from 'react-native';

export default props => {
  return (
    <>
      <Text>[Início] Membros da Família:</Text>
      {props.children}
      <Text>[Fim] Membros da Família:</Text>
    </>
  );
};
