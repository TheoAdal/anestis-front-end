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

//   import React, { useState, useEffect } from "react";
// import { useParams, useNavigate, Link } from "react-router-dom";
// // import axios from "axios";
// import { useTranslation } from "react-i18next";
// // import "../HomePage/HomePageStyles.scss";
// import "./ProjectStyles.scss";

// import f1 from "../../images/f1.jpg";
// import f2 from "../../images/f2.jpg";
// import f3 from "../../images/f3.jpg";
// import f4 from "../../images/f4.jpg";
// import f5 from "../../images/f5.jpg";

// const ProjectsGrid = () => {
//   const { category } = useParams();
//   const navigate = useNavigate();
//   const { t } = useTranslation();
//   const [projects, setProjects] = useState([]);
//   const [filterCategory, setFilterCategory] = useState("Show all");

//   // const validCategories = [
//   //   "hotels",
//   //   "houses",
//   //   "stores",
//   //   "offices",
//   //   "apartments",
//   // ]; // Add your valid categories here
//   const categories = [
//     t("projects.filters.all"),
//     t("projects.filters.hotels"),
//     t("projects.filters.houses"),
//     t("projects.filters.stores"),
//   ];

//   useEffect(() => {
//     // if (!validCategories.includes(category)) {
//     //   // Redirect to 404 page if the category is invalid
//     //   // navigate("/404");
//     //   return;
//     // }

//     // const fetchProjects = async () => {
//     //   try {
//     //     const response = await axios.get(
//     //       `http://localhost:5000/getprojects/getallspecific/${category}`
//     //     );
//     //     setProjects(response.data);
//     //   } catch (error) {
//     //     console.error("Error fetching projects:", error);
//     //   }
//     // };

//     // if (category) {
//     //   fetchProjects();
//     // }

//     setProjects([
//       {
//         title: "Project 1",
//         category: "Houses",
//         name: "1",
//         description: "This is a description for project 1",
//         images: [f1],
//       },
//       {
//         title: "Project 2",
//         category: "Houses",
//         name: "2",
//         description: "This is a description for project 2",
//         images: [f2],
//       },
//       {
//         title: "Project 3",
//         category: "Hotels",
//         name: "3",
//         description: "This is a description for project 3",
//         images: [f3],
//       },
//       {
//         title: "Project 4",
//         category: "Hotels",
//         name: "4",
//         description: "This is a description for project 4",
//         images: [f4],
//       },
//       {
//         title: "Project 5",
//         category: "Stores",
//         name: "5",
//         description: "This is a description for project 5",
//         images: [f5],
//       },
//       {
//         title: "Project 6",
//         category: "Stores",
//         name: "6",
//         description: "This is a description for project 6",
//         images: [f1],
//       },
//       {
//         title: "Project 7",
//         category: "Houses",
//         name: "7",
//         description: "This is a description for project 7",
//         images: [f2],
//       },
//       {
//         title: "Project 8",
//         category: "Houses",
//         name: "8",
//         description: "This is a description for project 8",
//         images: [f3],
//       },
//       {
//         title: "Project 9",
//         category: "Hotels",
//         name: "9",
//         description: "This is a description for project 9",
//         images: [f4],
//       },
//     ]);
//   }, [category, navigate]);

//   return (
//     <div className="projects-grid-container">
//       <div className="flex flex-wrap justify-center">
//         {categories.map((category, index) => (
//           <span
//             key={index}
//             onClick={() => setFilterCategory(category)}
//             className={`text-gray-500 hover:text-gray-400  mr-8 cursor-pointer transition-colors duration-300 ease-in-out
//             ${
//               filterCategory === category
//                 ? "text-yellow-400 hover:text-yellow-400"
//                 : ""
//             }`}
//           >
//             {category}
//           </span>
//         ))}
//       </div>
//       <h1>
//         {category
//           ? t("projects.category_title", {
//               category: category.charAt(0).toUpperCase() + category.slice(1),
//             })
//           : t("projects.all_projects")}
//       </h1>
//       <div className="projects-grid">
//         {projects.length === 0 ? (
//           <p>{t("projects.loading_projects")}</p>
//         ) : (
//           projects
//             .filter(
//               (project) =>
//                 filterCategory === "Show all" ||
//                 project.category === filterCategory
//             )
//             .map((project, index) => (
//               <div key={index} className="project-card">
//                 <Link
//                   to={`/projects/${project.category}/${project.name}`}
//                   onClick={window.scrollTo(0, 0)}
//                 >
//                   <div className="image-container h-[50vh]">
//                     <img
//                       className="image"
//                       src={project.images[0]}
//                       alt="Current slide"
//                     />
//                     <div className="overlay">
//                       <div className="text-content">
//                         <div className="title">{project.title}</div>
//                         <div className="description">{project.description}</div>
//                       </div>
//                     </div>
//                   </div>
//                 </Link>
//               </div>
//             ))
//         )}
//       </div>
//     </div>
//   );
// };

// export default ProjectsGrid;
