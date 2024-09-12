/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { Carousel } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import ProjectsGrid from "./ProjectGrid";
import "./SpecificProjectStyles.scss";

import f1 from "../../images/f1.jpg";
import f2 from "../../images/f2.jpg";
import f3 from "../../images/f3.jpg";
import f4 from "../../images/f4.jpg";
import f5 from "../../images/f5.jpg";

const SpecificProject = () => {
  const { name } = useParams();
  const [project, setProject] = useState(null);
  const [category, setCategory] = useState(null);
  const navigate = useNavigate();
  const { t } = useTranslation();

  useEffect(() => {
    // const fetchProjectDetails = async () => {
    //   try {
    //     const response = await axios.get(
    //       `http://localhost:5000/getprojects/getspecific/${name}`
    //     );
    //     setProject(response.data);
    //     setCategory(response.data.category);
    //   } catch (error) {
    //     console.error("Error fetching project details:", error);
    //     // navigate("/404");
    //   }
    // };
    // fetchProjectDetails();

    console.log(name);
    setProject({
      title: name,
      category: "houses",
      name: `project-${name}`,
      description: `Αυτό το έργο αρχιτεκτονικής ανακαίνισης επικεντρώνεται στην 
      αναζωογόνηση μιας υπάρχουσας κατοικίας. Ο ανασχεδιασμός βελτιώνει τη λειτουργικότητα, 
      διατηρώντας ταυτόχρονα τον αρχικό χαρακτήρα του κτιρίου. Σύγχρονα υλικά και βιώσιμες πρακτικές 
      ενσωματώνονται για να βελτιώσουν την ενεργειακή απόδοση, την άνεση 
      και την αισθητική, δημιουργώντας μια αρμονική σύνθεση σύγχρονου 
      σχεδιασμού με παραδοσιακά στοιχεία.`,
      images: [f1, f3, f5],
    });
  }, [name, navigate]);

  if (!project) {
    return (
      <p>
        {t("specific_project.loading")}
        {name}
      </p>
    );
  }

  return (
    <div className="specific-project">
      <div className="flex flex-col items-start px-4">
        <h1 className="text-3xl font-mono">{project.name}</h1>
        <p className="text-gray-700 font-sans w-full md:w-1/3 text-justify mt-3">
          {project.description}
        </p>
        <div className="details-section">
          {/* <p>
            <strong>{t("specific_project.location")}:</strong>{" "}
            {project.location}
          </p>
          <p>
            <strong>{t("specific_project.area")}:</strong> {project.area}
          </p>
          <p>
            <strong>{t("specific_project.category")}:</strong>{" "}
            {project.category}
          </p>
          <p>
            <strong>{t("specific_project.date")}:</strong> {project.date}
          </p> */}
        </div>
        <div className="carousel-section flex flex-wrap">
          {project.images.map((image, index) => (
            <img
              src={image}
              alt={`Project Image ${index + 1}`}
              className="h-[50vh] mr-3 mb-3"
              key={index}
            />
          ))}
        </div>
      </div>
      <div className="border-b-2 border w-1/2 mx-auto my-32"></div>
      <div className="project-grid-section">
        <span className="text-2xl text-gray-600">
          {t("specific_project.other_projects_in", { category })}
        </span>
        <ProjectsGrid category={category} />
      </div>
    </div>
  );
};

export default SpecificProject;
