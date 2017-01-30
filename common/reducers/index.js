import { START_CHANGE_COLOR, RECEIVE_NEW_COLOR } from '../actions'

const rootReducer = (state = {headColor:'pink', bodyColor:'lightblue', footerColor:'gray'}, action) => {
  switch (action.type) {
  case START_CHANGE_COLOR:
    return Object.assign({}, state, {[action.payload+'Color']: 'white'})
  case RECEIVE_NEW_COLOR:
    return Object.assign({}, state, {[action.payload.part+'Color']: action.payload.color})
  default:
    return state
  }
}

export default rootReducer

