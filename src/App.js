import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Meeting from './pages/Meeting';
import Add from './pages/Add';
import Profile from './pages/Profile';
import SignUp from './pages/SignUp';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/meeting" element={ <Meeting /> } />
        <Route path="/add" element={ <Add /> } />
        <Route path="/profile" element={<Profile />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default App;
