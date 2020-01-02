import axios from 'axios'

let proxy = "http://localhost:8080/api/project/"
//! GET ALL
export const getProjects = () => async (dispatch) => {
  try {
    const res = await axios.get(proxy)
    dispatch({
      type: `GET_PROJECTS`,
      payload: res.data
    })
  } catch (error) {
    dispatch(setAlert(error.response.data))
  }
}

//! POST
export const createProject = (project, history) => async (dispatch, getState) => {
  const { projectObj } = getState()
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  }
  try {
    const res = await axios.post(proxy, project)
    history.push('/dashboard')
    dispatch({
      type: `POST_PROJECT`,
      payload: {
        newProject: res.data,
        allProjects: projectObj.projects
      }
    })
  } catch (error) {
    dispatch(setAlert(error.response.data))
  }
} 
//! PUT
export const updateProject = (identifier, details) => async (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  }
  try {
    const res = await axios.put(`${proxy}${identifier}`, details, config)
    dispatch({
      type: `UPDATE_PROJECT`,
      payload: res.data
    })
    
  } catch (error) {
    dispatch(setAlert(error.response.data))
  }
}


//! ALERTS
export const setAlert = (msg, timeout = 3000) => dispatch => {
  dispatch({
    type: `GET_ERRORS`,
    payload: msg
  })

  setTimeout(()=>  dispatch({
    type: `REMOVE_ERRORS`,
    payload: []
  }), timeout)
}
