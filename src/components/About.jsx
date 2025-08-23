import React from 'react';
import './About.css';

const About = () => {
  return (
    <section className="about-medco" id="about">
      <div className="container">
        <div className="about-content">
          <div className="about-text">
            <h2>About Medco</h2>
            <p>
              Medco is a trusted Indian pharmaceutical exporter with 
              6+ years of experience in medicine distribution. We 
              ensure regulatory compliance, quality assurance, and 
              on-time deliveries to global clients.
            </p>
            <button className="know-more-btn">Know More About Us</button>
          </div>
          <div className="about-image">
            <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop&crop=face" alt="Medco Leadership" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
