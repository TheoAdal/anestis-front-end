import React, { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import axios from "axios";
import { useTranslation } from "react-i18next";
import "./ProjectStyles.scss";

const validCategories = ["hotels", "houses", "stores", "offices", "apartments"]; // Add your valid categories here

const ProjectsGrid = () => {
  const { category } = useParams();
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [projects, setProjects] = useState([]);
  const [error, setError] = useState(null); // Error state
  const [selectedCategory, setSelectedCategory] = useState(category || "all"); // Initialize with category from URL

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/getprojects/getall`
        );
        //http://localhost:5000/getprojects/getall
        //http://localhost:5000/getprojects/getallspecific/${category}
        setProjects(response.data);
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    };

    fetchProjects();
  }, []);

  // Function to handle category selection
  const handleCategoryChange = (cat) => {
    setSelectedCategory(cat);
  };

  // Filter projects based on the selected category
  const filteredProjects =
    selectedCategory === "all"
      ? projects
      : projects.filter(
          (project) => project.category.toLowerCase() === selectedCategory
        );

  // Get unique categories from projects
  const uniqueCategories = [
    ...new Set(projects.map((project) => project.category.toLowerCase())),
  ];

  return (
    <div className="projects-grid-container">
      <div className="flex flex-wrap justify-center">
        <div className="category-filter">
          <span
            onClick={() => handleCategoryChange("all")}
            className={`filter-option ${
              selectedCategory === "all" ? "active" : ""
            }`}
          >
            {t("projects.filters.all")}
          </span>
          {validCategories.map((cat) => {
            // Only show categories that exist in the projects
            if (uniqueCategories.includes(cat)) {
              return (
                <span
                  key={cat}
                  onClick={() => handleCategoryChange(cat)}
                  className={`filter-option ${
                    selectedCategory === cat ? "active" : ""
                  }`}
                >
                  {t(`projects.filters.${cat}`)}
                </span>
              );
            }
            return null; // Skip rendering if no projects in this category
          })}
        </div>
      </div>
      {error ? (
        <p className="error-message">{error}</p>
      ) : (
        <div className="projects-grid">
          {filteredProjects.length === 0 ? (
            <p>{t("projects.no_projects_found")}</p>
          ) : (
            filteredProjects.map((project, index) => (
              <div key={index} className="project-card">
                <Link to={`/projects/${project.name}`}>
                  <div className="image-container h-[50vh]">
                    <img
                      src={project.images[0]}
                      alt={project.name}
                      className="image"
                    />
                    <div className="overlay">
                      <div className="text-content">
                        <div className="title">{project.title}</div>
                        <div className="description">{project.description}</div>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
};

export default ProjectsGrid;
