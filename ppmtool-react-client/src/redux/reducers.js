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

let errorInitialState = {
  errorsArr: [],
  variant: ''
}

export const setErrors = (state = errorInitialState, action) => {
  const {type, payload} = action
  console.log(payload);
  switch(type){
    case `GET_ERRORS`:
    return {
      ...state,
      errorsArr: !Array.isArray(payload.msg) ? Object.entries(payload.msg) : payload.msg,
      variant: payload.color
    }
    case `REMOVE_ERRORS`:
    return errorInitialState
    default: return state
  }
}




export default combineReducers({
  errors: setErrors,
  projectObj: getProjects
})