import React, {Fragment} from 'react'
import { Link } from 'react-router-dom'

const CreateButton = () => {
  return (
    <Fragment>
        <Link to="/add-project" className="btn btn-lg btn-info">
            Create a Project
        </Link>
    </Fragment>
  )
}

export default CreateButton
