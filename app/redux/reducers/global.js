import * as TYPES from '../actionTypes'

const initialState = {
  title: '华胜连锁',
  // 
  coordinates: { latitude: 0, longitude: 0 }, 
  // 
  slides: [],
  // 
  service: [],
  serviceContent: {}
}

export default function(state=initialState, action) {
  
  switch(action.type) {
  case TYPES.SET_TITLE: 
    return {
      ...state,
      title: action.data
    }
  case TYPES.SET_COORDINATES:
    return {
      ...state,
      coordinates: action.data
    }
  case TYPES.SET_SLIDES:
    return {
      ...state,
      slides: action.data
    }
  default:
    return state
  }
}