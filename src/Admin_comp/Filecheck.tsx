import React, { useState } from 'react';
import axios from 'axios';
import { BACKEND_URL } from '../config';

const FileUpload = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null); // State to hold the selected file
  const [uploadResponse, setUploadResponse] = useState<string | null>(null); // State for the response

  // Handle file selection
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setSelectedFile(event.target.files[0]);
    }
  };

  // Handle file upload
  const handleFileUpload = async () => {
    if (!selectedFile) {
      alert('Please select a file first.');
      return;
    }

    const formData = new FormData();
    formData.append('file', selectedFile);

    try {
      const response = await axios.post(`${BACKEND_URL}/images/upload`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data', // Set multipart/form-data
        },
      });
      setUploadResponse(`File uploaded successfully. Key: ${response.data.key}`);
    } catch (error) {
      console.error('Error uploading file:', error);
      setUploadResponse('Failed to upload file.');
    }
  };

  return (
    <div>
      <h2>File Upload</h2>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleFileUpload}>Upload</button>

      {uploadResponse && <p>{uploadResponse}</p>}
    </div>
  );
};

export default FileUpload;
