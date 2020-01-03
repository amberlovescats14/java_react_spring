import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import './App.css'
import Header from './components/layout/Header';
import { BrowserRouter } from 'react-router-dom'
import Router from './Router';
import AlertUtilContainer from './containers/AlertUtilContainer'

function App(props) {
  return (
    <BrowserRouter>
    <AlertUtilContainer />
    <Header/>
    <Router/>
    </BrowserRouter>
  );
}

export default App;
