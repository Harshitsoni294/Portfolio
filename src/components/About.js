// components/About.js
import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="section-container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              I'm a Computer Science student at IIITV-ICD with a passion for developing innovative solutions. 
              My journey in tech began with programming competitions and evolved into developing full-stack applications, 
              exploring AI/ML, and organizing tech events on campus.
            </p>
            <p>
              Currently pursuing my Bachelor of Technology in Computer Science, I focus on combining 
              theoretical knowledge with practical applications to create meaningful projects.
            </p>
            
            <div className="education">
              <h3>Education</h3>
              <div className="education-card">
                <div className="education-header">
                  <h4>Bachelor of Technology in Computer Science</h4>
                  <span className="duration">November 2022 – May 2026</span>
                </div>
                <p className="institution">IIIT Vadodara (International Campus Diu)<br />Diu, India</p>
                <div className="coursework">
                  <h5>Relevant Coursework:</h5>
                  <ul className="course-list">
                    <li>Data Structures</li>
                    <li>Algorithms Analysis</li>
                    <li>Software Engineering</li>
                    <li>Database Management</li>
                    <li>Computer Architecture</li>
                    <li>OOPS</li>
                    <li>Computer Networks</li>
                    <li>Operating System</li>
                    <li>Artificial Intelligence</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="experience">
              <h3>Roles of responsibilities</h3>
              <div className="experience-card">
                <div className="experience-header">
                  <h4>Technical Committee, IIITV-ICD</h4>
                  <span className="duration">July 2024 – Present</span>
                </div>
                <p className="position">Member</p>
                <ul className="responsibilities">
                  <li>Organized and managed 5+ technical events, workshops, and hackathons</li>
                  <li>Collaborated with technical committees of 3+ IIITs for events</li>
                </ul>
              </div>
              
              <div className="experience-card">
                <div className="experience-header">
                  <h4>Essence Literary Club IIITV-ICD</h4>
                  <span className="duration">December 2023 – Present</span>
                </div>
                <p className="position">Secretary</p>
                <ul className="responsibilities">
                  <li>Organized 10+ literary events, engaging 250+ participants</li>
                  <li>Revamped club activities and increased participation by 30%</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;