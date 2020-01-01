import React from 'react'
import { Route, Switch } from 'react-router-dom'
import AddProject from './components/project/AddProject';
import Dashboard from './components/Dashboard';

const Router = () => {
  return (
    <Switch>
      <Route exact strict path='/' component={Dashboard}/>
      <Route exact strict path='/add-project' component={AddProject}/>
    </Switch>
  )
}

export default Router
