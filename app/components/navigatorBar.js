/**
 * 顶部导航条
 */

import React, { Component, PropTypes } from 'react'
import {
  StyleSheet,
  View,
  Text
} from 'react-native'

import SelectCity from '../views/selectCity'

class NavigatorBar extends Component {
  onPressBack() {
    this.props.navigator.pop()
  }
  selectCity() {
    this.props.navigator.push({
      component: SelectCity,
      name: 'SelectCity'
    }) 
  }

  render() {
    console.log('navBar -> ', this.props)
    return (
      <View style={styles.bar}>
        {
          !this.props.back
            ? (<View style={styles.left}><Text onPress={() => this.selectCity()}>广州市</Text></View>)
            : (<View style={styles.left}><Text onPress={() => this.onPressBack()}>返回</Text></View>)
        }
        <View style={styles.title}><Text style={styles.title_text}>{this.props.title}</Text></View>
        <View style={styles.right}><Text>消息</Text></View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  bar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    height: 50,
  },
  title: {
    flex: 1
  },
  title_text: {
    textAlign: 'center',
    color: '#333',
    fontSize: 20
  },
  left: {
    marginLeft: 8
  },
  right: {
    marginRight: 8
  }
})

export default NavigatorBar