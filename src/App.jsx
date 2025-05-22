import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
//import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// src/App.jsx
// src/App.jsx
import React from 'react'
import './styles.css'

function App() {
  const [menuAbierto, setMenuAbierto] = useState(false)

  const toggleMenu = () => {
    setMenuAbierto(!menuAbierto)
  }

  return (
    <>
      <header className="navbar">
        <div className="logo">
          <img src="/logo.png" alt="Logo GST3D" />
        </div>


        <button className={`hamburger ${menuAbierto ? 'open' : ''}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav className={menuAbierto ? 'nav-open' : ''}>
          <ul onClick={() => setMenuAbierto(false)}>
            <li><a href="#inicio">Inicio</a></li>
            <li><a href="#quienes">Quiénes somos</a></li>
            <li><a href="#historia">Historia</a></li>
            <li><a href="#contacto">Contacto</a></li>
          </ul>
        </nav>
      </header>

      <main>
        <section id="inicio">
          <h1>Bienvenidos a GST3Dar</h1>
        </section>

        <section id="quienes">
          <h2>¿Quiénes somos?</h2>
        </section>

        <section id="historia">
          <h2>Historia</h2>
        </section>

        <section id="contacto">
          <h2>Contacto</h2>
        </section>
      </main>

      <footer>
        <p>© 2025 GST3Dar</p>
      </footer>
    </>
  )
}

export default App

