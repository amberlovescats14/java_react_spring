import React from 'react'
import { Alert } from 'react-bootstrap'

const AlertUtil = (props) => {
  const {errors} = props
  console.log(": ", errors.length);
  return (
    errors.length > 0 && 
    errors.map((e,i)=> (
      <Alert key={i} variant="danger">
      {e}
      </Alert>

    ))
  )
}
const divStyle = {
  width: '100%',
  display: 'block',
  padding: '10px'
}

export default AlertUtil
