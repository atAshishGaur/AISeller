import logo from './logo.svg';
import React from "react";
import './App.css';
import Header from './components/header';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Main from './components/main';

function App() {
  return (
       <Router>
      <Routes>
        {/* <Route path="/" element={<Main/>} />          */}
        <Route path="/header" element={<Header/>} />   
        <Route path="/" element={<Main/>} />  
      
      </Routes>
    </Router>
  
  );
}

export default App;
