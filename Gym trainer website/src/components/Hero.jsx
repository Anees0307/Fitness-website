import React from 'react';
import './Hero.css'; // Import the CSS file

function Hero() {
  return (
    <div className="hero">
      <div className="hero-content">
        <h1 className="hero-title">Reach Your Peak</h1>
        <p className="hero-subtitle">Achieve your fitness goals with us!</p>
        <a href="/login" className="hero-button">Transform</a>
      </div>
    </div>
  );
}

export default Hero;
