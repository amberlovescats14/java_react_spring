import React from 'react'
import ProjectItem from './project/ProjectItem';
import CreateButton from './project/CreateButton';


const Dashboard = () => {
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
                    <ProjectItem/>
                  </div>
                </div>
              </div>
            </div>
  )
}

export default Dashboard
