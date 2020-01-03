import React from 'react'
import PropTypes from 'prop-types';
import { Alert } from 'react-bootstrap'

const AlertUtil = (props) => {
  console.log("object", props.errors.errorsArr)
  const {errors} = props
  const { errorsArr, variant} = errors
  return (
    errorsArr.length > 0 && 
    errorsArr.map((e,i)=> (
      <Alert key={i} variant={variant}>
      {e[0].toUpperCase()} : {e[1]}
      </Alert>

    ))
  )
}

AlertUtil.propTypes = {
  errors: PropTypes.object.isRequired,
}

export default AlertUtil
