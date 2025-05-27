import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// src/App.jsx
// src/App.jsx
import React from 'react'
import './styles.css'
import Navbar from './components/Navbar';
import Products from './pages/Products' 
import Home from './pages/Home'

function App() {

  return (
      <div className="landing">
        <img src="/logo.png" alt="GST 3D Logo" className="landing-logo" />
        <div className="under-construction">
          <span role="img" aria-label="herramienta">🔧</span> Página en construcción
        </div>
        <a
          href="https://www.instagram.com/gst3d.lat/?hl=es"
          target="_blank"
          rel="noopener noreferrer"
          className="landing-link"
        >
          Seguinos en Instagram
        </a>
      </div>
  );
}

export default App

