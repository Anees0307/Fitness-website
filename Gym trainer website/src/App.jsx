import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import LoseBellyFat from './components/Losebelly';
import Aesthetics from './components/Aesthetics';
import AdminDashboard from './components/AdminDashboard';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/losebelly' element={<LoseBellyFat/>}></Route>
        <Route path='/aesthetics' element={<Aesthetics/>}></Route>
        <Route path='/dashboard' element={<AdminDashboard/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
