import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import DataHotel from './pages/DataHotel';
import DataApi from './pages/DataApi';

function App() {
  return (
    <>
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={ <Home/> } />
        <Route path='/dataApi' element={ <DataApi/> } />
        <Route path='/dataHotel' element={ <DataHotel/> } />
      </Routes>
    </Router>
    </>
  );
}

export default App;
