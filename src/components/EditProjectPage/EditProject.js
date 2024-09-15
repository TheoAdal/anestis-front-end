import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import './EditProject.scss';

const EditProject = () => {
  const { id } = useParams();
  const [project, setProject] = useState({});
  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");
  const [area, setArea] = useState("");
  const [location, setLocation] = useState("");
  const [category, setCategory] = useState("");
  const [type, setType] = useState("");
  const [images, setImages] = useState([]);
  const [newImages, setNewImages] = useState([]); 
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProject = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/getprojects/get/${id}`);
        setProject(response.data);
        setName(response.data.name);
        setTitle(response.data.title);
        setDate(response.data.date);
        setDescription(response.data.description);
        setArea(response.data.area);
        setLocation(response.data.location);
        setCategory(response.data.category);
        setType(response.data.type);
        setImages(response.data.images);
      } catch (error) {
        console.error("Error fetching project details:", error);
      }
    };

    fetchProject();
  }, [id]);

  const handleAddImages = async (e) => {
    const files = Array.from(e.target.files);
    setNewImages(files);

    const formData = new FormData();
    files.forEach(file => {
      formData.append("images", file);
    });

    try {
      await axios.patch(`http://localhost:5000/patchprojects/addimages/${id}`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      window.location.reload(); 
    } catch (error) {
      console.error("Error adding images:", error);
    }
  };

  const handleReplaceImage = async (e, imageIndex) => {
    const newImage = e.target.files[0];
    const formData = new FormData();
    formData.append('image', newImage);

    try {
      await axios.patch(`http://localhost:5000/patchprojects/replaceimage/${id}/${imageIndex}`, formData, {
        headers: { "Content-Type": "multipart/form-data" }
      });
      window.location.reload(); // Reload page to show updated image
    } catch (error) {
      console.error("Error replacing image:", error);
    }
  };

  const handleDeleteImage = async (imageIndex) => {
    try {
      await axios.delete(`http://localhost:5000/patchprojects/deleteimage/${id}/${imageIndex}`);
      window.location.reload(); // Reload page to reflect deleted image
    } catch (error) {
      console.error("Error deleting image:", error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const updatedData = {
      name,
      title,
      date,
      description,
      area,
      location,
      category,
      type
    };

    try {
      await axios.patch(`http://localhost:5000/patchprojects/editproject/${id}`, updatedData);
      alert("Project updated successfully");
      navigate("/2034897298456896894587547854");
    } catch (error) {
      console.error("Error updating project:", error);
    }
  };

  return (
    <div className="edit-project">
      <h2>Edit Project</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Project Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div>
          <label htmlFor="title">Project Title:</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>

        <div>
          <label htmlFor="date">Project Date:</label>
          <input
            type="date"
            id="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
        </div>

        <div>
          <label htmlFor="description">Project Description:</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>

        <div>
          <label htmlFor="area">Project Area:</label>
          <input
            type="text"
            id="area"
            value={area}
            onChange={(e) => setArea(e.target.value)}
            required
          />
        </div>

        <div>
          <label htmlFor="location">Project Location:</label>
          <input
            type="text"
            id="location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            required
          />
        </div>

        <div>
          <label htmlFor="category">Project Category:</label>
          <input
            type="text"
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
          />
        </div>

        <div>
          <label htmlFor="type">Project Type:</label>
          <input
            type="text"
            id="type"
            value={type}
            onChange={(e) => setType(e.target.value)}
            required
          />
        </div>

        <div className="image-gallery">
          {images.map((image, idx) => (
            <div className="image-wrapper" key={idx}>
              <img src={image} alt={`Project image ${idx + 1}`} />
              <div className="image-overlay">
                <label htmlFor={`replace-image-${idx}`} className="btn replace-btn">Change Picture</label>
                <input
                  type="file"
                  id={`replace-image-${idx}`}
                  style={{ display: "none" }}
                  onChange={(e) => handleReplaceImage(e, idx)}
                />
                <button
                  type="button"
                  className="btn delete-btn"
                  onClick={() => handleDeleteImage(idx)}
                >
                  Delete Picture
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="add-images">
          <label htmlFor="add-images-input" className="btn add-btn">Add More Pictures</label>
          <input
            type="file"
            id="add-images-input"
            style={{ display: "none" }}
            multiple
            onChange={handleAddImages}
          />
        </div>
        <button type="submit">Save Changes</button>
      </form>
    </div>
  );
};

export default EditProject;
