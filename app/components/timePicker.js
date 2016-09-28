import React, { Component } from 'react'
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

import Button from './button'

const width = Dimensions.get('window').width

const CustomLayoutAnimation = {
  duration: 800,
  create: {
    type: LayoutAnimation.Types.spring,
    springDamping: 0.4,
    // property: LayoutAnimation.Properties.opacity,
  },
  update: {
    // type: LayoutAnimation.Types.easeInEaseOut,
    type: LayoutAnimation.Types.spring,
    springDamping: 0.4,
  },
}

class TimePicker extends Component {
  
  constructor(props) {
    super(props)
  
    const date = new Date()

    this.state = {
      calendar: [],
      year: date.getFullYear(),
      month: date.getMonth(),
      day: date.getDate(),
      time: null,
      positionX: 0,
    }

    LayoutAnimation.easeInEaseOut();

    console.log('timePicker -> ', '~~~~~~~~~~开始~~~~~~~~~')
  }

  componentDidMount() {
    this._updateCalendar()
  }

  renderWeek() {
    const weeks = ['周一','周二','周三','周四','周五','周六','周日']
    return (
      <View style={{flexDirection: 'row'}}>
        {
          weeks.map((item, i) => {
            return  <Text key={i} style={{flex:1, textAlign: 'center', fontSize:12, color: '#666'}}>{item}</Text>
          })
        }
      </View>
    )
  }

  renderDay() {
    return (
      <ScrollView
        style={styles.date_day}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        scrollEventThrottle={200}
        ref={(scrollView) => this.daysView = scrollView}
        onScrollEndDrag={(e) => this._handleEndDrag(e)}
      >
        {
          this.state.calendar.map((item, i) => {
            return (
              <TouchableOpacity
                key={i}
                style={[styles.date_day_item, this.state.day == item && styles.date_day_item_active]}
                onPress={() => this.setState({day: item})}
              >
                <Text style={{color: this.state.day == item ? '#fff' : '#333'}}> {item} </Text>
              </TouchableOpacity>
            )
          })
        }
      </ScrollView>
    )
  }

  renderTime() {
    return (
      <View>
        <View style={styles.date_time}>
          <View style={styles.date_time_label}>
            <Text>上午</Text>
          </View>
          <View style={styles.date_time_control}>
            <TouchableHighlight 
              activeOpacity={1}
              underlayColor='#f4f4f4'
              onPress={()=>this.setState({time: '09:00'})} 
              style={[styles.time_block, this.state.time === '09:00' && styles.time_block_active]}
            >
              <Text style={{color: this.state.time === '09:00' ? '#fff' : '#333'}}>09:00</Text>
            </TouchableHighlight>
            <TouchableHighlight 
              activeOpacity={1}
              underlayColor='#f4f4f4'
              onPress={()=>this.setState({time: '10:00'})}
              style={[styles.time_block, this.state.time === '10:00' && styles.time_block_active]}
            >
              <Text style={{color: this.state.time === '10:00' ? '#fff' : '#333'}}>10:00</Text>
            </TouchableHighlight>
            <TouchableHighlight 
              activeOpacity={1}
              underlayColor='#f4f4f4'
              onPress={()=>this.setState({time: '11:00'})}
              style={[styles.time_block, this.state.time === '11:00' && styles.time_block_active]}
            >
              <Text style={{color: this.state.time === '11:00' ? '#fff' : '#333'}}>11:00</Text>
            </TouchableHighlight>
            <TouchableHighlight
              activeOpacity={1}
              underlayColor='#f4f4f4'
              onPress={()=>this.setState({time: '12:00'})} 
              style={[styles.time_block, this.state.time === '12:00' && styles.time_block_active]}
            >
              <Text style={{color: this.state.time === '12:00' ? '#fff' : '#333'}}>12:00</Text>
            </TouchableHighlight>
          </View>
        </View>
        <View style={[styles.date_time, {marginTop: 0}]}>
          <View style={styles.date_time_label}>
            <Text>下午</Text>
          </View>
          <View style={styles.date_time_control}>
            <TouchableHighlight
              activeOpacity={1}
              underlayColor='#f4f4f4'
              onPress={()=>this.setState({time: '13:00'})} 
              style={[styles.time_block, this.state.time === '13:00' && styles.time_block_active]}
            >
              <Text style={{color: this.state.time === '13:00' ? '#fff' : '#333'}}>13:00</Text>
            </TouchableHighlight>
            <TouchableHighlight
              activeOpacity={1}
              underlayColor='#f4f4f4'
              onPress={()=>this.setState({time: '14:00'})} 
              style={[styles.time_block, this.state.time === '14:00' && styles.time_block_active]}
            >
              <Text style={{color: this.state.time === '14:00' ? '#fff' : '#333'}}>14:00</Text>
            </TouchableHighlight>
            <TouchableHighlight
              activeOpacity={1}
              underlayColor='#f4f4f4'
              onPress={()=>this.setState({time: '15:00'})} 
              style={[styles.time_block, this.state.time === '15:00' && styles.time_block_active]}
            >
              <Text style={{color: this.state.time === '15:00' ? '#fff' : '#333'}}>15:00</Text>
            </TouchableHighlight>
            <TouchableHighlight
              activeOpacity={1}
              underlayColor='#f4f4f4'
              onPress={()=>this.setState({time: '16:00'})} 
              style={[styles.time_block, this.state.time === '16:00' && styles.time_block_active]}
            >
              <Text style={{color: this.state.time === '16:00' ? '#fff' : '#333'}}>16:00</Text>
            </TouchableHighlight>
            <TouchableHighlight
              activeOpacity={1}
              underlayColor='#f4f4f4'
              onPress={()=>this.setState({time: '17:00'})} 
              style={[styles.time_block, this.state.time === '17:00' && styles.time_block_active]}
            >
              <Text style={{color: this.state.time === '17:00' ? '#fff' : '#333'}}>17:00</Text>
            </TouchableHighlight>
            <TouchableHighlight
              activeOpacity={1}
              underlayColor='#f4f4f4'
              onPress={()=>this.setState({time: '18:00'})} 
              style={[styles.time_block, this.state.time === '18:00' && styles.time_block_active]}
            >
              <Text style={{color: this.state.time === '18:00' ? '#fff' : '#333'}}>18:00</Text>
            </TouchableHighlight>
          </View>
        </View>
      </View>
    )
  }

