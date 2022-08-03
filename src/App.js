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

  // const [user, setUser] = useState("");

  // useEffect(() => {
  //   Axios.post("/api/v1/login").then((response) => {
  //     if (response.data) {
  //       setUser(response.data);
  //     } else {
  //       alert('failed');
  //     }
  //   });
  // }, []);

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
