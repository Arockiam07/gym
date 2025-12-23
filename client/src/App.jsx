import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'

// Navbar matrum Footer (Global Components)
import Navbar from './components/Navbar'
import Footer from './components/Footer'


import Home from './Pages/Home'
import Program from './pages/Program'
import Trainer from './pages/Trainer'
import Membership from './pages/Membership'
import Storie from './pages/Storie'
import Contact from './pages/Contact'
import Login from './Pages/Login'

function App() {
  return (
    <Router>
      <div className="App">

        <Navbar />


        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/program" element={<Program />} />
          <Route path="/trainer" element={<Trainer />} />
          <Route path="/membership" element={<Membership />} />
          <Route path="/storie" element={<Storie />} />
          <Route path="/contact" element={<Contact />} />
          

          <Route path="/login" element={<Login/>} />
        </Routes>


        <Footer />
      </div>
    </Router>
  )
}

export default App