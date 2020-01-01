import { combineReducers } from 'redux'

const projectInitialState = {
  projects: [],
  loading: true
}
export const getProjects = (state = projectInitialState, action) => {
  const {type, payload} = action
  switch(type){
    case `GET_PROJECTS`:
    return {
      ...state,
      projects: payload,
      loading: false
    }
    case `POST PROJECT`: 
    return {
      ...state,
      projects: payload.allProjects.concat(payload.newProject),
      loading: false
    }
    default: return state;
  }
}

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
  errors: getErrors,
  projectObj: getProjects
})