import { combineReducers } from 'redux'


export const getErrors = (state={}, action) => {
  const {type, payload} = action
  switch(type){
    case `GET_ERRORS`:
    return {
      ...state,
      payload
    }
    default: return state
  }
}


export default combineReducers({
  errors: getErrors
})