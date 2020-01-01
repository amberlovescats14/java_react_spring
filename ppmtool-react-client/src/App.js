import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import './App.css'
import Header from './components/layout/Header';
import { BrowserRouter } from 'react-router-dom'
import Router from './components/Router';


function App() {
  return (
    <BrowserRouter>
    <Header/>
    <Router/>
    </BrowserRouter>
  );
}

export default App;
