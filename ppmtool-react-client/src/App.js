import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import './App.css'
import Dashboard from './components/Dashboard';
import Header from './components/layout/Header';
import { BrowserRouter } from 'react-router-dom'


function App() {
  return (
    <BrowserRouter>
    <Header/>
      <Dashboard/>
    </BrowserRouter>
  );
}

export default App;
