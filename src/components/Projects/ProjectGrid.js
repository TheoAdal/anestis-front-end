import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './ProjectStyles.scss';

const ProjectsGrid = () => {
    const { category } = useParams();
    const [projects, setProjects] = useState([]);
  
    useEffect(() => {
      const fetchProjects = async () => {
        try {
          const response = await axios.get(`http://localhost:5000/projects/get/${category}`);
          setProjects(response.data);
        } catch (error) {
          console.error('Error fetching projects:', error);
        }
      };
  
      if (category) {
        fetchProjects();
      }
    }, [category]);
  
    return (
      <div className="projects-grid-container">
        <h1>{category ? category.charAt(0).toUpperCase() + category.slice(1) : 'All Projects'}</h1>
        <div className="projects-grid">
          {projects.length === 0 ? (
            <p>Loading projects...</p>
          ) : (
            projects.map((project, index) => (
              <div key={index} className="project-card">
                <img src={project.images[0]} alt={project.name} className="project-thumbnail" />
                <div className="project-title">{project.name}</div>
              </div>
            ))
          )}
        </div>
      </div>
    );
  };
  
  export default ProjectsGrid;