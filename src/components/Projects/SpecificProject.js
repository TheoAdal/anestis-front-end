/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { Carousel } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import ProjectsGrid from "./ProjectGrid";
import "./SpecificProjectStyles.scss";

const SpecificProject = () => {
  const { name } = useParams();
  const [project, setProject] = useState(null);
  const [category, setCategory] = useState(null);
  const navigate = useNavigate();
  const { t } = useTranslation();

  useEffect(() => {
    const fetchProjectDetails = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/getprojects/getspecific/${name}`
        );
        setProject(response.data);
        setCategory(response.data.category);
      } catch (error) {
        console.error("Error fetching project details:", error);
        navigate("/404");
      }
    };

    fetchProjectDetails();
  }, [name, navigate]);

  if (!project) {
    return <p>{t("specific_project.loading")}</p>;
  }

  return (
    <div className="specific-project">
      <div className="carousel-section">
        <Carousel>
          {project.images.map((image, index) => (
            <Carousel.Item key={index}>
              <img src={image} alt={`Project Image ${index + 1}`} />
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
      <div className="details-section">
        <h1>{project.name}</h1>
        <p>
          {t("specific_project.description")}: {project.description}
        </p>
        <p>
          <strong>{t("specific_project.location")}:</strong> {project.location}
        </p>
        <p>
          <strong>{t("specific_project.area")}:</strong> {project.area}
        </p>
        <p>
          <strong>{t("specific_project.category")}:</strong> {project.category}
        </p>
        <p>
          <strong>{t("specific_project.date")}:</strong> {project.date}
        </p>
      </div>
      <div className="project-grid-section">
        <h2>{t("specific_project.other_projects_in", { category })}</h2>
        <ProjectsGrid category={category} />
      </div>
    </div>
  );
};

export default SpecificProject;
