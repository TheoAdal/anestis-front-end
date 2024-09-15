import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import './ProjectEditList.scss';

const ProjectEditList = () => {
  const [projects, setProjects] = useState([]);

  // Fetch all projects from the backend
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get("http://localhost:5000/getprojects/getall");
        setProjects(response.data);
      } catch (err) {
        console.error("Error fetching projects:", err);
      }
    };

    fetchProjects();
  }, []);

  return (
    <div className="project-edit-list">
      <h2>All Projects</h2>
      <ul>
        {projects.map((project) => (
          <li key={project._id}>
            <Link to={`/editproject/${project._id}`}>{project.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectEditList;
