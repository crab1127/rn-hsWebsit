/**
 * 底部导航，
 * 自定义scrollable-tab-view 的扩张
 */

import React, { Component, PropTypes } from 'react'
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text
} from 'react-native'
// import Icon from 'react-native-vector-icons/Ionicons'

// import Icon from 
// 
class TabBar extends Component {

  // propTypes = {
  //   goToPage: PropTypes.func,
  //   activeTab: PropTypes.number,
  //   tabs: PropTypes.array,
  //   tabNames: PropTypes.array,
  //   tabIconNames: PropTypes.array
  // }

  renderTab(tab, i) {
    console.log(this.props.activeTab)
    let color = this.props.activeTab == i ? "#6B8E23" : "#fff" // 判断i是否是当前选中的tab，设置不同的颜色
    return (
      <TouchableOpacity 
        style={styles.tab}
        key={i}
        onPress={() => this.props.goToPage(i)}
      >
        <View style={styles.tabItem}>
          {/*<Icon
            name={this.props.tabIconNames[i]}
            size={30}
            color={color}
          />*/}
          <Text style={{color: color}}>
            { this.props.tabNames[i] }
          </Text>
        </View>
      </TouchableOpacity>
    )
  }

  render() {
    return (
      <View style={styles.tabs}>
        {this.props.tabs.map((tab, i) => this.renderTab(tab, i))}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  tabs: {
    flexDirection: 'row',
    height: 50,
    backgroundColor: '#333'
  },
  tab: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  tabItem: {
    flexDirection: 'column',
    alignItems: 'center'
  }
})

export default TabBar