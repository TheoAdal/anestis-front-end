import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Carousel } from 'react-bootstrap';
import ProjectsGrid from './ProjectGrid'; // Assuming ProjectsGrid is in the same directory
import './SpecificProjectStyles.scss';

const SpecificProject = () => {
  const { id, name } = useParams();
  const [project, setProject] = useState(null);
  const [category, setCategory] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProjectDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/getprojects/get/0/${name}`);
        // const response = await axios.get(`http://localhost:5000/getprojects/get/${id}`);
        setProject(response.data);
        setCategory(response.data.category);
      } catch (error) {
        console.error('Error fetching project details:', error);
        // navigate('/404');
      }
    };

    fetchProjectDetails();
  }, [name, navigate]);

  if (!project) {
    return <p>Loading...</p>;
  }

  return (
    <div className="specific-project">
      <div className="carousel-section">
        <Carousel>
          {project.images.map((image, index) => (
            <Carousel.Item key={index}>
              <img src={`http://localhost:5000/uploads/${image}`} alt={`Project Image ${index + 1}`} />
            </Carousel.Item>
          ))}
        </Carousel> 
      </div>
      <div className="details-section">
        <h1>{project.name}</h1>
        <p>{project.description}</p>
        <p><strong>Location:</strong> {project.location}</p>
        <p><strong>Area:</strong> {project.area}</p>
        <p><strong>Category:</strong> {project.category}</p>
        <p><strong>Date:</strong> {project.date}</p>
      </div>
      <div className="project-grid-section">
        <h2>Other Projects in {category}</h2>
        <ProjectsGrid category={category} />
      </div>
    </div>
  );
};

export default SpecificProject;
