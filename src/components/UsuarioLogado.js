import React from 'react';
import {View, Text} from 'react-native';
import Style from './style';
import If from './If';

export default props => {
  const usuario = props.usuario || {};
  return (
    <>
      <If teste={usuario && usuario.nome && usuario.email}>
        <Text style={Style.fontG}>Usuário Logado:</Text>
        <Text style={Style.fontG}>
          {usuario.nome} - {usuario.email}
        </Text>
      </If>
    </>
  );
};
