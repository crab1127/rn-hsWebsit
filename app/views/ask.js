import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  ListView,
  TextInput,
  Image,
  TouchableOpacity,
  Dimensions
} from 'react-native'

import NavigatorBar from '../components/navigatorBar'

const width = Dimensions.get('window').width

class Content extends Component {
  constructor(props) {
    super(props)
    this.state = {
      message: '汽车坏了怎么办',
      historyList: [{message: '第一个问题'}]
    }
    console.log('ask')
  }

  send() {
    if (!this.state.message) return;
    const msg = this.state.message
    const historyList = Object.assign([], this.state.historyList)
    historyList.push({message: msg})
    this.setState({
      message: '',
      historyList: historyList
    })
  }

  renderMeAsk(item, i) {
    // if (!this.state.historyList.length) return;
    
    // const vies = this.state.historyList.map((item, i) => {
      return (
        <View key={i} style={[styles.ask_item, styles.ask_me]}>
          <View style={styles.ask_content}>
            <Text>我</Text>
            <View style={styles.ask_content_wrap}>
              <Text>{item.message}</Text>
            </View>
          </View>
          <Image style={styles.head_img} />
        </View>
      )
    // })
    // console.log({vies})
    // return ({vies})
    
  }
  render() {
    const { navigator } = this.props
    return (
      <View style={{flex:1, backgroundColor: '#fff',marginTop:20}}>
        <NavigatorBar navigator={navigator} back={true} title="维修问师傅"/>
        <View style={styles.ask_container}>
          <View style={styles.ask_main}>
            <View style={[styles.ask_item, styles.ask_you]}>
              <Image style={styles.head_img} />
              <View style={styles.ask_content}>
                <Text>华师傅</Text>
                <View style={styles.ask_content_wrap}>
                  <Text>欢迎您！我是公司的在线顾问，很高兴为您服务！</Text>
                </View>
              </View>
            </View>
            { this.state.historyList.map((item, i) => this.renderMeAsk(item, i)) }
          </View>
          <View style={styles.tools_bar}>
              <View style={styles.input_control}>
                <TextInput 
                  style={styles.input}
                  value={this.state.message}
                  onChangeText={(text) => this.setState({message: text})}
                />
              </View>
              <TouchableOpacity
                style={styles.input_send}
                onPress={() => this.send()}
              >
                <Text>发送</Text>
              </TouchableOpacity>
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  ask_container: {
    flex: 1,
    flexDirection: 'column',
  },
  ask_main: {
    flex: 1,
    backgroundColor: '#eee'
  },
  ask_item: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginTop: 10,
    marginBottom: 10
  },
  ask_you: {
    justifyContent: 'flex-start'
  },
  ask_me: {
    justifyContent: 'flex-end'
  },
  head_img: {
    width: 60,
    height: 60,
    marginRight: 10,
    marginLeft: 10
  },
  ask_content: {
    width: width - 120,
  },
  ask_content_wrap: {
    marginTop: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 10,
    backgroundColor: '#fff'
  },
  tools_bar: {
    backgroundColor: '#eee',
    // borderTopColor: '#aaa',
    // borderTopWidth: 1,
    padding: 10,
    flexDirection: 'row'
  },
  input_control: {
    flex: 1,
  },
  input: {
    backgroundColor: '#fff',
    height: 30,
    borderRadius:5,
    paddingLeft: 10
  },
  input_send: {
    width: 50,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default Content