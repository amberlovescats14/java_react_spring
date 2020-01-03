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
      projects: payload.reverse(),
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
    case `DELETE_PROJECT`:
    return {
      ...state,
      projects: payload.allProjects.filter(p => p.projectIdentifier !== payload.identifier),
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

let warningInitialState = []

export const setWarnings = (state = warningInitialState, action) => {
  const {type, payload} = action
  switch(type){
    case `GET_WARNINGS`:
    return [...state, ...payload]
    case `REMOVE_WARNINGS`:
    return errorInitialState
    default: return state
  }
}


export default combineReducers({
  warnings: setWarnings,
  errors: getErrors,
  projectObj: getProjects
})