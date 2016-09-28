import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  ListView,
  Image,
  TouchableOpacity,
  Dimensions
} from 'react-native'

import NavigatorBar from '../components/navigatorBar'

class Content extends Component {
  render() {
    const { navigator } = this.props
    return (
      <View style={{flex:1, backgroundColor: '#fff',marginTop:20}}>
        <NavigatorBar navigator={navigator} back={true} title="豪华车专修连锁"/>
        
      </View>
    )
  }
}

const styles = StyleSheet.create({

})

export default Content