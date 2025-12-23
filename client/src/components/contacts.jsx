import React, { useRef, useEffect } from 'react'; // 1. useEffect சேர்த்துள்ளேன்
import emailjs from '@emailjs/browser';

function Contact() {
  const form = useRef();

  // --- Footer-ஐ மறைக்க Logic இங்கே ---
  useEffect(() => {
    const footer = document.querySelector("footer");
    if (footer) {
      footer.style.display = "none"; // Contact பக்கம் வந்தால் footer மறைந்துவிடும்
    }

    return () => {
      if (footer) {
        footer.style.display = "block"; // வெளியேறும் போது மீண்டும் தெரியும்
      }
    };
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();

    const SERVICE_ID = "service_n6l0hzf"; 
    const TEMPLATE_ID = "template_0dc7hft"; 
    const PUBLIC_KEY = "mzyThU5X2X24eCA72"; 

    const templateParams = {
        to_name: "Kevin", 
        from_name: form.current.user_name.value,
        email: "kevinarockiam806@gmail.com", 
        message: form.current.message.value,
        reply_to: form.current.user_email.value,
    };

    emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY)
      .then((result) => {
          console.log("SUCCESS!", result.text);
          alert("Message Sent Successfully!");
          e.target.reset();
      }, (error) => {
          console.log("FAILED...", error);
          alert("Failed: " + error.text);
      });
  };

  // --- Styles ---
  const pageWrapper = { backgroundColor: '#000', minHeight: '100vh', padding: '80px 20px', color: '#fff', fontFamily: "'Segoe UI', Roboto, sans-serif", overflow: 'hidden' };
  const containerStyle = { display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '40px', maxWidth: '1100px', margin: '0 auto', animation: 'fadeInUp 1s ease-out' };
  const cardBaseStyle = { background: 'linear-gradient(145deg, #1a1a1a, #111)', padding: '40px', borderRadius: '20px', width: '100%', maxWidth: '450px', boxShadow: '0 10px 30px rgba(0,0,0,0.7)', border: '1px solid #333', transition: '0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)' };
  const headingStyle = { fontSize: '26px', marginBottom: '30px', fontWeight: 'bold', borderLeft: '4px solid #ff2e2e', paddingLeft: '15px' };
  const contactItemStyle = { display: 'flex', alignItems: 'flex-start', gap: '15px', marginBottom: '25px', fontSize: '15px', background: 'rgba(255,255,255,0.03)', padding: '15px', borderRadius: '12px' };
  const inputStyle = { width: '100%', backgroundColor: '#000', color: '#fff', padding: '15px', border: '1px solid #333', borderRadius: '10px', marginBottom: '20px', fontSize: '14px', boxSizing: 'border-box', outline: 'none', transition: 'all 0.3s ease' };
  const btnStyle = { width: '100%', padding: '15px', backgroundColor: '#ff2e2e', color: '#fff', border: 'none', borderRadius: '10px', fontWeight: 'bold', cursor: 'pointer', fontSize: '16px', transition: '0.3s', boxShadow: '0 5px 15px rgba(255, 46, 46, 0.3)' };

  const handleCardHover = (e, isHover) => {
    e.currentTarget.style.transform = isHover ? 'translateY(-15px)' : 'translateY(0)';
    e.currentTarget.style.borderColor = isHover ? '#ff2e2e' : '#333';
  };

  return (
    <div style={pageWrapper}>
      <style>{`
        @keyframes fadeInUp { from { opacity: 0; transform: translateY(50px); } to { opacity: 1; transform: translateY(0); } }
        input:focus, textarea:focus { border-color: #ff2e2e !important; transform: translateX(5px); box-shadow: -5px 0px 0px #ff2e2e; }
      `}</style>

      <h1 style={{ textAlign: 'center', marginBottom: '60px', fontSize: '38px', letterSpacing: '2px' }}>
        REACH <span style={{ color: '#ff2e2e' }}>OUT</span>
      </h1>

      <div style={containerStyle}>
        <div style={cardBaseStyle} onMouseOver={(e) => handleCardHover(e, true)} onMouseOut={(e) => handleCardHover(e, false)}>
          <h2 style={headingStyle}>Contact Info</h2>
          <div style={contactItemStyle}><span style={{fontSize: '20px'}}>📍</span><div><b style={{color: '#ff2e2e'}}>Address</b><br />Almis Fitness Center, Madley Rd,<br /> T. Nagar, Chennai - 17</div></div>
          <div style={contactItemStyle}><span style={{fontSize: '20px'}}>📞</span><div><b style={{color: '#ff2e2e'}}>Phone</b><br />+91 98765 43210</div></div>
          <div style={contactItemStyle}><span style={{fontSize: '20px'}}>📧</span><div><b style={{color: '#ff2e2e'}}>Email</b><br />almis_fitness@gmail.com</div></div>
        </div>

        <div style={cardBaseStyle} onMouseOver={(e) => handleCardHover(e, true)} onMouseOut={(e) => handleCardHover(e, false)}>
          <h2 style={headingStyle}>Send Message</h2>
          
          <form ref={form} onSubmit={sendEmail}>
            <input type="text" name="user_name" placeholder="Full Name" style={inputStyle} required />
            <input type="email" name="user_email" placeholder="Email Address" style={inputStyle} required />
            <input type="text" name="subject" placeholder="Subject" style={inputStyle} required />
            <textarea name="message" placeholder="Your Message..." style={{...inputStyle, height: '100px', resize: 'none'}} required></textarea>
            
            <button type="submit" style={btnStyle}
              onMouseOver={(e) => { e.target.style.transform = 'scale(1.02)'; e.target.style.backgroundColor = '#e02828'; }}
              onMouseOut={(e) => { e.target.style.transform = 'scale(1)'; e.target.style.backgroundColor = '#ff2e2e'; }}>
              SEND MESSAGE
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;