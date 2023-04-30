import React from 'react';
import Navbar from './components/Navbar/Navbar';
import { Routes, Route } from "react-router-dom";
import Landing from './views/landing/Landing'
import Home from './views/home/Home'
import CreateGame from './views/createGame/CreateGame'
import Detail from './views/detail/Detail'
import About from './views/about/About'
import { useLocation } from 'react-router-dom';
import axios from 'axios';
axios.defaults.baseURL = 'https://pi-videogames-main-production-3885.up.railway.app/';

const App = () => {
  const location = useLocation();
  return (
    <>
      
      {location.pathname !== "/" && <Navbar />}
      <Routes>
        <Route exact path="/" element={<Landing />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/create" element={<CreateGame />} />
        <Route exact path="/videogames/:id" element={<Detail />} />
        <Route exact path="/about" element={<About />} />
      </Routes>
    </>



  );
}

export default App;
