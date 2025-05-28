import logo from './logo.svg';
import React from "react";
import './App.css';
import Header from './components/header';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Main from './components/main';

function App() {
  return (
       <Router>
      <Routes>
        {/* <Route path="/" element={<Main/>} />          */}
        <Route path="/header" element={<Header/>} />   
               <Route path="/AISeller" element={<Main/>} />  
      
      </Routes>
    </Router>
  
  );
}

export default App;
