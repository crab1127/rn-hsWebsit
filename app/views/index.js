import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity
} from 'react-native'
import Swiper from 'react-native-swiper'

import NavigatorBar from '../components/navigatorBar'

import Serve from './serve'
import List from './list'
import SelectCart from './selectCart'
import MdMap from './map'
import Content from './content'
import AskIM from './ask'

const CNODE_API = 'https://cnodejs.org/api/v1/topics'

class Index extends Component {

  constructor(props) {
    super(props)
    
    this.state = {
      slides: [],
    }
    fetch('https://m.harsons.cn/api.php/Mobile/getBanner')

      .then((response) => response.json())
      .then((responseData) => {
        this.setState({
          slides: responseData.data
        })
        console.log(this.state)
      })
  }
  
  nav(route) {
    const { navigator } = this.props
    switch (route) {
    case 'serve': 
      navigator.push({
        component: Serve,
        name: 'Serve'
      })
      break
    case 'list': 
      navigator.push({
        component: List,
        name: 'List'
      })
      break
    case 'selectCart':
      navigator.push({
        component: SelectCart,
        name: 'selectCart'
      })
      break
    case 'map':
      navigator.push({
        component: MdMap,
        name: 'mdMap'
      })
      break
    case 'content':
      navigator.push({
        component: Content,
        name: 'Content'
      })
      break
    case 'ask':
      navigator.push({
        component: AskIM,
        name: 'AskIM'
      })
      break
    } 
  }

  render() {
    const { navigator } = this.props
    return(
      <View>
        <NavigatorBar navigator={navigator} title='华胜豪华车专修'/>
        <ScrollView>
          <Swiper height={200}>
          { this.state.slides.map(item => this.renderSlide(item)) }
          </Swiper>
          <View style={styles.cart_bar}>
            <TouchableOpacity 
              style={styles.cart_bar_main}
              activeOpacity={.9}
              onPress={() => this.nav('selectCart')}
            >
              <View style={{flex: 1}}>
                <Text style={styles.cart_bar_text}> + 请选择您的车型</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.tools_bar}>
            <TouchableOpacity 
              style={{flex:1, borderRightWidth:1, borderRightColor:'#eee'}}
              onPress={() => this.nav('serve')}
            >
              <Text style={styles.tools_bar_text}>
                保养查价格
              </Text>
            </TouchableOpacity>
            <TouchableOpacity 
              style={{flex:1}}
              onPress={() => this.nav('ask')}
            >
              <Text style={styles.tools_bar_text}>
                维修问师傅
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.spaceing} />
          <View style={styles.list_wrap}>
            <View style={styles.list_title}>
              <Text>广州市（5家门店）</Text>
              <Text onPress={() => this.nav('list')}>更多分店</Text>
            </View>
            <TouchableOpacity 
              activeOpacity={0.7}
              onPress={() => this.nav('content')}
            >
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
                    <TouchableOpacity
                      style={styles.md_map}
                      onPress={() => this.nav('map')}
                    >
                      <Text>
                        导航
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.spaceing} />
          <View style={{paddingTop:10, paddingBottom: 10}}>
            <Text style={{textAlign: 'center', fontSize:18, color: '#333'}}>我们的优势</Text>
            <Text style={{textAlign: 'center', color: '#999'}}>全国84城130＋店 专城为您服务</Text>
            <View style={{flexDirection: 'row', height: 40, alignItems: 'center', justifyContent:'center'}}>
              <View style={{flex:1, alignItems: 'center'}}>
                <Text>正品</Text>
              </View>
              <View  style={{flex:1, alignItems: 'center'}}>
                <Text>18年豪车专修</Text>
              </View>
              <View style={{flex:1, alignItems: 'center'}}>
                <Text>4s店70%收费</Text>
              </View>
              <View style={{flex:1, alignItems: 'center'}}>
                <Text>130多家网</Text>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    )
  }

  renderSlide(item) {
    console.log(12, item)
    return (
      <View key={item.id} style={{ flex: 1, backgroundColor:'#fff'}}>
        <Image 
          source={{uri: 'https://m.harsons.cn' + item.img_path}}
          style={{width: 375, height: 200}}
        />
      </View>
    )
  }

}

const styles = StyleSheet.create({
  cart_bar: {
    backgroundColor: '#000'
  },
  cart_bar_main: {
    backgroundColor: '#fff',
    margin: 10,
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 8
  },
  cart_bar_text: {
    textAlign: 'center',
    color: '#36c'
  },
  tools_bar: {
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center'
  },
  tools_bar_text: {
    textAlign: 'center',
    fontSize: 15
  },
  spaceing: {
    backgroundColor: '#ccc',
    height: 10
  },

  list_title: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 50,
    paddingLeft: 10,
    paddingRight: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd'
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
export default Index