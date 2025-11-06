import React from 'react';
import './HeroSection.css';
import heroImage from '../assets/heroImage.png';

function HeroSection() {
  return (
    <section className="hero-section text-center">
      <div className="container">
        <h1 className="hero-heading">
          Your <span className="highlight-purple">Hobby</span>, Your <span className="highlight-blue">Community...</span>
        </h1>
        <button className="btn get-started-btn mt-3">Get started</button>

        <div className="hero-image mt-5">
          <img src={heroImage} alt="Hobby community illustration" className="img-fluid" />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
