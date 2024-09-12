import React, { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import axios from "axios";
import { useTranslation } from "react-i18next";
import "../HomePage/HomePageStyles.scss";
import "./ProjectStyles.scss";

import f1 from "../../images/f1.jpg";
import f2 from "../../images/f2.jpg";
import f3 from "../../images/f3.jpg";
import f4 from "../../images/f4.jpg";
import f5 from "../../images/f5.jpg";

const validCategories = ["hotels", "houses", "stores", "offices", "apartments"]; // Add your valid categories here
const categories = ["Show all", "Houses", "Hotels", "Stores"];

const ProjectsGrid = () => {
  const { category } = useParams();
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [projects, setProjects] = useState([]);
  const [filterCategory, setFilterCategory] = useState("Show all");

  useEffect(() => {
    // if (!validCategories.includes(category)) {
    //   // Redirect to 404 page if the category is invalid
    //   // navigate("/404");
    //   return;
    // }

    // const fetchProjects = async () => {
    //   try {
    //     const response = await axios.get(
    //       `http://localhost:5000/getprojects/getallspecific/${category}`
    //     );
    //     setProjects(response.data);
    //   } catch (error) {
    //     console.error("Error fetching projects:", error);
    //   }
    // };

    // if (category) {
    //   fetchProjects();
    // }

    setProjects([
      {
        title: "Project 1",
        category: "Houses",
        name: "1",
        description: "This is a description for project 1",
        images: [f1],
      },
      {
        title: "Project 2",
        category: "Houses",
        name: "2",
        description: "This is a description for project 2",
        images: [f2],
      },
      {
        title: "Project 3",
        category: "Hotels",
        name: "3",
        description: "This is a description for project 3",
        images: [f3],
      },
      {
        title: "Project 4",
        category: "Hotels",
        name: "4",
        description: "This is a description for project 4",
        images: [f4],
      },
      {
        title: "Project 5",
        category: "Stores",
        name: "5",
        description: "This is a description for project 5",
        images: [f5],
      },
      {
        title: "Project 6",
        category: "Stores",
        name: "6",
        description: "This is a description for project 6",
        images: [f1],
      },
      {
        title: "Project 7",
        category: "Houses",
        name: "7",
        description: "This is a description for project 7",
        images: [f2],
      },
      {
        title: "Project 8",
        category: "Houses",
        name: "8",
        description: "This is a description for project 8",
        images: [f3],
      },
      {
        title: "Project 9",
        category: "Hotels",
        name: "9",
        description: "This is a description for project 9",
        images: [f4],
      },
    ]);
  }, [category, navigate]);

  return (
    <div className="projects-grid-container">
      {/* {filterCategory} */}
      <div className="flex flex-wrap justify-center">
        {categories.map((category, index) => (
          <span
            key={index}
            onClick={() => setFilterCategory(category)}
            className={`text-gray-500 hover:text-gray-400  mr-8 cursor-pointer transition-colors duration-300 ease-in-out 
            ${
              filterCategory === category
                ? "text-yellow-400 hover:text-yellow-400"
                : ""
            }`}
          >
            {category}
          </span>
        ))}
      </div>
      <h1>
        {category
          ? t("projects.category_title", {
              category: category.charAt(0).toUpperCase() + category.slice(1),
            })
          : t("projects.all_projects")}
      </h1>
      <div className="projects-grid">
        {projects.length === 0 ? (
          <p>{t("projects.loading_projects")}</p>
        ) : (
          projects
            .filter(
              (project) =>
                filterCategory === "Show all" ||
                project.category === filterCategory
            )
            .map((project, index) => (
              <div key={index} className="project-card h-[40vh]">
                <Link to={`/projects/${project.category}/${project.name}`}>
                  <div className="image-container h-[50vh]">
                    <img
                      className="image"
                      src={project.images[0]}
                      alt="Current slide"
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
    </div>
  );
};

export default ProjectsGrid;