  render() {
    return (
      <View style={[styles.date_container, this.props.style]}>
        <View style={styles.date_mount}>
          <Text onPress={() => this._updateMonth('prev')}>《 </Text>
          <Text style={{marginRight:20, marginLeft:20, textAlign: 'center', fontSize: 18}}>{this.state.month + 1}月</Text>
          <Text onPress={() => this._updateMonth('next')}> 》</Text>
        </View>
        { this.renderWeek() }
         
        { this.renderDay() }
        
        { this.renderTime() }

        <View style={{flexDirection: 'row', justifyContent: 'center', margin:10, marginBottom: 30}}>
          <Button 
            style={{width: width / 3, height: 30}}
            text="确定"
            onPress={() => {
              DeviceEventEmitter.emit('timePicker', +new Date(`${this.state.year}-${this.state.month + 1}-${this.state.day} ${this.state.time}`))
            }}
          />
        </View>
      </View>
    )
  }

  _updateMonth(type) {
    let month = this.state.month
    if (type === 'prev') {
      if (month <= 0) {
        month = 11
      } else {
        month--
      }
    } else if (type === 'next') {
      if (month >= 11 ){
        month = 0
      } else {
        month++
      }
    }

    this.setState({
      month: month
    })
    
    setTimeout(() => this._updateCalendar(), 0)
  }

  _updateCalendar() {
    var date = new Date();

    const {year, month, day} = this.state

    // 天数
    let days = new Date(year, month + 1, 0).getDate()
    // 当前星期
    let firstWeek = new Date(year, month, 1).getDay()
    // 月底星期几
    let lastWeek = new Date(year, month, days).getDay()

    let cenks = []

    // 月前补充占位符
    for (var i = firstWeek; i > 1; i--) {
      cenks.push('')
    }
    for (var i = 1; i <= days; i++) {
      cenks.push(i)
    }
    // 月底补充占位符
    for (var i = 7 - lastWeek; i > 0; i--) {
      cenks.push('')
    }
    
    this.setState({
      calendar: cenks
    })
  }

  _handleEndDrag(e) {
    const endPosition = e.nativeEvent.contentOffset.x
    const _daysView = this.daysView
    let newPositionX = this.state.positionX
    console.log(e.nativeEvent)

    if (endPosition > this.state.positionX) {
      if (this.state.positionX >= e.nativeEvent.contentSize.width - width) {
        newPositionX = this.state.positionX
      } else {
        newPositionX = this.state.positionX + width 
      }
    } else {
      if (this.state.positionX <= 0) {
        newPositionX = this.state.positionX
      } else {
        newPositionX = this.state.positionX - width
      }
    }
    _daysView.scrollTo({
      x: newPositionX
    })
    this.setState({
      positionX: newPositionX
    })
  }
}

const styles = StyleSheet.create({
  date_container: {
    backgroundColor: '#fff',
    borderBottomColor: '#eee',
    borderBottomWidth: 1,
    width: width
  },
  date_mount: {
    margin: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  date_day: {
    borderBottomColor: '#eee',
    borderBottomWidth: 1
  },
  date_day_item: {
    width: width / 7 - 10,
    height:  width / 7 - 10,
    margin: 5,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10
  },
  date_day_item_active: {
    borderRadius: width / 7 - 5,
    backgroundColor: '#09f'
  },
  date_day_text: {
    color: '#666',
    textAlign: 'center'
  },
  date_time: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    margin: 10,
    marginTop: 20
  },
  date_time_label: {
    width: 60,
    alignItems: 'center',
    marginTop: 7
  },
  date_time_control: {
    width: 280,
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  time_block: {
    padding: 5,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#ddd',
    marginRight: 10,
    marginBottom: 10
  },
  time_block_active: {
    backgroundColor: '#39f'
  }
})

export default TimePicker