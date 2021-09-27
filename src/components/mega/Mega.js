import React, { Component } from 'react';
import { Text, TextInput, Button, View } from 'react-native';
import Style from '../style';

import MegaNumero from './MegaNumero';

export default class Mega extends React.Component {
  state = {
    qtdNum: this.props.qtdNum,
    numeros: [],
  };

  setQtdNum = qtdNumeros => {
    this.setState({ qtdNum: +qtdNumeros });
  };

  gerarNumeroNaoContido = nums => {
    const novoNum = parseInt(Math.random() * 60) + 1;
    return nums.includes(novoNum) ? this.gerarNumeroNaoContido(nums) : novoNum;
  };

  // gerarNumeros = () => {
  //   const numeros = Array(this.state.qtdNum)
  //     .fill()
  //     .reduce(nums => [...nums, this.gerarNumeroNaoContido(nums)], [])
  //     .sort((a, b) => a - b);
  //   this.setState({numeros});
  // };

  gerarNumeros = () => {
    const { qtdNum } = this.state;
    const numeros = [];

    for (let i = 0; i < qtdNum; i++) {
      numeros.push(this.gerarNumeroNaoContido(numeros));
    }

    numeros.sort((a, b) => a - b);
    this.setState({ numeros });
  };

  exibirNumeros = () => {
    const nums = this.state.numeros;
    return nums.map(num => {
      return <MegaNumero key={num} num={num} />;
    });
  };

  render() {
    return (
      <>
        <Text style={Style.fontG}>Gerador de Mega-Sena</Text>
        <TextInput
          keyboardType={'numeric'}
          style={{ borderBottomWidth: 1, marginBottom: 20 }}
          placeholder="Qtd de Númerops"
          value={this.state.qtdNum}
          onChangeText={this.setQtdNum}
        />
        <Button title="Gerar" onPress={this.gerarNumeros} />
        <View
          style={{
            marginTop: 20,
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'center',
          }}>
          {this.exibirNumeros()}
        </View>
      </>
    );
  }
}
