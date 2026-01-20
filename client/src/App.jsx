import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'

// Navbar matrum Footer (Global Components)
import Navbar from './components/Navbar'
import Footer from './components/Footer'


import Home from './Pages/Home'
import Program from './Pages/Program'
import Trainer from './Pages/Trainer'
import Membership from './Pages/Membership'
import Storie from './Pages/Storie'
import Contact from './Pages/Contact'
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