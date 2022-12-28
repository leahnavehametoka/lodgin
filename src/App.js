import React from 'react'
import { BrowserRouter, Link, Route, Router, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Home';
import Layout from './Components/Nav/Layout';
import NoPage from './Components/NoPage';
import Srearch from './Components/SearchScreen/Search';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="Srearch" element={<Srearch />} />
        
        {/* <Route path="contact" element={<Contact />} />*/}
        <Route path="*" element={<NoPage />} /> 
      </Route>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
