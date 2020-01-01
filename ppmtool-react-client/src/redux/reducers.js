import { combineReducers } from 'redux'

let projectInitialState = {
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
      projects: payload.allProjects.push(payload.newProject),
      loading: false
    }
    default: return state;
  }
}

let errorInitialState = []

export const getErrors = (state = errorInitialState, action) => {
  const {type, payload} = action
  switch(type){
    case `GET_ERRORS`:
    let errorsArr = Object.values(payload)

    return [...state, ...errorsArr]
    case `REMOVE_ERRORS`:
    return errorInitialState
    default: return state
  }
}


export default combineReducers({
  errors: getErrors,
  projectObj: getProjects
})