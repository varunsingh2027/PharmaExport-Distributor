import React from 'react';
import './GlobalPresence.css';

const GlobalPresence = () => {
  return (
    <section className="global-presence" id="global-presence">
      <div className="container">
        <div className="section-header">
          <h2>Global Presence</h2>
          <p className="tagline">Connecting India's Pharma Strength to the World</p>
        </div>
        
        <div className="world-map-container">
          <div className="world-map">
            <div className="region-marker middle-east">
              <div className="marker-dot"></div>
              <div className="region-info">
                <h4>Middle East 🌟</h4>
                <p>Supplying affordable generics & OTC products</p>
              </div>
            </div>
            
            <div className="region-marker africa">
              <div className="marker-dot"></div>
              <div className="region-info">
                <h4>Africa 🌍</h4>
                <p>Partnering in healthcare access & essential medicines</p>
              </div>
            </div>
            
            <div className="region-marker latin-america">
              <div className="marker-dot"></div>
              <div className="region-info">
                <h4>Latin America 🌎</h4>
                <p>Strong network for APIs & specialty products</p>
              </div>
            </div>
            
            <div className="region-marker asia">
              <div className="marker-dot"></div>
              <div className="region-info">
                <h4>Asia 🌏</h4>
                <p>Reliable sourcing for hospitals & bulk buyers</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="expansion-note">
          <p><strong>🚀 Expanding Markets:</strong> Actively building partnerships in Europe & CIS nations.</p>
          <p className="motto">"Wherever there's a need for affordable healthcare, Medco is ready to deliver."</p>
        </div>
      </div>
    </section>
  );
};

export default GlobalPresence;
