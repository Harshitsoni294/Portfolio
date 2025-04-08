import React from 'react';
import { FaGithub, FaLinkedin, FaFacebook, FaCode } from 'react-icons/fa';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero-section" id="home">
      <div className="hero-card">
        <div className="hero-container">
          <div className="hero-content">
            <h1 className="greeting">Hello, I'm</h1>
            <h1 className="name">Harsh Kumar</h1>
            <h2 className="role">Full Stack Developer</h2>
            <p className="tagline">Crafting digital experiences with code and creativity</p>
            <div className="hero-buttons">
              <a href="#contact" className="btn btn-primary">Contact Me</a>
              <a href="/resume.pdf" download className="btn btn-secondary">Download CV</a>
            </div>
            <div className="social-links">
              <a href="https://linkedin.com/in/harshitsoni29" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="https://github.com/Harshitsoni294" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-github"></i>
              </a>
              <a href="mailto:harshitsoni2026@gmail.com">
                <i className="fas fa-envelope"></i>
              </a>
            </div>
          </div>
          <div className="hero-image">
            <img src="/profile.jpg" alt="Harsh Kumar" />
          </div>
        </div>
        <div className="scroll-indicator">
          <div className="mouse">
            <div className="wheel"></div>
          </div>
          <div className="arrow">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;