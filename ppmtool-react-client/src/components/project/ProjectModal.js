import React, {useState} from 'react'

const ProjectModal = (props) => {
  const { p, handleClose, updateProject } = props
  const [state, setState] = useState({
    projectName: p.projectName,
    projectIdentifier: p.projectIdentifier,
    description: p.description,
    start_date: p.start_date,
    end_date: p.end_date
  })
  const handleChange = (e) => {
      setState({...state, [e.target.name]: e.target.value})
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    updateProject(state.projectIdentifier, state)
    handleClose()

  }
  console.log("STATE: ", p);

  return (
    <div className="register p-3">
    <div className="container">
        <div className="row">
            <div className="col-md-8 m-auto">
                <h5 className="display-4 text-center">Edit Project</h5>
                <hr />
                <form onSubmit={(e)=>handleSubmit(e)}>
                <h6>Project Name</h6>
                    <div className="form-group">
                        <input type="text" className="form-control form-control-lg " placeholder="Project Name"
                        name="projectName"
                        value={state.projectName}
                        onChange={(e)=>handleChange(e)} />
                    </div>
                    <h6>Identifier</h6>
                    <div className="form-group">
                        <input type="text" className="form-control form-control-lg" placeholder="Unique Project ID"
                            disabled
                            name="projectIdentifier"
                            value={state.projectIdentifier}
                            onChange={(e)=>handleChange(e)}/>
                    </div>
                    <h6>Description</h6>
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

export default ProjectModal
