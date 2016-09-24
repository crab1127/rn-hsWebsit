import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
  TextInput,
  Dimensions
} from 'react-native'

import NavigatorBar from '../components/navigatorBar'

const width = Dimensions.get('window').width

class Serve extends Component {
  constructor(props) {
    super(props)
    this.state = {
      positionX: width / 4,
      index: 1,
    }
  }
  _handleEndDrag(e, _scrollView) {
    let newPositionX
    let newIndex = this.state.index
    let endPosition = e.nativeEvent.contentOffset.x
    console.log(e.nativeEvent)
    if (endPosition > this.state.positionX) {
      if (this.state.positionX >= e.nativeEvent.contentSize.width - width) {
        newPositionX = this.state.positionX
      } else {
        newPositionX = this.state.positionX + width / 2
        newIndex++
      }
    } else {
      if (this.state.positionX <= -width/4) {
        newPositionX = this.state.positionX
      } else {
        newPositionX = this.state.positionX - width / 2
        newIndex--
      }
    }
    _scrollView.scrollTo({
      x: newPositionX
    })
    this.setState({
      positionX: newPositionX,
      index: newIndex
    })
    console.log(this.state)
    // _scrollView.scrollTo({x: width / 4});
  }

  render() {
    let _scrollView
    const { navigator } = this.props
    return (
      <View style={{ flex: 1 , marginTop: 20, backgroundColor: '#fff'}}>
        <NavigatorBar navigator={navigator} back='111' title='易损件保养'/>
        <View>
          <Text style={{textAlign: 'center'}}>请选择：</Text>
          <ScrollView 
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            scrollEventThrottle={200}
            ref={(scrollView) => _scrollView = scrollView}
            onScrollEndDrag={(e) => this._handleEndDrag(e, _scrollView)}
            style={styles.type_container}
          >
            <TouchableOpacity style={styles.type_item}>
              <Text style={styles.type_text}>前车制动片保养1</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.type_item}>
              <Text style={styles.type_text}>前车制动片保养2</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.type_item}>
              <Text style={styles.type_text}>前车制动片保养3</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.type_item}>
              <Text style={styles.type_text}>前车制动片保养4</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.type_item}>
              <Text style={styles.type_text}>前车制动片保养5</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.type_item}>
              <Text style={styles.type_text}>前车制动片保养6</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.type_item}>
              <Text style={styles.type_text}>前车制动片保养7</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.type_item}>
              <Text style={styles.type_text}>前车制动片保养8</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.type_item}>
              <Text style={styles.type_text}>前车制动片保养9</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.type_item}>
              <Text style={styles.type_text}>前车制动片保养10</Text>
            </TouchableOpacity>
          </ScrollView>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  type_container: {
    flexDirection: 'row',
    height: 50,
  },
  type_item: {
    width: width / 2,
    justifyContent: 'center'
  },
  type_text: {
    textAlign: 'center'
  }
})

export default Serve