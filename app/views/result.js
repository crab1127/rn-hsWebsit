import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  Text,
  Image
} from 'react-native'

import Button from '../components/button'
import NavigatorBar from '../components/navigatorBar'

class Result extends Component {
  render() {
    const {navigator} = this.props
    return (
      <View style={{flex:1, backgroundColor: '#fff',marginTop:20}}>
        <NavigatorBar navigator={navigator} back={true} title='我要预约'/>
        <View>
          <Text>预约成功</Text>
          <View>
            <Text>您的预约单号</Text>
            <Text>23425</Text>
            <Text>
              您将收到公众号给你推送预约卡券领取消息，请返回公众号查看
            </Text>
            <Button 
              text='查看预约单'
              onPress={() => {}}
            />
          </View>
        </View>
      </View>
    );
  }
}

export default Result