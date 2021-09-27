import React from 'react'
import {Text} from 'react-native'
import Style from './style'

export default ({min, max}) => {
  return (
    <Text style={Style.fontG}>
      O valor aleatório é {getRandomArbitrary(min, max)}
    </Text>
  )
}

function getRandomArbitrary (min, max) {
  return parseInt(Math.random() * (max - min) + min)
}
