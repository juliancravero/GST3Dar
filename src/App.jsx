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

  const [menuAbierto, setMenuAbierto] = useState(false);


 const toggleMenu = () => {
    setMenuAbierto(!menuAbierto)
  }

  return (
    <Router>
      <Navbar menuAbierto={menuAbierto} toggleMenu={toggleMenu} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        {/* agregá más rutas si querés */}
      </Routes>

      <footer>
        <p>© 2025 GST3Dar</p>
      </footer>
    </Router>
  )
}

export default App

