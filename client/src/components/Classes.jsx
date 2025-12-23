import React from 'react';

function Classes() {
  // --- Inline Styles Objects ---
  const sectionStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '20px',
    padding: '60px 5%',
    backgroundColor: '#000',
    color: '#fff'
  };

  const introBoxStyle = {
    gridColumn: '1 / -1', 
    textAlign: 'center',
    marginBottom: '30px'
  };

  const programItemStyle = {
    position: 'relative',
    overflow: 'hidden',
    borderRadius: '10px',
    boxShadow: '0 0 20px rgba(255, 0, 0, 0.2)',
    transition: 'transform 0.3s ease',
    height: '300px', // Card height fix 
    cursor: 'pointer'
  };

  const imgStyle = {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    transition: 'transform 0.3s ease',
  };

  const overlayStyle = {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    background: 'rgba(0, 0, 0, 0.85)',
    padding: '20px',
    boxSizing: 'border-box',
    borderTop: '2px solid #ff2e2e'
  };

  const btnRedStyle = {
    backgroundColor: '#ff2e2e',
    color: '#fff',
    border: 'none',
    padding: '10px 18px',
    borderRadius: '5px',
    fontWeight: 'bold',
    cursor: 'pointer',
    fontSize: '13px',
    transition: '0.3s'
  };

  // Hover animations handle 
  const handleHover = (e, isHover) => {
    e.currentTarget.style.transform = isHover ? 'translateY(-10px)' : 'translateY(0)';
    const img = e.currentTarget.querySelector('img');
    if (img) img.style.transform = isHover ? 'scale(1.1)' : 'scale(1)';
  };

  const programs = [
    {
      title: "Functional Training",
      desc: "High-intensity functional workouts to build strength and stamina.",
      img: "https://i.pinimg.com/1200x/64/b9/99/64b9994546f3b10183af9f8ddabb84bb.jpg"
    },
    {
      title: "Fitness Bootcamp",
      desc: "Burn fat and build endurance through structured bootcamp sessions.",
      img: "https://i.pinimg.com/1200x/d1/70/4d/d1704d7aaa803fd589543284e2e36855.jpg"
    },
    {
      title: "Body Transformation",
      desc: "Achieve dramatic body transformation with guided workout plans.",
      img: "https://i.pinimg.com/736x/58/56/59/58565998af0f63df186ed0591d8e7fdd.jpg"
    },
    {
      title: "Weight Loss & Gain",
      desc: "Choose between weight loss or mass gain under expert supervision.",
      img: "https://i.pinimg.com/736x/df/1d/8a/df1d8adc0b1e92b78fb12e0c5db46925.jpg"
    },
    {
      title: "Weight Loss & Gain",
      desc: "Choose between weight loss or mass gain under expert supervision.",
      img: "https://i.pinimg.com/736x/df/1d/8a/df1d8adc0b1e92b78fb12e0c5db46925.jpg"
    },
    {
      title: "Body Transformation",
      desc: "Achieve dramatic body transformation with guided workout plans.",
      img: "https://i.pinimg.com/736x/58/56/59/58565998af0f63df186ed0591d8e7fdd.jpg"
    }
    
    
  ];

  return (
    <div style={{backgroundColor: '#000'}}>
      <section style={sectionStyle}>
        {/* Intro Section */}
        <div style={introBoxStyle}>
          <h2 style={{ fontSize: '36px', fontWeight: 'bold', margin: '0 0 15px' }}>
            Check Out Our <span style={{color: '#ff2e2e'}}>Classes</span>
          </h2>
          <p style={{ maxWidth: '750px', margin: '0 auto', fontSize: '15px', opacity: 0.8, lineHeight: '1.6' }}>
            Looking to get fit, learn to defend yourself, or start your MMA journey? 
            Combat Kinetics has the right program for you. Our classes combine scientific training 
            methods and skill-building — suitable for all fitness levels.
          </p>
        </div>

        {/* Program Cards Mapping */}
        {programs.map((prog, index) => (
          <div 
            key={index} 
            style={programItemStyle}
            onMouseOver={(e) => handleHover(e, true)}
            onMouseOut={(e) => handleHover(e, false)}
          >
            <img src={prog.img} alt={prog.title} style={imgStyle} />
            <div style={overlayStyle}>
              <h3 style={{ margin: '0 0 8px', fontSize: '18px' }}>{prog.title}</h3>
              <p style={{ fontSize: '13px', opacity: 0.8, marginBottom: '12px' }}>{prog.desc}</p>
              <button 
                style={btnRedStyle}
                onMouseOver={(e) => e.target.style.backgroundColor = '#cc2424'}
                onMouseOut={(e) => e.target.style.backgroundColor = '#ff2e2e'}
              >
                Find Out More
              </button>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}

export default Classes;