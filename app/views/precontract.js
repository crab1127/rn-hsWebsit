import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
  TextInput
} from 'react-native'

import NavigatorBar from '../components/navigatorBar'
import Button from '../components/button'

class Precontract extends Component {
  constructor(props) {
    super(props)
    console.log('precontract', '~~~~~~~~~~~~start~~~~~~~~')
  }
  render() {
    return (
      <View>
        <NavigatorBar title='华胜豪华车专修连锁' />
        <View style={[styles.input_group, {borderBottomWidth: 0}]}>
          <Text style={[styles.input_label, {width: 100}]}>您的预约时间</Text>
          <View style={styles.input_control}></View>
        </View>
        <View style={styles.space10}/>
        <View style={styles.input_group}>
          <Text style={styles.input_label}>您的名字</Text>
          <TextInput 
            style={styles.input_control}
            onChangeText={text => this.setState({
              name: text
            })}
            placeholder='请填写您的名字'
          />
          <View style={styles.vh_line}/>
          <Image style={styles.input_icon} />
        </View>
        <View style={styles.input_group}>
          <Text style={styles.input_label}>手机号</Text>
          <TextInput 
            style={styles.input_control}
            onChangeText={text => this.setState({
              name: text
            })}
            placeholder='请填写手机号'
          />
          <View style={styles.vh_line}/>
          <Image style={styles.input_icon} />
        </View>
        <View style={styles.input_group}>
          <Text style={styles.input_label}>车牌号</Text>
          <TextInput 
            style={styles.input_control}
            onChangeText={text => this.setState({
              name: text
            })}
            placeholder='请填写车牌号'
          />
          <View style={styles.vh_line}/>
          <Image style={styles.input_icon} />
        </View>
        <View style={styles.space10} />
        <View style={styles.input_group}>
          <Text style={styles.input_label}>分店</Text>
          <TextInput 
            style={styles.input_control}
            onChangeText={text => this.setState({
              name: text
            })}
            placeholder='请选择分店'
          />
          <View style={styles.vh_line}/>
          <Image style={styles.input_icon} />
        </View>
        <View style={{margin: 30}}>
          <Button
            style={styles.button}
            textStyle={styles.buttonText}
            text="确认预约"
          />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  space10: {
    height: 10,
    backgroundColor: '#f4f4f4'
  },
  input_group: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth:1,
    borderBottomColor: '#eee',
    padding: 8,
  },
  input_label: {
    width: 80,
    color: '#666'
  },
  input_control: {
    flex:1,
  },
  input_icon: {
    width: 30,
    height: 30
  },
  vh_line: {
    width: 1,
    height: 20,
    backgroundColor: '#ddd'
  },
  button: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#36c',
    height: 40,
    borderRadius: 5
  },
  buttonText: {
    color: '#fff'
  }
})

export default Precontract