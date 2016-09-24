import React, { Component } from 'react'
import {
  StyleSheet,
  Navigator,
  StatusBar,
  BackAndroid,
  View,
  Text
} from 'react-native'

import Splash from './splash'
import Layout from './layout'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isBoostrap: false
    }
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        isBoostrap: true
      })
      console.log(2, this.state.isBoostrap)
    }, 1000)
  }

  renderScene(route, navigator) {
    const Component = route.component
    return <Component navigator={navigator} route={route} />
  }

  render() {
    console.log(1, this.state.isBoostrap)
    if (!this.state.isBoostrap) {
      return <Splash />
    }
    return (
      <Navigator
        style={{flex: 1}}
        initialRoute={{
          component: Layout,
          name: 'Layout'
        }}
        renderScene={this.renderScene}
      />
    )
  }
}

export default App