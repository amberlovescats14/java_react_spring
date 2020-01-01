import React, {useState} from 'react'

const ProjectForm = () => {

  const [state, setState] = useState({
    projectName: '',
    projectIdentifier: '',
    description: '',
    start_date: '',
    end_date: '',
  })
  const handleChangeName = projectName => event => {
    setState({ ...state, [projectName]: event.target.value });
  };
  const handleChangeIdentifier = projectIdentifier => event => {
    setState({ ...state, [projectIdentifier]: event.target.value });
  };
  const handleChangeDescription = description => event => {
    setState({ ...state, [description]: event.target.value });
  };
  const handleChangeStart = start_date => event => {
    setState({ ...state, [start_date]: event.target.value });
  };
  const handleChangeEnd = end_date => event => {
    setState({ ...state, [end_date]: event.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(state);
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
                        onChange={handleChangeName('projectName')} />
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control form-control-lg" placeholder="Unique Project ID"
                            name="projectIdentifier"
                            value={state.projectIdentifier}
                            onChange={handleChangeIdentifier('projectIdentifier')}/>

                    </div>
                    <div className="form-group">
                        <textarea className="form-control form-control-lg" placeholder="Project Description"
                        name="description"
                        value={state.description}
                        onChange={handleChangeDescription('description')}></textarea>
                    </div>
                    <h6>Start Date</h6>
                    <div className="form-group">
                        <input type="date" className="form-control form-control-lg" name="start_date"  
                        value={state.start_date}
                        onChange={handleChangeStart('start_date')}/>
                    </div>
                    <h6>Estimated End Date</h6>
                    <div className="form-group">
                        <input type="date" className="form-control form-control-lg" name="end_date"
                        value={state.end_date}
                        onChange={handleChangeEnd('end_date')} />
                    </div>

                    <input type="submit" className="btn btn-primary btn-block mt-4" />
                </form>
            </div>
        </div>
    </div>
</div>

  )
}

export default ProjectForm
