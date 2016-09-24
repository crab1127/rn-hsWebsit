/**
 * 启动页
 * 组装 数据流
 */

import React, { Component } from 'react'
import {
  StyleSheet,
  Navigator,
  StatusBar,
  BackAndroid,
  View,
  Text
} from 'react-native'
import { Provider } from 'react-redux'

// import store from './redux'
import App from './views/main'

export default () => (
  // <Provider store={store}>
    <App />
  // </Provider>
)
