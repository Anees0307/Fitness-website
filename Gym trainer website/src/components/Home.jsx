import React from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import Cards from './Cards';
import Footer from './Footer';

const Home = () => {
  return (
    <div>

      <Navbar />
      <div style={{ marginTop: '900px' }}>

        <Hero />
        <Cards />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
