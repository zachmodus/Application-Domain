import React, { useState } from "react";
import Homebutton from './Homebutton';


function FileUpload() {
  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    const allowedTypes = ["application/pdf", "application/msword", "application/vnd.openxmlformats-officedocument.wordprocessingml.document"];

    if (allowedTypes.includes(selectedFile.type)) {
      setFile(selectedFile);
    } else {
      alert("Invalid file type. Only PDF and Word files are allowed.");
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (file) {
      const fileUrl = URL.createObjectURL(file);
      window.open(fileUrl, "_blank");
    }
  };

  return (
    
    <form onSubmit={handleSubmit}>
        <div>
      <h1>Hell00000o, world!</h1>
      <Homebutton />
    </div>
      <label htmlFor="file-input">
        Upload a PDF or Word document:
      </label>
      <input
        id="file-input"
        type="file"
        accept=".pdf,.doc,.docx"
        onChange={handleFileChange}
      />
      <button type="submit" disabled={!file}>
        Open
      </button>
    </form>
  );
}

export default FileUpload;
