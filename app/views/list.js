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

import Content from './content'

class List extends Component {
  constructor(props) {
    super(props)

    this.state = {
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2
      })
    }
  }
  nav() {
    console.log(this.props)
    this.props.navigator.push({
      component: Content,
      name: 'content'
    })
  }

  componentDidMount() {
    const listData = [
      {id: 1},
      {id: 2},
      {id: 3},
      {id: 4},
      {id: 5},
      {id: 6},
      {id: 7}
    ]
    this.setState({
      dataSource: this.state.dataSource.cloneWithRows(listData)
    })
    console.log(this.state)
  }



  renderItem(item) {
    return (
      <TouchableOpacity onPress={() => this.nav('list')}>
        <View style={styles.media}>
          <Image style={{width:80, height:80}}/>
          <View style={styles.media_main}>
            <View>
              <Text>广州大道北店</Text>
            </View>
            <View style={styles.md_content}>
              <View style={{flex:1}}>
                <View>
                  <Image></Image>
                  <Text>54人点评</Text>
                </View>
                <View>
                  <Text>广州市天河区广州大道北99号</Text>
                </View>
              </View>
              <View style={styles.md_map}>
                <TouchableOpacity>
                  <Text>
                    导航
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.md_info}>
          <View style={{flex: 1, alignItems: 'center'}}>
            <Text>预约免排队</Text>
          </View>
          <View style={{flex: 1, alignItems: 'center'}}>
            <Text>在线客服</Text>
          </View>
          <View style={{flex: 1, alignItems: 'center'}}>
            <Text>资讯热线</Text>
          </View>
        </View>
        <View style={styles.line} />
      </TouchableOpacity>
    )
  }
  render() {
    const { navigator } = this.props
    return (
      <View style={{flex:1, backgroundColor: '#fff',marginTop:20}}>
        <NavigatorBar navigator={navigator} back={true} title="豪华车专修连锁"/>
        <View style={{flexDirection: 'row'}}>
          <Text style={{color: '#666'}}>离你最近：</Text>
          <View style={{flex: 1}}></View>
          <Text style={{color: '#666'}}>56km</Text>
        </View>
        <View style={styles.line} />
        <ListView 
          dataSource={this.state.dataSource}
          renderRow={this.renderItem.bind(this)}
        />
      </View>
    )
  } 
}

const styles = StyleSheet.create({
  line: {
    backgroundColor: '#eee',
    height: 1
  },
  media: {
    flexDirection: 'row',
    padding: 10,
  },
  media_main: {
    flex:1
  },
  md_content: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  md_map: {
    borderLeftColor: '#ddd',
    borderLeftWidth: 1,
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center'
  },
  md_info: {
    flexDirection: 'row',
    height: 50,
    alignItems: 'center'
  }
})

export default List