import React from 'react';
import './index.css';
import { Route, Routes } from 'react-router-dom';
import Home from './routes/Home';
import Prescription from './routes/Prescription';
import Form from './routes/Form';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/prescription' element={<Prescription />} />
      <Route path='/form' element={<Form />} />
    </Routes>
  )
}

export default App
