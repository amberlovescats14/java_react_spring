import React, {useEffect} from 'react'
import PropTypes from 'prop-types';
import ProjectItem from './project/ProjectItem';
import CreateButton from './project/CreateButton';


const Dashboard = (props) => {
  const { projectObj, getProjects, deleteProject } = props
  useEffect(()=> {
    getProjects()
  }, [getProjects])

  return (
    <div className="projects">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <h1 className="display-4 text-center">Projects</h1>
                    <br />
                    <CreateButton/>
                    <br />
                    <hr />
                    {projectObj.projects.map((p,i)=> (
                      <ProjectItem p={p} key={i} deleteProject={deleteProject}/>
                    ))}
                  </div>
                </div>
              </div>
            </div>
  )
}

Dashboard.propTypes = {
  getProjects: PropTypes.func.isRequired,
  projectObj: PropTypes.object.isRequired,
}

export default Dashboard
