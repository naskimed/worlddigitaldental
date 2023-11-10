import React, { useState } from 'react';
import "assets/styles/RectCard.css"
import { useHistory } from 'react-router-dom'
import { Link } from 'react-dom'; 
import { createRoot } from 'react-dom';
import axios from 'axios';


export default function GC_PCI() {

    const [isFormValid, setIsFormValid] = useState(true);
    const [formError, setFormError] = useState(false); // New state variable for form errors

    const [formData, setFormData] = useState({
      firstName: '',
      lastName: '',
      dob: '',
      modelesProduire: '',
      weTransferLink: '',
    }); 
    const handleChange = (event) => {
      const { name, value } = event.target;
      setFormData({
        ...formData,
        [name]: value,
      });
    };
    
    const history = useHistory();

    const validateForm = () => {
        const {
          firstName,
          lastName,
          dob,
          modelesProduire,
          weTransferLink,
        } = formData;
      
        const requiredFields = [
          firstName,
          lastName,
          dob,
          modelesProduire,
          weTransferLink,
        ];
      
        const isFormValid = requiredFields.every((field) => field.trim() !== '');
        setIsFormValid(isFormValid);
      
        return isFormValid;
      };
      
      const handleSubmit = async () => {
        if (validateForm()) {
          try {
            // You may want to replace the URL with your actual API endpoint
            const response = await axios.post('/dashboard', formData);
    
            if (response.status === 200) {
              // Handle a successful submission, e.g., show a success message, redirect, etc.
              console.log('Form submitted successfully');
              history.push('/dashboard');
            } 
          } catch (error) {
            // Handle errors related to the API request
            console.error('An error occurred during form submission:', error);
          }
        }
        else {
          // If the form is not valid, set formError to true
          setFormError(true);
        }    
      };  

  return (
<> 

    <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
        <div className="rounded-t bg-white mb-0 px-6 py-6">
          <div className="text-center flex justify-between">
            <h6 className="text-blueGray-700 text-xl font-bold">Nouvelle Commande</h6>
          </div>
        </div>
    <br></br>
    <div className="flex flex-col my-2 lg:flex-row">
      <div className="w-full lg:w-1/2 lg:pr-3 px-6 mb-6">
        <label htmlFor="patient-first-name" className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2">
          Nom du patient
        </label>
        <input
          type="text"
          id="patient-first-name"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3"
          placeholder="Nom du patient"
        />

        <label htmlFor="patient-last-name" className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2">
          Prenom du patient
        </label>
        <input
          type="text"
          id="patient-last-name"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3"
          placeholder="Prenom du patient"
        />

      </div>

      <div className="w-full lg:w-1/2 lg:pl-3 px-6 mb-6">

      <label htmlFor="patient-dob" className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2">
            Date de naissance
          </label>
          <input
            type="date"
            id="patient-dob"
            name="dob"
            value={formData.dob}
            onChange={handleChange}
            className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3"
          />


        <label htmlFor="modeles-produire" className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2">
            Les Gouttieres a produire
          </label>
          <select
            id="modeles-produire"
            name="modelesProduire"
            value={formData.modelesProduire}
            onChange={handleChange}
            className="block appearance-none w-full bg-grey-lighter border border-grey-lighter text-grey-darker py-3 px-4 rounded"
          >
            <option value="">Choisir une option</option>
            <option value="Maxillaire">Maxillaire</option>
            <option value="Mandibulaire">Mandibulaire</option>
            <option value="Both">Les deux</option>
        </select>

      </div>
    
      {/* Other fields go here, follow the same pattern */}
    </div>
        <div className="md:w-1/2 px-6 mb-6 md:mb-0">

          <br></br>

          <label htmlFor="weTransfer-link" className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2">
            Lien du dossier des fichiers STL et DICOM uploader sur WeTransfer
          </label>
          <textarea
            id="weTransfer-link"
            name="weTransferLink"
            value={formData.weTransferLink}
            onChange={handleChange}
            rows="1"  // Adjust the number of rows as needed
            className="block appearance-none w-full bg-grey-lighter border border-grey-lighter text-grey-darker py-3 px-4 rounded"
            placeholder="Entrez le lien ici"
          />

            <br></br>

          {formError && (
          <div className="text-red-500 text-s">
            Veuillez remplir tous les champs obligatoires avant de soumettre.
          </div>
          )}

          <br></br>

            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded"
              id="submitbuttonNC"
              onClick={handleSubmit}
            >
              Envoyer
            </button>

        </div>
  </div>
</>
  );
}

 
