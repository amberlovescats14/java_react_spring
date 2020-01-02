import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import './App.css'
import Header from './components/layout/Header';
import { BrowserRouter } from 'react-router-dom'
import Router from './Router';
import Alert from './containers/AlertUtilContainer'
import AlertWarningContainer from './containers/AlertWarningContainer';

function App(props) {
  return (
    <BrowserRouter>
    <Alert />
    <AlertWarningContainer/>
    <Header/>
    <Router/>
    </BrowserRouter>
  );
}

export default App;
