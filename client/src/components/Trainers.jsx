import React from 'react';

function Trainers() {
  // Styles Objects
  const sectionStyle = {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '40px 20px',
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
    gap: '25px',
    backgroundColor: '#000', // Page background
    color: '#fff'
  };

  const cardStyle = {
    background: '#151515',
    padding: '20px',
    borderRadius: '15px',
    textAlign: 'center',
    border: '2px solid #222',
    transition: 'transform 0.3s ease, border-color 0.3s ease',
  };

  const imgStyle = {
    width: '100%',
    borderRadius: '10px',
    height: '220px',
    objectFit: 'cover',
    marginBottom: '15px',
    transition: 'transform 0.4s ease',
  };

  const nameStyle = {
    margin: '0 0 5px',
    fontSize: '18px',
    color: '#ff2e2e', // Primary Red
    fontWeight: 'bold',
  };

  const textStyle = {
    margin: '5px 0',
    fontSize: '13px',
    opacity: 0.8,
  };

  const bookBtnStyle = {
    marginTop: '10px',
    padding: '10px 18px',
    background: '#ff2e2e',
    color: 'white',
    border: 'none',
    cursor: 'pointer',
    borderRadius: '8px',
    fontWeight: 'bold',
    transition: '0.3s'
  };


  const handleHover = (e, isHover) => {
    e.currentTarget.style.transform = isHover ? 'translateY(-10px)' : 'translateY(0)';
    e.currentTarget.style.borderColor = isHover ? '#ff2e2e' : '#222';
  };

  // Trainer Data
  const trainerData = [
    { name: "John", role: "Strength & Conditioning Coach", time: "6 AM – 10 AM", cost: "5000", contact: "9000011111", img: "https://images.unsplash.com/photo-1552058544-f2b08422138a" },
    { name: "Emma", role: "Yoga & Flexibility Trainer", time: "10 AM – 1 PM", cost: "4500", contact: "9000022222", img: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e" },
    { name: "Alex", role: "Weight Loss Specialist", time: "2 PM – 5 PM", cost: "5500", contact: "9000033333", img: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde" },
    { name: "Raghul", role: "Cardio & HIIT Instructor", time: "5 PM – 8 PM", cost: "4800", contact: "9000044444", img: "https://images.unsplash.com/photo-1544723795-3fb6469f5b39" },
    { name: "David", role: "Zumba & Aerobics Trainer", time: "8 AM – 11 AM", cost: "4200", contact: "9000055555", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d" }
  ];

  return (
    <div style={{ backgroundColor: '#000', minHeight: '100vh' }}>
      <header style={{ textAlign: 'center', padding: '50px 0', color: '#fff' }}>
        <h1 style={{ fontSize: '32px', letterSpacing: '2px' }}>ALMI FITNESS CENTER - TRAINERS</h1>
      </header>

      <section style={sectionStyle}>
        {trainerData.map((trainer, index) => (
          <div 
            key={index} 
            style={cardStyle}
            onMouseOver={(e) => handleHover(e, true)}
            onMouseOut={(e) => handleHover(e, false)}
          >
            <img src={trainer.img} alt={trainer.name} style={imgStyle} />
            <h3 style={nameStyle}>{trainer.name}</h3>
            <p style={textStyle}>{trainer.role}</p>
            <p style={textStyle}>Timing: {trainer.time}</p>
            <p style={textStyle}>Cost: ₹{trainer.cost}/month</p>
            <p style={textStyle}>Contact: {trainer.contact}</p>
            <button style={bookBtnStyle}>Book Session</button>
          </div>
        ))}
      </section>

    </div>
  );
}

export default Trainers;