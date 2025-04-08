import React, { useState } from 'react';
import './Projects.css';

const Projects = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleProject = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const projects = [
    {
      title: "STAVYA (Annual Cultural Fest) Website",
      description: "Developed a responsive React website for STAVYA to showcase events and committee details. Designed an engaging UI to highlight schedules and key fest attractions.",
      technologies: ["React", "Node.js", "MongoDB"],
      link: "https://github.com/Harshitsoni294/STAVYA",
    },
    {
      title: "Personalized Speech Synthesis",
      description: "Built a text-to-speech model using Tacotron2 and HiFi-GAN for personalized voice generation. Integrated Gradio on Colab for real-time speech conversion with 95% intelligibility.",
      technologies: ["Python", "TensorFlow", "Deep Learning"],
      link: "https://colab.research.google.com/drive/1w6b1EfcpAT5zH7-ODwXFxI6n0FEsABHq#scrollTo=tkLjwe19StzY",
    },
    {
      title: "Fuzzy Intensification of Images",
      description: "Created an image enhancement algorithm using fuzzy logic to improve clarity on low-contrast images. Processed 500+ images with 30% noise reduction while preserving brightness.",
      technologies: ["Python", "OpenCV", "Fuzzy Logic"],
      link: "https://github.com/Harshitsoni294/fuzzy_intensification",
    },
    {
      title: "Auto-Entry (Smart Gate Access System)",
      description: "Developed a MERN stack-based automated gate system, reducing manual logging by 80%. Handled 10,000+ entries with secure, role-based authentication.",
      technologies: ["Python", "Automation", "Data Processing"],
      link: "https://github.com/Harshitsoni294/AutoEntry",
    }
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="section-container">
        <h2 className="section-title">Projects</h2>
        <div className="projects-container">
          {projects.map((project, index) => (
            <div key={index} className="project-wrapper">
              <div
                className="project-list-item"
                onClick={() => toggleProject(index)}
              >
                <span>{project.title}</span>
                <span className={`expand-icon ${expandedIndex === index ? 'rotated' : ''}`}>
                  ▼
                </span>
              </div>

              {expandedIndex === index && (
                <div className="project-content">
                  <div className="project-header">
                    <h3>{project.title}</h3>
                  </div>
                  <div className="project-technologies">
                    {project.technologies.map((tech, idx) => (
                      <span key={idx} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                  <p className="project-description">{project.description}</p>
                  <div className="project-links">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                    >
                      <i className="fas fa-external-link-alt"></i> View Project
                    </a>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="view-all">
          <a
            href="https://github.com/Harshitsoni294"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            View All Projects
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
