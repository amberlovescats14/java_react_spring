import axio from 'axios'


export const getErrors = () => async (dispatch) => {
  try {
    dispatch({
      type: `GET_ERRORS`,
      payload: 'hi'
    })
  } catch (error) {
    console.error(error.message)
    console.log("ERROR ERROR")
  }
}