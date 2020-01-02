import React from 'react'
import PropTypes from 'prop-types';
import { Alert } from 'react-bootstrap'

const AlertUtil = (props) => {
  const {errors} = props
  return (
    errors.length > 0 && 
    errors.map((e,i)=> (
      <Alert key={i} variant="danger">
      {e[0].toUpperCase()} : {e[1]}
      </Alert>

    ))
  )
}

AlertUtil.propTypes = {
  errors: PropTypes.array.isRequired,
}

export default AlertUtil
