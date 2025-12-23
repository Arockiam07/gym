import React from 'react';

function Footer() {
  const isMobile = window.innerWidth <= 768;

  // Contact Section
  const contactAnimations = `
    @keyframes cardFadeIn {
      from { opacity: 0; transform: translateY(20px); }
      to { opacity: 1; transform: translateY(0); }
    }
  `;

  // --- Styles for Contact Section Only ---
  const contactWrapperStyle = {
    background: '#0a0a0a', // Dark professional theme
    padding: isMobile ? '50px 20px' : '70px 10%',
    color: '#fff',
    borderTop: '1px solid #222'
  };

  const contactGridStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '30px',
    justifyContent: 'center',
    animation: 'cardFadeIn 1s ease-out'
  };

  const contactCardStyle = {
    flex: '1',
    minWidth: '280px',
    maxWidth: isMobile ? '100%' : '480px',
    padding: '35px',
    backgroundColor: '#151515',
    borderRadius: '20px',
    border: '1px solid #333',
    transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    gap: '15px'
  };

  const iconStyle = {
    fontSize: '24px',
    color: '#ff2e2e',
    marginBottom: '5px'
  };

  const h4Style = {
    color: '#ff2e2e',
    fontSize: '18px',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    letterSpacing: '1px',
    margin: 0
  };

  const pDetailStyle = {
    fontSize: '15px',
    opacity: 0.7,
    lineHeight: '1.7',
    margin: 0
  };

  // --- Original Footer Logic (No changes to other sections) ---
  const animations = `
    ${contactAnimations}
    @keyframes footerFloat {
      0% { transform: translateY(0px); }
      50% { transform: translateY(-10px); }
      100% { transform: translateY(0px); }
    }
    @keyframes glow {
      0% { box-shadow: 0 0 5px #ff2e2e; }
      50% { box-shadow: 0 0 20px #ff2e2e; }
      100% { box-shadow: 0 0 5px #ff2e2e; }
    }
  `;

  return (
    <footer style={{ backgroundColor: '#000' }}>
      <style>{animations}</style>

      {/* Center Aligned Top Section (UNCHANGED) */}
     <div style={{
    backgroundColor: '#111', 
    padding: isMobile ? '60px 20px' : '30px 10%',
    borderTop: '1px solid #333',
    textAlign: 'center',
    color: '#fff',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  }}>
    <h2 style={{
      fontSize: isMobile ? '32px' : '48px',
      marginBottom: '20px',
      fontWeight: 'bold',
      letterSpacing: '2px',
      textTransform: 'uppercase',
      background: 'linear-gradient(to right, #fff, #ff2e2e)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent'
    }}>Let’s Talk!</h2>
    <p style={{ marginBottom: '30px', fontSize: '16px', opacity: 0.8, lineHeight: '1.6', maxWidth: '500px' }}>
      We provide fitness options suitable for everyone. <br/>
      Let's find the best plan for you today.
    </p>
    
    {/* Updated Button with onClick */}
    <button 
      onClick={() => window.location.href = '/contact'} 
      style={{
        padding: '15px 40px',
        backgroundColor: '#ff2e2e',
        color: '#fff',
        border: 'none',
        borderRadius: '50px',
        fontWeight: 'bold',
        fontSize: '16px',
        cursor: 'pointer',
        transition: '0.4s ease',
        animation: 'footerFloat 3s ease-in-out infinite, glow 3s ease-in-out infinite',
        textTransform: 'uppercase',
        letterSpacing: '1px'
      }}
      onMouseOver={(e) => {
        e.target.style.transform = 'scale(1.1)';
        e.target.style.backgroundColor = '#ff5555';
      }}
      onMouseOut={(e) => {
        e.target.style.transform = 'scale(1)';
        e.target.style.backgroundColor = '#ff2e2e';
      }}
    >
      Book a Consult
    </button>
  </div>

      {/* --- PROFESSIONAL CONTACT SECTION (EDITED) --- */}
      <div style={contactWrapperStyle}>
        <div style={contactGridStyle}>
          
          {/* HQ Card */}
          <div 
            style={contactCardStyle}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'translateY(-10px)';
              e.currentTarget.style.borderColor = '#ff2e2e';
              e.currentTarget.style.boxShadow = '0 10px 30px rgba(255, 46, 46, 0.1)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.borderColor = '#333';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            <div style={iconStyle}>📍</div>
            <h4 style={h4Style}>Our Headquarters</h4>
            <p style={pDetailStyle}>
              1 Floor, 7-3, Madley Rd, T. Nagar,<br />
              Chennai, Tamil Nadu 600017
            </p>
            <a href="#" style={{ color: '#ff2e2e', fontSize: '14px', textDecoration: 'none', fontWeight: 'bold' }}>
              Locate on Map →
            </a>
          </div>

          {/* Contact Card */}
          <div 
            style={contactCardStyle}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'translateY(-10px)';
              e.currentTarget.style.borderColor = '#ff2e2e';
              e.currentTarget.style.boxShadow = '0 10px 30px rgba(255, 46, 46, 0.1)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.borderColor = '#333';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            <div style={iconStyle}>📞</div>
            <h4 style={h4Style}>Contact Us</h4>
            <p style={{ ...pDetailStyle, fontSize: '18px', color: '#fff', fontWeight: 'bold' }}>+91 95662 08724</p>
            <p style={{ fontSize: '12px', opacity: 0.5, fontWeight: 'bold', textTransform: 'uppercase' }}>
              ALWARPET | ADYAR | PERUNGUDI | ANNA NAGAR
            </p>
            <a href="mailto:info@gym.com" style={{ color: '#ff2e2e', fontSize: '14px', textDecoration: 'none', fontWeight: 'bold' }}>
              Send an Email →
            </a>
          </div>

        </div>
      </div>

      {/* Bottom Copyright (UNCHANGED) */}
      <div style={{
        padding: '20px',
        textAlign: 'center',
        fontSize: '12px',
        backgroundColor: '#0a0a0a',
        color: '#555',
        borderTop: '1px solid #1a1a1a'
      }}>
        COPYRIGHT © 2025 – QUAD FITNESS PRIVATE LIMITED
      </div>
    </footer>
  );
}

export default Footer;