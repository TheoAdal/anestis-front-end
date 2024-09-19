import React from "react";
// import axios from 'axios';
import "./HomePageStyles.scss";
import pr1 from "../../images/pr1.jpg";
import pr2 from "../../images/pr2.jpg";
import pr3 from "../../images/pr3.jpg";

const ProjectsSection = () => {
  const images = [
    {
      src: pr1,
      description: "Project 1",
    },
    {
      src: pr2,
      description: "Project 2",
    },
    {
      src: pr3,
      description: "Project 3",
    },
  ];

  return (
    <div className="projects-section">
      {images.length === 0 ? (
        <p>Loading project images...</p>
      ) : (
        images.map((image, index) => (
          <div key={index} className="project-image-container">
            <a href={`/project/`}>
              <img
                src={image.src}
                alt={image.description || `Project Image `}
                className="project-image"
              />
            </a>
          </div>
        ))
      )}
    </div>
  );
};

export default ProjectsSection;

// const ProjectsSection = () => {
//     //images from google drive folder named "Anestis-Site"
//     const images = [
//         { url: 'https://drive.google.com/uc?export=view&id=14iP-aIn87U_4cIyH7qBP2MXCY-fNAQN8', description: 'Image 1' },
//         // { url: 'https://drive.google.com/your-image-url-2.jpg', description: 'Description 2' },
//         // Add more image objects as needed
//     ];

//     return (
//         <div className="projects-section">
//             {images.length === 0 ? (
//                 <p>Loading project images...</p>
//             ) : (
//                 images.map((image, index) => (
//                     <div key={index} className="project-image-container">
//                         <a href={`/project/${index}`}>
//                             <img
//                                 src={image.url}
//                                 alt={image.description || `Project Image ${index + 1}`}
//                                 className="project-image"
//                             />
//                         </a>
//                     </div>
//                 ))
//             )}
//         </div>
//     );
// };
