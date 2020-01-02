import { combineReducers } from 'redux'

let projectInitialState = {
  projects: [],
  project: {},
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
    case `UPDATE_PROJECT`:
    return {
      ...state,
      projects: payload,
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
    let errorsArr = Object.entries(payload)

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