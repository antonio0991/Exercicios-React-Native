import React, {useState} from 'react';
import {View, Text} from 'react-native';
import Style from '../style';
import Filho from './Filho';

export default props => {
  const [num, setNum] = useState(0);
  const [texto, setTexto] = useState('');

  function exibirValor(numero, texto) {
    setNum(numero);
    setTexto(texto);
  }

  return (
    <>
      <Text style={Style.fontG}>
        {texto}
        {num}
      </Text>
      <Filho min={1} max={60} funcao={exibirValor} />
    </>
  );
};
