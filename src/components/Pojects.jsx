import React, { useContext } from 'react';
import '../assets/css/projects.css';
import MyContext from '../context/MyContext';
import projects from '../helpers/projects';

function Projects() {
  const { tranlate } = useContext(MyContext)
  return (
    <section className="projects-section" id="projects">
      <h2>{tranlate ? 'Meus projetos' : 'My Projects'}</h2>
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
            <p>{project.isMobile && 'Port Mobile'}</p>
          </div>
          ))}
      </div>
    </section>
  );
}

export default Projects;
