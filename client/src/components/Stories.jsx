import React from 'react';

function Stories() {
  // --- Inline Style Objects ---
  const sectionStyle = {
    textAlign: 'center',
    padding: '60px 20px',
    backgroundColor: '#000', // Gym theme black background
    color: '#fff',
    overflow: 'hidden'
  };

  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    gap: '30px',
    padding: '40px 0',
    flexWrap: 'wrap',
  };

  const cardStyle = {
    background: '#fff',
    color: '#000',
    width: '100%',
    maxWidth: '320px',
    borderRadius: '18px',
    overflow: 'hidden',
    paddingBottom: '20px',
    boxShadow: '0 10px 25px rgba(255, 46, 46, 0.3)',
    animation: 'fadeUp 1s ease forwards, floating 4s ease-in-out infinite',
    transition: 'transform 0.3s ease',
    cursor: 'pointer'
  };

  const imgContainerStyle = {
    overflow: 'hidden',
    height: '220px'
  };

  const imgStyle = {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    transition: 'transform 0.5s ease',
  };

  const btnStyle = {
    marginTop: '15px',
    padding: '10px 25px',
    backgroundColor: '#ff2e2e',
    color: '#fff',
    border: 'none',
    borderRadius: '25px',
    fontWeight: 'bold',
    cursor: 'pointer',
    fontSize: '14px',
    transition: '0.3s'
  };

  const storiesData = [
    {
      name: "Kevin Lorenz",
      desc: "A powerful transformation built through discipline, consistency, and smart training.",
      img: "https://www.shutterstock.com/image-photo/portrait-mature-man-before-after-260nw-1303099510.jpg"
    },
    {
      name: "Harry Patterson",
      desc: "Proved that results come when dedication meets the right guidance.",
      img: "https://cdn.images.express.co.uk/img/dynamic/1/590x/1679677_1.jpg"
    },
    {
      name: "Julia Smith",
      desc: "Proof that anyone can transform with the right mindset and routine.",
      img: "https://t4.ftcdn.net/jpg/15/46/91/75/360_F_1546917542_e3BdvBMI52XHfspV3RBrob9Wdt1Dh932.jpg"
    }
  ];

  return (
    <section style={sectionStyle}>
      {/* CSS Animations (Keyframes) */}
      <style>{`
        @keyframes fadeUp {
          0% { opacity: 0; transform: translateY(40px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeDown {
          0% { opacity: 0; transform: translateY(-20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes floating {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .story-card:hover img {
          transform: scale(1.1);
        }
        .story-card:hover {
          transform: translateY(-5px) !important;
          box-shadow: 0 15px 35px rgba(255, 46, 46, 0.5) !important;
        }
      `}</style>

      <h2 style={{ fontSize: '36px', margin: '20px 0 10px', animation: 'fadeDown 1s ease' }}>
        Inspirational <span style={{ color: '#ff2e2e' }}>Success Stories</span>
      </h2>
      <p style={{ opacity: 0.8, marginBottom: '40px', animation: 'fadeDown 1.3s ease' }}>
        Your fitness journey begins today.
      </p>

      <div style={containerStyle}>
        {storiesData.map((story, index) => (
          <div key={index} className="story-card" style={cardStyle}>
            <div style={imgContainerStyle}>
              <img src={story.img} alt={story.name} style={imgStyle} />
            </div>
            <h3 style={{ margin: '15px 0 5px', fontSize: '20px' }}>{story.name}</h3>
            <p style={{ margin: '10px 20px', fontSize: '14px', lineHeight: '1.5', opacity: 0.7 }}>
              {story.desc}
            </p>
            <button 
              style={btnStyle}
              onMouseOver={(e) => e.target.style.backgroundColor = '#cc2424'}
              onMouseOut={(e) => e.target.style.backgroundColor = '#ff2e2e'}
            >
              MORE
            </button>
          </div>
        ))}
      </div>

      

      
    </section>
  );
}

export default Stories;