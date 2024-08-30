import React, { useState } from "react";
import { useNavigate } from 'react-router-dom'; 
import axios from "axios";
import "./UploadProjectStyles.scss";

const UploadCompleteProject = () => {
  const navigate = useNavigate();
  const [projectData, setProjectData] = useState({
    name: "",
    title: "",
    date: "",
    description: "",
    area: "",
    location: "",
    category: "hotels",
    type: "Hotel",
  });
  const [files, setFiles] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProjectData({ ...projectData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFiles(e.target.files);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    for (let key in projectData) {
      formData.append(key, projectData[key]);
    }
    for (let file of files) {
      formData.append("images", file);
    }

    try {
      const response = await axios.post(
        "http://localhost:5000/postprojects/upload-project",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      alert("Project and images uploaded successfully");
      navigate("/18927358297659876345987263");
    } catch (error) {
      console.error("Error uploading project and images", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="upload-project-form">
      <input
        type="text"
        name="name"
        placeholder="Name"
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="title"
        placeholder="Title"
        onChange={handleChange}
        required
      />
      <input type="date" name="date" onChange={handleChange} required />
      <textarea
        name="description"
        placeholder="Description"
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="area"
        placeholder="Area"
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="location"
        placeholder="Location"
        onChange={handleChange}
        required
      />
      <select
        name="category"
        value={projectData.category}
        onChange={handleChange}
        required
      >
        <option value="hotels">Hotels</option>
        <option value="houses">Houses</option>
        <option value="stores">Stores</option>
      </select>
      <select
        name="type"
        value={projectData.type}
        onChange={handleChange}
        required
      >
        <option value="Hotel">Hotel</option>
        <option value="House">House</option>
        <option value="Store">Store</option>
      </select>
      <input type="file" multiple onChange={handleFileChange} />
      <button type="submit">Upload Project Info and Images</button>
      {/* </div> */}
    </form>
  );
};

export default UploadCompleteProject;
