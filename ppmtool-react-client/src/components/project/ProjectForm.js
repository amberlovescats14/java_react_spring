import React, {useState} from 'react'
import PropTypes from 'prop-types';

const ProjectForm = (props) => {
  const { createProject, history} = props
  const [state, setState] = useState({
    projectName: '',
    projectIdentifier: '',
    description: '',
    start_date: '',
    end_date: ''
  })
  const handleChange = (e) => {
      setState({...state, [e.target.name]: e.target.value})
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    createProject(state, history)

  }

  return (
    <div className="register">
    <div className="container">
        <div className="row">
            <div className="col-md-8 m-auto">
                <h5 className="display-4 text-center">Create / Edit Project form</h5>
                <hr />
                <form onSubmit={(e)=>handleSubmit(e)}>
                    <div className="form-group">
                        <input type="text" className="form-control form-control-lg " placeholder="Project Name"
                        name="projectName"
                        value={state.projectName}
                        onChange={(e)=>handleChange(e)} />
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control form-control-lg" placeholder="Unique Project ID"
                            name="projectIdentifier"
                            value={state.projectIdentifier}
                            onChange={(e)=>handleChange(e)}/>

                    </div>
                    <div className="form-group">
                        <textarea className="form-control form-control-lg" placeholder="Project Description"
                        name="description"
                        value={state.description}
                        onChange={(e)=>handleChange(e)}></textarea>
                    </div>
                    <h6>Start Date</h6>
                    <div className="form-group">
                        <input type="date" className="form-control form-control-lg" name="start_date"  
                        value={state.start_date}
                        onChange={(e)=>handleChange(e)}/>
                    </div>
                    <h6>Estimated End Date</h6>
                    <div className="form-group">
                        <input type="date" className="form-control form-control-lg" name="end_date"
                        value={state.end_date}
                        onChange={(e)=>handleChange(e)} />
                    </div>

                    <input type="submit" className="btn btn-primary btn-block mt-4" />
                </form>
            </div>
        </div>
    </div>
</div>

  )
}

ProjectForm.propTypes = {
    createProject: PropTypes.func.isRequired,
    projectObj: PropTypes.object.isRequired,
  }

export default ProjectForm
