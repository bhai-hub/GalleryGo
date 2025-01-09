import logo from './logo.svg';
import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './Pages/Home';
import Login from './Pages/Login';
import Landing from './Pages/Landing';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/landing' element={<Landing />} />
      </Routes>
    </>
  );
}

export default App;
