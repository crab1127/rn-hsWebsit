/**
 * 按钮
 */

import React, { Component, PropTypes } from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet
} from 'react-native'

const propTypes = {
  onPress: PropTypes.func,
  disabled: PropTypes.bool,
  text: PropTypes.string,
  activeOpacity: PropTypes.number
};
const styles = StyleSheet.create({
  button: {
    // flex: 1,
    backgroundColor: '#36c',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5
  },
  button_text: {
    color: '#fff',
    fontSize: 20,
  }
})

const Button = ({onPress, disabled, style, textStyle, text, activeOpacity}) => (
  <TouchableOpacity
    style={[styles.button, style]}
    onPress={onPress}
    disabled={disabled}
    activeOpacity={activeOpacity}
  >
    <Text style={[styles.button_text, textStyle]}>
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