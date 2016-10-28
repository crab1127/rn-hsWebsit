import * as TYPES from '../actionTypes'

export function setTitle(title) {
  return {
    type: TYPES.SET_TITLE,
    data: title
  }
}

export function setSlide() {
  return dispatch => {
    fetch('http://mb.harsons.cn/api.php/Mobile/getBanner')
      .then(
        res => dispatch({
          type: TYPES.SET_SLIDES,
          data: res
        })
      )
  }
}