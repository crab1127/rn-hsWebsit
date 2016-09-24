import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
} from 'react-native'
import ScrollableTabView, { ScrollableTabBar, DefaultTabBar } from 'react-native-scrollable-tab-view'

import TabBar from '../components/tabBar'

//views
import Index from './index'
import Precontract from './precontract'

class Layout extends Component {
  constructor(props) {
    super(props)
    this.state = {
      tabNames: ['首页', '预约', '电话'],
      tabIconNames: ['ios-paper', 'ios-albums', 'ios-paper-plane'],
    }
  }

  render() {
    const tabNames = this.state.tabNames
    const tabIconNames = this.state.tabIconNames
    const {navigator, route} = this.props
    return(
      <ScrollableTabView
        style={{marginTop: 20, }}
        tabBarPosition='bottom'
        renderTabBar={() => <TabBar tabNames={tabNames} tabIconNames={tabIconNames} />}
      >
        <Index tabLabel='首页' navigator={navigator} route={route}/>
        <Precontract tabLabel='预约' />
        <View><Text> 电话</Text></View>
      </ScrollableTabView>
    )
  }
}
export default Layout