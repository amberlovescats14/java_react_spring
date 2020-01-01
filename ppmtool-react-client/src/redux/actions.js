import axios from 'axios'


//! GET ALL
export const getProjects = () => async (dispatch) => {
  try {
    const res = axios.get('/api/project')
    dispatch({
      type: `GET_PROJECTS`,
      payload: res.data
    })
  } catch (error) {
    console.log(`GET ERROR`)
  }
}

export const createProject = (project, history) => async (dispatch, getState) => {
  const { projects } = getState()
  try {
    const res = await axios.post('/', project)
    dispatch({
      type: `POST_PROJECT`,
      payload: {
        newProject: res.data,
        allProjects: projects 
      }
    })
    // history.push(`${reactProxy}/dashboard`)
  } catch (error) {
    dispatch({
      type: `GET_ERRORS`,
      payload: error.response.data
    })
  }
} 


// export const getErrors = () => async (dispatch) => {
//   try {
//     dispatch({
//       type: `GET_ERRORS`,
//       payload: 'hi'
//     })
//   } catch (error) {
//     console.error(error.message)
//     console.log("ERROR ERROR")
//   }
// }