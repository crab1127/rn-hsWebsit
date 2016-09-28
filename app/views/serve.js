import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
  Dimensions
} from 'react-native'

import NavigatorBar from '../components/navigatorBar'
import Button from '../components/button'

const width = Dimensions.get('window').width

class Serve extends Component {
  constructor(props) {
    super(props)
    this.state = {
      positionX: - width / 4,
      index: 1,
    }
  }
  _handleEndDrag(e) {
    let newPositionX
    let newIndex = this.state.index
    let endPosition = e.nativeEvent.contentOffset.x
    const _scrollView = this.scrollView

    if (endPosition > this.state.positionX) {
      if (this.state.positionX >= e.nativeEvent.contentSize.width - width) {
        newPositionX = this.state.positionX
      } else {
        newPositionX = this.state.positionX + width / 2
      }
    } else {
      if (this.state.positionX <= -width/4) {
        newPositionX = this.state.positionX
      } else {
        newPositionX = this.state.positionX - width / 2
      }
    }
    newIndex = (newPositionX + width * 3/4)  / (width / 2)
    _scrollView.scrollTo({
      x: newPositionX
    })
    this.setState({
      positionX: newPositionX,
      index: newIndex
    })
    // _scrollView.scrollTo({x: width / 4});
  }

  componentDidMount() {
    this.scrollView.scrollTo({
       x: this.state.positionX
    })
  }

  render() {
    const { navigator } = this.props
    return (
      <View style={{ flex: 1 , marginTop: 20, backgroundColor: '#fff'}}>
        <NavigatorBar navigator={navigator} back='111' title='易损件保养'/>
        <View style={{marginTop: 10}}>
          <Text style={{textAlign: 'center', color: '#666'}}>请选择：</Text>
          <ScrollView 
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            scrollEventThrottle={200}
            ref={(scrollView) => this.scrollView = scrollView}
            onScrollEndDrag={(e) => this._handleEndDrag(e)}
            style={styles.type_container}
          >
            <TouchableOpacity style={[styles.type_item]}>
              <Text style={[styles.type_text, this.state.index === 1 && {fontSize: 18}]}>前车制动片保养1</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.type_item}>
              <Text style={[styles.type_text, this.state.index === 2 && {fontSize: 18}]}>前车制动片保养2</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.type_item}>
              <Text style={[styles.type_text, this.state.index === 3 && {fontSize: 18}]}>前车制动片保养3</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.type_item}>
              <Text style={[styles.type_text, this.state.index === 4 && {fontSize: 18}]}>前车制动片保养4</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.type_item}>
              <Text style={[styles.type_text, this.state.index === 5 && {fontSize: 18}]}>前车制动片保养5</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.type_item}>
              <Text style={[styles.type_text, this.state.index === 6 && {fontSize: 18}]}>前车制动片保养6</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.type_item}>
              <Text style={[styles.type_text, this.state.index === 7 && {fontSize: 18}]}>前车制动片保养7</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.type_item}>
              <Text style={[styles.type_text, this.state.index === 8 && {fontSize: 18}]}>前车制动片保养8</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.type_item}>
              <Text style={[styles.type_text, this.state.index === 9 && {fontSize: 18}]}>前车制动片保养9</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.type_item}>
              <Text style={[styles.type_text, this.state.index === 10 && {fontSize: 18}]}>前车制动片保养10</Text>
            </TouchableOpacity>
          </ScrollView>
        </View>
        <View style={styles.space} />
        <View>
          <View style={[styles.jia_flex, styles.jia1]}>
            <View style={styles.label}>
              <Text style={styles.jia_text}>华胜价</Text>
            </View>
            <View style={styles.jia_control}>
              <Text style={{fontSize: 40, color:'#36c'}}>399</Text>
            </View>
          </View>
          <View style={[styles.jia_flex, styles.jia2]}>
            <View style={styles.label}>
              <Text style={styles.jia_text}>市场价</Text>
            </View>
            <View style={styles.jia_control}> 
              <Text style={{fontSize: 30, color:'#c93'}}>1988</Text>
            </View>
          </View>
          <View style={styles.line}/>
          <View style={[styles.jia_flex, styles.jia3, {alignItems: 'flex-start'}]}>
            <View style={[styles.label]}>
              <Text style={styles.jia_text}>包含配件</Text>
            </View>
            <View style={styles.jia_control}>
              <Text>更换钱啥奇葩</Text>
              <Text>更换钱啥奇葩</Text>
              <Text>更换钱啥奇葩</Text>
              <Text>更换钱啥奇葩</Text>
              <Text>更换钱啥奇葩</Text>
              <Text>更换钱啥奇葩</Text>
            </View>
          </View>
        </View>
        <View style={styles.space} />
        <View>
          <Button 
            style={styles.button}
            onPress={() => {}}
            text='预约有礼'
          />
          <Text style={{ textAlign: 'center', color: '#666'}}>预约成功即可获取50元工时券</Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  type_container: {
    flexDirection: 'row',
    marginTop: 20,
    marginBottom: 20
  },
  type_item: {
    width: width / 2,
    justifyContent: 'center',
    alignItems: 'center',
    borderRightWidth: 1,
    borderRightColor: '#ddd',
    height: 30,
  },
  type_text: {
    textAlign: 'center'
  },
  space: {
    backgroundColor: '#f4f4f4',
    height: 10
  },
  line: {
    height: 1,
    backgroundColor: '#eee'
  },
  jia_flex: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 20,
    marginRight: 30,
  },
  jia1: {
    marginTop: 30,
  },
  jia2: {
    marginBottom: 30,
  },
  jia3: {
    marginTop: 20,
    marginBottom: 20,
  },
  label: {
    width: 60,
    marginRight:40,
  },
  jia_text: {
    textAlign: 'right',
    color: '#666'
  },
  jia_control: {
    flex: 1
  },
  button: {
    margin: 10,
  },
})

export default Serve