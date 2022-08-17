import './App.css';
import { useState, useEffect } from 'react';
import Axios from "axios";
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Meeting from './pages/Meeting';
import Add from './pages/Add';
import Profile from './pages/Profile';
import Login from './pages/Login';

function App() {

  return (
    <div className="App">
      {/* {user} */}
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/meeting" element={ <Meeting /> } />
        <Route path="/add" element={ <Add /> } />
        <Route path="/profile" element={<Profile />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
