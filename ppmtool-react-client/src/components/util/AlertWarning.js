import React from 'react'
import PropTypes from 'prop-types';
import { Alert } from 'react-bootstrap'

const AlertWarning = (props) => {
  const {warnings} = props
  return (
    warnings.length > 0 && 
    warnings.map((w,i)=> (
      <Alert key={i} variant="warning">
      {w.toUpperCase()}
      </Alert>

    ))
  )
}

AlertWarning.propTypes = {
  warnings: PropTypes.array.isRequired,
}

export default AlertWarning
