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

import Swiper from 'react-native-swiper'

import NavigatorBar from '../components/navigatorBar'
import Button from '../components/button'

class SelectCart extends Component {
  render() {
    const { navigator } = this.props
    return (
      <View style={{flex:1, backgroundColor: '#fff',marginTop:20}}>
        <NavigatorBar navigator={navigator} back={true} title="豪华车专修连锁"/>
        <Swiper height={150} style={{backgroundColor: '#f4f4f4'}}>
          <View>
            <Text>宝马</Text>
          </View>
          <View>
            <Text>奔驰</Text>
          </View>
          <View>
            <Text>奥迪</Text>
          </View>
        </Swiper>
        <View style={styles.input_group}>
          <View style={styles.input_label}>
            <Text>车型</Text>
          </View> 
          <View style={styles.input_control}>
            <Text>请选择车型</Text>
          </View> 
          <View style={styles.input_icon}>
            <Image />
          </View> 
        </View>
        <View style={styles.input_group}>
          <View style={styles.input_label}>
            <Text>排量</Text>
          </View> 
          <View style={styles.input_control}>
            <Text>请选择排量</Text>
          </View> 
          <View style={styles.input_icon}>
            <Image />
          </View> 
        </View>
        <View style={styles.button}>
        <Button
          
          text='确定'
        />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  input_group: {
    flexDirection: 'row',
    padding: 15,
    borderBottomWidth:1,
    borderBottomColor: '#eee',
    justifyContent: 'center',
    alignItems: 'center'
  },
  input_label: {
    width: 60
  },
  input_icon: {
    width: 50,
  },
  input_control: {
    flex: 1,
    height: 35,
    borderRightColor: '#eee',
    borderRightWidth: 1,
    justifyContent: 'center',
  },
  button: {
    margin: 50,
    height: 50
  }
})

export default SelectCart