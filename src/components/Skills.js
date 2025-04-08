// components/Skills.js
import React, { useEffect, useRef } from 'react';
import './Skills.css';

const Skills = () => {
  const skillsRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (skillsRef.current) {
        const skillBars = skillsRef.current.querySelectorAll('.skill-progress');
        
        skillBars.forEach(bar => {
          const rect = bar.getBoundingClientRect();
          const isVisible = rect.top < window.innerHeight && rect.bottom >= 0;
          
          if (isVisible) {
            const value = bar.getAttribute('data-value');
            bar.style.width = `${value}%`;
          }
        });
      }
    };

    window.addEventListener('scroll', handleScroll);
    setTimeout(handleScroll, 500); // Initial check
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const languages = [
    { name: "C++", level: 85 },
    { name: "Python", level: 80 },
    { name: "JavaScript", level: 75 },
    { name: "C", level: 70 },
    { name: "HTML/CSS", level: 90 }
  ];

  const frameworks = [
    { name: "React", level: 80 },
    { name: "Node.js", level: 70 },
    { name: "Express", level: 65 },
    { name: "PyTorch", level: 60 },
    { name: "Tailwind CSS", level: 75 }
  ];

  const tools = [
    { name: "Git", level: 85 },
    { name: "VS Code", level: 90 },
    { name: "MongoDB", level: 75 },
    { name: "Docker", level: 65 },
    { name: "SQL", level: 70 }
  ];

  return (
    <section id="skills" className="skills-section" ref={skillsRef}>
      <div className="section-container">
        <h2 className="section-title">Technical Skills</h2>
        <div className="skills-container">
          <div className="skills-category">
            <h3>Programming Languages</h3>
            <div className="skills-list">
              {languages.map((skill, index) => (
                <div className="skill" key={`lang-${index}`}>
                  <div className="skill-name">{skill.name}</div>
                  <div className="skill-bar">
                    <div className="skill-progress" data-value={skill.level}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="skills-category">
            <h3>Frameworks & Libraries</h3>
            <div className="skills-list">
              {frameworks.map((skill, index) => (
                <div className="skill" key={`fw-${index}`}>
                  <div className="skill-name">{skill.name}</div>
                  <div className="skill-bar">
                    <div className="skill-progress" data-value={skill.level}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="skills-category">
            <h3>Developer Tools</h3>
            <div className="skills-list">
              {tools.map((skill, index) => (
                <div className="skill" key={`tool-${index}`}>
                  <div className="skill-name">{skill.name}</div>
                  <div className="skill-bar">
                    <div className="skill-progress" data-value={skill.level}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="other-skills">
          <h3>Additional Areas of Knowledge</h3>
          <div className="skill-tags">
            <span className="skill-tag">Deep Learning</span>
            <span className="skill-tag">Computer Networks</span>
            <span className="skill-tag">Algorithms</span>
            <span className="skill-tag">Data Structures</span>
            <span className="skill-tag">System Software</span>
            <span className="skill-tag">Operating Systems</span>
            <span className="skill-tag">Database Management</span>
            <span className="skill-tag">Software Engineering</span>
            <span className="skill-tag">Computer Architecture</span>
            <span className="skill-tag">Machine Learning</span>
            <span className="skill-tag">Object-Oriented Programming</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
