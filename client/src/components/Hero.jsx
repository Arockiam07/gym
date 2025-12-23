import React from 'react';
import { useNavigate } from 'react-router-dom'; // 1. Itha Import Pannanum

function Hero() {
  const navigate = useNavigate(); // 2. Navigate function create pannanum

  // Styles Objects
  const heroSectionStyle = {
    minHeight: '90vh',
    backgroundImage: 'url("https://images.unsplash.com/photo-1554284126-aa88f22d8b74")',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start', 
    padding: '40px 10%', 
    boxShadow: 'inset 0 0 400px rgba(0, 0, 0, 0.8)',
    textAlign: 'left', 
    color: '#fff'
  };

  const h1Style = {
    fontSize: '45px',
    lineHeight: '1.2',
    marginBottom: '20px',
    fontWeight: 'bold',
    textTransform: 'uppercase'
  };

  const pStyle = {
    margin: '15px 0 30px 0',
    fontSize: '18px',
    opacity: 0.9,
    maxWidth: '500px'
  };

  // Floating Animation Logic
  const floatAnimation = `
    @keyframes floating {
      0% { transform: translateY(0px); }
      50% { transform: translateY(-10px); }
      100% { transform: translateY(0px); }
    }
  `;

  const btnBase = {
    padding: '12px 25px',
    fontSize: '14px',
    borderRadius: '6px',
    cursor: 'pointer',
    marginRight: '15px',
    marginBottom: '10px',
    transition: '0.3s ease',
    border: 'none',
    display: 'inline-block',
    fontWeight: 'bold',
    whiteSpace: 'nowrap',
    animation: 'floating 3s ease-in-out infinite' 
  };

  const btnRedStyle = {
    ...btnBase,
    backgroundColor: '#ff2e2e',
    color: 'white'
  };

  const btnOutlineStyle = {
    ...btnBase,
    border: '2px solid white',
    backgroundColor: 'transparent',
    color: 'white',
    animationDelay: '0.5s' 
  };

  return (
    <section style={heroSectionStyle}>
      {/* CSS Keyframes-ai  */}
      <style>{floatAnimation}</style>

      <div style={{ maxWidth: '600px' }}>
        <h1 style={h1Style}>
          Transform Your Body,<br />
          <span style={{color: '#ff2e2e'}}>Transform Your Life</span>
        </h1>
        <p style={pStyle}>
          Join our expert-led training programs and achieve your fitness goals with personalized guidance from our top trainers.
        </p>
        
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
            {/* Join Now Button -> Goes to /membership */}
            <button 
              onClick={() => navigate('/membership')} // 3. Click Panna Membership pogum
              style={btnRedStyle}
              onMouseOver={(e) => {
                e.target.style.backgroundColor = '#ff5555';
                e.target.style.boxShadow = '0 10px 20px rgba(255, 46, 46, 0.4)';
              }}
              onMouseOut={(e) => {
                e.target.style.backgroundColor = '#ff2e2e';
                e.target.style.boxShadow = 'none';
              }}
            >
              Join Now
            </button>

            {/* Contact Us Button -> Goes to /contact */}
            <button 
              onClick={() => navigate('/contact')} // 4. Click Panna Contact pogum
              style={btnOutlineStyle}
              onMouseOver={(e) => {
                e.target.style.backgroundColor = 'white';
                e.target.style.color = '#ff2e2e';
              }}
              onMouseOut={(e) => {
                e.target.style.backgroundColor = 'transparent';
                e.target.style.color = 'white';
              }}
            >
              Contact Us
            </button>
        </div>
      </div>
    </section>
  );
}

export default Hero;