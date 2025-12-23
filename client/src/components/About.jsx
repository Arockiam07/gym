import React, { useState, useEffect } from 'react';

function About() {

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Styles Objects
  const aboutSectionStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: isMobile ? '30px' : '60px',

    flexDirection: isMobile ? 'column' : 'row', 
    padding: isMobile ? '40px 5%' : '80px 10%',
    backgroundColor: '#000',
    color: '#fff'
  };

  const aboutImgStyle = {
    width: '100%',
    maxWidth: isMobile ? '350px' : '500px',
    borderRadius: '15px',
    boxShadow: '0 0 30px rgba(255, 46, 46, 0.2)',
    objectFit: 'cover'
  };

  const aboutTextStyle = {
    flex: '1.2',
    textAlign: isMobile ? 'center' : 'left' 
  };

  const h2Style = {
    fontSize: isMobile ? '28px' : '36px',
    marginBottom: '20px',
    fontWeight: 'bold',
    color: '#ff2e2e',
    textTransform: 'uppercase',
    lineHeight: '1.2'
  };

  const pStyle = {
    fontSize: isMobile ? '14px' : '16px',
    opacity: 0.8,
    lineHeight: '1.8',
    marginBottom: '20px'
  };

  return (
    <div style={{ backgroundColor: '#000' }}>
      <section style={aboutSectionStyle}>
        
        {/* Top/Left Side: Image */}
        <div style={{ flex: 1, display: 'flex', justifyContent: 'center', width: '100%' }}>
          <img 
            src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSijriOKYJXYijXuiB3x6qwsaTZWAShMOtUy1b6r11M0Pg5BzFt" 
            alt="About Gym" 
            style={aboutImgStyle} 
          />
        </div>

        {/* Bottom/Right Side: Text Content */}
        <div style={aboutTextStyle}>
          <h2 style={{ color: '#fff', fontSize: isMobile ? '24px' : '30px', fontWeight: 'bold' }}>
            Welcome to <br/>
            <span style={h2Style}> ALMI_S Fitness Center</span>
          </h2>
          <p style={pStyle}>
            We offer personalized fitness programs to help you achieve your health and wellness goals. 
            Our expert trainers guide you through every step of your fitness journey, whether it's 
            strength training, cardio, or functional workouts. 
          </p>
          <p style={pStyle}>
            Join us to transform your lifestyle and unleash your full potential. ALMI_S is focused 
            on providing world-class fitness services to service members and civilians.
          </p>
          
          <div style={{ display: 'flex', justifyContent: isMobile ? 'center' : 'flex-start' }}>
            <button style={{
              padding: '12px 35px',
              backgroundColor: '#ff2e2e',
              color: '#fff',
              border: 'none',
              borderRadius: '5px',
              fontWeight: 'bold',
              cursor: 'pointer',
              fontSize: '14px'
            }}>
              Learn More
            </button>
          </div>
        </div>

      </section>
    </div>
  );
}

export default About;