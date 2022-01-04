import React from 'react';
import '../assets/css/projects.css';
import projects from '../helpers/projects';

function Projects() {
  return (
    <section className="projects-section" id="projects">
      <h2>My Projects</h2>
      <div className="card-container">
        {projects.map((project) => (
          <div className="proj-card">
            <h3>{project.name}</h3>
            <a
              href={project.url}
              target={'_blank'}
              rel="noopener noreferrer"
            >
              <img src={project.img} alt={project.name} />
            </a>
          </div>
          ))}
      </div>
    </section>
  );
}

export default Projects;
