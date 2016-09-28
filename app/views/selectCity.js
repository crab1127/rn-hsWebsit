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

class SelectCity extends Component {

  constructor(props) {
    super(props)

    this.state = {
      city: [
        {
          name: '广东省',
          items: [
            {
              name: '广州市',
              count: 5
            },
            {
              name: '深圳市',
              count: 3
            },
            {
              name: '东莞市',
              count: 5
            }
          ]
        },
        {
          name: '广西省',
          items: [
            {
              name: '广州市',
              count: 5
            },
            {
              name: '深圳市',
              count: 3
            },
            {
              name: '东莞市',
              count: 5
            }
          ]
        },
        {
          name: '河北省',
          items: [
            {
              name: '广州市',
              count: 5
            },
            {
              name: '深圳市',
              count: 3
            },
            {
              name: '东莞市',
              count: 5
            }
          ]
        },
        {
          name: '广西省',
          items: [
            {
              name: '广州市',
              count: 5
            },
            {
              name: '深圳市',
              count: 3
            },
            {
              name: '东莞市',
              count: 5
            }
          ]
        },
        {
          name: '河北省',
          items: [
            {
              name: '广州市',
              count: 5
            },
            {
              name: '深圳市',
              count: 3
            },
            {
              name: '东莞市',
              count: 5
            }
          ]
        },
        {
          name: '广西省',
          items: [
            {
              name: '广州市',
              count: 5
            },
            {
              name: '深圳市',
              count: 3
            },
            {
              name: '东莞市',
              count: 5
            }
          ]
        },
        {
          name: '河北省',
          items: [
            {
              name: '广州市',
              count: 5
            },
            {
              name: '深圳市',
              count: 3
            },
            {
              name: '东莞市',
              count: 5
            }
          ]
        },
        {
          name: '广西省',
          items: [
            {
              name: '广州市',
              count: 5
            },
            {
              name: '深圳市',
              count: 3
            },
            {
              name: '东莞市',
              count: 5
            }
          ]
        },
        {
          name: '河北省',
          items: [
            {
              name: '广州市',
              count: 5
            },
            {
              name: '深圳市',
              count: 3
            },
            {
              name: '东莞市',
              count: 5
            }
          ]
        },
        {
          name: '广西省',
          items: [
            {
              name: '广州市',
              count: 5
            },
            {
              name: '深圳市',
              count: 3
            },
            {
              name: '东莞市',
              count: 5
            }
          ]
        },
        {
          name: '河北省',
          items: [
            {
              name: '广州市',
              count: 5
            },
            {
              name: '深圳市',
              count: 3
            },
            {
              name: '东莞市',
              count: 5
            }
          ]
        },
        {
          name: '广西省',
          items: [
            {
              name: '广州市',
              count: 5
            },
            {
              name: '深圳市',
              count: 3
            },
            {
              name: '东莞市',
              count: 5
            }
          ]
        },
        {
          name: '河北省',
          items: [
            {
              name: '广州市',
              count: 5
            },
            {
              name: '深圳市',
              count: 3
            },
            {
              name: '东莞市',
              count: 5
            }
          ]
        }
      ],
      activeCity: {
        name: '广州市',
        count: 10
      }
    }

    console.log('selectCity', '~~~~~~~~~~')

    // this.setActiveCity = this.setActiveCity.bind(this)
  }

  setActiveCity(item) {
    this.setState({
      activeCity: item
    })
  }

  renderItem(row, i) {
    return (
      <View key={i}>
        <View style={[styles.item, {backgroundColor: '#f4f4f4'}]}>
          <Text>{row.name}</Text>
        </View>
        <View style={styles.item}>
          {
            row.items.map((item, k) => {
              return (<Text key={k} style={{ marginRight: 20 }} onPress={this.setActiveCity.bind(this, item)}>{item.name} ({item.count})</Text>)
            })
          }
        </View>
      </View>
    )
  }

  render() {
    const {navigator} = this.props
    const {activeCity} = this.state
    return (
      <View style={{ flex: 1 , marginTop: 20, backgroundColor: '#fff'}}>
        <NavigatorBar navigator={navigator} back='111' title='易损件保养'/>
        <View style={styles.active}>
          <View style={styles.active_name}>
            <Text style={[styles.active_text, {fontSize: 30}]}>{ activeCity.name }</Text>
          </View>
          <View style={styles.active_count}>
            <Text style={[styles.active_text, {fontSize: 20}]}> { activeCity.count }家分店</Text>
          </View>
        </View>
        <View style={styles.line}></View>
        <ScrollView>
          {this.state.city.map((item, i) => this.renderItem(item, i))}
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  item: {
    height: 40,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth:1,
    borderBottomColor: '#eee'
  },
  line: {
    height: 1,
    backgroundColor: '#eee'
  },
  active: {
    margin: 20,
    flexDirection: 'row',
    alignItems: 'center'
  },
  active_name: {
    height:80,
    flex: 5,
    borderRightWidth: 1,
    borderBottomColor: '#eee',
    justifyContent: 'center'
  },
  active_count: {
    height: 80,
    flex: 4,
    justifyContent: 'center'
  },
  active_text: {
    textAlign: 'center',
    color: '#36c'
  }
})

export default SelectCity