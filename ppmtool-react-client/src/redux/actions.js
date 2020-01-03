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
  try {
    const res = await axios.post(proxy, project)
    history.push('/')
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
    console.log(error)
    let errorMessage = {
      required: 'All Fields'
    }
    dispatch(setAlert(errorMessage))
  }
}

//! DELETE
export const deleteProject = (identifier) => async (dispatch, getState) => {
  const {projectObj} = getState()
  try {
    const res = await axios.delete(`${proxy}${identifier}`)
    console.log("RES: ", res.data)
    dispatch({
      type: `DELETE_PROJECT`,
      payload: {
        identifier,
        allProjects: projectObj.projects
      }
    })
    dispatch(setWarnings(res.data))
  } catch (error) {
    dispatch(setAlert(error.response.data))
  }
}


//! ALERTS ERRORS
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

//! ALERTS WARNINGS
export const setWarnings = (msg, timeout = 2000) => dispatch => {
  dispatch({
    type: `GET_WARNINGS`,
    payload: [msg]
  })

  setTimeout(()=>  dispatch({
    type: `REMOVE_WARNINGS`,
    payload: []
  }), timeout)
}
 