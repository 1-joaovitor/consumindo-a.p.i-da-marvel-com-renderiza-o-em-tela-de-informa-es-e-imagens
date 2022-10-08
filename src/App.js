
import React from 'react';
import './App.css';
import { Home } from './pages/Home';
import {Heroes} from './pages/Heroes'
import {Routes, Route} from 'react-router-dom'  
function App() {

  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/> 
        <Route path='/herois/:id'  element={<Heroes/>}/>
      </Routes>
    </div>
  );
}

export default App;
