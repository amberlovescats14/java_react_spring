import axios from 'axios'

//! GET ALL
export const getProjects = () => async (dispatch) => {
  try {
    const res = await axios.get('/api/project/')
    dispatch({
      type: `GET_PROJECTS`,
      payload: res.data
    })
  } catch (error) {
    dispatch(setErrors(error.response.data, 'danger'))
  }
}

//! POST
export const createProject = (project, history) => async (dispatch, getState) => {
  const { projectObj } = getState()
  try {
    const res = await axios.post('/api/project/', project)
    history.push('/')
    dispatch({
      type: `POST_PROJECT`,
      payload: {
        newProject: res.data,
        allProjects: projectObj.projects
      }
    })

    dispatch(setErrors([['success', 'Project Created']], 'success'))

  } catch (error) {
    dispatch(setErrors(error.response.data, 'danger'))
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
    const res = await axios.put(`/api/project/${identifier}`, details, config)
    dispatch({
      type: `UPDATE_PROJECT`,
      payload: res.data
    })

    let obj = {
      success: 'Project Updated'
    }
    dispatch(setErrors(obj, 'success'))
    
  } catch (error) {
    console.log(error)
    let errorMessage = {
      required: 'All Fields'
    }
    dispatch(setErrors(errorMessage, 'danger'))
  }
}

//! DELETE
export const deleteProject = (identifier) => async (dispatch, getState) => {
  const {projectObj} = getState()
  try {
    if(window.confirm('Are you sure you want to delete this project?')){
      const res = await axios.delete(`/api/project/${identifier}`)
      console.log("RES: ", res.data)
      dispatch({
        type: `DELETE_PROJECT`,
        payload: {
          identifier,
          allProjects: projectObj.projects
        }
      })
      let obj = {
        success: 'Project Deleted'
      }
      dispatch(setErrors( obj , 'warning'))
    }
  } catch (error) {
    dispatch(setErrors(error.response.data, 'danger'))
  }
}


//! ALERTS ERRORS
export const setErrors = (msg, color,  timeout = 3000) => dispatch => {
  console.log("msg: ", msg);
  console.log("color: ", color);
  dispatch({
    type: `GET_ERRORS`,
    payload: {
      msg,
      color
    }
  })

  setTimeout(()=>  dispatch({
    type: `REMOVE_ERRORS`,
    payload: []
  }), timeout)
}

