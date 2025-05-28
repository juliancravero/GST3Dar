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
import Footer from './components/Footer';


function App() {

  const [menuAbierto, setMenuAbierto] = useState(false);


 const toggleMenu = () => {
    setMenuAbierto(!menuAbierto)
  }

  return (
      <Router>
        <Navbar />

        {/* Este div es el que centra TODO */}
        <div className="layout">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
          </Routes>
        </div>

        <Footer />
      </Router>
    );
}

export default App

