
import React from 'react';
import './App.css';
import { Home } from './pages/Home';
import {Heroes} from './pages/Heroes'
import {Routes, Route} from 'react-router-dom'  
import { Comics } from './pages/Comics';
import { ComicsId } from './pages/ComicsId';
function App() {

  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/> 
        <Route path='/herois/:id'  element={<Heroes/>}/>
        <Route path='/comics' element={<Comics/>}/>
        <Route path='/comics/:id' element={<ComicsId/>}/>
      </Routes>
    </div>
  );
}

export default App;
