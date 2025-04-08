// components/Hero.js
import React, { useEffect, useRef } from 'react';
import './Hero.css';

const Hero = () => {
  const nameRef = useRef(null);
  const roleRef = useRef(null);

  useEffect(() => {
    const typeText = (element, text, speed = 10) => {
      let index = 0;
      let currentText = '';
      element.textContent = '';
      
      const typing = setInterval(() => {
        if (index < text.length) {
          // Only add character if it's different from the last character
          const nextChar = text.charAt(index);
            currentText += nextChar;
            element.textContent = currentText;
          
          index++;
        } else {
          clearInterval(typing);
        }
      }, speed);
    };

    if (nameRef.current) {
      typeText(nameRef.current, "Harshit Soni", 150);
    }
    
    setTimeout(() => {
      if (roleRef.current) {
        roleRef.current.textContent = ""; // Clear any old content
        typeText(roleRef.current, "Computer science Student & Full Stack Developer", 20);
      }
    }, 2500);
  }, []);

  return (
    <section id="hero" className="hero-section">
      <div className="section-container">
        <div className="hero-card">
          <div className="hero-container">
            <div className="hero-content">
              <div className="greeting">Hello, I'm</div>
              <h1 className="name glow-effect" ref={nameRef}></h1>
              <div className="role" ref={roleRef}></div>
              <p className="tagline">Bringing ideas to life through code.</p>
              <div className="social-links">
                <a href="https://linkedin.com/in/harshitsoni29" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-linkedin"></i>
                </a>
                <a href="https://github.com/Harshitsoni294" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-github"></i>
                </a>
                <a href="https://www.instagram.com/harshit_soni294" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="mailto:harshitsoni2026@gmail.com">
                  <i className="fas fa-envelope"></i>
                </a>
              </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0rem' }}>
              <div className="hero-image">
                <img src="/harrs.png" alt="Harshit Soni" />
              </div>
              <div style={{ 
                display: 'flex', 
                gap: '0rem',
                padding: '0rem',
                borderRadius: '8px',
              }}>
                <a href="#projects" className="btn btn-primary">See Projects</a>
                <a href="#contact" className="btn btn-secondary">Get In Touch</a>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default Hero;
