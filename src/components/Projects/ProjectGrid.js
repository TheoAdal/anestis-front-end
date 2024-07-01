import React, { useState, useEffect } from "react";
import { useParams, useNavigate  } from "react-router-dom";
import axios from "axios";
import "./ProjectStyles.scss";

const validCategories = ["hotels", "houses", "stores", "offices", "apartments"]; // Add your valid categories here

const ProjectsGrid = () => {
  const { category } = useParams();
  const navigate = useNavigate();
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    if (!validCategories.includes(category)) {
      // Redirect to 404 page if the category is invalid
      navigate('/404');
      return;
    }
    
    const fetchProjects = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/getprojects/getall/:id/${category}`
          // `http://localhost:5000/projects/getall`
        );
        setProjects(response.data);
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    };

    if (category) {
      fetchProjects();
    }
  }, [category, navigate]);

  return (
    <div className="projects-grid-container">
      <h1>
        {category
          ? category.charAt(0).toUpperCase() + category.slice(1)
          : "All Projects"}
      </h1>
      <div className="projects-grid">
        {projects.length === 0 ? (
          <p>Loading projects...</p>
        ) : (
          projects.map((project, index) => (
            <div key={index} className="project-card">
              <img
                src={`http://localhost:5000/uploads/${project.images[0]}`}
                alt={project.title}
                className="project-thumbnail"
              />
              <div className="project-title">{project.title}</div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default ProjectsGrid;
