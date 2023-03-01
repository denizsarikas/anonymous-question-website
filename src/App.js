import '../src/App.css'

import Header from '../src/components/header/Header.js'
import Login from '../src/pages/login/Login.js'
import Home from '../src/pages/home/Home.js'
import Register from '../src/pages/register/Register.js'

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';


function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <div className="main">
          <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/register" element={<Register />}/>
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
