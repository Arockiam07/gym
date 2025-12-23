import React, { useState, useEffect } from 'react'; // 1. useEffect சேர்த்துள்ளேன்
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Register() {
  const navigate = useNavigate(); 
  const [stage, setStage] = useState('register'); 
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  // --- Footer-ஐ மறைக்க இதோ இங்கே Logic ---
  useEffect(() => {
    // உங்கள் வெப்சைட்டில் உள்ள 'footer' டேக்-ஐ கண்டுபிடிக்கும்
    const footer = document.querySelector("footer");
    
    if (footer) {
      footer.style.display = "none"; // Register பக்கம் வந்தால் footer மறையும்
    }

    // Component விட்டு வெளியேறும் போது (Unmount) மீண்டும் காட்டப்படும்
    return () => {
      if (footer) {
        footer.style.display = "block";
      }
    };
  }, []);

  // --- Theme Colors ---
  const colors = {
    primary: '#ff2e2e',
    secondary: '#cc2424',
    cardBg: '#1a1a1a',
    textLight: '#ffffff',
    inputBg: '#333',
  };

  // --- Form Submit Logic ---
  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');

    const url = `http://localhost:2525/api/${stage}`; 

    const payload = stage === 'register' 
      ? { name, email, password } 
      : { email, password };

    try {
      const response = await axios.post(url, payload);
      
      if (stage === 'register') {
        setMessage('Registration Successful! Redirecting to login...');
        setTimeout(() => {
          setStage('login');
          setMessage('');
          setName('');
        }, 2000);
      } else {
        setMessage('Login Successful! Redirecting to Home...');
        
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('userName', response.data.user.name);
        
        window.dispatchEvent(new Event("authChange"));

        setTimeout(() => {
          navigate('/'); 
        }, 1500);
      }
    } catch (error) {
      setMessage(error.response?.data?.message || 'Something went wrong. Try again.');
    }
  };

  // --- Inline Styles ---
  const pageWrapperStyle = { display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', backgroundColor: '#000', fontFamily: 'Arial' };
  const containerStyle = { width: '100%', maxWidth: '450px', backgroundColor: colors.cardBg, padding: '40px 30px', borderRadius: '15px', color: '#fff', boxShadow: '0 10px 30px rgba(0,0,0,0.5)' };
  const inputStyle = { width: '100%', padding: '12px', borderRadius: '8px', border: 'none', backgroundColor: colors.inputBg, color: '#fff', marginBottom: '15px', outline: 'none' };
  const btnStyle = { width: '100%', padding: '12px', backgroundColor: colors.primary, color: '#fff', border: 'none', borderRadius: '8px', cursor: 'pointer', fontWeight: 'bold', fontSize: '16px', transition: '0.3s' };
  const labelStyle = { fontSize: '13px', display: 'block', marginBottom: '5px', fontWeight: '600' };

  return (
    <div style={pageWrapperStyle}>
      <div style={containerStyle}>
        <header style={{ textAlign: 'center', marginBottom: '20px' }}>
          <p style={{ color: colors.primary, fontWeight: 'bold', letterSpacing: '1px' }}>START YOUR TRANSFORMATION.</p>
          {message && (
            <div style={{ 
              padding: '10px', 
              borderRadius: '5px', 
              backgroundColor: message.includes('Successful') ? 'rgba(76, 175, 80, 0.1)' : 'rgba(255, 46, 46, 0.1)',
              color: message.includes('Successful') ? '#4caf50' : '#ff2e2e',
              fontSize: '14px',
              marginTop: '10px'
            }}>
              {message}
            </div>
          )}
        </header>

        <h2 style={{ textAlign: 'center', marginBottom: '25px', textTransform: 'uppercase' }}>
          {stage === 'register' ? 'Join the Powerhouse' : 'Welcome Back'}
        </h2>

        <form onSubmit={handleSubmit}>
          {stage === 'register' && (
            <div>
              <label style={labelStyle}>Full Name</label>
              <input 
                type="text" 
                placeholder="Enter your name" 
                style={inputStyle} 
                value={name}
                onChange={(e) => setName(e.target.value)}
                required 
              />
            </div>
          )}

          <div>
            <label style={labelStyle}>Email Address</label>
            <input 
              type="email" 
              placeholder="Your email" 
              style={inputStyle} 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required 
            />
          </div>

          <div>
            <label style={labelStyle}>Password</label>
            <input 
              type="password" 
              placeholder="Your password" 
              style={inputStyle} 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required 
            />
          </div>

          <button 
            type="submit" 
            style={btnStyle}
            onMouseOver={(e) => e.target.style.backgroundColor = colors.secondary}
            onMouseOut={(e) => e.target.style.backgroundColor = colors.primary}
          >
            {stage === 'register' ? 'CREATE ACCOUNT' : 'LOG IN'}
          </button>
        </form>

        <div style={{ textAlign: 'center', marginTop: '20px', fontSize: '14px' }}>
          {stage === 'register' ? (
            <>Already a member? <span style={{ color: colors.primary, cursor: 'pointer', fontWeight: 'bold' }} onClick={() => { setStage('login'); setMessage(''); }}>Log In</span></>
          ) : (
            <>New to the team? <span style={{ color: colors.primary, cursor: 'pointer', fontWeight: 'bold' }} onClick={() => { setStage('register'); setMessage(''); }}>Sign Up</span></>
          )}
        </div>
      </div>
    </div>
  );
}

export default Register;