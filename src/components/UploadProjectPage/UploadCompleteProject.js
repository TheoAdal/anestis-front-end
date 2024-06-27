import React, { useState } from 'react';
import axios from 'axios';
import "./UploadProjectStyles.scss";

const UploadCompleteProject = () => {
    const [projectData, setProjectData] = useState({
        name: '',
        title: '',
        date: '',
        description: '',
        area: '',
        location: '',
        category: '',
        type: '',
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
          formData.append('images', file);
        }
    
        try {
          const response = await axios.post('http://localhost:5000/projects/upload-project', formData, {
            headers: {
              'Content-Type': 'multipart/form-data'
            }
          });
          console.log('Project and images uploaded successfully', response.data);
        } catch (error) {
          console.error('Error uploading project and images', error);
        }
      };
    
      return (
        <form onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Name" onChange={handleChange} required />
          <input type="text" name="title" placeholder="Title" onChange={handleChange} required />
          <input type="date" name="date" onChange={handleChange} required />
          <textarea name="description" placeholder="Description" onChange={handleChange} required />
          <input type="text" name="area" placeholder="Area" onChange={handleChange} required />
          <input type="text" name="location" placeholder="Location" onChange={handleChange} required />
          <input type="text" name="category" placeholder="Category" onChange={handleChange} required />
          <input type="text" name="type" placeholder="Type" onChange={handleChange} required />
          <input type="file" multiple onChange={handleFileChange} />
          <button type="submit">Upload Project Info and Images</button>
        </form>
      );
    };

export default UploadCompleteProject;
