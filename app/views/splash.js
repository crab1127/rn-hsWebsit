/**
 * 入场动画
 */

import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  Text,
  Animated,
  Dimensions
} from 'react-native'

const winH = Dimensions.get('window').height
const winW = Dimensions.get('window').width
const splashImg = require('../img/splash.png');

class Splash extends Component {
  constructor(props) {
    super(props)
    this.state = {
      bounceValue: new Animated.Value(1)
    }
  }

  componentDidMount() {
    Animated.timing(
      this.state.bounceValue,
      {
        toValue: 1.1,
        duration: 1000
      }
    ).start()
  }

  render() {
    return (
      <Animated.Image
        style={{width: winW, height: winH, transform: [{ scale: this.state.bounceValue}]}}
        source={splashImg}
      />
    )
  }
}

export default Splash