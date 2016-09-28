import React, { Component, PropTypes } from 'react'
import {
  Image,
  MapView,
  StyleSheet,
  View,
  Text,
  TouchableHighlight,
  Dimensions,
  InteractionManager
} from 'react-native'

import NavigatorBar from '../components/navigatorBar'

const width = Dimensions.get('window').width
const height = Dimensions.get('window').height

class Map extends Component {
  static defaultProps ={
    mapType: 'standard',
    showsUserLocation: false,
    followUserLocation: false
  };
  
  static propTypes = {
    mapType: PropTypes.oneOf(['standard', 'satellite', 'hybrid']),
    showsUserLocation: PropTypes.bool.isRequired,
    followUserLocation: PropTypes.bool.isRequired
  }

  constructor(props) {
    super(props)
    this.state = {
      isFirstLoad: true,
      mapRegion: undefined,
      annotations: []
    }
  }

  _getAnnotations(region) {
    return [{
      longitude: region.longitude,
      latitude: region.latitude,
      title: '在这？'
    }]
  }

  _onRegionChangeComplete(region) {
    if (this.state.isFirstLoad) {
      this.setState({
        annotations: this._getAnnotations(region),
        isFirstLoad: false
      })
    }
  }

  render() {
    return (
      <View>
        <MapView
          style={this.props.mapStyle}
          mapType={this.props.mapType}
          showsUserLocation={this.props.showsUserLocation}
          followUserLocation={this.props.followUserLocation}
          onRegionChangeComplete={(region) => this._onRegionChangeComplete(region)}
          region={this.state.mapRegion}
          annotations={this.state.annotations}
        />
      </View>
    )
  }

}

export default class MdMap extends Component {
  constructor(props) {
    super(props)
    this.state= {
      showGeo: false,
      loads: false
    }
  }

  componentDidMount() {
    InteractionManager.runAfterInteractions(() => {
      this.setState({
        loads: true
      })
    })
  }

  _getLocation() {
    this.setState({
      showGeo: true
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <NavigatorBar navigator={this.props.navigator} back={true} title='导航' />
        {
          this.state.loads 
          ? <Map
              mapType='standard'
              mapStyle={styles.map}
              showsUserLocation={this.state.showGeo}
              followUserLocation={this.state.showGeo}
            />
          : <View style={styles.map} />
        }
        <TouchableHighlight underlayColor="#00bd03" style={styles.btn} onPress={() => this._getLocation()}>
          <Text style={styles.btnText}>定位</Text>
        </TouchableHighlight>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    alignItems: "center",
    backgroundColor: '#fff',
    paddingTop: 20,
    flex: 1
  },
  map:{
    width: width,
    height: height-130
  },
  btn:{
    backgroundColor:"#00a803",
    width: width-80,
    height: 40,
    borderWidth:1,
    borderColor: "#009302",
    borderRadius: 4,
    justifyContent:"center",
    marginTop:10
  },
  btnText:{
    textAlign:"center",
    fontSize:18,
    color:"#fff"
  },
});