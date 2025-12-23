import React, { useState, useEffect } from 'react';
import Mylogo from '../assets/logo.png';
import { NavLink, Link, useNavigate } from 'react-router-dom'; // 1. NavLink Import pannanum

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const checkUser = () => {
    const userName = localStorage.getItem('userName');
    if (userName) {
      setUser(userName);
    } else {
      setUser(null);
    }
  };

  useEffect(() => {
    checkUser();
    window.addEventListener('authChange', checkUser);
    return () => {
      window.removeEventListener('authChange', checkUser);
    };
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('userName');
    window.dispatchEvent(new Event("authChange"));
    setUser(null);
    setIsOpen(false);
    navigate('/Login'); 
  };

  const closeMenu = () => setIsOpen(false);

  // --- 2. Dynamic Style Function ---
  // Active ah iruntha Red (#ff2e2e), illana White (#ffffff)
  const getLinkStyle = ({ isActive }) => ({
    color: isActive ? '#ff2e2e' : '#ffffff',
    textDecoration: 'none',
    fontSize: '14px',
    fontWeight: '500',
    transition: '0.3s',
    borderBottom: isActive ? '2px solid #ff2e2e' : 'none', // Optional: Chinna underline style
    paddingBottom: '5px'
  });
  
  const btnBaseStyle = {
    padding: '8px 20px', borderRadius: '5px', fontWeight: 'bold', cursor: 'pointer',
    textDecoration: 'none', fontSize: '13px', transition: '0.3s', border: '2px solid #ff2e2e'
  };

  const loginBtnStyle = { ...btnBaseStyle, backgroundColor: 'transparent', color: '#ff2e2e' };
  const logoutBtnStyle = { ...btnBaseStyle, backgroundColor: '#ff2e2e', color: '#fff' };

  return (
    <>
      <style>{`
        @media (max-width: 768px) {
          .nav-links-container {
            display: ${isOpen ? 'flex' : 'none'} !important;
            flex-direction: column; position: absolute; top: 70px; left: 0;
            width: 100%; background-color: #111; padding: 20px 0; border-bottom: 1px solid #333; text-align: center;
          }
          .nav-links-container li { padding: 15px 0; }
          .mobile-toggle { display: flex !important; }
        }
      `}</style>

      <header style={{
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        padding: '15px 5%', background: 'rgba(0, 0, 0, 0.9)', borderBottom: '1px solid #333',
        position: 'sticky', top: 0, zIndex: 1000, width: '100%', boxSizing: 'border-box'
      }}>
        
        {/* Logo */}
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Link to="/" onClick={closeMenu}>
            <img 
              src={Mylogo} 
              alt="Gym Logo" 
              style={{ height: '60px', width: 'auto' }} 
            />
          </Link>
        </div>

        {/* 3. Nav Links using NavLink */}
        <ul className="nav-links-container" style={{
          display: 'flex', gap: '25px', listStyle: 'none', alignItems: 'center', margin: 0, padding: 0
        }}>
          <li><NavLink to="/" style={getLinkStyle} onClick={closeMenu}>Home</NavLink></li>
          <li><NavLink to="/program" style={getLinkStyle} onClick={closeMenu}>Programs</NavLink></li>
          <li><NavLink to="/trainer" style={getLinkStyle} onClick={closeMenu}>Trainers</NavLink></li>
          <li><NavLink to="/membership" style={getLinkStyle} onClick={closeMenu}>Membership</NavLink></li>
          <li><NavLink to="/storie" style={getLinkStyle} onClick={closeMenu}>Stories</NavLink></li>
          <li><NavLink to="/contact" style={getLinkStyle} onClick={closeMenu}>Contact</NavLink></li>
        </ul>

        {/* Right Side - Login/Logout Logic */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
          
          {user ? (
            <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
              <span style={{ color: '#fff', fontSize: '13px', fontWeight: 'bold' }}>HI, {user.toUpperCase()}</span>
              <button onClick={handleLogout} style={logoutBtnStyle}>
                LOGOUT
              </button>
            </div>
          ) : (
            <Link to="/Login" style={loginBtnStyle} onClick={closeMenu}
               onMouseOver={(e) => {e.target.style.background = '#ff2e2e'; e.target.style.color = '#fff'}}
               onMouseOut={(e) => {e.target.style.background = 'transparent'; e.target.style.color = '#ff2e2e'}}>
              LOGIN
            </Link>
          )}

          {/* Hamburger Menu Icon */}
          <button 
            className="mobile-toggle"
            onClick={() => setIsOpen(!isOpen)}
            style={{
              display: 'none', flexDirection: 'column', gap: '5px', background: 'none', border: 'none', cursor: 'pointer', padding: '5px'
            }}
          >
            <div style={{ width: '25px', height: '2px', background: '#fff', transform: isOpen ? 'rotate(45deg) translateY(7px)' : 'none', transition: '0.3s' }}></div>
            <div style={{ width: '25px', height: '2px', background: '#fff', opacity: isOpen ? 0 : 1, transition: '0.3s' }}></div>
            <div style={{ width: '25px', height: '2px', background: '#fff', transform: isOpen ? 'rotate(-45deg) translateY(-7px)' : 'none', transition: '0.3s' }}></div>
          </button>
        </div>
      </header>
    </>
  );
}

export default Navbar;