import React, { Component, PropTypes } from 'react'
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TouchableHighlight,
  Dimensions,
  ScrollView,
  DeviceEventEmitter,
  LayoutAnimation
} from 'react-native'

export default class Home extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <View>
        <Image>
          <View>
            <Image 
            />
            <Text>周某某</Text>
          </View>
        </Image>
        <View style={styles.space10} />
        <View>
          <View style={styles.list}>
            <Image />
            <View>
              <Text>  我的打赏</Text>
            </View>
            <Image  />
          </View>
          <View style={styles.list}>
            <Image />
            <View>
              <Text>  我的打赏</Text>
            </View>
            <Image  />
          </View>
          <View style={styles.list}>
            <Image />
            <View>
              <Text>  我的打赏</Text>
            </View>
            <Image  />
          </View>
        </View>
        <View style={styles.space10} />
        <View>
          <View style={styles.list}>
            <Image />
            <View>
              <Text>  我的打赏</Text>
            </View>
            <Image  />
          </View>
          <View style={styles.list}>
            <Image />
            <View>
              <Text>  我的打赏</Text>
            </View>
            <Image  />
          </View>
          <View style={styles.list}>
            <Image />
            <View>
              <Text>  我的打赏</Text>
            </View>
            <Image  />
          </View>
        </View>
        <View style={styles.space10} />
        <View>
          <View style={styles.list}>
            <Image />
            <View>
              <Text>  我的打赏</Text>
            </View>
            <Image  />
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({

})