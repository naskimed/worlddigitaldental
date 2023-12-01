import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDropzone } from "react-dropzone";
import { FaCloudUploadAlt } from "react-icons/fa"; // You can import other icons as needed

const PaymentUpload = () => {
  const [uploadedFile, setUploadedFile] = useState(null);
  const history = useHistory();

  const onDrop = (acceptedFiles) => {
    // Handle the uploaded file
    const file = acceptedFiles[0];
    setUploadedFile(file);
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  const handleUpload = () => {
    // Implement the logic to send the image to the admin or backend
    // ... (replace with actual API call)

    // For demonstration purposes, let's assume the upload was successful
    alert("Image uploaded successfully!");

    // Redirect to a success page or any other page as needed
    history.push("/user/confirmed");
  };

  const buttonStyle = {
    backgroundColor: uploadedFile ? "#4CAF50" : "#ddd", // Green when checked, gray when unchecked
    color: uploadedFile ? "white" : "#555", // White text when checked, dark gray text when unchecked
    cursor: uploadedFile ? "pointer" : "not-allowed", // Pointer cursor when checked, not-allowed when unchecked
  };


  return (
    <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded bg-white">

    <div className="p-8 max-w-md mx-auto flex flex-col items-center">
      <h2 className="text-2xl font-bold mb-4">Téléversement de paiement</h2>

      <div {...getRootProps()} className={`dropzone ${isDragActive ? "active" : ""}`}>
        <input {...getInputProps()} />
        {isDragActive ? (
          <p>Relâchez le fichier ici ...</p>
        ) : (
          <p>
            <FaCloudUploadAlt className="text-4xl mb-2" style={{ display: "block", margin: "0 auto" }} />
            <br />
            Glissez-déposez un fichier ici, ou cliquez pour choisir un fichier
          </p>
        )}
      </div>

      {uploadedFile && (
        <div className="mt-4">
          <p>Fichier sélectionné: {uploadedFile.name}</p>
          <img src={URL.createObjectURL(uploadedFile)} alt="Uploaded" className="mt-2 max-w-full" />
        </div>
      )}
      <br/>
      <button
        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mt-4"
        style={buttonStyle}
        onClick={handleUpload}
        disabled={!uploadedFile}
      >
        Confirmer
      </button>
    </div>
    </div>
  );
};

export default PaymentUpload;
