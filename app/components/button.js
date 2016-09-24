/**
 * 按钮
 */

import React, { Component, PropTypes } from 'react'
import {
  View,
  Text,
  TouchableOpacity
} from 'react-native'

const propTypes = {
  onPress: PropTypes.func,
  disabled: PropTypes.bool,
  text: PropTypes.string,
  activeOpacity: PropTypes.number
};

const Button = ({onPress, disabled, style, textStyle, text, activeOpacity}) => (
  <TouchableOpacity
    style={style}
    onPress={onPress}
    disabled={disabled}
    activeOpacity={activeOpacity}
  >
    <Text style={textStyle}>
      {text}
    </Text>
  </TouchableOpacity>
)
Button.propTypes = propTypes

Button.defaultProps = {
  onPress() {},
  disabled: false,
  activeOpacity: 0.8,
}

export default Button