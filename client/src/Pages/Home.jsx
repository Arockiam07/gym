import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Gallery from '../components/Gallery';
// import Programs from '../components/Programs';
import Classes from '../components/Classes';

function Home() {
  return (
    <div style={{ backgroundColor: '#000', minHeight: '100vh' }}>
      {/* Hero section */}
      <Hero />
      
      {/* About section */}
      <About />
      
      {/* Gallery section */}
      <Gallery />

       {/* Classes section */}
      <Classes/>
      
      {/* Programs section */}
      {/* <Programs />
       */}
    </div>
  );
}

export default Home;